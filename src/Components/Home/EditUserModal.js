import {Input,Modal} from 'antd'
// import Modal from 'antd/lib/modal/Modal'
import React,{ useState } from 'react'


export default function EditUserModal(props) {
    console.log(props)
    const {showModal,editObject,onSaveDataList,closeModal,disabled,head} = props
    console.log(disabled)
    const {name,email,gender,status} = editObject
    console.log(editObject)

    const [updatedName,setUpdatedName] = useState("");
    const [updatedEmail,setUpdatedEmail] = useState("");
    const [updatedGender,setUpdatedGender] = useState("");
    const [updatedStatus,setUPdatedStatus] = useState("")


    const onChangeName = (value) =>{
       setUpdatedName(value)
    }

    const onChangeEmail = (value) =>{
        setUpdatedEmail(value)
    }

    const onChangeGender = (value) =>{
        setUpdatedGender(value)
    }

    const onChangeStatus= (value) =>{
        setUPdatedStatus(value)
    }

    const onSaveData = () =>{
        
        onSaveDataList(editObject.id,updatedName,updatedEmail,updatedGender,updatedStatus)
        closeModal()
        

    }

    

    return (
           <Modal style={{opacity:1}} title={head} fade={false} visible={showModal} onCancel={closeModal} onOk={onSaveData} okText="Save">
                <div>
                <label htmlFor="name">Name</label>
                <Input disabled={disabled} id="name" defaultValue={name}  onChange={(e)=> onChangeName(e.target.value)} />
                </div>
                <div>
                <label htmlFor="email">Email</label>
                <Input disabled={disabled} id="name" defaultValue={email} onChange={(e)=> onChangeEmail(e.target.value)}/>
                </div>
                <div>
                <label htmlFor="gender">Gender</label>
                <Input disabled={disabled} id="gender" defaultValue={gender}  onChange={(e)=> onChangeGender(e.target.value)}/>
                </div>
                <div>
                <label htmlFor="Status">Status</label>
                <Input disabled={disabled}  id="role" defaultValue={status}  onChange={(e)=> onChangeStatus(e.target.value)}/>
                </div>
            </Modal>
            

    )
}


