import React from 'react';
export default React.createClass({
  handleVal(event){
    let val=this.refs.listtodo.value;
    this.refs.listtodo.value="";
    // console.log(this.refs);
    this.props.onClick(val);

  },
  delwli(index){

    this.props.onDel(index);

  },
    render() {
      let items=this.props.items;
      let itemHTML=items.map((listItem,i)=>{
        return <li key={i}>{listItem}<button onClick={this.delwli.bind(this,i)}>X</button></li>
      });
        return (
            <div>
            <input type="text" ref="listtodo" placeholder="请输入文字。"/>
            <button onClick={this.handleVal}>New item</button>
                <ul>
                   {itemHTML}
                </ul>
            </div>
        )
    }
})
