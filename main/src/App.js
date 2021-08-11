import styled from 'styled-components';
import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import microApps from './micro-apps';
import actions from './shared';

const apps = microApps

const Wrapper = styled.div`
  text-align: center;
`

const header = styled.header`
  background-color: #282c34;
  max-height: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: calc(10px + 2vmin);
  color: white;
`

const StyledLink = styled(Link)`
  display: inline-block;
  width: 30%;
  height: 100px;
  line-height: 100px;
`

const todoList = [
  'Welcome to Beijing',
  'Bei Bei',
  'Jing Jing',
  'Huan Huan',
  'Ying Ying',
  'Ni Ni'
]
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { taskList: [] };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const id = Math.random()
    let obj = {}
    obj.id = id
    obj.value = todoList[Math.floor(Math.random() * todoList.length)]
    this.setState({
      taskList: [...this.state.taskList, obj]
    }, () => {
      actions.setGlobalState({ taskList: this.state.taskList})
    })
  }

  render() {
    return (
      <Wrapper>
        <header>
            {
              apps.map(app => 
                <Router key={app.name}>
                  <StyledLink to={app.activeRule}>{app.name}</StyledLink>
                </Router>
              )
            }
            <button onClick={this.handleClick}>添加任务</button>
        </header>
        <div id="container"></div>
      </Wrapper>
    )
  }
}

export default App;
