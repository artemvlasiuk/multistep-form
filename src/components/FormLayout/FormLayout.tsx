import "./FormLayout.scss";

interface FormLayoutProps {
  children: React.ReactNode;
}

export const FormLayout: React.FC<FormLayoutProps> = ({ children }) => {
  return (
    <form className="form-layout">
      {children}
      <div className="form-buttons">
        <button className="button button--secondary">Go Back</button>
        <button className="button button--primary">Next Step</button>
      </div>
    </form>
  );
};
