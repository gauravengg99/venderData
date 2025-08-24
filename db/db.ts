import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;
// @ts-ignore
if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
} else {
    // Prevent multiple instances in development (hot reload)
    if (!(globalThis as any).prisma) {
        (globalThis as any).prisma = new PrismaClient();
    }
    prisma = (globalThis as any).prisma;
}
// const prisma = new PrismaClient();

export default prisma;