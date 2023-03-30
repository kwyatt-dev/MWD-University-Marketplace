import React from "react";

const AuthForm = ({ user, isLogin, onChange, onSubmit }) => {

    return (
        <form onSubmit={onSubmit} autoComplete="off">
            {!isLogin ?
                <div>
                    <div className="form-group">
                        <label>First Name</label>
                        <br />
                        <input
                            type="text"
                            className="form-control"
                            id="first-name-input"
                            value={user.firstName}
                            onChange={onChange}
                            name="firstName"
                            placeholder="Enter first name..."
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <br />
                        <input
                            type="text"
                            className="form-control"
                            id="last-name-input"
                            value={user.lastName}
                            onChange={onChange}
                            name="lastName"
                            placeholder="Enter last name..."
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Dorm</label>
                        <br />
                        <input
                            type="text"
                            className="form-control"
                            id="dorm-input"
                            value={user.dorm}
                            onChange={onChange}
                            name="dorm"
                            placeholder="Enter dorm name..."
                            required
                        />
                    </div>{" "}
                </div> : <></>}
            <div>
                <div className="form-group">
                    <label>Email</label>
                    <br />
                    <input
                        type="email"
                        className="form-control"
                        id="email-input"
                        value={user.email}
                        onChange={onChange}
                        name="email"
                        placeholder="Enter email..."
                        required
                    />
                </div>{" "}
                <div className="form-group">
                    <label>Password</label>
                    <br />
                    <input
                        type="password"
                        className="form-control"
                        id="password-input"
                        value={user.password}
                        onChange={onChange}
                        name="password"
                        placeholder="Enter password..."
                        min="0"
                        required
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary" onSubmit={onSubmit}>
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AuthForm;