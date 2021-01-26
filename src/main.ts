import { greeter } from "./lib/counter";

process.on('unhandledRejection', (err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(-1);
});

(async () => {
  try {
      console.log(await greeter("World"));
      process.exit(0);
  } catch(e) {
      throw e;
  }
})();
