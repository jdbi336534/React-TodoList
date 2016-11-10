import { EventEmitter } from 'events';
export default Object.assign({}, EventEmitter.prototype ,{
  items:[],
  getAll(){
    return this.items;
  },
  addNewItemHandle(text){
    // this.items.push(text);
    this.items.unshift(text);
  },
  delItemHandle(index){
    this.items.splice(index,1);
  },
  emitChange(){
    this.emit('change');
  },
  addChangeListener(callback){
    this.on('change',callback);
  },
  removeChangeListener(callback){
    this.removeListener('change',callback);
  }

})
