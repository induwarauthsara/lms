import React, { useState } from "react";
import { IoReturnUpBack } from "react-icons/io5";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import {
  Button,
  Container,
  ContainerInline,
  FlexRow,
} from "../../../components/CommonComponents";
import Spinner from "../../../components/spinner";
import ComfirmationDialog from "../../../components/ComfirmationDialog";
import LendDialog from "./LendDialog";
import AddEditBookDialog from "./AddEditBookDialog";

import {
  deleteBook,
  lendBook,
  returnBook,
  editBook,
} from "../../../api/bookAPI";
import BookCover from "../../../shared/bookCover.png";
import { getTodayDate } from "../../../shared/utils";
import {
  updatedBooks,
  deleteBook as deleteBookStore,
} from "../../../Store/booksSlice";

const ContainerInlineTextAlignLeft = styled(ContainerInline)`
  align-items: flex-start;
`;

const H1 = styled.h1`
  text-align: left;
  margin: 15px auto;
`;

const H2 = styled.h2`
  text-align: left;
  margin: 15px auto;
`;

const Book = ({ id, handleBackClick }) => {
  const [isLoading, setIsLoading] = useState(false);
  // const [book, setBook] = useState(null);   // console.log("This Code Removed. Becouse API Call replace to Redux");
  const [showDeleteComfirmation, setShowDeleteComfirmation] = useState(false);
  const [showLendComfirmation, setShowLendComfirmation] = useState(false);
  const [showReturnComfirmation, setShowReturnComfirmation] = useState(false);
  const [showEditComfirmation, setShowEditComfirmation] = useState(false);

  const dispatch = useDispatch();

  // Selectde Book Details veriable from Redux Store
  const books = useSelector((state) => state.books.value);
  const book = books.find((element) => element.id === id);

  const handleDelete = (comfirmation) => {
    if (comfirmation) {
      console.log("Comfirmation Delete Success");
      deleteBook(book.id)
        .then((response) => {
          if (!response.error) {
            // console.log(response.data);
            handleBackClick();
            dispatch(deleteBookStore(response.data));
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setShowDeleteComfirmation(false);
  };

  const handleLend = (comfirmation, memberId) => {
    if (comfirmation) {
      setIsLoading(true);
      lendBook(book.id, memberId, getTodayDate())
        .then((response) => {
          if (!response.error) {
            console.log(response.data);
            dispatch(updatedBooks(response.data));
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });

      // console.log(book.id, memberId, getTodayDate());
      // console.log("Book Lend to", memberId);
    }
    setShowLendComfirmation(false);
  };

  const handleReturn = (comfirmation) => {
    if (comfirmation) {
      // console.log("Book Return Success");
      returnBook(book.id)
        .then((response) => {
          if (!response.error) {
            console.log(response.data);
            dispatch(updatedBooks(response.data));
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
    setShowReturnComfirmation(false);
  };

  const handleEdit = (comfirmation, data) => {
    if (comfirmation) {
      // console.log("Book Edit Success");
      editBook(book.id, data)
        .then((response) => {
          if (!response.error) {
            console.log(response.data);
            dispatch(updatedBooks(response.data));
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
    setShowEditComfirmation(false);
  };
  const membersFromReduxStore = useSelector((state) => state.members.value);

  // Get Book Borrowed Member Name
  const bookBorrowedMember = (memberId, membersFromReduxStore) => {
    const MembersList = membersFromReduxStore;
    var member = MembersList.find((item) => item.id === memberId);
    var MemberFullName =
      member.firstName + " " + member.middleName + " " + member.lastName;
    return MemberFullName;
  };

  // console.log("This Code Removed. Becouse API Call replace to Redux");
  // useEffect(() => {
  //   setIsLoading(true);
  //   getBook(id)
  //     .then((response) => {
  //       if (!response.error) {
  //         setBook(response.data);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, [id]);

  return (
    <>
      <Container>
        <Button size="1.4" onClick={handleBackClick}>
          <IoReturnUpBack />
        </Button>
        {!isLoading && book !== null ? (
          <>
            <FlexRow>
              <ContainerInlineTextAlignLeft>
                <H1>{book.title}</H1>
                <H2>{`by ${book.author}`}</H2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  rerum quidem, quasi ab dolorem expedita quos rem veniam odit
                  accusantium.
                </p>
                {book.isAvailable ? (
                  ""
                ) : (
                  <>
                    <h4>
                      Borrowed by :{" "}
                      {bookBorrowedMember(
                        book.burrowedMemberId,
                        membersFromReduxStore
                      )}
                    </h4>
                    <h4>Borrowed date : {book.burrowedDate}</h4>
                  </>
                )}
              </ContainerInlineTextAlignLeft>

              <ContainerInline>
                <img
                  src={BookCover}
                  alt="Book Cover"
                  style={{
                    border: "1px solid black",
                    width: "200px",
                    alignItem: "right",
                  }}
                />
              </ContainerInline>
            </FlexRow>
            <FlexRow>
              {book.isAvailable ? (
                <>
                  <Button
                    onClick={() => {
                      setShowLendComfirmation(true);
                    }}
                  >
                    Lend
                  </Button>
                  <Button
                    onClick={() => {
                      setShowEditComfirmation(true);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    color="danger"
                    onClick={() => {
                      setShowDeleteComfirmation(true);
                    }}
                  >
                    Delete
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    onClick={() => {
                      setShowReturnComfirmation(true);
                    }}
                  >
                    Return
                  </Button>
                </>
              )}
            </FlexRow>
          </>
        ) : (
          <Spinner />
        )}
      </Container>

      <ComfirmationDialog
        handleClose={handleDelete}
        show={showDeleteComfirmation}
        headerText="Comfirm Book Deletion"
        detailText="Are you sure you want to delete this book? This action can't be undone"
      />

      <LendDialog handleClose={handleLend} show={showLendComfirmation} />

      <AddEditBookDialog
        handleClose={handleEdit}
        show={showEditComfirmation}
        data={book}
        isEdit="true"
      />

      <ComfirmationDialog
        handleClose={handleReturn}
        show={showReturnComfirmation}
        headerText="Comfirm Book Return"
        detailText="Press 'Yes' to Confirm Return"
      />
    </>
  );
};

export default Book;
