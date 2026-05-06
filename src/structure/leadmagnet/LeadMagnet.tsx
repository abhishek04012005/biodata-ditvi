"use client";
import React, { useState } from "react";
import EnquiryPopup from "../enquiryPopup/EnquiryPopup";

interface SampleBiodataDetails {
  modelNumber: string;
  language: string;
  type: string;
  amount: number;
}

const LeadMagnet: React.FC = () => {
  const [showGetNow, setShowGetNow] = useState<boolean>(true);
  const [showLeadMagnet, setShowLeadMagnet] = useState<boolean>(true);

  const sampleBiodataDetails: SampleBiodataDetails = {
    modelNumber: "0000",
    language: "English",
    type: "biodata",
    amount: 0,
  };

  return (
    <>
      {showLeadMagnet && (
        <EnquiryPopup
          heading="Enquiry Now for New Biodata"
          paragraph="Please fill the details"
          buttonTitle="Submit"
          isOpen={showGetNow}
          onClose={() => {
            setShowGetNow(false);
            setShowLeadMagnet(false);
          }}
          modelDetails={sampleBiodataDetails}
          isLeadMagnet={true}
        />
      )}
    </>
  );
};

export default LeadMagnet;