import { useState } from 'react';
import Login from './component/Login';
import Dashboard from './component/Dashboard';

export default function App4() {
    const[user,setUser]=useState(null);

    const login=(username,password)=>{
        if (username==="admin" && password==="1234") {
            setUser({username});
            return true;
        }
        return false;
    };
    const logout=()=>setUser(null);
    return (
        <div>
            {user ? (
                <Dashboard user={user} logout={logout}/>
            ) : (
                <Login login={login}/>
            )}
        </div>
    );
}