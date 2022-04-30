import { useEffect, useState, useContext } from "react";
import { getFirestore } from "../firebase/Firebase";
import { context } from "../context/CartProvider";

export default function useFirestoreItem (nameCollection, itemId) {

    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const {error, setError} = useContext(context)

    useEffect(() => {
        setLoading(true);
        getFirestore().collection(nameCollection).doc(itemId)
            .get()
            .then((doc) => {

                if (!doc.exists) {
                    setError('No existe el documento');
                return
                }
                setItem({ id: doc.id, ...doc.data() });

            })
            .catch(dataError => setError('Error al buscar los productos: ' + dataError))
            .finally(()=> setLoading(false))

    }, [nameCollection, itemId])

    return { item, loading, error }
}