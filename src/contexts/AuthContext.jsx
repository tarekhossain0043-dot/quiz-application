import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

// 1. Context create kora holo
const AuthContexts = createContext(null);

// 2. Custom Hook for easy access
export function useAuth() {
  return useContext(AuthContexts);
}

// 3. Provider Component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Function: User create (SignUp)
  const handleSignUp = async (email, password) => {
    try {
      // Ekhane email/password state use na kore argument theke nibo
      await createUserWithEmailAndPassword(auth, email, password);
      setError("");
    } catch (err) {
      setError(err.message);
      throw err; // Jate form component error-ta catch korte pare
    }
  };

  // Function: User login
  const handleLogin = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError("");
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Function: User logOut (Typo fixed)
  const handleLogOut = async () => {
    try {
      await signOut(auth);
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  // 4. Firebase Auth State Listener (Essential for Global State)
  useEffect(() => {
    // onAuthStateChanged ekta cleanup function return kore
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // User login/logout hole state update hobe
      setLoading(false);
    });

    // Cleanup: Component unmount hole listener remove hoye jabe
    return unsubscribe;
  }, []);

  // Context value object
  const value = {
    user,
    error,
    handleSignUp, // Login/Signup function gulo Context e thakbe
    handleLogin,
    handleLogOut, // Typo fixed
  };

  // 5. Provider-ke return kora
  return (
    <div>
      <AuthContexts.Provider value={value}></AuthContexts.Provider>
    </div>
  );
}
