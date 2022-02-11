import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loading from '../Loading/Loading';
import { getFirestore } from '../../firebase/Firebase';
import { useFirestoreItem } from '../../hooks/useFirestoreItem';

export default function ItemDetailContainer() {

    const {itemId} = useParams()
    const {item, loading} = useFirestoreItem("items", itemId);

    return (
        <div>
            {
                (!loading) ?
                
                <ItemDetail item={item}/>
                :
                <Loading />
            }
            
        </div>
  );
};

