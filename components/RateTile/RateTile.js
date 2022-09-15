import styles from "./RateTile.module.css";

export default function RateTile() {
  return (
    <div>
      <div class={`${styles.RateTile} ${styles.rateTileContainer}`}>
        <div class={`${styles.apyContainer} `}>
          <div class={styles.formulaText}>Earn Up To</div>
          <div>0.70%</div>
          <div class={styles.apy}>APY*</div>
        </div>
        <div class={styles.rateTileText}>
          <p>
            At UFB Direct, our innovative digital banking model allows us to
            keep our overhead costs down and pass our savings along to you in
            the form of free services, rewards programs, and exceptionally
            competitive interest rates. Our savings accounts are tailored to the
            unique needs and goals of our customers as we work to provide them
            with financial solutions and benefits that no other bank can offer.
          </p>
        </div>
      </div>
      ;
    </div>
  );
}
