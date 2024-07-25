interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
}

export type Plan = "arcade" | "advanced" | "pro";
export type Billing = "monthly" | "yearly";

export interface AddOns {
  onlineService: boolean;
  largerStorage: boolean;
  customizableProfile: boolean;
}

export interface Form {
  personalInfo: PersonalInfo;
  plan: Plan;
  addOns: AddOns;
  billing: Billing;
}
