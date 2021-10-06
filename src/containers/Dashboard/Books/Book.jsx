import React, { useState, useEffect } from "react";
import { IoReturnUpBack } from "react-icons/io5";
import styled from "styled-components";

import {
  Button,
  Container,
  ContainerInline,
  FlexRow,
} from "../../../components/CommonComponents";
import Spinner from "../../../components/spinner";
import ComfirmationDialog from "../../../components/ComfirmationDialog";
import LendDialog from "./LendDialog";

import { getBook } from "../../../api/bookAPI";
import BookCover from "../../../shared/bookCover.png";

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

  const handleDelete = (comfirmation) => {
    if (comfirmation) {
      console.log("Comfirmation Delete Success");
    }
    setShowDeleteComfirmation(false);
  };

  const handleLend = (comfirmation, member) => {
    if (comfirmation) {
      console.log("Book Lend to", member);
    }
    setShowLendComfirmation(false);
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
                    <h4>{`Burrowed by : ${book.burrowedMemberId}`}</h4>
                    <h4>{`Burrowed date : ${book.borrowedData}`}</h4>
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
                  <h4>{`Burrowed by : ${book.burrowedMemberId}`}</h4>
                  <H2>{`Burrowed date : ${book.borrowedData}`}</H2>
                  <Button onClick={() => console.log("Call retun Api")}>
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
    </>
  );
};

export default Book;
