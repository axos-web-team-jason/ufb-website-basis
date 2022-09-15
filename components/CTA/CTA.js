import styles from "./CTA.module.css";
import Link from "next/link";

export default function CTA({ ...data }) {
  const { content } = data;
  return (
    <div className={styles.ctaContainer}>
      <h1 className="centeredHeader">{content.text}</h1>
      <div className={`${styles.ctaBtn}`}>
        <Link href="/" passHref>
          <button>{content.button}</button>
        </Link>
      </div>
    </div>
  );
}
