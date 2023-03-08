import React, { useState, useEffect } from 'react';
import db, { collection, query, getDocs } from "../firebase";
import './PlansScreen.css';

function PlansScreen() {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        const get = async () => {
            const q = query(collection(db, `products`));
            // const q2 = query(collectionGroup(db, 'prices'));

            const querySnapshot = await getDocs(q);
            // const querySnapshot2 = await getDocs(q2);

            // const q2 = query(listCollections(db, 'prices'));
            // const q2Snapshot = await getDocs(q2);

            // q2Snapshot.forEach((doc) => {
            //     console.log(doc.id, "=>", doc.data());
            // });



            // let data = []

            querySnapshot.forEach((doc) => {

                console.log(doc.id, "=>", doc.data());
                // data.push({ id: doc.id, product: doc.data() });
            });


            setProducts(products);
        };


        get();
    }, [products]);

    return (
        <div className='plansScreen'>

        </div>
    )
}

export default PlansScreen
