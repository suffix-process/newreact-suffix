import React from "react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { useEffect } from "react";
import sdfImage from '../assets/image.png';

// const navLinks = [
//   { title: "Home", href: "#" },
//   { title: "Career search", href: "#" },
//   { title: "Culture", href: "#" },
//   { title: "Career growth", href: "#" },
//   { title: "Veterans and military spouses", href: "#" },
//   { title: "Benefits", href: "#" },
//   { title: "Inclusive workplace", href: "#" },
//   { title: "Company overview", href: "#" },
//   { title: "Locations", href: "#" },
//   { title: "Corporate social responsibility", href: "#" },
//   { title: "Our hiring process", href: "#" },
//   { title: "Hiring events", href: "#" },
//   { title: "Blog", href: "#" },
// ];

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
    title: "Work from home",
    desc: "Enjoy the convenience of working from home",
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
  { label: "Health and welfare", icon: "🩺" },
  { label: "Paid time off", icon: "🏝️" },
  { label: "Learning and employee development", icon: "🎓" },
  { label: "Discount programs", icon: "💸" },
  { label: "Career growth opportunities", icon: "🚀" },
  { label: "Compensation", icon: "💰" },
  { label: "Great work environment", icon: "🌟" },
  { label: "Join us and learn more", icon: "🔗" },
];


function App() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  return (
    <div className="bg-[#f9faf9] min-h-screen">

      {/* NavBar */}
      <nav className="bg-white shadow-md px-4  flex flex-wrap items-center justify-between">
      </nav>
      {/* Hero Section */}
      <section
        className="relative min-h-[330px]  flex flex-col justify-center items-center text-center bg-gradient-to-r from-[#89516d] to-[#304168] text-white"
      style={{
    backgroundImage: `url(${sdfImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
      >
        <div className="mt-12 mb-6 text-4xl sm:text-5xl font-bold drop-shadow">Together we're making a difference</div>
        <div className="flex w-full max-w-lg mx-auto bg-white rounded shadow p-2 gap-2 items-center">
          <input className="flex-1 px-3 h-11 border-0 focus:outline-none text-[#304168]" placeholder="Search job title or location" />
          <Button className="bg-[#06b49d] text-white px-6">Search</Button>
        </div>
      </section>
      {/* Why Join Section */}
      <section className="bg-white py-12 px-4 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-5 text-center text-[#304168]">Why join Suffix?</h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-3xl">
          <Card className="w-full md:w-[320px] flex items-center justify-center h-40 bg-gray-100 transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <div className="bg-black text-white w-full h-full flex flex-col items-center justify-center text-sm rounded">
              <span className="font-semibold mb-2">Media player</span>
              <span>Video Placeholder</span>
            </div>
          </Card>
          <div className="flex-1 text-gray-700 flex flex-col justify-center text-base">
            We offer opportunities, benefits, a sense of community, and much more that make us an award-winning employer.
            With more than 56,000 associates across 24 countries, we're committed to cultivating a culture that prioritizes the well-being and growth of our associates, ensuring they feel valued and empowered to excel both personally and professionally.
          </div>
        </div>
      </section>
      {/* Job Recommendations Banner */}
      <div className="bg-[#06b49d] text-white py-6 flex items-center justify-between px-4 max-w-5xl mx-auto rounded mt-1 mb-10">
        <div className="text-lg font-medium">Get tailored job recommendations based on your interests.</div>
        <Button className="bg-white text-[#06b49d] font-semibold px-6 py-2">Get started</Button>
      </div>
       {/* Career Areas */}
       <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-[#304168] text-center mb-8">Career areas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((cat, i) => (
            <Card
              key={i}
              className="flex flex-col items-center p-6 border border-gray-200 hover:border-[#06b49d] rounded-xl shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              <img className="mb-4 h-24 w-24 object-contain" src={cat.img} alt={cat.name} />
              <div className="font-semibold text-sm sm:text-base text-[#304168] text-center leading-snug">{cat.name}</div>
            </Card>
          ))}
        </div>
      </section>
      {/* Inclusive Workplace */}
      <section className="bg-gradient-to-br from-[#304168] to-[#89516d] py-10 px-4 text-white text-center">
        <h2 className="text-2xl font-bold mb-2">Inclusive workplace</h2>
        <p className="max-w-3xl mx-auto opacity-90">Our core values create a culture where everyone feels valued and included. We welcome individual differences and encourage associates to bring their authentic selves to work.</p>
      </section>
     {/* Work Formats */}
     <section className="bg-[#f9faf9] py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-[#304168] mb-10">Work in a way that works for you</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {workOptions.map((opt, i) => (
            <Card
              key={i}
              className="flex flex-col items-center p-6 text-center border border-gray-200 hover:border-[#06b49d] rounded-xl shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              <img src={opt.img} alt={opt.title} className="w-28 h-24 object-contain mb-4" />
              <h3 className="font-bold text-lg text-[#304168]">{opt.title}</h3>
              <p className="text-base text-gray-600">{opt.desc}</p>
            </Card>
          ))}
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-14 px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-[#304168]">Benefits at a glance</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, i) => (
            <Card
              key={i}
              className="flex flex-col items-center justify-center bg-[#304168] text-white p-6 gap-3 min-h-[120px] rounded-xl border border-transparent hover:border-white transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              <div className="text-4xl mb-1">{benefit.icon}</div>
              <span className="font-semibold text-base text-center">{benefit.label}</span>
            </Card>
          ))}
        </div>
      </section>
      {/* Join Community */}
      <section className="bg-[#f0f2f5] py-12 px-4 flex flex-col items-center">
        <div className="max-w-3xl w-full rounded-lg bg-white flex flex-col md:flex-row gap-8 p-8 shadow-md items-center justify-between">
          <img src="https://ext.same-assets.com/3239509555/712892955.png" alt="Join our Community" className="h-36 w-36 object-contain mb-4 md:mb-0" />
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-xl font-semibold mb-2 text-[#304168]">Join our community</h2>
            <p className="mb-4 text-[#304168]">Join our talent community and get personalized job alerts delivered to your inbox.</p>
            <Button className="bg-[#06b49d] text-white font-semibold px-6 py-2">Join us</Button>
          </div>
        </div>
      </section>
      {/* Footer */}
      {/* <footer className="bg-[#909ba5] text-white text-xs py-6 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="mb-2 font-semibold">Job applicants should be aware that recruitment, interview, and offer scams do exist.</p>
          <ul className="list-disc list-inside space-y-1 opacity-90">
            <li>Suffix only uses Suffix.com for email communications</li>
            <li>Suffix will not request money or your banking or credit card information</li>
            <li>Suffix will not ask you to purchase equipment to start working</li>
            <li>Suffix will not ask you to meet at a location other than Suffix offices and select job fairs and hiring events</li>
          </ul>
        </div>
      </footer> */}
    </div>
  );
}

export default App;
