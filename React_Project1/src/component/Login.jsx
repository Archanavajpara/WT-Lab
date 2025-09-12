import React from 'react'
import { useState } from 'react';
function Login({login}) {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
     const handleSubmit=(e)=>{
            e.preventDefault();
            const success=login(username,password);
            if (!success) {
                alert("Invalid credentials ❌");
            }
        };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} className="px-4 py-2 border border-gray-300 rounded"/>
            <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="px-4 py-2 border border-gray-300 rounded"/>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Login</button>
        </form>
    </div>
  )
}

export default Login
