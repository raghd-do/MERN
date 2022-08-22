import React, { useReducer } from 'react';

const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
}

function reducer(state, action) {
    return {
        ...state,
        [action.type]: {value: action.payload, error: action.error}
    };
}

const Form = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleChange(e) {
        const { name, value } = e.target;
        var error

        if (name === "firstName") {
            if (value !== "" && value.length < 2) {
                error = "First Name must be at least 2 characters"
            } else {
                error = null
            }
        }
        
        if (name === "lastName") {
            if (value !== "" && value.length < 2) {
                error = "First Name must be at least 2 characters"
            } else {
                error = null
            }
        }
        
        if (name === "email") {
            if (value !== "" && !value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
                error = "Email must be valid"
            } else {
                error = null;
            }
        }

        dispatch({
            type: name,
            payload: value,
            error: error
        });
    }
    
    return (
        <form className="text-start">
            <div className="form-group mb-3">
                <label className="form-label">Fairst Name</label>
                <input type="text" className="form-control" name="firstName" value={state.firstName.value} onChange={handleChange} />
            </div>
            {
                state.firstName.error ?
                    <p className="text-danger">{state.firstName.error}</p> :
                ""
            }

            <div className="form-group mb-3">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-control" name="lastName" value={state.lastName.value} onChange={handleChange}/>
            </div>
            {
                state.lastName.error ?
                    <p className="text-danger">{state.lastName.error}</p> :
                ""
            }

            <div className="form-group mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" name="email" value={state.email.value} onChange={handleChange}/>
            </div>
            {
                state.email.error ?
                    <p className="text-danger">{state.email.error}</p> :
                ""
            }
        </form>
    );
}

export default Form;