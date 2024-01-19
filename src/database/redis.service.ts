import { Redis } from "ioredis";
import "dotenv/config";

const redis = new Redis({
  password: process.env.REDIS_PASSWORD,
  username: "default",
  port: 6379,
});

export { redis };
