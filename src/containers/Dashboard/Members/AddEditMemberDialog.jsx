import React, { useState } from "react";

import {
  Button,
  Container,
  FlexRow,
} from "../../../components/CommonComponents";
import { Modal, DialogBox } from "../../../components/Modal";

import Input, { Select } from "../../../components/Input";

export default function AddEditBookDialog({
  isEdit = false,
  handleClose,
  show,
  data,
}) {
  const [nic, setNic] = useState(isEdit && data && data.nic ? data.nic : "");
  const [firstName, setFirstName] = useState(
    isEdit && data && data.firstName ? data.firstName : ""
  );
  const [middleName, setMiddleName] = useState(
    isEdit && data && data.middleName ? data.middleName : ""
  );
  const [lastName, setLastName] = useState(
    isEdit && data && data.lastName ? data.lastName : ""
  );
  const [contactNo, setContactNo] = useState(
    isEdit && data && data.contactNo ? data.contactNo : ""
  );
  const [address, setAddress] = useState(
    isEdit && data && data.address ? data.address : ""
  );
  const [userType, setUserType] = useState(
    isEdit && data && data.userType ? data.userType : ""
  );

  const ClearInput = () => {
    if (!isEdit) {
      setNic("");
      setFirstName("");
      setMiddleName("");
      setLastName("");
      setContactNo("");
      setAddress("");
      setUserType("");
    }
  };

  const sendDone = () => {
    if (
      nic !== "" &&
      firstName !== "" &&
      middleName !== "" &&
      lastName !== "" &&
      contactNo !== "" &&
      address !== "" &&
      userType !== ""
    ) {
      ClearInput();
      handleClose(true, {
        nic,
        firstName,
        middleName,
        lastName,
        contactNo,
        address,
        userType,
      });
    } else if (firstName === "") {
      window.alert(
        `Please enter a First Name to ${isEdit ? "edit" : "add"} Member`
      );
    } else if (userType === "") {
      window.alert(
        `Please Select a User Type to ${isEdit ? "edit" : "add"} Member`
      );
    } else {
      window.alert(
        `Please fill all fields to ${isEdit ? "edit" : "add"} Member.`
      );
    }
  };

  const sendCancel = () => {
    !isEdit && ClearInput();
    handleClose(false, null);
  };

  return (
    <Modal show={show}>
      <DialogBox>
        <h2>{isEdit ? "Edit" : "Add"} Member</h2>
        <p>{isEdit ? "Edit" : "Enter"} the below details of the Member</p>
        <Container alignItems="center" disableFullWidth>
          <Input
            label="NIC Number"
            value={nic}
            onChange={(e) => setNic(e.target.value)}
            type="text"
            id="nic"
            name="nic"
            required
            minLength="1"
          />
          <Input
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            id="firstName"
            name="firstName"
            required
            minLength="1"
          />
          <Input
            label="Middle Name"
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
            type="text"
            id="middleName"
            name="middleName"
            required
            minLength="1"
          />
          <Input
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            id="lastName"
            name="lastName"
            required
            minLength="1"
          />
          <Input
            label="Contact Number"
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
            type="number"
            id="contactNo"
            name="contactNo"
            required
            minLength="1"
          />
          <Input
            label="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            id="address"
            name="address"
            required
            minLength="1"
          />
          <Select
            label="User Type"
            onChange={(e) => setUserType(e.target.value)}
            value={userType}
            id="userType"
            name="userType"
          >
            <option value="">Please Select a User Type</option>
            <option value="School">School</option>
            <option value="University">University</option>
            <option value="Employed">Employe</option>
          </Select>
        </Container>
        <FlexRow>
          <Button onClick={sendDone}>Done</Button>
          <Button onClick={sendCancel} color="secondary">
            Cancel
          </Button>
        </FlexRow>
      </DialogBox>
    </Modal>
  );
}
