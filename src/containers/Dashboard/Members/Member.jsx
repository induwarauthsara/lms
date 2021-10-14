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
import AddEditMemberDialog from "./AddEditMemberDialog";

// import { deletemember, editmember } from "../../../api/memberAPI";
import memberCover from "../../../shared/memberCover.png";
// import { getTodayDate } from "../../../shared/utils";
import { getMembers } from "../../../api/memberAPI";
import {
  updatedMembers,
  deleteMember as deleteMemberStore,
} from "../../../Store/membersSlice";

const ContainerInlineTextAlignLeft = styled(ContainerInline)`
  align-items: flex-start;
  flex: 2;
`;

const H1 = styled.h1`
  text-align: center;
  line-height: 2.3rem;
  margin: 10px auto;
`;

const H2 = styled.h2`
  text-align: center;
  margin: 10px auto;
`;
const H4 = styled.h4`
  text-align: center;
  margin: 0px auto;
`;

const Member = ({ id, handleBackClick }) => {
  const [isLoading, setIsLoading] = useState(false);
  // const [member, setmember] = useState(null);   // console.log("This Code Removed. Becouse API Call replace to Redux");
  const [showDeleteComfirmation, setShowDeleteComfirmation] = useState(false);
  const [showEditComfirmation, setShowEditComfirmation] = useState(false);

  const dispatch = useDispatch();

  // Selectde member Details veriable from Redux Store
  const members = useSelector((state) => state.members.value);
  const member = members.find((element) => element.id === id);

  const handleDelete = (comfirmation) => {
    if (comfirmation) {
      handleBackClick();
      console.log("Comfirmation Delete Success");
      dispatch(deleteMemberStore(member.id));
    }
    setShowDeleteComfirmation(false);
  };

  const handleEdit = (comfirmation, data) => {
    if (comfirmation) {
      // console.log("member Edit Success");
      dispatch(updatedMembers(member.id));
    }
    setShowEditComfirmation(false);
  };

  // // Check is Member borrowed member?
  // const memberBorrowedMember = (memberId) => {
  //   const MembersList = getMembers();
  //   var member = MembersList.find((item) => item.id === memberId);
  //   return member.name;

  // Get Book Borrowed Member Name
  var MemberFullName =
    member.firstName + " " + member.middleName + " " + member.lastName;

  return (
    <>
      <Container>
        <Button size="1.4" onClick={handleBackClick}>
          <IoReturnUpBack />
        </Button>
        {!isLoading && member !== null ? (
          <>
            <FlexRow width="100%">
              <ContainerInline>
                <img
                  src={memberCover}
                  alt="Member Cover"
                  style={{
                    width: "200px",
                    alignItem: "right",
                    margin: "auto",
                  }}
                />
                <H1>{MemberFullName}</H1>
                <H4>{member.userType} Member</H4>
                <br />
                <H2>{`Member ID : ${member.id}`}</H2>
              </ContainerInline>

              <ContainerInlineTextAlignLeft>
                <H1>
                  <u>Member Details</u>
                </H1>
                <H4>NIC No. : {member.nic}</H4>
                <H4>Contact No. : {member.contactNo}</H4>
                <H4>Address : {member.address}</H4>
              </ContainerInlineTextAlignLeft>
            </FlexRow>

            <FlexRow>
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
            </FlexRow>
          </>
        ) : (
          <Spinner />
        )}
      </Container>

      <ComfirmationDialog
        handleClose={handleDelete}
        show={showDeleteComfirmation}
        headerText="Comfirm Member Deletion"
        detailText="Are you sure you want to delete this member? This action can't be undone"
      />

      <AddEditMemberDialog
        handleClose={handleEdit}
        show={showEditComfirmation}
        data={member}
        isEdit="true"
      />
    </>
  );
};

export default Member;
