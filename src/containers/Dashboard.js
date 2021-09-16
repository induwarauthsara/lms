import React, { useState } from "react";

import Tabs from "../components/Tabs";
import Spinner from "../components/spinner";

const Dashboard = () => {
  const contents = [
    { title: "Books", elements: <Spinner /> },
    { title: "Members", elements: <h1>Members Content</h1> },
  ];
  return <Tabs contents={contents} />;
};

export default Dashboard;
