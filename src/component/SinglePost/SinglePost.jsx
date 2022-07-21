import React, { useEffect }  from 'react'
import {useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './SinglePost.css'
import axios from 'axios'


export default function SinglePost() {  
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  console.log(path)
  const [title, setTitle] = useState("");
  const [descp, setDesc] = useState("");
  const [post, setPost] = useState({});

  useEffect(()=>
    {const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      console.log(res)
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.descp);
    };
    getPost();
  }, [path]);

  return (
    <div className='SinglePost'>
    
      <div className="singlePostWrapper">
      {post.photo && 
        <img
          className="singlePostImg"
          src={post.photo}
          alt=""
        />
      }  
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span  className="singlePostAuthor">
            Author:
            <Link to ={`/?user=${post.username}`} className='link'>
            <b>{post.username}</b>
            </Link>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">
          {post.descp}
        </p>
      </div>
    </div>
      
  
)
}
