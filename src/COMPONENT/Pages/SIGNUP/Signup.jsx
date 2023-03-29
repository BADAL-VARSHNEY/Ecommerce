import './Signup.css';
import Helmet from '../../HELMET/Helmet'
import { Link } from 'react-router-dom';
import { useState } from 'react';



const Signup = () => {
 const [username, setUsername]=useState('')
 const [email, setEmail]=useState('')
 const [password, setPassword]=useState('')


    return (
        <>
            <Helmet title={'Signup'} > 
                      <section>
                        <div className="login__container">
                            <div className="login__row">
                                <div className="login__col">
                                    <h4> Signup</h4>
                                    <form action="" className='auth__form'>
                                        <input type="text" placeholder='Username' value={username}  onChange={(e)=>setUsername(e.target.value)} /> <br />
                                        <input type="email" placeholder='Enter your email' value={email}  onChange={(e)=>setEmail(e.target.value)} /> <br />
                                        <input type="password" placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} />  <br />
                                        <button type='submit' className='login__btn'>Create an Account</button>
                                        <p> Allready have an account? <Link to="/login">Login</Link></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                      </section>
            </Helmet>
        </>
    )
}
export default Signup;
