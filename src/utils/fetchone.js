import { collection, getDoc, where, query, orderBy,doc} from "firebase/firestore";
import {db} from '../utils/firebaseConfig';

export const fetchone = async (idItem)  => {
    const docRef = doc(db, "zapas", idItem);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return {
            id: idItem,
            ...docSnap.data()
        }
    }
    else{
        console.log("No such document!");
    }
}