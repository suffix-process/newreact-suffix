// src/pages/CareerCategoryFormPage.tsx
import React, { useState, useEffect, useRef } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import ReCAPTCHA from 'react-google-recaptcha'

const CareerCategoryFormPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const selectedCategory = searchParams.get('category') || ''

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    resume: null as File | null,
    coverLetter: '',
  })
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const recaptchaRef = useRef<ReCAPTCHA>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement
    if (name === 'resume' && files) {
      setFormData(f => ({ ...f, resume: files[0] }))
    } else {
      setFormData(f => ({ ...f, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!recaptchaToken) {
      alert('Please verify that you are not a robot.')
      return
    }

    setSubmitting(true)
    const payload = new FormData()
    payload.append('category', selectedCategory)
    payload.append('fullName', formData.fullName)
    payload.append('email', formData.email)
    payload.append('phone', formData.phone)
    if (formData.resume) payload.append('resume', formData.resume)
    payload.append('coverLetter', formData.coverLetter)
    payload.append('recaptchaToken', recaptchaToken)

    try {
      const res = await fetch('/api/apply-career', {
        method: 'POST',
        body: payload,
      })
      if (res.ok) {
        // reset recaptcha for next time
        recaptchaRef.current?.reset()
        navigate('/thank-you')
      } else {
        console.error('Submission failed')
      }
    } catch (err) {
      console.error(err)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="max-w-xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-[#304168] text-center mb-6 mt-12">
        Apply for: <span className="text-[#06b49d]">{selectedCategory}</span>
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input type="hidden" name="category" value={selectedCategory} />

        {/* Full Name */}
        <div>
          <label className="block mb-1 font-semibold">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-semibold">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-1 font-semibold">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Resume */}
        <div>
          <label className="block mb-1 font-semibold">Resume (PDF)</label>
          <input
            type="file"
            name="resume"
            accept=".pdf"
            onChange={handleChange}
            required
            className="w-full"
          />
        </div>

        {/* Cover Letter */}
        {/* <div>
          <label className="block mb-1 font-semibold">Cover Letter</label>
          <textarea
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div> */}

        {/* reCAPTCHA */}
        <div className="flex justify-center">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="YOUR_RECAPTCHA_SITE_KEY"
            onChange={token => setRecaptchaToken(token)}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={submitting}
          className={`
            w-full py-3 text-white font-semibold rounded
            bg-[#06b49d] hover:bg-teal-600 transition
            ${submitting ? 'opacity-50 cursor-wait' : ''}
          `}
        >
          {submitting ? 'Submitting…' : 'Submit Application'}
        </button>
      </form>
    </section>
  )
}

export default CareerCategoryFormPage
