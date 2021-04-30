import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { COLORS } from "../styles/constants";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Container>
      <Head>
        <title>Eloquent JavaScript中文版</title>
        <meta name="description" content="Eloquent JavaScript中文版" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Title>Eloquent JavaScript中文版</Title>

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
            <p>
              此中文版内容翻译自英文电子书
              <a href="https://eloquentjavascript.net/index.html">
                Eloquent JavaScript
              </a>
              。
            </p>
            <p>
              这是一本关于JavaScript、编程及对电子产品的探索的书籍，您可以在这里阅读它的中文版。此中文版由本站自译，如有不当之处欢迎指正。
            </p>
          </Card>

          <Card>
            <CardTitle>目录 &rarr;</CardTitle>
            <ol>
              <List>
                <Link href="03_functions">03. 函数</Link>
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

const List = styled.li`
  list-style: none;
`;

export default Home;
