import React, { useState } from "react";
import { IoAddSharp } from "react-icons/io5";

import Table from "../../../components/Table";
import {
  FluidContainer,
  Button,
  Container,
} from "../../../components/CommonComponents";

import Book from "./Book";
import AddEditBookDialog from "./AddEditBookDialog";
import { addBook } from "../../../api/bookAPI";
import { addBook as addBookStore } from "../../../Store/booksSlice";
import { useDispatch } from "react-redux";

const Books = ({ catalog }) => {
  const [selectedBookId, setSelectedBookId] = useState(null);
  const [showAddBookDialog, setShowAddBookDialog] = useState(false);

  const dispatch = useDispatch();

  const handleTabRowClick = (id) => {
    setSelectedBookId(id);
    // alert(id);
    // console.log(id);
  };

  const handleBookViewBackClick = () => {
    setSelectedBookId(null);
  };

  const handleAddBook = (confirmed, data) => {
    if (confirmed) {
      addBook(data)
        .then((response) => {
          if (!response.error) {
            console.log(response.data);
            dispatch(addBookStore(response.data));
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {});
      // console.log(data);
    }
    setShowAddBookDialog(false);
  };

  return selectedBookId === null ? (
    <>
      <FluidContainer>
        <Container
          flexDirection="row"
          justifyContent="flex-end"
          alignItems="flex-start"
        >
          <Button
            rounded
            onClick={() => {
              setShowAddBookDialog(true);
            }}
          >
            <IoAddSharp />
          </Button>
        </Container>
        {/* {catalog[0] && catalog[0].title ? catalog[0].title : "Still Rendering"} */}
        <Table
          data={catalog}
          handleRowClick={handleTabRowClick}
          instructions="Click Row to View Book"
        />
      </FluidContainer>
      <AddEditBookDialog show={showAddBookDialog} handleClose={handleAddBook} />
    </>
  ) : (
    <Book id={selectedBookId} handleBackClick={handleBookViewBackClick} />
  );
};

export default Books;
