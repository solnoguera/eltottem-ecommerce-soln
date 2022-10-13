const formatEmail =
  /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;
const minPasswordLength = 6;

export const validateInput = (name, value) => {
  let hasError = false;
  let error = "";
  switch (name) {
    case "email":
      if (!value) {
        hasError = true;
        error = `El ${name} es requerido.`;
      } else if (value.trim() === "") {
        hasError = true;
        error = `El ${name} es requerido.`;
      } else if (!formatEmail.test(value)) {
        hasError = true;
        error = `El ${name} no es válido.`;
      } else {
        hasError = false;
        error = "";
      }
      break;

    case "password":
      if (!value) {
        hasError = true;
        error = `El ${name} es requerido.`;
      } else if (value.trim() === "") {
        hasError = true;
        error = `El ${name} es requerido.`;
      } else if (value.length < minPasswordLength) {
        hasError = true;
        error = `El ${name} debe tener al menos ${minPasswordLength} caractéres.`;
      } else {
        hasError = false;
        error = "";
      }
      break;

    default:
      break;
  }
  return { hasError, error };
};
