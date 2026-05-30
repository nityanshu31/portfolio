import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Test from "@/models/Test";

export async function GET() {
  try {
    await connectDB();

    return NextResponse.json({
      success: true,
      message: "MongoDB Connected Successfully",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Database Connection Failed",
      },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const newData = await Test.create({
      name: body.name,
      email: body.email,
    });

    return NextResponse.json({
      success: true,
      message: "Data inserted successfully",
      data: newData,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to insert data",
      },
      { status: 500 }
    );
  }
}