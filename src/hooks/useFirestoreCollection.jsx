import { useEffect, useState, useContext } from "react";
import { getFirestore } from "../firebase/Firebase";
import { context } from "../context/CartProvider";

export default function useFirestoreCollection (nameCollection, categoryName = null) {

    const [collection, setCollection] = useState(null);
    const [loading, setLoading] = useState(true);
    const {error, setError} = useContext(context)

    useEffect(() => {
        setLoading(true);
        getFirestore().collection("nameCollection")
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