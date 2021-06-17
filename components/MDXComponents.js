import pinyin from "pinyin";

function anchor(content) {
  const id = pinyin(content, {
    style: pinyin.STYLE_FIRST_LETTER,
  }).join("_");

  return { id, link: `#${id}` };
}

const H2 = ({ children }) => {
  const { id, link } = anchor(children);

  return (
    <h2 id={id}>
      {children}{" "}
      <a href={link} className="anchor-link">
        §
      </a>
    </h2>
  );
};

const H3 = ({ children }) => {
  const { id, link } = anchor(children);

  return (
    <h3 id={id}>
      {children}{" "}
      <a href={link} className="anchor-link">
        §
      </a>
    </h3>
  );
};

const H4 = ({ children }) => {
  const { id, link } = anchor(children);

  return (
    <h4 id={id}>
      {children}{" "}
      <a href={link} className="anchor-link">
        §
      </a>
    </h4>
  );
};

const H5 = ({ children }) => {
  const { id, link } = anchor(children);

  return (
    <h5 id={id}>
      {children}{" "}
      <a href={link} className="anchor-link">
        §
      </a>
    </h5>
  );
};

const H6 = ({ children }) => {
  const { id, link } = anchor(children);

  return (
    <h6 id={id}>
      {children}{" "}
      <a href={link} className="anchor-link">
        §
      </a>
    </h6>
  );
};

const MDXComponents = {
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
};

export default MDXComponents;
