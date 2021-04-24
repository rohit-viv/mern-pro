import React from 'react';
import './App.css';
import BookContainer from './components/BookContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import Hookbookcontainer from './components/Hookbookcontainer';

function App() {
  return (
    <Provider store={store}>
 <div className="App">
     <BookContainer/>
     <Hookbookcontainer/>
    </div>
    </Provider>
   
  );
}

export default App;
