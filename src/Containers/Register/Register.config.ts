import * as Yup from 'yup'

const RegisterSchema = Yup.object().shape({
  fullName: Yup.string()
    .matches(/^[A-Za-z\s]+$/, 'Nama lengkap hanya boleh mengandung huruf')
    .min(3, 'Nama lengkap minimal 3 karakter')
    .required('Nama lengkap wajib diisi'),
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
  confirmationPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Konfirmasi password tidak cocok')
    .required('Konfirmasi password wajib diisi'),
})

const initialValues = {
  fullName: '',
  email: '',
  password: '',
  confirmationPassword: ''
}

export default { RegisterSchema, initialValues }
