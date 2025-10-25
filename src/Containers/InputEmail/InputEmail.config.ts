import * as Yup from 'yup'

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Email tidak valid').required('Email wajib diisi')
})

const initialValues = {
  email: ''
}

export default { LoginSchema, initialValues }
