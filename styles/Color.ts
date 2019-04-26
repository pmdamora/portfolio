import { Enum } from '@portfolio/styles';

export default class Color extends Enum<string> {
  static RED = new Color('#ed3426');

  static WHITE = new Color('#ffffff');

  static BLACK = new Color('#000000');

  static GRAY_0 = new Color('#f3f4f8');

  static GRAY_1 = new Color('#e1e5eb');

  static GRAY_2 = new Color('#c2c6cc');

  static GRAY_3 = new Color('#9ea2a8');

  static GRAY_4 = new Color('#5e5e5e');

  static GRAY_5 = new Color('#232a38');

  toRgb(): { r: number; g: number; b: number } {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    const hex = this.value.replace(shorthandRegex, function(_m, r, g, b) {
      return r + r + g + g + b + b;
    });

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        }
      : null;
  }

  withOpacity(opacity: number): string {
    const { r, g, b } = this.toRgb();
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }
}
