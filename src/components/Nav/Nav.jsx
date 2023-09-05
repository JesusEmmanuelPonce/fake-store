import { Link } from 'react-router-dom';

import Logo from "assets/img/logo.png"
import "./styles.scss";

const Nav = () => {
  return (
    <nav>
			<Link to="/">
				<img src={Logo} alt="logo fake store" />
			</Link>
    </nav>
  )
};

export default Nav;
