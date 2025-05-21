import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import JobRecommendationBanner from "../components/JobRecommBanner";

const categories = [
  {
    name: "Client Relationship Management & Service Delivery",
    img: "https://ext.same-assets.com/3239509555/897851543.png",
  },
  {
    name: "Customer Service & Transaction Processing",
    img: "https://ext.same-assets.com/3239509555/3708648519.png",
  },
  {
    name: "Information Technology",
    img: "https://ext.same-assets.com/3239509555/1159143082.png",
  },
  {
    name: "Client Support & Administration",
    img: "https://ext.same-assets.com/3239509555/663245738.png",
  },
  {
    name: "Accounting & Finance",
    img: "https://ext.same-assets.com/3239509555/2261802117.png",
  },
  {
    name: "Human Resources",
    img: "https://ext.same-assets.com/3239509555/2998095435.png",
  },
  {
    name: "Program & Project Management",
    img: "https://ext.same-assets.com/3239509555/1500786491.png",
  },
  {
    name: "Sales",
    img: "https://ext.same-assets.com/3239509555/2414345521.png",
  },
  {
    name: "Internal Services & Security",
    img: "https://ext.same-assets.com/3239509555/3541119831.png",
  },
  {
    name: "Marketing & Communications",
    img: "https://ext.same-assets.com/3239509555/2144332847.png",
  },
];

const workOptions = [
  {
    title: "Work onsite",
    desc: "Work closely with the team in one of our locations",
    img: "https://ext.same-assets.com/3239509555/1535370898.png",
  },
  {
    title: "Project-Based Roles",
    desc: "Work With flexibility and focus on specific projects, with freedom to choose your schedule and scope",
    img: "https://ext.same-assets.com/3239509555/4123587482.png",
  },
  {
    title: "Flexible scheduling",
    desc: "Manage work and personal priorities within times that work for you and us",
    img: "https://ext.same-assets.com/3239509555/2731561158.png",
  },
  {
    title: "Hybrid work",
    desc: "A combination of onsite and work from home shifts",
    img: "https://ext.same-assets.com/3239509555/1411434483.png",
  },
];

const benefits = [
  { 
    label: "Health and welfare", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  { 
    label: "Paid time off", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  { 
    label: "Learning and development", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    )
  },
  { 
    label: "Discount programs", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" />
      </svg>
    )
  },
  { 
    label: "Career growth", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  { 
    label: "Competitive compensation", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  { 
    label: "Great work environment", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  { 
    label: "Join our team", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    )
  },
];

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [showBanner, setShowBanner] = useState(false);

  return (
    <div className="bg-[#f9faf9] min-h-screen">
      {/* NavBar */}
      <nav className="bg-white shadow-md px-4 flex flex-wrap items-center justify-between"></nav>
      
      {/* Hero Section */}
      <section
        className="relative min-h-[330px] flex flex-col justify-center items-center text-center bg-gradient-to-r from-[#89516d] to-[#304168] text-white"
        style={{
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1661771773771-a093c948ba92?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2FyZWVyfGVufDB8fDB8fHww')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "400px",
        }}
      >
        <div className="mt-12 mb-6 text-4xl sm:text-5xl font-bold drop-shadow">
          Together we're making a difference
        </div>
        <div className="flex w-full max-w-lg mx-auto bg-white rounded shadow p-2 gap-2 items-center">
          <input
            className="flex-1 px-3 h-11 border-0 focus:outline-none text-[#304168]"
            placeholder="Search job title or location"
          />
          <Button className="bg-[#06b49d] text-white px-6">Search</Button>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="bg-white py-12 px-4 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-5 text-center text-[#304168]">
          Why join Suffix?
        </h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-3xl">
          <div className="flex-1 text-gray-700 flex flex-col justify-center text-base text-center">
            We offer opportunities, benefits, a sense of community, and much
            more that make us an award-winning employer. With more than 56
            associates across 24 countries, we're committed to cultivating a
            culture that prioritizes the well-being and growth of our
            associates, ensuring they feel valued and empowered to excel both
            personally and professionally.
          </div>
        </div>
      </section>

      {/* Job Recommendations Banner */}
      <div className="max-w-5xl mx-auto">
        {!showBanner && (
          <div className="bg-[#304168] text-white py-6 px-4 rounded mt-1 mb-10 flex items-center justify-between">
            <div className="text-lg font-medium">
              Get tailored job recommendations based on your interests.
            </div>
            <button
              onClick={() => setShowBanner(true)}
              className="bg-white text-[#06b49d] font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get started
            </button>
          </div>
        )}

        {showBanner && <JobRecommendationBanner onClose={() => setShowBanner(false)} />}
      </div>

      {/* Career Areas */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <h2 className="text-4xl font-bold text-[#304168] text-center mb-8">
          Career areas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((cat, i) => (
            <Link
              key={i}
              to={`/careerform?category=${encodeURIComponent(cat.name)}`}
              className="block"
            >
              <Card className="flex flex-col items-center p-6 border border-gray-200 rounded-xl shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-[#06b49d] cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-500">
                <img
                  className="mb-4 h-24 w-24 object-contain"
                  src={cat.img}
                  alt={cat.name}
                />
                <div className="font-semibold text-sm sm:text-base text-[#304168] text-center leading-snug">
                  {cat.name}
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Inclusive Workplace */}
      <section className="py-10 px-4 text-white text-center" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1586534313131-8b27a31f9894?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
      }}>
        <h2 className="text-2xl font-bold mb-2">Inclusive workplace</h2>
        <p className="max-w-3xl mx-auto opacity-90">
          Our core values create a culture where everyone feels valued and
          included. We welcome individual differences and encourage associates
          to bring their authentic selves to work.
        </p>
      </section>

      {/* Work Formats */}
      <section className="bg-[#f9faf9] py-8 px-4">
        <h2 className="text-3xl font-bold text-center text-[#304168] mb-10">
          Work in a way that works for you
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {workOptions.map((opt, i) => (
            <Card
              key={i}
              className="flex flex-col items-center p-6 text-center border border-gray-200 hover:border-[#06b49d] rounded-xl shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              <img
                src={opt.img}
                alt={opt.title}
                className="w-28 h-24 object-contain mb-4"
              />
              <h3 className="font-bold text-lg text-[#304168]">{opt.title}</h3>
              <p className="text-base text-gray-600">{opt.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-4 mb-4 bg-white">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#304168]">
          Benefits at a glance
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, i) => (
            <Card
              key={i}
              className="group relative overflow-hidden p-8 rounded-xl bg-white border border-gray-200 hover:border-[#06b49d] transition-all duration-300 hover:shadow-lg"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#304168] opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-[#304168] text-white group-hover:bg-[#06b49d] transition-colors duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#304168] mb-2 group-hover:text-[#06b49d] transition-colors duration-300">
                  {benefit.label}
                </h3>
                <div className="h-1 w-16 bg-[#06b49d] opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-4"></div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;