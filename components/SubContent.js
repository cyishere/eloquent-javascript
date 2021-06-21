import styled from "styled-components";

import { COLORS, FONTS, SPACING } from "@/styles/constants";

const SubContent = ({ headingLines }) => {
  return (
    <Wrapper>
      <SpaceWrapper>
        <ContentTitle>本页目录</ContentTitle>
        <List role="list">
          {headingLines.map((heading) => (
            <li key={heading.text}>
              <Anchor href={heading.link}>{heading.text}</Anchor>
            </li>
          ))}
        </List>
      </SpaceWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex: 0 0 auto;
  width: 224px;
`;

const SpaceWrapper = styled.div`
  padding-top: ${SPACING.m25};
  padding-bottom: ${SPACING.m25};
  width: 224px;
  position: fixed;
  top: 0;
  right: 0;
`;

const ContentTitle = styled.h2`
  font-size: ${FONTS.normalFontSize};
  color: ${COLORS.textSecondary};
`;

const List = styled.ul`
  padding: 0;
`;

const Anchor = styled.a`
  display: block;
  color: inherit;
  text-decoration: none;
  padding-left: ${SPACING.m025};
  margin-bottom: ${SPACING.m025};

  &:hover {
    color: ${COLORS.magenta};
  }

  &.active {
    border-left: 2px solid ${COLORS.magenta};
  }
`;

export default SubContent;
