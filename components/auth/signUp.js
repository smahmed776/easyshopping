import React, {useEffect, useState, useContext} from 'react';
import { AuthContext } from './authContext';

const SignUp = () => {

    const [user, setUser] = useContext(AuthContext);
    const [fName, setfName] = useState("");
    const [lName, setlName] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [userName, setUserName] = useState("");

    const handleForm = (e) => {
        e.preventDefault();
        if (!e.target.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
        } else {

            if(user.find(item=> email === item.email )){ 
              alert('email already taken'); 
            }else if(e.target.elements.password.classList.value.includes("is-invalid")){
               alert("Password invalid")
            } else {

              user.push(
                {name: fName + " " + lName, username: userName, email: email, password: password, isUser: false}
              )
                setUser([
                    ...user,             
                ]);
                alert('Registered Successfully! login now...');
                
            }
           
        } 
        e.target.classList.add("was-validated");
    }

    const passvalidate = e => {
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
        
        document.getElementById('spassfeedback').innerText = "Password must have atleast " + con1 + ' ' + con2 + ' ' + con3 + ' ' + con4 + '!';
        // console.log(con1.length, con2.length, con3.length, con4.length);
      } else if(!e.target.value) {
        document.getElementById('spassfeedback').innerText = "Password required";
      } else {
        e.target.classList.add("is-valid")
        e.target.classList.remove("is-invalid")
  
      }
    }


    useEffect(()=> {
        localStorage.setItem("auth", JSON.stringify(user));
    }, [user])


    return (
<div className="modal fade" id="lcontainer2" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="lcontainerLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Create your Account.</h5>
          <button className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <form method="GET" onSubmit={e => handleForm(e)} className="needs-validation p-3" id="regform" noValidate>
            <div className="row">
              <div className="col-6">
                <label htmlFor="Fname" className="form-label">First Name:</label>
                <input className="form-control" form="regform" type="text" name="Fname" value={fName} onChange={e => setfName(e.target.value)} id="Fname"  required />
                <div className="invalid-feedback">
                  Write your first Name!
                </div>
              </div>
              <div className="col-6">
                <label htmlFor="Lname" className="form-label">Last Name:</label>
                <input className="form-control" form="regform" type="text" name="Lname" id="Lname" value={lName} onChange={e => setlName(e.target.value)}  required />
                <div className="invalid-feedback">
                  Last name is required!
                </div>
              </div>
              <div className="col-12">
                <label htmlFor="username" className="form-label">User Name:</label>
                <div className="input-group">
                  <span className="input-group-text">@</span>
                  <input className="form-control" form="regform" type="text" name="username" id="username" value={userName} onChange={e => setUserName(e.target.value)} required />
                  <div className="invalid-feedback">
                    Username can't be empty!
                  </div>
                </div>
              </div>
              <div className="col-12">
                <label htmlFor="Email" className="form-label">Email :</label>
                <input className="form-control" form="regform" type="email" name="Email" id="Email" value={email} onChange={e => setemail(e.target.value)} required />
                <div className="invalid-feedback">
                  email address is required!
                </div>	
              </div>
              <div className="col-12">
                <label htmlFor="password" className="form-label">Password:</label>
                <input className="form-control mb-2" form="regform" type="password" name="password" id="spassword" onKeyUp={e => passvalidate(e)} value={password} onChange={e => setpassword(e.target.value)}  required />
                <div className="invalid-feedback" id="spassfeedback">
                  Password required!
                </div>
              </div>
            </div>
            <div className="text-center mt-3">
              <input type="submit" form="regform" className="btn btn-md btn-info m-auto w-100"  />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <p>
            Already registered? <a href="#" data-bs-target="#mContainer" data-bs-toggle="modal" data-bs-dismiss="modal" aria-label="Close">Login Now!</a>
          </p>
        </div>
      </div>
    </div>
  </div>
    )
}

export default SignUp
