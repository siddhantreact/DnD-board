import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux"
import Store from './Redux/Store';

import { PersistGate } from 'redux-persist/integration/react';
import { persist } from "../src/Redux/Store"

import {DragDropContext} from "react-beautiful-dnd"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DragDropContext>

      <Provider store={Store}>
        <PersistGate persistor={persist}>
          <App />
        </PersistGate>
      </Provider>

    </DragDropContext>
  </React.StrictMode>
);


