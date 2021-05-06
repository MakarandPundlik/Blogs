import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tablerow from './Tablerow';
import Cardschema from './Cardschema';
import Loading from './Loading';
import Carousel from './Carousel';
const API_URL = "http://localhost:2020"
function Homepage(props) {
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);

  useEffect(async () => {
    await axios.get(`${API_URL}/api/getblogs`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then((res) => {
        var blogs = [];
        setLoading(true);
        res.data.result.forEach(element => {
          element.blogArray.forEach((b) => {
            // console.log(b);
            blogs.push(b);
          })
        });
        setBlogs(blogs);
      })
      .catch((err) => {
        console.log(err)

      })
  }, []);

  useEffect(() => {
    setLoading(false);
    //console.log(blogs)
  }, [blogs]);
  return (
    loading ? <Loading /> :
      (
        blogs.length > 0 ? <div className="row">
          {/* <Carousel/> */}
          <h3 className="text-secondary my-3">Here are some blogs from BlogPost...</h3>
          
            
            {
              
              blogs &&
      
              blogs.map((blog) => {
                return (

                  <Cardschema key={blog._id}
                    title={blog.title}
                    data={blog.data}
                    author={blog.author}
                  />
                )

              })

            }
        
        </div>

          : <h3 className="text-secondary m-5 text-center">Fetching Blogs <Loading/></h3>
      )
  );

}

export default Homepage;