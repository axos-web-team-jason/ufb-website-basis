import Navbar from "../Navbar/Navbar";
import Sublinks from "../Footer/Sublinks";
import Footer from "../Footer/Footer";
import Speedbump from "../Speedbump/Speedbump";
import { useEffect } from "react";
import { speedBumpFunction } from "../../utils/utils";

export default function SavingsLayout({ children, disclosures }) {
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
