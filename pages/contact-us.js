import Head from "next/head";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import TwoUpBlockContainer from "../containers/TwoUpBlockContainer/TwoUpBlockContainer";
import SavingsLayout from "../components/Layout/SavingsLayout";
import contactUsHero from "../assets/WomanLaptop.png";
import Form from "../components/Form/Form";
import Articles from "../components/Articles/Articles";
import contactUsPage from "../data/contactUsPage";
import mailUs from "../assets/Card_MailUs.jpg";
import specialDelivery from "../assets/Card_SpecialDelivery.jpg";

export default function ContactUs() {
  let pictures = [mailUs, specialDelivery];
  return (
    <div>
      <section>
        <Head>
          <title>Contact Us</title>
        </Head>
        <HeroBanner
          heroBanner={contactUsPage.heroBanner} // from JSON
          img={contactUsHero}
          link={contactUsPage.heroBanner.buttonLink}
          width={924}
          height={633}
        />
        <div className="section">
          <h1 className={`centeredHeader darkText`}>Mail Us</h1>
          <TwoUpBlockContainer blocks={contactUsPage.twoUpBlock} />
        </div>
        <div>
          <Form />
        </div>
        <Articles />
      </section>
    </div>
  );
}

ContactUs.getLayout = function getLayout(page) {
  return <SavingsLayout>{page}</SavingsLayout>;
};
