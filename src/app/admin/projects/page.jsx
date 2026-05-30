'use client'

import { useEffect, useState } from 'react'
import {
  Plus,
  Upload,
  Loader2,
  CheckCircle,
  AlertCircle,
  X,
  Pencil,
  Trash2
} from 'lucide-react'

export default function AdminProjectsPage() {

  const [projects, setProjects] = useState([])

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const [showModal, setShowModal] = useState(false)

  const [editingProject, setEditingProject] =
    useState(null)

  const [formData, setFormData] = useState({
    title: '',
    category: 'web',
    subcategory: '',
    description: '',
    client: '',
    industry: '',
    technologies: '',
    features: '',
    image: '',
    duration: '',
    launchDate: '',
    results: '',
    liveUrl: '',
    githubUrl: '',
    featured: false,
  })


  // FETCH PROJECTS
  useEffect(() => {
    fetchProjects()
  }, [])


  const fetchProjects = async () => {
    try {

      const response = await fetch('/api/projects')

      const data = await response.json()

      if (data.success) {
        setProjects(data.projects)
      }

    } catch (error) {
      console.log(error)
    }
  }


  // HANDLE INPUT CHANGE
  const handleChange = (e) => {

    const { name, value, type, checked } =
      e.target

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox'
          ? checked
          : value,
    }))
  }


  // RESET FORM
  const resetForm = () => {
    setFormData({
      title: '',
      category: 'web',
      subcategory: '',
      description: '',
      client: '',
      industry: '',
      technologies: '',
      features: '',
      image: '',
      duration: '',
      launchDate: '',
      results: '',
      liveUrl: '',
      githubUrl: '',
      featured: false,
    })
  }


  // OPEN CREATE MODAL
  const openCreateModal = () => {

    resetForm()

    setEditingProject(null)

    setShowModal(true)
  }


  // HANDLE EDIT
  const handleEdit = (project) => {

    setEditingProject(project)

    setFormData({
      ...project,

      technologies:
        project.technologies?.join(', ') || '',

      features:
        project.features?.join(', ') || '',

      results:
        project.results?.join(', ') || '',
    })

    setShowModal(true)
  }


  // HANDLE DELETE
  const handleDelete = async (id) => {

    const confirmDelete =
      confirm('Delete this project?')

    if (!confirmDelete) return

    try {

      const response = await fetch(
        `/api/projects/${id}`,
        {
          method: 'DELETE',
        }
      )

      const data = await response.json()

      if (data.success) {
        fetchProjects()
      }

    } catch (error) {
      console.log(error)
    }
  }


  // HANDLE SUBMIT
  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      setLoading(true)
      setError('')
      setSuccess(false)

      const payload = {
        ...formData,

        technologies:
          formData.technologies
            .split(',')
            .map((item) => item.trim())
            .filter(Boolean),

        features:
          formData.features
            .split(',')
            .map((item) => item.trim())
            .filter(Boolean),

        results:
          formData.results
            .split(',')
            .map((item) => item.trim())
            .filter(Boolean),
      }


      const url = editingProject
        ? `/api/projects/${editingProject._id}`
        : '/api/projects'


      const method = editingProject
        ? 'PUT'
        : 'POST'


      const response = await fetch(url, {
        method,

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(payload),
      })


      const data = await response.json()

      if (!data.success) {
        throw new Error(
          data.message ||
          'Failed to save project'
        )
      }


      setSuccess(true)

      fetchProjects()

      setShowModal(false)

      setEditingProject(null)

      resetForm()

    } catch (err) {

      console.log(err)

      setError(
        err.message ||
        'Something went wrong'
      )

    } finally {

      setLoading(false)
    }
  }


  return (
    <div
      className="min-h-screen py-10 px-4"
      style={{
        backgroundColor: `rgb(var(--bg))`
      }}
    >

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">

          <div>
            <h1
              className="text-3xl font-bold mb-2"
              style={{
                color: `rgb(var(--text))`
              }}
            >
              Projects Admin
            </h1>

            <p
              className="text-sm"
              style={{
                color:
                  `rgb(var(--text-secondary))`
              }}
            >
              Manage portfolio projects
            </p>
          </div>


          <button
            onClick={openCreateModal}
            className="px-5 py-3 rounded-xl text-white font-medium flex items-center gap-2"
            style={{
              backgroundColor:
                `rgb(var(--primary))`
            }}
          >
            <Plus size={18} />
            Add Project
          </button>

        </div>


        {/* SUCCESS */}
        {success && (
          <div className="mb-6 rounded-xl border border-green-500/30 bg-green-500/10 p-4 flex items-center gap-3">

            <CheckCircle
              className="text-green-500"
              size={20}
            />

            <p className="text-green-600 font-medium">
              Project saved successfully.
            </p>

          </div>
        )}


        {/* ERROR */}
        {error && (
          <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4 flex items-center gap-3">

            <AlertCircle
              className="text-red-500"
              size={20}
            />

            <p className="text-red-600 font-medium">
              {error}
            </p>

          </div>
        )}


        {/* PROJECTS LIST */}
        <div className="grid gap-5">

          {projects.map((project) => (

            <div
              key={project._id}
              className="bg-white rounded-2xl border p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-5"
              style={{
                borderColor:
                  `rgba(var(--border),0.3)`
              }}
            >

              <div>

                <div className="flex items-center gap-3 mb-2">

                  <h2 className="text-xl font-semibold">
                    {project.title}
                  </h2>

                  {project.featured && (
                    <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-700">
                      Featured
                    </span>
                  )}

                </div>

                <p className="text-sm text-gray-500 mb-2">
                  {project.category}
                </p>

                <p className="text-sm line-clamp-2 text-gray-600">
                  {project.description}
                </p>

              </div>


              <div className="flex items-center gap-3">

                <button
                  onClick={() =>
                    handleEdit(project)
                  }
                  className="px-4 py-2 rounded-lg bg-blue-500 text-white flex items-center gap-2"
                >
                  <Pencil size={16} />
                  Edit
                </button>


                <button
                  onClick={() =>
                    handleDelete(project._id)
                  }
                  className="px-4 py-2 rounded-lg bg-red-500 text-white flex items-center gap-2"
                >
                  <Trash2 size={16} />
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>


        {/* MODAL */}
        {showModal && (

          <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 overflow-y-auto">

            <div
              className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl p-6 md:p-8 my-10"
            >

              {/* CLOSE BUTTON */}
              <button
                onClick={() => {
                  setShowModal(false)
                  setEditingProject(null)
                }}
                className="absolute top-5 right-5"
              >
                <X size={22} />
              </button>


              {/* TITLE */}
              <div className="mb-8">

                <h2 className="text-3xl font-bold mb-2">

                  {editingProject
                    ? 'Update Project'
                    : 'Add Project'}

                </h2>

                <p className="text-gray-500 text-sm">
                  Manage portfolio projects
                </p>

              </div>


              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="space-y-8"
              >

                {/* BASIC INFO */}
                <div>

                  <h3 className="text-xl font-semibold mb-5">
                    Basic Information
                  </h3>

                  <div className="grid md:grid-cols-2 gap-5">

                    <div>

                      <label className="block mb-2 text-sm font-medium">
                        Project Title *
                      </label>

                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border px-4 py-3 outline-none"
                      />

                    </div>


                    <div>

                      <label className="block mb-2 text-sm font-medium">
                        Category *
                      </label>

                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full rounded-xl border px-4 py-3 outline-none"
                      >
                        <option value="web">
                          Web Development
                        </option>

                        <option value="mobile">
                          Mobile App
                        </option>

                      </select>

                    </div>


                    <div>

                      <label className="block mb-2 text-sm font-medium">
                        Subcategory
                      </label>

                      <input
                        type="text"
                        name="subcategory"
                        value={formData.subcategory}
                        onChange={handleChange}
                        className="w-full rounded-xl border px-4 py-3 outline-none"
                      />

                    </div>


                    <div>

                      <label className="block mb-2 text-sm font-medium">
                        Client
                      </label>

                      <input
                        type="text"
                        name="client"
                        value={formData.client}
                        onChange={handleChange}
                        className="w-full rounded-xl border px-4 py-3 outline-none"
                      />

                    </div>

                  </div>

                </div>


                {/* DESCRIPTION */}
                <div>

                  <label className="block mb-2 text-sm font-medium">
                    Description *
                  </label>

                  <textarea
                    rows="5"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border px-4 py-3 outline-none resize-none"
                  />

                </div>


                {/* DETAILS */}
                <div className="grid md:grid-cols-2 gap-5">

                  <div>

                    <label className="block mb-2 text-sm font-medium">
                      Industry
                    </label>

                    <input
                      type="text"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full rounded-xl border px-4 py-3 outline-none"
                    />

                  </div>


                  <div>

                    <label className="block mb-2 text-sm font-medium">
                      Duration
                    </label>

                    <input
                      type="text"
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      className="w-full rounded-xl border px-4 py-3 outline-none"
                    />

                  </div>


                  <div>

                    <label className="block mb-2 text-sm font-medium">
                      Launch Date
                    </label>

                    <input
                      type="text"
                      name="launchDate"
                      value={formData.launchDate}
                      onChange={handleChange}
                      className="w-full rounded-xl border px-4 py-3 outline-none"
                    />

                  </div>


                  <div>

                    <label className="block mb-2 text-sm font-medium">
                      Image URL
                    </label>

                    <input
                      type="text"
                      name="image"
                      value={formData.image}
                      onChange={handleChange}
                      className="w-full rounded-xl border px-4 py-3 outline-none"
                    />

                  </div>

                </div>


                {/* TECH */}
                <div className="grid gap-5">

                  <div>

                    <label className="block mb-2 text-sm font-medium">
                      Technologies
                    </label>

                    <input
                      type="text"
                      name="technologies"
                      value={formData.technologies}
                      onChange={handleChange}
                      placeholder="Next.js, MongoDB"
                      className="w-full rounded-xl border px-4 py-3 outline-none"
                    />

                  </div>


                  <div>

                    <label className="block mb-2 text-sm font-medium">
                      Features
                    </label>

                    <textarea
                      rows="3"
                      name="features"
                      value={formData.features}
                      onChange={handleChange}
                      className="w-full rounded-xl border px-4 py-3 outline-none resize-none"
                    />

                  </div>


                  <div>

                    <label className="block mb-2 text-sm font-medium">
                      Results
                    </label>

                    <textarea
                      rows="3"
                      name="results"
                      value={formData.results}
                      onChange={handleChange}
                      className="w-full rounded-xl border px-4 py-3 outline-none resize-none"
                    />

                  </div>

                </div>


                {/* URLS */}
                <div className="grid md:grid-cols-2 gap-5">

                  <div>

                    <label className="block mb-2 text-sm font-medium">
                      Live URL
                    </label>

                    <input
                      type="url"
                      name="liveUrl"
                      value={formData.liveUrl}
                      onChange={handleChange}
                      className="w-full rounded-xl border px-4 py-3 outline-none"
                    />

                  </div>


                  <div>

                    <label className="block mb-2 text-sm font-medium">
                      GitHub URL
                    </label>

                    <input
                      type="url"
                      name="githubUrl"
                      value={formData.githubUrl}
                      onChange={handleChange}
                      className="w-full rounded-xl border px-4 py-3 outline-none"
                    />

                  </div>

                </div>


                {/* FEATURED */}
                <div className="flex items-center gap-3">

                  <input
                    type="checkbox"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleChange}
                    className="w-4 h-4"
                  />

                  <label className="text-sm font-medium">
                    Mark as Featured
                  </label>

                </div>


                {/* SUBMIT */}
                <div className="flex justify-end">

                  <button
                    type="submit"
                    disabled={loading}
                    className="px-7 py-3 rounded-xl text-white font-semibold flex items-center gap-2 disabled:opacity-50"
                    style={{
                      backgroundColor:
                        `rgb(var(--primary))`
                    }}
                  >

                    {loading ? (
                      <>
                        <Loader2
                          className="animate-spin"
                          size={18}
                        />
                        Saving...
                      </>
                    ) : (
                      <>
                        <Upload size={18} />

                        {editingProject
                          ? 'Update Project'
                          : 'Upload Project'}
                      </>
                    )}

                  </button>

                </div>

              </form>

            </div>

          </div>

        )}

      </div>

    </div>
  )
}