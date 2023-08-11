import { registerAs } from "@nestjs/config";

const config = registerAs('_config', () => {
  return {
    db: {
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      dbName: process.env.DATABASE_NAME,
    },
    auth: {
      email: process.env.EMAIL,
      password: process.env.PASSWORD,
      secret: process.env.JWT_SECRET,
    },
    port: process.env.PORT ?? 3000,
  };
});
export  { config };
// export { db as dbEnv };
