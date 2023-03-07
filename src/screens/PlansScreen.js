import React, { useState, useEffect } from 'react';
import db, { collection, query, where, getDocs } from "../firebase";
import './PlansScreen.css';

function PlansScreen() {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        const get = async () => {
            const q = query(collection(db, 'products'), where("active", "==", true));
            const querySnapshot = await getDocs(q);

            // const qPrices = query(collection(db, 'prices'));

            // const priceSnap = await getDocs(qPrices);


            querySnapshot.forEach((doc) => {
                console.log(doc.id, "=>", doc.data());
            });

            // priceSnap.forEach((doc) => {
            //     console.log(doc.id, "=>", doc.data());
            // });

            setProducts(products);
        };


        get();
    }, [products]);

    console.log(products);

    return (
        <div className='plansScreen'>

        </div>
    )
}

export default PlansScreen
