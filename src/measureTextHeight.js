function getHighestFilledPixelPosition(pixels, width, height) {
  // Loop through each row
  for (let y = 0; y < height; y++) {
    // Loop through each column
    for (let x = 0; x < width; x++) {
      // const red = pixels[((width * y) + x) * 4];
      // const green = pixels[((width * y) + x) * 4 + 1];
      // const blue = pixels[((width * y) + x) * 4 + 2];
      const alpha = pixels[((width * y) + x) * 4 + 3];
      // First filled pixel has been found
      if (alpha > 0) return y;
    }
  }
  // Canvas is empty
  return -1;
}

function getLowestFilledPixelPosition(pixels, width, height) {
  // Loop through each row
  for (let y = height; y > 0; y--) {
    // Loop through each column
    for (let x = 0; x < width; x++) {
      // const red = pixels[((width * y) + x) * 4];
      // const green = pixels[((width * y) + x) * 4 + 1];
      // const blue = pixels[((width * y) + x) * 4 + 2];
      const alpha = data[((width * y) + x) * 4 + 3];
      // Last filled pixel has been found
      if (alpha > 0) return y;
    }
  }
  // Canvas is empty
  return -1;
}

export default function measureTextHeight(text, fontSize, fontFace) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  const sourceWidth = canvas.width;
  const sourceHeight = canvas.height;

  context.font = `${fontSize}px ${fontFace}`;

  // Place the text somewhere
  context.textAlign = 'left';
  context.textBaseline = 'top';
  context.fillText(text, 0, 0);

  // Returns an array containing the sum of all pixels in a canvas
  // * 4 (red, green, blue, alpha)
  // [pixel1Red, pixel1Green, pixel1Blue, pixel1Alpha, pixel2Red ...]
  const data = context.getImageData(0, 0, sourceWidth, sourceHeight).data;

  const highestY = getHighestFilledPixelPosition(data, sourceWidth, sourceHeight);

  const isCanvasEmpty = highestY === -1;
  if (isCanvasEmpty === true) return 0;

  const lowestY = getLowestFilledPixelPosition(data, sourceWidth, sourceHeight);

  return lowestY - highestY
}
