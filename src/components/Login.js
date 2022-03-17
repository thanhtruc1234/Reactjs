import React, {} from "react";
import './login.css';

import { emailValidator, passwordValidator } from '../components/regexValidator';

import {useNavigate} from 'react-router-dom';

const Login = () => {
   const [input, setInput] = React.useState({email: '', password: ''});

   const [errorMessage, seterrorMessage] = React.useState('');
   const [successMessage, setsuccessMessage] = React.useState('');
    
   const handleChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
};
React.useEffect(()=>{
    if(localStorage.getItem('auth')) nagivate('/')
},[])
   let nagivate = useNavigate ();
   const formSubmitter = e => {
    e.preventDefault();
    setsuccessMessage('');
    if (!emailValidator(input.email)) return seterrorMessage('Vui lòng nhập đúng định dạng Email!');

    if (!passwordValidator(input.password))
        return seterrorMessage(
            'Mật khẩu phải có tối thiểu 8 ký tự với sự kết hợp của chữ hoa, chữ thường, số và ký tự đặc biệt'
        );
    

    if(input.email !== 'admin@gmail.com' || input.password !== 'Password@1') return seterrorMessage('Tài khoản hoặc mật khẩu không đúng!');

    nagivate('/todolist')
    localStorage.setItem('auth', true)

};
    return (
        <div >
			<div className="main">
				<div className='sub-main' >
					<div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
                    
                    
						<form className="login100-form validate-form" onSubmit={formSubmitter}>
							<span className="name-login">Login</span>
							{errorMessage.length > 0 && <div style={{ marginBottom: '10px', color: 'red' }}>{errorMessage}</div>}
							{successMessage.length > 0 && (
								<div style={{ marginBottom: '10px', color: 'green' }}>{successMessage}</div>
							)}
							<div className="wrap-input100 validate-input m-b-23" data-validate="email is required">
								<span className="label-input100">Email</span>

								<input
									className="input100"
									type="text"
									name="email"
									placeholder="Type your username"
									onChange={handleChange}
								/>	
							</div>
							<div className="wrap-input100 validate-input" data-validate="Password is required">
								<span className="label-input100">Password</span>
								<input
									className="input100"
									type="password"
									name="password"
									placeholder="Type your password"
									onChange={handleChange}
								/>
                                <div>
                                    
                                </div>
								
							</div>
                                <div>

                                </div>
							<div className="container-login100-form-btn">
								<div className="wrap-login100-form-btn">
									<div className="login100-form-bgbtn" />
									<button className="login100-form-btn">Login</button>
								</div>
							</div>
							
							
					
						</form>
					</div>
				</div>
			</div>
			<div id="dropDownSelect1" />
		</div>
	);
};

export default Login;