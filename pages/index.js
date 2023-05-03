import Head from "next/head";
import Showcase from "../Components/Showcase";
import FeaturedEpisode from "../Components/FeaturedEpisode";
import Subscribe from "../Components/Subscribe";
import Footer from "../Components/Footer";
import styles from "../styles/Home.module.css";
import Navigation from "../Components/Navigation";

export default function Home() {
  return (
    <>
    <Navigation />
      <Showcase />
      <FeaturedEpisode />
      <Subscribe />
      <Footer />
    </>
  );
}
