const Content = ({ anchor, main }) => {
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

export const H2 = ({ anchor, children }) => (
  <h2>
    <Content anchor={anchor} main={children} />
  </h2>
);
export const H3 = ({ anchor, children }) => (
  <h3>
    <Content anchor={anchor} main={children} />
  </h3>
);
export const H4 = ({ anchor, children }) => (
  <h4>
    <Content anchor={anchor} main={children} />
  </h4>
);
export const H5 = ({ anchor, children }) => (
  <h5>
    <Content anchor={anchor} main={children} />
  </h5>
);
export const H6 = ({ anchor, children }) => (
  <h6>
    <Content anchor={anchor} main={children} />
  </h6>
);
