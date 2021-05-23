const passValidation = (password) => {
  let pass_regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  if(password.match(pass_regex)){
      return true;
  }
  return false;
};

export default passValidation;
