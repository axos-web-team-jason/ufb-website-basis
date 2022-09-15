import styles from "./HeroBanner.module.css";
import Link from "next/link";
import Image from "next/image";
import { extLinkAppend } from "../../utils/utils"; // needed for external links

export default function HeroBanner({ ...data }) {
  const { heroBanner, img, link, width, height, header } = data;

  return (
    <div id="__next" data-reactroot="">
      <section className={`${styles.Hero_bannerHero}`}>
        <div className={`${styles.utils_container}`}>
          <div
            className={`${styles.utils_flexRow} ${styles.utils_middle} ${styles.Hero_gutter} ${styles.Hero_shift}`}
          >
            <div className={`${styles.Hero_textWrapper}`}>
              <div className={`${styles.Hero_superTag}`}>
                {heroBanner.superHeader}
              </div>
              <h1 className={`${styles.utils_mainTitle}`}>
                {heroBanner.header}
                {/* {header} */}
              </h1>
              <p className={`${styles.utils_mb0}`}>{heroBanner.body}</p>
              <div
                className={`${styles.Hero_heroBtns} ${styles.utils_flexRow} ${styles.utils_middle}`}
              >
                <Link href={link} passHref>
                  <a
                    className={`${styles.utils_btnPrimary} ${
                      styles.utils_mb0
                    } ${extLinkAppend(link)}`}
                    role="button"
                  >
                    {heroBanner.button}
                  </a>
                </Link>
                <Link href="https://www.espn.com" passHref>
                  <a
                    className={`${styles.utils_btnSecondary} ${extLinkAppend(
                      link
                    )}`}
                  >
                    {heroBanner.link}
                  </a>
                </Link>
              </div>
            </div>
            <div className={`${styles.Hero_imgWrapper}`} role="figure">
              <Image src={img} priority={true} width={width} height={height} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
