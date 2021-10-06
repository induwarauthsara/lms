import React, { useState } from "react";
import { Button, FlexRow, Select } from "../../../components/CommonComponents";
import { Modal, DialogBox } from "../../../components/Modal";

export default function LendDialog({ handleClose, show }) {
  const [member, SetMember] = useState("");
  const sendComfirm = () => handleClose(true, member);
  const sendCancle = () => handleClose(false, null);

  return (
    <Modal show={show}>
      <DialogBox>
        <h2>Lend Book</h2>
        <p>Select member to continue and comfirm</p>
        <Select
          id="member-select"
          onChange={(e) => SetMember(e.target.value)}
          value={member}
        >
          <option value="">-- Please Select a Member</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </Select>
        <FlexRow>
          <Button onClick={sendComfirm}>Comfirm</Button>
          <Button onClick={sendCancle} color="secondary">
            Cancle
          </Button>
        </FlexRow>
      </DialogBox>
    </Modal>
  );
}
