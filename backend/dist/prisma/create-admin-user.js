"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcrypt = require("bcryptjs");
const prisma = new client_1.PrismaClient();
async function main() {
    const username = 'alfredkaizen30';
    const email = 'alfredkaizen30@gmail.com';
    const password = '@Gmail123';
    const hashedPassword = await bcrypt.hash(password, 10);
    const existing = await prisma.user.findUnique({
        where: { email },
    });
    if (existing) {
        const updated = await prisma.user.update({
            where: { email },
            data: {
                password: hashedPassword,
                role: client_1.UserRole.ADMIN,
                isActive: true,
                username: existing.username || username,
                firstName: existing.firstName || 'Alfred',
                lastName: existing.lastName || 'Kaizen',
            },
        });
        console.log('Updated existing user to ADMIN:', updated);
    }
    else {
        const admin = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
                role: client_1.UserRole.ADMIN,
                isActive: true,
                firstName: 'Alfred',
                lastName: 'Kaizen',
            },
        });
        console.log('Created new ADMIN user:', admin);
    }
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=create-admin-user.js.map