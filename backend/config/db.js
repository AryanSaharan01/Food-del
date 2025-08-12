import mongoose from "mongoose";

export const connectDB = async () => {
  // await mongoose.connect('mongodb+srv://ArishShran:<YQ60gFdCUsl4rmOg>@cluster0.upldqu7.mongodb.net/Food-del').then(()=>console.log("DB Connected"));
  await mongoose
    .connect(
      "mongodb+srv://admin:YQ60gFdCUsl4rmOg@cluster0.upldqu7.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => console.log("DB Connected"));
};