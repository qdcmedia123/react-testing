import {SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH} from './types';
import axios from 'axios';


export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
}

export function fetchComments() {
    const response = axios.get('http://jsonplaceholder.typicode.com/posts/1/comments');
    return {
        type: FETCH_COMMENTS,
        payload: response
    }
}

export function changeAuth(isLoggedIn) {
    return {
        type: CHANGE_AUTH,
        payload:isLoggedIn
    }
}