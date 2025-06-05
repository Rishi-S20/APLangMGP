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
  ArrowRight,
  Calendar,
  Package,
  GitBranch,
  Brain,
  Globe,
  TrendingUp,
  Award,
  Users,
  CheckCircle,
  Rocket,
  Calculator,
  ChevronLeft,
  Shield,
  GitCompare,
  Target,
} from "lucide-react";

const PythonMGPWebsite = () => {
  const [activeSection, setActiveSection] = useState("cover-page");
  const [typedText, setTypedText] = useState("");
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0);
  const [hoveredTimeline, setHoveredTimeline] = useState(null);

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
      id: "cover-page",
      label: "Cover Page",
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
      label: "Info Essay",
      icon: FileText,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      id: "genre-1",
      label: "Genre #1: Infographic Timeline",
      icon: BarChart3,
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      id: "genre-2",
      label: "Genre #2: Technical Showcase",
      icon: Video,
      gradient: "from-red-500 to-orange-500",
    },
    {
      id: "genre-3",
      label: "Genre #3: Code Comparison",
      icon: Code,
      gradient: "from-yellow-500 to-orange-500",
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
          : "text-gray-300 bg-white/10 backdrop-blur-sm border border-white/10"
      }`}
    >
      <div
        className={`p-2 rounded-xl transition-all duration-300 ${
          activeSection === item.id ? "bg-white/20" : "bg-white/10"
        }`}
      >
        <item.icon size={20} />
      </div>
      <span className="font-medium flex-1 text-left">{item.label}</span>
      {activeSection === item.id && (
        <div className="ml-auto transition-all duration-300">
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

  const PythonUnifier = ({ pageTitle, themeColor = "blue" }) => {
    const colorMap = {
      blue: "from-blue-500 to-cyan-500",
      green: "from-green-500 to-emerald-500",
      purple: "from-purple-500 to-violet-500",
      orange: "from-orange-500 to-red-500",
    };

    const codeSnippets = {
      "Dear Reader": [
        { line: 1, code: "# Web Development with Django/Flask" },
        { line: 2, code: "from django import views" },
        { line: 3, code: "from flask import Flask, render_template" },
        { line: 4, code: "" },
        { line: 5, code: "app = Flask(__name__)" },
        { line: 6, code: '@app.route("/welcome")' },
        { line: 7, code: 'def greet_reader(): return "Hello, Reader!"' },
      ],
      "Historical Analysis": [
        { line: 1, code: "# Data Science & Analytics" },
        { line: 2, code: "import pandas as pd" },
        { line: 3, code: "import matplotlib.pyplot as plt" },
        { line: 4, code: "" },
        { line: 5, code: 'language_data = pd.read_csv("language_trends.csv")' },
        { line: 6, code: 'python_growth = language_data["python_adoption"]' },
        { line: 7, code: "plt.plot(python_growth)  # Visualizing history" },
      ],
      "Info Essay": [
        { line: 1, code: "# Educational & Academic Tools" },
        { line: 2, code: "import research_methods" },
        { line: 3, code: "from academic_writing import citations" },
        { line: 4, code: "" },
        { line: 5, code: 'essay = research_methods.analyze_topic("python")' },
        { line: 6, code: "findings = essay.synthesize_information()" },
        { line: 7, code: "print(findings)  # Sharing knowledge" },
      ],

      Endnotes: [
        { line: 1, code: "# Documentation & Metadata" },
        { line: 2, code: "import json" },
        { line: 3, code: "from collections import OrderedDict" },
        { line: 4, code: "" },
        { line: 5, code: "references = OrderedDict()" },
        { line: 6, code: 'references["terminal_metaphor"] = "See line 1-7"' },
        { line: 7, code: 'json.dump(references, open("notes.json", "w"))' },
      ],
      "Technical Tutorial": [
        { line: 1, code: "# Machine Learning & AI" },
        { line: 2, code: "import tensorflow as tf" },
        { line: 3, code: "from sklearn import datasets, neural_network" },
        { line: 4, code: "" },
        { line: 5, code: "model = tf.keras.Sequential([" },
        { line: 6, code: '    tf.keras.layers.Dense(128, activation="relu")' },
        { line: 7, code: "])  # Building intelligence, one layer at a time" },
      ],
      "Video Essay": [
        { line: 1, code: "# Automation & Scripting" },
        { line: 2, code: "import os, subprocess" },
        { line: 3, code: "from pathlib import Path" },
        { line: 4, code: "" },
        { line: 5, code: "def automate_video_processing():" },
        { line: 6, code: '    subprocess.run(["ffmpeg", "-i", "raw.mp4"])' },
        {
          line: 7,
          code: "automate_video_processing()  # Python does the work",
        },
      ],
      "Works Cited": [
        { line: 1, code: "# Scientific Computing & Research" },
        { line: 2, code: "import numpy as np" },
        { line: 3, code: "import scipy.stats as stats" },
        { line: 4, code: "" },
        { line: 5, code: "citations = np.array(research_papers)" },
        { line: 6, code: "reliability = stats.describe(citations)" },
        {
          line: 7,
          code: 'print(f"Research validated: {len(citations)} sources")',
        },
      ],
    };

    const currentSnippet =
      codeSnippets[pageTitle] || codeSnippets["Dear Reader"];

    return (
      <div className="mb-8">
        <div className="relative bg-black/40 backdrop-blur-sm border border-green-400/30 rounded-xl p-4 shadow-xl font-mono">
          {/* Python Terminal Header */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="ml-3 text-gray-400 text-sm">
                unifying_element_{pageTitle.toLowerCase().replace(/\s+/g, "_")}
                .py
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-xs">EXECUTING</span>
            </div>
          </div>

          {/* Python Code Snippet */}
          <div className="text-sm space-y-1">
            {currentSnippet.map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-gray-500 w-4 text-right">
                  {item.line}
                </span>
                <div className="flex-1">
                  {item.code === "" ? (
                    <span>&nbsp;</span>
                  ) : item.code.startsWith("#") ? (
                    <span className="text-gray-500">{item.code}</span>
                  ) : item.code.includes("# ") ? (
                    <div className="flex items-center">
                      <span className="text-white">
                        {item.code.split(" # ")[0]}{" "}
                      </span>
                      <span className="text-gray-500"># </span>
                      <span
                        className={`text-transparent bg-gradient-to-r ${colorMap[themeColor]} bg-clip-text font-bold`}
                      >
                        {item.code.split(" # ")[1]}
                      </span>
                    </div>
                  ) : (
                    <div className="text-white">
                      {item.code
                        .split(
                          /(\bimport\b|\bfrom\b|\bdef\b|\breturn\b|@app\.route)/g
                        )
                        .map((part, i) => {
                          if (
                            [
                              "import",
                              "from",
                              "def",
                              "return",
                              "@app.route",
                            ].includes(part)
                          ) {
                            return (
                              <span key={i} className="text-purple-400">
                                {part}
                              </span>
                            );
                          }
                          return part.split(/("[^"]*")/g).map((subpart, j) => {
                            if (
                              subpart.startsWith('"') &&
                              subpart.endsWith('"')
                            ) {
                              return (
                                <span key={j} className="text-green-400">
                                  {subpart}
                                </span>
                              );
                            }
                            return subpart
                              .split(
                                /\b(Flask|pd|plt|tf|np|stats|subprocess|Path)\b/g
                              )
                              .map((finalpart, k) => {
                                if (
                                  [
                                    "Flask",
                                    "pd",
                                    "plt",
                                    "tf",
                                    "np",
                                    "stats",
                                    "subprocess",
                                    "Path",
                                  ].includes(finalpart)
                                ) {
                                  return (
                                    <span key={k} className="text-blue-400">
                                      {finalpart}
                                    </span>
                                  );
                                }
                                return finalpart
                                  .split(
                                    /\b(app|model|citations|reliability)\b/g
                                  )
                                  .map((lastpart, l) => {
                                    if (
                                      [
                                        "app",
                                        "model",
                                        "citations",
                                        "reliability",
                                      ].includes(lastpart)
                                    ) {
                                      return (
                                        <span
                                          key={l}
                                          className="text-yellow-400"
                                        >
                                          {lastpart}
                                        </span>
                                      );
                                    }
                                    return lastpart;
                                  });
                              });
                          });
                        })}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch (activeSection) {
      case "cover-page":
        return (
          <div className="space-y-12">
            <div className="text-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-3xl rounded-full"></div>
              <div className="relative">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-full mb-8 hover:scale-105 transition-transform duration-300">
                  <Sparkles className="text-purple-400" size={24} />
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

                <div className="space-y-6 max-w-4xl mx-auto text-xl text-gray-300 leading-relaxed">
                  <p className="text-center mb-8">
                    An exploration into why Python has become the dominant force
                    in AI, automation, and everyday technology, bridging the gap
                    between beginner-friendly syntax and advanced applications.
                  </p>

                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                    <h2 className="text-2xl font-bold text-white mb-4 text-center">
                      By Rishi Suryavanshi
                    </h2>
                    <p className="text-center text-lg text-gray-300">
                      AP Language & Composition
                    </p>
                    <p className="text-center text-lg text-gray-300">
                      Mrs. Sterbin
                    </p>
                    <p className="text-center text-lg text-gray-300">
                      January 2025
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-2xl rounded-3xl"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 text-center overflow-hidden">
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
            <PythonUnifier pageTitle="Dear Reader" themeColor="blue" />

            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl shadow-lg hover:scale-110 transition-transform duration-300">
                    <Quote className="text-white" size={32} />
                  </div>
                  <h2 className="text-4xl font-bold text-white">Dear Reader</h2>
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
            <PythonUnifier pageTitle="Info Essay" themeColor="green" />
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl shadow-lg hover:scale-110 transition-transform duration-300">
                    <FileText className="text-white" size={32} />
                  </div>
                  <h2 className="text-4xl font-bold text-white">
                    Informational Essay
                  </h2>
                </div>

                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 rounded-2xl p-6 mb-8">
                  <div className="flex items-center gap-3">
                    <Zap className="text-green-400 animate-bounce" size={24} />
                    <p className="text-green-300 font-semibold text-lg">
                      Python: Bridging Beginner and Advanced Programming
                    </p>
                    <Terminal className="text-green-400" size={20} />
                  </div>
                </div>

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
                      (Severance). Before diving into the exploration of
                      Python's dominance in fields such as AI and automation in
                      robotics, it is very essential to understand what makes
                      Python so beginner friendly.
                    </p>

                    <p>
                      Python's English-like syntax makes it one of the most
                      accessible languages in the world. This is a result of the
                      high level of abstraction that Python utilizes. Before
                      understanding abstraction, you must understand how data is
                      stored in computer code. All data is stored in binary
                      which is a collection of 1's and 0's. Abstraction is the
                      process of translating those 1's and 0's to make data more
                      understandable. In the case of Python, it translates those
                      1's and 0's so far that the words the programmers type is
                      very understandable. One of the most prominent programming
                      resources, GeeksforGeeks.com confirms this saying,{" "}
                      <em>
                        "A program written in high-level language contains words
                        and symbols that are easier to understand by humans"
                      </em>{" "}
                      ("What is High Level Language?")
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
                </div>
              </div>
            </div>
          </div>
        );

      case "genre-1":
        return (
          <div className="max-w-7xl mx-auto">
            <PythonUnifier pageTitle="Historical Analysis" themeColor="green" />
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl shadow-lg hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="text-white" size={32} />
                  </div>
                  <h2 className="text-4xl font-bold text-white">
                    Python Evolution Timeline
                  </h2>
                </div>

                <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border border-indigo-400/30 rounded-2xl p-8 mb-12">
                  <p className="text-indigo-200 text-lg flex items-center gap-3">
                    <Database className="text-indigo-400 animate-pulse" />A
                    comprehensive timeline of Python's development from 1989 to
                    present, showing key milestones that led to its dominance in
                    AI and data science.
                  </p>
                </div>

                {/* Interactive Timeline */}
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-indigo-500"></div>

                  <div className="space-y-16">
                    {[
                      {
                        year: "December 1989",
                        event: "Python Conceived",
                        description:
                          "Guido van Rossum began working on Python over the Christmas holidays. He wanted a language that was both simple to learn and powerful enough for real work — something that regular people, not just expert programmers, could use.",
                        icon: Calendar,
                        color: "from-red-500 to-pink-500",
                        code: "# Python is born!",
                        source: "Wikipedia - Python (programming language)",
                      },
                      {
                        year: "February 1991",
                        event: "Python 0.9.0 Released",
                        description:
                          "The first version of Python was shared publicly. It already had key features like the ability to define functions, reuse code, and catch errors without crashing. This gave developers a cleaner, more reliable way to build programs.",
                        icon: Package,
                        color: "from-orange-500 to-yellow-500",
                        code: "# First public release",
                        source: "Python Release History",
                      },
                      {
                        year: "2000",
                        event: "Python 2.0",
                        description:
                          "This update made Python smarter and more adaptable. It introduced automatic memory cleanup and better support for international text, making Python usable worldwide. It also marked the start of the Python Software Foundation.",
                        icon: Package,
                        color: "from-green-500 to-teal-500",
                        code: "# Unicode support added",
                        source: "Python 2.0 Release Notes",
                      },
                      {
                        year: "2006",
                        event: "NumPy 1.0 Released",
                        description:
                          "NumPy became the go-to tool for scientists and engineers who needed to crunch big numbers or work with data tables. It allowed people to do complex math much faster than before, making Python a serious player in scientific research.",
                        icon: Calculator,
                        color: "from-blue-500 to-purple-500",
                        code: "import numpy as np",
                        source: "NumPy Documentation",
                      },
                      {
                        year: "2007",
                        event: "Scikit-learn Started",
                        description:
                          "This marked Python's entrance into machine learning. Scikit-learn gave people simple tools to create models that could recognize patterns, make predictions, and sort information — all using beginner-friendly Python code.",
                        icon: Brain,
                        color: "from-purple-500 to-pink-500",
                        code: "from sklearn import datasets",
                        source: "Scikit-learn Documentation",
                      },
                      {
                        year: "2008",
                        event: "Python 3.0",
                        description:
                          "Python cleaned up its messy parts to prepare for the future. Some old code had to be rewritten, but Python became easier to understand, better at handling text, and more consistent overall.",
                        icon: Rocket,
                        color: "from-indigo-500 to-blue-500",
                        code: "print('Hello, Python 3!')",
                        source: "Python 3.0 Release Notes",
                      },
                      {
                        year: "2010",
                        event: "Data Science Boom Begins",
                        description:
                          "Pandas let Python work with data like spreadsheets — filtering, sorting, and analyzing huge datasets with ease. Businesses and researchers started using Python to spot trends, make decisions, and visualize information.",
                        icon: BarChart3,
                        color: "from-cyan-500 to-blue-500",
                        code: "import pandas as pd",
                        source: "Pandas Documentation",
                      },
                      {
                        year: "2015",
                        event: "TensorFlow Released",
                        description:
                          "Google released TensorFlow, a tool to build artificial intelligence models — and it ran through Python. Suddenly, anyone with a basic understanding of Python could build smart systems, from voice assistants to recommendation engines.",
                        icon: Cpu,
                        color: "from-orange-500 to-red-500",
                        code: "import tensorflow as tf",
                        source: "TensorFlow Documentation",
                      },
                      {
                        year: "2016-2017",
                        event: "PyTorch Released",
                        description:
                          "Facebook introduced PyTorch, another AI tool that was even easier to use for experiments and cutting-edge research. It let developers test ideas quickly, and because it used Python, more people could contribute to complex AI models.",
                        icon: Zap,
                        color: "from-red-500 to-orange-500",
                        code: "import torch",
                        source: "PyTorch Documentation",
                      },
                      {
                        year: "2018-2020",
                        event: "Python Dominance",
                        description:
                          "Python officially became the most popular language for data science, automation, and web development. Big companies — from Netflix to NASA — used Python to build tools, analyze data, and run systems.",
                        icon: Award,
                        color: "from-yellow-500 to-orange-500",
                        code: "# Python everywhere!",
                        source: "Stack Overflow Developer Survey",
                      },
                      {
                        year: "2024-Present",
                        event: "AI Era Leadership",
                        description:
                          "Today, Python powers some of the most advanced technology in the world — including AI tools like ChatGPT and systems in self-driving cars. Despite being over 30 years old, it's still growing because it balances beginner-friendliness with cutting-edge innovation.",
                        icon: Sparkles,
                        color: "from-purple-500 to-pink-500",
                        code: "# Future is Python",
                        source: "Current Tech Industry",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="relative flex items-start gap-8 group"
                        onMouseEnter={() => setHoveredTimeline(index)}
                        onMouseLeave={() => setHoveredTimeline(null)}
                      >
                        {/* Timeline Node */}
                        <div className="relative z-10">
                          <div
                            className={`w-24 h-24 bg-gradient-to-r ${
                              item.color
                            } rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                              hoveredTimeline === index ? "scale-125" : ""
                            }`}
                          >
                            <item.icon className="text-white" size={32} />
                          </div>
                          <div className="absolute inset-0 rounded-full bg-white/20"></div>
                        </div>

                        {/* Content */}
                        <div
                          className={`flex-1 transition-all duration-300 ${
                            hoveredTimeline === index ? "scale-105" : ""
                          }`}
                        >
                          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <h3 className="text-2xl font-bold text-white mb-2">
                                  {item.event}
                                </h3>
                                <p
                                  className={`text-lg font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                                >
                                  {item.year}
                                </p>
                              </div>
                              <PythonTerminal title="snippet.py">
                                <span className="text-green-400 text-xs">
                                  {item.code}
                                </span>
                              </PythonTerminal>
                            </div>
                            <p className="text-gray-300 mb-4">
                              {item.description}
                            </p>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                              <CheckCircle
                                size={16}
                                className="text-green-400"
                              />
                              <span>Source: {item.source}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Statistics */}
                <div className="mt-16 grid md:grid-cols-3 gap-8">
                  <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 text-center">
                    <h4 className="text-4xl font-bold text-white mb-2">35+</h4>
                    <p className="text-purple-300">Years of Development</p>
                    <p className="text-sm text-gray-400 mt-2">Since 1989</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30 text-center">
                    <h4 className="text-4xl font-bold text-white mb-2">#1</h4>
                    <p className="text-blue-300">Language for AI/ML</p>
                    <p className="text-sm text-gray-400 mt-2">
                      Industry Standard
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30 text-center">
                    <h4 className="text-4xl font-bold text-white mb-2">80%</h4>
                    <p className="text-green-300">ML Papers Use Python</p>
                    <p className="text-sm text-gray-400 mt-2">
                      Conference Statistics
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "genre-2":
        return (
          <div className="max-w-6xl mx-auto">
            <PythonUnifier pageTitle="Video Essay" themeColor="orange" />
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl shadow-lg hover:scale-110 transition-transform duration-300">
                    <Video className="text-white" size={32} />
                  </div>
                  <h2 className="text-4xl font-bold text-white">
                    Genre #2: Python Project Video
                  </h2>
                </div>

                <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-red-400/30 rounded-2xl p-8 mb-8">
                  <h3 className="font-bold text-white mb-3 text-xl flex items-center gap-3">
                    <Cpu className="text-orange-400" />
                    Project Overview: Flower Recognition AI
                  </h3>
                  <p className="text-red-200">
                    Demonstrating Python's capabilities through a
                    TensorFlow-based convolutional neural network that
                    classifies different flower species. This project showcases
                    Python's dominance in machine learning and its accessible
                    syntax for complex AI applications.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10 overflow-hidden group">
                    <iframe
                      className="relative z-10 w-full h-full rounded-2xl"
                      src="https://drive.google.com/file/d/18DNtydlo25zMJn9sx-G8sznaSW5LB3MG/preview"
                      allow="autoplay"
                      allowFullScreen
                      title="Flower Recognition with CNN"
                    />
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                      <h4 className="font-bold text-white mb-6 text-xl flex items-center gap-3">
                        <Star className="text-yellow-400" size={24} />
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
                            value: "TensorFlow, Keras, NumPy, Pandas",
                            icon: "📚",
                          },
                          {
                            label: "Model Type",
                            value: "Convolutional Neural Network (CNN)",
                            icon: "🧠",
                          },
                          {
                            label: "Dataset",
                            value: "14 Flower Categories",
                            icon: "🌸",
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

                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                      <h4 className="font-bold text-white mb-6 text-xl flex items-center gap-3">
                        <Lightbulb className="text-purple-400" size={24} />
                        Key Learnings
                      </h4>
                      <div className="space-y-4">
                        {[
                          "Python's readable syntax for complex neural networks",
                          "TensorFlow's high-level API accessibility",
                          "Data augmentation techniques in Keras",
                          "Transfer learning possibilities with Python",
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                            <span className="text-gray-300">{item}</span>
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

      // ...existing code...

      case "genre-3":
        return (
          <div className="max-w-7xl mx-auto">
            <PythonUnifier pageTitle="Technical Tutorial" themeColor="purple" />
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl shadow-lg hover:scale-110 transition-transform duration-300">
                    <Code className="text-white" size={32} />
                  </div>
                  <h2 className="text-4xl font-bold text-white">
                    Python vs Java: A Friendly Comparison
                  </h2>
                </div>

                <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-2xl p-8 mb-12">
                  <p className="text-emerald-200 text-lg flex items-center gap-3">
                    <Users className="text-emerald-400 animate-pulse" />
                    Understanding the differences between Python and Java - two
                    of the world's most popular programming languages, explained
                    in simple terms.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                  {/* Python Column */}
                  <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-blue-500 rounded-xl">
                        <Zap className="text-white" size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Python</h3>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle
                          className="text-green-400 mt-1"
                          size={20}
                        />
                        <div>
                          <h4 className="text-white font-semibold">
                            Simple & Readable
                          </h4>
                          <p className="text-gray-300 text-sm">
                            Code looks almost like plain English, making it easy
                            for beginners to learn and understand.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle
                          className="text-green-400 mt-1"
                          size={20}
                        />
                        <div>
                          <h4 className="text-white font-semibold">
                            Quick Development
                          </h4>
                          <p className="text-gray-300 text-sm">
                            You can build things faster with fewer lines of code
                            - like writing a short story instead of a novel.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle
                          className="text-green-400 mt-1"
                          size={20}
                        />
                        <div>
                          <h4 className="text-white font-semibold">
                            AI & Data Science King
                          </h4>
                          <p className="text-gray-300 text-sm">
                            The go-to language for artificial intelligence,
                            machine learning, and analyzing big data.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle
                          className="text-green-400 mt-1"
                          size={20}
                        />
                        <div>
                          <h4 className="text-white font-semibold">
                            Flexible & Versatile
                          </h4>
                          <p className="text-gray-300 text-sm">
                            Works great for websites, desktop apps, automation
                            scripts, and scientific research.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Java Column */}
                  <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-400/30 rounded-2xl p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-orange-500 rounded-xl">
                        <Shield className="text-white" size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Java</h3>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle
                          className="text-green-400 mt-1"
                          size={20}
                        />
                        <div>
                          <h4 className="text-white font-semibold">
                            Rock Solid & Reliable
                          </h4>
                          <p className="text-gray-300 text-sm">
                            Built for stability and security - like a fortress
                            that protects your applications.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle
                          className="text-green-400 mt-1"
                          size={20}
                        />
                        <div>
                          <h4 className="text-white font-semibold">
                            Enterprise Favorite
                          </h4>
                          <p className="text-gray-300 text-sm">
                            Big companies love Java for building large-scale
                            business applications that handle millions of users.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle
                          className="text-green-400 mt-1"
                          size={20}
                        />
                        <div>
                          <h4 className="text-white font-semibold">
                            Cross-Platform Champion
                          </h4>
                          <p className="text-gray-300 text-sm">
                            "Write once, run anywhere" - your code works on
                            Windows, Mac, Linux without changes.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle
                          className="text-green-400 mt-1"
                          size={20}
                        />
                        <div>
                          <h4 className="text-white font-semibold">
                            High Performance
                          </h4>
                          <p className="text-gray-300 text-sm">
                            Runs fast and efficiently, especially for large
                            applications that need to handle heavy workloads.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-slate-500/20 to-gray-500/20 backdrop-blur-sm border border-slate-400/30 rounded-2xl p-8 mb-8">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Code className="text-slate-400" />
                    See The Difference: Same Task, Different Styles
                  </h3>

                  <p className="text-gray-300 mb-6 text-center">
                    Let's see how both languages would write a simple program
                    that says "Hello" to someone 5 times:
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Python Example */}
                    <div className="bg-blue-500/10 border border-blue-400/30 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-blue-500 rounded-lg">
                          <Zap className="text-white" size={20} />
                        </div>
                        <h4 className="text-blue-300 font-bold">
                          Python Version
                        </h4>
                        <span className="text-blue-200 text-sm bg-blue-500/20 px-2 py-1 rounded">
                          3 lines
                        </span>
                      </div>

                      <div className="bg-slate-900/50 rounded-lg p-4 font-mono text-sm border border-blue-400/20">
                        <div className="text-gray-400 mb-2">
                          # Python - Simple and clean
                        </div>
                        <div className="text-blue-300">for</div>
                        <span className="text-white"> i </span>
                        <span className="text-blue-300">in</span>
                        <span className="text-white"> </span>
                        <span className="text-yellow-300">range</span>
                        <span className="text-white">(</span>
                        <span className="text-orange-300">5</span>
                        <span className="text-white">):</span>
                        <br />
                        <span className="text-white ml-4"> </span>
                        <span className="text-yellow-300">print</span>
                        <span className="text-white">(</span>
                        <span className="text-green-300">"Hello, World!"</span>
                        <span className="text-white">)</span>
                      </div>

                      <div className="mt-4 space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle className="text-green-400" size={16} />
                          <span className="text-gray-300">
                            Reads like plain English
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle className="text-green-400" size={16} />
                          <span className="text-gray-300">
                            No complex setup needed
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle className="text-green-400" size={16} />
                          <span className="text-gray-300">
                            Beginner-friendly
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Java Example */}
                    <div className="bg-orange-500/10 border border-orange-400/30 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-orange-500 rounded-lg">
                          <Shield className="text-white" size={20} />
                        </div>
                        <h4 className="text-orange-300 font-bold">
                          Java Version
                        </h4>
                        <span className="text-orange-200 text-sm bg-orange-500/20 px-2 py-1 rounded">
                          7 lines
                        </span>
                      </div>

                      <div className="bg-slate-900/50 rounded-lg p-4 font-mono text-sm border border-orange-400/20">
                        <div className="text-gray-400 mb-2">
                          // Java - More structured
                        </div>
                        <div>
                          <span className="text-blue-300">public class</span>
                          <span className="text-white"> HelloWorld </span>
                          <span className="text-white">{"{"}</span>
                        </div>
                        <div className="ml-4">
                          <span className="text-blue-300">
                            public static void
                          </span>
                          <span className="text-white">
                            {" "}
                            main(String[] args){" "}
                          </span>
                          <span className="text-white">{"{"}</span>
                        </div>
                        <div className="ml-8">
                          <span className="text-blue-300">for</span>
                          <span className="text-white"> (</span>
                          <span className="text-blue-300">int</span>
                          <span className="text-white"> i = </span>
                          <span className="text-orange-300">0</span>
                          <span className="text-white">; i {"<"} </span>
                          <span className="text-orange-300">5</span>
                          <span className="text-white">; i++) {"{"}</span>
                        </div>
                        <div className="ml-12">
                          <span className="text-white">System.out.</span>
                          <span className="text-yellow-300">println</span>
                          <span className="text-white">(</span>
                          <span className="text-green-300">
                            "Hello, World!"
                          </span>
                          <span className="text-white">);</span>
                        </div>
                        <div className="ml-8">
                          <span className="text-white">{"}"}</span>
                        </div>
                        <div className="ml-4">
                          <span className="text-white">{"}"}</span>
                        </div>
                        <div>
                          <span className="text-white">{"}"}</span>
                        </div>
                      </div>

                      <div className="mt-4 space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle className="text-green-400" size={16} />
                          <span className="text-gray-300">
                            Very explicit and clear
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle className="text-green-400" size={16} />
                          <span className="text-gray-300">
                            Catches errors early
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle className="text-green-400" size={16} />
                          <span className="text-gray-300">
                            Enterprise-ready
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-xl border border-violet-400/30">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <GitCompare className="text-violet-400" size={20} />
                      What This Shows Us:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-violet-200">
                          <span className="font-semibold text-blue-300">
                            Python:
                          </span>{" "}
                          Gets straight to the point. Like texting a friend -
                          casual and quick.
                        </p>
                      </div>
                      <div>
                        <p className="text-violet-200">
                          <span className="font-semibold text-orange-300">
                            Java:
                          </span>{" "}
                          More formal structure. Like writing a business letter
                          - proper format required.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Real World Analogy */}
                <div className="bg-gradient-to-r from-rose-500/20 to-pink-500/20 backdrop-blur-sm border border-rose-400/30 rounded-2xl p-8 mb-8">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Users className="text-rose-400" />
                    Real World Analogy
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/10 rounded-xl p-6">
                      <h4 className="text-blue-300 font-bold text-lg mb-3 flex items-center gap-2">
                        <Zap className="text-blue-400" />
                        Python is like a Swiss Army Knife
                      </h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Compact and versatile</li>
                        <li>• Easy to carry and use anywhere</li>
                        <li>• Perfect for quick fixes and daily tasks</li>
                        <li>• Great for beginners and experts alike</li>
                        <li>• Can handle most common problems</li>
                      </ul>
                    </div>

                    <div className="bg-white/10 rounded-xl p-6">
                      <h4 className="text-orange-300 font-bold text-lg mb-3 flex items-center gap-2">
                        <Shield className="text-orange-400" />
                        Java is like a Professional Toolbox
                      </h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Heavy-duty and built to last</li>
                        <li>• Each tool has a specific purpose</li>
                        <li>• Perfect for big construction projects</li>
                        <li>• Requires more skill but very powerful</li>
                        <li>• Trusted by professional contractors</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Key Differences Section */}
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-8 mb-8">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <GitCompare className="text-purple-400" />
                    Key Differences Explained Simply
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-xl p-4">
                        <h4 className="text-white font-semibold mb-2">
                          Learning Curve
                        </h4>
                        <p className="text-gray-300 text-sm">
                          <span className="text-blue-400 font-semibold">
                            Python:
                          </span>{" "}
                          Like learning to ride a bike - easier to start
                        </p>
                        <p className="text-gray-300 text-sm">
                          <span className="text-orange-400 font-semibold">
                            Java:
                          </span>{" "}
                          Like learning to drive a car - more rules but more
                          powerful
                        </p>
                      </div>

                      <div className="bg-white/10 rounded-xl p-4">
                        <h4 className="text-white font-semibold mb-2">
                          Writing Code
                        </h4>
                        <p className="text-gray-300 text-sm">
                          <span className="text-blue-400 font-semibold">
                            Python:
                          </span>{" "}
                          Few lines, like writing a text message
                        </p>
                        <p className="text-gray-300 text-sm">
                          <span className="text-orange-400 font-semibold">
                            Java:
                          </span>{" "}
                          More lines, like writing a formal letter
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-xl p-4">
                        <h4 className="text-white font-semibold mb-2">
                          Best Used For
                        </h4>
                        <p className="text-gray-300 text-sm">
                          <span className="text-blue-400 font-semibold">
                            Python:
                          </span>{" "}
                          Data analysis, AI, quick prototypes, automation
                        </p>
                        <p className="text-gray-300 text-sm">
                          <span className="text-orange-400 font-semibold">
                            Java:
                          </span>{" "}
                          Large business apps, Android apps, web services
                        </p>
                      </div>

                      <div className="bg-white/10 rounded-xl p-4">
                        <h4 className="text-white font-semibold mb-2">
                          Job Market
                        </h4>
                        <p className="text-gray-300 text-sm">
                          <span className="text-blue-400 font-semibold">
                            Python:
                          </span>{" "}
                          Hot in AI, data science, startups
                        </p>
                        <p className="text-gray-300 text-sm">
                          <span className="text-orange-400 font-semibold">
                            Java:
                          </span>{" "}
                          Strong in corporations, banks, large tech companies
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Which Should You Choose */}
                <div className="bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 backdrop-blur-sm border border-indigo-400/30 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Target className="text-indigo-400" />
                    Which Should You Choose?
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-400/30">
                      <h4 className="text-blue-300 font-bold text-lg mb-3">
                        Choose Python If:
                      </h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-center gap-2">
                          <ArrowRight className="text-blue-400" size={16} />
                          You're new to programming
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowRight className="text-blue-400" size={16} />
                          You want to work with AI or data
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowRight className="text-blue-400" size={16} />
                          You need to build something quickly
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowRight className="text-blue-400" size={16} />
                          You prefer simpler, cleaner code
                        </li>
                      </ul>
                    </div>

                    <div className="bg-orange-500/20 rounded-xl p-6 border border-orange-400/30">
                      <h4 className="text-orange-300 font-bold text-lg mb-3">
                        Choose Java If:
                      </h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-center gap-2">
                          <ArrowRight className="text-orange-400" size={16} />
                          You want to work in big companies
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowRight className="text-orange-400" size={16} />
                          You're building large, complex systems
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowRight className="text-orange-400" size={16} />
                          You want maximum performance
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowRight className="text-orange-400" size={16} />
                          You like structure and strict rules
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl border border-emerald-400/30">
                    <p className="text-emerald-200 text-center">
                      <strong>Pro Tip:</strong> Both languages are excellent
                      choices! Many successful developers know both. Start with
                      one that matches your immediate goals, then learn the
                      other later.
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
            <PythonUnifier pageTitle="Endnotes" themeColor="purple" />
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/10 to-teal-600/10"></div>

              <div className="relative z-10">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                    <FileText className="text-purple-400" />
                    End Notes
                  </h2>
                  <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                    A detailed reflection on my design choices, creative
                    process, and the intentional decisions behind each component
                    of this project.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        [1]
                      </div>
                    </div>
                    <div className="flex-grow bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                      <h3 className="font-bold text-white mb-3 text-xl">
                        Homepage Design Philosophy
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        For the homepage, I wanted to capture the vibe of a
                        futuristic tech magazine or a sleek tool you'd find on a
                        modern startup's site. I did this because I am very
                        inspired by the tech startup scene and Python was a
                        literal product of that so I heavily gained inspiration
                        from this niche. I leaned into a clean, glowing look
                        with lots of gradients, soft animations, and that
                        super-smooth, sterile font that basically every tech
                        company uses these days. The goal was to reflect how
                        Python bridges the gap between beginner and advanced, so
                        I designed the site to feel approachable but still
                        powerful, kind of like Python itself. I added mock code
                        terminals and a live typing effect to give it the real
                        programming feel. The floating elements and subtle
                        animations were meant to make the page feel alive,
                        almost like the site was actively thinking.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        [2]
                      </div>
                    </div>
                    <div className="flex-grow bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                      <h3 className="font-bold text-white mb-3 text-xl">
                        Dear Reader
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        This section was meant to feel like a personal letter,
                        not just explaining the topic but why it mattered to me.
                        I struggled when starting programming because everyone
                        saying to learn something new every other day and I
                        never felt really connected to one thing in programming.
                        Python was the first time I felt connected to one of my
                        interests in programming and that personal connection
                        helped shape this entire project. I highlighted this
                        specifically with a personal anecdote on my process of
                        being a programmer in the piece.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        [3]
                      </div>
                    </div>
                    <div className="flex-grow bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                      <h3 className="font-bold text-white mb-3 text-xl">
                        Informational Essay
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        The essay boiled down some complex ideas about
                        programming into more digestible explanations. The
                        section about abstraction took me the longest time, as I
                        felt I was being overtly complicated with my wording.
                        This was something that I struggled with a lot
                        throughout this project as I knew concepts personally
                        but translating it to basic terms for nontechnical
                        people was a challenge. I leaned heavily on sources to
                        help break these big ideas down into something a non
                        coder would understand.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        [4]
                      </div>
                    </div>
                    <div className="flex-grow bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                      <h3 className="font-bold text-white mb-3 text-xl">
                        Genre 1 - Interactive Timeline
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        For this genre I knew I wanted something interactive and
                        visual and a timeline made the most sense. I needed
                        exact information as I wasn't certain about the history
                        of Python so I pulled from official python documentation
                        and real release notes to trace Python's growth over
                        time. More importantly I had to translate every
                        technical update into a reason as to why it mattered for
                        real people. For example, instead of saying "Python 2.0
                        added garbage collection," I explained what that means
                        for developers. The hover effect and icon animations
                        made the experience feel more alive, just like you were
                        walking through python's history.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        [5]
                      </div>
                    </div>
                    <div className="flex-grow bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                      <h3 className="font-bold text-white mb-3 text-xl">
                        Genre 2 - Technical Tutorial
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        This genre was definitely the hardest for me because it
                        forced me to face the challenge of "dumbing it down."
                        The AI model behind this project was something I had
                        already worked really hard on before, and I was super
                        familiar with the code — it all made sense to me. But
                        for the video, I had to revisit that code, clean it up,
                        and make it presentable for the camera. I chose this
                        project because it perfectly shows off Python's range —
                        the same language that beginners use to print "Hello
                        World" can also power neural networks. What really
                        tested me, though, was the editing process. I ran into
                        all kinds of issues with audio and getting my special
                        recording software to actually work. I chose that
                        specific software because it zooms into my cursor so
                        smoothly — it's the same one a lot of tech companies use
                        for their app demos.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        [6]
                      </div>
                    </div>
                    <div className="flex-grow bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                      <h3 className="font-bold text-white mb-3 text-xl">
                        Genre 3 - Code Comparison
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        This one was fun. I compared Python and Java by making
                        each language do the same simple task: print "Hello"
                        five times. I structured it like a friendly debate,
                        showing Python as the quick, readable underdog and Java
                        as the heavyweight large language. I added an analogy of
                        a Swiss Army knife vs a professional toolbox because
                        that's how they feel to me personally.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        [7]
                      </div>
                    </div>
                    <div className="flex-grow bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                      <h3 className="font-bold text-white mb-3 text-xl">
                        Unifiying Elements
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        The main thought process of the unifying element was to
                        show the different use cases of Python. Every single
                        unifying element is a real code snippet I wrote for the
                        many ways you can use Python. For example, I have a
                        snippet about data analysis and how Python is used for
                        that and in the snippet I put real actionable code with
                        real imports. I love how clean it came out on the first
                        try too.
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
            <PythonUnifier pageTitle="Works Cited" themeColor="blue" />
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-lg hover:scale-110 transition-transform duration-300">
                    <BookOpen className="text-white" size={32} />
                  </div>
                  <h2 className="text-4xl font-bold text-white">Works Cited</h2>
                </div>

                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 mb-8">
                  <div className="flex items-center gap-3">
                    <Quote className="text-blue-400" size={24} />
                    <p className="text-blue-300 font-semibold text-lg">
                      MLA9 Cited using Purdue OWL
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-300">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-lg leading-relaxed">
                      "API Documentation : Tensorflow V2.16.1."{" "}
                      <em>TensorFlow</em>, www.tensorflow.org/api_docs. Accessed
                      4 June 2025.
                    </p>
                  </div>

                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-lg leading-relaxed">
                      "Foreword for 'Programming Python' (1st Ed.)."{" "}
                      <em>Python.Org</em>, www.python.org/doc/essays/foreword/.
                      Accessed 4 June 2025.
                    </p>
                  </div>

                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-lg leading-relaxed">
                      "History of Python." <em>GeeksforGeeks</em>,
                      GeeksforGeeks, 2 Jan. 2025,
                      www.geeksforgeeks.org/history-of-python.
                    </p>
                  </div>

                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-lg leading-relaxed">
                      <em>IEEE Xplore Full-Text PDF:</em>,
                      ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8993698.
                      Accessed 5 June 2025.
                    </p>
                  </div>

                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-lg leading-relaxed">
                      "Learn: Machine Learning in Python - Scikit-Learn 0.16.1
                      Documentation." <em>Scikit</em>, scikit-learn.org/.
                      Accessed 4 June 2025.
                    </p>
                  </div>

                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-lg leading-relaxed">
                      Sandeep. "Top Python Libraries: A Comprehensive Guide."{" "}
                      <em>OpenCV</em>, 5 Mar. 2025,
                      opencv.org/blog/top-python-libraries/.
                    </p>
                  </div>

                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-lg leading-relaxed">
                      "What Is High Level Language?" <em>GeeksforGeeks</em>,
                      GeeksforGeeks, 7 June 2024,
                      www.geeksforgeeks.org/what-is-high-level-language/.
                    </p>
                  </div>

                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-lg leading-relaxed">
                      "What Is Python? Executive Summary." <em>Python.Org</em>,
                      www.python.org/doc/essays/blurb/. Accessed 4 June 2025.
                    </p>
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
      {/* Background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-1/6 left-1/6 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-2/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/6 left-1/3 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Floating Python code elements */}
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
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
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
          <div className="w-80 flex-shrink-0 hidden lg:block">
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
                "Multi-Genre Project • AP Language & Composition • January 2025"
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
