export const SIGNUP = 'SIGNUP'
export const LOGIN = 'LOGIN'

export  const LOGIN_FIELDS = [
  {
    id: 'email',
    placeholder: 'Enter your email',
    type: 'text',
    label: 'Email',
    errors: {
      check: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: 'Invalid email address'
    }
  },
  {
    id: 'password',
    placeholder: 'Enter your password',
    type: 'password',
    label: 'Password'
  }
]

export const SIGNUP_FIELDS = [
  {
    id: 'name',
    placeholder: 'Enter your name',
    type: 'text',
    label: 'Name'
  },
]
