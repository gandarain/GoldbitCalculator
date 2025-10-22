import * as Yup from 'yup'

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email tidak valid')
    .required('Email wajib diisi'),
  password: Yup.string()
    .min(8, 'Password minimal 8 karakter')
    .matches(/[A-Z]/, 'Password harus mengandung huruf besar')
    .matches(/[a-z]/, 'Password harus mengandung huruf kecil')
    .matches(/[0-9]/, 'Password harus mengandung angka')
    .matches(/[@$!%*?&]/, 'Password harus mengandung karakter spesial')
    .required('Password wajib diisi'),
})

const initialValues = {
  email: '',
  password: ''
}

export default { LoginSchema, initialValues }
