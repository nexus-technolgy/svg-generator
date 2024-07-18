export type SvgGeneratorParams = {
  dimensions: string;
  bgColor?: string;
  fgColor?: string;
  text?: string;
};

type SvgGeneratorInput = {
  width: number;
  height: number;
  bgColor: string;
  fgColor: string;
  fontSize: number;
  displayText: string;
};

/**
 * Generates an SVG string based on the provided parameters.
 * @params [ dimensions, bgColor?, fgColor?, text? ]
 * @example
 * const { svg, mimeType } = new SvgGenerator("100x100","f00","white","Hello+World")
 */
export class SvgGenerator {
  readonly svg: string;
  readonly mimeType = "image/svg+xml";

  constructor(...params: [string, string?, string?, string?]) {
    if (params.length < 1) {
      throw new Error("SvgGenerator requires at least one parameter");
    }
    if (params.length > 4) {
      throw new Error("SvgGenerator accepts at most dimensions, bgColor, fgColor, text");
    }
    const [dimensions, bgColor = "333", fgColor = "ddd", text] = params;
    const [width, other] = dimensions.split("x").map(Number);
    const height = other ?? width;
    const displayText = text?.replace(/\+/g, " ") || `${width} x ${height}`;
    const fontSize = Math.round(Math.max(8, Math.min(24, (3 * width) / (2 * displayText.length))));
    this.svg = this.generate({ width, height, bgColor, fgColor, fontSize, displayText });
  }

  private colorVal = (val: string): string => (/^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(val) ? `#${val}` : val);

  private generate = ({ width, height, bgColor, fgColor, fontSize, displayText }: SvgGeneratorInput): string => {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect width="${width}" height="${height}" fill="${this.colorVal(bgColor)}" /><text x="50%" y="50%" fill="${this.colorVal(fgColor)}" font-family="Arial" font-size="${fontSize}" dominant-baseline="middle" text-anchor="middle">${displayText}</text></svg>`;
  };
}
