import 'dotenv/config';
import { app } from './app.js';
import { prisma } from './config/database.js'

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
async function shutdown(signal){
    console.log(`Received ${signal}. Closing server...`);
    server.close(async() => {
        console.log('Server closed');
        await prisma.$disconnect();
        console.log('Database connection closed');
        process.exit(0);
    })
}
 process.on('SIGINT', () => shutdown('SIGNINT'));
 process.on('SIGTERM', () => shutdown('SIGNTERM'));