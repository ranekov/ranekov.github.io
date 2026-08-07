---
title: "MarkdownにHTMLを埋め込んでブログにゲームを仕込んでみた"
date: 2026-08-07 22:19 +0900
lang: ja
---
<link rel="stylesheet" href="/blog/assets/neon-bouncer.css">
<script src="/blog/assets/neon-bouncer.js"></script>
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
