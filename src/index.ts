import Fastify from "fastify";
import cors from "@fastify/cors";

const fastify = Fastify({logger: true});
const port = 3000;

fastify.register(cors, {
  origin: (origin, cb) => {
    if (!origin || origin.includes("localhost")) {
      cb(null, true);
      return;
    }
    cb(new Error("Not allowed"), false);
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
});

fastify.get("/ping", async (request, reply) => {
  reply.send({ hello: "world" });
});

const start = async () => {
  try {
    await fastify.listen({host: "0.0.0.0", port: port });
    console.log(`server running on port ${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();