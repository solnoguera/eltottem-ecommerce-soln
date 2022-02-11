import React from "react"
import { useParams } from "react-router"
import Loading from "../Loading/Loading"
import ItemList from "../ItemList/ItemList"
import ErrorMessage from "../ErrorMessage/ErrorMessage"
import "./ItemListContainer.css"
import { useFirestoreCollection } from "../../hooks/useFirestoreCollection"


export default function ItemListContainer ({greeting}) {

    const {categoryName} = useParams()
    const {collection, error, loading} = useFirestoreCollection('products', categoryName)

    return(
        <div>
            {
                (error) ?

                <ErrorMessage error={error}/>

                :

                (loading) ? 
                    <Loading />
                    :
                    <>
                        <p className='greeting'>{greeting}</p>
                        <ItemList products={collection} />
                    </>
                    
            }
        </div>
    )
}