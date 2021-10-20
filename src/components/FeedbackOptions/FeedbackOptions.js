import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.css";
export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={styles.feedback}>
      <div className={styles.description} onClick={onLeaveFeedback}>
        {options.map((but) => (
          <button
            key={but}
            data-type={but}
            type="button"
            className={styles.btn}
          >
            {but}
          </button>
        ))}
      </div>
    </div>
  );
}
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
