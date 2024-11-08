export function floydSteinbergDither(data: Uint8ClampedArray, width: number, height: number) {
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const index = (y * width * 4) + (x * 4);
        
        let oldR = data[index];
        let oldG = data[index + 1];
        let oldB = data[index + 2];
  
        let newR = (oldR > 128) ? 255 : 0;
        let newG = (oldG > 128) ? 255 : 0;
        let newB = (oldB > 128) ? 255 : 0;
  
        data[index] = newR;
        data[index + 1] = newG;
        data[index + 2] = newB;
  
        let errorR = oldR - newR;
        let errorG = oldG - newG;
        let errorB = oldB - newB;
  
        if (x < width - 1) {
          const indexRight = index + 4;
          data[indexRight] += Math.floor(errorR * 7 / 16);
          data[indexRight + 1] += Math.floor(errorG * 7 / 16);
          data[indexRight + 2] += Math.floor(errorB * 7 / 16);
        }
  
        if (y < height - 1) {
          const indexBelow = index + (width * 4);
          data[indexBelow] += Math.floor(errorR * 5 / 16);
          data[indexBelow + 1] += Math.floor(errorG * 5 / 16);
          data[indexBelow + 2] += Math.floor(errorB * 5 / 16);
  
          if (x > 0) {
            const indexBelowLeft = indexBelow - 4;
            data[indexBelowLeft] += Math.floor(errorR * 3 / 16);
            data[indexBelowLeft + 1] += Math.floor(errorG * 3 / 16);
            data[indexBelowLeft + 2] += Math.floor(errorB * 3 / 16);
          }
  
          if (x < width - 1) {
            const indexBelowRight = indexBelow + 4;
            data[indexBelowRight] += Math.floor(errorR * 1 / 16);
            data[indexBelowRight + 1] += Math.floor(errorG * 1 / 16);
            data[indexBelowRight + 2] += Math.floor(errorB * 1 / 16);
          }
        }
      }
    }
  }
  