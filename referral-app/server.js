// const express = require("express");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const connectDB = require("./config/db");
// const connectionRoutes = require("./routes/connectionRoutes");

// dotenv.config();
// const app = express();

// // Middleware
// app.use(cors({ origin: "http://localhost:3000", credentials: true }));
// app.use(express.json());

// // DB Connection
// connectDB();

// // Routes
// app.use("/api/auth", require("./routes/authRoutes"));
// app.use("/api/users", require("./routes/userRoutes"));
// app.use("/api/referrals", require("./routes/referralRoutes"));
// app.use("/api/connections", connectionRoutes);


// // Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();  // Load environment variables
const app = express();

// Middleware
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

// DB Connection
connectDB();

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/referrals", require("./routes/referralRoutes"));
app.use("/api/connections", require("./routes/connectionRoutes"));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
