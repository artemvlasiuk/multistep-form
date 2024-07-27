export const validateInput = (name: string, value: string): string => {
  let error = "";
  switch (name) {
    case "name":
      if (!value) {
        error = "Name is required";
      } else if (!/^[a-zA-Z\s]+$/.test(value)) {
        error = "Name should contain only letters and spaces";
      }
      break;
    case "email":
      if (!value) {
        error = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        error = "Email is invalid";
      }
      break;
    case "phone":
      if (!value) {
        error = "Phone number is required";
      } else if (!/^\+?\d{10,15}$/.test(value)) {
        error = "Phone number is invalid";
      }
      break;
    default:
      break;
  }
  return error;
};
