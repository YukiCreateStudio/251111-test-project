"use Client";

import classNames from "classnames";
import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Menu() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const open = () => setOpen(true);
  return (
    <div>
      <nav className={classNames(styles.nav, isOpen && styles.open)}>
        <ul className={styles.items}>
          <li>
            <Link href="/news">ニュース</Link>
          </li>
          <li>
            <Link href="/members">メンバー</Link>
          </li>
          <li>
            <Link href="/contact">お問い合わせ</Link>
          </li>
        </ul>
      </nav>

      <button className={styles.button} onClick={open}>
        <Image
          className={styles.button}
          src="/menu.svg"
          alt="メニュー"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
}
