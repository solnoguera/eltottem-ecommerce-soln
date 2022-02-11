import React from 'react';
import { useParams } from 'react-router';
import ItemDetail from '../ItemDetail/ItemDetail';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loading from '../Loading/Loading';
import { useFirestoreItem } from '../../hooks/useFirestoreItem';

export default function ItemDetailContainer() {

    const {itemId} = useParams()
    const {item, loading, error} = useFirestoreItem("products", itemId);

    return (
        <div>
            {
                (error) ?
                
                <ErrorMessage error={error} />

                :

                (loading) ?
                
                    <Loading />
                    :
                    <ItemDetail item={item}/>
                    
            }
            
        </div>
  );
};

