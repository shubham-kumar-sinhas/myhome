import React from "react";
import { Link, useParams } from 'react-router-dom';
import Data from "../../Assets/json/blog.json";
import { BiArrowBack} from "react-icons/bi";

const Blog = () => {
  
  return (
    <>
      <div className="row">
      <div className="col-lg-2"></div>
      <div className="col-lg-1">
        <div className="backbutton"> <Link to={-1}> <BiArrowBack/></Link></div>           
      </div>  
      <div className="col-lg-6">
        {Data &&
          Data.Blog &&
          Data.Blog.map((item, key) => (
            <div key={item.id}>
              <div className="blog-margin-top"> {item.Month}</div>
              <h5> {item.Heading}</h5>
              <div>
                <p>{item.Description}</p>
              </div>
            </div>
          ))}
      </div>
      <div className="col-lg-3"></div>
      </div>
    </>
  );
};

export default Blog;