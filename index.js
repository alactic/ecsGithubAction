import app from "./app.js";

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`server running in ${process.env.NODE_ENV} mode on port:${PORT}`)
);

export default app;
