
import { collection , getDocs} from 'firebase/firestore';
import {db} from './firebaseConfig';
import {query, where, orderBy} from 'firebase/firestore';

export async function firebaseFetch(idCategory) {
    let q;
    if (idCategory) {
        q = query(collection(db, "item"), where("category", "==", idCategory))
    } else {
        q = query(collection(db, "item"));
    }
    const fbData = await getDocs(q);
    const mappedFbData = fbData.docs.map(item => ({
        id: item.id,
        ...item.data()
    }))
    return mappedFbData;
}