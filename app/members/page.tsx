import styles from "./page.module.css";
import { MembersType } from "../_libs/microcms";
import Image from "next/image";

const data: { contents: MembersType[] } = {
  contents: [
    {
      id: "1",
      image: { url: "/img-member1.jpg", width: 400, height: 400 },
      name: "デイビッド・チャン",
      position: "CEO",
      profile: "経営戦略とビジョンを担当。",
    },
    {
      id: "2",
      image: { url: "/img-member2.jpg", width: 400, height: 400 },
      name: "マリア・スミス",
      position: "Designer",
      profile: "ブランドデザインをリード。",
    },
    {
      id: "3",
      image: { url: "/img-member3.jpg", width: 400, height: 400 },
      name: "ケン・タナカ",
      position: "Engineer",
      profile: "Web開発と技術監修を担当。",
    },
  ],
};

export default function Page() {
  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p>メンバーが登録されていません。</p>
      ) : (
        <ul>
          {data.contents.map((member) => (
            <li key={member.id} className={styles.list}>
              <Image
                className={styles.image}
                src={member.image.url}
                alt=""
                width={member.image.width}
                height={member.image.height}
              />
              <dl>
                <dt className={styles.name}>{member.name}</dt>
                <dd className={styles.position}>{member.position}</dd>
                <dd className={styles.profile}>{member.profile}</dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
