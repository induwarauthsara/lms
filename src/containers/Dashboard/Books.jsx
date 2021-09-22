import React from "react";

import Table from "../../components/Table";
import { FluidContainer } from "../../components/CommonComponents";

const Books = ({ catalog }) => {
  return (
    <FluidContainer>
      {/* {catalog[0] && catalog[0].title ? catalog[0].title : "Still Rendering"} */}
      <Table data={catalog} />
    </FluidContainer>
  );
};

export default Books;
