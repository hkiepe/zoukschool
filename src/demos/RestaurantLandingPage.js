import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import TabGrid from "components/cards/TabCardGrid.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
// import DownloadApp from "components/cta/DownloadApp.js";
import Header from "../components/headers/light";
import Footer from "components/footers/FiveColumnWithInputForm.js";

import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  // const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <>
      <Hero
        heading={
          <>
            Improve & Develope with{" "}
            <HighlightedText>Online Dance Classes</HighlightedText>
          </>
        }
        description="Take responsibility for Your Dance style. Training and practice is the secret for growth into your dance. Improve your dance, develop your skills and experience great dance classes in the comfort of your home."
        imageSrc="https://static.wixstatic.com/media/c32add_d3e70ab3e99e4c3aaa49c69b1f753058~mv2.jpg/v1/fill/w_746,h_681,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/20220326-6L7A0014_edited.jpg"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Start Today"
        watchVideoButtonText="Meet Your Trainers"
      />
      <MainFeature
        subheading={<Subheading>Established Since 2014</Subheading>}
        heading={
          <>
            We've been working for
            <wbr /> <HighlightedText>over 5 years.</HighlightedText>
          </>
        }
        description={
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Latest Offers"
        imageSrc={
          "https://www.euro-dance-festival.com/wp-content/uploads/2023/02/EDF-23-Tiago-Emilia.jpg"
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <TabGrid
        heading={
          <>
            Checkout our <HighlightedText>classes</HighlightedText>
          </>
        }
      />
      <Features
        heading={
          <>
            Outstanding <HighlightedText>Services.</HighlightedText>
          </>
        }
        cards={[
          {
            //imageSrc: shopIconImageSrc,
            title: "Online Courses",
            description: "Learn Zouk from the beginning in the comfort of your home!",
            url: "https://#",
          },
          {
            // imageSrc: chefIconImageSrc,
            title: "Workshops",
            description: "Teaching service in your city or school all over the world!",
            url: "https://#",
          },
          {
            // imageSrc: celebrationIconImageSrc,
            title: "Private Classes",
            description: "Intensive training with more focus on you and your dance. ",
            url: "https://#",
          },
        ]}
        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
      <MainFeature2
        subheading={<Subheading>A Reputed Brand</Subheading>}
        heading={
          <>
            Why <HighlightedText>Choose Us ?</HighlightedText>
          </>
        }
        statistics={[
          {
            key: "Orders",
            value: "94000+",
          },
          {
            key: "Customers",
            value: "11000+",
          },
          {
            key: "Worksops",
            value: "1500+",
          },
        ]}
        primaryButtonText="Order Now"
        primaryButtonUrl="https://#"
        imageInsideDiv={false}
        imageSrc="https://static.wixstatic.com/media/c32add_d3e70ab3e99e4c3aaa49c69b1f753058~mv2.jpg/v1/fill/w_560,h_512,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/20220326-6L7A0014_edited.jpg"
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      />
      <Testimonial
        subheading=""
        heading={
          <>
            Customers <HighlightedText>Love Us.</HighlightedText>
          </>
        }
      />
      {/* <DownloadApp
        text={
          <>
            People around you are ordering delicious meals using the{" "}
            <HighlightedTextInverse>Treact App.</HighlightedTextInverse>
          </>
        }
      /> */}</>
  );
};
