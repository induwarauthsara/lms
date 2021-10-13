import React, { useState } from "react";
import { IoAddSharp } from "react-icons/io5";

import Table from "../../../components/Table";
import {
  FluidContainer,
  Button,
  Container,
} from "../../../components/CommonComponents";

import Member from "./Member";
import AddEditMemberDialog from "./AddEditMemberDialog";
import { addBook } from "../../../api/bookAPI";
import { addBook as addBookStore } from "../../../Store/booksSlice";
import { useDispatch } from "react-redux";

const Members = ({ catalog }) => {
  const [selectedBookId, setSelectedBookId] = useState(null);
  const [showAddBookDialog, setShowAddBookDialog] = useState(false);

  const dispatch = useDispatch();

  //Add Custom Members by Manually..
  if (!catalog) {
    catalog = [
      { id: "1", name: "Induwara Uhsara" },
      { id: "2", name: "Red Bird" },
    ];
  }

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
      <AddEditMemberDialog
        show={showAddBookDialog}
        handleClose={handleAddBook}
      />
    </>
  ) : (
    <Member id={selectedBookId} handleBackClick={handleBookViewBackClick} />
  );
};

export default Members;
