import Image from "next/image";
import styles from "./page.module.css";
import ButtonLink from "./_components/ButtonLink";
import NewsList from "./_components/NewsList";
import { News } from "@/app/_libs/microcms";
import Hero from "./_components/Hero";

const data: { contents: News[] } = {
  contents: [
    {
      id: "1",
      title: "渋谷にオフィスを移転しました",
      category: { name: "更新情報" },
      publishedAt: "2025/11/10",
      createdAt: "2025/11/10",
    },
    {
      id: "2",
      title: "当社CEOが業界リーダーTOP30に選出されました",
      category: { name: "更新情報" },
      publishedAt: "2025/11/10",
      createdAt: "2025/11/10",
    },
    {
      id: "3",
      title: "テスト記事です",
      category: { name: "更新情報" },
      publishedAt: "2025/11/11",
      createdAt: "2025/11/11",
    },
  ],
};

export default function Home() {
  const sliceData = data.contents.slice(0, 2);

  return (
    <>
      <Hero
        title={"テクノロジーの力で世界を変える"}
        description={
          "私たちは市場をリードしているグローバルテックカンパニーです。"
        }
      />
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={sliceData} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
