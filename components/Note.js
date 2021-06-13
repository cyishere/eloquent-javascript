import styled from "styled-components";
import { COLORS, SPACING } from "@/styles/constants";

const Note = ({ children }) => {
  return (
    <Wrapper>
      <Icon
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </Icon>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: ${SPACING.m15};
  padding-left: ${SPACING.m25};
  background-color: ${COLORS.grayLighter};
  border-left: 3px solid ${COLORS.blue};
  margin-bottom: ${SPACING.m15};
  position: relative;

  ul,
  ol {
    margin-left: 0;
  }
`;

const Icon = styled.svg`
  width: 1.25em;
  height: 1.25em;
  color: ${COLORS.blue};
  position: absolute;
  top: ${SPACING.m15};
  left: ${SPACING.m1};
`;

export default Note;
