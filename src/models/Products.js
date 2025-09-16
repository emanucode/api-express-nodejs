import { db } from "./firebase.js";
import { collection, getDocs, doc, getDoc, addDoc } from "firebase/firestore";

const productsCollection = collection(db, "products");

export async function getAllProducts() {
  try {
    const snapshot = await getDocs(productsCollection);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error(error);
  }
}

export async function getProductById(id) {
  try {
    const productRef = doc(productsCollection, id);
    const snapshot = await getDoc(productRef);
    return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
  } catch (error) {
    console.error(error);
  }
}

export async function createProduct(data) {
  try {
    const docRef = await addDoc(productsCollection, data);
    return { id: docRef.id, ...data };
  } catch (error) {
    console.log(error);
  }
}
