import "./Steps.scss";
import cn from "classnames";

interface StepsProps {
  currentStep: number;
}

const steps = ["your info", "select plan", "add-ons", "summary"];

export const Steps: React.FC<StepsProps> = ({ currentStep }) => {
  return (
    <ul className="steps">
      {steps.map((step, index) => (
        <li key={step} className="steps__item">
          <div
            className={cn("steps__item-number", {
              "steps__item-number--active": index + 1 === currentStep,
            })}
          >
            {index + 1}
          </div>
          <div className="steps__item-text">
            {`STEP ${index + 1}`}
            <span>{step}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};
