import React, { useEffect,useState } from 'react'
import {getCategoriesList} from '../../Services/authApi'
import { getData } from '../../storage/storeData'
import CategoriesItem from '../CategoriesItem'

// const accessToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjdiODcxMTIzNzU0MjdkNjU3ZjVlMjVjYTAxZDU2NWU1OTJhMjMxZGIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdGluZ2lzaGEtdWF0IiwiYXVkIjoidGluZ2lzaGEtdWF0IiwiYXV0aF90aW1lIjoxNjMzMDYwNjU4LCJ1c2VyX2lkIjoiWU5vcTA4eXB4c05kcEpOZ1k5YmdEUlNLV1gwMyIsInN1YiI6IllOb3EwOHlweHNOZHBKTmdZOWJnRFJTS1dYMDMiLCJpYXQiOjE2MzMwNjA2NTgsImV4cCI6MTYzMzA2NDI1OCwiZW1haWwiOiJhZG1pbkB0aW5naXNoYS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInBob25lX251bWJlciI6IisxMTExMTExMTExMSIsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsicGhvbmUiOlsiKzExMTExMTExMTExIl0sImVtYWlsIjpbImFkbWluQHRpbmdpc2hhLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.QLYkyRqbVfrzABOzLOTCWv7Ngodoh-5PlxPXAsJtMjKEtNkZI3iJ-e28K-SLknI7L4f4qqjKEE6jTT3Zwelze6qQeG_wTXUOfKsKln8_QD4zDF6lLGox0rt2nrExmp1y9mQ8Pu9lIZqil2A7p_ho7csKQWo5rgR98IldGg2173P2yaRMnk-iESRsVKLnKu1zUDedI2g1NFT4AqrIi83l7hSpB6h8mFv8V7PEvpljoskaebxQwQzR5LXibXd917DvHus5pW_Qb_JHwqE1NCch4-_5BvwH6B4ecCRO8n1SUg59NWlXiM0AZ7WSoBDoGNbuFL8rQdbved5yMBIFvuHQYA"

export default function Categories() {
    const [categoriesLists, setCategoriesLists] = useState([]) 


    const categoriesList = async() => {
        const tokenDetails = await getData('accessToken') 
        console.log(tokenDetails)
        // getCategoriesList(JSON.parse(tokenDetails))
        getCategoriesList(tokenDetails)
        .then((cateRes) => {
            console.log(cateRes)
            const {data} = cateRes
            const {items} = data
            // console.log(items)
            setCategoriesLists(items)
        }).catch((e) => {
            console.log(e)
        })

    }
    
    useEffect(() => {
        categoriesList()
    },[])
  
    return (
        <div  >
            <h1 className="text-center mt-3 mb-4 ">Categories</h1>
            <div className="d-flex flex-column flex-grow">
          {categoriesLists.map((eachCategory) => (
            <CategoriesItem key={eachCategory.id} categoryDetails={eachCategory} />
        ))}          
         </div>
        
        </div>
    )
}
