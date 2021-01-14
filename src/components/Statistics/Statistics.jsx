import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={s.feautersList}>
      <li className={s.ststicItem}>
        Good:&nbsp;<span className={s.statisticValue}>{good}</span>
      </li>
      <li className={s.ststicItem}>
        Neutral:&nbsp;<span className={s.statisticValue}>{neutral}</span>
      </li>
      <li className={s.ststicItem}>
        Bad:&nbsp;<span className={s.statisticValue}>{bad}</span>
      </li>
      <li className={s.ststicItem}>
        Total:&nbsp;<span className={s.statisticValue}>{total()}</span>
      </li>
      <li className={s.ststicItem}>
        PositivePercentage:&nbsp;
        <span className={s.statisticValue}>{positivePercentage()}%</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
};

export default Statistics;
