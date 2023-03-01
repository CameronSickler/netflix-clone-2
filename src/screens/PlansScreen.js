import React, { useState, useEffect } from 'react';
import db, { collection, query, where, getDocs } from "../firebase";
import './PlansScreen.css';

function PlansScreen() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const q = query(collection(db, 'products'), where("active", "==", true));

        const querySnapshot = getDocs(q);
        // const priceSnap = getDocs(collection(db, "prices"));

        // const products = {};
        querySnapshot.forEach((doc) => {
            console.log(doc.id, "=>", doc.data());
        });


        // priceSnap.forEach(price => {
        //     const products = {};
        //     products[documentId.id].prices = {
        //         priceId: price.id,
        //         priceData: price.data()
        //     }
        // })

        setProducts(products);
    }, []);

    // console.log(products);

    return (
        <div className='plansScreen'>

        </div>
    )
}

export default PlansScreen
