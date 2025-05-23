// src/components/JobRecommendationBanner.tsx
import React, { useState, useRef } from "react";
import { X } from "lucide-react";

export interface Category {
  name: string;
  slug: string;
}

const categories: Category[] = [
  { name: "Information Technology", slug: "information-technology" },
  {
    name: "Client Support & Administration",
    slug: "client-support-administration",
  },
  { name: "Accounting & Finance", slug: "accounting-finance" },
  { name: "Human Resources", slug: "human-resources" },
  { name: "Program & Project Management", slug: "program-project-management" },
  { name: "Sales", slug: "sales" },
  { name: "Internal Services & Security", slug: "internal-services-security" },
  { name: "Marketing & Communications", slug: "marketing-communications" },
];

const totalSteps = 5;

interface Props {
  onClose?: () => void;
}

const JobRecommendationBanner: React.FC<Props> = ({ onClose }) => {
  const [selectedPath, setSelectedPath] = useState<
    "resume" | "questions" | null
  >(null);

  // Resume state
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Wizard state
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState<Category[]>([]);
  const [jobTitle, setJobTitle] = useState("");
  const [justStarting, setJustStarting] = useState(false);
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState<
    "0-3" | "4-8" | "9-14" | "15+" | ""
  >("");
  const [location, setLocation] = useState("");

  const handleClose = () => {
    onClose?.();
    setSelectedPath(null);
    setSelectedFile(null);
    setStep(1);
    setSelections([]);
    setJobTitle("");
    setJustStarting(false);
    setSkills("");
    setExperience("");
    setLocation("");
  };

  const handleResumeClick = () => {
    setSelectedPath("resume");
    fileInputRef.current?.click();
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.type !== "application/pdf") {
      alert("Please upload PDF");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert("Max 5MB");
      return;
    }
    setSelectedFile(file);
  };

  const handleSelect = (cat: Category) => {
    setSelections((prev) =>
      prev.some((c) => c.slug === cat.slug)
        ? prev.filter((c) => c.slug !== cat.slug)
        : [...prev, cat]
    );
  };

  const handleNext = () => {
    // step-specific validation
    if (step === 1 && selections.length === 0) return;
    if (step === 2 && !justStarting && !jobTitle.trim()) return;
    if (step === 3 && !skills.trim()) return;
    if (step === 4 && !experience) return;
    if (step === 5 && !location.trim()) return;

    if (step < totalSteps) {
      setStep(step + 1);
      // clear only those you want fresh each step:
      if (step === 1) setSelections([]);
      if (step === 2) {
        /* keep jobTitle/justStarting */
      }
      if (step === 3) setSkills("");
      if (step === 4) setExperience("");
    } else {
      console.log({
        interests: selections,
        jobTitle,
        justStarting,
        skills,
        experience,
        location,
      });
      // TODO: submit or navigate
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
    else setSelectedPath(null);
  };

  // Render
  return (
    <div className="relative max-w-2xl mx-auto p-6 bg-[#f9faf9] rounded-lg shadow-lg">
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100"
        aria-label="Close"
      >
        <X className="h-6 w-6 text-gray-500 hover:text-gray-800" />
      </button>

      {selectedPath === "questions" ? (
        <>
          <div className="flex justify-between mb-6">
            <button
              onClick={handleBack}
              className="text-gray-500 hover:text-gray-800"
            >
              ← Back
            </button>
            <br />
            <br />
            <br />
            <button
              onClick={() => {
                if (step < totalSteps) {
                  setStep(step + 1);
                } else {
                  // You may optionally handle the final submission logic here
                  console.log({
                    interests: selections,
                    jobTitle,
                    justStarting,
                    skills,
                    experience,
                    location,
                  });
                }
              }}
              className="text-gray-500 hover:text-gray-800"
            >
              Skip
            </button>
          </div>

          {/* Titles */}
          {step === 1 && (
            <h2 className="text-3xl font-semibold text-center text-[#06b49d] mb-8">
              What are you interested in?
            </h2>
          )}
          {step === 2 && (
            <h2 className="text-3xl font-semibold text-center text-[#06b49d] mb-8">
              What is your most recent job title?
            </h2>
          )}
          {step === 3 && (
            <h2 className="text-3xl font-semibold text-center text-[#06b49d] mb-8">
              Tell us what you’re really good at.
            </h2>
          )}
          {step === 4 && (
            <h2 className="text-3xl font-semibold text-center text-[#06b49d] mb-8">
              How experienced are you?
            </h2>
          )}
          {step === 5 && (
            <h2 className="text-3xl font-semibold text-center text-[#06b49d] mb-8">
              What is your preferred location?
            </h2>
          )}

          {/* Step 1 */}
          {step === 1 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8 max-h-64 overflow-y-auto">
              {categories.map((cat) => {
                const active = selections.some((c) => c.slug === cat.slug);
                return (
                  <button
                    key={cat.slug}
                    onClick={() => handleSelect(cat)}
                    className={`px-4 py-2 rounded-lg border transition ${
                      active
                        ? "bg-[#06b49d] text-white border-[#06b49d]"
                        : "bg-white text-gray-800 border-gray-300 hover:border-[#06b49d]"
                    }`}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="space-y-4 mb-8">
              <label className="block text-gray-700 font-medium">
                Your job title
                <input
                  type="text"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  placeholder="Your most recent job title"
                  className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </label>
              <label className="inline-flex items-center text-gray-700">
                <input
                  type="checkbox"
                  checked={justStarting}
                  onChange={(e) => setJustStarting(e.target.checked)}
                  className="mr-2"
                />
                Just starting my career
              </label>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="space-y-4 mb-8">
              <label className="block text-gray-700 font-medium">
                Your skills
                <input
                  type="text"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  placeholder="Your skills"
                  className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </label>
            </div>
          )}

          {/* Step 4 */}
          {step === 4 && (
            <div className="flex justify-center gap-4 mb-8">
              {(["0-3", "4-8", "9-14", "15+"] as const).map((range) => (
                <button
                  key={range}
                  onClick={() => setExperience(range)}
                  className={`px-6 py-8 rounded-lg border transition w-24 text-center ${
                    experience === range
                      ? "bg-[#06b49d] text-white border-[#06b49d]"
                      : "bg-white text-gray-800 border-gray-300 hover:border-[#06b49d]"
                  }`}
                >
                  <div className="text-xl">{range}</div>
                  <div className="text-sm text-gray-600">Years</div>
                </button>
              ))}
            </div>
          )}

          {/* Step 5 */}
          {step === 5 && (
            <div className="space-y-4 mb-8">
              <label className="block text-gray-700 font-medium">
                Your preferred location
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Your preferred work location"
                  className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </label>
            </div>
          )}

          {/* Next/Finish */}
          <div className="text-center mb-4">
            <button
              onClick={handleNext}
              disabled={
                (step === 1 && selections.length === 0) ||
                (step === 2 && !justStarting && !jobTitle.trim()) ||
                (step === 3 && !skills.trim()) ||
                (step === 4 && !experience) ||
                (step === 5 && !location.trim())
              }
              className={`px-6 py-3 rounded-lg text-white font-medium transition ${
                (step === 1 && selections.length > 0) ||
                (step === 2 && (justStarting || jobTitle.trim())) ||
                (step === 3 && skills.trim()) ||
                (step === 4 && experience) ||
                (step === 5 && location.trim())
                  ? "bg-[#06b49d] hover:bg-teal-600"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              {step < totalSteps ? "Next" : "Finish"}
            </button>
          </div>

          {/* Progress */}
          <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#06b49d] transition-all"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
          <div className="text-center text-sm text-gray-500 mt-1">
            Step {step} of {totalSteps}
          </div>
        </>
      ) : (
        // Resume vs Questions selector
        <>
          <h2 className="text-2xl font-bold text-center mb-4">
            Choose your path!
          </h2>
          <p className="text-center mb-6">
            Either use your resume or tell us a little about yourself.
          </p>

          <div className="flex items-center justify-center gap-4 mb-6">
            <input
              ref={fileInputRef}
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              className="hidden"
            />
            <button
              onClick={handleResumeClick}
              className={`px-6 py-3 rounded-lg font-medium border-2 transition-colors ${
                selectedPath === "resume"
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              Use My Resume
            </button>
            <span className="text-gray-400">or</span>
            <button
              onClick={() => {
                setSelectedPath("questions");
                setStep(1);
                setSelections([]);
              }}
              className={`px-6 py-3 rounded-lg font-medium border-2 transition-colors ${
                selectedPath === "questions"
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              Answer Questions
            </button>
          </div>

          {selectedFile && (
            <div className="text-center mb-4">
              <p className="text-green-600">
                Selected file: {selectedFile.name}
              </p>
            </div>
          )}

          {selectedPath === "resume" && selectedFile && (
            <div className="text-center">
              <button
                onClick={() => console.log("Uploading:", selectedFile)}
                className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
              >
                Submit Resume
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default JobRecommendationBanner;
