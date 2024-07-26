import "./Footer.scss";
import cn from "classnames";

interface FooterProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentStep,
  setCurrentStep,
}) => {
  const handleNextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    } else {
      return;
    }
  };

  const handleBackStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      return;
    }
  };

  return (
    <footer className="footer">
      <button
        className={cn("button", "button--secondary", {
          "button--disabled": currentStep === 1,
        })}
        onClick={handleBackStep}
      >
        Go Back
      </button>
      <button
        className={cn("button", "button--primary", {
          "button--confirm": currentStep === 4,
        })}
        onClick={handleNextStep}
      >
        {currentStep === 4 ? "Confirm" : "Next Step"}
      </button>
    </footer>
  );
};
