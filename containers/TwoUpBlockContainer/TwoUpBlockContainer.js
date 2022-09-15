import TwoUpBlock from "../../components/TwoUpBlock/TwoUpBlock";
import styles from "./TwoUpBlockContainer.module.css";

export default function TwoUpBlockContainer({ ...data }) {
  const { blocks } = data;
  const printBlocks = () => {
    return blocks.map((twoBlock, index) => {
      return (
        <TwoUpBlock
          key={twoBlock.id}
          superHeader={twoBlock.superHeader}
          header={twoBlock.header}
          body={twoBlock.body}
          checks={twoBlock.checks}
          links={twoBlock.links}
          button={twoBlock.button}
          sublink={twoBlock.sublink}
          img={twoBlock.img}
        />
      );
    });
  };
  return (
    <section>
      <div className={`${styles.twoUpBlockTest} utils-container`}>
        {printBlocks()}
      </div>
    </section>
  );
}
