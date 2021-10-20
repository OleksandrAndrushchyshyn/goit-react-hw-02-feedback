import React from "react";
import style from "./Statistics.module.css";
import PropTypes from "prop-types";
export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <ul className={style.stats}>
      <li className={style.stats__item}>
        <span className={style.label}>Good</span>
        <span className="quantity">: {good}</span>
      </li>
      <li className={style.stats__item}>
        <span className={style.label}>Neutral</span>
        <span className="quantity">: {neutral}</span>
      </li>
      <li className={style.stats__item}>
        <span className={style.label}>Bad</span>
        <span className="quantity">: {bad}</span>
      </li>
      <li className={style.stats__item}>
        <span className={style.label}>Total</span>
        <span className="quantity">: {total}</span>
      </li>
      <li className={style.stats__item}>
        <span className={style.label}>Positive feedback</span>
        <span className="quantity">: {positivePercentage}%</span>
      </li>
    </ul>
  );
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
