import React, { JSX } from "react";
import BiodataCard from "../../structure/biodata/biodata";
import resumeList from "../../data/biodata";

const Biodata: React.FC = (): JSX.Element => {
  return (
    <div className="biodata">
      <BiodataCard
        title="Traditional Biodata Templates"
        subtitle="Traditionally structured biodata templates for modern service and marriage presentations"
        resumeDetails={resumeList}
        isSlider={true}
      />
    </div>
  );
};

export default Biodata;
