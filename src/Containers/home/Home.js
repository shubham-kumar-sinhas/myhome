import React, {useState} from "react";
import About from "../../Components/about/About";
import Bio from "../../Components/pages/Bio";
import Blogcard from "../../Components/pages/Blogcard";

const Home = () => {
    const [show, setShow] = useState(true);
    const handleClick = (val) => {
      setShow(val); 
    };  
  return (
    <>
      <div className="container home-page">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-2 col-sm-12">
           <About updatecurentpage={handleClick}/>
          </div>
          <div className="col-lg-1 col-sm-12"> </div>
          <div className="col-lg-5 col-sm-12">
          {show ? <Bio/> : <Blogcard/>}
          </div>
          <div className="col-lg-2"></div>  
        </div>
      </div>
    </>
  );
};

export default Home;
