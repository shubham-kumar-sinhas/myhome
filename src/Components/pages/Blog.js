import React from "react";
import { Link, useParams } from 'react-router-dom';
import Data from "../../Assets/json/blog.json";
import { BiArrowBack} from "react-icons/bi";

const Blog = () => {
  let { id } = useParams();
  
  return (
    <>
      <div className="row">
      <div className="col-lg-2"></div>
      <div className="col-lg-1">
        <div> <Link to={-1} className="backbutton"> <BiArrowBack/></Link></div>        
      </div>  
      <div className="col-lg-6">
        {Data &&
          Data.Blog &&
          Data.Blog.map((item, key) => (
            <div key={item.id}>
              <div className="blog-margin-top"> {item.Month}</div>
              <h1> {item.Heading}</h1>
              <div>
              <div dangerouslySetInnerHTML={{ __html: item.Description }} />
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