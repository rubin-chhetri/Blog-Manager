import { connectDB } from "@/lib/config/db";
import Email from "@/lib/models/Email.model";
import { NextResponse } from "next/server";

const LoadDb=async()=>{
    await connectDB();
}
LoadDb();
export async function POST(req) {
    const { email } = await req.json();
    const newEmail = new Email({ email });
    await newEmail.save();
    return NextResponse.json({ message: "Email saved successfully" });
}

export async function GET(req) {
    const emails = await Email.find({});
    return NextResponse.json({ emails });
}

export async function DELETE(req) {
    const emailId = await req.nextUrl.searchParams.get("id");
    await Email.findByIdAndDelete(emailId);
    return NextResponse.json({ message: "Email deleted successfully" });
}