import React from "react";

const Blogcard = () => {


  return (
    <>
      <div>NOVEMBER   </div>
      <div>
        <h5>The art of vulnerability</h5>
      </div>
      <div>
        <p>
          Art requires vulnerability but it can also be the birthing place of
          it.
        </p>
      </div>
      <div className="Button-margin">
        <button className="btn btn-outline-secondary btn-sm" onClick={(e) => e}>
          READ MORE
        </button>
      </div>
    </>
  );
};

export default Blogcard;
