import mongosse from "mongoose";

const userSchema = new mongosse.Schema({
  name: {
    type: String,
  },
  place: {
    type: String,
  },
});

const user = new mongosse.model("user", userSchema, "users");
export default user;
