import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loading from '../Loading/Loading';
import { getFirestore } from '../../firebase/Firebase';

export default function ItemDetailContainer() {

    const {itemId} = useParams()

    const [product, setProduct] = useState([])

    useEffect( ()=> {
        traerProducto()
    }, [itemId])

    const traerProducto = async () =>{
        
        const db = getFirestore()
        const productsCollection = db.collection('products')
        const item = productsCollection.doc(itemId)

        item.get()    
            .then((doc) => {

                if (!doc.exists) {
                    console.log('No existe ese documento');
                return
                }

                console.log('Item encontrado!');
                setProduct({ id: doc.id, ...doc.data() });

            })
            .catch((err)=>{
                console.log(err);
            })
    }

    return (
        <div>
            {
                (product.id) ?
                
                <ItemDetail item={product}/>
                :
                <Loading />
            }
            
        </div>
  );
};

