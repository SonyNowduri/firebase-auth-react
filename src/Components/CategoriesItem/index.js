import React from 'react'
import {Card,Button} from 'react-bootstrap'


export default function CategoriesItem(props) {
    const {categoryDetails} = props
    const {createdBy,langs,status,createdDate,updatedDate} = categoryDetails
    const {id,name,profilePic} = createdBy
    console.log(categoryDetails)
    return (
        <div className="category-bg-container d-flex flex-row justify-content-center">
            <div className="category-card ml-3 mb-3 d-flex flex-column justify-content-center">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={profilePic} />
                <Card.Body>
                     <Card.Title>Name: {name}</Card.Title>
                    <Card.Text>Status: {status}</Card.Text>
                     <Card.Text>Created Date: {createdDate}</Card.Text>
                     <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            </div>
        </div>
       

    )
}
