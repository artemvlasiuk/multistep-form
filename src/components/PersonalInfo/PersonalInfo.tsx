import "./PersonalInfo.scss";
import { useForm } from "../../context/FormContext";

export const PersonalInfo = () => {
  const { formData, setFormData, errors, validateInput, setErrors } = useForm();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const error = validateInput(name, value);

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));

    setFormData((prevFormData) => ({
      ...prevFormData,
      personalInfo: {
        ...prevFormData.personalInfo,
        [name]: value,
      },
    }));
  };

  return (
    <div className="personal">
      <h2 className="personal__title">Personal info</h2>
      <p className="personal__description">
        Please provide your name, email address, and phone number.
      </p>
      <label htmlFor="name" className="personal__label">
        <div className="personal__label-text">
          <span>Name</span>
          {errors.name && <p className="personal__error">{errors.name}</p>}
        </div>
        <input
          type="text"
          id="name"
          className="personal__input"
          placeholder="e.g. Stephen King"
          value={formData.personalInfo.name}
          onChange={handleInputChange}
          required
          name="name"
        />
      </label>
      <label htmlFor="email" className="personal__label">
        <div className="personal__label-text">
          <span>Email Address</span>
          {errors.email && <p className="personal__error">{errors.email}</p>}
        </div>
        <input
          type="email"
          id="email"
          className="personal__input"
          placeholder="e.g. stephenking@lorem.com"
          value={formData.personalInfo.email}
          onChange={handleInputChange}
          required
          name="email"
        />
      </label>
      <label htmlFor="tel" className="personal__label">
        <div className="personal__label-text">
          <span>Phone Number</span>
          {errors.phone && <p className="personal__error">{errors.phone}</p>}
        </div>
        <input
          type="tel"
          id="tel"
          className="personal__input"
          placeholder="e.g. +1 234 567 890"
          value={formData.personalInfo.phone}
          onChange={handleInputChange}
          required
          name="phone"
        />
      </label>
    </div>
  );
};
