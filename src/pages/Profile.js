import React, { Component, Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Profile.module.css";

import profile from "../assets/profile.png";
import edit from "../assets/edit.png";
import editwhite from "../assets/edit-white.png";
import editb from "../assets/editb.png";
import logout from "../assets/logout.png";

class Profile extends Component {
  render() {
    return (
      <Fragment>
        <main className={styles["main-2"]}>
          <main className={styles["main"]}>
            <Header />
            <section className={styles["section-1"]}>
              <h1 className={styles["section-1-header"]}>Profile</h1>
              <p className={styles["section-1-text"]}>
                See your notifications for the latest updates
              </p>
            </section>
            <section className={styles["section-2"]}>
              <div className={styles["profile-div"]}>
                <div className={styles["profile-image-div"]}>
                  <img className={styles[""]} src={profile} alt="img" />
                  <div className={styles["profile-image-edit"]}>
                    <p>EDIT</p>
                    <img className={styles[""]} src={editwhite} alt="img" />
                  </div>
                </div>
                <div>
                  <div className={styles["profile-top-header-div"]}>
                    <h1 className={styles["profile-top-header"]}>Syifa</h1>
                    <img className={styles[""]} src={edit} alt="img" />
                  </div>
                  <p className={styles["profile-top-text"]}>as Customer</p>
                </div>
              </div>
              <div className={styles["section-3-div"]}>
                <div>
                  <label className={styles["section-3-label"]}>Gender</label>
                  <p className={styles["section-3-text"]}>Female</p>
                </div>
                <div className={styles["section-3-edit"]}>
                  <p>EDIT</p>
                  <img className={styles[""]} src={editb} alt="img" />
                </div>
              </div>
              <div className={styles["section-3-div"]}>
                <div>
                  <label className={styles["section-3-label"]}>
                    Your Email
                  </label>
                  <p className={styles["section-3-text"]}>syifa@gamil.com</p>
                </div>
                <div className={styles["section-3-edit"]}>
                  <p>EDIT</p>
                  <img className={styles[""]} src={editb} alt="img" />
                </div>
              </div>
              <div className={styles["section-3-div"]}>
                <div>
                  <label className={styles["section-3-label"]}>
                    Store Description
                  </label>
                  <p className={styles["section-3-text"]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className={styles["section-3-edit"]}>
                  <p>EDIT</p>
                  <img className={styles[""]} src={editb} alt="img" />
                </div>
              </div>
              <button className={styles["logout"]}>
                <img className={styles[""]} src={logout} alt="img" />
                <p>Logout</p>
              </button>
            </section>
            <Footer />
          </main>
        </main>
      </Fragment>
    );
  }
}

export default Profile;