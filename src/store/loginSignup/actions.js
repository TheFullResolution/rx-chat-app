export const USER_LOGIN_START = '[LoginSignup] User Login Start'
export const USER_LOGIN_COMPLETED = '[LoginSignup] User Login Completed'

export const USER_SIGNUP_START = '[LoginSignup] User Signup Start'
export const USER_SIGNUP_UPDATE = '[LoginSignup] User Signup Update'
export const USER_SIGNUP_COMPLETED = '[LoginSignup] User Signup Completed'

export const USER_LOGIN_SIGNUP_ERROR = '[LoginSignup] User LoginSignup Error'


export const userLoginStart = (values) => ({ type: USER_LOGIN_START, payload: values })
export const userLoginCompleted = () => ({ type: USER_LOGIN_COMPLETED })

export const userSignupStart = (values) => ({ type: USER_SIGNUP_START, payload: values })
export const userSignupUpdate = (values) => ({ type: USER_SIGNUP_UPDATE, payload: values })
export const userSignupFinish = () => ({ type: USER_SIGNUP_COMPLETED })

export const userLoginSignupError = (error) => ({ type: USER_LOGIN_SIGNUP_ERROR, payload: error })
