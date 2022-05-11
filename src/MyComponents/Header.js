import React,{useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {BsPencilSquare} from 'react-icons/bs'
import {HiHome} from 'react-icons/hi'
import {HiDuplicate} from 'react-icons/hi'
import {HiFire} from 'react-icons/hi'
import {FiLogOut} from 'react-icons/fi'
import {RiPenNibLine} from "react-icons/ri"
import {TiThMenu} from "react-icons/ti"
import {Link} from 'react-router-dom'

function Header() {
    let history = useNavigate();
    const [user, setUser] = useState({})
    const yourPosts = () =>{
        let token = localStorage.getItem('token');
        if(token){
            axios.post('https://post-some.herokuapp.com/auth', {token:token})
            .then(res=>{
                if(res.data === false){
                    
                    history("/login");
                }else{
                    console.log(res.data)
                    setUser(res.data);
                    console.log(user);
                    history("/yourposts")
                }
            })
            .catch((err) =>{
                console.log(err);
            })
        }else{
            history("/login");
        }
    }

    const authToken = () =>{
        let token = localStorage.getItem('token');
        if(token){
            axios.post('https://post-some.herokuapp.com/auth', {token:token})
            .then(res=>{
                console.log(res.data)
                if(res.data === false){
                    
                    history("/login");
                }else{
                    setUser(res.data);
                    console.log(user);
                    history("/home")

                }
            })
            .catch((err) =>{
                console.log(err);
            })
        }
    }

    const authToken1 = () =>{
        let token = localStorage.getItem('token');
        if(token){
            axios.post('https://post-some.herokuapp.com/auth', {token:token})
            .then(res=>{
                if(res.data === false){
                    
                    history("/login");
                }else{
                    console.log(res.data)
                    setUser(res.data);
                    console.log(user);
                    history("/create")
                }
            })
            .catch((err) =>{
                console.log(err);
            })
        }else{
            history("/login");
        }
    }
    
    const authToken2 = () =>{
        let token = localStorage.getItem('token');
        if(token){
            axios.post('https://post-some.herokuapp.com/auth', {token:token})
            .then(res=>{
                if(res.data === false){
                    
                    history("/login");
                }else{
                    console.log(res.data)
                    setUser(res.data);
                    console.log(user);
                    history("/dropdown")
                }
            })
            .catch((err) =>{
                console.log(err);
            })
        }else{
            history("/login");
        }
    }

    const logOut = () => {
        localStorage.removeItem("token");
        history('/login');
    }

    

    const Trending = () =>{
        let token = localStorage.getItem('token');
        if(token){
            axios.post('https://post-some.herokuapp.com/auth', {token:token})
            .then(res=>{
                if(res.data === false){
                    
                    history("/login");
                }else{
                    console.log(res.data)
                    setUser(res.data);
                    console.log(user);
                    history("/trending")
                }
            })
            .catch((err) =>{
                console.log(err);
            })
        }else{
            history("/login");
        }
    }

    return (

        <div className="header">
                <div className="header_left">  
                   Helping Hands
                    
                </div>
                <div className="header_mid">                
                 <button className="header_mid_item"  onClick={authToken} type="button" name="home"><HiHome  className="makepost_icon"/>Home</button>
                    <button className="header_mid_item" onClick={authToken1} type="button" name="create"> <BsPencilSquare className="makepost_icon"/>Make a Request</button>

                    <button className="header_mid_item"  onClick={yourPosts} type='button' name='yourposts'><HiDuplicate className="makepost_icon"/>Your Requests</button>
                    <button className="header_mid_item" onClick={Trending} type="button" name="Trending"> <HiFire className="makepost_icon"/>Trending</button>
                </div>
                <div className="header_right">
                <   button onClick={logOut} className="header_right_item" type="button" name="logout"> <FiLogOut className="makepost_icon"/></button>
                    

                </div>
                <button onClick={authToken2} className="menu_item"><TiThMenu className="menu_icon"/></button>

               
            
        </div>

    )
}

export default Header
