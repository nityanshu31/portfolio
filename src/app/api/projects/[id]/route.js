import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Project from "@/models/Project";


// GET SINGLE PROJECT
export async function GET(req, context) {

  try {

    await connectDB();

    const { id } = await context.params;

    const project =
      await Project.findById(id);

    return NextResponse.json({
      success: true,
      project,
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch project",
      },
      { status: 500 }
    );
  }
}


// UPDATE PROJECT
export async function PUT(req, context) {

  try {

    await connectDB();

    const { id } = await context.params;

    const body = await req.json();

    const updatedProject =
      await Project.findByIdAndUpdate(
        id,
        body,
        {
          new: true,
        }
      );

    return NextResponse.json({
      success: true,
      project: updatedProject,
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update project",
      },
      { status: 500 }
    );
  }
}


// DELETE PROJECT
export async function DELETE(req, context) {

  try {

    await connectDB();

   const { id } = await context.params;

    await Project.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "Project deleted successfully",
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete project",
      },
      { status: 500 }
    );
  }
}