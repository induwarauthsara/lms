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
                <Button onClick={() => console.log("Call lend Api")}>
                  Lend
                </Button>
                <Button
                  danger
                  onClick={() => console.log("Call deleteBook Api")}
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
  );
};

export default Book;
