import pinyin from "pinyin";

export const anchor = (content) => {
  const id = pinyin(content, {
    style: pinyin.STYLE_FIRST_LETTER,
  }).join("_");

  return { id, link: `#${id}` };
};

export const getHeadings = (source) => {
  const regex = /<h2>(.*?)<\/h2>/g;

  if (source.match(regex)) {
    return source.match(regex).map((heading) => {
      const headingText = heading.replace("<h2>", "").replace("</h2>", "");

      const { link } = anchor(headingText);

      return {
        text: headingText,
        link,
      };
    });
  }

  return [];
};
