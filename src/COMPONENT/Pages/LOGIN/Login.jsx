import './Login.css';
import Helmet from '../../HELMET/Helmet'
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Login = () => {
 const [email, setEmail]=useState('')
 const [password, setPassword]=useState('')


    return (
        <>
            <Helmet title={'Login'} >
                      <section>
                        <div className="login__container">
                            <div className="login__row">
                                <div className="login__col">
                                    <h4> Login</h4>
                                    <form action="" className='auth__form'>
                                        <input type="email" placeholder='Enter your email' value={email}  onChange={(e)=>setEmail(e.target.value)} /> <br />
                                        <input type="password" placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} />  <br />
                                        <button type='submit' className='login__btn'>Login</button>
                                        <p> Don't have an account? <Link to="/signup">Create an account</Link></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                      </section>
            </Helmet>
        </>
    )
}
export default Login;
