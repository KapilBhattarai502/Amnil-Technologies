import mongoose from "mongoose";

 const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://kapilbhattarai502:dob205807@cluster0.ssdqlio.mongodb.net/amnilTodo?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log('DB CONNECTED SUCESSFULLY!!!!')
  } catch (error) {
    console.log('Connection to Database Failed',error)
  }
};

export default connectDB;
