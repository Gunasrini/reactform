import './App.css';
import { useState } from 'react';
import Swal from "sweetalert2";

function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let fnameErr, lnameErr, emailErr = true;
    if (fname === "") {
      document.getElementById("fnameErr").innerHTML = "Please enter the firstname";
    } else {
      document.getElementById("fnameErr").innerHTML = "";
      fnameErr = false;
    }
    if (lname === "") {
      document.getElementById("lnameErr").innerHTML = "Please enter the lastname";
    } else {
      document.getElementById("lnameErr").innerHTML = "";
      lnameErr = false;
    }
    if (email === "") {
      document.getElementById("emailErr").innerHTML = "Please enter the email";
    } else {
      document.getElementById("emailErr").innerHTML = "";
      emailErr = false;
    }
    if ((fnameErr || lnameErr || emailErr) === true) {
      Swal.fire({
        icon: 'error',
        text: 'Please fill al the fields',
      });
    } else {
      Swal.fire({
        title: 'Success',
        icon: 'success',
        type: 'success',
        text: 'you have successfully registered',
      });
    }
    setFname("");
    setLname("");
    setEmail("");
  }
  return (
    <div className='container pt-5'>
      <h2>Contact Information</h2>
      <form>
        <div className='row pt-3'>
          <div className='col-md-6'>
            <div className='form-group'>
              <label>Firstname <span className='mandatory'>*</span></label>
              <input type="text" className='form-control' placeholder='Merchant Firstname' value={fname} onChange={(e) => setFname(e.target.value)} />
              <div id='fnameErr' className='errorMsg'></div>
            </div>
            <div className='form-group'>
              <label>Job Title</label>
              <input type="text" className='form-control' placeholder='Head' value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
            </div>
            <div className='form-group'>
              <label>Email Address <span className='mandatory'>*</span></label>
              <input type="email" className='form-control' placeholder='firstname@yopmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
              <div id='emailErr' className='errorMsg'></div>
            </div>
          </div>

          <div className='col-md-6'>
            <div className='form-group'>
              <label>Lastname <span className='mandatory'>*</span></label>
              <input type="text" className='form-control' placeholder='Merchant Lastname' value={lname} onChange={(e) => setLname(e.target.value)} />
              <div id='lnameErr' className='errorMsg'></div>
            </div>
            <div className='form-group'>
              <div className='row'>
                <div className='col-md-3'>
                  <label>Code</label>
                  <select className='form-control'>
                    <option>+1</option>
                    <option>+91</option>
                  </select>
                </div>
                <div className='col-md-9'>
                  <label>Phone Number</label>
                  <input type="text" className='form-control' placeholder='234567890' value={number} onChange={(e) => setNumber(e.target.value)} />
                </div>
              </div>
            </div>
          </div>
          <div className='col text-right mt-3'>
            <button className='btn btn-primary'>Cancel</button>
            <button onClick={handleSubmit} className='btn btn-primary ml-4'>Save</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
