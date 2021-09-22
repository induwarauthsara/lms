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
      isAvailable: false,
      title: "Ethical Hacking Handbook - 2023",
    },
  ];

  const handleTabRowClick = (id) => {
    // console.log(id);
    alert(id);
  };
  return (
    <FluidContainer>
      {/* {catalog[0] && catalog[0].title ? catalog[0].title : "Still Rendering"} */}
      <Table
        data={updatedCatalog}
        handleRowClick={handleTabRowClick}
        instructions="Click Row to View Book"
      />
    </FluidContainer>
  );
};

export default Books;
