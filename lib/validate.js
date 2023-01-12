export default function login_validate(values) {
  const errors = {};

  //   Email validation
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  //validation for password
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = "Password must be between 8 and 20 characters";
  } else if (values.password.includes("")) {
    errors.password = "invalid password";
  }

  return errors;
}

export function registerValidate(values) {

    const errors = {};
    
  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.includes("")) {
    errors.username = "Invalid Username";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  //validation for password
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = "Password must be between 8 and 20 characters";
  } else if (values.password.includes("")) {
    errors.password = "invalid password";
  }

  //validation for password confirmation
  if (!values.cpassword) {
    errors.cpassword = "Required";
  } else if (values.password!== values.cpassword) {
    errors.cpassword = "Passwords do not match";
  }

  return errors;
}
