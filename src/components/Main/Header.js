import React, { useRef, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

//styles
import styles from "./Header.module.css";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";

// contexts
import { CartContext } from "../../contexts/CartContextProvider";
import { UserContext } from "../../contexts/UserContextProvider";

const Header = () => {
  const menu = useRef(null);
  const products = useRef(null);
  const category = useRef(null);
  const contact = useRef(null);
  const about = useRef(null);
  const span = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  const { state } = useContext(CartContext);
  const { user } = useContext(UserContext);

  useEffect(() => {
    switch (location.pathname) {
      case "/main/products":
        products.current.classList.add(styles.focusedLink);
        category.current.classList.remove(styles.focusedLink);
        contact.current.classList.remove(styles.focusedLink);
        about.current.classList.remove(styles.focusedLink);
        break;
      case "/main/category":
        category.current.classList.add(styles.focusedLink);
        products.current.classList.remove(styles.focusedLink);
        contact.current.classList.remove(styles.focusedLink);
        about.current.classList.remove(styles.focusedLink);
        break;
      case "/main/contact":
        contact.current.classList.add(styles.focusedLink);
        products.current.classList.remove(styles.focusedLink);
        category.current.classList.remove(styles.focusedLink);
        about.current.classList.remove(styles.focusedLink);
        break;
      case "/main/about":
        about.current.classList.add(styles.focusedLink);
        products.current.classList.remove(styles.focusedLink);
        category.current.classList.remove(styles.focusedLink);
        contact.current.classList.remove(styles.focusedLink);
        break;
      default:
        products.current.classList.remove(styles.focusedLink);
        category.current.classList.remove(styles.focusedLink);
        contact.current.classList.remove(styles.focusedLink);
        about.current.classList.remove(styles.focusedLink);
        break;
    }
  }, [location]);

  const clickMenuHandler = () => {
    menu.current.classList.toggle(styles.showMenu);
  };

  const mouseEnterHandler = () => {
    span.current.classList.add(styles.spanHover);
  };

  const mouseLeaveHandler = () => {
    span.current.classList.remove(styles.spanHover);
  };

  const clickCartHandler = () => {
    navigate("/main/cart");
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoIconContainer}>
        <div className={styles.logo}>Arshia's Logo</div>
        <FontAwesomeIcon
          icon={faBars}
          className={styles.barIcon}
          onClick={clickMenuHandler}
        />
      </div>
      <div className={styles.menuContainer} ref={menu}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link to="products" className={styles.link} ref={products}>
                Products
              </Link>
            </li>
            <li>
              <Link to="category" className={styles.link} ref={category}>
                Category
              </Link>
            </li>
            <li>
              <Link to="contact" className={styles.link} ref={contact}>
                Contact us
              </Link>
            </li>
            <li>
              <Link to="about" className={styles.link} ref={about}>
                About us
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.signUpLoginCartIconContainer}>
          <div className={styles.cartIconContainer}>
            <FontAwesomeIcon
              icon={faCartShopping}
              className={styles.cartIcon}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              onClick={clickCartHandler}
            />
            <span className={styles.span} ref={span}>
              {state.productsNumber}
            </span>
          </div>
          {user ? (
            <Link to="profile" className={styles.userProfile}></Link>
          ) : (
            <>
              <Link to="/signup" className={styles.signup}>
                SignUp
              </Link>
              <Link to="/login" className={styles.login}>
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
