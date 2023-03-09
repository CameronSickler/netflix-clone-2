import React, { useState, useEffect } from 'react';
import db, { collection, getDocs } from "../firebase";
import './PlansScreen.css';

function PlansScreen() {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        const get = async () => {

            const prodRef = collection(db, 'products');
            const prodSnap = await getDocs(prodRef);
            // const products = {};

            prodSnap.forEach(async (prodDoc) => {

                // const priceRef = collection(db, 'products', products[prodDoc.id], "prices");
                // const priceSnap = await getDocs(priceRef);

                // priceSnap.forEach(async (priceDoc) => {
                //     products[prodDoc.id] = priceDoc.data();
                // })

                // first go into prices
                // second grab prices data
                // third add prices data product document
                //fourth create objects for each product document

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


//debugging attempt to use Promise.all() to map over for paths

  // const paths = await Promise.all(prodSnap.map(async (prodDoc) => {
            //     const priceRef = collection(db, "products", prodDoc.data().id, "prices");
            //     const priceSnap = await getDocs(priceRef);

            //     return priceSnap.docs.map((priceDoc) => {
            //         params: {
            //             id: `${priceDoc.data().priceID}`,
            //                 price: `${priceDoc.data().price}`,
            //         }
            //     })
            // }))