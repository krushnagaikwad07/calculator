import React, { useState } from 'react';
import cal from './calender.module.css'

function Calendar() {
  const [date, setDate] = useState(new Date());

  const daysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  }

  const firstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  }

  const prevMonth = () => {
    const newDate = new Date(date.getFullYear(), date.getMonth() - 1);
    setDate(newDate);
  }

  const nextMonth = () => {
    const newDate = new Date(date.getFullYear(), date.getMonth() + 1);
    setDate(newDate);
  }

  const renderDays = () => {
    const days = [];
    const daysInCurrentMonth = daysInMonth(date.getFullYear(), date.getMonth()); //31
    const firstDay = firstDayOfMonth(date.getFullYear(), date.getMonth()); // 1-> mon

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="empty"></div>);
    }

    for (let i = 1; i <= daysInCurrentMonth; i++) {
      days.push(<div key={i} className="day">{i}</div>);
    }

    return days;
  }

  return (
    <div className={cal.calendar}>
      <div className={cal.header}>
        <button onClick={prevMonth}>Prev</button>
        <h2>{date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h2>
        <button onClick={nextMonth}>Next</button>
      </div>
      <div className={cal.days}>
        <div className={cal.day_of_week}>Sun</div>
        <div className={cal.day_of_week}>Mon</div>
        <div className={cal.day_of_week}>Tue</div>
        <div className={cal.day_of_week}>Wed</div>
        <div className={cal.day_of_week}>Thu</div>
        <div className={cal.day_of_week}>Fri</div>
        <div className={cal.day_of_week}>Sat</div>
        {renderDays()}
      </div>
    </div>
  );
}

export default Calendar;
