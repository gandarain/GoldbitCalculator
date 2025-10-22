import * as Yup from 'yup'

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email tidak valid')
    .required('Email wajib diisi'),
  password: Yup.string()
    .min(6, 'Minimal 6 karakter')
    .required('Password wajib diisi')
})

const initialValues = {
  email: '',
  password: ''
}

const hitSlopIconPassword = { top: 8, bottom: 8, left: 8, right: 8 }

export default { LoginSchema, initialValues, hitSlopIconPassword }
