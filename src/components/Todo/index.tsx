import React, {useEffect, useState} from "react";

export const TodoPage = () => {
    const [state, setState] = useState<any>()

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => setState(json))
    }, [])

    return (
        <div>
            {state?.title}
        </div>
    )
}