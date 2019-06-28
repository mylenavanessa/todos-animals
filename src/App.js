import React from 'react';
import Animals from './componets/animals'
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
