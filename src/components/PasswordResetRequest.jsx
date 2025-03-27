import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function PasswordResetRequest() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { resetPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await resetPassword(email);
    setMessage(result.message);
  };

  return (
    <div className="auth-form">
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>
      {message && <p className={message.includes('success') ? 'success' : 'error'}>{message}</p>}
    </div>
  );
}