"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcrypt = require("bcryptjs");
const prisma = new client_1.PrismaClient();
async function main() {
    const username = 'admin';
    const email = 'admin@example.com';
    const password = 'Admin123!';
    const hashedPassword = await bcrypt.hash(password, 10);
    const existing = await prisma.user.findFirst({
        where: { role: client_1.UserRole.ADMIN }
    });
    if (existing) {
        console.log('Admin user already exists:', existing.username);
        process.exit(0);
    }
    const admin = await prisma.user.create({
        data: {
            username,
            email,
            password: hashedPassword,
            role: client_1.UserRole.ADMIN,
            isActive: true,
            firstName: 'Admin',
            lastName: 'User',
        },
    });
    console.log('Admin user created:', admin);
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed-admin.js.map