import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../types/User";

function Profile() {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await fetch("http://localhost:5000/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          // Handle error
          navigate("/login");
        }
      } catch (error) {
        console.error("Error:", error);
        navigate("/login");
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Profile</h2>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <button onClick={handleLogout} className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 mt-4">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
