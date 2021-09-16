import React, { useState } from "react";

import Tabs from "../components/Tabs";

const Dashboard = () => {
  const contents = [
    { title: "Books", elements: <h1>Books Content</h1> },
    { title: "Members", elements: <h1>Members Content</h1> },
  ];
  return <Tabs contents={contents} />;
};

export default Dashboard;
