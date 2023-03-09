import React, { useState, useEffect } from 'react';
import db, { collection, getDocs } from "../firebase";
import './PlansScreen.css';

function PlansScreen() {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        const get = async () => {

            const prodRef = collection(db, 'products');
            const prodSnap = await getDocs(prodRef);

            prodSnap.forEach(async (prodDoc) => {
                products[prodDoc.id] = prodDoc.data();

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