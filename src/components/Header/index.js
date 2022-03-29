import Logo from "../../images/BU.png";


import "./style.css"

function Header() {

return (
    <div>
          <div className="header-logo-div">
        <img className="header-logo" src={Logo}></img>
      </div>
    </div>
)

}

export default Header