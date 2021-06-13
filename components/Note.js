import styled from "styled-components";
import { COLORS, SPACING } from "@/styles/constants";

const Note = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  padding: ${SPACING.m15};
  background-color: ${COLORS.grayLighter};
  border-left: 3px solid ${COLORS.blue};
  margin-bottom: ${SPACING.m15};

  ul,
  ol {
    margin-left: 0;
  }
`;

export default Note;
