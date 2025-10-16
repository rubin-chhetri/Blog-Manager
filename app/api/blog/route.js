

import { NextResponse } from "next/server";
import { connectDB } from "@/lib/config/db";
import { writeFile } from "fs/promises";
import Blog from "@/lib/models/Blog.model";
import fs from "fs";
import path from "path"; // ✅ FIX 1: Added path for safe cross-OS file path handling

const loadDB = async () => {
  await connectDB();
};
loadDB();

//api to get all blogs
export async function GET(req) {
  const blogId = req.nextUrl.searchParams.get("id");
  if (blogId) {
    const blog = await Blog.findById(blogId);
    return NextResponse.json({ blog });
  } else {
    const blogs = await Blog.find({});
    return NextResponse.json({ blogs });
  }
}

//api to upload blogs
export async function POST(req) {
  try {
    const formData = await req.formData();
    const timeStamp = Date.now();

    // ✅ Handle main image
    const image = formData.get("image");
    const imageByteData = await image.arrayBuffer();
    const imageBuffer = Buffer.from(imageByteData);
    const imagePath = `./public/${timeStamp}_${image.name}`;
    await writeFile(imagePath, imageBuffer);
    const imageUrl = `/${timeStamp}_${image.name}`;

    // ✅ Create blog document
    const blogData = {
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category"),
      author: formData.get("author"),
      image: imageUrl,
      authorImg: formData.get("authorImg"),
    };

    await Blog.create(blogData);
    console.log("✅ Blog saved successfully");

    return NextResponse.json({ success: true, message: "Blog Added" });
  } catch (error) {
    console.error("❌ Error saving blog:", error);
    return NextResponse.json({
      success: false,
      message: "Failed to add blog",
      error: error.message,
    });
  }
}

//api to delete blog
export async function DELETE(req) {
  try {
    const blogId = await req.nextUrl.searchParams.get("id");
    const selectedBlog = await Blog.findById(blogId);

    // ✅ FIX 2: Handle case where blog isn’t found
    if (!selectedBlog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    // ✅ FIX 3: Use path.join() for correct absolute path
    const imagePath = path.join(
      process.cwd(),
      "public",
      selectedBlog.image.replace(/^\/+/, "") // removes leading slash
    );

    // ✅ FIX 4: Check if file exists before deleting
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath); // removed invalid callback
      console.log("🗑️ Deleted file:", imagePath);
    } else {
      console.log("⚠️ File not found, skipping delete:", imagePath);
    }

    await Blog.findByIdAndDelete(blogId);
    return NextResponse.json({ message: "Blog Deleted" });
  } catch (error) {
    // ✅ FIX 5: Added error handling for unexpected failures
    console.error("❌ Error deleting blog:", error);
    return NextResponse.json(
      { message: "Failed to delete blog", error: error.message },
      { status: 500 }
    );
  }
}

