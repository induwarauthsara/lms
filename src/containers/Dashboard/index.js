import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Tabs from "../../components/Tabs";
import Spinner from "../../components/spinner";

import Books from "./Books/index";
import Members from "./Members/index";

import { setBooks } from "../../Store/booksSlice";
import { getBooks } from "../../api/bookAPI";
import { setMembers } from "../../Store/membersSlice";
import { getMembers } from "../../api/memberAPI";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  // const [books, setBooks] = useState([]);

  const booksFromRedux = useSelector((state) => state.books.value);
  const membersFromRedux = useSelector((state) => state.members.value);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    getBooks()
      .then((response) => {
        if (!response.error) {
          // console.log(response.data);
          // setBooks(response.data);
          dispatch(setBooks(response.data));
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
    dispatch(setMembers(getMembers()));
  }, [dispatch]);

  const contents = [
    {
      title: "Books",
      elements: <Books catalog={booksFromRedux} />,
    },
    {
      title: "Members",
      elements: <Members catalog={membersFromRedux} />,
    },
  ];
  return isLoading ? <Spinner msg="Loading" /> : <Tabs contents={contents} />;
};

export default Dashboard;
