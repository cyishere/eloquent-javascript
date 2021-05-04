import { COLORS } from "@/styles/constants";
import styled from "styled-components";

const OriginLink = ({ href }) => {
  return (
    <OriginWrapper href={href} target="_blank" rel="noreferrer">
      在原英文网站运行本代码
    </OriginWrapper>
  );
};

const OriginWrapper = styled.a`
  background-color: ${COLORS.lightPurple};
  padding: 2px 4px;
  color: ${COLORS.primary};
  text-decoration: none;
  transition: background 0.5s;

  &:hover {
    background-color: transparent;
  }
`;

export { OriginLink };
