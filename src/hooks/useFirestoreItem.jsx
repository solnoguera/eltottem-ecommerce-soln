import { useEffect, useState } from "react";
import { getFirestore } from "../firebase/Firebase";

export const useFirestoreItem = (nameCollection, itemId) => {

    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getFirestore().collection(nameCollection).doc(itemId)
            .get()
            .then((doc) => {

                if (!doc.exists) {
                    console.log('No existe ese documento');
                return
                }
                console.log('Item encontrado!');
                setItem({ id: doc.id, ...doc.data() });

            })
            .catch(dataError => console.log(dataError))
            .finally(()=> setLoading(false))

    }, [nameCollection, itemId])

    return { item, loading }
}