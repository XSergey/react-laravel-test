import axios from 'axios';
import {browserHistory} from 'react-router';
import {ADD_TEXT} from './types';

const ROOT_URL = 'http://localhost:8000';

export function addText({text}){
    return function(dispatch){
        axios.post(`${ROOT_URL}/api/texts`,{text},{})
        .then(response => {
            dispatch({
                type:ADD_TEXT,
                payload:response
            })
        })
    }
}