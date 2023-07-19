import {useSelector , useDispatch} from "react-redux";
import { removeUser } from "../store/slices/UserSlice";


function UserName(){


    const dispatch = useDispatch();
    const data = useSelector((state) => {
        return state.users
    } );

    const deleteUser = (i) => {
        dispatch(removeUser(i));
        console.log(i);
    };

    return(
        <div>
            {
                data.map((eachUser , i) => {
                    return <li key={i}>
                        {eachUser}
                        <button onClick={()=>{deleteUser(i)}}>delete</button>
                    </li>
                } )
            }
        </div>
    )
}

export default UserName;