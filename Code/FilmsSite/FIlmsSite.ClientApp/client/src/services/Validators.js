const passwordRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})"
  );
  
  export const validatePassword = password =>
    !password || !passwordRegex.test(password)
      ? "Password must have 6+ length. 1+ special character. 1+ lower case char. 1+ uppercase char."
      : undefined;
  
  export const validateUsername = username =>
    !username || username.length < 6
      ? "Username must have 6+ symbols length!"
      : undefined;
  
  export const validateMail = value =>
    !value || /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
      ? undefined
      : "Invalid email adress";
  