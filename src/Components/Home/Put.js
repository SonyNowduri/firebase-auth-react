import React,{ useEffect, useState } from 'react'
import { getUpdatedUserApi, getUsersByIdApi } from '../../Services/authApi'


export default function Put() {
    const [id,setId] = useState("");

    const [result,setResult] = useState([])
    const [name,setName] = useState(result.name);
    const [email,setEmail] = useState(result.email);
    const [gender,setGender] = useState(result.gender);
    const [status,setStatus] = useState(result.status);
    const [error,setError] = useState("")

    const [updatedResult,setUpdatedResult] = useState([])
    
   

    
    const getId = (value) =>{
       setId(value)
    }

    const getName = (value) =>{
        setName(value)
        setResult({name : value})
     }

     const getEmail= (value) =>{
        setEmail(value)
        setResult({email : value})
     }

     const getGender = (value) =>{
        setGender(value)
        setResult({gender : value})
     }

     const getStatus = (value) =>{
        setStatus(value)
        setResult({status : value})
     }

    const getDataID = () =>{
        console.log(id)
        getUsersByIdApi(id)
        .then((res) => {
            console.log(res)
            setResult(res)
            setError(res.message)
        })
        .catch((err) => {
            console.log(err)
        })

    }

    const getUpdateID = () => {
        const data={name,email,gender,status}
        console.log(data)
        getUpdatedUserApi(id,data)
        .then((res) => {
            console.log(res)
            setUpdatedResult(res)
        })
        .catch((err) => {
            console.log(err)
        })

    }

    
    return (
        <div className="d-flex flex-row justify-content-center mt-5">
            <div className="d-flex flex-column justify-content-center pt-3">
                <h3>Updating User</h3>
                <input type="text" placeholder="Enter the ID.." onChange={(event) => getId(event.target.value)} />
                <button className="btn btn-primary mt-3 mb-3" onClick={getDataID} >Get</button>
                <input type="text" placeholder="Enter the Name.." value={result.name} name="name" autoFocus onChange={(event) => getName(event.target.value)} />
                <input type="text" placeholder="Enter the Email.." value={result.email} onChange={(event) => getEmail(event.target.value)}/>
                <input type="text" placeholder="Enter the Gender.." value={result.gender} onChange={(event) => getGender(event.target.value)} />
                <input type="text" placeholder="Enter the Status.." value={result.status} onChange={(event) => getStatus(event.target.value)} />
                <button className="btn btn-primary mt-3 mb-3" onClick={getUpdateID} >Update</button>
                {result ? (
                <div className="mt-2">
                    <h4>Response:</h4>
                    {error ? (<p className = "error">{error}</p>) : null}
                    <p>Id: {updatedResult.id}</p>
                    <p>Name: {updatedResult.name}</p>
                     <p>Email: {updatedResult.email}</p>
                     <p>Gender: {updatedResult.gender}</p>
                     <p>Status: {updatedResult.status}</p>
                     </div>) : null}

            </div>
            
        </div>
    )
}
