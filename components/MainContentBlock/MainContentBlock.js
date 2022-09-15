import styles from "./MainContentBlock.module.css";
import TwoUpBlock from "../TwoUpBlock/TwoUpBlock";
import Image from "next/image";

export default function MainContentBlock({ ...data }) {
  const {
    superHeader,
    header,
    body,
    checks,
    links,
    button,
    sublink,
    img,
    width,
    height,
  } = data;
  return (
    <>
      <div className={styles.container}>
        <TwoUpBlock
          mainBlockBool={true}
          superHeader={superHeader}
          header={header}
          body={body}
          checks={checks}
          links={links}
          button={button}
          sublink={sublink}
          toggleImg={false}
        />
        <div className={styles.imgContainer}>
          <Image src={img} alt="" width={width} height={height} />
        </div>
      </div>
    </>
  );
}
