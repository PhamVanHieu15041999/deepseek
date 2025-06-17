import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    messages: [
      {
        role: { type: String, require: true },
        content: { type: String, require: true },
        timestamp: { type: Number, require: true },
      },
    ],
    userId: { type: String, require: true },
  },
  { timestamps: true }
);

const Chat = mongoose.model.Chat || mongoose.model("Chat", ChatSchema);
export default Chat;
