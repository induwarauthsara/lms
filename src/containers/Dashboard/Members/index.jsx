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
import { addMember, getMembers } from "../../../api/memberAPI";
import { addMember as addMemberStore } from "../../../Store/membersSlice";
import { useDispatch } from "react-redux";

const Members = ({ catalog }) => {
  const [selectedMemberId, setSelectedMemberId] = useState(null);
  const [showAddMemberDialog, setShowAddMemberDialog] = useState(false);
  const [makeNewMemberId, setMakeNewMemberId] = useState(
    getMembers().length + 1
  );

  const dispatch = useDispatch();

  //Add Custom Members by Manually..
  if (!catalog) {
    catalog = [
      { id: "1", name: "Induwara Uhsara" },
      { id: "2", name: "Red Bird" },
    ];
  }

  const handleTabRowClick = (id) => {
    setSelectedMemberId(id);
  };

  const handleMemberViewBackClick = () => {
    setSelectedMemberId(null);
  };

  //   const handleAddMember = (confirmed, data) => {
  //     if (confirmed) {
  //       // Set New Member ID
  //       setMakeNewMemberId(makeNewMemberId + 1);
  //       var NewId = String(makeNewMemberId);
  //       const newData = { ...data, id: NewId };
  //       dispatch(addMemberStore(newData));
  //     }
  //     setShowAddMemberDialog(false);
  //     };

  const handleAddMember = (confirmed, data) => {
    if (confirmed) {
      addMember(data)
        .then((response) => {
          if (!response.error) {
            dispatch(addMemberStore(response.data));
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {});
    }
    setShowAddMemberDialog(false);
  };

  return selectedMemberId === null ? (
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
              setShowAddMemberDialog(true);
            }}
          >
            <IoAddSharp />
          </Button>
        </Container>
        <Table
          data={catalog}
          handleRowClick={handleTabRowClick}
          instructions="Click Row to View Member"
        />
      </FluidContainer>
      <AddEditMemberDialog
        show={showAddMemberDialog}
        handleClose={handleAddMember}
      />
    </>
  ) : (
    <Member id={selectedMemberId} handleBackClick={handleMemberViewBackClick} />
  );
};

export default Members;
