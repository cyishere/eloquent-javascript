import styled from "styled-components";
import { COLORS } from "@/styles/constants";

const Note = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  padding: 1.78rem;
  border: 2px solid ${COLORS.khaki};
  background-color: ${COLORS.bgYellow};

  & > p:not(:last-child) {
    margin-bottom: 1.33rem;
  }

  & li:not(:last-child) {
    margin-bottom: 0.75rem;
  }
`;

export default Note;
