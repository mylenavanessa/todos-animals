import React from 'react';
import Animals from './components/Animals'
import { Provider } from 'react-redux'
import store from './redux/Store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Animals/>
      </Provider>
    </div>
  );
}

export default App;
