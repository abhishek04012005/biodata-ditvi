import React, { JSX } from "react";
import BiodataCard from "../../structure/biodata/biodata";
import biodataList from "../../data/biodata";

const Biodata: React.FC = (): JSX.Element => {
  return (
    <div className="biodata">
      <BiodataCard
        title="Traditional Biodata Templates"
        subtitle="Traditionally structured biodata templates for modern service and marriage presentations"
        biodataDetails={biodataList}
        isSlider={true}
      />
    </div>
  );
};

export default Biodata;
