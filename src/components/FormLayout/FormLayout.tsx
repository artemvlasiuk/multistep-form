import cn from "classnames";
import "./FormLayout.scss";

interface FormLayoutProps {
  children: React.ReactNode;
  currentStep: number;
  handleNextStep: () => void;
  handleBackStep: () => void;
}

export const FormLayout: React.FC<FormLayoutProps> = ({
  children,
  currentStep,
  handleNextStep,
  handleBackStep,
}) => {
  return (
    <form className="form-layout">
      {children}
      <div className="form-buttons">
        <button
          type="button"
          className={cn("button", "button--secondary", {
            "button--disabled": currentStep === 1,
          })}
          onClick={handleBackStep}
        >
          Go Back
        </button>
        <button
          type="button"
          className={cn("button", "button--primary", {
            "button--confirm": currentStep === 4,
          })}
          onClick={handleNextStep}
        >
          {currentStep === 4 ? "Confirm" : "Next Step"}
        </button>
      </div>
    </form>
  );
};
