import bcryptjs from "bcryptjs";

const users = [
    {
        name: "Admin",
        email: "admin@example.com",
        password: bcryptjs.hashSync("admin", 10),
        isAdmin: true,
    },
    {
        name: "user",
        email: "user@example.com",
        password: bcryptjs.hashSync("123456", 10),
    },
];

export default users;
