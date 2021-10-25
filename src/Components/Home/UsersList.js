import React, { useState, useRef } from "react";
import { AiFillEdit, AiFillInfoCircle, AiFillDelete } from "react-icons/ai";
import CommonModal from "./CommonModal";
import { Button } from "react-bootstrap";
import DeleteModal from "./DeleteModal";
import { Card } from "react-bootstrap";
import { Modal } from "antd";

export default function UsersList(props) {
  const { userDetails, deleteUser } = props;
  const { confirm } = Modal;
  const { id, name, email, gender, status } = userDetails;

  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editObject, setEditObject] = useState([]);

  const getEditData = () => {
    // console.log("Sony",id)
    setShowEditModal(true);
    setEditObject(userDetails);
    console.log(userDetails, id);
  };

  const getDeleteData = () => {
    console.log("DEleted", id, name);
    confirm({
      title: `Are you sure you want to Delete ${name}? `,
      onOk() {
        deleteUser(id);
      },
    });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
  };

  const getViewData = () => {
    setShowModal(true);
    setEditObject(userDetails);
  };

  const viewTemplete = {
    showModal,
    closeModal,
    editObject,
  };

  const onSaveDataList = (
    id,
    updatedName,
    updatedEmail,
    updatedGender,
    updatedStatus
  ) => {
    const { name, email, gender, status } = userDetails;
    if (
      updatedName !== "" &&
      updatedEmail !== "" &&
      updatedGender !== "" &&
      updatedStatus !== ""
    ) {
      editObject.name = updatedName;
      editObject.email = updatedEmail;
      editObject.gender = updatedGender;
      editObject.status = updatedStatus;
    } else if (updatedName !== "") {
      editObject.name = updatedName;
    } else if (updatedGender !== "") {
      editObject.gender = updatedGender;
    } else if (updatedEmail !== "") {
      editObject.email = updatedEmail;
    } else if (updatedStatus !== "") {
      editObject.status = updatedStatus;
    } else {
      editObject.name = name;
      editObject.email = email;
      editObject.gender = gender;
      editObject.status = status;
    }
    closeEditModal();
  };

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Name: {name}</Card.Title>
          <Card.Text>Email: {email}</Card.Text>
          <Card.Text>Gender: {gender}</Card.Text>
          <Card.Text>Status: {status}</Card.Text>
        </Card.Body>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "50%",
            marginBottom: "15px",
          }}
        >
          <AiFillInfoCircle
            style={{ cursor: "pointer" }}
            onClick={() => getViewData()}
          />
          <AiFillEdit style={{ cursor: "pointer" }} onClick={getEditData} />
          <AiFillDelete style={{ cursor: "pointer" }} onClick={getDeleteData} />
        </div>
      </Card>
      <div>
        {showEditModal && (
          <CommonModal
            showModal={showEditModal}
            head="Edit User"
            disabled={false}
            isNew={false}
            editObject={editObject}
            onSaveDataList={onSaveDataList}
            closeModal={closeEditModal}
          />
        )}
        {showModal && (
          <CommonModal
            showModal={showModal}
            head="View User"
            disabled={true}
            isNew={false}
            editObject={editObject}
            onSaveDataList={() => setShowModal(false)}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
}
