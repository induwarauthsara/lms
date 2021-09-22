import React from "react";

import Table from "../../components/Table";
import { FluidContainer } from "../../components/CommonComponents";

const Books = ({ catalog }) => {
  const updatedCatalog = [
    ...catalog,
    {
      author: "Induwara Uthsara",
      burrowedDate: "",
      burrowedMemberId: "",
      id: "3",
      isAvailable: "true",
      title: "Ethical Hacking Handbook",
    },
  ];
  return (
    <FluidContainer>
      {/* {catalog[0] && catalog[0].title ? catalog[0].title : "Still Rendering"} */}
      <Table data={updatedCatalog} />
    </FluidContainer>
  );
};

export default Books;
