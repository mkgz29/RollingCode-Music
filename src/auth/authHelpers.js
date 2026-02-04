import { seedUsers } from "./authSeed";

export const authenticateUser = (email, password) => {
  seedUsers();

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) return null;

  return {
    email: user.email,
    role: user.role,
    welcomeMessage: user.welcomeMessage || null,
    isAuthenticated: true,
  };
};