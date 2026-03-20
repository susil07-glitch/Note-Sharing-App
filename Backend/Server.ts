import envConfig from "./src/Config/config";
import connectToDatabase from "./src/Config/db";
import express from "express";
import noteRoute from "./src/note/noteRoutes";
import globalErrorHndling from "./src/MiddleWares/globalErrorHandling";
import authRoutes from "./src/User/AuthRoutes";
import cors from 'cors'

const app = express();
//middleware
app.use(express.json());
app.use(globalErrorHndling);

//database call
connectToDatabase();

// cors validation //
app.use(cors({
  origin : envConfig.frontendUrl

}))

//api route
app.use("/api/notes", noteRoute);


// auth rotes //

app.use("/api/notes",authRoutes);



 // api route for testing 
const port = envConfig.port || 4000;
app.listen(port, () => {
  console.log(`Server is runnig on port ${port}`);
});
