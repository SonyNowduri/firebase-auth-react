import React,{useRef,useState} from 'react'
import { deleteUserApi } from '../../Services/authApi';

export default function Delete() {
    const inputRef = useRef(null);

    const [error,setError] = useState("");


    const onDelete = () => {
        const id = inputRef.current.value;
        console.log(id)
        deleteUserApi(id)
        .then((res) => {
            console.log(res)
            if(res.code === 204){
                console.log("deleted")
               setError("Deleted Successfully")
            }
            else{
                setError(res.data.message)
            }
        }).catch((err) =>{
            console.log(err)
        })
    }

    return (
        <div className="d-flex flex-row justify-content-center mt-5">
            <div className="d-flex flex-column justify-content-center mt-5">
            <input tyoe="text" placeholder="Enter the ID ..." ref={inputRef}/> 
            <button onClick={onDelete} className="btn btn-danger mt-3">Delete</button>
            {error ? (<p className="error">{error}</p>) : null}
        </div>
        </div>
    )
}
