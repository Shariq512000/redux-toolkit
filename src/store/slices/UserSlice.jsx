import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers:{
        addUser(state, action){
            state.push(action.payload);
            console.log(action.payload);
        },
        removeUser(state, action){
            console.log("index:" , action.payload);
            state.splice(action.payload , 1);
        },
        deleteUser(state, action){
            console.log("Okkk");
            return [];
        },
    }
})

console.log(userSlice.actions);

export default userSlice.reducer;

export const {addUser , removeUser , deleteUser} = userSlice.actions;