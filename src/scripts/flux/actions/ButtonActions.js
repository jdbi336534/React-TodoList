import AppDispatcher from '../dispatchers/AppDispatcher.js';
export default {
  addNewItem(text){
    AppDispatcher.dispatch({
      actionType:'ADD_NEW_ITEM',
      text:text
    })
  },
  delLi(index){
    AppDispatcher.dispatch({
    actionType:'DELETE_LI',
    index:index
      })
  }
}
