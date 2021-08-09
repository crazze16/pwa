import {useEffect, useState} from "react";
import {db} from "../config/fbConfig";

export const Title = () => {

    const [pizzaData, setPizzaData] = useState<any>([])

    const addToDB = () => {
        db.collection('pizza').add({name: 'Margarita', price: 90, weight: 240})
            .catch(e => console.log(e))
    }

    useEffect(() => {
        //get data one time
        // firestore.collection('pizza').get().then((shapshot: any) => {
        //     const items = shapshot.docs .map((doc: any) => ({...doc.data(), _id: doc.id}))
        //     setPizzaData(items)
        // })

        //get data on real time
        db.collection('pizza').onSnapshot(snapshot => {
            const data: any = [];
            snapshot.forEach((doc: any) => {
                data.push({...doc.data(), _id: doc.id})
            })
            setPizzaData(data)
        })
    }, [])

return (
    <div>
        title
        {pizzaData?.map((item: any) => <div key={item._id}>
            <div>{item.name}</div><button onClick={() => db.collection('pizza').doc(item._id).delete()}>delete</button>
        </div>)}
        <div><button onClick={addToDB}>add new</button></div>
    </div>
)
}