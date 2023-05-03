import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import ContactDetails from "components/cards/ThreeColContactDetails.js";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default () => {
  return (
    <>
      <ContactUsForm />
      <ContactDetails
        cards={[
          {
            title: "Cologne",
            description: (
              <>
                <Address>
                  <AddressLine>Street 1</AddressLine>
                  <AddressLine>12345 Cologne</AddressLine>
                </Address>
                <Email>info@onlinezoukschool.com</Email>
                <Phone>+49 (170) 111 888</Phone>
              </>
            )
          },
        ]}
      />
  </>);
};
