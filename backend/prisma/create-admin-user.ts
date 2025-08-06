import { PrismaClient, UserRole } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    const username = 'alfredkaizen30';
    const email = 'alfredkaizen30@gmail.com';
    const password = '@Gmail123';
    const hashedPassword = await bcrypt.hash(password, 10);

    // Check if user already exists
    const existing = await prisma.user.findUnique({
        where: { email },
    });

    if (existing) {
        const updated = await prisma.user.update({
            where: { email },
            data: {
                password: hashedPassword,
                role: UserRole.ADMIN,
                isActive: true,
                username: existing.username || username,
                firstName: existing.firstName || 'Alfred',
                lastName: existing.lastName || 'Kaizen',
            },
        });
        console.log('Updated existing user to ADMIN:', updated);
    } else {
        const admin = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
                role: UserRole.ADMIN,
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