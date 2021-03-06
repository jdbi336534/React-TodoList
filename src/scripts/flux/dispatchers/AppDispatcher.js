import  {Dispatcher} from 'flux';
import ListStore from '../stores/ListStore.js';
let AppDispatcher=new Dispatcher();
 AppDispatcher.register(action => {
  switch(action.actionType){
    case 'ADD_NEW_ITEM':
      ListStore.addNewItemHandle(action.text);
      ListStore.emitChange();
      break;
  }
});
AppDispatcher.register(action => {
 switch(action.actionType){
   case 'DELETE_LI':
     ListStore.delItemHandle(action.index);
     ListStore.emitChange();
     break;
 }
});
export default AppDispatcher;
