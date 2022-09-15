import Navbar from "../Navbar/Navbar";
import Sublinks from "../Footer/Sublinks";
import Footer from "../Footer/Footer";
import mortgagesPage from "../../data/mortgagesPage";
import Speedbump from "../Speedbump/Speedbump";
import { useEffect } from "react";
import { speedBumpFunction } from "../../utils/utils";

export default function MortgageLayout({ children, disclosures }) {
  useEffect(() => {
    speedBumpFunction();
  }, []);
  return (
    <>
      <Speedbump />
      <Navbar />
      <main>{children}</main>
      <Sublinks />
      <Footer info={disclosures} />
    </>
  );
}
