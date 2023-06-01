import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as StarIcon } from "images/star-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";
import CourseContext from "../../components/store/course-context";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${(props) => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const TabContent = tw(
  motion.div
)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(
  motion.a
)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;
const CardRatingContainer = tw.div`leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end`;
const CardRating = styled.div`
  ${tw`mr-1 text-sm font-bold flex items-end`}
  svg {
    ${tw`w-4 h-4 fill-current text-orange-400 mr-1`}
  }
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;

const CardReview = tw.div`font-medium text-xs text-gray-600`;

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;
const CardPrice = tw.p`mt-4 text-xl font-bold`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default ({
  heading = "Checkout our classes",
  tabs = {
    Basic: [
      {
        imageSrc:
          "https://static.wixstatic.com/media/c32add_eda5cec34e8044998f09717399dc3d05~mv2.png/v1/crop/x_0,y_47,w_1080,h_986/fill/w_380,h_347,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Beginners.png",
        title: "Beginners Bootcamp",
        content: "explaining the movement and 5 different variations",
        price: "€110.00",
        rating: "5.0",
        reviews: "87",
        url: "#",
      },
      {
        imageSrc:
          "https://static.wixstatic.com/media/c32add_e510a1c05b4f415189ffb7d76d3b8e30~mv2.png/v1/crop/x_0,y_47,w_1080,h_986/fill/w_380,h_347,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Sarrada.png",
        title: "Sarrada",
        content:
          "Full course explaining the movement and 5 different variations",
        price: "€110.00",
        rating: "4.8",
        reviews: "32",
        url: "#",
      },
      {
        imageSrc:
          "https://static.wixstatic.com/media/c32add_63bb6107f5ee49abbdeaf67c1c54b32c~mv2.png/v1/crop/x_0,y_47,w_1080,h_986/fill/w_380,h_347,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Cambre.png",
        title: "Cambre",
        content:
          "Right technique, different entries and exits and a full fitness workout",
        price: "€110.00",
        rating: "5.0",
        reviews: "87",
        url: "#",
      },
      {
        imageSrc:
          "https://static.wixstatic.com/media/c32add_d5231546b3834a92b15f3f5fe10129a9~mv2.png/v1/crop/x_0,y_47,w_1080,h_986/fill/w_380,h_347,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Bal%C3%A3o.png",
        title: "Balao Apagado",
        content:
          "Learn how to use your headmovements in the basic balão apagado and variations of it!",
        price: "€110.00",
        rating: "4.8",
        reviews: "32",
        url: "#",
      },
      {
        imageSrc:
          "https://static.wixstatic.com/media/c32add_87dd054f923e41a9b680b12578d39210~mv2.png/v1/crop/x_0,y_47,w_1080,h_986/fill/w_380,h_347,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Toalha.png",
        title: "Toalha",
        content:
          "We explain the technique using solo and partner work and show different variations",
        price: "€110.00",
        rating: "5.0",
        reviews: "87",
        url: "#",
      },
    ],
    Intermediate: getRandomCards(),
    Advanced: getRandomCards(),
  },
}) => {
  const { courses } = useContext(CourseContext);

  const template = {
    Basic: [
      {
        imageSrc:
          "https://static.wixstatic.com/media/c32add_eda5cec34e8044998f09717399dc3d05~mv2.png/v1/crop/x_0,y_47,w_1080,h_986/fill/w_380,h_347,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Beginners.png",
        title: "Beginners Bootcamp",
        content: "explaining the movement and 5 different variations",
        price: "€110.00",
        rating: "5.0",
        reviews: "87",
        url: "#",
      },
    ],
  };

  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */

  // const tabsKeys = Object.keys(tabs);
  // console.log("tabsKeys", tabsKeys);
  const test = ["A", "B", "C", "A", "C"];

  const tabsKeys = courses.reduce((accumulator, currentValue) => {
    console.log("accumulator", accumulator.courseLevel);
    console.log("currentValue", currentValue);
    return !accumulator.includes(currentValue.courseLevel)
      ? accumulator.courseLevel
      : [...accumulator, currentValue.courseLevel];
  });
  console.log("tabsKeys", tabsKeys);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);

  const tabsNew = tabsKeys.map((key, index) => {
    return courses.filter((course, index) => course.courseLevel === key);
  });

  console.log("tabsNew", tabsNew);

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header>{heading}</Header>
          <TabsControl>
            {tabsKeys.map((tabName, index) => (
              <TabControl
                key={index}
                active={activeTab === tabName}
                onClick={() => setActiveTab(tabName)}
              >
                {console.log("tabName", tabName)}
                {tabName}
              </TabControl>
            ))}
          </TabsControl>
        </HeaderRow>

        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale: 1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale: 0.8,
                display: "none",
              },
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey].map((card, index) => (
              <CardContainer key={index}>
                <Card
                  className="group"
                  href={card.url}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <CardImageContainer imageSrc={card.imageSrc}>
                    <CardRatingContainer>
                      <CardRating>
                        <StarIcon />
                        {card.rating}
                      </CardRating>
                      <CardReview>({card.reviews})</CardReview>
                    </CardRatingContainer>
                    <CardHoverOverlay
                      variants={{
                        hover: {
                          opacity: 1,
                          height: "auto",
                        },
                        rest: {
                          opacity: 0,
                          height: 0,
                        },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardButton>Buy Now</CardButton>
                    </CardHoverOverlay>
                  </CardImageContainer>
                  <CardText>
                    <CardTitle>{card.title}</CardTitle>
                    <CardContent>{card.content}</CardContent>
                    <CardPrice>{card.price}</CardPrice>
                  </CardText>
                </Card>
              </CardContainer>
            ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

/* This function is only there for demo purposes. It populates placeholder cards */
const getRandomCards = () => {
  const cards = [
    {
      imageSrc:
        "https://static.wixstatic.com/media/c32add_eda5cec34e8044998f09717399dc3d05~mv2.png/v1/crop/x_0,y_47,w_1080,h_986/fill/w_380,h_347,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Beginners.png",
      title: "Beginners Bootcamp",
      content: "explaining the movement and 5 different variations",
      price: "€110.00",
      rating: "5.0",
      reviews: "87",
      url: "#",
    },
    {
      imageSrc:
        "https://static.wixstatic.com/media/c32add_e510a1c05b4f415189ffb7d76d3b8e30~mv2.png/v1/crop/x_0,y_47,w_1080,h_986/fill/w_380,h_347,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Sarrada.png",
      title: "Sarrada",
      content: "Full course explaining the movement and 5 different variations",
      price: "€110.00",
      rating: "4.8",
      reviews: "32",
      url: "#",
    },
    {
      imageSrc:
        "https://static.wixstatic.com/media/c32add_63bb6107f5ee49abbdeaf67c1c54b32c~mv2.png/v1/crop/x_0,y_47,w_1080,h_986/fill/w_380,h_347,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Cambre.png",
      title: "Cambre",
      content:
        "Right technique, different entries and exits and a full fitness workout",
      price: "€110.00",
      rating: "5.0",
      reviews: "87",
      url: "#",
    },
    {
      imageSrc:
        "https://static.wixstatic.com/media/c32add_d5231546b3834a92b15f3f5fe10129a9~mv2.png/v1/crop/x_0,y_47,w_1080,h_986/fill/w_380,h_347,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Bal%C3%A3o.png",
      title: "Balao Apagado",
      content:
        "Learn how to use your headmovements in the basic balão apagado and variations of it!",
      price: "€110.00",
      rating: "4.8",
      reviews: "32",
      url: "#",
    },
    {
      imageSrc:
        "https://static.wixstatic.com/media/c32add_87dd054f923e41a9b680b12578d39210~mv2.png/v1/crop/x_0,y_47,w_1080,h_986/fill/w_380,h_347,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Toalha.png",
      title: "Toalha",
      content:
        "We explain the technique using solo and partner work and show different variations",
      price: "€110.00",
      rating: "5.0",
      reviews: "87",
      url: "#",
    },
  ];

  // Shuffle array
  return cards.sort(() => Math.random() - 0.5);
};
