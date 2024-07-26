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

export const App = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  return (
    <Container>
      <Steps currentStep={currentStep} />
      {currentStep === 1 && <PersonalInfo />}
      {currentStep === 2 && <Plan />}
      {currentStep === 3 && <AddOns />}
      {currentStep === 4 && <Summary />}
      {currentStep === 5 && <FinishMessage />}
      <Footer currentStep={currentStep} setCurrentStep={setCurrentStep} />
    </Container>
  );
};
