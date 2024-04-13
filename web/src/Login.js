import React from 'react';
import "./App.css"
import fourtyTwo from  "./pics_of_front_pages/42.png"
import logo from "./pics_of_front_pages/0.png"
const Login = () => {
    return(
        <div className="login">
            <h1 className="title">PINGP<img src={logo}></img>NG</h1>

            <form>
                <div className='text'>
                    <h1>Get Started Now</h1>
                    <button> <img className='42' src={fourtyTwo}></img><a href="">LOGIN WITH INTRA</a></button>
                    <div className='spans'>
                        <br></br>
                        <p>or</p>
                        <br></br>
                    </div>

                </div>
                <div className='in'>
                    <label>Username</label>
                    <input type='text'></input>

                </div>
                <div className='in'>
                    <label>Password</label>
                    <input type='text'></input>

                </div>
                <button>LOGIN</button>
            </form>
        </div>   
    )
}

export default Login