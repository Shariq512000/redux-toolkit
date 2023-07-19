import React from 'react'
import { deleteUser } from '../store/slices/UserSlice';
import {useDispatch} from "react-redux";

function DeleteAllUser() {
    
    const dispatch = useDispatch();
    const deleteAll = () => {
        dispatch(deleteUser());
    }

    return (
        <>
            <button onClick={ () => { deleteAll() } }>Delete All Users</button>
        </>
    )
}

export default DeleteAllUser;
