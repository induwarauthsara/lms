import React, { useState, useEffect } from "react";

import Tabs from "../../components/Tabs";
import Spinner from "../../components/spinner";

import Books from "./Books";

import { getBooks } from "../../api/bookAPI";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getBooks()
      .then((response) => {
        if (!response.error) {
          console.log(response.data);
          setBooks(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  const contents = [
    {
      title: "Books",
      elements: <Books catalog={books} />,
    },
    {
      title: "Members",
      elements: <h1> Members Content </h1>,
    },
  ];
  return isLoading ? <Spinner msg="Loading" /> : <Tabs contents={contents} />;
};

export default Dashboard;
