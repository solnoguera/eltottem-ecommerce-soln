import { useEffect, useState } from "react";
import { getFirestore } from "../firebase/Firebase";

export const useFirestoreCollection = (nameCollection, categoryName = null) => {

    const [collection, setCollection] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true);
        getFirestore().collection(nameCollection)
            .get()
            .then( (querySnapshot) => {

                if(querySnapshot.size === 0){
                    setError('No se han encontrado productos')
                } else {
                    const products = querySnapshot.docs.map(doc=> {
                        return {id: doc.id, ...doc.data()} })
            
                    const misProductos = (categoryName)   
                                            ? products.filter(item => item.category === categoryName) 
                                            : products
                    setCollection(misProductos)
                }
            } )
            .catch( err => setError('Error al buscar los productos: ' + err ) )
            .finally(()=> setLoading(false))

    }, [nameCollection, categoryName])

    return { collection, loading, error }
}