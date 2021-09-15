import React, { useState } from "react";

import { Tabs, Tab, TabContent, Content } from "../components/Tabs";

const Dashboard = () => {
  const [active, setActive] = useState(0);

  function handleTabClick(event) {
    const Index = parseInt(event.target.id, 0);
    if (Index !== active) {
      setActive(Index);
    }
  }
  return (
    <>
      <Tabs>
        <Tab id={0} onClick={handleTabClick} active={active === 0}>
          Tab 1
        </Tab>
        <Tab id={1} onClick={handleTabClick} active={active === 1}>
          Tab 2
        </Tab>
        <Tab id={3} onClick={handleTabClick} active={active === 3}>
          Tab 3
        </Tab>
        <TabContent>
          <Content active={active == 0}>
            <h1>Contact 1</h1>
          </Content>
          <Content active={active == 1}>
            <h1>Contact 2</h1>
          </Content>
          <Content active={active == 3}>
            <h1>Contact 3</h1>
          </Content>
        </TabContent>
      </Tabs>
    </>
  );
};

export default Dashboard;

{
  /* <Tab value="Submit" active>
          Books
        </Tab>
        <Tab value="Reset">Members</Tab>
<Tabs></Tabs>*/
}
