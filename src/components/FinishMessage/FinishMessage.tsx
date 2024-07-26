import "./FinishMessage.scss";

export const FinishMessage = () => {
  return (
    <div className="finish">
      <img
        src="/assets/images/icon-thank-you.svg"
        alt="Finish Icon"
        className="finish__icon"
      />
      <h2 className="finish__title">Thank you!</h2>
      <p className="finish__description">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};
