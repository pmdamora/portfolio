import { Enum } from '@portfolio/styles';

export class FontFamily extends Enum<string> {
  static BODY = new FontFamily('"Quattrocento", Helvetica, Arial, sans-serif');

  static HEADING = new FontFamily('"Quattrocento Sans", Helvetica, sans-serif');
}

export class FontSize extends Enum<number> {
  static XSMALL = new FontSize(14);

  static SMALL = new FontSize(16);

  static MEDIUM = new FontSize(18);

  static LARGE = new FontSize(21);

  static XLARGE = new FontSize(24);

  static XXLARGE = new FontSize(40);

  toString(): string {
    return `${parseInt(this.value, 10)}px`;
  }

  toNumber(): number {
    return this.value;
  }
}

export class FontWeight extends Enum<string> {
  static NORMAL = new FontWeight('normal');

  static BOLD = new FontWeight('700');
}
