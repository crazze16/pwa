import {createContext, useState} from "react";

export const Context = createContext<any>(null)

export const ContextWrapper = ({children}: any) => {

    const [state, setState] = useState<number>(0)

    return (
        <Context.Provider value={{state, setState}}>
            {children}
        </Context.Provider>
    )
}