import { Wrapper } from './styles'
import {useContext} from "react";
import {Context} from "../../context";

export const Header = () => {

    const {state, setState} = useContext(Context)

    return (
        <Wrapper>
            12322
            basket: {state}
            <button onClick={() => setState((prev: number) => prev + 1)}>click</button>
        </Wrapper>
    )
}