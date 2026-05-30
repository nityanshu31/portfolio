import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Project from "@/models/Project";


// GET ALL PROJECTS
export async function GET() {
  try {
    await connectDB();

    const projects = await Project.find().sort({
      createdAt: -1,
    });

    return NextResponse.json({
      success: true,
      projects,
    });

  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch projects",
      },
      { status: 500 }
    );
  }
}


// CREATE PROJECT
export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const project = await Project.create(body);

    return NextResponse.json({
      success: true,
      message: "Project created successfully",
      project,
    });

  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create project",
      },
      { status: 500 }
    );
  }
}