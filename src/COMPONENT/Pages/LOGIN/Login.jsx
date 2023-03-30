import './Login.css';
import Helmet from '../../HELMET/Helmet'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import FadeLoader from "react-spinners/FadeLoader";
const override = {
    display: "block",
    margin: "300px auto",
};

const Login = () => {
    let [loadings, setLoadings] = useState(false);
 const [email, setEmail]=useState('')
 const [password, setPassword]=useState('')
 const navigate = useNavigate()

 const login = async (e) =>{
    setLoadings(true)
    e.preventDefault()
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)

        const user = userCredential.user
        console.log(user)
        toast.success("Successfully logged in");
        navigate('/checkout')
        setLoadings(false)
    } catch (error) {
        toast.error(error.message)
        setLoadings(false)

    }
 }

 
 const [userss, loading]=useAuthState(auth)
 console.log(userss,'users')

 useEffect(()=>{
  if(userss){
        navigate('/home')
  } 
 },[])

 useEffect(()=>{
    window.scrollTo(0, 0)
}, [])



    return (
        <>

        {
            loadings ? <FadeLoader
                    loading={true}
                    color={'#000'}
                    cssOverride={override}
                    size={150}
                /> :
       
            <Helmet title={'Login'} >
                      <section>
                        <div className="login__container">
                            <div className="login__row">
                                <div className="login__col">
                                    <h4> Login</h4>
                                    <form action="" className='auth__form' onSubmit={login} >
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
        }
        </>
    )
}
export default Login;
