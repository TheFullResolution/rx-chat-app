export const SIGNUP = 'SIGNUP'
export const LOGIN = 'LOGIN'

export const COMMON_FIELDS = [
  {
    id: 'email',
    autoComplete: 'email',
    placeholder: 'Enter your email',
    type: 'text',
    label: 'Email',
    errors: {
      check: (value) => !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value),
      message: 'Invalid email address',
    },
  },
]

export const LOGIN_FIELDS = [
  {
    id: 'password',
    autoComplete: 'current-password',
    placeholder: 'Enter your password',
    type: 'password',
    label: 'Password',
  },
]

export const SIGNUP_FIELDS = [
  {
    id: 'name',
    autoComplete: 'name',
    placeholder: 'Enter your nickname/user name',
    type: 'text',
    label: 'Display Name'
  },
  {
    id: 'password',
    autoComplete: 'new-password',
    placeholder: 'Enter your password',
    type: 'password',
    label: 'Password',
    errors: {
      check: (value) => value.length < 6,
      message: 'Needs to be longer than 6 characters',
    },
  },
]
