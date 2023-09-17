

import swal from "sweetalert"
import {useNavigate} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import {inputUserName, inputEmail, inputPassword, inputConfirmPassword} from "../reducer"

export default function SignUp() {

const profile = useSelector((state)=>state.mode.userData)
console.log(profile)

const navigate = useNavigate()
const dispatch = useDispatch()


/* function handleChange(event){
  const{name, value} = event.target

  setProfile(preData =>({
    ...preData,
    [name]: value
  }))
} */

function handleSubmit(event){
  event.preventDefault()

  if(profile.username === "" || profile.email=== "" || profile.password === "" || profile.confirmPassword === ""){
    swal("Fill out all fields", "All fields must be filled out before proceeding", "warning")
    return
  }

  if(profile.password !== profile.confirmPassword){
    swal("Passwords do not match", "The passwords chosen do not match, try again", "error")
    return
  }else {
    swal("Sign up successful", "Congratulations you have created an account", "success")

    navigate("/dashboard")
  }


}

  return (
    <>
    <div className="total-container">

    <h1 className="sign-up-header">Sign Up Today And Enjoy Humonguos Benefits</h1>
    
    <form action="" onSubmit={handleSubmit}>
    <div className="center-div">
    <div className="sign-up-container">
<div className="inputs">
<input
 type="text"
 name="email"
 placeholder="E-mail"
 value={profile.email}
 onChange={(e)=>dispatch(inputEmail(e.target.value))}/>
 <br/>
<input
 type="text"
 name="username"
 placeholder="Username"
 value={profile.username}
 onChange={(e)=>dispatch(inputUserName(e.target.value))}/>
 <br/>
<input
 type="password"
 name="password"
 placeholder="Password"
 value={profile.password}
 onChange={(e)=>dispatch(inputPassword(e.target.value))}/>
 <br/>
<input
 type="password"
 name="confirmPassword"
 placeholder="Confirm Password"
 value={profile.confirmPassword}
 onChange={(e)=>dispatch(inputConfirmPassword(e.target.value))}/>
</div>

<button className="sign-up-btn">Proceed</button>
</div>
    </div>
    </form>

    </div>

 
    </>
  )
}


