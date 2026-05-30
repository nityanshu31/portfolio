import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    subcategory: {
      type: String,
    },

    description: {
      type: String,
      required: true,
    },

    client: {
      type: String,
    },

    industry: {
      type: String,
    },

    technologies: [String],

    features: [String],

    image: {
      type: String,
    },

    duration: {
      type: String,
    },

    launchDate: {
      type: String,
    },

    results: [String],

    liveUrl: {
      type: String,
    },

    githubUrl: {
      type: String,
    },

    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);