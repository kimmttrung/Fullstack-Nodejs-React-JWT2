import "./Login.scss"

const Login = (props) => {
    return (
        <div className="login-container mt-5">
            <div className="container">
                <div className="row">
                    <div className="content-left red col-md-7 ">
                        <div className="brand">
                            Website TrungD
                        </div>
                        <div className="detail">
                            Nền tảng thương mại điện tử yêu thích ở châu Á, share and connect with people
                        </div>
                    </div>
                    <div className="content-right green col-md-5 d-flex flex-column gap-3 py-3">
                        <input type="text" className="form-control" placeholder="Email address or phone number" />
                        <input type="text" className="form-control" placeholder="Password" />
                        <button className="btn btn-primary">
                            Login
                        </button>
                        <span className="text-center">Forgot your pasword</span>
                        <hr />
                        <div className="text-center">
                            <button className="btn btn-success">Create new account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;