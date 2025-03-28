import { useState } from "react";
import "./App.css";
import DateInput from "./DateInput";
import FormatOutput from "./FormatOutput";
import logo from "../public/logo.png";

function App() {
  const [inputDate, setInputDate] = useState("");
  const [outputFormat, setOutputFormat] = useState(null);
  const [taggedDate, setTaggedDate] = useState(null);

  const baseURL = "http://127.0.0.1:5000";
  const formatEndpoint = "/api/format";

  function detectFormat() {
    let data = new FormData();
    data.append("date", inputDate);
    data.append("tag", "True");
    fetch(`${baseURL}${formatEndpoint}`, {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.date_format);
        setOutputFormat(data.date_format);
        setTaggedDate(data.date_tagged);
      })
      .catch((error) => console.error("Error:", error));
  }

  let demoElements;
  if (outputFormat !== null) {
    demoElements = (
      <FormatOutput
        outputFormat={outputFormat}
        setOutputFormat={setOutputFormat}
        setInputDate={setInputDate}
        taggedDate={taggedDate}
      />
    );
  } else {
    demoElements = (
      <DateInput
        inputDate={inputDate}
        setInputDate={setInputDate}
        detectFormat={detectFormat}
      />
    );
  }

  return (
    <>
      <div className="nav_bar">
        <h1 className="logo_text">DateDetective</h1>
        <ul className="nav_list">
          <li className="nav_item selected">Demo</li>
          <li className="nav_item">Install</li>
          <li className="nav_item">Docs</li>
        </ul>
      </div>
      <p class="page_description">
        <span class="inline_header">Try it now...</span> see how DateDetective
        can quickly identify date formats.
      </p>

      <div className="demo_container">{demoElements}</div>
    </>
  );
}

export default App;
