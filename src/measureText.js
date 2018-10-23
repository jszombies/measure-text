import measureTextWidth from './measureTextWidth';
import measureTextHeight from './measureTextHeight';

export default function measureText(text, fontSize, fontFace) {
  const width = measureTextWidth(text, fontSize, fontFace);
  const height = measureTextHeight(text, fontSize, fontFace);
  return { width, height };
}
