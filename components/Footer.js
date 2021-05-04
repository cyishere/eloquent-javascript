import styled from "styled-components";
import { COLORS } from "@/styles/constants";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <Wrapper>
      <p>{year} &copy; womenlai.dev</p>
      <p>
        由
        <a
          href="https://cyishere.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          CY
        </a>
        翻译
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid ${COLORS.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
`;

export default Footer;
