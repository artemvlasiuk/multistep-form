import { useState } from "react";
import "./App.css";
import { AddOns } from "./components/AddOns";
import { Container } from "./components/Container";
import { FinishMessage } from "./components/FinishMessage";
import { Footer } from "./components/Footer";
import { PersonalInfo } from "./components/PersonalInfo";
import { Plan } from "./components/Plan";
import { Steps } from "./components/Steps";
import { Summary } from "./components/Summary";
import { FormLayout } from "./components/FormLayout";

export const App = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

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
    <Container>
      <Steps currentStep={currentStep} />
      <FormLayout
        currentStep={currentStep}
        handleNextStep={handleNextStep}
        handleBackStep={handleBackStep}
      >
        {currentStep === 1 && <PersonalInfo />}
        {currentStep === 2 && <Plan />}
        {currentStep === 3 && <AddOns />}
        {currentStep === 4 && <Summary />}
        {currentStep === 5 && <FinishMessage />}
      </FormLayout>
      <Footer
        currentStep={currentStep}
        handleNextStep={handleNextStep}
        handleBackStep={handleBackStep}
      />
    </Container>
  );
};
