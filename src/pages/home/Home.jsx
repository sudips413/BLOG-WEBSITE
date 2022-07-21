import React from 'react';
import { useEffect, useState } from "react";
import './home.css';
import Header from '../../component/header/head';

import Sidebar from '../../component/sidebar/Sidebar';
import Posts from '../../component/posts/Posts';
import axios from "axios";
import { useLocation } from 'react-router-dom';

const Home =() =>{
    const [posts, setPosts] = useState([]);
    const {search} = useLocation();

    
    
    useEffect(() => {
      const fetchPosts = async ()=> {
        const res = await axios.get("/posts"+search);
        setPosts(res.data);
      };
      fetchPosts();
    }, [search]);
    return (
    <>
    <Header/>
    <div className='home'>
      
           
      <Posts posts={posts}/>
      <Sidebar/>
    
    </div>
    </>
  )
}

export default Home;
