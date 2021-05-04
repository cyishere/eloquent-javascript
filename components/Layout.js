import { useEffect } from "react";
import Link from "next/link";
import Prism from "prismjs";

import styled from "styled-components";
import SEO from "./SEO";
import Footer from "./Footer";

const Layout = ({ children, meta }) => {
  const { chapter, title, description } = meta;

  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, []);

  return (
    <Wrapper>
      <SEO title={title} description={description} />
      <Header>
        <h1>
          {chapter && <Chapter>{chapter}</Chapter>}
          {title}
        </h1>
        <nav>
          <Link href="/">
            <a>返回目录</a>
          </Link>
        </nav>
      </Header>
      <Post className="post">{children}</Post>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 1000px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  line-height: 2;
`;

const Chapter = styled.span`
  font-size: 1.2rem;
  font-weight: 300;
  display: block;
`;

const Post = styled.article`
  margin-bottom: 4rem;
`;

export default Layout;
