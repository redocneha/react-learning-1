import { GET_USERS } from './constants'
import redux from 'redux';

function fetchUsers () {
    return({
        type: GET_USERS
    })
}