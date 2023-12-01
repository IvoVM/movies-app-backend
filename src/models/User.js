import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
  {
    username: String,
    password: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.static("availableName", async function (userName) {
  if (!userName) return false;
  try {
    const user = await this.findOne({username:userName});
    if (user) {
      return false;
    } else {
      return true;
    }
  } catch (error) {
    return false;
  }
});

export default model("User", userSchema);
