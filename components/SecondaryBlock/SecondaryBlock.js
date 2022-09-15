import styles from "./SecondaryBlock.module.css";
import Link from "next/link";

export default function SecondaryBlock({ ...data }) {
  const { preHeader, mainHeader, copy, linkText, buttonText, color } = data; // Props

  // CSS Selectors
  const blockColor = () => {
    const DEFAULT_BLOCK = `${styles.primaryBlock}`;
    if (color === "primaryStyle") {
      return `${DEFAULT_BLOCK}`;
    } else if (color === "lightStyle") {
      return `${DEFAULT_BLOCK} ${styles.lightBlock}`;
    } else {
      return `${DEFAULT_BLOCK} ${styles.darkBlock}`;
    }
  };

  /* Experimental - turns 4 functions into 1.
     Takes in one color parameter determined by passed in prop
     Implement if only given two options, 3 or more then use else if
     Customizable for individual elements, just add or remove styles
  */
  const blockOption = () => {
    // Object to be returned containing styles
    let compStyles = {};

    // Default Styles specified, currently for a gray block
    const DEFAULT_PREHEADER = `${styles.preHeader}`;
    const DEFAULT_HEADER = `${styles.mainHeader}`;
    const DEFAULT_COPY = `${styles.copyWrapper}`;
    const DEFAULT_BUTTON = `${styles.container} ${styles.buttonLinkContainer}`;

    // Boolean to determine block color
    let colorBool = color === "primaryStyle" || color === "lightStyle";

    // Object containing colors, reducing need for multiple functions
    compStyles = {
      preHeaderColor: `${
        colorBool
          ? `${DEFAULT_PREHEADER}`
          : `${DEFAULT_PREHEADER} ${styles.secondaryText}`
      }`,

      headerColor: `${
        colorBool
          ? `${DEFAULT_HEADER}`
          : `${DEFAULT_HEADER} ${styles.lightText}`
      }`,

      copyColor: `${
        colorBool ? `${DEFAULT_COPY}` : `${DEFAULT_COPY} ${styles.whiteCopy}`
      }`,

      buttonColor: `${
        colorBool
          ? `${DEFAULT_BUTTON}`
          : `${DEFAULT_BUTTON} ${styles.secondaryMode} ${styles.secondaryButton}`
      }`,
    };

    return compStyles;
  };

  const bo = blockOption();

  /* Component rendered
     Function still allows for readability in HTML */
  return (
    <div className={blockColor()}>
      <div className={bo.preHeaderColor}>
        <span>{preHeader}</span>
      </div>
      <div className={bo.headerColor}>{mainHeader}</div>
      <div className={bo.copyColor}>
        <p>{copy}</p>
      </div>
      <div className={`${styles.container} ${styles.linkContainer}`}>
        <Link href="/" passHref>
          <a>{linkText[0]}</a>
        </Link>
        <Link href="/" passHref>
          <a>{linkText[1]}</a>
        </Link>
      </div>
      <div className={bo.buttonColor}>
        <div className={styles.buttonWrapper}>
          <Link href="/" passHref>
            <button>{buttonText}</button>
          </Link>
        </div>
        <Link href="/" passHref>
          <a className={`${styles.container} ${styles.linkContainer}`}>
            {linkText[2]}
          </a>
        </Link>
      </div>
    </div>
  );
}

// Working Code, just deprecated
// if (colorBool) {
//   compStyles = {
//     preHeaderColor: `${DEFAULT_PREHEADER}`,
//     headerColor: `${DEFAULT_HEADER}`,
//     copyColor: `${DEFAULT_COPY}`,
//     buttonColor: `${DEFAULT_BUTTON}`,
//   };
// } else {
//   compStyles = {
//     preHeaderColor: `${DEFAULT_PREHEADER} ${styles.secondaryText}`,
//     headerColor: `${DEFAULT_HEADER} ${styles.lightText}`,
//     copyColor: `${DEFAULT_COPY} ${styles.whiteCopy}`,
//     buttonColor: `${DEFAULT_BUTTON} ${styles.secondaryMode} ${styles.secondaryButton}`,
//   };
// }

// ` ${
//   colorBool
//     ? (compStyles = {
//         preHeaderColor: `${DEFAULT_PREHEADER}`,
//         headerColor: `${DEFAULT_HEADER}`,
//         copyColor: `${DEFAULT_COPY}`,
//         buttonColor: `${DEFAULT_BUTTON}`,
//       })
//     : (compStyles = {
//         preHeaderColor: `${DEFAULT_PREHEADER} ${styles.secondaryText}`,
//         headerColor: `${DEFAULT_HEADER} ${styles.lightText}`,
//         copyColor: `${DEFAULT_COPY} ${styles.whiteCopy}`,
//         buttonColor: `${DEFAULT_BUTTON} ${styles.secondaryMode} ${styles.secondaryButton}`,
//       })
// }`;

// const preHeaderColor = (color) => {
//   const prefix = `${styles.preHeader}`;

//   return color === "primaryStyle" || color === "lightStyle"
//     ? `${prefix}`
//     : `${prefix} ${styles.secondaryText}`;
// };

// const headerColor = (color) => {
//   const prefix = `${styles.mainHeader}`;

//   return color === "primaryStyle" || color === "lightStyle"
//     ? `${prefix}`
//     : `${prefix} ${styles.lightText}`;
// };

// const copyColor = (color) => {
//   const prefix = `${styles.copyWrapper}`;

//   return color === "primaryStyle" || color === "lightStyle"
//     ? `${prefix}`
//     : `${prefix} ${styles.whiteCopy}`;
// };

// const linkColor = (color) => {
//   const prefix = `${styles.container} ${styles.linkContainer}`;

//   return color === "primaryStyle" || color === "lightStyle"
//     ? `${prefix}`
//     : `${prefix} ${styles.secondaryMode} ${styles.secondaryText}`;
// };

// const buttonColor = (color) => {
//   const prefix = `${styles.container} ${styles.buttonLinkContainer}`;

//   return color === "primaryStyle" || color === "lightStyle"
//     ? `${prefix}`
//     : `${prefix} ${styles.secondaryMode} ${styles.secondaryButton}`;
// };
