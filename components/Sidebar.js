import Link from "next/link";
import styled from "styled-components";

import { BREAKPOINTS, COLORS, FONTS, SPACING } from "@/styles/constants";

const Sidebar = ({ currentRoute }) => {
  return (
    <Wrapper>
      <Logo>
        <LogoEm>Eloquent JavaScript</LogoEm>
        中文版 <LogoAdd>第三版</LogoAdd>
      </Logo>
      <List role="list">
        <li>
          <Link href="/">
            <a>本项目介绍</a>
          </Link>
        </li>
      </List>
      <Hr />
      <ContentTitle>目录</ContentTitle>
      <Ol role="list">
        <ListItem>
          <Link href="00_intro">
            <a className={currentRoute === "00_intro" ? "active" : ""}>
              本书介绍
            </a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="01_values">
            <a className={currentRoute === "01_values" ? "active" : ""}>
              01. 值、类型和运算符
            </a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="02_program_structure">
            <a
              className={
                currentRoute === "02_program_structure" ? "active" : ""
              }
            >
              02. 程序结构
            </a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="03_functions">
            <a className={currentRoute === "03_functions" ? "active" : ""}>
              03. 函数
            </a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="04_data">
            <a className={currentRoute === "04_data" ? "active" : ""}>
              04. 数据结构：对象和数组
            </a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="05_higher_order">
            <a className={currentRoute === "05_higher_order" ? "active" : ""}>
              05. 高级函数
            </a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="06_object">
            <a className={currentRoute === "06_object" ? "active" : ""}>
              06. 对象的秘密
            </a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="07_robot">
            <a className={currentRoute === "07_robot" ? "active" : ""}>
              07. 项目案例：机器人
            </a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="08_error">
            <a className={currentRoute === "08_error" ? "active" : ""}>
              08. Bug和错误
            </a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="09_regexp">
            <a className={currentRoute === "09_regexp" ? "active" : ""}>
              09. 正则表达式
            </a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="10_modules">
            <a className={currentRoute === "10_modules" ? "active" : ""}>
              10. 模块
            </a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="11_async">
            <a className={currentRoute === "11_async" ? "active" : ""}>
              11. 异步编程
            </a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="12_language">
            <a className={currentRoute === "12_language" ? "active" : ""}>
              12. 项目案例：一个编程语言
            </a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="13_browser">
            <a className={currentRoute === "13_browser" ? "active" : ""}>
              13. JavaScript与浏览器
            </a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="14_dom">
            <a className={currentRoute === "14_dom" ? "active" : ""}>
              14. 文档对象模型
            </a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="15_event">
            <a className={currentRoute === "15_event" ? "active" : ""}>
              15. 处理事件
            </a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="16_game">
            <a className={currentRoute === "16_game" ? "active" : ""}>
              16. 项目案例：游戏
            </a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="17_canvas">
            <a className={currentRoute === "17_canvas" ? "active" : ""}>
              17. 在Canvas上画画
            </a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="18_http">
            <a className={currentRoute === "18_http" ? "active" : ""}>
              18. HTTP和表单
            </a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="19_paint">
            <a className={currentRoute === "19_paint" ? "active" : ""}>
              19. 项目案例：像素画编辑器
            </a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="20_node">
            <a className={currentRoute === "20_node" ? "active" : ""}>
              20. Node.js
            </a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="21_skillsharing">
            <a className={currentRoute === "21_skillsharing" ? "active" : ""}>
              21. 项目案例：技能分享网站
            </a>
          </Link>
        </ListItem>
      </Ol>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  @media (min-width: ${BREAKPOINTS.md}) {
    position: fixed;
    width: 330px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background-color: ${COLORS.grayLighter};
    top: 0;
    left: calc((100% - 1448px) / 2);
    border-right: 1px solid ${COLORS.grayLight};
    overflow-y: auto;
  }
`;

const Logo = styled.p`
  font-weight: 700;
  font-size: ${FONTS.h4FontSize};
  margin-left: ${SPACING.m15};
  margin-bottom: ${SPACING.m3};
`;

const LogoEm = styled.em`
  font-style: normal;
  color: ${COLORS.yellow};
  display: block;
`;

const LogoAdd = styled.span`
  display: block;
  font-family: ${FONTS.specialFont};
  font-size: ${FONTS.normalFontSize};
  color: ${COLORS.textSecondary};
`;

const Hr = styled.hr`
  display: block;
  height: 1px;
  background: ${COLORS.grayLight};
  border: none;
  margin-top: ${SPACING.m05};
  margin-bottom: ${SPACING.m05};
`;

const List = styled.ul`
  margin-left: ${SPACING.m15};
  padding: 0;
`;

const ContentTitle = styled.h2`
  margin-left: ${SPACING.m15};
  font-size: ${FONTS.smallFontSize};
  color: ${COLORS.textSecondary};
`;

const Ol = styled.ol`
  margin-left: ${SPACING.m15};
  padding: 0;
`;

const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: ${SPACING.m05};
  }

  a {
    display: block;
    padding: ${SPACING.m05} ${SPACING.m075};
    color: inherit;
    text-decoration: none;

    &:hover {
      background-color: ${COLORS.white};
    }

    &.active {
      background-color: ${COLORS.white};
      color: ${COLORS.magenta};
    }
  }
`;

export default Sidebar;
