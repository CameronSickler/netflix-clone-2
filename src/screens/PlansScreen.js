import React, { useState, useEffect } from 'react';
import db, { collection, getDocs } from "../firebase";
import './PlansScreen.css';

function PlansScreen() {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        const get = async () => {

            const prodRef = collection(db, 'products');
            const querySnapshot = await getDocs(prodRef);

            querySnapshot.forEach(async (doc) => {
                products[doc.id] = doc.data();

                // console.log(doc.id, "=>", doc.data());
            });


            setProducts(products);
        };
        get();
    }, [products]);

    console.log(products)

    return (
        <div className='plansScreen'>

        </div>
    )
}

export default PlansScreen
