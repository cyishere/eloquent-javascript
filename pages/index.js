import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { COLORS } from "@/styles/constants";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <Container>
      <Head>
        <title>Eloquent JavaScript中文版</title>
        <meta name="description" content="Eloquent JavaScript中文版" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Title>Eloquent JavaScript 中文版</Title>

        <Description>（第三版 2018）</Description>

        <Grid>
          <Card>
            <figure>
              <Image
                src="/cover.jpeg"
                alt="Eloquent JavaScript中文版"
                width={300}
                height={413}
              />
            </figure>
            <CardTitle>关于本站</CardTitle>
            <Content>
              本站内容翻译自英文电子书
              <a href="https://eloquentjavascript.net/index.html">
                Eloquent JavaScript
              </a>
              。
            </Content>
            <Content>
              这是一本关于JavaScript、编程及对探索电子产品的书籍，您可以在这里阅读它的中文版。此中文版由本站自译，如有不当之处欢迎指正。
            </Content>
          </Card>

          <Card>
            <CardTitle>目录 &rarr;</CardTitle>
            <ol>
              <List>
                <Link href="00_intro">
                  <a>介绍</a>
                </Link>
              </List>
              <List>
                <Link href="01_values">
                  <a>01. 值、类型和操作符</a>
                </Link>
              </List>
              <List>
                <Link href="02_program_structure">
                  <a>02. 程序结构</a>
                </Link>
              </List>
              <List>
                <Link href="03_functions">
                  <a>03. 函数</a>
                </Link>
              </List>
              <List>
                <Link href="04_data">
                  <a>04. 数据结构：对象和数组</a>
                </Link>
              </List>
              <List>
                <Link href="05_higher_order">
                  <a>05. 高级函数</a>
                </Link>
              </List>
              <List>
                <Link href="06_object">
                  <a>06. 对象的秘密</a>
                </Link>
              </List>
              <List>
                <Link href="07_robot">
                  <a>07. 项目案例：机器人</a>
                </Link>
              </List>
              <List>
                <Link href="08_error">
                  <a>08. Bug和错误</a>
                </Link>
              </List>
              <List>
                <Link href="09_regexp">
                  <a>09. 正则表达式</a>
                </Link>
              </List>
              <List>
                <Link href="10_modules">
                  <a>10. 模块</a>
                </Link>
              </List>
              <List>
                <Link href="11_async">
                  <a>11. 异步编程</a>
                </Link>
              </List>
              <List>
                <Link href="12_language">
                  <a>12. 项目案例：一个编程语言</a>
                </Link>
              </List>
              <List>
                <Link href="13_browser">
                  <a>13. JavaScript与浏览器</a>
                </Link>
              </List>
              <List>
                <Link href="14_dom">
                  <a>14. 文档对象模型</a>
                </Link>
              </List>
              <List>
                <Link href="15_event">
                  <a>15. 处理事件</a>
                </Link>
              </List>
              <List>
                <Link href="16_game">
                  <a>16. 项目案例：游戏</a>
                </Link>
              </List>
              <List>
                <Link href="17_canvas">
                  <a>17. 在Canvas上画画</a>
                </Link>
              </List>
              <List>
                <Link href="18_http">
                  <a>18. HTTP和表单</a>
                </Link>
              </List>
              <List>
                <Link href="19_paint">
                  <a>19. 项目案例：像素画编辑器</a>
                </Link>
              </List>
              <List>
                <Link href="20_node">
                  <a>20. Node.js</a>
                </Link>
              </List>
              <List>
                <Link href="21_skillsharing">
                  <a>21. 项目案例：技能分享网站</a>
                </Link>
              </List>
            </ol>
          </Card>
        </Grid>
      </Main>

      <Footer />
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  padding: 2rem 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
`;

const Description = styled.p`
  line-height: 1.5;
  font-size: 1.5rem;
`;

const Grid = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  margin-top: 3rem;
`;

const Card = styled.article`
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid ${COLORS.border};
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 45%;
`;

const CardTitle = styled.h2`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
`;

const Content = styled.p`
  margin-bottom: 1em;
`;

const List = styled.li`
  list-style: none;
  margin-bottom: 0.75rem;
`;

export default Home;
