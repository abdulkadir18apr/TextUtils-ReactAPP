import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom';
export default function Navbar(props) {

    const mystyle={
        border:'none'
    }
    function chooseStyle(){
        let style=""
        if(props.customColor!==""){
            style=props.customColor
        }
        else{
            style=props.mode
        }
        return style
    }

  return (
    <nav className={`navbar navbar-expand-lg navbar-${chooseStyle()} bg-${chooseStyle()}`} >
  <div className="container-fluid">
    <a className="navbar-brand " href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{props.aboutText}</a>
        </li>
       
      </ul>
      <form className="d-flex" role="search">
        <input type="color" value={props.customColor} onChange={props.HandleonChange} className="mx-2" style={mystyle}></input>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable Dark Mode</label>
</div>
      </form>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes={title:propTypes.string.isRequired,aboutText:propTypes.string};
Navbar.defaultProps={aboutText:"About"
}
