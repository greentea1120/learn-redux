import React, { Component } from 'react';
// import 'antd/dist/antd.css';
import store from './store'
import {getInputChangeAction, getAddItemAction, getDeleteItemAction} from './store/actionCreators'
import TodoLIstUI from './TodoLIstUI'
// const data = [
//   'Racing car sprays burning fuel into crowd.',
//   'Japanese princess to wed commoner.',
//   'Australian walks 100km after outback crash.',
//   'Man charged over missing wedding girl.',
//   'Los Angeles battles huge wildfires.',
// ];

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
    console.log(store.getState())
    store.subscribe(this.handleStoreChange)
  }
  render() {
    return (
      <TodoLIstUI 
      inputValue={this.state.inputValue}
      list={this.state.list}
      handleInputChange={this.handleInputChange}
      handleBtnClick={this.handleBtnClick}
      handleItemDelete={this.handleItemDelete}/>
    );
  }
  handleInputChange = (e) => {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
    console.log(e.target.value)
  }
  handleBtnClick = () => {
    const action = getAddItemAction()
    store.dispatch(action)
  }
  handleStoreChange = () => {
    this.setState(store.getState())
  }
  handleItemDelete = (index) => {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
}

export default TodoList;