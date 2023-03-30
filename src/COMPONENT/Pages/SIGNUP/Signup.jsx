import './Signup.css';
import Helmet from '../../HELMET/Helmet'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import  {auth} from '../../../firebase'
import { toast } from 'react-toastify';
import FadeLoader from "react-spinners/FadeLoader";
const override = {
    display: "block",
    margin: "300px auto",
};



const Signup = () => {
    let [loadings, setLoadings] = useState(false);
 const [username, setUsername]=useState('')
 const [email, setEmail]=useState('')
 const [password, setPassword]=useState('')
 const navigate = useNavigate()

 const signup = async (e)=>{
    setLoadings(true)
    e.preventDefault()

     try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const user = userCredential.user
        console.log(user)

        
         
        toast.success("Account created");
        navigate("/login")
        setLoadings(false)
     } catch (error) {
        toast.error("something went wrong");
        setLoadings(false)
     }

 }

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
            <Helmet title={'Signup'} > 
                      <section>
                        <div className="login__container">
                            <div className="login__row">
                                <div className="login__col">
                                    <h4> Signup</h4>
                                    <form action="" className='auth__form' onSubmit={signup}>
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
         }
        </>
    )
}
export default Signup;
