import { LOGIN, SIGNUP } from '../LoginSignupConstants'

export const submitForm = (variant, props) => (values) => {
  switch (variant) {
    case SIGNUP:
      props.submitSignup(values)
      break
    case LOGIN:
      props.submitLogin(values)
      break
  }
}
