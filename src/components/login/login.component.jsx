import axios from "axios";
import { useState } from "react";

const Login = () => {
    const [error, setError] = useState(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

  return (
    <div className="container">
      <form>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={!password || !username}>Login</button>
        <span data-testid="error-message" style={{"visibility": error ? "visiblity" : "hidden"}}>Something went wrong!</span>
      </form>
    </div>
  );
};

export default Login;