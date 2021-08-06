import React, {useEffect, useState} from 'react';
import {Route, Switch } from 'react-router-dom';
import {Title} from "./components/title";

function App() {

    const [state, setState] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setState(json))
    }, [])

  return (
       <Switch>
           <Route path="/about">
               <div>about</div>
           </Route>
           <Route path="/posts">
               {state?.map((item: any) => <div key={item.id}>{item.title}</div>)}
           </Route>
           <Route path="/" exact>
               home
           </Route>
           <Route path="/todo">
               <Todo/>
           </Route>
           <Route path="/title">
               <Title/>
           </Route>
       </Switch>
  );
}

export default App;

const Todo = () => {
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