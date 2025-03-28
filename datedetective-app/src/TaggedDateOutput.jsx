import "./DetectControls.css";
import "./TaggedDateOutput.css";

function TaggedDateOutput({ taggedDate }) {
  const formatCodes = {
    d: "Day",
    B: "Month",
    b: "Month",
    m: "Month",
    Y: "Year",
    H: "Hours",
    I: "Hours",
    M: "Minutes",
    S: "Seconds",
    f: "Microsecond",
    p: "AM-PM",
    Z: "Timezone",
    z: "Timezone",
  };

  const taggedDateElements = taggedDate.map((char, index) => (
    <span key={index} className={`tagged_char tag_${formatCodes[char.tag]}`}>
      {char.char}
    </span>
  ));

  // Check what tags are used in this date string
  let includedDateTags = [];
  let dateTagElements = [];

  taggedDate.forEach((char, index) => {
    const generalTag = formatCodes[char.tag];
    if (generalTag != undefined && !includedDateTags.includes(generalTag)) {
      includedDateTags.push(generalTag);
      dateTagElements.push(
        <span key={index} className={`key_tag_label tag_${generalTag}`}>
          {generalTag}
        </span>
      );
    }
  });

  console.log(includedDateTags);

  return (
    <>
      <div className="format_box">
        <label className="format_box_label">Tagged Date</label>
        <div className="tagged_char_container">{taggedDateElements}</div>
        <div className="key_tag_container">{dateTagElements}</div>
      </div>
    </>
  );
}

export default TaggedDateOutput;
