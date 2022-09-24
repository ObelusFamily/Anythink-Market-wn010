import React from "react";
import agent from "../../agent";
import logo from "../../imgs/logo.png";

const Banner = (props) => {

  const handleSearchEntry = (ev) => {
    ev.preventDefault()
    let title = ev.target.value
    if(title.length >= 3){
      props.onSearchTitle(
        title,
        (page) => agent.Items.byTitle(title, page),
        agent.Items.byTitle(title)
      )
    }
  }


  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to get</span>
          <input onChange={handleSearchEntry}></input>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
