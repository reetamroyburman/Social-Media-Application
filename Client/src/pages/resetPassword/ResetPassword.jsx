import React, { useState } from "react";
import { Link } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import "./ResetPassword.scss";

const ResetPassword = () => {
    const [email, setEmail] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const result = await axiosClient.post("/auth/signup", {email});
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }


  return (
    <div className="Signup">
            <div className="signup-box">
                <h2 className="heading">Forgot Password</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input type="submit" className="submit" />
                </form>
                {/* <p className="subheading">
                    Already have an account? <Link to="/login">Log In</Link>
                </p> */}
            </div>
        </div>
  )
}

export default ResetPassword