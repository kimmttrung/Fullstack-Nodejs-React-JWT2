import "./Register.scss"
import { useHistory } from "react-router-dom";
import Teashop from "../../assets/img/Teashop.png";
import { useEffect, useState } from "react";
// import axios from 'axios';

const Register = (props) => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    let history = useHistory()
    const handleLogin = () => {
        history.push("/login");
    }

    const handleRegister = () => {
        let userData = { email, phone, username, password };
        console.log("check user data", userData);
    }
    useEffect(() => {
        // axios.get("http://localhost:8081/api/test-api").then(data => {
        //     console.log("check data", data);
        // })
    })
    return (
        <div className="register-container">
            <div className="container">
                <div className="row px-3 d-sm-0">
                    <div className="content-left col-12 d-none  col-sm-7 d-sm-block">
                        <div className="brand">
                            Website TrungD
                        </div>
                        <div className="detail">
                            Nền tảng thương mại điện tử yêu thích ở châu Á, share and connect with people
                        </div>
                        <div >
                            <img src={Teashop} alt="Teashop" />
                        </div>
                    </div>
                    <div className="content-right green col-12 col-sm-5 d-flex flex-column gap-3 py-3">
                        <div className="brand d-sm-none">
                            Website TrungD
                        </div>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="text" className="form-control" placeholder="Email address"
                                value={email} onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone number</label>
                            <input type="text" className="form-control" placeholder="Phone number"
                                value={phone} onChange={(event) => setPhone(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" className="form-control" placeholder="Usernamer"
                                value={username} onChange={(event) => setUsername(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Pasword</label>
                            <input type="password" className="form-control" placeholder="Password"
                                value={password} onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Confirm password</label>
                            <input type="password" className="form-control" placeholder="Confirm password"
                                value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}
                            />
                        </div>

                        <button
                            className="btn btn-primary"
                            onClick={() => handleRegister()}
                        >
                            Register
                        </button>
                        <hr />
                        <div className="text-center">
                            <button className="btn btn-success" onClick={() => handleLogin()}>
                                Already've an account. Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register;