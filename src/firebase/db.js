// src/firebase/db.js
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "./config";

// Inicializa Firestore
const db = getFirestore(app);

// Función para obtener productos de Firebase
export const getProducts = async (setProducts) => {
    const querySnapshot = await getDocs(collection(db, "items"));
    const products = [];

    querySnapshot.forEach((doc) => {
        products.push(doc.data());
    });

    setProducts(products);
}
