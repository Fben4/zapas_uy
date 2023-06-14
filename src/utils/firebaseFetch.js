
import { collection , getDocs,query, where} from 'firebase/firestore';
import {db} from './firebaseConfig';



export const firebaseFetch = (idCategory, setZapas, SetLoading) =>  {
    const collectionRef = idCategory 
                                ? query(collection(db, "zapas"), where("categoryid", "==", parseInt(idCategory))) 
                                : collection(db, "zapas");
    
getDocs(collectionRef).then((res) => {
    setZapas(res.docs.map((prod) => (
        {id: prod.id, ...prod.data(),}
    
    )))

}).then(() => SetLoading(false))

}
    
