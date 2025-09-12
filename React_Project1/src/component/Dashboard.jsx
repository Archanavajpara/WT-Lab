import React from 'react'


function Dashboard({user,logout}) {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
        <h2 className='text-2xl font-bold mb-4'>Welcome, {user.username}</h2>
        <button onClick={logout}
        className='px-4 py-2 bg-red-500 text-white rounded hover:blue-red-600'>Logout</button>
    </div>
  );
};

export default Dashboard
