import Slider from "react-slick";
import Link from "next/link";
import styles from "./Articles.module.css";
import content from "../../data/mortgagesPage";

// ────────────────────────────────────────────────────────────────────────────────

const sliderSettings = {
  infinite: false,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 0,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
};

// ────────────────────────────────────────────────────────────────────────────────

export default function Articles() {
  return (
    <section className={styles.articles}>
      <div className={styles.container}>
        <div className={styles.articlesHeader}>
          <h2 className={styles.mainTitle}>{content.header}</h2>
        </div>
        <div className={styles.articlesWrapper}>
          <Slider {...sliderSettings}>
            {content.articles.map((article, id) => {
              return (
                <Link key={id} href={article.url} passHref>
                  <article className={styles.articleItem}>
                    <div
                      className={styles.articleImg}
                      role="figure"
                      style={{ backgroundImage: `url(${article.img})` }}
                    ></div>
                    <div className={styles.infoWrapper}>
                      <Link href={article.url} passHref>
                        <a className={styles.btnGradient}>{article.type}</a>
                      </Link>
                      <h3 className={styles.articleTitle}>{article.title}</h3>
                      <p className={styles.articleText}>{article.body}</p>
                    </div>
                  </article>
                </Link>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
}
