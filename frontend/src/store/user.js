import { create } from 'zustand';

export const useUserStore = create((set) => ({
  registerUser: async ({ email, password }) => {
    try {
      const res = await fetch("/api/users/register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      return data;
    } catch (err) {
      console.error("Register Error:", err.message);
      return {
        success: false,
        message: 'Registration failed',
      };
    }
  },

  verifyUser: async (token) => {
    try {
      const res = await fetch(`/api/users/verify/${token}`);
      const data = await res.json();
      return data;
    } catch (err) {
      return {
        success: false,
        message: 'Verification failed',
      };
    }
  },

  loginUser: async ({ email, password }) => {
    try {
      const res = await fetch("/api/users/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      return data;
    } catch (err) {
      return {
        success: false,
        message: 'Login failed',
      };
    }
  },
}));
