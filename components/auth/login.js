import React, { useContext, useEffect, useState } from 'react'
import { AuthContext} from './authContext';
import { useHistory } from 'react-router-dom';



export const Login = () => {

    const [user, setUser] = useContext(AuthContext);
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const history = useHistory();

    const formHandler = (e) => {
        if(!e.target.checkValidity()){
            e.preventDefault();
            e.stopPropagation();
            console.log("prevented");
        }else {
            if (user.find(item => email === item.email && password === item.password)) {
              user[user.findIndex(item => email === item.email && password === item.password)].isUser= true;  
              setUser([...user]);
              alert('login Successfull')
              history.push("/")
              // console.log(user)
              
              
            } else if(user.find(item => email === item.email || password === item.password)) {
              e.preventDefault();
              alert('username and password does not match')

              
            } else {
              e.preventDefault();
              alert("User not found! Please register first..")
            }
           
            // console.log(" User Set");
            // console.log(user);
        }
        e.target.classList.add("was-validated");
    }



    const eyeToggle = (e) => {
        e.target.classList.toggle("bi-eye-slash-fill");
        if (e.target.title === "show password") {
            e.target.title = "hide password";
        } else {
            e.target.title = "show password";
        }
        const passInp = document.getElementById('loginpassword');
        if (passInp.type === "password") {
            passInp.type = "text";
        } else {
            passInp.type = "password";
        }

    }


  return (
      <div className="modal fade" id="mContainer" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="mContainerLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" style={{fontFamily: "sans-serif, Arial"}}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-center">Login to your Account.</h5>
              <button className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form  className="needs-validation p-3" onSubmit={(e)=> formHandler(e)} id="lform" noValidate>
                <div className="row">
                  <div className="cols-12">
                    <label htmlFor="email" className="form-label">E-mail:</label>
                    <input className="form-control" form="lform" type="email" name="email" id="email" value={email} onChange={e => setemail(e.target.value)} required />
                    <div className="invalid-feedback">
                      Username can't be empty!
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <div className="input-group mb-2">
                      <input className="form-control " form="lform" type="password" name="password" id="loginpassword" value={password} onChange={e => setpassword(e.target.value)}  required />
                      <span className="input-group-text bi bi-eye-fill" style={{"cursor":"pointer"}} onClick={(e) => eyeToggle(e)} title="show password" id="showPass" />
                      <div className="invalid-feedback">
                        Password required!
                      </div>
                    </div>
                    <div id="passmsg">
                      <div className="passprog">
                        <div className="progbar" id="progbar" />
                      </div>
                      <h3>Password must contain the following:</h3>
                      <p id="letter" className="invalid">A <b>lowercase</b> letter</p>
                      <p id="capital" className="invalid">A <b>capital (uppercase)</b> letter</p>
                      <p id="number" className="invalid">A <b>number</b></p>
                      <p id="length" className="invalid">Minimum <b>8 characters</b></p>
                    </div>
                  </div>
                </div>
                <input type="checkbox" form="lform" className="form-check-input" name="remember" id="remember" />
                <label htmlFor="remember" className="form-check-label ps-2">Remember Me</label>
                <div className="text-center mt-3">
                  <input type="submit" form="lform" className="btn btn-md btn-info m-auto w-100"  />
                </div>
              </form>
              <div className="text-center mt-2">
                <p>
                  forgot password? 
                   <a style={{WebkitTextDecoration:"none",textDecoration:"none"}} href="#" data-bs-target="#passreset" data-bs-toggle="modal" data-bs-dismiss="modal" aria-label="Close"> Click Here</a> to reset!
                </p>
              </div>
            </div>
            <div className="modal-footer">
              <p>
                Not registered yet? <a href="#" data-bs-target="#lcontainer2" data-bs-toggle="modal" data-bs-dismiss="modal" aria-label="Close">Register Now!</a>
              </p>
            </div>
          </div>
        </div>
      </div>

  
    )
}



export const ResetForm = () => {

  const [user, setUser] = useContext(AuthContext);
  const [isValid, setIsvalid] = useState(false);
  const history = useHistory();



  const formHandler = e => {
   
    if(e.target.elements.password){
      // console.log(e.target.elements)
      const passClassList1 = e.target.elements.cpassword;
      const passClassList = e.target.elements.password;
      if(passClassList.classList.value.includes("is-invalid") || passClassList1.classList.value.includes("is-invalid") || passClassList1.value !== passClassList.value){
        e.preventDefault();
        alert("Form incomplete")
        return false;
      } 
      else {
        user[user.findIndex(i=> i.email === e.target.elements.email.value)].password = e.target.elements.password.value;
        setUser([...user]);
        alert('Password changed. login now...');
        history.push('/checkout');
      
      }
    } else {
      e.preventDefault();
      if(user[user.findIndex(i => i.email === e.target.elements.email.value)]){
        setIsvalid(true)
        console.log("true done", isValid);
      } else {
        setIsvalid(false)
        if(document.getElementById("emailwarning")){
          document.getElementById("emailwarning").innerText = "Email not found!"
        }
        console.log("false done", isValid);
      }
    }
  }


  const showPass = e => {
    e.target.classList.toggle("bi-eye-slash-fill");
    if (e.target.title === "show password") {
        e.target.title = "hide password";
    } else {
        e.target.title = "show password";
    }
    const passInp = document.getElementById('resetpassword');
    if (passInp.type === "password") {
        passInp.type = "text";
    } else {
        passInp.type = "password";
    }
  }


  const confirmPass = id => {
    const password = document.getElementById("resetpassword").value; 
    const thisElement = document.getElementById(id); 
    if(thisElement.value === password){
      thisElement.classList.add("is-valid");
      thisElement.classList.remove("is-invalid");
    } else {
      thisElement.classList.add("is-invalid");
      thisElement.classList.remove("is-valid");
    }
  }

  const validatepass = e => {
    const pattern = {
      capitalLtr : /[A-Z]/g,
              smallLtr : /[a-z]/g,
              nmbr : /[0-9]/g,
      length: 8
    };
    let con1 = '';
    let con2 = '';
    let con3 = '';
    let con4 = '';
    // console.log("qidjfldfj");
    if(!e.target.value.match(pattern.capitalLtr)){
      con1 = "one capital letter,";
      e.target.classList.add("is-invalid")
      e.target.classList.remove("is-valid")
    }
    if(!e.target.value.match(pattern.smallLtr)){
      con2 = "one small letter,";
      e.target.classList.add("is-invalid")
      e.target.classList.remove("is-valid")
    }
    if(!e.target.value.match(pattern.nmbr)){
      con3 = "one number,";
      e.target.classList.add("is-invalid")
      e.target.classList.remove("is-valid")
    }
    if(e.target.value.length < pattern.length){
      con4 = "8 characters long";
      e.target.classList.add("is-invalid")
      e.target.classList.remove("is-valid")
    }
    if(con1.length > 0 || con2.length > 0 || con3.length > 0 || con4.length > 0)  {
      
      document.getElementById('resetpassfeedback').innerText = "Password must have atleast " + con1 + ' ' + con2 + ' ' + con3 + ' ' + con4 + '!';
      // console.log(con1.length, con2.length, con3.length, con4.length);
    } else if(!e.target.value) {
      document.getElementById('resetpassfeedback').innerText = "Password required";
    } else {
      e.target.classList.add("is-valid")
      e.target.classList.remove("is-invalid")

    }
    confirmPass("cpassword")
    
  }

  useEffect(()=> {
    
  },[isValid])



  return (
      <div className="modal fade" id="passreset" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="passresetLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" style={{fontFamily: "sans-serif, Arial"}}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-center">Reset yout password.</h5>
              <button className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form  className="needs-validation p-3" action="#" onSubmit={e => formHandler(e)} id="resetform" noValidate>
                <div className="row">
                  <div className="cols-12">
                    <h5 className="text-center">Find your account </h5>
                    <label htmlFor="email" className="form-label">E-mail:</label>
                    <input className="form-control" form="resetform" type="email" name="email" id="email" required />
                    <div className="invalid-feedback">
                      Type your email.
                    </div>
                  </div>
                  {isValid? 
                  <>
                  <div className="col-12">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <div className="input-group mb-2">
                      <input className="form-control " form="resetform" type="password" name="password"  id="resetpassword" onKeyDown={e => validatepass(e)} onChange={e => validatepass(e)}  required />
                      <span className="input-group-text bi bi-eye-fill" style={{"cursor":"pointer"}}  title="show password" onClick={e => showPass(e)} />
                      <div className="invalid-feedback" id="resetpassfeedback">
                        Password required!
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="cpassword" className="form-label">Confirm Password:</label>                    
                      <input className="form-control " form="resetform" type="password" name="cpassword"  onChange={e => confirmPass(e.target.id)} onKeyDown={e => confirmPass(e.target.id)} id="cpassword"   required />
                      <div className="invalid-feedback">
                        Password doesn't match!
                      </div>
                  </div>
                  </>
                   :
                   <p className="text-danger" id="emailwarning" > </p>
                  }
                    {/* <div id="passmsg">
                      <div className="passprog">
                        <div className="progbar" id="progbar" />
                      </div>
                      <h3>Password must contain the following:</h3>
                      <p id="letter" className="invalid">A <b>lowercase</b> letter</p>
                      <p id="capital" className="invalid">A <b>capital (uppercase)</b> letter</p>
                      <p id="number" className="invalid">A <b>number</b></p>
                      <p id="length" className="invalid">Minimum <b>8 characters</b></p>
                    </div> */}
                </div>
                {/* <input type="checkbox" form="lform" className="form-check-input" name="remember" id="remember" />
                <label htmlFor="remember" className="form-check-label ps-2">Remember Me</label> */}
    

                  <div className="text-center mt-3">
                   <input type="submit" form="resetform" className="btn btn-md btn-info m-auto w-100"  />
                  </div>
              
              
              </form>
              {/* <div className="text-center mt-2">
                <p>
                  forgot password? <a style={{WebkitTextDecoration:"none",textDecoration:"none"}} href="#">Click Here</a> to reset!
                </p>
              </div> */}
            </div>
            <div className="modal-footer">
              <p>
                Not registered yet? <a href="#" data-bs-target="#lcontainer2" data-bs-toggle="modal" data-bs-dismiss="modal" aria-label="Close">Register Now!</a>
              </p>
            </div>
          </div>
        </div>
      </div>

  )
}
