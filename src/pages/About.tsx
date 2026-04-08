
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Github, Linkedin, FileText, Mail, MapPin } from "lucide-react";
import StudentAvatar from "@/components/StudentAvatar"; // adjust path if needed

const Badge = ({ children, color = "bg-teal-500/80" }) => (
  <span className={`inline-flex items-center gap-2 ${color} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
    {children}
  </span>
);

const Pill = ({ children, color = "bg-purple-500/20", style }: { children: React.ReactNode; color?: string; style?: React.CSSProperties }) => (
  <span
    className={`inline-flex items-center gap-2 ${color} text-purple-50 px-3 py-1.5 rounded-xl border border-purple-300/20`}
    style={style}
  >
    {children}
  </span>
);

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 p-8">
      {/* Back */}
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-purple-200 hover:text-white transition-colors mb-8"
      >
        <ArrowLeft size={20} />
        Back to the Wright Portfolio
      </button>

      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-10 border border-purple-300/20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-5">
              {/* <div className="shrink-0 w-28 h-28">
                <StudentAvatar />

              </div> */}
              
              <StudentAvatar />
              {/* <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                  Kerene Wright
                </h1>
                <p className="text-purple-200">
                  Software Engineer • AI/ML • Product Prototyper
                </p>
                <div className="flex items-center gap-2 mt-1 text-purple-300">
                  <MapPin size={16} />
                  <span>Miami, FL</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Badge>Full-Stack</Badge>
                  <Badge color="bg-amber-500/80">Hackathons</Badge>
                  <Badge color="bg-emerald-600/80">AI/ML</Badge>
                </div>
              </div> */}
            </div>

            {/* Quick Links */}
            <div>
                {/* <StudentAvatar /> */}
                <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                  Kerene Wright
                </h1>
                <p className="text-purple-200">
                  Software Engineer • AI/ML
                </p>
                <div className="flex items-center gap-2 mt-1 text-purple-300">
                  <MapPin size={16} />
                  <span>Miami, FL</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Badge>Full-Stack</Badge>
                  <Badge color="bg-amber-500/80">Software Development</Badge>
                  <Badge color="bg-emerald-600/80">AI/ML</Badge>
                </div>
              </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:wright.kerenel@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 text-white px-4 py-2 border border-purple-300/20"
              >
                <Mail size={18} /> Email
              </a>
              <a
                href="https://www.linkedin.com/in/kerene-wright-985581182/"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 text-white px-4 py-2 border border-purple-300/20"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
              <a
                href="https://github.com/KLAW4life"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 text-white px-4 py-2 border border-purple-300/20"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href="files/Master_Resume.pdf" 
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-teal-600/80 hover:bg-teal-600 text-white px-4 py-2"
              >
                <FileText size={18} /> Resume
              </a>
            </div>
          </div>
        </div>

        {/* Two-column: Education / Clubs */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-purple-300/20">
            <h2 className="text-2xl font-bold text-white mb-4">Education</h2>
            <div className="space-y-4">
              <div className="rounded-2xl p-4 bg-purple-500/10 border border-purple-300/20">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold">Florida International University</h3>
                  <span className="text-purple-300 text-sm">2024 – 2025</span>
                </div>
                <p className="text-purple-200 text-sm">
                  Masters of Science (MS) in Computer Science
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Pill>GPA: 3.8+</Pill>
                </div>
              </div>

              <div className="rounded-2xl p-4 bg-purple-500/10 border border-purple-300/20">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold">The University of the West Indies, Mona Campus</h3>
                  <span className="text-purple-300 text-sm">2020 – 2023</span>
                </div>
                <p className="text-purple-200 text-sm">
                  B.S. in Computer Science (Honors)
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Pill>GPA: 3.8</Pill>
                  <Pill color="bg-emerald-500/20">Dean’s List</Pill>
                </div>
              </div>

            </div>
          </div>

          {/* Clubs / Leadership */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-purple-300/20">
            <h2 className="text-2xl font-bold text-white mb-4">Clubs & Leadership</h2>
            <div className="space-y-4">
              <div className="rounded-2xl p-4 bg-purple-500/10 border border-purple-300/20">
                <div className="flex items-center justify-between">
                  <a
                    href="https://www.weareinit.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline"
                  >
                    <Pill style={{ backgroundColor: "#FFDE21", color: "#000", cursor: "pointer" }}>
                      INIT
                    </Pill>
                  </a>
                  <span className="text-purple-300 text-sm">Build Program Manager</span>
                </div>
                <p className="text-purple-200 text-sm">
                  Leading a large-scale student development initiative, coordinating the formation of 12+ high-impact project teams through strategic planning and resource management.
                </p>
              </div>
              <div className="rounded-2xl p-4 bg-purple-500/10 border border-purple-300/20">
                <div className="flex items-center justify-between">
                  {/* <h3 className="text-white font-semibold">WiCS</h3> */}
                  <a
                    href="https://wicsfiu.github.io/witcon-2025/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline"
                  >
                    <Pill style={{ backgroundColor: "#b81fe6ff", color: "#000", cursor: "pointer" }}>
                      WiCS
                    </Pill>
                  </a>
                  <span className="text-purple-300 text-sm">Member</span>
                </div>
                <p className="text-purple-200 text-sm">
                  Active member of the Women in Computer Science (WiCS) club, promoting gender diversity in tech.
                </p>
              </div>
            
            </div>
          </div>
        </div>

        {/* Projects / Highlights */}
        {/* <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-purple-300/20">
          <h2 className="text-2xl font-bold text-white mb-4">Highlights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl p-4 bg-purple-500/10 border border-purple-300/20">
              <h3 className="text-white font-semibold mb-1">Resume Analyzer</h3>
              <p className="text-purple-300 text-sm">LLM-based scoring with weighted criteria.</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Pill>React</Pill><Pill>Flask</Pill><Pill>TensorFlow</Pill>
              </div>
            </div>
            <div className="rounded-2xl p-4 bg-purple-500/10 border border-purple-300/20">
              <h3 className="text-white font-semibold mb-1">GreenifyMe</h3>
              <p className="text-purple-300 text-sm">AI micro-climate analysis for urban heat.</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Pill>Python</Pill><Pill>Streamlit</Pill><Pill>LSTM</Pill>
              </div>
            </div>
            <div className="rounded-2xl p-4 bg-purple-500/10 border border-purple-300/20">
              <h3 className="text-white font-semibold mb-1">Signifi</h3>
              <p className="text-purple-300 text-sm">Brand + full-stack prototype in progress.</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Pill>Design</Pill><Pill>Frontend</Pill>
              </div>
            </div>
          </div>
        </div> */}

        {/* Contact / Footer card */}
        {/* <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-purple-300/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">Let’s connect</h2>
              <p className="text-purple-200">Open to internships, research, and collabs.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:you@email.com"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 text-white px-4 py-2 border border-purple-300/20"
              >
                <Mail size={18} /> Email
              </a>
              <a
                href="https://www.linkedin.com/in/your-handle"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 text-white px-4 py-2 border border-purple-300/20"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
              <a
                href="https://github.com/YourUsername"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 text-white px-4 py-2 border border-purple-300/20"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href="/files/Resume.pdf"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-teal-600/80 hover:bg-teal-600 text-white px-4 py-2"
              >
                <FileText size={18} /> Resume
              </a>
            </div>
          </div>
        </div> */}

      </div>
    </div>
  );
}
