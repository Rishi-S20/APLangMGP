import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Code,
  Play,
  FileText,
  BookOpen,
  ExternalLink,
  Home,
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
} from "lucide-react";

const PythonMGPWebsite = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [typedText, setTypedText] = useState("");
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0);

  const pythonSnippets = [
    "import this",
    'print("Hello, World!")',
    "def python_rocks():",
    "    return True",
    "for i in range(10):",
    '    print(f"Python {i}")',
    "import pandas as pd",
    "import numpy as np",
    "from sklearn import *",
    "async def ai_future():",
    "    await revolution()",
    "lambda x: x**2",
    "list(map(str.upper, words))",
    "[x for x in range(100)]",
    'with open("data.csv") as f:',
    "class PythonMagic:",
    'if __name__ == "__main__":',
    "pip install awesome",
  ];

  const floatingElements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    code: pythonSnippets[i % pythonSnippets.length],
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 15 + Math.random() * 5,
  }));

  useEffect(() => {
    const codeToType = pythonSnippets[currentCodeIndex];
    let currentIndex = 0;

    const typeInterval = setInterval(() => {
      if (currentIndex <= codeToType.length) {
        setTypedText(codeToType.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentCodeIndex((prev) => (prev + 1) % pythonSnippets.length);
          setTypedText("");
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentCodeIndex]);

  const navigationItems = [
    {
      id: "home",
      label: "Home",
      icon: Home,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: "dear-reader",
      label: "Dear Reader",
      icon: Quote,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: "info-essay",
      label: "Informational Essay",
      icon: FileText,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      id: "python-project",
      label: "Python Project Video",
      icon: Video,
      gradient: "from-red-500 to-orange-500",
    },
    {
      id: "timeline",
      label: "Python Timeline",
      icon: BarChart3,
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      id: "tutorial",
      label: "Technical Tutorial",
      icon: Code,
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      id: "reflection",
      label: "Personal Reflection",
      icon: User,
      gradient: "from-pink-500 to-rose-500",
    },
    {
      id: "endnotes",
      label: "End Notes",
      icon: Lightbulb,
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      id: "works-cited",
      label: "Works Cited",
      icon: BookOpen,
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  const NavButton = ({ item }) => (
    <button
      onClick={() => setActiveSection(item.id)}
      className={`group relative flex items-center gap-3 w-full p-4 rounded-2xl transition-all duration-300 ${
        activeSection === item.id
          ? `bg-gradient-to-r ${item.gradient} text-white shadow-lg`
          : "text-gray-300 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20"
      }`}
    >
      <div
        className={`p-2 rounded-xl transition-all duration-300 ${
          activeSection === item.id
            ? "bg-white/20"
            : "bg-white/10 group-hover:bg-white/20"
        }`}
      >
        <item.icon size={20} />
      </div>
      <span className="font-medium">{item.label}</span>
      {activeSection === item.id && (
        <div className="ml-auto">
          <ChevronRight size={16} className="animate-pulse" />
        </div>
      )}
    </button>
  );

  const FloatingCodeElement = ({ element }) => (
    <div
      className="absolute text-green-400/30 font-mono text-sm pointer-events-none select-none"
      style={{
        left: `${element.x}%`,
        top: `${element.y}%`,
        animation: `float ${element.duration}s ease-in-out infinite`,
        animationDelay: `${element.delay}s`,
      }}
    >
      {element.code}
    </div>
  );

  const PythonTerminal = ({ children, title = "python_terminal.py" }) => (
    <div className="bg-gray-900/90 backdrop-blur-sm rounded-xl border border-green-500/30 overflow-hidden">
      <div className="flex items-center gap-2 bg-gray-800/90 px-4 py-3 border-b border-green-500/30">
        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-75"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-150"></div>
        <span className="text-gray-400 ml-4 font-mono text-sm">{title}</span>
        <div className="ml-auto flex items-center gap-2">
          <Terminal size={16} className="text-green-400" />
          <span className="text-green-400 text-xs">● LIVE</span>
        </div>
      </div>
      <div className="p-6 font-mono text-sm">{children}</div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return (
          <div className="space-y-12">
            <div className="text-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-3xl rounded-full"></div>
              <div className="relative">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-full mb-8 hover:scale-105 transition-transform duration-300">
                  <Sparkles
                    className="text-purple-400 animate-spin"
                    size={24}
                  />
                  <span className="text-purple-200 font-semibold text-lg">
                    Multi-Genre Project
                  </span>
                  <Code className="text-pink-400" size={20} />
                </div>
                <h1 className="text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6 leading-tight">
                  Python: The Language That
                  <br />
                  Bridges Worlds
                </h1>

                {/* Interactive Python Terminal Display */}
                <div className="max-w-2xl mx-auto mb-8">
                  <PythonTerminal title="live_demo.py">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400">{">>> "}</span>
                      <span className="text-green-400">{typedText}</span>
                      <span className="animate-blink text-white">|</span>
                    </div>
                  </PythonTerminal>
                </div>

                <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                  An exploration into why Python has become the dominant force
                  in AI, automation, and everyday technology, bridging the gap
                  between beginner-friendly syntax and advanced applications.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {navigationItems.slice(1).map((item, index) => (
                <div
                  key={item.id}
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 transition-all duration-300 cursor-pointer hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-purple-500/10"
                  onClick={() => setActiveSection(item.id)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`p-4 bg-gradient-to-r ${item.gradient} rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105`}
                      >
                        <item.icon className="text-white" size={28} />
                      </div>
                      <h3 className="font-bold text-white text-xl transition-colors duration-300 group-hover:text-purple-300">
                        {item.label}
                      </h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                      {item.id === "dear-reader" &&
                        "Personal introduction and project motivation"}
                      {item.id === "info-essay" &&
                        "Essential information about Python's dominance"}
                      {item.id === "python-project" &&
                        "Hands-on demonstration of Python capabilities"}
                      {item.id === "timeline" &&
                        "Visual journey through Python's evolution"}
                      {item.id === "tutorial" &&
                        "Step-by-step guide to Python development"}
                      {item.id === "reflection" &&
                        "Personal insights from the research journey"}
                      {item.id === "endnotes" &&
                        "Additional context and explanations"}
                      {item.id === "works-cited" &&
                        "Sources and references used in research"}
                    </p>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ChevronRight className="text-purple-400" size={20} />
                  </div>

                  {/* Python code decoration */}
                  <div className="absolute top-3 right-3 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                    <Code className="text-green-400" size={14} />
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-2xl rounded-3xl"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 text-center overflow-hidden">
                {/* Python logo pattern background */}
                <div className="absolute inset-0 opacity-5">
                  <div className="grid grid-cols-8 gap-8 rotate-12 scale-150">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <div
                        key={i}
                        className="text-6xl text-green-400 animate-pulse"
                        style={{ animationDelay: `${i * 200}ms` }}
                      >
                        {"{ }"}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="p-6 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-3xl backdrop-blur-sm border border-green-400/30">
                      <Terminal className="text-6xl text-green-400 animate-pulse" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Project Overview
                  </h2>
                  <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
                    This multi-genre project explores Python's journey from a
                    beginner-friendly language to the backbone of modern AI and
                    automation. Through various formats—essays, videos,
                    timelines, and tutorials—we'll uncover why Python has defied
                    industry trends and become the lingua franca of advanced
                    development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case "dear-reader":
        return (
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 shadow-2xl overflow-hidden">
              {/* Python syntax background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="font-mono text-xs text-green-400 p-4 leading-loose">
                  {pythonSnippets.map((snippet, i) => (
                    <div
                      key={i}
                      className="animate-pulse"
                      style={{ animationDelay: `${i * 500}ms` }}
                    >
                      {snippet}
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl shadow-lg hover:rotate-3 transition-transform duration-300">
                    <Quote className="text-white" size={32} />
                  </div>
                  <h2 className="text-4xl font-bold text-white">Dear Reader</h2>
                  <PythonTerminal title="dear_reader.py">
                    <span className="text-blue-400">{">>> "}</span>
                    <span className="text-yellow-400">print</span>
                    <span className="text-white">(</span>
                    <span className="text-green-400">
                      "Welcome to my journey!"
                    </span>
                    <span className="text-white">)</span>
                  </PythonTerminal>
                </div>

                <div className="prose prose-xl max-w-none text-gray-300 leading-relaxed space-y-8">
                  <p className="text-xl">
                    When first being introduced to the extensive field of
                    Computer Science, students and beginners alike can be often
                    deterred and overwhelmed by the extensive code libraries and
                    the ever shifting "trendy language" of the day. There is
                    never a clear cut answer to which language you need to learn
                    and how to even go about it, making programming as
                    inaccessible as ever. Never seems to stand the test of time,
                    however, Python seems to defy the trends of the industry.
                  </p>

                  <p className="text-xl">
                    I chose this topic because the shifts in Computer Science
                    was something that I struggled with as a beginner developer.
                    I was tired of learning basic website development at school,
                    and wanted to really specialize in something that I would
                    pursue when I am older. The artificial intelligence market
                    was booming at the time and I began to realize that this was
                    the future and I wanted a piece. Through some research I
                    discovered that Python was the main language in A.I.
                    development. I thought to myself, "this can't be Python,
                    it's only for beginners!" Through this research, I want to
                    come to a clearer understand as to why Python, a easy
                    beginner language, is the lingua franca for the most
                    advanced development systems in the world.
                  </p>

                  <p className="text-xl">
                    My hope for you reader, is for you to grasp a better
                    understanding of programming and to realize that it is not
                    as frightening as the cryptic script seems to suggest.
                    Whether you are a seasoned programmer or not interested in
                    Computer Science, I hope you come to the realization, like I
                    did too, that the divide between advanced and beginner can
                    be bridged by Python.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case "info-essay":
        return (
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 shadow-2xl overflow-hidden">
              {/* Python import statements as background */}
              <div className="absolute inset-0 opacity-10 font-mono text-green-400 text-xs">
                <div className="p-8 space-y-2">
                  {[
                    "import pandas as pd",
                    "import numpy as np",
                    "from sklearn import *",
                    "import tensorflow as tf",
                    "import matplotlib.pyplot as plt",
                  ].map((imp, i) => (
                    <div
                      key={i}
                      className="animate-pulse"
                      style={{ animationDelay: `${i * 200}ms` }}
                    >
                      {imp}
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl shadow-lg hover:rotate-3 transition-transform duration-300">
                    <FileText className="text-white" size={32} />
                  </div>
                  <h2 className="text-4xl font-bold text-white">
                    The Python Phenomenon
                  </h2>
                </div>

                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 rounded-2xl p-6 mb-8">
                  <div className="flex items-center gap-3">
                    <Zap className="text-green-400 animate-bounce" size={24} />
                    <p className="text-green-300 font-semibold text-lg">
                      Informational Essay (250-350 words) • 3+ Cited Sources
                      Required
                    </p>
                    <Terminal className="text-green-400" size={20} />
                  </div>
                </div>

                <PythonTerminal title="informational_essay.py">
                  <div className="space-y-4">
                    <div className="text-gray-400">
                      # Your comprehensive essay about Python's dominance
                    </div>
                    <div className="text-yellow-400">def</div>{" "}
                    <div className="text-blue-400 inline">
                      explain_python_success
                    </div>
                    <div className="text-white inline">():</div>
                    <div className="ml-4 text-gray-400">
                      # Insert your 250-350 word essay here
                    </div>
                    <div className="ml-4 text-gray-400">
                      # Remember to cite at least 3 sources
                    </div>
                    <div className="ml-4 text-green-400">return</div>{" "}
                    <div className="text-green-400 inline">
                      "Python bridges complexity!"
                    </div>
                  </div>
                </PythonTerminal>

                <div className="prose prose-xl max-w-none text-gray-300 space-y-6">
                  <div className="text-lg leading-relaxed space-y-6">
                    <p>
                      Python is a high-level programming language that has
                      become the bridge between beginner accessibility and
                      advanced technological innovation. It was created by Dutch
                      programmer Guido van Rossum in December 1989 and it was
                      first released in 1991, succeeding the ABC programming
                      language. Python was an instant hit, in an article by
                      Charles Severance, Rossum says{" "}
                      <em>
                        "I immediately started getting useful, positive feedback
                        from people who picked up Python from Usenet, and we
                        quickly got into a routine of doing new Python releases"
                      </em>{" "}
                      (Severance 2015).
                    </p>

                    <p>
                      Before diving into the exploration of Python's dominance
                      in fields such as AI and automation in robotics, it is
                      very essential to understand what makes Python so beginner
                      friendly. Python's English-like syntax makes it one of the
                      most accessible languages in the world. This is a result
                      of the high level of abstraction that Python utilizes.
                      Before understanding abstraction, you must understand how
                      data is stored in computer code. All data is stored in
                      binary which is a collection of 1's and 0's. Abstraction
                      is the process of translating those 1's and 0's to make
                      data more understandable. In the case of Python, it
                      translates those 1's and 0's so far that the words the
                      programmers type is very understandable. One of the most
                      prominent programming resources, Geeks for Geeks confirms
                      this saying,{" "}
                      <em>
                        "A program written in high-level language contains words
                        and symbols that are easier to understand by humans"
                      </em>{" "}
                      (GeeksForGeeks.com 2015).
                    </p>

                    <p>
                      Python's rise to prominence in artificial intelligence and
                      machine learning stems from its simplicity and its very
                      powerful capabilities. Python is mostly recognized as a
                      pretty slow language, due to its levels of abstraction.
                      However, what makes Python special and applicable in
                      advanced technologies is its power. Its use of
                      object-oriented programming makes it ideal for efficient
                      data categorization, which is particularly essential for
                      machine learning processes.
                    </p>

                    <p>
                      What sets Python apart in the technological landscape is
                      its extensive ecosystem of libraries. Libraries are tools
                      that programmers can use to boost their development,
                      making developing AI and advanced technologies just as
                      accessible to beginners as they can use these pre-build
                      tools. OpenCV provides an example stating,{" "}
                      <em>
                        "instead of writing your functions for data manipulation
                        or complex calculations, you can use NumPy or Pandas to
                        handle these tasks instantly"
                      </em>{" "}
                      (OpenCV).
                    </p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 mt-8">
                    <h4 className="font-bold text-white mb-4 text-xl flex items-center gap-3">
                      <Code className="text-green-400" />
                      Essay Structure Reminder:
                    </h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-gray-300 hover:text-purple-300 transition-colors duration-300">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
                          <span>
                            Introduction: Hook readers with Python's paradox
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300 hover:text-blue-300 transition-colors duration-300">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse delay-75"></div>
                          <span>
                            Body: Explain technical reasons for Python's success
                          </span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-gray-300 hover:text-green-300 transition-colors duration-300">
                          <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse delay-150"></div>
                          <span>
                            Body: Real-world applications and case studies
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300 hover:text-yellow-300 transition-colors duration-300">
                          <div className="w-2 h-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full animate-pulse delay-300"></div>
                          <span>Conclusion: Python's future in technology</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "python-project":
        return (
          <div className="max-w-6xl mx-auto">
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 shadow-2xl overflow-hidden">
              {/* Animated code particles */}
              <div className="absolute inset-0">
                {floatingElements.slice(0, 6).map((element) => (
                  <FloatingCodeElement key={element.id} element={element} />
                ))}
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl shadow-lg hover:rotate-3 transition-transform duration-300">
                    <Video className="text-white" size={32} />
                  </div>
                  <h2 className="text-4xl font-bold text-white">
                    Python Project Demonstration
                  </h2>
                  <div className="ml-auto">
                    <div className="flex items-center gap-2 bg-red-500/20 px-4 py-2 rounded-full border border-red-400/30">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-red-300 text-sm">RECORDING</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-red-400/30 rounded-2xl p-8 mb-8">
                  <h3 className="font-bold text-white mb-3 text-xl flex items-center gap-3">
                    <Cpu className="text-orange-400 animate-spin" />
                    Project Overview
                  </h3>
                  <p className="text-red-200">
                    A hands-on demonstration of Python's capabilities through a
                    practical project that showcases why the language excels in
                    real-world applications.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10 overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"></div>

                    {/* Video controls simulation */}
                    <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center gap-4">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <div className="flex-1 h-1 bg-white/20 rounded-full">
                          <div className="w-1/3 h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                        </div>
                        <span className="text-white text-sm">2:34 / 7:42</span>
                      </div>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="mb-6 relative">
                          <Play
                            className="mx-auto text-white mb-4 group-hover:scale-110 transition-transform duration-300 cursor-pointer"
                            size={64}
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                        </div>
                        <p className="text-white font-bold text-2xl mb-2">
                          Your Python Project Video
                        </p>
                        <p className="text-gray-400">
                          Embed your video demonstration here
                        </p>

                        {/* Simulated terminal in video */}
                        <div className="mt-8 max-w-md mx-auto">
                          <PythonTerminal title="project_demo.py">
                            <div className="text-green-400">
                              <span className="text-blue-400">{">>> "}</span>
                              <span className="animate-pulse">
                                python amazing_project.py
                              </span>
                            </div>
                          </PythonTerminal>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <h4 className="font-bold text-white mb-6 text-xl flex items-center gap-3">
                        <Star
                          className="text-yellow-400 animate-spin"
                          size={24}
                        />
                        Project Details
                      </h4>
                      <div className="space-y-4">
                        {[
                          {
                            label: "Language",
                            value: "Python 3.x",
                            icon: "🐍",
                          },
                          {
                            label: "Libraries Used",
                            value: "[Your libraries here]",
                            icon: "📚",
                          },
                          {
                            label: "Duration",
                            value: "[Project timeline]",
                            icon: "⏱️",
                          },
                          {
                            label: "Complexity",
                            value: "Beginner to Intermediate",
                            icon: "📈",
                          },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="flex justify-between items-center py-3 border-b border-white/10 hover:border-purple-400/30 transition-colors duration-300"
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

                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
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
                              className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"
                              style={{ animationDelay: `${index * 100}ms` }}
                            ></div>
                            <span className="text-gray-300">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <PythonTerminal title="code_highlights.py">
                    <div className="space-y-2">
                      <div className="text-gray-500">
                        # Your key code snippets here
                      </div>
                      <div className="text-green-400">
                        import{" "}
                        <span className="text-blue-400">library_name</span>
                      </div>
                      <div className="text-white">
                        <span className="text-purple-400">def</span>{" "}
                        <span className="text-yellow-400">main_function</span>
                        ():
                      </div>
                      <div className="text-gray-500 ml-4">
                        # Demonstrate Python's simplicity
                      </div>
                      <div className="text-white ml-4">
                        <span className="text-blue-400">print</span>(
                        <span className="text-green-400">
                          "Python bridges complexity!"
                        </span>
                        )
                      </div>
                      <div className="text-white">
                        <span className="text-purple-400">if</span>{" "}
                        <span className="text-blue-400">__name__</span> =={" "}
                        <span className="text-green-400">"__main__"</span>:
                      </div>
                      <div className="text-white ml-4">
                        <span className="text-yellow-400">main_function</span>()
                      </div>
                    </div>
                  </PythonTerminal>
                </div>
              </div>
            </div>
          </div>
        );

      case "timeline":
        return (
          <div className="max-w-6xl mx-auto">
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 shadow-2xl overflow-hidden">
              {/* Python version numbers floating */}
              <div className="absolute inset-0 opacity-10">
                {["1.0", "2.0", "2.7", "3.0", "3.6", "3.9", "3.11"].map(
                  (version, i) => (
                    <div
                      key={i}
                      className="absolute text-4xl font-bold text-green-400 animate-float"
                      style={{
                        left: `${10 + i * 12}%`,
                        top: `${20 + (i % 3) * 20}%`,
                        animationDelay: `${i * 0.5}s`,
                      }}
                    >
                      v{version}
                    </div>
                  )
                )}
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl shadow-lg hover:rotate-3 transition-transform duration-300">
                    <BarChart3 className="text-white" size={32} />
                  </div>
                  <h2 className="text-4xl font-bold text-white">
                    Python Evolution Timeline
                  </h2>
                  <div className="ml-auto">
                    <PythonTerminal title="timeline.py">
                      <span className="text-blue-400">{">>> "}</span>
                      <span className="text-yellow-400">import</span>
                      <span className="text-white"> </span>
                      <span className="text-green-400">history</span>
                    </PythonTerminal>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border border-indigo-400/30 rounded-2xl p-8 mb-12">
                  <p className="text-indigo-200 text-lg flex items-center gap-3">
                    <Database className="text-indigo-400 animate-pulse" />A
                    visual journey through Python's development from Guido van
                    Rossum's creation to becoming the backbone of modern AI and
                    automation.
                  </p>
                </div>

                <div className="space-y-12">
                  {[
                    {
                      year: "1991",
                      event: "Python 0.9.0 Released",
                      description: "Guido van Rossum releases first version",
                      color: "from-red-500 to-pink-500",
                      code: "print('Hello World!')",
                    },
                    {
                      year: "2000",
                      event: "Python 2.0",
                      description:
                        "Introduction of list comprehensions and garbage collection",
                      color: "from-orange-500 to-yellow-500",
                      code: "[x for x in range(10)]",
                    },
                    {
                      year: "2008",
                      event: "Python 3.0",
                      description: "Major redesign, not backward compatible",
                      color: "from-green-500 to-emerald-500",
                      code: "print('Python 3!')",
                    },
                    {
                      year: "2010s",
                      event: "AI Boom",
                      description:
                        "Python becomes dominant in machine learning",
                      color: "from-blue-500 to-cyan-500",
                      code: "import tensorflow as tf",
                    },
                    {
                      year: "2020s",
                      event: "Industry Standard",
                      description:
                        "Python in automation, web dev, and data science",
                      color: "from-purple-500 to-indigo-500",
                      code: "async def future():",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-8 items-center group hover:scale-105 transition-transform duration-300"
                    >
                      <div className="flex-shrink-0 w-24 text-right">
                        <div
                          className={`bg-gradient-to-r ${item.color} text-white px-4 py-2 rounded-full text-lg font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 relative`}
                        >
                          {item.year}
                          <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>
                      <div className="flex-shrink-0 relative">
                        <div
                          className={`w-6 h-6 bg-gradient-to-r ${item.color} rounded-full border-4 border-white/20 shadow-lg group-hover:scale-125 transition-transform duration-300 relative`}
                        >
                          <div className="absolute inset-0 rounded-full animate-ping bg-white/30"></div>
                        </div>
                        {index < 4 && (
                          <div className="w-1 h-20 bg-gradient-to-b from-white/30 to-white/10 ml-2.5 mt-4"></div>
                        )}
                      </div>
                      <div className="flex-grow bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 group-hover:bg-white/10 transition-all duration-300 relative overflow-hidden">
                        {/* Code snippet background */}
                        <div className="absolute top-2 right-4 opacity-20 font-mono text-xs text-green-400">
                          {item.code}
                        </div>
                        <h3 className="font-bold text-white text-xl mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                          {item.event}
                        </h3>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                  <p className="text-gray-300 italic text-center text-lg">
                    💡{" "}
                    <strong className="text-white">
                      Your infographic timeline content goes here:
                    </strong>{" "}
                    Create a visual representation of Python's journey,
                    highlighting key moments that led to its current dominance
                    in AI and automation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case "tutorial":
        return (
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 shadow-2xl overflow-hidden">
              {/* Tutorial code snippets floating */}
              <div className="absolute inset-0 opacity-10">
                {["def", "class", "import", "for", "if", "while"].map(
                  (keyword, i) => (
                    <div
                      key={i}
                      className="absolute text-2xl font-mono text-purple-400 animate-float"
                      style={{
                        left: `${15 + i * 15}%`,
                        top: `${10 + (i % 4) * 20}%`,
                        animationDelay: `${i * 0.7}s`,
                      }}
                    >
                      {keyword}
                    </div>
                  )
                )}
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl shadow-lg hover:rotate-3 transition-transform duration-300">
                    <Code className="text-white" size={32} />
                  </div>
                  <h2 className="text-4xl font-bold text-white">
                    Getting Started with Python
                  </h2>
                </div>

                <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6 mb-8">
                  <div className="flex items-center gap-3">
                    <Terminal
                      className="text-yellow-400 animate-bounce"
                      size={24}
                    />
                    <p className="text-yellow-300 font-semibold text-lg">
                      Step-by-step tutorial demonstrating Python's accessibility
                      and power
                    </p>
                    <Coffee className="text-orange-400" size={20} />
                  </div>
                </div>

                <div className="space-y-8">
                  {[
                    {
                      step: "Step 1",
                      title: "Installation and Setup",
                      code: `# Download Python from python.org
python --version
# Verify installation`,
                      description: "Get Python running on your system",
                      gradient: "from-red-500 to-orange-500",
                    },
                    {
                      step: "Step 2",
                      title: "Your First Python Program",
                      code: `# hello_world.py
print("Hello, Python World!")
# That's it! Python in action 🐍`,
                      description:
                        "Experience Python's readable syntax with a simple but powerful example.",
                      gradient: "from-green-500 to-emerald-500",
                    },
                    {
                      step: "Step 3",
                      title: "Working with Libraries",
                      code: `import requests
import pandas as pd

response = requests.get('https://api.example.com')
data = pd.read_csv('data.csv')`,
                      description:
                        "Discover how Python's extensive library ecosystem accelerates development.",
                      gradient: "from-blue-500 to-purple-500",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 group hover:bg-white/10 transition-all duration-500 hover:scale-105"
                    >
                      <h3 className="font-bold text-white mb-4 flex items-center gap-4 text-xl">
                        <span
                          className={`bg-gradient-to-r ${item.gradient} text-white px-4 py-2 rounded-xl text-sm font-bold animate-pulse`}
                        >
                          {item.step}
                        </span>
                        {item.title}
                        <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="flex items-center gap-2 bg-green-500/20 px-3 py-1 rounded-full">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-green-400 text-xs">
                              INTERACTIVE
                            </span>
                          </div>
                        </div>
                      </h3>
                      {item.description && (
                        <p className="text-gray-300 mb-6">{item.description}</p>
                      )}
                      <PythonTerminal title={`tutorial_${index + 1}.py`}>
                        <pre className="text-green-400 whitespace-pre-wrap">
                          {item.code}
                        </pre>
                      </PythonTerminal>
                    </div>
                  ))}

                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 overflow-hidden relative">
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="grid grid-cols-6 gap-4 rotate-12 scale-150">
                        {Array.from({ length: 18 }).map((_, i) => (
                          <div
                            key={i}
                            className="text-lg text-purple-400 animate-pulse"
                            style={{ animationDelay: `${i * 100}ms` }}
                          >
                            &lt;/&gt;
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="relative z-10">
                      <h4 className="font-bold text-white mb-6 text-xl flex items-center gap-3">
                        <Sparkles className="text-purple-400 animate-spin" />
                        Tutorial Extension Ideas
                      </h4>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <h5 className="font-semibold text-purple-300 mb-3 text-lg flex items-center gap-2">
                            <span className="text-xl">🔰</span>
                            Beginner Projects:
                          </h5>
                          {[
                            "Calculator application",
                            "File organizer script",
                            "Web scraper basics",
                          ].map((item, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-3 hover:scale-105 transition-transform duration-300"
                            >
                              <div
                                className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"
                                style={{ animationDelay: `${index * 150}ms` }}
                              ></div>
                              <span className="text-purple-200">{item}</span>
                            </div>
                          ))}
                        </div>
                        <div className="space-y-4">
                          <h5 className="font-semibold text-pink-300 mb-3 text-lg flex items-center gap-2">
                            <span className="text-xl">🚀</span>
                            Advanced Applications:
                          </h5>
                          {[
                            "Machine learning model",
                            "API development",
                            "Automation scripts",
                          ].map((item, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-3 hover:scale-105 transition-transform duration-300"
                            >
                              <div
                                className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse"
                                style={{ animationDelay: `${index * 150}ms` }}
                              ></div>
                              <span className="text-pink-200">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "reflection":
        return (
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 shadow-2xl overflow-hidden">
              {/* Reflection keywords floating */}
              <div className="absolute inset-0 opacity-10">
                {[
                  "insight",
                  "growth",
                  "challenge",
                  "discovery",
                  "journey",
                  "learning",
                ].map((word, i) => (
                  <div
                    key={i}
                    className="absolute text-lg font-light text-pink-400 animate-float"
                    style={{
                      left: `${10 + i * 15}%`,
                      top: `${15 + (i % 3) * 25}%`,
                      animationDelay: `${i * 0.6}s`,
                    }}
                  >
                    {word}
                  </div>
                ))}
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-rose-500/10 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl shadow-lg hover:rotate-3 transition-transform duration-300">
                    <User className="text-white" size={32} />
                  </div>
                  <h2 className="text-4xl font-bold text-white">
                    Personal Reflection
                  </h2>
                  <div className="ml-auto">
                    <PythonTerminal title="reflection.py">
                      <span className="text-blue-400">{">>> "}</span>
                      <span className="text-yellow-400">my_journey</span>
                      <span className="text-white">.</span>
                      <span className="text-green-400">reflect()</span>
                    </PythonTerminal>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-pink-500/20 to-rose-500/20 backdrop-blur-sm border border-pink-400/30 rounded-2xl p-6 mb-8">
                  <div className="flex items-center gap-3">
                    <Sparkles
                      className="text-pink-400 animate-pulse"
                      size={24}
                    />
                    <p className="text-pink-300 font-semibold text-lg">
                      Reflection on the research process and personal insights
                      gained
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="prose prose-xl max-w-none text-gray-300">
                    <PythonTerminal title="personal_journey.py">
                      <div className="space-y-4">
                        <div className="text-gray-400">
                          # My Python Discovery Journey
                        </div>
                        <div className="text-yellow-400">class</div>{" "}
                        <div className="text-blue-400 inline">MyReflection</div>
                        :
                        <div className="ml-4 text-gray-400">
                          # Insert your personal reflection essay here
                        </div>
                        <div className="ml-4 text-gray-400">
                          # Share challenges, insights, and growth
                        </div>
                        <div className="ml-4 text-white">
                          <span className="text-yellow-400">def</span>{" "}
                          <span className="text-blue-400">share_story</span>
                          (self):
                        </div>
                        <div className="ml-8 text-green-400">return</div>{" "}
                        <div className="text-green-400 inline">
                          "My journey with Python..."
                        </div>
                      </div>
                    </PythonTerminal>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 border border-red-400/30 hover:scale-105 transition-transform duration-300">
                      <h4 className="font-bold text-red-300 mb-6 text-xl flex items-center gap-3">
                        <span className="text-2xl animate-bounce">⚡</span>
                        Challenges Faced
                      </h4>
                      <div className="space-y-4">
                        {[
                          "Understanding technical concepts",
                          "Finding reliable sources",
                          "Balancing breadth vs depth",
                          "Project implementation hurdles",
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300"
                          >
                            <div
                              className="w-2 h-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse"
                              style={{ animationDelay: `${index * 100}ms` }}
                            ></div>
                            <span className="text-red-200 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30 hover:scale-105 transition-transform duration-300">
                      <h4 className="font-bold text-green-300 mb-6 text-xl flex items-center gap-3">
                        <span className="text-2xl animate-pulse">💡</span>
                        Key Insights
                      </h4>
                      <div className="space-y-4">
                        {[
                          "Python's true power in simplicity",
                          "Community impact on language success",
                          "Bridge between beginner and advanced",
                          "Real-world application scope",
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300"
                          >
                            <div
                              className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse"
                              style={{ animationDelay: `${index * 100}ms` }}
                            ></div>
                            <span className="text-green-200 text-sm">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30 hover:scale-105 transition-transform duration-300">
                      <h4 className="font-bold text-blue-300 mb-6 text-xl flex items-center gap-3">
                        <span className="text-2xl animate-spin">🚀</span>
                        Future Applications
                      </h4>
                      <div className="space-y-4">
                        {[
                          "Career path considerations",
                          "Project ideas to pursue",
                          "Skills to develop further",
                          "Impact on CS education view",
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300"
                          >
                            <div
                              className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"
                              style={{ animationDelay: `${index * 100}ms` }}
                            ></div>
                            <span className="text-blue-200 text-sm">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
                    <h4 className="font-bold text-white mb-4 text-xl flex items-center gap-3">
                      <Database className="text-purple-400 animate-pulse" />
                      Research Process Reflection
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      Document your research methodology, source evaluation
                      process, and how your understanding evolved from initial
                      assumptions to final conclusions. What surprised you most
                      about Python's role in modern technology?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "endnotes":
        return (
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 shadow-2xl overflow-hidden">
              {/* Floating annotation symbols */}
              <div className="absolute inset-0 opacity-10">
                {["[1]", "[2]", "[3]", "[4]", "[5]", "※", "⚠", "💡"].map(
                  (symbol, i) => (
                    <div
                      key={i}
                      className="absolute text-2xl font-bold text-cyan-400 animate-float"
                      style={{
                        left: `${5 + i * 12}%`,
                        top: `${10 + (i % 4) * 20}%`,
                        animationDelay: `${i * 0.4}s`,
                      }}
                    >
                      {symbol}
                    </div>
                  )
                )}
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl shadow-lg hover:rotate-3 transition-transform duration-300">
                    <Lightbulb className="text-white" size={32} />
                  </div>
                  <h2 className="text-4xl font-bold text-white">End Notes</h2>
                  <div className="ml-auto">
                    <PythonTerminal title="endnotes.py">
                      <span className="text-blue-400">{">>> "}</span>
                      <span className="text-yellow-400">help</span>
                      <span className="text-white">(</span>
                      <span className="text-green-400">project</span>
                      <span className="text-white">)</span>
                    </PythonTerminal>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-6 mb-8">
                  <div className="flex items-center gap-3">
                    <Lightbulb
                      className="text-cyan-400 animate-pulse"
                      size={24}
                    />
                    <p className="text-cyan-300 font-semibold text-lg">
                      Additional context, explanations, and behind-the-scenes
                      insights
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  {[
                    {
                      number: "1",
                      title: "Research Methodology",
                      content:
                        "Explain your approach to researching Python's history, the sources you found most valuable, and any limitations you encountered in your research process.",
                      gradient: "from-red-500 to-orange-500",
                    },
                    {
                      number: "2",
                      title: "Technical Concepts Simplified",
                      content:
                        "Provide additional explanations for complex programming concepts mentioned in your project that general audiences might need clarification on.",
                      gradient: "from-green-500 to-emerald-500",
                    },
                    {
                      number: "3",
                      title: "Project Development Process",
                      content:
                        "Detail the challenges you faced while creating your Python demonstration project, including any debugging stories or learning moments.",
                      gradient: "from-blue-500 to-purple-500",
                    },
                    {
                      number: "4",
                      title: "Industry Context",
                      content:
                        "Additional background on the programming language landscape and why Python's rise is particularly significant in the current tech environment.",
                      gradient: "from-purple-500 to-pink-500",
                    },
                    {
                      number: "5",
                      title: "Future Considerations",
                      content:
                        "Thoughts on Python's future evolution, potential challenges, and emerging competitors in the programming language space.",
                      gradient: "from-yellow-500 to-orange-500",
                    },
                  ].map((note, index) => (
                    <div
                      key={index}
                      className="flex gap-6 group hover:scale-105 transition-transform duration-300"
                    >
                      <div className="flex-shrink-0">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${note.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300 relative`}
                        >
                          [{note.number}]
                          <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>
                      <div className="flex-grow bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 group-hover:bg-white/10 transition-all duration-300 relative overflow-hidden">
                        {/* Python comment syntax decoration */}
                        <div className="absolute top-2 right-4 opacity-20 font-mono text-xs text-green-400">
                          # Note {note.number}
                        </div>
                        <h3 className="font-bold text-white mb-3 text-xl group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
                          {note.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {note.content}
                        </p>
                      </div>
                    </div>
                  ))}

                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 mt-12 relative overflow-hidden">
                    {/* Presentation icons floating */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="grid grid-cols-8 gap-6 rotate-12 scale-150">
                        {Array.from({ length: 16 }).map((_, i) => (
                          <div
                            key={i}
                            className="text-2xl animate-pulse"
                            style={{ animationDelay: `${i * 150}ms` }}
                          >
                            🎯
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="relative z-10">
                      <h4 className="font-bold text-white mb-4 text-xl flex items-center gap-3">
                        <Star
                          className="text-yellow-400 animate-spin"
                          size={24}
                        />
                        Presentation Notes
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        Use this section to prepare for your final presentation.
                        Include key talking points, transitions between pieces,
                        and any technical demonstrations you plan to show.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "works-cited":
        return (
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 shadow-2xl overflow-hidden">
              {/* Academic symbols floating */}
              <div className="absolute inset-0 opacity-10">
                {["📚", "📖", "🔗", "📄", "🎓", "📝"].map((symbol, i) => (
                  <div
                    key={i}
                    className="absolute text-3xl animate-float"
                    style={{
                      left: `${10 + i * 15}%`,
                      top: `${20 + (i % 3) * 20}%`,
                      animationDelay: `${i * 0.8}s`,
                    }}
                  >
                    {symbol}
                  </div>
                ))}
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl shadow-lg hover:rotate-3 transition-transform duration-300">
                    <BookOpen className="text-white" size={32} />
                  </div>
                  <h2 className="text-4xl font-bold text-white">Works Cited</h2>
                  <div className="ml-auto">
                    <PythonTerminal title="citations.py">
                      <span className="text-blue-400">{">>> "}</span>
                      <span className="text-yellow-400">import</span>
                      <span className="text-white"> </span>
                      <span className="text-green-400">references</span>
                    </PythonTerminal>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-2xl p-6 mb-8">
                  <div className="flex items-center gap-3">
                    <BookOpen
                      className="text-emerald-400 animate-pulse"
                      size={24}
                    />
                    <p className="text-emerald-300 font-semibold text-lg">
                      All sources used in this multi-genre project (MLA Format)
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                    <p className="text-gray-300 mb-6">
                      <strong className="text-white">Instructions:</strong> List
                      all sources used in your research, formatted in MLA style.
                      Include web sources, interviews, documentation, books, and
                      any other materials referenced.
                    </p>

                    <div className="space-y-4">
                      {[
                        'van Rossum, Guido. "The History of Python." Python.org, Python Software Foundation, 2023, www.python.org/doc/essays/blurb/. Accessed 15 May 2025.',
                        "[Example Citation 2] - Your actual research sources go here",
                        "[Example Citation 3] - Remember to include at least 3 sources for your informational essay",
                      ].map((citation, index) => (
                        <div
                          key={index}
                          className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105 relative overflow-hidden"
                        >
                          {/* Citation number decoration */}
                          <div className="absolute top-2 right-4 opacity-30 font-mono text-xs text-emerald-400">
                            # {index + 1}
                          </div>
                          <p className="text-gray-300 font-mono text-sm leading-relaxed">
                            {citation}
                          </p>
                        </div>
                      ))}

                      <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-dashed border-white/30 hover:border-white/50 transition-colors duration-300">
                        <p className="text-gray-500 italic font-mono text-sm flex items-center gap-3">
                          <span className="text-xl">➕</span>
                          [Add additional sources as needed...]
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30 hover:scale-105 transition-transform duration-300">
                      <h4 className="font-bold text-blue-300 mb-6 text-xl flex items-center gap-3">
                        <span className="text-2xl animate-bounce">📚</span>
                        Source Types to Include
                      </h4>
                      <div className="space-y-3">
                        {[
                          "Python.org official documentation",
                          "Guido van Rossum interviews/writings",
                          "Academic papers on language adoption",
                          "Industry reports on Python usage",
                          "Company case studies",
                          "PEP (Python Enhancement Proposals)",
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300"
                          >
                            <div
                              className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"
                              style={{ animationDelay: `${index * 100}ms` }}
                            ></div>
                            <span className="text-blue-200 text-sm">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:scale-105 transition-transform duration-300">
                      <h4 className="font-bold text-purple-300 mb-6 text-xl flex items-center gap-3">
                        <span className="text-2xl animate-pulse">📝</span>
                        MLA Format Reminder
                      </h4>
                      <div className="space-y-3">
                        {[
                          "Author's Last, First Name",
                          '"Title of Article/Page"',
                          "Website Name (italics)",
                          "Publication Date",
                          "URL",
                          "Access Date",
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300"
                          >
                            <div
                              className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"
                              style={{ animationDelay: `${index * 100}ms` }}
                            ></div>
                            <span className="text-purple-200 text-sm">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Modern gradient mesh background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-1/6 left-1/6 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-2/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/6 left-1/3 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Floating Python code elements - reduced and more subtle */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        {floatingElements.slice(0, 4).map((element) => (
          <FloatingCodeElement key={element.id} element={element} />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-lg hover:scale-110 transition-transform duration-300">
                <Code className="text-white animate-pulse" size={32} />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  Python MGP
                </h1>
                <p className="text-gray-400 font-mono text-sm">
                  by Rishi Suryavanshi
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 hover:bg-white/20 transition-colors duration-300">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  AP Language • Mrs. Sterbin
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-12">
          {/* Navigation Sidebar */}
          <div className="w-80 flex-shrink-0">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/10 p-8 sticky top-8">
              <h3 className="font-bold text-white mb-6 text-xl flex items-center gap-3">
                <Terminal className="text-purple-400 animate-pulse" size={24} />
                Project Navigation
              </h3>
              <nav className="space-y-3">
                {navigationItems.map((item) => (
                  <NavButton key={item.id} item={item} />
                ))}
              </nav>

              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="text-xs text-gray-400 space-y-3">
                  <div className="flex items-center gap-2">
                    <Sparkles
                      size={16}
                      className="text-purple-400 animate-spin"
                    />
                    <span>
                      <strong>Unifying Theme:</strong> Interactive Python code
                      throughout
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Terminal size={16} className="text-green-400" />
                    <span>
                      <strong>Visual Style:</strong> Live terminal aesthetics
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Code size={16} className="text-blue-400 animate-pulse" />
                    <span>
                      <strong>Animations:</strong> Floating code & syntax
                      highlighting
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">{renderContent()}</div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-black/20 backdrop-blur-sm border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl hover:scale-110 transition-transform duration-300">
                <Terminal className="text-white animate-pulse" size={32} />
              </div>
            </div>
            <PythonTerminal title="project_complete.py">
              <span className="text-blue-400">{">>> "}</span>
              <span className="text-yellow-400">print</span>
              <span className="text-white">(</span>
              <span className="text-green-400">
                "Multi-Genre Project • AP Language & Composition • May 2025"
              </span>
              <span className="text-white">)</span>
            </PythonTerminal>
            <p className="text-gray-500 italic mt-4">
              "Bridging the gap between beginner-friendly syntax and advanced
              applications"
            </p>
          </div>
        </div>
      </footer>

      {/* CSS for custom animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-15px);
            opacity: 0.6;
          }
        }

        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </div>
  );
};

export default PythonMGPWebsite;
