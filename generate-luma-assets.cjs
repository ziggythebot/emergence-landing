const fs = require('fs');
const { createCanvas, registerFont } = require('canvas');

// Design system colors
const COLORS = {
  ink: '#251720',
  gold: '#FFD600',
  emerald: '#00D27F',
  mint: '#EAF8F5',
  surface: '#FFFFFF',
  mintGradient1: '#F2FDFB',
  mintGradient2: '#EAF8F5',
};

// Helper: Draw dot grid background
function drawDotGrid(ctx, width, height, dotSize = 1, spacing = 32, color = COLORS.ink) {
  ctx.fillStyle = color;
  for (let x = spacing; x < width; x += spacing) {
    for (let y = spacing; y < height; y += spacing) {
      ctx.fillRect(x - dotSize / 2, y - dotSize / 2, dotSize, dotSize);
    }
  }
}

// Helper: Draw mint gradient background
function drawMintGradient(ctx, width, height) {
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, COLORS.mintGradient1);
  gradient.addColorStop(1, COLORS.mintGradient2);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
}

// Helper: Draw yellow node with border (the iconic logo element)
function drawYellowNode(ctx, x, y, radius, borderWidth = 3) {
  // Yellow circle
  ctx.fillStyle = COLORS.gold;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();

  // Black border
  ctx.strokeStyle = COLORS.ink;
  ctx.lineWidth = borderWidth;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.stroke();
}

// 1. LOGO (512x512) - Minimal network graph
function generateLogo() {
  const canvas = createCanvas(512, 512);
  const ctx = canvas.getContext('2d');

  // Mint background
  ctx.fillStyle = COLORS.mint;
  ctx.fillRect(0, 0, 512, 512);

  const centerX = 256;
  const centerY = 256;

  // Network graph nodes - positioned to create an organic cluster
  const nodes = [
    { x: centerX, y: centerY - 60, r: 22, color: COLORS.gold },           // top center
    { x: centerX - 70, y: centerY - 20, r: 18, color: COLORS.emerald },   // left
    { x: centerX + 70, y: centerY - 20, r: 18, color: COLORS.emerald },   // right
    { x: centerX - 40, y: centerY + 50, r: 16, color: COLORS.gold },      // bottom left
    { x: centerX + 40, y: centerY + 50, r: 16, color: COLORS.gold },      // bottom right
  ];

  // Connections between nodes - thin lines
  const connections = [
    [0, 1], // top to left
    [0, 2], // top to right
    [1, 3], // left to bottom left
    [2, 4], // right to bottom right
    [3, 4], // bottom left to bottom right
    [1, 2], // left to right (horizontal)
  ];

  // Draw connections
  ctx.strokeStyle = COLORS.ink;
  ctx.lineWidth = 3;
  ctx.lineCap = 'round';
  connections.forEach(([i, j]) => {
    ctx.beginPath();
    ctx.moveTo(nodes[i].x, nodes[i].y);
    ctx.lineTo(nodes[j].x, nodes[j].y);
    ctx.stroke();
  });

  // Draw nodes
  nodes.forEach(node => {
    // Fill
    ctx.fillStyle = node.color;
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
    ctx.fill();

    // Border
    ctx.strokeStyle = COLORS.ink;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
    ctx.stroke();
  });

  // Save
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync('/Users/ziggy/emergence-landing/public/luma-assets/luma-logo.png', buffer);
  console.log('✓ Logo generated (512x512)');
}

// 2. SHARING IMAGE (1200x630) - Clean, simple, just "LONDON"
function generateSharingImage() {
  const canvas = createCanvas(1200, 630);
  const ctx = canvas.getContext('2d');

  // Dark background (similar to footer style)
  ctx.fillStyle = COLORS.ink;
  ctx.fillRect(0, 0, 1200, 630);

  // Dot grid overlay (lighter dots)
  ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
  for (let x = 40; x < 1200; x += 40) {
    for (let y = 40; y < 630; y += 40) {
      ctx.fillRect(x - 1, y - 1, 2, 2);
    }
  }

  // Yellow node in top left
  drawYellowNode(ctx, 100, 80, 18, 4);

  // "EMERGENCE" - Big, bold, white
  ctx.fillStyle = COLORS.surface;
  ctx.font = 'bold 110px Arial Black';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  ctx.fillText('EMERGENCE', 100, 140);

  // Date and location line - emerald green, monospace style
  ctx.fillStyle = COLORS.emerald;
  ctx.font = 'bold 32px Courier New';
  ctx.fillText('APRIL 28-30, 2026 // LONDON', 100, 270);

  // Separator line
  ctx.strokeStyle = COLORS.emerald;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(100, 330);
  ctx.lineTo(300, 330);
  ctx.stroke();

  // Subtitle - white, bolder
  ctx.fillStyle = COLORS.surface;
  ctx.font = 'bold 38px Arial Black';
  ctx.fillText("LONDON'S TECH ECOSYSTEM", 100, 380);

  // Stats in bottom right - bolder
  ctx.fillStyle = COLORS.emerald;
  ctx.font = 'bold 72px Arial Black';
  ctx.textAlign = 'right';
  ctx.fillText('100+', 1100, 450);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
  ctx.font = 'bold 22px Courier New';
  ctx.fillText('EVENTS', 1100, 530);

  ctx.fillStyle = COLORS.emerald;
  ctx.font = 'bold 72px Arial Black';
  ctx.fillText('320+', 1100, 360);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
  ctx.font = 'bold 22px Courier New';
  ctx.fillText('COMPANIES', 1100, 440);

  // Save
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync('/Users/ziggy/emergence-landing/public/luma-assets/luma-sharing.png', buffer);
  console.log('✓ Sharing image generated (1200x630)');
}

// 3. HEADER (1400x400) - Bold, geometric, clean
function generateHeader() {
  const canvas = createCanvas(1400, 400);
  const ctx = canvas.getContext('2d');

  // Mint gradient background
  drawMintGradient(ctx, 1400, 400);

  // Dot grid
  drawDotGrid(ctx, 1400, 400, 1, 32, COLORS.ink);

  // Left side: Yellow nodes and "EMERGENCE"
  const leftX = 100;

  // Two yellow nodes (network visual)
  drawYellowNode(ctx, leftX, 120, 20, 4);
  drawYellowNode(ctx, leftX + 80, 160, 14, 3);

  // Connecting line
  ctx.strokeStyle = COLORS.ink;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(leftX + 20, 120);
  ctx.lineTo(leftX + 80 - 14, 160);
  ctx.stroke();

  // "EMERGENCE" text - bolder
  ctx.fillStyle = COLORS.ink;
  ctx.font = 'bold 110px Arial Black';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillText('EMERGENCE', 220, 200);

  // Date and location
  ctx.fillStyle = COLORS.emerald;
  ctx.font = 'bold 28px Courier New';
  ctx.fillText('APRIL 28-30, 2026 // LONDON', 220, 280);

  // Right side: Network nodes pattern
  const rightStartX = 900;
  const nodes = [
    { x: rightStartX, y: 100, r: 12, color: COLORS.gold },
    { x: rightStartX + 100, y: 140, r: 8, color: COLORS.emerald },
    { x: rightStartX + 200, y: 120, r: 10, color: COLORS.gold },
    { x: rightStartX + 150, y: 220, r: 14, color: COLORS.emerald },
    { x: rightStartX + 280, y: 260, r: 8, color: COLORS.gold },
  ];

  // Draw connections
  ctx.strokeStyle = COLORS.ink;
  ctx.lineWidth = 2;
  ctx.globalAlpha = 0.3;
  for (let i = 0; i < nodes.length - 1; i++) {
    ctx.beginPath();
    ctx.moveTo(nodes[i].x, nodes[i].y);
    ctx.lineTo(nodes[i + 1].x, nodes[i + 1].y);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;

  // Draw nodes
  nodes.forEach(node => {
    ctx.fillStyle = node.color;
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = COLORS.ink;
    ctx.lineWidth = 3;
    ctx.stroke();
  });

  // Save
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync('/Users/ziggy/emergence-landing/public/luma-assets/luma-header.png', buffer);
  console.log('✓ Header generated (1400x400)');
}

// Generate all assets
console.log('Generating Luma assets...\n');
generateLogo();
generateSharingImage();
generateHeader();
console.log('\n✓ All assets generated successfully!');
