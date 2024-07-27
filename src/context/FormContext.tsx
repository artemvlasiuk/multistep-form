import { createContext, useContext, useState } from "react";
import { Form } from "../types/Form";
import { validateInput } from "../helpers/validateInput";

type Props = {
  children: React.ReactNode;
};

interface FormContextType {
  formData: Form;
  setFormData: React.Dispatch<React.SetStateAction<Form>>;
  errors: { [key: string]: string };
  setErrors: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
  validateInput: (name: string, value: string) => string;
  validatePersonalInfo: () => boolean;
}

const initialState: Form = {
  personalInfo: {
    name: "",
    email: "",
    phone: "",
  },
  plan: "arcade",
  addOns: {
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  },
  billing: "monthly",
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<Props> = ({ children }) => {
  const [formData, setFormData] = useState<Form>(initialState);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validatePersonalInfo = (): boolean => {
    const { name, email, phone } = formData.personalInfo;
    const newErrors = {
      name: validateInput("name", name),
      email: validateInput("email", email),
      phone: validateInput("phone", phone),
    };
    setErrors(newErrors);

    return !newErrors.name && !newErrors.email && !newErrors.phone;
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        errors,
        setErrors,
        validateInput,
        validatePersonalInfo,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useForm must be used within a FormProvider");
  }
  return context;
};
