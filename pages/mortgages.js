import Head from "next/head";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import TwoUpBlockContainer from "../containers/TwoUpBlockContainer/TwoUpBlockContainer";
import MainBlockContainer from "../containers/MainContentBlockContainer/MainContentBlockContainer";
import CTA from "../components/CTA/CTA";
import TertiaryBlockContainer from "../containers/TertiaryBlockContainer/TertiaryBlockContainer";
import Articles from "../components/Articles/Articles";
import SecondaryBlockContainer from "../containers/SecondaryBlockContainer/SecondaryBlockContainer";
import MortgageLayout from "../components/Layout/MortgageLayout";
import mortgagesPage from "../data/mortgagesPage";
import Lucky from "../assets/lucky-promo-LP.png";

export default function Mortgages() {
  return (
    <section>
      <Head>
        <title>Low Interest Mortgage Options</title>
      </Head>
      <HeroBanner
        heroBanner={mortgagesPage.heroBanner} // from JSON
        img={Lucky}
        link={mortgagesPage.heroBanner.buttonLink}
      />
      <div className="grayBg section">
        <h1 className={`twoUpHeader centeredHeader`}>
          {mortgagesPage.twoUpHeader}
        </h1>
        <TwoUpBlockContainer blocks={mortgagesPage.twoUpBlock} />
      </div>
      <div className="section">
        <h1 className={`mainContentHeader centeredHeader`}>
          {mortgagesPage.mainContent.pageHeader}
        </h1>
        <MainBlockContainer block={mortgagesPage.mainContent} img={Lucky} />
      </div>
      <CTA content={mortgagesPage.CTA} />
      <div className="section">
        <h1 className={`mainContentHeader centeredHeader`}>
          {mortgagesPage.tertBlockHeader}
        </h1>
        <div className={`sectionBody `}>{mortgagesPage.tertTestimonial}</div>
        <TertiaryBlockContainer blocks={mortgagesPage.tile} />
      </div>
      <Articles />
    </section>
  );
}

Mortgages.getLayout = function getLayout(page) {
  return (
    <MortgageLayout disclosures={mortgagesPage.footer}>{page}</MortgageLayout>
  );
};
