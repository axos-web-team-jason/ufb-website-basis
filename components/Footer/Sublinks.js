import styles from "./Sublinks.module.css";
import Link from "next/link";
import pageConstants from "../../data/pageConstants.json";

export default function Sublinks() {
  const printLinks = () => {
    return pageConstants.linksArr.map((link, index) => {
      return (
        <div key={link.id}>
          <Link href={link.link} passHref>
            <a className={styles.color}>{link.page}</a>
          </Link>
        </div>
      );
    });
  };

  return (
    <div className={`${styles.links} utils-container`}>{printLinks()}</div>
  );
}
