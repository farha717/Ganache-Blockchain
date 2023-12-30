import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Drizzle, generateStore } from "drizzle";
import Addition from "./contracts/Addition.json";




const options = { contracts: [Addition] };

const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);

ReactDOM.render(<App drizzle={drizzle} />, document.getElementById("root"));



