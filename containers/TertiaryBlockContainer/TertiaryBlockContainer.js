import TertiaryBlock from "../../components/TertiaryBlock/TertiaryBlock";
import styles from "./TertiaryBlockContainer.module.css";

export default function TertiaryBlockContainer({ ...data }) {
  const { blocks } = data;
  const printBlocks = () => {
    return blocks.map((keyBlock, index) => {
      return (
        <TertiaryBlock
          key={keyBlock.id}
          color={keyBlock.color}
          secondaryBool={true}
          preHeader={keyBlock.preHeader}
          mainHeader={keyBlock.mainHeader}
          body={keyBlock.body}
          linkText={keyBlock.linkText}
        />
      );
    });
  };

  return (
    <section>
      <div className={`${styles.tertiaryBlockTest} utils-container`}>
        {printBlocks()}
      </div>
    </section>
  );
}
