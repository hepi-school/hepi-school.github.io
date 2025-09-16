import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import RuangLingkupContent from "../../content/RuangLingkupContent.json";
import SocialMediaContent from "../../content/SocialMediaContent.json";

import SocialMediaBlock from "../../components/SocialMediaBlock";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const ContentBlockLotties = lazy(() => import("../../components/ContentBlockLotties"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="Hepi.png"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlockLotties
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="books 5_Lottie.json"
        id="about"
      />
      <ContentBlockLotties
        direction="right"
        title={MissionContent.title}
        content={MissionContent.text}
        section={RuangLingkupContent.section}
        icon="Book with bookmark.lottie"
        id="mission"
      />
      <MiddleBlock
        title={ProductContent.title}
        content={ProductContent.text}
        button={MiddleBlockContent.button}
      />
      <SocialMediaBlock
        title={SocialMediaContent.title}
        content={SocialMediaContent.text}
        count = {3}
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
