import React, { useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  Code,
  Play,
  FileText,
  BookOpen,
  User,
  Video,
  BarChart3,
  Lightbulb,
  Quote,
  Sparkles,
  Terminal,
  Zap,
  Star,
  Coffee,
  Cpu,
  Database,
  ArrowRight,
  ArrowLeft,
  Circle,
  CheckCircle,
  Home,
  ExternalLink,
} from "lucide-react";

const PythonMGPExperience = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [completedSteps, setCompletedSteps] = useState(new Set());

  const steps = [
    {
      id: "intro",
      title: "Python: The Bridge",
      subtitle: "From Beginner to AI Pioneer",
      icon: Home,
      gradient: "from-violet-600 via-purple-600 to-indigo-600",
      accentColor: "violet",
      description: "Welcome to an exploration of Python's remarkable journey",
    },
    {
      id: "dear-reader",
      title: "Dear Reader",
      subtitle: "A Personal Journey",
      icon: Quote,
      gradient: "from-blue-600 via-cyan-600 to-teal-600",
      accentColor: "cyan",
      description: "My introduction to the world of Python programming",
    },
    {
      id: "info-essay",
      title: "The Phenomenon",
      subtitle: "Why Python Dominates",
      icon: FileText,
      gradient: "from-emerald-600 via-green-600 to-lime-600",
      accentColor: "emerald",
      description: "Exploring Python's rise to technological prominence",
    },
    {
      id: "project-demo",
      title: "Live Demonstration",
      subtitle: "Python in Action",
      icon: Video,
      gradient: "from-red-600 via-pink-600 to-rose-600",
      accentColor: "pink",
      description: "Hands-on showcase of Python's capabilities",
    },
    {
      id: "timeline",
      title: "Evolution Timeline",
      subtitle: "Python's Journey",
      icon: BarChart3,
      gradient: "from-amber-600 via-orange-600 to-red-600",
      accentColor: "orange",
      description: "Visual journey through Python's development",
    },
    {
      id: "tutorial",
      title: "Getting Started",
      subtitle: "Learn Python",
      icon: Code,
      gradient: "from-purple-600 via-violet-600 to-pink-600",
      accentColor: "purple",
      description: "Step-by-step guide to Python mastery",
    },
    {
      id: "reflection",
      title: "Personal Insights",
      subtitle: "My Learning Journey",
      icon: User,
      gradient: "from-indigo-600 via-blue-600 to-cyan-600",
      accentColor: "blue",
      description: "Reflections on research and discovery",
    },
    {
      id: "endnotes",
      title: "Behind the Scenes",
      subtitle: "Additional Context",
      icon: Lightbulb,
      gradient: "from-yellow-600 via-amber-600 to-orange-600",
      accentColor: "yellow",
      description: "Extra insights and explanations",
    },
    {
      id: "works-cited",
      title: "Sources & References",
      subtitle: "Academic Foundation",
      icon: BookOpen,
      gradient: "from-teal-600 via-emerald-600 to-green-600",
      accentColor: "teal",
      description: "Research sources and citations",
    },
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1 && !isTransitioning) {
      setIsTransitioning(true);
      setCompletedSteps((prev) => new Set([...prev, currentStep]));
      setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const prevStep = () => {
    if (currentStep > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentStep((prev) => prev - 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const goToStep = (stepIndex) => {
    if (stepIndex !== currentStep && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentStep(stepIndex);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const currentStepData = steps[currentStep];

  const FloatingOrb = ({ delay = 0, size = "w-32 h-32", position }) => (
    <div
      className={`absolute ${size} rounded-full opacity-20 animate-pulse ${position}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div
        className={`w-full h-full bg-gradient-to-br ${currentStepData.gradient} rounded-full blur-xl`}
      ></div>
    </div>
  );

  const CodeTerminal = ({ children, title = "python_terminal.py" }) => (
    <div className="bg-gray-900/90 backdrop-blur-md rounded-2xl border border-gray-700/50 shadow-2xl">
      <div className="flex items-center gap-3 bg-gray-800/90 px-6 py-4 border-b border-gray-700/50">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-gray-400 ml-4 font-mono text-sm">{title}</span>
        <div className="ml-auto flex items-center gap-2">
          <Terminal size={16} className="text-green-400" />
        </div>
      </div>
      <div className="p-6 font-mono text-sm">{children}</div>
    </div>
  );

  const renderStepContent = () => {
    switch (currentStepData.id) {
      case "intro":
        return (
          <div className="space-y-12">
            <div className="text-center">
              <div className="mb-8">
                <div
                  className={`inline-flex items-center gap-4 bg-gradient-to-r ${currentStepData.gradient} px-8 py-4 rounded-full text-white font-bold text-lg shadow-2xl hover:scale-105 transition-transform duration-300`}
                >
                  <Sparkles className="animate-spin" size={24} />
                  Multi-Genre Project
                  <Code size={20} />
                </div>
              </div>
              <h1 className="text-7xl font-black bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-8 leading-tight">
                Python: The Language
                <br />
                That Bridges Worlds
              </h1>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
                An exploration into why Python has become the dominant force in
                AI, automation, and everyday technology, bridging the gap
                between beginner-friendly syntax and advanced applications.
              </p>

              <div className="max-w-3xl mx-auto mb-12">
                <CodeTerminal title="welcome.py">
                  <div className="text-green-400">
                    <span className="text-blue-400">{">>> "}</span>
                    <span className="text-yellow-400">print</span>
                    <span className="text-white">(</span>
                    <span className="text-green-400">
                      "Welcome to my Python journey!"
                    </span>
                    <span className="text-white">)</span>
                  </div>
                  <div className="text-green-400 mt-2">
                    Welcome to my Python journey!
                  </div>
                </CodeTerminal>
              </div>

              <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
                {[
                  {
                    icon: Terminal,
                    label: "Interactive Code",
                    desc: "Live Python demonstrations",
                  },
                  {
                    icon: Zap,
                    label: "Deep Analysis",
                    desc: "Technical insights & research",
                  },
                  {
                    icon: Star,
                    label: "Personal Journey",
                    desc: "My discovery process",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105"
                  >
                    <div
                      className={`p-4 bg-gradient-to-r ${currentStepData.gradient} rounded-2xl mb-4 mx-auto w-fit`}
                    >
                      <item.icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-white font-bold text-xl mb-2">
                      {item.label}
                    </h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "dear-reader":
        return (
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-black text-white mb-4">
                Dear Reader
              </h2>
              <p className="text-xl text-gray-300">
                A personal introduction to my journey with Python
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-12 border border-white/10 shadow-2xl">
              <div className="prose prose-xl max-w-none text-gray-300 leading-relaxed space-y-8">
                <p className="text-xl first-letter:text-6xl first-letter:font-bold first-letter:text-cyan-400 first-letter:float-left first-letter:mr-2 first-letter:mt-1">
                  When first being introduced to the extensive field of Computer
                  Science, students and beginners alike can be often deterred
                  and overwhelmed by the extensive code libraries and the ever
                  shifting "trendy language" of the day. There is never a clear
                  cut answer to which language you need to learn and how to even
                  go about it, making programming as inaccessible as ever.
                </p>

                <p className="text-xl">
                  However, Python seems to defy the trends of the industry. I
                  chose this topic because the shifts in Computer Science was
                  something that I struggled with as a beginner developer. I was
                  tired of learning basic website development at school, and
                  wanted to really specialize in something that I would pursue
                  when I am older.
                </p>

                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-400/30">
                  <p className="text-xl text-cyan-100">
                    The artificial intelligence market was booming at the time
                    and I began to realize that this was the future and I wanted
                    a piece. Through some research I discovered that Python was
                    the main language in A.I. development. I thought to myself,
                    "this can't be Python, it's only for beginners!"
                  </p>
                </div>

                <p className="text-xl">
                  My hope for you reader, is for you to grasp a better
                  understanding of programming and to realize that it is not as
                  frightening as the cryptic script seems to suggest. Whether
                  you are a seasoned programmer or not interested in Computer
                  Science, I hope you come to the realization, like I did too,
                  that the divide between advanced and beginner can be bridged
                  by Python.
                </p>
              </div>
            </div>
          </div>
        );

      case "info-essay":
        return (
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-black text-white mb-4">
                The Python Phenomenon
              </h2>
              <p className="text-xl text-gray-300">
                Understanding Python's dominance in modern technology
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-md rounded-3xl p-12 border border-white/10 shadow-2xl">
                <div className="prose prose-xl max-w-none text-gray-300 leading-relaxed space-y-6">
                  <p className="text-lg">
                    Python is a high-level programming language that has become
                    the bridge between beginner accessibility and advanced
                    technological innovation. It was created by Dutch programmer
                    Guido van Rossum in December 1989 and it was first released
                    in 1991, succeeding the ABC programming language. Python was
                    an instant hit, in an article by Charles Severance, Rossum
                    says{" "}
                    <em>
                      "I immediately started getting useful, positive feedback
                      from people who picked up Python from Usenet, and we
                      quickly got into a routine of doing new Python releases"
                    </em>{" "}
                    (Severance 2015).
                  </p>

                  <p className="text-lg">
                    Before diving into the exploration of Python's dominance in
                    fields such as AI and automation in robotics, it is very
                    essential to understand what makes Python so beginner
                    friendly. Python's English-like syntax makes it one of the
                    most accessible languages in the world. This is a result of
                    the high level of abstraction that Python utilizes.
                  </p>

                  <div className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-2xl p-8 border border-emerald-400/30">
                    <p className="text-lg text-emerald-100">
                      Before understanding abstraction, you must understand how
                      data is stored in computer code. All data is stored in
                      binary which is a collection of 1's and 0's. Abstraction
                      is the process of translating those 1's and 0's to make
                      data more understandable. In the case of Python, it
                      translates those 1's and 0's so far that the words the
                      programmers type is very understandable.
                    </p>
                  </div>

                  <p className="text-lg">
                    One of the most prominent programming resources, Geeks for
                    Geeks confirms this saying,{" "}
                    <em>
                      "A program written in high-level language contains words
                      and symbols that are easier to understand by humans"
                    </em>{" "}
                    (GeeksForGeeks.com 2015).
                  </p>

                  <p className="text-lg">
                    Python's rise to prominence in artificial intelligence and
                    machine learning stems from its simplicity and its very
                    powerful capabilities. What sets Python apart in the
                    technological landscape is its extensive ecosystem of
                    libraries. Libraries are tools that programmers can use to
                    boost their development, making developing AI and advanced
                    technologies just as accessible to beginners as they can use
                    these pre-build tools. OpenCV provides an example stating,{" "}
                    <em>
                      "instead of writing your functions for data manipulation
                      or complex calculations, you can use NumPy or Pandas to
                      handle these tasks instantly"
                    </em>{" "}
                    (OpenCV).
                  </p>
                </div>
              </div>

              <CodeTerminal title="python_power.py">
                <div className="space-y-2">
                  <div className="text-gray-500">
                    # Python's power in simplicity
                  </div>
                  <div className="text-green-400">import pandas as pd</div>
                  <div className="text-green-400">import numpy as np</div>
                  <div className="text-green-400">
                    from sklearn import machine_learning
                  </div>
                  <div className="text-white mt-4">
                    <span className="text-purple-400">def</span>{" "}
                    <span className="text-yellow-400">bridge_complexity</span>
                    ():
                  </div>
                  <div className="text-white ml-4">
                    <span className="text-blue-400">return</span>{" "}
                    <span className="text-green-400">
                      "Beginner to AI in minutes!"
                    </span>
                  </div>
                </div>
              </CodeTerminal>
            </div>
          </div>
        );

      case "project-demo":
        return (
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-black text-white mb-4">
                Python in Action
              </h2>
              <p className="text-xl text-gray-300">
                Live demonstration of Python's capabilities
              </p>
            </div>

            <div className="space-y-12">
              <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-white/10 overflow-hidden group shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-red-500/20"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mb-8 relative">
                      <Play
                        className="mx-auto text-white mb-4 group-hover:scale-110 transition-transform duration-300 cursor-pointer"
                        size={80}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                    </div>
                    <p className="text-white font-bold text-3xl mb-4">
                      Your Python Project Video
                    </p>
                    <p className="text-gray-300 text-lg">
                      Embed your video demonstration here
                    </p>

                    <div className="mt-8 max-w-md mx-auto">
                      <CodeTerminal title="project_demo.py">
                        <div className="text-green-400">
                          <span className="text-blue-400">{">>> "}</span>
                          <span className="animate-pulse">
                            python amazing_project.py
                          </span>
                        </div>
                        <div className="text-green-400 mt-2">
                          🚀 Project running...
                        </div>
                      </CodeTerminal>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h4 className="font-bold text-white mb-6 text-xl flex items-center gap-3">
                    <Star className="text-yellow-400 animate-spin" size={24} />
                    Project Highlights
                  </h4>
                  <div className="space-y-4">
                    {[
                      { label: "Language", value: "Python 3.x", icon: "🐍" },
                      {
                        label: "Libraries",
                        value: "[Your libraries]",
                        icon: "📚",
                      },
                      {
                        label: "Complexity",
                        value: "Beginner-Friendly",
                        icon: "✨",
                      },
                      {
                        label: "Purpose",
                        value: "Demonstrate Python's Bridge",
                        icon: "🌉",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-3 border-b border-white/10"
                      >
                        <span className="text-gray-400 font-medium flex items-center gap-2">
                          <span>{item.icon}</span>
                          {item.label}:
                        </span>
                        <span className="text-white">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h4 className="font-bold text-white mb-6 text-xl flex items-center gap-3">
                    <Lightbulb
                      className="text-purple-400 animate-pulse"
                      size={24}
                    />
                    Key Learnings
                  </h4>
                  <div className="space-y-4">
                    {[
                      "Python's readable syntax advantages",
                      "Library ecosystem benefits",
                      "Rapid prototyping capabilities",
                      "Real-world application insights",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 hover:scale-105 transition-transform duration-300"
                      >
                        <div
                          className={`w-2 h-2 bg-gradient-to-r ${currentStepData.gradient} rounded-full animate-pulse`}
                          style={{ animationDelay: `${index * 100}ms` }}
                        ></div>
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "timeline":
        return (
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-black text-white mb-4">
                Python's Evolution
              </h2>
              <p className="text-xl text-gray-300">
                A visual journey through Python's development
              </p>
            </div>

            <div className="space-y-16">
              {[
                {
                  year: "1991",
                  event: "Python 0.9.0 Released",
                  desc: "Guido van Rossum releases first version",
                  color: "from-red-500 to-pink-500",
                },
                {
                  year: "2000",
                  event: "Python 2.0",
                  desc: "List comprehensions and garbage collection",
                  color: "from-orange-500 to-yellow-500",
                },
                {
                  year: "2008",
                  event: "Python 3.0",
                  desc: "Major redesign, not backward compatible",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  year: "2010s",
                  event: "AI Boom",
                  desc: "Python becomes dominant in machine learning",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  year: "2020s",
                  event: "Industry Standard",
                  desc: "Python in automation, web dev, and data science",
                  color: "from-purple-500 to-indigo-500",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-12 group hover:scale-105 transition-transform duration-500"
                >
                  <div className="flex-shrink-0 w-32 text-right">
                    <div
                      className={`bg-gradient-to-r ${item.color} text-white px-6 py-3 rounded-full text-xl font-bold shadow-2xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      {item.year}
                    </div>
                  </div>
                  <div className="flex-shrink-0 relative">
                    <div
                      className={`w-8 h-8 bg-gradient-to-r ${item.color} rounded-full border-4 border-white/20 shadow-lg group-hover:scale-125 transition-transform duration-300`}
                    >
                      <div className="absolute inset-0 rounded-full animate-ping bg-white/30"></div>
                    </div>
                    {index < 4 && (
                      <div className="w-1 h-24 bg-gradient-to-b from-white/30 to-white/10 ml-3.5 mt-4"></div>
                    )}
                  </div>
                  <div className="flex-grow bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 group-hover:bg-white/10 transition-all duration-300">
                    <h3 className="font-bold text-white text-2xl mb-2">
                      {item.event}
                    </h3>
                    <p className="text-gray-300 text-lg">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "tutorial":
        return (
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-black text-white mb-4">
                Getting Started
              </h2>
              <p className="text-xl text-gray-300">
                Your step-by-step guide to Python mastery
              </p>
            </div>

            <div className="space-y-12">
              {[
                {
                  step: "01",
                  title: "Installation & Setup",
                  code: `# Download Python from python.org\npython --version\n# Verify installation`,
                  desc: "Get Python running on your system",
                },
                {
                  step: "02",
                  title: "Your First Program",
                  code: `# hello_world.py\nprint("Hello, Python World!")\n# That's it! Python in action 🐍`,
                  desc: "Experience Python's readable syntax",
                },
                {
                  step: "03",
                  title: "Working with Libraries",
                  code: `import requests\nimport pandas as pd\n\nresponse = requests.get('https://api.example.com')\ndata = pd.read_csv('data.csv')`,
                  desc: "Discover Python's extensive library ecosystem",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105"
                >
                  <div className="flex items-center gap-6 mb-6">
                    <div
                      className={`bg-gradient-to-r ${currentStepData.gradient} text-white px-6 py-3 rounded-2xl text-lg font-bold`}
                    >
                      Step {item.step}
                    </div>
                    <h3 className="text-white font-bold text-2xl">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-6 text-lg">{item.desc}</p>
                  <CodeTerminal title={`tutorial_${item.step}.py`}>
                    <pre className="text-green-400 whitespace-pre-wrap">
                      {item.code}
                    </pre>
                  </CodeTerminal>
                </div>
              ))}
            </div>
          </div>
        );

      case "reflection":
        return (
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-black text-white mb-4">
                Personal Insights
              </h2>
              <p className="text-xl text-gray-300">
                Reflections on my research and discovery journey
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-md rounded-3xl p-12 border border-white/10 shadow-2xl">
                <CodeTerminal title="reflection.py">
                  <div className="space-y-4">
                    <div className="text-gray-400">
                      # My Python Discovery Journey
                    </div>
                    <div className="text-yellow-400">class</div>{" "}
                    <div className="text-blue-400 inline">MyReflection</div>:
                    <div className="ml-4 text-gray-400">
                      # Insert your personal reflection essay here
                    </div>
                    <div className="ml-4 text-gray-400">
                      # Share challenges, insights, and growth
                    </div>
                    <div className="ml-4 text-white">
                      <span className="text-yellow-400">def</span>{" "}
                      <span className="text-blue-400">share_story</span>(self):
                    </div>
                    <div className="ml-8 text-green-400">return</div>{" "}
                    <div className="text-green-400 inline">
                      "My journey with Python..."
                    </div>
                  </div>
                </CodeTerminal>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Challenges Faced",
                    icon: "⚡",
                    color: "from-red-500 to-pink-500",
                    items: [
                      "Understanding technical concepts",
                      "Finding reliable sources",
                      "Balancing breadth vs depth",
                    ],
                  },
                  {
                    title: "Key Insights",
                    icon: "💡",
                    color: "from-green-500 to-emerald-500",
                    items: [
                      "Python's true power in simplicity",
                      "Community impact on success",
                      "Bridge between beginner and advanced",
                    ],
                  },
                  {
                    title: "Future Applications",
                    icon: "🚀",
                    color: "from-blue-500 to-cyan-500",
                    items: [
                      "Career path considerations",
                      "Project ideas to pursue",
                      "Skills to develop further",
                    ],
                  },
                ].map((section, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${section.color}/20 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:scale-105 transition-transform duration-300`}
                  >
                    <h4 className="font-bold text-white mb-6 text-xl flex items-center gap-3">
                      <span className="text-2xl">{section.icon}</span>
                      {section.title}
                    </h4>
                    <div className="space-y-4">
                      {section.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-center gap-3"
                        >
                          <div
                            className={`w-2 h-2 bg-gradient-to-r ${section.color} rounded-full animate-pulse`}
                          ></div>
                          <span className="text-gray-300 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "endnotes":
        return (
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-black text-white mb-4">
                Behind the Scenes
              </h2>
              <p className="text-xl text-gray-300">
                Additional context and insights from my research
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  num: "1",
                  title: "Research Methodology",
                  content:
                    "Explain your approach to researching Python's history and the sources you found most valuable.",
                },
                {
                  num: "2",
                  title: "Technical Concepts Simplified",
                  content:
                    "Additional explanations for complex programming concepts mentioned in your project.",
                },
                {
                  num: "3",
                  title: "Project Development Process",
                  content:
                    "Detail the challenges you faced while creating your Python demonstration project.",
                },
                {
                  num: "4",
                  title: "Industry Context",
                  content:
                    "Additional background on the programming language landscape and Python's significance.",
                },
                {
                  num: "5",
                  title: "Future Considerations",
                  content:
                    "Thoughts on Python's future evolution and potential challenges ahead.",
                },
              ].map((note, index) => (
                <div
                  key={index}
                  className="flex gap-6 group hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex-shrink-0">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${currentStepData.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      [{note.num}]
                    </div>
                  </div>
                  <div className="flex-grow bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 group-hover:bg-white/10 transition-all duration-300">
                    <h3 className="font-bold text-white mb-3 text-xl">
                      {note.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {note.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "works-cited":
        return (
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-black text-white mb-4">
                Sources & References
              </h2>
              <p className="text-xl text-gray-300">
                Academic foundation for this research project
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-md rounded-3xl p-12 border border-white/10 shadow-2xl">
                <h3 className="font-bold text-white mb-8 text-2xl flex items-center gap-3">
                  <BookOpen
                    className={`text-${currentStepData.accentColor}-400`}
                    size={32}
                  />
                  MLA Citations
                </h3>

                <div className="space-y-6">
                  {[
                    'Severance, Charles. "Guido van Rossum: The Early Years of Python." Computer, vol. 48, no. 2, 2015, pp. 7-9.',
                    'GeeksforGeeks. "High Level and Low Level Languages." GeeksforGeeks, 2015, www.geeksforgeeks.org/high-level-and-low-level-languages/.',
                    'OpenCV Team. "Introduction to Python for Computer Vision." OpenCV Documentation, opencv.org/python-tutorials/.',
                    "[Add your additional sources here in MLA format]",
                  ].map((citation, index) => (
                    <div
                      key={index}
                      className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300"
                    >
                      <p className="text-gray-300 font-mono text-sm leading-relaxed">
                        {citation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div
                  className={`bg-gradient-to-br from-${currentStepData.accentColor}-500/20 to-${currentStepData.accentColor}-600/20 backdrop-blur-md rounded-2xl p-8 border border-${currentStepData.accentColor}-400/30`}
                >
                  <h4 className="font-bold text-white mb-6 text-xl">
                    📚 Source Types
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Python.org documentation",
                      "Academic papers",
                      "Industry reports",
                      "Developer interviews",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div
                          className={`w-2 h-2 bg-gradient-to-r ${currentStepData.gradient} rounded-full animate-pulse`}
                        ></div>
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className={`bg-gradient-to-br from-${currentStepData.accentColor}-500/20 to-${currentStepData.accentColor}-600/20 backdrop-blur-md rounded-2xl p-8 border border-${currentStepData.accentColor}-400/30`}
                >
                  <h4 className="font-bold text-white mb-6 text-xl">
                    📝 Research Quality
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Peer-reviewed sources",
                      "Primary documentation",
                      "Expert interviews",
                      "Current industry data",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div
                          className={`w-2 h-2 bg-gradient-to-r ${currentStepData.gradient} rounded-full animate-pulse`}
                        ></div>
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Content not found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Dynamic background with current step colors */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div
          className={`absolute inset-0 bg-gradient-to-br ${currentStepData.gradient} opacity-10`}
        ></div>

        {/* Floating orbs */}
        <FloatingOrb delay={0} size="w-64 h-64" position="top-1/4 left-1/6" />
        <FloatingOrb
          delay={2}
          size="w-48 h-48"
          position="bottom-1/4 right-1/4"
        />
        <FloatingOrb delay={4} size="w-32 h-32" position="top-1/2 right-1/6" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgb(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>
      </div>

      {/* Header */}
      <header className="relative z-20 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              <div
                className={`p-3 bg-gradient-to-r ${currentStepData.gradient} rounded-2xl shadow-xl hover:scale-110 transition-transform duration-300`}
              >
                <Code className="text-white" size={32} />
              </div>
              <div>
                <h1 className="text-2xl font-black text-white">Python MGP</h1>
                <p className="text-gray-400 text-sm">by Rishi Suryavanshi</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <span className="text-gray-300 text-sm">
                  AP Language • Mrs. Sterbin
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="relative z-20 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400 font-medium">Progress:</span>
            <div className="flex-1 flex items-center gap-2">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center gap-2">
                  <button
                    onClick={() => goToStep(index)}
                    className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentStep
                        ? `bg-gradient-to-r ${currentStepData.gradient} scale-150 shadow-lg`
                        : completedSteps.has(index)
                        ? "bg-green-500"
                        : "bg-gray-600 hover:bg-gray-500"
                    }`}
                  >
                    {completedSteps.has(index) && (
                      <CheckCircle
                        className="absolute inset-0 text-white"
                        size={12}
                      />
                    )}
                  </button>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-8 h-0.5 ${
                        completedSteps.has(index)
                          ? "bg-green-500"
                          : "bg-gray-600"
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
            <span className="text-sm text-gray-400">
              {currentStep + 1} / {steps.length}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          {/* Step Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div
                className={`p-4 bg-gradient-to-r ${currentStepData.gradient} rounded-3xl shadow-2xl`}
              >
                <currentStepData.icon className="text-white" size={48} />
              </div>
            </div>
            <div
              className={`inline-block bg-gradient-to-r ${currentStepData.gradient} px-6 py-2 rounded-full text-white font-bold text-sm mb-4`}
            >
              Step {currentStep + 1} of {steps.length}
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
              {currentStepData.title}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {currentStepData.description}
            </p>
          </div>

          {/* Step Content */}
          <div
            className={`transition-all duration-500 ${
              isTransitioning
                ? "opacity-0 transform translate-y-8"
                : "opacity-100 transform translate-y-0"
            }`}
          >
            {renderStepContent()}
          </div>
        </div>
      </main>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex items-center gap-4 bg-black/40 backdrop-blur-md rounded-full p-4 border border-white/20 shadow-2xl">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`p-3 rounded-full transition-all duration-300 ${
              currentStep === 0
                ? "bg-gray-800 text-gray-600 cursor-not-allowed"
                : "bg-white/20 text-white hover:bg-white/30 hover:scale-110"
            }`}
          >
            <ArrowLeft size={24} />
          </button>

          <div className="flex items-center gap-3 px-6">
            <span className="text-white font-bold">
              {currentStepData.title}
            </span>
            <div
              className={`w-2 h-2 bg-gradient-to-r ${currentStepData.gradient} rounded-full animate-pulse`}
            ></div>
          </div>

          <button
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
            className={`p-3 rounded-full transition-all duration-300 ${
              currentStep === steps.length - 1
                ? "bg-gray-800 text-gray-600 cursor-not-allowed"
                : `bg-gradient-to-r ${currentStepData.gradient} text-white hover:scale-110 shadow-lg`
            }`}
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-black/20 backdrop-blur-md border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="text-center">
            <CodeTerminal title="project_complete.py">
              <div className="text-center">
                <span className="text-blue-400">{">>> "}</span>
                <span className="text-yellow-400">print</span>
                <span className="text-white">(</span>
                <span className="text-green-400">
                  "Multi-Genre Project Complete! 🐍"
                </span>
                <span className="text-white">)</span>
                <div className="text-green-400 mt-2">
                  Multi-Genre Project Complete! 🐍
                </div>
              </div>
            </CodeTerminal>
            <p className="text-gray-400 mt-6">
              "Bridging the gap between beginner-friendly syntax and advanced
              applications"
            </p>
          </div>
        </div>
      </footer>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(1deg);
          }
          66% {
            transform: translateY(-10px) rotate(-1deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default PythonMGPExperience;
