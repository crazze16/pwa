import {db} from "../../../../config/fbConfig";
import {useEffect, useState} from "react";
import {SneakerItem} from "../sneakerItem";
import {Wrapper} from "./styles";

export interface ISneaker {
    name: string
    price: number
    size: number[]
    material: string[]
    discount: boolean
    type: string
    company: string
    _id: string
}

export const SneakersList = () => {

    const [sneakersData, setSneakersData] = useState<Array<ISneaker>>([])

    const mappedSneakersData = sneakersData?.map((item) => <SneakerItem key={item._id} {...item}/>)

    useEffect(() => {
        db.collection('sockers').onSnapshot((snapshot => {
            const data: ISneaker[] = []
            snapshot.forEach((doc: any) => {
                data.push({...doc.data(), _id: doc.id})
            })
            setSneakersData(data)
        }))
    }, [])

    return (
        <Wrapper>
            {mappedSneakersData}
        </Wrapper>
    )
}