import { useEffect, useState } from "react";
import { getFirestore } from "../firebase/Firebase";

export default function useFirestoreItem (nameCollection, itemId) {

    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

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