import React, {Component} from 'react';
import Home from "./Home";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./App.scss";
import {db} from "./firebase";

export class App extends Component{
    render(){
        return (
                <Home/>
            );
    }
}

export default App;