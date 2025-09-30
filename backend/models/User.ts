import mongoose, { Schema, models } from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: false },
 // not required for OAuth users
    name: { type: String },
    image: { type: String },
    provider: { type: String, default: "credentials" }, // "credentials" | "google" etc.
    createdAt: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

// Hash password only if it exists and is modified
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password") || !this.password) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err as any);
  }
});

// Compare password (only for credentials users)
UserSchema.methods.comparePassword = async function (candidatePassword: string) {
  if (!this.password) return false; // google users won't have a password
  return bcrypt.compare(candidatePassword, this.password);
};

const User = models.User || mongoose.model("User", UserSchema);
export default User;
