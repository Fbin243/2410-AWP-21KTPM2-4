// src/components/Home.tsx
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center text-black">
        <h1 className="text-3xl font-bold mb-6">Welcome to IA04</h1>
        <p className="mb-6">Please select one of the options below to proceed:</p>
        <div className="space-y-4">
          <Link to="/login" className="w-full bg-blue-500 text-white py-2 rounded  block">
            Login
          </Link>
          <Link to="/register" className="w-full bg-green-500 text-white py-2 rounded block">
            Register
          </Link>
          <Link to="/profile" className="w-full bg-yellow-500 text-white py-2 rounded  block">
            Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
