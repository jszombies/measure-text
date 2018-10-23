export default function measureTextWidth(text, fontSize, fontFace) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  context.font = `${fontSize}px ${fontFace}`;
  return context.measureText(text).width;
}
