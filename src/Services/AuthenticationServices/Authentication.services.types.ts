export type RegisterBody = {
  fullName: string
  email: string
  password: string
}

export type RegisterResponse = {
  message: string
  error?: string
  token: string
}
