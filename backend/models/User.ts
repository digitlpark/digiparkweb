import mongoose, { Schema, models } from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: false }, // empty for Google users
    name: { type: String, required: false },
    image: { type: String, required: false },
    provider: { 
      type: String, 
      enum: ["credentials", "google"], 
      default: "credentials" 
    },
    createdAt: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

// ✅ Hash password only if it exists
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password") || !this.password) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err: any) {
    next(err);
  }
});

// ✅ Compare password (for credentials users only)
UserSchema.methods.comparePassword = async function (candidatePassword: string) {
  if (!this.password) return false; // google users won't have one
  return bcrypt.compare(candidatePassword, this.password);
};

const User = models.User || mongoose.model("User", UserSchema);
export default User;
