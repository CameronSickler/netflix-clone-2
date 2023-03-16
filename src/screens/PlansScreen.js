//WORKING CODE IN MODULAR 9

import React, { useState, useEffect } from 'react';
import db, { collection, collectionGroup, getDocs } from "../firebase";
import './PlansScreen.css';

function PlansScreen() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProd = async () => {
            const prodRef = collection(db, 'products');
            const prodSnap = await getDocs(prodRef);

            // const priceRef = collection(db, `products/${prodDoc.id}/prices`);
            // const priceSnap = await getDocs(priceRef)


            prodSnap.forEach((prodDoc) => {

                //   const priceRef = collection(db, `products/${prodDoc.id}/prices`);
                //     const priceSnap = await getDocs(priceRef)


                products[prodDoc.id] = prodDoc.data();


                // Retrieve prices for this product
                // doc.ref.collection('prices').get().then((querySnapshot) => {
                //     querySnapshot.forEach((doc) => {
                //         const price = doc.data();
                //         price.id = doc.id;
                //         product.prices.push(price);
                //     });

                //     products.push(product);
                //     setProducts(products);
                // })
            });
            setProducts(products);
        };
        getProd();
    }, [products]);
    // console.log(products)

    return (
        <div className='plansScreen'>

        </div>
    )
}

export default PlansScreen