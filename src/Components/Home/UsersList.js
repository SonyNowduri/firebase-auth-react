import React,{ useState,useRef } from 'react'
import { AiFillEdit,AiFillInfoCircle,AiFillDelete } from "react-icons/ai";
import EditUserModal from './EditUserModal';
import {Button} from 'react-bootstrap'
import DeleteModal from './DeleteModal';
import { Card} from 'react-bootstrap'


export default function UsersList(props) {
    const {userDetails,deleteUser} = props
    const{id,name,email,gender,status} = userDetails

    const [showModal,setShowModal] = useState(false)
    const [showDeleteModal,setshowDeleteModal] = useState(false)
    const [editObject,setEditObject] = useState([])

   
    

    const getEditData = () => {
        // console.log("Sony",id)
        setShowModal(true)
        setEditObject(userDetails)
        console.log(userDetails,id)
       
    }

    const getDeleteData = () =>{
        console.log("DEleted",id)
        // deleteUser(id)
        setshowDeleteModal(true)


    }

    const closeModal = () =>{
        setShowModal(false)
    }

    const getViewData = () => {
        setShowModal(true)
    }

    const viewTemplete = {
        showModal,
        closeModal,
        editObject,
        
    }

   

    const onSaveDataList = (id,updatedName,updatedEmail,updatedGender,updatedStatus) => {
       
        const {name,email,gender,status} = userDetails
        if(updatedName !== "" && updatedEmail!=="" && updatedGender!=="" && updatedStatus!==""){
            editObject.name = updatedName
            editObject.email = updatedEmail
            editObject.gender = updatedGender
            editObject.status = updatedStatus
        }else if( updatedName !== ""){
            editObject.name = updatedName
        }else if(updatedGender!==""){
            editObject.gender = updatedGender
        }else if(updatedEmail!==""){
            editObject.email = updatedEmail
        }else if(updatedStatus !== ""){
            editObject.status = updatedStatus
        }
        else{
            editObject.name = name;
            editObject.email = email;
            editObject.gender = gender;
            editObject.status = status;
        }
         closeModal()
        
    }

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                     <Card.Title>Name: {name}</Card.Title>
                     <Card.Text>Email: {email}</Card.Text>
                     <Card.Text>Gender: {gender}</Card.Text>
                    <Card.Text>Status: {status}</Card.Text>
                </Card.Body>
                <div style={{display:'flex',flexDirection:'row', justifyContent:'space-between',width:'50%',marginBottom:'15px'}}>
                <AiFillInfoCircle onClick={getViewData}/>
                <AiFillEdit onClick={getEditData} />
                < AiFillDelete onClick={getDeleteData} /> 
                </div>    
            </Card>
            <div>
                {showModal && (<EditUserModal showModal={showModal}  editObject={editObject} onSaveDataList={onSaveDataList} closeModal={closeModal}/>)}
                {showModal && (<EditUserModal showModal={showModal}  editObject={editObject}  closeModal={closeModal}/>)}
                {/* {showDeleteModal && (<EditUserModal showModal={showModal}  closeModal={closeModal} deleteUser={deleteUser}/>)} */}
            </div>
            
        </div>
    )
}
