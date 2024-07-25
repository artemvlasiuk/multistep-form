import { AddOns, Billing } from "../types/Form";

export const getAddOns = (addOnsList: AddOns, billing: Billing) => {
  const multiply = billing === "yearly" ? 10 : 1;
  const filteredAddOns = Object.entries(addOnsList).filter(
    ([, value]) => value === true,
  );

  return filteredAddOns.map(([key]) => {
    switch (key) {
      case "onlineService":
        return { name: "Online service", price: 1 * multiply };
      case "largerStorage":
        return { name: "Larger storage", price: 2 * multiply };
      case "customizableProfile":
        return { name: "Customizable profile", price: 2 * multiply };
    }
  });
};
