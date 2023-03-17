//WORKING CODE IN MODULAR 9

import React, { useState, useEffect } from 'react';
import db, { collection, getDocs } from "../firebase";
import './PlansScreen.css';

function PlansScreen() {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        const getProd = async () => {

            const prodRef = collection(db, 'products');
            const prodSnap = await getDocs(prodRef);

            //query for Products collection
            prodSnap.forEach(async (prodDoc) => {

                products[prodDoc.id] = prodDoc.data();

                const priceRef = collection(db, `products/${prodDoc.id}/prices`);
                const priceSnap = await getDocs(priceRef);

                //query for Prices subcollection
                priceSnap.forEach((priceDoc) => {

                    products[priceDoc.id] = priceDoc.data();

                })

            });
            setProducts(products);
        };
        getProd();
    }, [products]);
    console.log(products)


    return (
        <div className='plansScreen'>

        </div>
    )
}

export default PlansScreen