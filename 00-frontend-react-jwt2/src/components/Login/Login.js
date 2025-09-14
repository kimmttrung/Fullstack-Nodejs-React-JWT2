import "./Login.scss"

const Login = (props) => {
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
                    </div>
                    <div className="content-right green col-12 col-sm-5 d-flex flex-column gap-3 py-3">
                        <div className="brand d-sm-none">
                            Website TrungD
                        </div>
                        <input type="text" className="form-control" placeholder="Email address or phone number" />
                        <input type="text" className="form-control" placeholder="Password" />
                        <button className="btn btn-primary">
                            Login
                        </button>
                        <span className="text-center">
                            <a className="forgot-pasword" href='/about'>
                                Forgot your pasword?
                            </a>
                        </span>
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