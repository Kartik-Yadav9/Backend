import { useState } from "react";
import { useAuth } from "./context/AuthContext";
import Login from "./components/Login";
import Register from "./components/Register";
import UserDashboard from "./components/UserDashboard";

function App() {
  const [showAuth, setShowAuth] = useState("login"); // "login" or "register"
  const { user, isAuthenticated, logout } = useAuth();

  // Show auth form if not authenticated
  if (!isAuthenticated) {
    return (
      <div>
        <div style={{ textAlign: "center", padding: "20px" }}>
          <h1>User Management System</h1>
          <p>Please login or register to continue</p>
        </div>
        {showAuth === "login" ? (
          <Login onToggle={() => setShowAuth("register")} />
        ) : (
          <Register onToggle={() => setShowAuth("login")} />
        )}
      </div>
    );
  }

  // Show main app if authenticated
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
          backgroundColor: "#f8f9fa",
          marginBottom: "20px",
        }}
      >
        <h1>User Management System</h1>
        <div>
          <span style={{ marginRight: "15px" }}>
            Welcome, {user?.name || "User"}
          </span>
          <button
            onClick={logout}
            style={{
              padding: "8px 16px",
              backgroundColor: "#dc3545",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      </div>

      <UserDashboard isAuthenticated={isAuthenticated} />
    </div>
  );
}

export default App;
