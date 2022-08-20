import React, { useState } from 'react';

const Form = (props) => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    
    const [errors, setErrors] = useState({
        fname: "",
        lname: "",
        email: "",
        pw: "",
        pwMatch: "",

    })

    const fnameError = (e) => {
        (e.target.value.length !== 0 && e.target.value.length < 2) ?
            setErrors({ ...errors, fname: "field must be at least 2 characters" }) :
            setErrors({ ...errors, fname: "" })
    }

    const lnameError = (e) => {
        (e.target.value.length !== 0 && e.target.value.length < 2) ?
            setErrors({ ...errors, lname: "field must be at least 2 characters" }) :
            setErrors({ ...errors, lname: "" })
    }

    const emailError = (e) => {
        (e.target.value.length !== 0 && e.target.value.length < 5) ?
            setErrors({ ...errors, email: "field must be at least 5 characters" }) :
            setErrors({ ...errors, email: "" })
    }

    const pwError = (e) => {
        (e.target.value.length !== 0 && e.target.value.length < 8) ?
            setErrors({ ...errors, pw: "field must be at least 8 characters" }) :
            setErrors({ ...errors, pw: "" })
    }

    const pwMatch = (e) => {
        (e.target.value.length !== 0 && e.target.value !== password) ?
        setErrors({ ...errors, pwMatch: "Password Must Match" }) :
        setErrors({ ...errors, pwMatch: "" });
    }

    return (
        <>
            <form>
                <div className="card bg-light mb-3">
                    <div className="card-body row">
                        <label className="form-label col-3 text-start">First Name:</label>
                        <input type="text" id="fname" onChange={(e) => { setFirstName(e.target.value);  fnameError(e)}} className="form-control col" value={ firstName } />
                    </div>
                </div>
                {errors.fname ?
                    <p className="text-danger">{ errors.fname }</p> :
                    ""
                }

                <div className="card bg-light mb-3">
                    <div className="card-body row">
                        <label className="form-label col-3 text-start">Last Name:</label>
                        <input type="text" id="lname" onChange={(e) => { setLastName(e.target.value);  lnameError(e)}} className="form-control col" value={ lastName } />
                    </div>
                </div>
                {errors.lname ?
                    <p className="text-danger">{errors.lname}</p> :
                    ""
                }

                <div className="card bg-light mb-3">
                    <div className="card-body row">
                        <label className="form-label col-3 text-start">Email:</label>
                        <input type="email" id="email" onChange={(e) => { setEmail(e.target.value); emailError(e)}} className="form-control col" value={ email } />
                    </div>
                </div>
                {errors.email ?
                    <p className="text-danger">{errors.email}</p> :
                    ""
                }

                <div className="card bg-light mb-3">
                    <div className="card-body row">
                        <label className="form-label col-3 text-start">Password:</label>
                        <input type="password" id="pw" onChange={(e) => { setPassword(e.target.value);  pwError(e)}} className="form-control col" value={ password } />
                    </div>
                </div>
                {errors.pw ?
                    <p className="text-danger">{ errors.pw }</p> :
                    ""
                }

                <div className="card bg-light mb-3">
                    <div className="card-body row">
                        <label className="form-label col-3 text-start">Confirm Password:</label>
                        <input type="password" id="pwMatch" onChange={(e) => { setConfirmPassword(e.target.value);  pwMatch(e)}} className="form-control col" value={ confirmPassword } />
                    </div>
                </div>
                {errors.pwMatch ?
                    <p className="text-danger">{ errors.pwMatch }</p> :
                    ""
                }
            </form>
            
            <h2 className="text-center my-4">Your Form Data</h2>

            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <h3 className="col-4">First Name:</h3>
                        <input type="text" className="col border-0 h3" value={firstName} readOnly/>
                    </div>

                    <div className="row">
                        <h3 className="col-4">Last Name:</h3>
                        <input type="text" className="col border-0 h3" value={lastName} readOnly/>
                    </div>

                    <div className="row">
                        <h3 className="col-4">Email:</h3>
                        <input type="email" className="col border-0 h3" value={email} readOnly/>
                    </div>

                    <div className="row">
                        <h3 className="col-4">Password:</h3>
                        <input type="password" className="col border-0 h3" value={password} readOnly/>
                    </div>

                    <div className="row">
                        <h3 className="col-4">Confirm Password:</h3>
                        <input type="password" className="col border-0 h3" value={confirmPassword} readOnly/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Form;