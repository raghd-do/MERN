import React, { useState } from 'react';

const Form = (props) => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    return (
        <>
            <form>
                <div className="card bg-light mb-3">
                    <div className="card-body row">
                        <label className="form-label col-3 text-start">First Name:</label>
                        <input type="text" onChange={(e) => setFirstName(e.target.value)} className="form-control col" value={ firstName } />
                    </div>
                </div>

                <div className="card bg-light mb-3">
                    <div className="card-body row">
                        <label className="form-label col-3 text-start">Last Name:</label>
                        <input type="text" onChange={(e) => setLastName(e.target.value)} className="form-control col" value={ lastName } />
                    </div>
                </div>

                <div className="card bg-light mb-3">
                    <div className="card-body row">
                        <label className="form-label col-3 text-start">Email:</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control col" value={ email } />
                    </div>
                </div>

                <div className="card bg-light mb-3">
                    <div className="card-body row">
                        <label className="form-label col-3 text-start">Password:</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control col" value={ password } />
                    </div>
                </div>

                <div className="card bg-light mb-3">
                    <div className="card-body row">
                        <label className="form-label col-3 text-start">Confirm Password:</label>
                        <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} className="form-control col" value={ confirmPassword } />
                    </div>
                </div>
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