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

export default { LoginSchema, initialValues }
