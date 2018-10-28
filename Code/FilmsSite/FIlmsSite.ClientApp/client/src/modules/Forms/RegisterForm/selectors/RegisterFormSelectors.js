export function getIsValidating(state) {
    if (state.form.register) return state.form.register.isValidating;
    else return true;
  }
  