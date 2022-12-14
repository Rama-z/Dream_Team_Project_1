import React, { Component, Fragment, useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Login.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import authActions from "../redux/action/auth";
import Loading from "../components/LoadingBtn";
// import Swal from "sweetalert2";
// import Axios from "axios";
// import withNavigate from "../helpers/withNavigate";
// import authActions from "../redux/action/auth";

import eye from "../assets/eye.png";
import eyeSlash from "../assets/eyeSlash.png";

// class Logins extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       hidden: true,
//       email: "",
//       password: "",
//     };
//     this.toggleShow = this.toggleShow.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   componentDidMount() {
//     document.title = "Login";
//   }

//   toggleShow() {
//     this.setState({ hidden: !this.state.hidden });
//   }

//   handleChange(event, field) {
//     this.setState({ [field]: event.target.value });
//   }

//   handleSubmit(event) {
//     console.log(this.props);
//     event.preventDefault();
//     // const url = `https://dream-team-project-be.vercel.app/raz/auth/login`;
//     // const body = {
//     //   email: this.state.email,
//     //   password: this.state.password
//     // }
//     // console.log(body);
//     // return (this.props.dispatch(authActions.loginThunk(body, () => this.props.navigate("/"))))

//     const url = `https://dream-team-project-be.vercel.app/raz/auth/login`;
//     const data = { email: this.state.email, password: this.state.password };
//     Axios.post(url, data)
//       .then((res) => {
//         console.log(res);
//         // console.log(res.data);
//         localStorage.setItem("token", res.data.data.token);
//         localStorage.setItem("role", res.data.data.role);
//         Swal.fire({
//           title: "Login Success",
//           timer: 2000,
//           showConfirmButton: false,
//           timerProgressBar: true,
//         }).then((result) => {
//           if (result.dismiss === Swal.DismissReason.timer) {
//             this.props.navigate("/");
//           }
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//         Swal.fire({
//           title: "Wrong password or email",
//           showConfirmButton: false,
//           timer: 1000,
//         });
//       });
//   }

//   render() {
//     return (
//       <Fragment>
//         <main className={styles["main-2"]}>
//           <main className={styles["main"]}>
//             <Header />
//             <section className={styles["section-1"]}>
//               <h1 className={styles["section-1-header"]}>My Account</h1>
//               <p className={styles["section-1-text"]}>
//                 Register and log in with your account to be able to shop at will
//               </p>
//             </section>
//             <section className={styles["section-2"]}>
//               <aside className={styles["section-2-aside-left"]}>
//                 <h1 className={styles["section-2-aside-left-header"]}>
//                   Login Account
//                 </h1>
//                 <div className={styles["line"]}></div>
//                 <h1
//                   onClick={() => {
//                     this.props.navigate("/register");
//                   }}
//                   className={styles["section-2-aside-left-header-2"]}
//                 >
//                   Register Account
//                 </h1>
//               </aside>
//               <aside className={styles["section-2-aside-right"]}>
//                 <h1 className={styles["section-2-aside-right-header"]}>
//                   Login
//                 </h1>
//                 <input
//                   className={styles["aside-right-input-1"]}
//                   type="text"
//                   placeholder="User name or email address *"
//                   value={this.state.email}
//                   onChange={(event) => this.handleChange(event, "email")}
//                 />
//                 <input
//                   className={styles["aside-right-input-2"]}
//                   type="password"
//                   placeholder="Password *"
//                   value={this.state.password}
//                   onChange={(event) => this.handleChange(event, "password")}
//                 />
//                 <form onSubmit={this.handleSubmit}>
//                   <button className={styles["button"]}>Login</button>
//                 </form>
//                 <div className={styles["remember-div"]}>
//                   <input type="checkbox" />
//                   <p className={styles["remember-text"]}>Remember me</p>
//                   <p className={styles["forget"]}>Forget your password?</p>
//                 </div>
//               </aside>
//             </section>
//             <Footer />
//           </main>
//         </main>
//       </Fragment>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     auth: state.auth,
//   };
// };

// const Login = withNavigate(Logins);

// export default connect(mapStateToProps)(Login);

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth.userInfo);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const errorMsg = useSelector((state) => state.auth.error);
  const [body, setBody] = useState({});
  const [isPwdShown, setIsPwdShown] = useState(false);
  const [emptyForm, setEmptyForm] = useState(true);

  const changeHandler = (e) =>
    setBody({ ...body, [e.target.name]: e.target.value });

  const checkEmptyForm = (body) => {
    if (isLoading || !body.email || !body.password) return setEmptyForm(true);
    body.email && body.password && setEmptyForm(false);
  };

  const loginSuccess = () => {
    toast.success("Login success", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1000,
    });
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const loginDenied = (errorMsg) => {
    toast.error(`Login failed! ${errorMsg}`, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1000,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authActions.loginThunk(body, loginSuccess, loginDenied));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    checkEmptyForm(body);
  }, [body]);

  return (
    <>
      <main className={styles["main-2"]}>
        <main className={styles["main"]}>
          <Header />
          <section className={styles["section-1"]}>
            <h1 className={styles["section-1-header"]}>My Account</h1>
            <p className={styles["section-1-text"]}>
              Register and log in with your account to be able to shop at will
            </p>
          </section>
          <section className={styles["section-2"]}>
            <aside className={styles["section-2-aside-left"]}>
              <h1 className={styles["section-2-aside-left-header"]}>
                Login Account
              </h1>
              <div className={styles["line"]}></div>
              <h1
                onClick={() => {
                  navigate("/register");
                }}
                className={styles["section-2-aside-left-header-2"]}
              >
                Register Account
              </h1>
            </aside>
            <aside className={styles["section-2-aside-right"]}>
              <h1 className={styles["section-2-aside-right-header"]}>Login</h1>
              <form action="">
                <input
                  className={styles["aside-right-input-1"]}
                  type="text"
                  placeholder="User name or email address *"
                  name="email"
                  required
                  onChange={changeHandler}
                />
                <div className={styles["aside-right-input-2"]}>
                  <input
                    className={styles.inputPwd}
                    type={isPwdShown ? "text" : "password"}
                    placeholder="Password *"
                    name="password"
                    required
                    onChange={changeHandler}
                  />
                  <img
                    className={styles["icon"]}
                    src={isPwdShown ? eye : eyeSlash}
                    alt=""
                    onClick={() => setIsPwdShown(!isPwdShown)}
                  />
                </div>
                {isLoading ? (
                  <div className={styles["button"]}>
                    <Loading />
                  </div>
                ) : (
                  <button
                    className={styles["button"]}
                    type="submit"
                    disabled={emptyForm}
                    onClick={handleSubmit}
                  >
                    Login
                  </button>
                )}
              </form>
              <ToastContainer></ToastContainer>
              <div className={styles["remember-div"]}>
                <input type="checkbox" />
                <p className={styles["remember-text"]}>Remember me</p>
                <p className={styles["forget"]}>Forget your password?</p>
              </div>
            </aside>
          </section>
          <Footer />
        </main>
      </main>
    </>
  );
};
export default Login;
