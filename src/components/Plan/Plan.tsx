import "./Plan.scss";
import { useForm } from "../../context/FormContext";
import { FormLayout } from "../FormLayout";
import cn from "classnames";

export const Plan = () => {
  const { formData, setFormData } = useForm();
  const { plan, billing } = formData;
  const multiplier = billing === "yearly" ? 10 : 1;

  const handlePlanChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleBillingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      billing: event.target.checked ? "yearly" : "monthly",
    });
  };

  return (
    <FormLayout>
      <h2 className="plan__title">Select your plan</h2>
      <p className="plan__description">
        You have the option of monthly or yearly billing.
      </p>

      <div className="plan__selector">
        <label
          className={cn("plan__select", {
            "plan__select--active": plan === "arcade",
          })}
          htmlFor="arcade"
        >
          <img
            src="./assets/images/icon-arcade.svg"
            alt="Arcade Icon"
            className="plan__select-icon"
          />
          <p className="plan__select-text">
            Arcade
            <span>{`$${9 * multiplier}/${billing}`}</span>
          </p>
        </label>
        <input
          type="radio"
          value="arcade"
          id="arcade"
          name="plan"
          className="plan__input"
          onChange={handlePlanChange}
          checked={plan === "arcade"}
        />
        <label
          className={cn("plan__select", {
            "plan__select--active": plan === "advanced",
          })}
          htmlFor="advanced"
        >
          <img
            src="./assets/images/icon-advanced.svg"
            alt="Advanced Icon"
            className="plan__select-icon"
          />
          <p className="plan__select-text">
            Advanced
            <span>{`$${12 * multiplier}/${billing}`}</span>
          </p>
        </label>
        <input
          type="radio"
          value="advanced"
          id="advanced"
          name="plan"
          className="plan__input"
          onChange={handlePlanChange}
          checked={plan === "advanced"}
        />
        <label
          className={cn("plan__select", {
            "plan__select--active": plan === "pro",
          })}
          htmlFor="pro"
        >
          <img
            src="./assets/images/icon-pro.svg"
            alt="Pro Icon"
            className="plan__select-icon"
          />
          <p className="plan__select-text">
            Pro
            <span>{`$${15 * multiplier}/${billing}`}</span>
          </p>
        </label>
        <input
          type="radio"
          value="pro"
          id="pro"
          name="plan"
          className="plan__input"
          onChange={handlePlanChange}
          checked={plan === "pro"}
        />
      </div>

      <div className="plan__switcher">
        <p className="plan__switcher-text">Monthly</p>
        <label className="switch">
          <input
            type="checkbox"
            className="switch__input"
            checked={billing === "yearly"}
            onChange={handleBillingChange}
          />
          <span className="slider"></span>
        </label>
        <p className="plan__switcher-text">Yearly</p>
      </div>
    </FormLayout>
  );
};
