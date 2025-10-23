import { Dimensions } from 'react-native'

import { isTablet } from './Platform'

const { height, width } = Dimensions.get('window')

const base = {
  width: 375,
  height: 667,
  pixelRatio: 2,
  fontScale: 2
}

const screenSize = {
  base: Math.sqrt(base.height * base.height + base.width * base.width),
  current: Math.sqrt(height * height + width * width)
}

export const scaleSize = (size: number): number => (size / screenSize.base) * screenSize.current

export const scaleWidth = (w: number): number => (w / base.width) * width

export const scaleHeight = (h: number): number => (h / base.height) * height

export const scaleFont = (fontSize: number): number =>
  isTablet() ? fontSize : (fontSize / base.width) * width

export const scaleByDigit = (
  value: number,
  digitBreakpoint: number,
  defaultSize: number
): number => {
  const digit = Math.ceil(Math.log10(value))
  const isDefaultFont = value === 0 || digit < digitBreakpoint

  return isDefaultFont ? defaultSize : (defaultSize * (digit - (digit - digitBreakpoint))) / digit
}

export default {
  scaleSize,
  scaleWidth,
  scaleHeight,
  scaleFont,
  scaleByDigit
}
