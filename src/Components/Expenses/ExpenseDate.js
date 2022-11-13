import "./Expensdate.css";

function ExpenseDate(props) {
  let day = props.date.toLocaleString("en-US", { day: "2-digit" });
  let month = props.date.toLocaleString("en-US", { month: "long" });
  let year = props.date.getFullYear();

  return (
    <div className="date-field">
      <div className="date-month">{month}</div>
      <div className="date-year">{year}</div>
      <div className="date-day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
