import {ADD_TEXT, ADD_TEXT_SUCCESS} from './../actions/types';

const INITIAL_STATE = {
    addText:{post:null,error:null,loading:false},
};

export default function (state = INITIAL_STATE, action){
    switch (action.type) {
      case ADD_TEXT:
        return { ...state, updatePost:{post:null,error:null,loading:true}};     
      case ADD_TEXT_SUCCESS:
        return { ...state, updatePost:{post:true,error:null,loading:false}};     
      default:
        return state;
    }
}