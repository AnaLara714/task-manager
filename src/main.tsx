import ReactDOM from 'react-dom';
import React from "react";

import { Provider } from 'react-redux'
import { TaskManager } from './pages/TaskManager/TaskManager'
import { store } from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <TaskManager />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

