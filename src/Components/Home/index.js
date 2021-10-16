import React, { useEffect, useState} from 'react'
import { creadtedUserApi, deleteUserApi, getUpdatedUserApi, getUsersApi } from '../../Services/authApi'
import UsersList from './UsersList'
import Post from './Post'
import EditUserModal from './EditUserModal'
import {Button} from 'react-bootstrap'
import Header from '../Header'
import { useHistory } from 'react-router'


export default function Home() {
    const [usersList,setUsersList] = useState([])
    const [result,setResult] = useState([])

    const history = useHistory()

    const getUpdatedUser = () =>{
        getUpdatedUserApi()
        history.push("/update")
    }

    const getusers = () =>{
        getUsersApi()
        .then((res) => {
            // console.log(res)
            setUsersList(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }


    const getPostUser = () =>{
        history.push("/create")
        
       
    }

    const getDeleteUSer = () => {
        history.push("/delete")
        deleteUserApi()
    }

    const deleteUser = (id) =>{
        console.log("deleteUser",id)
        const filteredData = usersList.filter((each) => each.id !== id)
        setUsersList(filteredData)

        
    }

    

 
    return (
        <div>
        <Header />
        <div className="d-flex flex-row justify-content-center ">
            <div className="d-flex flex-column justify-content-center ">
            <h1>Welcome to Dummy Portal</h1>

            <Button variant="primary" onClick={getusers} className="mb-2">GET</Button>
            <Button variant="success" onClick={getUpdatedUser} className="mb-2">PUT</Button>
            <Button variant="info" onClick={getPostUser} className="mb-2">POST</Button>
            <Button variant="danger" onClick={getDeleteUSer} className="mb-2">DELETE</Button>

            <div>
                {usersList.map((eachUser) => (
                    <UsersList key={eachUser.id} userDetails={eachUser} deleteUser={deleteUser}/>
                ) )}
            </div>
            
            </div>

        </div>
         </div>
    )
}
