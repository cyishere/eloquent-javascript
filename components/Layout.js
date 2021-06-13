import { useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Prism from "prismjs";
import { MDXProvider } from "@mdx-js/react";

import { COLORS, SPACING } from "@/styles/constants";
import SEO from "./SEO";
import Sidebar from "./Sidebar";
import SubContent from "./SubContent";
import { H2, H3, H4, H5, H6 } from "./Heading";

const Layout = ({ meta, children }) => {
  const { chapter, title, description } = meta;
  const currentRoute = useRouter().pathname.split("/")[1];

  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, []);

  const components = {
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
  };

  return (
    <Container>
      <SEO title={title} description={description} />

      <Sidebar currentRoute={currentRoute} />

      <Main>
        <BgWrapper>
          <MainWrapper>
            <Post className="post">
              <PageHeader>
                {chapter ? <Chapter>{chapter}</Chapter> : null}

                <h1>{title}</h1>
              </PageHeader>

              <MDXProvider components={components}>{children}</MDXProvider>
            </Post>
          </MainWrapper>

          <section>
            <SubContent />
          </section>
        </BgWrapper>
      </Main>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

const Main = styled.main`
  padding-left: calc((100% - 1448px) / 2 + 330px);
  display: flex;
  flex: 1;
`;

const BgWrapper = styled.div`
  background-color: ${COLORS.white};
  width: 100%;
  min-height: 100%;
  display: grid;
  grid-template-columns: 1fr 224px;
`;

const MainWrapper = styled.div`
  flex: 1 1 auto;
  margin: 0 auto;
  max-width: 750px;
  padding-top: ${SPACING.m3};
  padding-bottom: ${SPACING.m3};
`;

const Post = styled.article`
  width: 100%;
`;

const PageHeader = styled.header`
  border-bottom: 2px solid ${COLORS.grayLight};
  margin-bottom: ${SPACING.m2};
`;

const Chapter = styled.p`
  color: ${COLORS.textSecondary};
`;

export default Layout;
