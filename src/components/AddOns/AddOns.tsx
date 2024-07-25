import cn from "classnames";
import { useForm } from "../../context/FormContext";
import { FormLayout } from "../FormLayout";
import "./AddOns.scss";

export const AddOns = () => {
  const { formData, setFormData } = useForm();
  const { customizableProfile, largerStorage, onlineService } = formData.addOns;
  const { billing } = formData;
  const period = billing === "yearly" ? "yr" : "mo";
  const multiply = billing === "yearly" ? 10 : 1;

  const handleAddOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      addOns: {
        ...prevFormData.addOns,
        [name]: checked,
      },
    }));
  };

  return (
    <FormLayout>
      <h2 className="add-ons__title">Pick add-ons</h2>
      <p className="add-ons__description">
        Add-ons help enhance your gaming experience.
      </p>
      <div className="add-ons__selector">
        <div className="add-ons__select">
          <input
            type="checkbox"
            className="add-ons__input"
            id="onlineService"
            name="onlineService"
            checked={onlineService}
            onChange={handleAddOnChange}
          />
          <label htmlFor="onlineService" className="add-ons__label">
            <div
              className={cn("add-ons__checkbox", {
                "add-ons__checkbox--checked": onlineService,
              })}
            >
              {onlineService && (
                <img src="assets/images/icon-checkmark.svg" alt="Checkmark" />
              )}
            </div>
            <p className="add-ons__info">
              Online service
              <span>Access to multiplayer games</span>
            </p>
          </label>
          <p className="add-ons__price">{`+$${1 * multiply}/${period}`}</p>
        </div>
        <div className="add-ons__select">
          <input
            type="checkbox"
            className="add-ons__input"
            id="largerStorage"
            name="largerStorage"
            checked={largerStorage}
            onChange={handleAddOnChange}
          />
          <label htmlFor="largerStorage" className="add-ons__label">
            <div
              className={cn("add-ons__checkbox", {
                "add-ons__checkbox--checked": largerStorage,
              })}
            >
              {largerStorage && (
                <img src="assets/images/icon-checkmark.svg" alt="Checkmark" />
              )}
            </div>
            <p className="add-ons__info">
              Larger storage
              <span>Extra 1TB of cloud save</span>
            </p>
          </label>
          <p className="add-ons__price">{`+$${2 * multiply}/${period}`}</p>
        </div>
        <div className="add-ons__select">
          <input
            type="checkbox"
            className="add-ons__input"
            id="customizableProfile"
            name="customizableProfile"
            checked={customizableProfile}
            onChange={handleAddOnChange}
          />
          <label htmlFor="customizableProfile" className="add-ons__label">
            <div
              className={cn("add-ons__checkbox", {
                "add-ons__checkbox--checked": customizableProfile,
              })}
            >
              {customizableProfile && (
                <img src="assets/images/icon-checkmark.svg" alt="Checkmark" />
              )}
            </div>
            <p className="add-ons__info">
              Customizable profile
              <span>Custom theme on your profile</span>
            </p>
          </label>
          <p className="add-ons__price">{`+$${2 * multiply}/${period}`}</p>
        </div>
      </div>
    </FormLayout>
  );
};
