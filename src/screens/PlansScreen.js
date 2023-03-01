import React, { useState, useEffect } from 'react';
import db, { collection, query, where, getDocs } from "../firebase";
import './PlansScreen.css';

function PlansScreen() {
    const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     const q = query(collection(db, 'products'), where("active", "==", true));
    //     const querySnapshot = await getDocs(q);

    //     querySnapshot.forEach((doc) =>{
    //         const products = {};
    //         querySnapshot.forEach(async productDoc => {
    //             products[productDoc.id] = productDoc.data();
    //             const priceSnap = await productDoc.ref.collection("prices").get();
    //             priceSnap.docs.forEach(price => {
    //                 products[productDoc.id].prices = {
    //                     priceId: price.id,
    //                     priceData: price.data()
    //                 }
    //             })
    //         });
    //     });
    //         setProducts(products);
    //     });
    // }, []);

    console.log(products);

    return (
        <div className='plansScreen'>

        </div>
    )
}

export default PlansScreen


// useEffect(() => {
//     db.collection('products').where("active", "==", true).get().then(querySnapshot => {
//         const products = {};
//         querySnapshot.forEach(async productDoc => {
//             products[productDoc.id] = productDoc.data();
//             const priceSnap = await productDoc.ref.collection("prices").get();
//             priceSnap.docs.forEach(price => {
//                 products[productDoc.id].prices = {
//                     priceId: price.id,
//                     priceData: price.data()
//                 }
//             })
//         });
//         setProducts(products);
//     });
// }, []);
