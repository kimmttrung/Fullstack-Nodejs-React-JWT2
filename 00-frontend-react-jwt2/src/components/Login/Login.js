import "./Login.scss"
import { useHistory } from "react-router-dom";
import TeaLogin from "../../assets/img/LoginTea.png";
import { useState } from "react";
import { toast } from 'react-toastify';
import { loginUser } from "../../service/userService";

const Login = (props) => {
    const [valueLogin, setValueLogin] = useState();
    const [password, setPassword] = useState();

    const defaultObjValidInput = {
        isValidIValueLogin: true,
        isValidPassword: true,
    }
    const [objValidInput, setObjValidInput] = useState(defaultObjValidInput);

    let history = useHistory()
    const handlCreateNewAccount = () => {
        history.push("/register");
    }
    const handleLogin = async () => {
        setObjValidInput(defaultObjValidInput);
        if (!valueLogin) {
            setObjValidInput({ ...defaultObjValidInput, isValidIValueLogin: false })
            toast.error("Please enter your email or phonenumber")
            return;
        }
        if (!password) {
            setObjValidInput({ ...defaultObjValidInput, isValidPassword: false })
            toast.error("Please enter your password")
            return;
        }

        await loginUser(valueLogin, password);
    }
    return (
        <div className="login-container">
            <div className="container">
                <div className="row px-3 d-sm-0">
                    <div className="content-left col-12 d-none  col-sm-7 d-sm-block">
                        <div className="brand">
                            Website TrungD
                        </div>
                        <div className="detail">
                            Nền tảng thương mại điện tử yêu thích ở châu Á, share and connect with people
                        </div>
                        <img
                            src={TeaLogin}
                            alt="Teashop"
                            style={{ width: "300px", height: "300px", objectFit: "cover" }}

                        />
                    </div>
                    <div className="content-right green col-12 col-sm-5 d-flex flex-column gap-3 py-3">
                        <div className="brand d-sm-none">
                            Website TrungD
                        </div>
                        <input
                            type="text"
                            className={objValidInput.isValidIValueLogin ? "form-control" : "is-invalid form-control"}
                            placeholder="Email address or phone number"
                            value={valueLogin} onChange={(event) => setValueLogin(event.target.value)}
                        />
                        <input
                            type="password"
                            className={objValidInput.isValidPassword ? "form-control" : "is-invalid form-control"}
                            placeholder="Password"
                            value={password} onChange={(event) => setPassword(event.target.value)}
                        />
                        <button className="btn btn-primary"
                            onClick={() => handleLogin()}
                        >
                            Login
                        </button>
                        <span className="text-center">
                            <a className="forgot-pasword" href='/about'>
                                Forgot your pasword?
                            </a>
                        </span>
                        <hr />
                        <div className="text-center">
                            <button className="btn btn-success" onClick={() => handlCreateNewAccount()}>
                                Create new account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;