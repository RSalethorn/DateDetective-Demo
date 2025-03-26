import "./DetectControls.css";

function FormatOutput({ outputFormat, setOutputFormat, setInputDate }) {
  const resetFormat = () => {
    setOutputFormat(null);
    setInputDate("");
  };

  const copyFormat = () => {
    navigator.clipboard.writeText(outputFormat);
  };

  return (
    <>
      <label className="format_box_label">Date Format</label>
      <span className="format_box">{outputFormat}</span>
      <button className="detect_button" onClick={copyFormat}>
        Copy format to clipboard
      </button>
      <button className="detect_button red" onClick={resetFormat}>
        Try again
      </button>
    </>
  );
}

export default FormatOutput;
