import styles from "./TwoUpBlock.module.css";
import Link from "next/link";
import Image from "next/image";
import greenCheck from "../../assets/green-check.png";
import APYbanner from "../../assets/125apy-588.png";

// Needs to dynamically load images

export default function TwoUpBlock({ ...data }) {
  const {
    mainBlockBool,
    superHeader,
    header,
    body,
    checks,
    links,
    button,
    sublink,
    img,
  } = data;

  const printList = (checks) => {
    return checks.map((checkList, index) => {
      return (
        <div
          key={`${checkList} ${index}`}
          className={styles.Home_bulletContainer}
        >
          <div className={styles.Home_bulletCheck}>
            <Image src={greenCheck} alt="checkmark" />
          </div>
          <div className={styles.Home_bulletContent}>{checkList}</div>
        </div>
      );
    });
  };

  const printLinks = (links) => {
    return links.map((linkList, index) => {
      return (
        <div
          key={`${linkList} ${index}`}
          className={styles.Home_applyNowContainer}
        >
          <Link href="/" passHref>
            <a className={styles.Home_applyNowText}>{linkList}</a>
          </Link>
        </div>
      );
    });
  };

  const blockOption = (mainBlockBool) => {
    // Object to be returned containing styles
    let compStyles = {};

    // Default Styles specified, currently for a gray block
    const MAIN_BLOCK = `${styles.mainBlockContainer}`;
    const SHOW_IMAGE = `${styles.twoUpBlockImg}`;

    // Object containing colors, reducing need for multiple functions
    compStyles = {
      container: `${
        mainBlockBool ? `${MAIN_BLOCK}` : `${styles.Home_container}`
      }`,
      image: `${!mainBlockBool ? `${SHOW_IMAGE}` : `${styles.disableImg}`}`,
    };

    return compStyles;
  };

  return (
    <div className={blockOption(mainBlockBool).container}>
      <div className={blockOption(mainBlockBool).image}>
        {/* <Image src={APYbanner} width={588} height={187} priority /> */}
        {/* <Image src={img} width={588} height={187} /> */}
      </div>
      <div className={styles.Home_twoUpBlockContent}>
        <div className={styles.Home_upperTitle}>{superHeader}</div>
        <div className={styles.Home_mainTitle}>{header}</div>
        <div className={styles.Home_subTitle}>{body}</div>
        {printList(checks)}
        {printLinks(links)}
        <div className={styles.Home_CTAButtonContainer}>
          <Link href="/" passHref>
            <a className={styles.Home_CTAButton}>{button}</a>
          </Link>
        </div>
        <div className={styles.Home_learnMoreContainer}>
          <div className={styles.Home_learnMoreButton}>
            <Link href="/" passHref>
              <a className={styles.Home_sublink}>{sublink}</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
