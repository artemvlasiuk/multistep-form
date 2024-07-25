import "./Footer.scss";

interface FooterProps {
  handleNextStep: () => void;
  handleBackStep: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  handleNextStep,
  handleBackStep,
}) => {
  return (
    <footer className="footer">
      <button className="button button--secondary" onClick={handleBackStep}>
        Go Back
      </button>
      <button className="button button--primary" onClick={handleNextStep}>
        Next Step
      </button>
    </footer>
  );
};
