import { useState } from "react";
import { Link } from "react-router-dom";

function LoginForm(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = () => {
        
        if (email === ""){
            setError("Email is Required");
            return;
        }

        if (!email.includes("@")){
            setError("Invalid Email !! Please Check Once");
            return;
        }

        if (password.length < 8) {
            setError("Password must be 8 characters");
            return;
        }

        setError("");

        alert("Login Successful 🥳🎉");

    }

    return(
        <>
        <h1>Login Form</h1>

        <input 
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => 
            setEmail(e.target.value)
        }
        />

        <br /><br />

        <input 
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => 
            setPassword(e.target.value)
        }
        />

        <br /><br />

        <button onClick={handleSubmit}>Login</button>

        <br /><br />

        <Link to="/" >
        <button>Home Page</button>
        </Link>

        <p style={{color: "red"}}>{error}</p>

        </>
    );
}

export default LoginForm;