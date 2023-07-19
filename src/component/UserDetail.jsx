import React from 'react'
import DeleteAllUser from './DeleteAllUser'
import { fakeUserData } from '../api';
import {useDispatch} from "react-redux"; 
import { addUser } from '../store/slices/UserSlice';
import UserName from './UserName';

function UserDetail() {
    

    const dispatch = useDispatch();

    const addNewUser = (payload) => {
        console.log(payload);
        dispatch(addUser(payload));
    };

    return (
        <>
            <p>User Details</p>
            <button onClick={() => {addNewUser(fakeUserData())}}>Add User</button>
            <hr/>
            <ul>
                <UserName />
            </ul>
            <hr/>
            <DeleteAllUser/>
        </>
    )
}

export default UserDetail;