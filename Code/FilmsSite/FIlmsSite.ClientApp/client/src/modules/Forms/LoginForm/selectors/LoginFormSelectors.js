export function getIsValidating(state) {
    if (state.form.login) return state.form.login.isValidating;
    else return true;
  }
  