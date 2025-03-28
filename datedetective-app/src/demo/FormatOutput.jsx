import "../styles/demo/DetectControls.css";
import TaggedDateOutput from "./TaggedDateOutput";

import { useState } from "react";

function FormatOutput({
  outputFormat,
  setOutputFormat,
  setInputDate,
  taggedDate,
}) {
  const [copyButtonUsed, setCopyButtonUsed] = useState(false);
  const resetFormat = () => {
    setOutputFormat(null);
    setInputDate("");
  };

  const copyFormat = () => {
    navigator.clipboard.writeText(outputFormat);
    setCopyButtonUsed(true);
  };

  const copyButtonMsg = copyButtonUsed ? "Format Copied" : "Copy to Clipboard";
  const copyButtonColour = copyButtonUsed ? "green" : "";

  return (
    <>
      <TaggedDateOutput taggedDate={taggedDate} />
      <span className="format_box second_box">
        <label className="format_box_label">Date Format</label>
        {outputFormat}
      </span>
      <button
        className={"detect_button " + copyButtonColour}
        onClick={copyFormat}
      >
        {copyButtonMsg}
      </button>

      <button className="detect_button red" onClick={resetFormat}>
        Try again
      </button>
    </>
  );
}

export default FormatOutput;
