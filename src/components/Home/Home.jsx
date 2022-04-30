import React, {useContext} from 'react'
import Slider from '../Slider/Slider'
import Footer from '../Footer/Footer';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import { context } from '../../context/CartProvider';

export default function Home({greeting}) {

    const {error} = useContext(context) || "sinError"
    return (
        <div>
        {
            error !== "sinError" ? 
            <ErrorMessage error={error}/>
            :
            <div>
                <Slider />
                <ItemListContainer greeting={greeting} />
                <Footer />
            </div>
        }
        </div>
    )
}
