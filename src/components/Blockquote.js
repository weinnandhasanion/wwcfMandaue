const Blockquote = ({ quote, isTransparent = false }) => (
  <div
    className="blockquote"
    style={{ background: isTransparent ? "transparent" : "" }}
  >
    <h1 className="blockquote-text">{quote}</h1>
  </div>
);

export default Blockquote;
