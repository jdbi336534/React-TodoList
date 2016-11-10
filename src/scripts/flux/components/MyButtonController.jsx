import React from 'react';
import MyButton from './MyButton.jsx';
import ButtonActions from '../actions/ButtonActions.js';
import ListStore from '../stores/ListStore.js';
export default React.createClass({
  getInitialState(){
    return{
      items:ListStore.getAll()
    }
  },
  createNewItem(val){
     ButtonActions.addNewItem(val);
    // console.log(val);
  },
  deleteli(index){
    ButtonActions.delLi(index);
  },
  componentDidMount(){
    ListStore.addChangeListener(this._onChange);
  },
  componentWillUnmount(){
    ListStore.removeChangeListener(this._onChange);
  },
  _onChange(){
    this.setState({
      items:ListStore.getAll()
    })
  },
    render() {
        return (
            <MyButton onClick={this.createNewItem} items={this.state.items} onDel={this.deleteli}/>

        )
    }
})
