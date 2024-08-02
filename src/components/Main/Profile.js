import React, { useContext } from "react";
import { Link } from "react-router-dom";

// styles
import styles from "./Profile.module.css";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

// context
import { UserContext } from "../../contexts/UserContextProvider";

const Profile = () => {
  const { user, loading, logout } = useContext(UserContext);

  return (
    <div className={styles.container}>
      <div className={styles.profileContainer}>
        <div className={styles.photo}>
          <span className={styles.iconContainer}>
            <FontAwesomeIcon icon={faPlus} className={styles.iconPluse} />
          </span>
        </div>
        <div className={styles.usernameContainer}>
          <p className={styles.fieldTitle}>Username</p>
          {!loading ? (
            <p className={styles.fiedlValue}>{user.username}</p>
          ) : undefined}
        </div>
        <div className={styles.emailContainer}>
          <p className={styles.fieldTitle}>E-Mail</p>
          {!loading ? (
            <p className={styles.fiedlValue}>{user.email}</p>
          ) : undefined}
        </div>
        <div className={styles.passwordContainer}>
          <p className={styles.fieldTitle}>Password</p>
          {!loading ? (
            <p className={styles.fiedlValue}>{user.password}</p>
          ) : undefined}
        </div>
        <Link to="/main" onClick={logout} className={styles.logout}>
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Profile;
