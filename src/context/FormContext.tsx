import { createContext, useContext, useState } from "react";
import { Form } from "../types/Form";

type Props = {
  children: React.ReactNode;
};

interface FormContextType {
  formData: Form;
  setFormData: React.Dispatch<React.SetStateAction<Form>>;
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

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
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
