import { Billing, Plan } from "../types/Form";

export const getPlanPrice = (plan: Plan, billing: Billing) => {
  const multiply = billing === "yearly" ? 10 : 1;
  switch (plan) {
    case "arcade":
      return 9 * multiply;
    case "advanced":
      return 12 * multiply;
    case "pro":
      return 15 * multiply;
  }
};
