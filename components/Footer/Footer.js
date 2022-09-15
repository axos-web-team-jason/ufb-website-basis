import styles from "./Footer.module.css";
import Image from "next/image";
import pageConstants from "../../data/pageConstants";

export default function Footer({ ...data }) {
  const { info } = data;

  const printDisclosures = () => {
    if (info) {
      return info.disclosures.map((key, index) => {
        return (
          <p key={key.id}>
            <sup>{info.disclosures[index].superscript} </sup>
            {info.disclosures[index].text}
          </p>
        );
      });
    } else {
      return "";
    }
  };

  const printYear = () => {
    let year = new Date().getFullYear().toString() + "";
    return year;
  };

  const EHLLoader = () => {
    return `https://www.axosbank.com/-/media/Logos/EHL-Logo-white`;
  };

  const FDICLoader = () => {
    return `https://www.axosbank.com/-/media/Logos/FDIC-Logo-white`;
  };

  return (
    <div>
      <footer className={`${styles.section}`}>
        <div className="utils-container">
          <p>{`© ${printYear()} ${pageConstants.footer.copyright}`}</p>
          <p>{pageConstants.footer.fdic}</p>
          <p>{pageConstants.footer.nmls}</p>
          {printDisclosures()}
          <div className={styles.imgContainer}>
            <Image
              loader={EHLLoader}
              src="EHLlogo.png"
              width={157}
              height={29}
            />
            <Image
              loader={FDICLoader}
              src="FDICLogo.png"
              width={84}
              height={30}
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
