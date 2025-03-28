import "./DetectControls.css";

function DateInput({ inputDate, setInputDate, detectFormat }) {
  function handleChange(e) {
    setInputDate(e.target.value);
  }

  return (
    <div className="detect_container">
      <label htmlFor="input_date" className="format_box_label label_for_input">
        Input date string here...
      </label>
      <input
        type="text"
        className="format_box"
        name="input_date"
        value={inputDate}
        onChange={handleChange}
      />
      <button onClick={detectFormat} className="detect_button">
        Detect Format
      </button>
    </div>
  );
}

export default DateInput;
