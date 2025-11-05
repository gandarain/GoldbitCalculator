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

export type LoginBody = {
  email: string
  password: string
}

export type LoginResponse = {
  message: string
  token: string
  user: {
    id: string
    fullName: string
    email: string
  }
  error?: string
}
