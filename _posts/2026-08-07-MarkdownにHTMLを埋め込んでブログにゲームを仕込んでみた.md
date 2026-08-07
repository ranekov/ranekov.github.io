---
title: "MarkdownにHTMLを埋め込んでブログにゲームを仕込んでみた"
date: 2026-08-07 22:19 +0900
lang: ja
---
<style>
.nb-game-panel {
  background: #111118;
  border: 1px solid #1e1e2e;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0 2rem;
  font-family: 'Inter', sans-serif;
}

.nb-game-ui {
  display: flex;
  justify-content: center;
  gap: 28px;
  margin-bottom: 14px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
}
.nb-game-ui .nb-label { color: #555; letter-spacing: 1px; }
.nb-game-ui .nb-value { color: #00ff88; font-weight: 600; }
.nb-game-ui .nb-lives-value { color: #ff3355; font-weight: 600; }

#nb-canvas-wrap {
  display: flex;
  justify-content: center;
  width: 100%;
}

#nb-canvas {
  background: radial-gradient(ellipse at center, #14142b 0%, #08080f 100%);
  border: 1px solid #1e1e2e;
  border-radius: 8px;
  box-shadow: 0 0 24px rgba(0,255,136,0.12);
  touch-action: none;
  width: 100%;
  max-width: 480px;
  height: auto;
  aspect-ratio: 480 / 600;
  display: block;
}

.nb-game-msg {
  text-align: center;
  margin-top: 12px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: #555;
  letter-spacing: 0.5px;
}

.nb-touch-controls {
  display: none;
  gap: 10px;
  margin-top: 14px;
}

.nb-touch-btn {
  flex: 1;
  background: #0d0d14;
  border: 1px solid #1e1e2e;
  border-radius: 8px;
  color: #00ff88;
  font-family: 'JetBrains Mono', monospace;
  font-size: 22px;
  padding: 16px 0;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}
.nb-touch-btn:active {
  background: rgba(0,255,136,0.12);
  border-color: #00ff88;
}

@media (hover: none) and (pointer: coarse) {
  .nb-touch-controls { display: flex; }
  .nb-game-msg { display: none; }
}

@media (max-width: 500px) {
  .nb-game-panel { padding: 1rem; }
  .nb-game-ui { gap: 14px; font-size: 11px; }
}
</style>
<div class="nb-game-panel">
  <div class="nb-game-ui">
    <div><span class="nb-label">SCORE </span><span class="nb-value" id="nb-score">0</span></div>
    <div><span class="nb-label">HIGH </span><span class="nb-value" id="nb-highscore">0</span></div>
    <div><span class="nb-label">LIVES </span><span class="nb-lives-value" id="nb-lives">3</span></div>
    <div><span class="nb-label">LEVEL </span><span class="nb-value" id="nb-level">1</span></div>
  </div>
  <div id="nb-canvas-wrap">
    <canvas id="nb-canvas" width="480" height="600"></canvas>
  </div>
  <div class="nb-touch-controls">
    <div class="nb-touch-btn" id="nb-btn-left">◀</div>
    <div class="nb-touch-btn" id="nb-btn-right">▶</div>
  </div>
  <p class="nb-game-msg">← → キー / マウス / タッチ でパドル移動。ブロックを全部壊すとレベルアップ</p>
</div>
> ゲームはめんどいので[claude](https://claude.ai/)に作らせました
<script>
(function () {
  const canvas = document.getElementById('nb-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;

  let score = 0, lives = 3, level = 1, highscore = 0;
  const scoreEl = document.getElementById('nb-score');
  const livesEl = document.getElementById('nb-lives');
  const levelEl = document.getElementById('nb-level');
  const highscoreEl = document.getElementById('nb-highscore');

  const paddle = { w: 90, h: 12, x: W / 2 - 45, y: H - 30, speed: 8, dx: 0 };

  function newBall() {
    return {
      x: W / 2, y: H - 50, r: 8,
      dx: (Math.random() > 0.5 ? 1 : -1) * (3 + level * 0.3),
      dy: -(3.5 + level * 0.3)
    };
  }
  let ball = newBall();

  let blocks = [];
  const blockRows = 5, blockCols = 8;
  const blockW = 50, blockH = 18, blockPad = 6, blockOffsetTop = 50, blockOffsetLeft = 15;
  const colors = ['#ff3355', '#ff9f4d', '#ffe14d', '#00ff88', '#4de3ff'];

  function initBlocks() {
    blocks = [];
    for (let r = 0; r < blockRows; r++) {
      for (let c = 0; c < blockCols; c++) {
        blocks.push({
          x: blockOffsetLeft + c * (blockW + blockPad),
          y: blockOffsetTop + r * (blockH + blockPad),
          w: blockW, h: blockH,
          alive: true,
          color: colors[r % colors.length],
          hp: r < 2 ? 2 : 1
        });
      }
    }
  }
  initBlocks();

  let particles = [];
  function spawnParticles(x, y, color) {
    for (let i = 0; i < 8; i++) {
      particles.push({
        x, y,
        vx: (Math.random() - 0.5) * 6,
        vy: (Math.random() - 0.5) * 6,
        life: 30,
        color
      });
    }
  }

  let rightPressed = false, leftPressed = false;
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') rightPressed = true;
    if (e.key === 'ArrowLeft') leftPressed = true;
  });
  document.addEventListener('keyup', e => {
    if (e.key === 'ArrowRight') rightPressed = false;
    if (e.key === 'ArrowLeft') leftPressed = false;
  });
  canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    const mx = (e.clientX - rect.left) * (W / rect.width);
    paddle.x = Math.min(Math.max(mx - paddle.w / 2, 0), W - paddle.w);
  });
  canvas.addEventListener('touchstart', e => {
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    const tx = (e.touches[0].clientX - rect.left) * (W / rect.width);
    paddle.x = Math.min(Math.max(tx - paddle.w / 2, 0), W - paddle.w);
  }, { passive: false });
  canvas.addEventListener('touchmove', e => {
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    const tx = (e.touches[0].clientX - rect.left) * (W / rect.width);
    paddle.x = Math.min(Math.max(tx - paddle.w / 2, 0), W - paddle.w);
  }, { passive: false });

  const btnLeft = document.getElementById('nb-btn-left');
  const btnRight = document.getElementById('nb-btn-right');

  function bindHoldButton(el, onDown) {
    if (!el) return;
    const start = e => { e.preventDefault(); onDown(true); };
    const end = e => { e.preventDefault(); onDown(false); };
    el.addEventListener('touchstart', start, { passive: false });
    el.addEventListener('touchend', end, { passive: false });
    el.addEventListener('touchcancel', end, { passive: false });
    el.addEventListener('mousedown', start);
    el.addEventListener('mouseup', end);
    el.addEventListener('mouseleave', end);
  }

  bindHoldButton(btnLeft, held => { leftPressed = held; });
  bindHoldButton(btnRight, held => { rightPressed = held; });

  let gameOver = false;

  function resetBallAndPaddle() {
    paddle.x = W / 2 - paddle.w / 2;
    ball = newBall();
  }

  function update() {
    if (gameOver) return;

    if (rightPressed) paddle.x += paddle.speed;
    if (leftPressed) paddle.x -= paddle.speed;
    paddle.x = Math.min(Math.max(paddle.x, 0), W - paddle.w);

    ball.x += ball.dx;
    ball.y += ball.dy;

    if (ball.x - ball.r < 0 || ball.x + ball.r > W) ball.dx *= -1;
    if (ball.y - ball.r < 0) ball.dy *= -1;

    if (ball.y + ball.r > paddle.y &&
        ball.y + ball.r < paddle.y + paddle.h &&
        ball.x > paddle.x && ball.x < paddle.x + paddle.w &&
        ball.dy > 0) {
      const hitPos = (ball.x - (paddle.x + paddle.w / 2)) / (paddle.w / 2);
      ball.dx = hitPos * 5;
      ball.dy = -Math.abs(ball.dy);
    }

    if (ball.y - ball.r > H) {
      lives--;
      livesEl.textContent = lives;
      if (lives <= 0) {
        gameOver = true;
      } else {
        resetBallAndPaddle();
      }
    }

    let aliveCount = 0;
    for (const b of blocks) {
      if (!b.alive) continue;
      aliveCount++;
      if (ball.x + ball.r > b.x && ball.x - ball.r < b.x + b.w &&
          ball.y + ball.r > b.y && ball.y - ball.r < b.y + b.h) {
        ball.dy *= -1;
        b.hp--;
        if (b.hp <= 0) {
          b.alive = false;
          spawnParticles(b.x + b.w / 2, b.y + b.h / 2, b.color);
          score += 10 * level;
        } else {
          score += 3;
        }
        scoreEl.textContent = score;
        if (score > highscore) {
          highscore = score;
          highscoreEl.textContent = highscore;
        }
        break;
      }
    }

    if (aliveCount === 0) {
      level++;
      levelEl.textContent = level;
      initBlocks();
      resetBallAndPaddle();
    }

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.life--;
    });
    particles = particles.filter(p => p.life > 0);
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    ctx.fillStyle = '#ffffff15';
    for (let i = 0; i < 40; i++) {
      const sx = (i * 97) % W;
      const sy = (i * 53 + (Date.now() / 50)) % H;
      ctx.fillRect(sx, sy, 1.5, 1.5);
    }

    blocks.forEach(b => {
      if (!b.alive) return;
      ctx.fillStyle = b.color;
      ctx.shadowColor = b.color;
      ctx.shadowBlur = b.hp > 1 ? 15 : 6;
      ctx.fillRect(b.x, b.y, b.w, b.h);
      ctx.shadowBlur = 0;
      if (b.hp > 1) {
        ctx.strokeStyle = '#ffffffaa';
        ctx.strokeRect(b.x, b.y, b.w, b.h);
      }
    });

    particles.forEach(p => {
      ctx.globalAlpha = p.life / 30;
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, 4, 4);
      ctx.globalAlpha = 1;
    });

    const grad = ctx.createLinearGradient(paddle.x, 0, paddle.x + paddle.w, 0);
    grad.addColorStop(0, '#4de3ff');
    grad.addColorStop(1, '#00ff88');
    ctx.fillStyle = grad;
    ctx.shadowColor = '#00ff88';
    ctx.shadowBlur = 12;
    ctx.fillRect(paddle.x, paddle.y, paddle.w, paddle.h);
    ctx.shadowBlur = 0;

    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.shadowColor = '#fff';
    ctx.shadowBlur = 15;
    ctx.fill();
    ctx.shadowBlur = 0;

    if (gameOver) {
      ctx.fillStyle = '#0a0a0fdd';
      ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = '#ff3355';
      ctx.font = 'bold 32px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText('GAME OVER', W / 2, H / 2 - 20);
      ctx.fillStyle = '#e0e0e0';
      ctx.font = '16px "JetBrains Mono", monospace';
      ctx.fillText('スコア: ' + score, W / 2, H / 2 + 15);
      ctx.fillStyle = '#555';
      ctx.font = '12px "JetBrains Mono", monospace';
      ctx.fillText('クリックまたはタップで再挑戦', W / 2, H / 2 + 45);
      ctx.textAlign = 'left';
    }
  }

  function loop() {
    update();
    draw();
    requestAnimationFrame(loop);
  }

  canvas.addEventListener('click', () => {
    if (gameOver) {
      score = 0; lives = 3; level = 1;
      scoreEl.textContent = score;
      livesEl.textContent = lives;
      levelEl.textContent = level;
      initBlocks();
      resetBallAndPaddle();
      gameOver = false;
    }
  });

  loop();
})();
</script>
