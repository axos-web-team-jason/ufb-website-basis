import Head from "next/head";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import RateTile from "../components/RateTile/RateTile";
import TertiaryBlockContainer from "../containers/TertiaryBlockContainer/TertiaryBlockContainer";
import Articles from "../components/Articles/Articles";
import Form from "../components/Form/Form";
import SecondaryBlockContainer from "../containers/SecondaryBlockContainer/SecondaryBlockContainer";
import savingsPage from "../data/savingsPage";
import ufbSavings from "../assets/ufb-savings.png";
import SavingsLayout from "../components/Layout/SavingsLayout";

export default function Savings() {
  return (
    <section>
      <Head>
        <title>Savings</title>
      </Head>
      <HeroBanner
        heroBanner={savingsPage.heroBanner} // from JSON
        img={ufbSavings}
        link={savingsPage.heroBanner.buttonLink}
        width={924}
        height={586}
      />
      <div className="section grayBg">
        <RateTile />
      </div>
      <div className=" section">
        <h1 className={`centeredHeader darkText`}>
          {savingsPage.secondaryBlockHeader}
        </h1>
        <SecondaryBlockContainer blocks={savingsPage.secondaryBlock} />
      </div>
      <div className="section primaryBg">
        <h1 className={`centeredHeader darkText`}>
          {savingsPage.tertBlockHeader}
        </h1>
        <TertiaryBlockContainer blocks={savingsPage.tile} />
      </div>
      <div>
        <Form />
      </div>
      <Articles />
    </section>
  );
}

Savings.getLayout = function getLayout(page) {
  return <SavingsLayout disclosures={savingsPage.footer}>{page}</SavingsLayout>;
};
