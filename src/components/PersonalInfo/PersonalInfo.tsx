import { FormLayout } from "../FormLayout";
import "./PersonalInfo.scss";
import { useForm } from "../../context/FormContext";

export const PersonalInfo = () => {
  const { formData, setFormData } = useForm();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      personalInfo: { ...formData.personalInfo, name: e.target.value },
    });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      personalInfo: { ...formData.personalInfo, email: e.target.value },
    });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      personalInfo: { ...formData.personalInfo, phone: e.target.value },
    });
  };

  return (
    <FormLayout>
      <h2 className="personal__title">Personal info</h2>
      <p className="personal__description">
        Please provide your name, email address, and phone number.
      </p>
      <label htmlFor="name" className="personal__label">
        <span>Name</span>
        <input
          type="text"
          id="name"
          className="personal__input"
          placeholder="e.g. Stephen King"
          value={formData.personalInfo.name}
          onChange={handleNameChange}
          required
        />
      </label>
      <label htmlFor="email" className="personal__label">
        <span>Email Address</span>
        <input
          type="email"
          id="email"
          className="personal__input"
          placeholder="e.g. stephenking@lorem.com"
          value={formData.personalInfo.email}
          onChange={handleEmailChange}
          required
        />
      </label>
      <label htmlFor="tel" className="personal__label">
        <span>Phone Number</span>
        <input
          type="tel"
          id="tel"
          className="personal__input"
          placeholder="e.g. +1 234 567 890"
          value={formData.personalInfo.phone}
          onChange={handlePhoneChange}
          required
        />
      </label>

      {/* <div className="form-buttons">
        <button className="button button--secondary">Go Back</button>
        <button className="button button--primary">Next Step</button>
      </div> */}
    </FormLayout>
  );
};
