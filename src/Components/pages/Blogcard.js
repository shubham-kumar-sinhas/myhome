import React from "react";
import Data from "../../Assets/json/blog.json";
import { useNavigate } from "react-router-dom";

const Blogcard = ({ data }) => {
  const navigate = useNavigate();

  const handledetails = (id) => {
    navigate("/blog/" + id);
  };

  return (
    <>
      <div>
        {Data &&
          Data.Blog &&
          Data.Blog.map((item, key) => (
            <div key={item.id}>
              <div className="blog-margin-top"> {item.Month}</div>
              <h5> {item.Heading}</h5>
              <div>
                <p>{item.ShortDescription}</p>
              </div>
              <div className="Button-margin">
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={(e) => handledetails(item.id)}
                >
                  READ MORE
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Blogcard;