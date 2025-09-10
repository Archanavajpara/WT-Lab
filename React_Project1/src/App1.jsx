import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App1.css'

function ProfileCard(props) {
    const{name,age,isDisplay}=props;
    return(
        <div>
            {isDisplay?(
                <div>
                    <h2>Name:{name}</h2>
                    <h2>Age: {age}</h2>
                </div>
            ):
            (
                <h2>profile is hidden</h2>
            )}
        </div>
    )
}
  
function App1() {
    function handleClick() {
        alert("Button clicked");
    }
  return(
        <div style={{textAlign:'center'}}>
            <h1>ReactJS + Event Handling + Conditional Rendering</h1>
             <hr/>
            <ProfileCard name="John Doe" age={30} isDisplay={true} />
            <hr/>
            <ProfileCard name="Jane Doe" age={25} isDisplay={false} />
            <hr/>
             <div className='button'>
                <button onClick={handleClick}>Click</button>
                
                <button onDoubleClick={handleClick}>Double Click</button>
                
                <button onMouseDown={handleClick}>Mouse Down</button>
                
                <button onMouseUp={handleClick}>Mouse Up</button>
                
                <button onMouseEnter={handleClick}>Mouse Enter</button>
                
                <button onMouseLeave={handleClick}>Mouse Leave</button>
                
                <button onMouseOver={handleClick}>Mouse Over</button>
                
                <button onMouseOut={handleClick}>Mouse Out</button>
                
                <button onMouseMove={handleClick}>Mouse Move</button>
                
            </div>         

        </div>
      );
}

export default App1
