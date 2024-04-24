const validation = (userData, type) => {
  const errors = {};

  if (!userData.username.trim()) {
    errors.username = "Username required";
  } else {
    delete errors.username;
  }

  if (!userData.password) {
    errors.password = "Password required";
  } else if (userData.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  } else {
    delete errors.password;
  }

  if (type === "signup") {
    if (!userData.email) {
      errors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
      errors.email = "Email address is invalid";
    } else {
      delete errors.email;
    }

    if (!userData.confirmPassword) {
      errors.confirmPassword = "Confirm the password";
    } else if (userData.confirmPassword !== userData.password) {
      errors.confirmPassword = "Password do not match";
    } else {
      delete errors.confirmPassword;
    }

    if (!userData.isAccepted) {
      errors.isAccepted = "Accept our regulations";
    } else {
      delete errors.isAccepted;
    }
  }

  return errors;
};

export { validation };
