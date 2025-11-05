import Snackbar from 'react-native-snackbar'
import { AxiosError } from 'axios'

import SnackbarConstants from '../Constants/Snackbar'
import Colors from '../Assets/Colors'
import type { SnackbarType } from '../Types'

const {
  TYPE: { FAILED, SUCCESS }
} = SnackbarConstants

export const showSnackBar = (
  title: string,
  type: SnackbarType,
  error?: AxiosError<{ message?: string }>
): void => {
  const text =
    type === SUCCESS
      ? title
      : error?.response?.data?.message || error?.message || 'Terjadi kesalahan dengan server kami.'

  Snackbar.show({
    text: text,
    duration: Snackbar.LENGTH_SHORT,
    backgroundColor: type === FAILED ? Colors.RED : Colors.GREEN,
    fontFamily: 'Poppins-Regular'
  })
}

export default {
  showSnackBar
}
