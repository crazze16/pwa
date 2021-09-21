import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {BrowserRouter} from 'react-router-dom'
import {Header} from "./components/Header";
import {ContextWrapper} from "./context";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ContextWrapper>
                <Header/>
                <App/>
            </ContextWrapper>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
