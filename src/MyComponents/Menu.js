import React from 'react'
import { useNavigate } from 'react-router'
import axios from "axios"
import { useState, useEffect } from 'react'
import {HiHome} from 'react-icons/hi'
import {HiDuplicate} from 'react-icons/hi'
import {HiFire} from 'react-icons/hi'
import {FiLogOut} from 'react-icons/fi'
import {BsPencilSquare} from 'react-icons/bs'
import '../comp.css'
function Menu() {
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
        <div className="menu_container">
            <button className="menu_button" onClick={authToken}><HiHome  className="makepost_icon"/>Home</button>
            <button className="menu_button" onClick={authToken1} ><BsPencilSquare className="makepost_icon"/>Make a Post</button>
            <button className="menu_button" onClick={yourPosts}><HiDuplicate className="makepost_icon"/>Your Posts</button>
            <button className="menu_button" onClick={Trending}> <HiFire className="makepost_icon"/>Trending</button>
            <button className="menu_button" button onClick={logOut}><FiLogOut className="makepost_icon"/>Log Out</button>
            
        </div>
    )
}

export default Menu
