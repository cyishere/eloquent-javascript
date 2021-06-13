import pinyin from "pinyin";

const Content = ({ main }) => {
  const anchor = pinyin(main, {
    style: pinyin.STYLE_FIRST_LETTER,
  }).join("-");

  const link = `#${anchor}`;

  return (
    <>
      {main}
      <a href={link} className="anchor-link">
        §
      </a>
    </>
  );
};

export const H2 = ({ children }) => (
  <h2>
    <Content main={children} />
  </h2>
);
export const H3 = ({ children }) => (
  <h3>
    <Content main={children} />
  </h3>
);
export const H4 = ({ children }) => (
  <h4>
    <Content main={children} />
  </h4>
);
export const H5 = ({ children }) => (
  <h5>
    <Content main={children} />
  </h5>
);
export const H6 = ({ children }) => (
  <h6>
    <Content main={children} />
  </h6>
);
