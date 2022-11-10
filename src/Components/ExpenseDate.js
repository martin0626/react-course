import "./Expensdate.css";

function ExpenseDate(props) {
  let day = props.date.toLocaleString("en-US", { day: "2-digit" });
  let month = props.date.toLocaleString("en-US", { month: "long" });
  let year = props.date.getFullYear();

  return (
    <div class="date-field">
      <div class="date-month">{month}</div>
      <div class="date-year">{year}</div>
      <div class="date-day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
