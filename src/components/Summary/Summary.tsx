import { useForm } from "../../context/FormContext";
import { getAddOns } from "../../helpers/getAddOns";
import { getPlanPrice } from "../../helpers/getPlanPrice";
import "./Summary.scss";

export const Summary = () => {
  const { formData } = useForm();
  const { plan, billing, addOns } = formData;

  const period = billing === "yearly" ? "yr" : "mo";

  const addOnsList = getAddOns(addOns, billing) || [];
  const planPrice = getPlanPrice(plan, billing);
  const totalPrice =
    planPrice +
    addOnsList.reduce((acc, addOn) => (addOn ? acc + addOn.price : acc), 0);

  return (
    <div className="summary">
      <h2 className="summary__title">Finishing up</h2>
      <p className="summary__description">
        Double-check everything looks OK before confirming.
      </p>
      <div className="summary__info">
        <div className="summary__plan">
          <div className="summary__plan-name">
            {`${plan} (${billing})`}
            <button className="summary__plan-change">Change</button>
          </div>
          <p className="summary__plan-price">{`$${planPrice}/${period}`}</p>
        </div>
        <div className="summary__divider"></div>
        {addOnsList.length > 0 && (
          <ul className="summary__add-ons">
            {addOnsList.map((addOn) => {
              if (addOn) {
                return (
                  <li className="summary__add-ons-item" key={addOn.name}>
                    {addOn.name}
                    <span className="summary__add-ons-price">{`+$${addOn.price}/${period}`}</span>
                  </li>
                );
              }
              return null;
            })}
          </ul>
        )}
      </div>
      <div className="summary__total">
        {`Total (per ${period === "mo" ? "month" : "year"})`}
        <span className="summary__total-price">{`$${totalPrice}/${period}`}</span>
      </div>
    </div>
  );
};
