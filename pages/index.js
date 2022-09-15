import Link from "next/link";
import Mortgages from "./mortgages";
import Savings from "./savings";
import Layout from "../components/Layout/Layout";
import { useRouter } from "next/router";

export default function Home({ mortgages }) {
  // const router = useRouter();
  // const {
  //   query: { id },
  // } = router;
  // console.log(mortgages); // pass in items to Mortgage Page component

  return <>{<div>Home</div>}</>;
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
