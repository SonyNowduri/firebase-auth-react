import React, { useEffect,useState } from 'react'
import { getCategoryItemApi } from '../../Services/authApi'
import { Card } from 'react-bootstrap'

export default function CategoryBody(props) {
    const {match} = props
    const {params} = match
    const {id} = params
    // console.log(id)
    const [item,setItem] = useState([])

    

    useEffect(() =>{
        getCategoryItemApi(id)
        .then((res) =>{
            setItem(res.data)
            // console.log(res.data.createdBy.profilePic)
            const {name,status} = res
           
        }).catch((e) => {
            console.log(e)
        })
    },[])
    return (
        <div className="d-flex flex-column justify-content-center mt-5"  >
        <div className="d-flex flex-row justify-content-center ">
           <Card style={{ width: '18rem' }}>
              {/* <Card.Img variant="top" src={res.data.createdBy.profilePic} /> */}
                <Card.Body>
                     <Card.Title>Name: {item.name}</Card.Title>
                    <Card.Text>Status: {item.status}</Card.Text>
                     {/* <Card.Text>Created Date: {createdDate}</Card.Text> */}
                     {/* <Button variant="primary">More Details</Button> */}
                </Card.Body>
            </Card>
        </div>
        </div>
    )
}



