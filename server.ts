import { config } from "./src/config/config";
import connectDB from "./src/config/db";
import { connectGraphQL } from "./src/graphql/graphql";
import { startStandaloneServer } from "@apollo/server/standalone";

const startServer = async () => {
  await connectDB();

  const port = Number(config.port) || 3000;

  const server = connectGraphQL();

  startStandaloneServer(server, { listen: { port } })
    .then(({ url }) => {
      console.log(`🚀 Server ready at: ${url}`);
    })
    .catch((error) => {
      console.error(`❌ Error starting server: ${error.message}`);
    });
};

startServer();
