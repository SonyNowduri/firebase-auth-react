import React from 'react'
import { Card } from 'react-bootstrap'

export default function ServiceItem(props) {
    const{serviceDetails} = props
    const {id,name,status,thumbnail} = serviceDetails
    

    
    return (
        <div className="d-flex flex-row justify-content-center mb-2 m-2">

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={thumbnail} />
                <Card.Body>
                     <Card.Title>Name: {name}</Card.Title>

                </Card.Body>
            </Card>
        </div>
    )
}
