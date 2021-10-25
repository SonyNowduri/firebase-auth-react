import React, { useEffect, useState } from "react";
import {
  creadtedUserApi,
  deleteUserApi,
  getUpdatedUserApi,
  getUsersApi,
} from "../../Services/authApi";
import UsersList from "./UsersList";
import Post from "./Post";
import CommonModal from "./CommonModal";
import { Button } from "react-bootstrap";
import Header from "../Header";
import { useHistory } from "react-router";

export default function Home() {
  const [usersList, setUsersList] = useState([]);
  const [result, setResult] = useState([]);
  const [showPostModal, setShowPostModal] = useState(false);
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();

  const getUpdatedUser = () => {
    getUpdatedUserApi();
    history.push("/update");
  };

  const getusers = () => {
    getUsersApi()
      .then((res) => {
        // console.log(res)
        setUsersList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const getPostUser = () =>{
  //     history.push("/create")

  // }

  const getDeleteUSer = () => {
    history.push("/delete");
    deleteUserApi();
  };

  const deleteUser = (id) => {
    console.log("deleteUser", id);
    const filteredData = usersList.filter((each) => each.id !== id);
    setUsersList(filteredData);
  };

  const onSaveDataList = (
    updatedName,
    updatedEmail,
    updatedGender,
    updatedStatus
  ) => {
    const data = {
      name: updatedName,
      email: updatedEmail,
      gender: updatedGender,
      status: updatedStatus,
    };
    console.log(JSON.stringify(data));
    creadtedUserApi(data)
      .then((res) => {
        console.log(res.name);
        setResponse(res);
        if (res.code === 201) {
          setResponse(res);
        } else {
          setError(res[0].message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Header />
      <div className="d-flex flex-row justify-content-center ">
        <div className="d-flex flex-column justify-content-center ">
          <h1>Welcome to Dummy Portal</h1>

          <Button variant="primary" onClick={getusers} className="mb-2">
            GET
          </Button>
          {/* <Button variant="success" onClick={getUpdatedUser} className="mb-2">PUT</Button> */}
          <Button
            variant="info"
            onClick={() => setShowPostModal(true)}
            className="mb-2"
          >
            POST
          </Button>
          {/* <Button variant="danger" onClick={getDeleteUSer} className="mb-2">DELETE</Button> */}
          {showPostModal && (
            <CommonModal
              showModal={showPostModal}
              isNew={true}
              head="Add User"
              disabled={false}
              onSaveDataList={onSaveDataList}
              closeModal={() => setShowPostModal(false)}
            />
          )}

          {response && (
            <div
              style={{ width: "18rem", border: "1px solid grey",padding:"10px" }}
              className="mt-2"
            >
              <h4>Response:</h4>
              {error ? <p className="error">{error}</p> : null}
              <p>Id: {response.id}</p>
              <p>Name: {response.name}</p>
              <p>Email: {response.email}</p>
              <p>Gender: {response.gender}</p>
              <p>Status: {response.status}</p>
            </div>
          )}

          <div>
            {usersList.map((eachUser) => (
              <UsersList
                key={eachUser.id}
                userDetails={eachUser}
                deleteUser={deleteUser}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
