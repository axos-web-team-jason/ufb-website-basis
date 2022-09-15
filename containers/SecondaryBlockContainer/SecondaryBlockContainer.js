import SecondaryBlock from "../../components/SecondaryBlock/SecondaryBlock";
import styles from "./SecondaryBlockContainer.module.css";

export default function SecondaryBlockContainer({ ...data }) {
  const { blocks } = data;
  const printBlocks = () => {
    return blocks.map((keySecondBlock, index) => {
      return (
        <SecondaryBlock
          key={keySecondBlock.id}
          color={keySecondBlock.color}
          preHeader={keySecondBlock.preHeader}
          mainHeader={keySecondBlock.mainHeader}
          copy={keySecondBlock.copy}
          linkText={keySecondBlock.linkText}
          buttonText={keySecondBlock.buttonText}
        />
      );
    });
  };

  return (
    <section>
      <div className={`${styles.secondaryBlockTest} utils-container`}>
        {printBlocks()}
      </div>
    </section>
  );
}
