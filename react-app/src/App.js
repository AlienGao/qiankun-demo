import React from 'react';
import './App.css';
import { hot } from 'react-hot-loader/root'
import actions from './shared'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { globalData: [] }
  }

  componentDidMount() {
    if (window.__POWERED_BY_QIANKUN__) {
      actions.onGlobalStateChange(state => {
        this.setState(() => {
          return { globalData: Array.isArray(state.taskList) ? state.taskList : [] }
        })
      }, true)
    }
  }

  render() {
    return (
      <div className="App">
        <ol>
          {
            this.state.globalData.map((item, index) => {
              return (
                <li key={`${item}-${index}`}>{item.value}</li>
              )
            })
          }
        </ol>
      </div>
    );
  }
}

export default process.env.NODE_ENV === "development" ? hot(App) : App;
