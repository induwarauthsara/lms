import React, { useState } from "react";

import Table from "../../components/Table";
import { FluidContainer } from "../../components/CommonComponents";

import Book from "./Book";

const Books = ({ catalog }) => {
  const [selectedBookId, setSelectedBookId] = useState(null);

  //Add Custom Book by Manually..
  // const updatedCatalog = [
  //   ...catalog,
  //   {
  //     id: "3",
  //     title: "dsa",
  //     author: "Rosd Dahl",
  //     isAvailable: true, 
  //     burrowedMemberId: "",
  //     burrowedDate: "",
  //   },
  // ];

  const handleTabRowClick = (id) => {
    setSelectedBookId(id);
    // alert(id);
    // console.log(id);
  };

  const handleBookViewBackClick = () => {
    setSelectedBookId(null);
  };

  return selectedBookId === null ? (
    <FluidContainer>
      {/* {catalog[0] && catalog[0].title ? catalog[0].title : "Still Rendering"} */}
      <Table
        data={catalog}
        handleRowClick={handleTabRowClick}
        instructions="Click Row to View Book"
      />
    </FluidContainer>
  ) : (
    <Book id={selectedBookId} handleBackClick={handleBookViewBackClick} />
  );
};

export default Books;
