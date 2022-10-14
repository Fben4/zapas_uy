
import { collection , getDocs} from 'firebase/firestore';
import {db} from './firebaseConfig';
import {query, where, orderBy} from 'firebase/firestore';



export async function firebaseFetch(idCategory) {
    const collectionRef = idCategory ? query(collection(db, "zapas"), where("categoryid", "==", parseInt(idCategory))) : collection(db, "zapas");
    const fbData = await getDocs(collectionRef);
    const mappeddata = fbData.docs.map((prod) => ({id: prod.id, ...prod.data(), })); 
    return mappeddata;
}