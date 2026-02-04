import { ROLES } from "./roles";

export const seedUsers = () => {
  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

  const hasAdmin = existingUsers.some(u => u.role === ROLES.ADMIN);
  if (hasAdmin) return;

  const seededUsers = [
    {
      email: "adminfacu@rolling.com",
      password: "123456789",
      role: ROLES.ADMIN,
    },
    {
      email: "adminmike@rolling.com",
      password: "maikisita1234",
      role: ROLES.ADMIN,
    },
    {
      email: "adminbenja@rolling.com",
      password: "987654321",
      role: ROLES.ADMIN,
    },
    {
      email: "gonzavip@rolling.com",
      password: "gonza1234",
      role: ROLES.INVITED,
      welcomeMessage: "🎵 Welcome Gonza to Rolling Code Music",
    },
  ];

  localStorage.setItem("users", JSON.stringify([...existingUsers, ...seededUsers]));
};
