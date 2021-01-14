import React from 'react';
import s from './Notification.module.css';

const Notification = ({ message }) => <p className={s.nav}>{message}</p>;

export default Notification;
