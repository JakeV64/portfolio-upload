import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";




function Header() {
  return (
    <header>
      <nav aria-label="Main Navigation">
        <ul>
          <li>Jacob Von Ah</li>
          <li className="list">
            <Link to="/">About Me</Link>
          </li>
          <li className="list">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="list">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="list">
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function About() {
  return (
    <section className="about">
      <h1>About Me</h1>
      <p>
        Hi, my name is Jacob Von Ah. I am from Illinois, currently a student at
        The University of Wisconsin studying coding. The past few years I've
        been working as a line cook, but I've always had a passion for
        technology. I am excited to learn more about coding and web development.
      </p>
    </section>
  );
}

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Budget Calculator",
      imageUrl: "/images/budget-tracker-pic.png",
      description: "Here is the first group project I worked on. We created a budget calculator that allows users to track their expenses and income also displaying users expenses in a pie chart.",
    },
    {
      id: 2,
      title: "First assignment",
      imageUrl: "/images/horisenP.png",
      description: "Here's my first assignment for the coding bootcamp. Was a homepage for a business.",
    },
    {
      id: 3,
      title: "Dark Mode assignment",
      imageUrl: "/images/loginP.png",
      description: "Here's another assignment I worked on. It was a simple login page with a dark mode feature.",
    },
    {
      id: 4,
      title: "Payroll Calculator Login",
      imageUrl: "/images/payrollT.png",
      description: "This project was another assignment I worked on. It was the login for payroll calculator.",
    },
    {
      id: 5,
      title: "Portfolio One",
      imageUrl: "/images/portOne.png",
      description: "Here is my first portfolio I created.",
    
    },
    {
      id: 6,
      title: "Washingtom Football",
      imageUrl: "/images/washF.png",
      description: "Here is a project I work on in my free time. It is a website for the Washington Commanders. My favorite football team.",
    }
  ];
  return (
    <section className="portfolio">
      <h1>Portfolio</h1>
      <p>Here are some projects I've worked on.</p>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <div key={project.id} className="portfolio-item">
            {project.imageUrl && (
              <img src={project.imageUrl} alt={project.title} />
            )}
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
      
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error when typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.message) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    alert("Form submitted successfully!");
  };

  return (
    <section className="contact p-6 bg-gray-100 rounded-xl shadow-lg max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Contact</h1>
      <p className="mb-4">Feel free to reach out to me through any of the methods below.</p>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <label className="flex flex-col">
          <span className="font-medium">Name</span>
          <input
            type="text"
            name="name"
            className="p-2 border border-gray-300 rounded-lg"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
        </label>

        <label className="flex flex-col">
          <span className="font-medium">Email</span>
          <input
            type="email"
            name="email"
            className="p-2 border border-gray-300 rounded-lg"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
        </label>

        <label className="flex flex-col">
          <span className="font-medium">Message</span>
          <textarea
            name="message"
            className="p-2 border border-gray-300 rounded-lg"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
        </label>

        <button type="submit" className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
    </section>
  );
}


function Resume() {
  return (
    <section className="resume">
      <h1>Resume</h1>
      <p>Here is my resume with all the relevant details about my work experience and education.</p>
      
    </section>
  );
}

function Footer() {
  return <footer><p>Created By Jacob Von Ah 2025</p></footer>;
}

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
