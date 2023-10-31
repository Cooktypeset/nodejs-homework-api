const { Schema, model } = require("mongoose");

const usersSchema = new Schema(
    {
        password: {
            type: String,
            required: [true, "Set password for user"],
        },
        email: {
            typ: String,
            required: [true, "Email is required"],
            unique: true,
        },
        subscription: {
            type: String,
            enum: ["starter", "pro", "business"],
            default: "starter",
        },
        token: String,
        avatarURL: String,
    },
    { versionKey: false }
);

const UsersModel = model("users", usersSchema);
module.exports = UsersModel;