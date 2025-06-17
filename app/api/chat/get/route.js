import connectDB from "@/config/db";
import Chat from "@/model/Chat";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    console.log("reqqqqqqqqqqqqqqqqqqqqqq", req);
    const { userId } = getAuth(req);
    console.log("uuuuuuuuuuuuuuuuu", userId);
    if (!userId) {
      return NextResponse.json({
        success: false,
        message: "User not authenticated",
      });
    }

    // Connect to the database and fetch all chats for the user
    await connectDB();
    const data = await Chat.find({ userId });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
