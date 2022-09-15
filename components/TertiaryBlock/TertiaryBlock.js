import styles from "./TertiaryBlock.module.css";
import Link from "next/link";

export default function TertiaryBlock({ ...data }) {
  const { preHeader, mainHeader, body, linkText, color } = data;

  const arr = [styles.bodyWrapper, styles.lightText];
  const selectorUtil = (params) => {
    let selectionArr = [];
    selectionArr = params.map((element) => {
      return `\${${element}}`;
    });
    return selectionArr.join();
  };

  const classSelector = (arr) => {
    let parsedArr = selectorUtil(arr);
    console.log(parsedArr);
    const prefix = parsedArr[0];
    console.log(prefix);

    if (color === "primaryStyle" || color === "lightStyle") {
      return `${prefix}`;
    } else {
      return `${prefix} ${parsedArr[1]}`;
    }
  };

  const blockColor = () => {
    const prefix = `${styles.primaryBlock}`;
    if (color === "primaryStyle") {
      return `${prefix}`;
    } else if (color === "lightStyle") {
      return `${prefix} ${styles.lightBlock}`;
    } else {
      return `${prefix} ${styles.darkBlock}`;
    }
  };

  const preHeaderColor = () => {
    const prefix = `${styles.preHeader}`;
    if (color === "primaryStyle" || color === "lightStyle") {
      return `${prefix}`;
    } else {
      return `${prefix} ${styles.lightText}`;
    }
  };

  const headerColor = () => {
    const prefix = `${styles.mainHeader}`;
    if (color === "primaryStyle" || color === "lightStyle") {
      return `${prefix}`;
    } else {
      return `${prefix} ${styles.darkText}`;
    }
  };

  const bodyColor = () => {
    const prefix = `${styles.bodyWrapper}`;
    if (color === "primaryStyle" || color === "lightStyle") {
      return `${prefix}`;
    } else {
      return `${prefix} ${styles.whiteBody}`;
    }
  };

  const linkColor = () => {
    const prefix = `${styles.container} ${styles.linkContainer}`;
    if (color === "primaryStyle" || color === "lightStyle") {
      return `${prefix}`;
    } else {
      return `${prefix} ${styles.secondaryMode} ${styles.secondaryText}`;
    }
  };

  const arrowColor = () => {
    const prefix = `${styles.container} ${styles.centerLinkContainer}`;
    if (color === "primaryStyle" || color === "lightStyle") {
      return `${prefix}`;
    } else {
      return `${prefix} ${styles.secondaryMode} `;
    }
  };

  return (
    <div className={blockColor()}>
      <div className={preHeaderColor()}>
        <span>{preHeader}</span>
      </div>
      <div className={headerColor()}>{mainHeader}</div>
      <div className={bodyColor()}>
        <p>{body}</p>
      </div>
      {/* <div className={classSelector(color, arr)}>
        <p>{body}</p>
      </div> */}
      <div className={arrowColor()}>
        <Link href="/" passHref>
          <a className={linkColor()}>{linkText}</a>
        </Link>
      </div>
    </div>
  );
}
