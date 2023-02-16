const ColorAry =
  [`black`,
    `brown`,
    `red`,
    `orange`,
    `yellow`,
    `green`,
    `blue`,
    `violet`,
    `grey`,
    `white`,] as const // need "as const" for type Color
// not needed for this exercise, but this will disallow passing e.g. 'pink' to constructor
export type Color = typeof ColorAry[number]
export function decodedValue([band1, band2]: Color[]): number { return (ColorAry.indexOf(band1) * 10) + ColorAry.indexOf(band2) }

