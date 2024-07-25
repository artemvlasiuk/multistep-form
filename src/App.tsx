import { useState } from "react";
import "./App.css";
import { AddOns } from "./components/AddOns";
import { Container } from "./components/Container";
/* import { FinishMessage } from "./components/FinishMessage"; */
import { Footer } from "./components/Footer";
import { PersonalInfo } from "./components/PersonalInfo";
import { Plan } from "./components/Plan";
import { Steps } from "./components/Steps";
import { Summary } from "./components/Summary";

export const App = () => {
  const [currentStep, setCurrentStep] = useState(4);

  const handleNextStep = () => {
    if (currentStep < 4) {
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
      {currentStep === 1 && <PersonalInfo />}
      {currentStep === 2 && <Plan />}
      {currentStep === 3 && <AddOns />}
      {currentStep === 4 && <Summary />}
      {/* <FinishMessage /> */}
      <Footer handleNextStep={handleNextStep} handleBackStep={handleBackStep} />
    </Container>
  );
};
