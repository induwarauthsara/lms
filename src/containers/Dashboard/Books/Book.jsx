import React, { useState, useEffect } from "react";
import { IoReturnUpBack } from "react-icons/io5";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import {
  Button,
  Container,
  ContainerInline,
  FlexRow,
} from "../../../components/CommonComponents";
import Spinner from "../../../components/spinner";
import ComfirmationDialog from "../../../components/ComfirmationDialog";
import LendDialog from "./LendDialog";

import {
  deleteBook,
  getBook,
  lendBook,
  returnBook,
} from "../../../api/bookAPI";
import BookCover from "../../../shared/bookCover.png";
import { getTodayDate } from "../../../shared/utils";
import { getMembers } from "../../../api/memberAPI";
import { updatedBooks } from "../../../Store/booksSlice";

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
  const [book, setBook] = useState(null);
  const [showDeleteComfirmation, setShowDeleteComfirmation] = useState(false);
  const [showLendComfirmation, setShowLendComfirmation] = useState(false);
  const [showReturnComfirmation, setShowReturnComfirmation] = useState(false);

  const dispatch = useDispatch();

  const handleDelete = (comfirmation) => {
    if (comfirmation) {
      console.log("Comfirmation Delete Success");
      deleteBook(book.id);
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
      console.log("Book Return Success");
      returnBook(book.id);
    }
    setShowReturnComfirmation(false);
  };

  // Get Book Borrowed Member Name
  const [members, SetMembers] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const response = getMembers();
    SetMembers(response);
    setIsLoading(false);
  }, []);

  const bookBorrowedMember = (memberId) => {
    var member = members.find((item) => item.id === memberId);
    return member.name;
  };

  useEffect(() => {
    setIsLoading(true);
    getBook(id)
      .then((response) => {
        if (!response.error) {
          setBook(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

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
                      Borrowed by : {bookBorrowedMember(book.burrowedMemberId)}
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
