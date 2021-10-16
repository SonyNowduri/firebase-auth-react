import React,{useState} from 'react'
import { creadtedUserApi } from '../../Services/authApi'


export default function Post() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [status,setStatus] = useState("")
    const [error,setError] = useState("")
    const [response,setResponse] = useState("")

  
    const getName = (value) => {
        setName(value)
    }
    const getEmail = (value) => {
        setEmail(value)
    }
    const getGender = (value) => {
        setGender(value)
    }
    const getStatus = (value) => {
        setStatus(value)
    }

    const onCreate = () => {
        const data = {name,email,gender,status}
        console.log(JSON.stringify(data))
        creadtedUserApi(data)
        .then((res) => {
            console.log(res.name)
            setResponse(res)
            if(res.code === 201){
                setResponse(res)
            }else{
                setError(res[0].message)
            }
       
           
        }).catch((err) => {
            console.log(err)
        })

    }

 

    return (
        <div className="d-flex flex-row justify-content-center mt-5">
            <div className="d-flex flex-column justify-content-center">
                <h3>Add New User</h3>
                <input type="text" placeholder="Enter Name" className="mb-2" value={name} onChange={(event) => getName(event.target.value)} />
                <input type="text" placeholder="Enter Email" className="mb-2" value={email} onChange={(event) => getEmail(event.target.value)} />
                <input type="text" placeholder="Enter Gender" className="mb-2" value={gender} onChange={(event) => getGender(event.target.value)}/>
                <input type="text" placeholder="Enter Status" className="mb-2" value={status} onChange={(event) => getStatus(event.target.value)} />
                <button onClick={onCreate} className="btn btn-primary">Create</button>

                {response ? (
                <div className="mt-2">
                    <h4>Response:</h4>
                    {error ? (<p className = "error">{error}</p>) : null}
                    <p>Id: {response.id}</p>
                    <p>Name: {response.name}</p>
                     <p>Email: {response.email}</p>
                     <p>Gender: {response.gender}</p>
                     <p>Status: {response.status}</p>
                     </div>) : null}
            </div>
           
            

            
        </div>
    )
}
// creadtedUserApi()