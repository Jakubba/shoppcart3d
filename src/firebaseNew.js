import React from "react";
import { useState, useEffect } from "react";
import {db} from './ConfigFirebase';
import {collection, getDocs} from 'firebase/firestore'

function firebaseNew() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [products, setProducts] = useState([]);
    const productsCollectionRef = collection(db,"Products")

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() =>{

        const getProducts = async () => {
            const data = await getDocs(productsCollectionRef);
            setProducts(data.docs.map((doc) =>({...doc.data(),id: doc.id})))
        };

        getProducts();

    },[productsCollectionRef])
    return( <div>

        {products.map((Products) => {
            return( <div>
                <h1>{Products.img}</h1>
                <h1>{Products.title}</h1>
            </div>
            );
        })}
    </div>
    );

}

export default firebaseNew;