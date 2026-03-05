import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/dashboard'); // Redirect to dashboard on success
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-darkBlue-900">
      <form onSubmit={handleLogin} className="bg-darkBlue-800 p-8 rounded-lg border border-darkBlue-700 w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Logbook Login</h2>
        <input 
          type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
          className="w-full p-3 mb-4 bg-darkBlue-900 border border-darkBlue-600 rounded text-white" 
        />
        <input 
          type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}
          className="w-full p-3 mb-6 bg-darkBlue-900 border border-darkBlue-600 rounded text-white" 
        />
        <button type="submit" className="w-full bg-darkBlue-500 hover:bg-blue-600 p-3 rounded font-bold transition">
          Sign In
        </button>
      </form>
    </div>
  );
};
export default Login;