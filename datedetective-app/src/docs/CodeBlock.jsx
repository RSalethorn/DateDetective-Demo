import "../styles/docs/CodeBlock.css";

function CodeBlock({ code }) {
  const codeElements = code.map((codeLine, index) => (
    <span className="code_line" key={index}>
      {codeLine}
    </span>
  ));
  return (
    <>
      <div className="code_block_container">
        <div className="code_lines_container">{codeElements}</div>
      </div>
    </>
  );
}

export default CodeBlock;
