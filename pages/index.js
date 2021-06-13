import Image from "next/image";

import Layout from "@/components/Layout";
import { ExternalLink } from "@/components/Link";

const Home = () => {
  const meta = {
    chapter: null,
    title: "本项目介绍",
    description: "Eloquent JavaScript 中文版",
  };

  return (
    <Layout meta={meta}>
      <figure>
        <Image
          src="/cover.jpeg"
          alt="Eloquent JavaScript中文版"
          width={300}
          height={413}
        />
      </figure>
      <p>
        本站内容翻译自英文电子书{" "}
        <ExternalLink href="https://eloquentjavascript.net/index.html">
          Eloquent JavaScript
        </ExternalLink>
        。
      </p>
      <p>
        这是一本关于JavaScript、编程及对探索电子产品的书籍，您可以在这里阅读它的中文版。
      </p>
      <h2 id="shuoming">说明</h2>
      <p>此中文版由本人自译，如有不当之处欢迎指正。</p>
    </Layout>
  );
};

export default Home;
