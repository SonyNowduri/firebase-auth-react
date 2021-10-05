import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getData } from '../../storage/storeData'
import { getCategoryItemApi } from '../../Services/authApi'
import CategoryBody from '../CategoryBody'
import {Card,Button} from 'react-bootstrap'
import './index.css'



// /admin-services/api/categories/{categoryId}/services
export default function CategoriesItem(props) {
    const {categoryDetails} = props
    const {id,createdBy,langs,status,createdDate,updatedDate} = categoryDetails
    const {name,profilePic} = createdBy
    

    const getCategoryItem =  () =>{
        <CategoryBody />
        
    }
    
    return (
        <div>
          
        <Link to={`/categories/${id}`} className="link-item" onClick={getCategoryItem}>

        <div className="category-bg-container" >
            <div className="category-card "> 
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={profilePic} />
                <Card.Body>
                     <Card.Title>Name: {name}</Card.Title>
                    <Card.Text>Status: {status}</Card.Text>
                     <Card.Text>Created Date: {createdDate}</Card.Text>
                     <Button variant="primary">More Details</Button>
                </Card.Body>
            </Card>
            </div>
        </div>
        {/* <CategoryBody details={item} /> */}
        </Link>
        
        </div>
    )
}

