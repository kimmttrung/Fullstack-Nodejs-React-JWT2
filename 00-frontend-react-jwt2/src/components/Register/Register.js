import "./Register.scss"
import { useHistory } from "react-router-dom";
import Teashop from "../../assets/img/Teashop.png";
import { useEffect } from "react";
import axios from 'axios';

const Register = (props) => {
    let history = useHistory()
    const handlLogin = () => {
        history.push("/login");
    }
    useEffect(() => {
        axios.get("http://localhost:8081/api/test-api").then(data => {
            console.log("check data", data);
        })
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
                            <input type="text" className="form-control" placeholder="Email address" />
                        </div>
                        <div className="form-group">
                            <label>Phone number</label>
                            <input type="text" className="form-control" placeholder="Phone number" />
                        </div>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" className="form-control" placeholder="Usernamer" />
                        </div>
                        <div className="form-group">
                            <label>Pasword</label>
                            <input type="text" className="form-control" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <label>Confirm password</label>
                            <input type="text" className="form-control" placeholder="Confirm password" />
                        </div>

                        <button className="btn btn-primary">
                            Register
                        </button>
                        <hr />
                        <div className="text-center">
                            <button className="btn btn-success" onClick={() => handlLogin()}>
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