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
import { getMembers } from "../../../api/memberAPI";
import { addMember as addMemberStore } from "../../../Store/membersSlice";
import { useDispatch } from "react-redux";

const Members = ({ catalog }) => {
  const [selectedMemberId, setSelectedMemberId] = useState(null);
  const [showAddMemberDialog, setShowAddMemberDialog] = useState(false);
  const [makeNewMemberId, setMakeNewMemberId] = useState(
    getMembers().length + 1
  );
  // const [addNewMemberData, setAddNewMemberData] = useState("");

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
    // alert(id);
    // console.log(id);
  };

  const handleMemberViewBackClick = () => {
    setSelectedMemberId(null);
  };

  const handleAddMember = (confirmed, data) => {
    if (confirmed) {
      // Set New Member ID
      setMakeNewMemberId(makeNewMemberId + 1);
      var NewId = String(makeNewMemberId);
      const newData = { ...data, id: NewId };
      dispatch(addMemberStore(newData));
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
        {/* {catalog[0] && catalog[0].title ? catalog[0].title : "Still Rendering"} */}
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
