import { Platform, Dimensions } from 'react-native'

export const isAndroid = (): boolean => Platform.OS === 'android'

export const isIOS = (): boolean => Platform.OS === 'ios'

export const isIpad = (): boolean => Platform.OS === 'ios' && Platform.isPad

const getRatio = (): number => {
  const { height, width } = Dimensions.get('window')

  let ratio = height / width

  if (width > height) {
    ratio = width / height
  }

  return ratio
}

export const isIphoneXsMax = (): boolean => isIOS() && getRatio() >= 2.1

export const isIphoneX = (): boolean => isIOS() && getRatio() >= 2.0

export const isIphoneLowRatio = (): boolean => isIOS() && getRatio() <= 1.775

export const isAndroidVeryHighRatio = (): boolean => isAndroid() && getRatio() >= 2.1

export const isAndroidHighRatio = (): boolean => isAndroid() && getRatio() >= 1.9

export const isAndroidLowRatio = (): boolean => isAndroid() && getRatio() <= 1.7

export const isAndroidTablet = (): boolean => isAndroid() && getRatio() <= 1.6

export const isTablet = (): boolean => isIpad() || isAndroidTablet()

export default {
  isAndroid,
  isIOS,
  isIpad,
  isIphoneX,
  isIphoneXsMax,
  isIphoneLowRatio,
  isAndroidVeryHighRatio,
  isAndroidHighRatio,
  isAndroidLowRatio,
  isAndroidTablet,
  isTablet
}
