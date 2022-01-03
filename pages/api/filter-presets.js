export const presets = [
  {
    name: 'normal',
    contrast: 100,
    brightness: 100,
    saturate: 100,
    sepia: 0,
    grayscale: 0,
    invert: 0,
    hueRotate: 0,
    opacity: 100,
    blur: 0
  },
  {
    name: 'Clearvoy',
    contrast: 100,
    brightness: 100,
    saturate: 142,
    sepia: 42,
    grayscale: 0,
    invert: 0,
    hueRotate: 0,
    opacity: 100,
    blur: 0
  },
  {
    name: 'moon',
    contrast: 100,
    brightness: 100,
    saturate: 142,
    sepia: 37,
    grayscale: 88,
    invert: 0,
    hueRotate: 0,
    opacity: 90,
    blur: 0
  },
  {
    name: 'Unreal',
    contrast: 141,
    brightness: 104,
    saturate: 278,
    sepia: 0,
    grayscale: 70,
    invert: 0,
    hueRotate: 0,
    opacity: 100,
    blur: 0
  },
  {
    name: 'Athena',
    contrast: 52,
    brightness: 117,
    saturate: 338,
    sepia: 0,
    grayscale: 32,
    invert: 0,
    hueRotate: 13,
    opacity: 100,
    blur: 0
  },
  {
    name: 'ares',
    contrast: 78,
    brightness: 100,
    saturate: 256,
    sepia: 56,
    grayscale: 0,
    invert: 0,
    hueRotate: 0,
    opacity: 100,
    blur: 0
  },
  {
    name: 'Boreas',
    contrast: 102,
    brightness: 100,
    saturate: 212,
    sepia: 62,
    grayscale: 0,
    invert: 0,
    hueRotate: 119,
    opacity: 100,
    blur: 0
  },
  {
    name: 'asteroid',
    contrast: 64,
    brightness: 98,
    saturate: 303,
    sepia: 81,
    grayscale: 0,
    invert: 0,
    hueRotate: 339,
    opacity: 100,
    blur: 0
  },
  {
    name: 'smoke',
    contrast: 170,
    brightness: 134,
    saturate: 100,
    sepia: 44,
    grayscale: 0,
    invert: 28,
    hueRotate: 0,
    opacity: 100,
    blur: 0
  },
  {
    name: 'sweden',
    contrast: 93,
    brightness: 100,
    saturate: 72,
    sepia: 3,
    grayscale: 20,
    invert: 0,
    hueRotate: 0,
    opacity: 100,
    blur: 0
  },
  {
    name: 'quasar',
    contrast: 101,
    brightness: 108,
    saturate: 99,
    sepia: 11,
    grayscale: 33,
    invert: 0,
    hueRotate: 301,
    opacity: 100,
    blur: 0
  },
  {
    name: 'fantasy',
    contrast: 105,
    brightness: 100,
    saturate: 656,
    sepia: 50,
    grayscale: 0,
    invert: 0,
    hueRotate: 0,
    opacity: 100,
    blur: 0
  },
  {
    name: 'xpro2',
    contrast: 96,
    brightness: 125,
    saturate: 330,
    sepia: 0,
    grayscale: 0,
    invert: 6,
    hueRotate: 28,
    opacity: 100,
    blur: 0
  },
]

export default function handler(req, res) {
  res.status(200).json(presets)
}
