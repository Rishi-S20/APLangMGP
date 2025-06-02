import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Code,
  FileText,
  BookOpen,
  ExternalLink,
  Home,
  User,
  Video,
  Clock,
  Quote,
  Lightbulb,
  Terminal,
  Star,
  ArrowUp,
  Github,
  Calendar,
  Eye,
  Download,
  ChevronDown,
  Play,
  Pause,
  RotateCcw,
  Award,
  Target,
  Zap,
  Database,
  Globe,
  Users,
  TrendingUp,
  Bot,
  Cpu,
  Layers,
  Package,
  Search,
  Filter,
} from "lucide-react";

const PythonMGPPortfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [typingText, setTypingText] = useState("");
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [timelineFilter, setTimelineFilter] = useState("all");
  const [showBackToTop, setShowBackToTop] = useState(false);

  const phrases = [
    "Python bridges complexity",
    "From beginner to AI pioneer",
    "Simplicity meets power",
    "The lingua franca of tech",
  ];

  // Comprehensive timeline data
  const timelineData = [
    {
      year: "1989",
      quarter: "Q4",
      category: "origin",
      title: "The Birth of Python",
      subtitle: "Guido van Rossum begins development",
      description:
        "Dutch programmer Guido van Rossum starts developing Python as a successor to the ABC programming language during Christmas holidays at CWI in Amsterdam.",
      impact: "Foundation",
      technologies: ["ABC Language", "C"],
      keyFeatures: ["Readability focus", "Indentation-based syntax"],
      significance: "high",
    },
    {
      year: "1991",
      quarter: "Q1",
      category: "release",
      title: "Python 0.9.0 Released",
      subtitle: "First public release to the world",
      description:
        "Python 0.9.0 is released to alt.sources newsgroup. Includes classes with inheritance, exception handling, functions, and core data types.",
      impact: "Launch",
      technologies: ["Usenet", "C"],
      keyFeatures: ["Classes", "Exception handling", "Core data types"],
      significance: "high",
    },
    {
      year: "1994",
      quarter: "Q1",
      category: "release",
      title: "Python 1.0",
      subtitle: "First major stable release",
      description:
        "Python 1.0 introduces lambda, map, filter, and reduce functions. The language gains significant traction in the programming community.",
      impact: "Maturation",
      technologies: ["Lambda calculus", "Functional programming"],
      keyFeatures: ["Lambda functions", "Map/filter/reduce", "Modules"],
      significance: "medium",
    },
    {
      year: "2000",
      quarter: "Q4",
      category: "release",
      title: "Python 2.0",
      subtitle: "Major language enhancement",
      description:
        "Introduction of list comprehensions, garbage collection, and Unicode support. Python begins to gain serious enterprise attention.",
      impact: "Enterprise Ready",
      technologies: ["Unicode", "Garbage Collection"],
      keyFeatures: [
        "List comprehensions",
        "Unicode support",
        "Garbage collection",
      ],
      significance: "high",
    },
    {
      year: "2008",
      quarter: "Q4",
      category: "release",
      title: "Python 3.0",
      subtitle: "The great modernization",
      description:
        "Python 3.0 (Python 3000) releases with breaking changes designed to remove duplicate ways of doing things and modernize the language.",
      impact: "Modernization",
      technologies: ["UTF-8", "New I/O"],
      keyFeatures: [
        "Print function",
        "New string formatting",
        "Type annotations",
      ],
      significance: "high",
    },
    {
      year: "2010",
      quarter: "Q2",
      category: "ecosystem",
      title: "NumPy & SciPy Ecosystem",
      subtitle: "Scientific computing foundation",
      description:
        "NumPy and SciPy mature, providing the foundation for Python's dominance in scientific computing and data analysis.",
      impact: "Scientific Computing",
      technologies: ["NumPy", "SciPy", "Matplotlib"],
      keyFeatures: [
        "Array computing",
        "Scientific algorithms",
        "Data visualization",
      ],
      significance: "high",
    },
    {
      year: "2012",
      quarter: "Q3",
      category: "ai",
      title: "Deep Learning Revolution",
      subtitle: "AI frameworks emerge",
      description:
        "Early deep learning frameworks like Theano gain popularity. Python becomes the preferred language for machine learning research.",
      impact: "AI Foundation",
      technologies: ["Theano", "scikit-learn"],
      keyFeatures: ["Neural networks", "GPU computing", "Research tools"],
      significance: "high",
    },
    {
      year: "2015",
      quarter: "Q4",
      category: "ai",
      title: "TensorFlow Release",
      subtitle: "Google's machine learning framework",
      description:
        "Google releases TensorFlow as open source, cementing Python's position as the language of choice for AI and machine learning.",
      impact: "AI Dominance",
      technologies: ["TensorFlow", "Google Brain"],
      keyFeatures: ["Deep learning", "Production ML", "Distributed training"],
      significance: "high",
    },
    {
      year: "2016",
      quarter: "Q2",
      category: "ai",
      title: "PyTorch & Modern AI",
      subtitle: "Facebook's dynamic framework",
      description:
        "Facebook releases PyTorch, providing dynamic neural networks. Python now dominates both research and production AI.",
      impact: "Research Leadership",
      technologies: ["PyTorch", "Dynamic graphs"],
      keyFeatures: [
        "Dynamic computation",
        "Research-friendly",
        "GPU acceleration",
      ],
      significance: "high",
    },
    {
      year: "2018",
      quarter: "Q1",
      category: "ecosystem",
      title: "Data Science Boom",
      subtitle: "Pandas, Jupyter, and the data revolution",
      description:
        "Python becomes the undisputed leader in data science with mature libraries like Pandas, Jupyter notebooks, and visualization tools.",
      impact: "Data Science Leader",
      technologies: ["Pandas", "Jupyter", "Plotly"],
      keyFeatures: [
        "Data manipulation",
        "Interactive computing",
        "Visualization",
      ],
      significance: "medium",
    },
    {
      year: "2019",
      quarter: "Q4",
      category: "automation",
      title: "Automation & DevOps",
      subtitle: "Infrastructure as code",
      description:
        "Python dominates automation, DevOps, and infrastructure management with tools like Ansible, Terraform providers, and cloud SDKs.",
      impact: "Infrastructure",
      technologies: ["Ansible", "Docker", "Kubernetes"],
      keyFeatures: [
        "Configuration management",
        "Container orchestration",
        "Cloud automation",
      ],
      significance: "medium",
    },
    {
      year: "2020",
      quarter: "Q2",
      category: "ai",
      title: "GPT & Transformer Era",
      subtitle: "Large language models revolution",
      description:
        "The transformer architecture and large language models like GPT-3 are primarily built and trained using Python frameworks.",
      impact: "AI Revolution",
      technologies: ["Transformers", "Hugging Face", "OpenAI"],
      keyFeatures: [
        "Large language models",
        "Natural language processing",
        "Few-shot learning",
      ],
      significance: "high",
    },
    {
      year: "2022",
      quarter: "Q4",
      category: "ai",
      title: "ChatGPT & AI Mainstream",
      subtitle: "AI enters mainstream consciousness",
      description:
        "ChatGPT's release demonstrates Python-built AI capabilities to the world, sparking massive interest in AI development.",
      impact: "Mainstream AI",
      technologies: ["ChatGPT", "OpenAI API", "LangChain"],
      keyFeatures: ["Conversational AI", "API integration", "AI applications"],
      significance: "high",
    },
    {
      year: "2023",
      quarter: "Q3",
      category: "ai",
      title: "Open Source AI Boom",
      subtitle: "Democratization of AI development",
      description:
        "Open source AI models and frameworks proliferate, all primarily using Python. Tools like LangChain and local model inference become accessible.",
      impact: "AI Democratization",
      technologies: ["LangChain", "Llama", "LocalAI"],
      keyFeatures: ["Local inference", "AI agents", "Custom models"],
      significance: "high",
    },
    {
      year: "2024",
      quarter: "Q4",
      category: "current",
      title: "AI-First Development",
      subtitle: "Python as the AI lingua franca",
      description:
        "Python is now the undisputed language for AI development, with every major AI framework, model, and tool built primarily in Python.",
      impact: "AI Standard",
      technologies: ["Claude", "Gemini", "GPT-4", "Multi-modal AI"],
      keyFeatures: [
        "Multi-modal AI",
        "Agent frameworks",
        "AI-first applications",
      ],
      significance: "high",
    },
    {
      year: "2025",
      quarter: "Q2",
      category: "future",
      title: "Python's Continued Evolution",
      subtitle: "Looking ahead",
      description:
        "Python continues to evolve with performance improvements, better typing, and new paradigms while maintaining its accessibility and power.",
      impact: "Future Growth",
      technologies: ["Python 3.13+", "Performance improvements", "Type safety"],
      keyFeatures: ["Performance gains", "Better typing", "Async improvements"],
      significance: "medium",
    },
  ];

  const categories = [
    { id: "all", label: "All Events", color: "bg-gray-500" },
    { id: "origin", label: "Origins", color: "bg-purple-500" },
    { id: "release", label: "Releases", color: "bg-blue-500" },
    { id: "ecosystem", label: "Ecosystem", color: "bg-green-500" },
    { id: "ai", label: "AI/ML", color: "bg-red-500" },
    { id: "automation", label: "Automation", color: "bg-yellow-500" },
    { id: "current", label: "Current", color: "bg-cyan-500" },
    { id: "future", label: "Future", color: "bg-pink-500" },
  ];

  const navigationItems = [
    { id: "home", label: "Overview", icon: Home },
    { id: "dear-reader", label: "Dear Reader", icon: Quote },
    { id: "info-essay", label: "Research Essay", icon: FileText },
    { id: "python-project", label: "Project Demo", icon: Video },
    { id: "timeline", label: "Python Evolution", icon: Clock },
    { id: "tutorial", label: "Getting Started", icon: Code },
    { id: "reflection", label: "Reflection", icon: User },
    { id: "endnotes", label: "End Notes", icon: Lightbulb },
    { id: "works-cited", label: "Sources", icon: BookOpen },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const typeText = () => {
      const phrase = phrases[currentPhrase];
      let currentIndex = 0;
      const timer = setInterval(() => {
        if (currentIndex <= phrase.length) {
          setTypingText(phrase.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(timer);
          setTimeout(() => {
            setCurrentPhrase((prev) => (prev + 1) % phrases.length);
            setTypingText("");
          }, 2000);
        }
      }, 100);
      return () => clearInterval(timer);
    };

    const timeout = setTimeout(typeText, 500);
    return () => clearTimeout(timeout);
  }, [currentPhrase]);

  const filteredTimeline =
    timelineFilter === "all"
      ? timelineData
      : timelineData.filter((item) => item.category === timelineFilter);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return (
          <div className="space-y-24">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center relative">
              <div className="max-w-6xl mx-auto text-center space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-full text-blue-700 text-sm font-medium">
                    <Award className="w-4 h-4" />
                    AP Language & Composition Multi-Genre Project
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                    Python: The Language That
                    <br />
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                      Bridges Worlds
                    </span>
                  </h1>
                  <div className="h-16 flex items-center justify-center">
                    <p className="text-xl md:text-2xl text-gray-600 font-medium">
                      {typingText}
                      <span className="animate-pulse">|</span>
                    </p>
                  </div>
                </div>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  An exploration into why Python has become the dominant force
                  in AI, automation, and everyday technology, bridging the gap
                  between beginner-friendly syntax and advanced applications.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => setActiveSection("timeline")}
                    className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors group"
                  >
                    Explore Python's Journey
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => setActiveSection("python-project")}
                    className="inline-flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors group"
                  >
                    <Play className="w-5 h-5" />
                    Watch Demo
                  </button>
                </div>
              </div>
            </section>

            {/* Quick Navigation Grid */}
            <section className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Project Components
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Explore the different aspects of this multi-genre research
                  project
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {navigationItems.slice(1).map((item, index) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className="group cursor-pointer bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-gray-300 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-gray-100 p-3 rounded-xl group-hover:bg-gray-900 transition-colors">
                        <item.icon className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {item.label}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.id === "dear-reader" &&
                            "Personal introduction and project motivation"}
                          {item.id === "info-essay" &&
                            "Essential research about Python's dominance in technology"}
                          {item.id === "python-project" &&
                            "Hands-on demonstration of Python capabilities"}
                          {item.id === "timeline" &&
                            "Interactive timeline of Python's evolution"}
                          {item.id === "tutorial" &&
                            "Beginner-friendly guide to Python development"}
                          {item.id === "reflection" &&
                            "Personal insights from the research journey"}
                          {item.id === "endnotes" &&
                            "Additional context and explanations"}
                          {item.id === "works-cited" &&
                            "Academic sources and references"}
                        </p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Insights Section */}
            <section className="bg-gray-50 py-24">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Key Research Insights
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    What makes Python the lingua franca of modern technology?
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                      <Zap className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Accessibility Meets Power
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Python's English-like syntax and high-level abstractions
                      make advanced programming concepts accessible to beginners
                      while maintaining the power needed for complex
                      applications.
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                      <Package className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Rich Ecosystem
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      An extensive library ecosystem with specialized tools for
                      AI, data science, web development, and automation makes
                      Python the go-to choice for diverse applications.
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Community-Driven Growth
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      A vibrant open-source community continuously develops new
                      tools and frameworks, ensuring Python stays at the
                      forefront of technological innovation.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );

      case "dear-reader":
        return (
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-full text-blue-700 text-sm font-medium">
                <Quote className="w-4 h-4" />
                Personal Introduction
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Dear Reader
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Why I chose to explore Python's remarkable journey from beginner
                language to AI powerhouse
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-12 shadow-sm">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-8">
                  When first being introduced to the extensive field of Computer
                  Science, students and beginners alike can be often deterred
                  and overwhelmed by the extensive code libraries and the ever
                  shifting "trendy language" of the day. There is never a clear
                  cut answer to which language you need to learn and how to even
                  go about it, making programming as inaccessible as ever. Never
                  seems to stand the test of time, however, Python seems to defy
                  the trends of the industry.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  I chose this topic because the shifts in Computer Science was
                  something that I struggled with as a beginner developer. I was
                  tired of learning basic website development at school, and
                  wanted to really specialize in something that I would pursue
                  when I am older. The artificial intelligence market was
                  booming at the time and I began to realize that this was the
                  future and I wanted a piece. Through some research I
                  discovered that Python was the main language in A.I.
                  development. I thought to myself, "this can't be Python, it's
                  only for beginners!" Through this research, I want to come to
                  a clearer understand as to why Python, a easy beginner
                  language, is the lingua franca for the most advanced
                  development systems in the world.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                  <p className="text-gray-700 leading-relaxed font-medium">
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

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                  <Target className="w-6 h-6 text-blue-600" />
                  Research Goals
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Understand Python's role in AI dominance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Explore the language's accessibility paradox</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Bridge the gap between beginner and advanced concepts
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                  <Lightbulb className="w-6 h-6 text-yellow-600" />
                  Personal Motivation
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  As a student navigating the overwhelming world of programming
                  languages, I discovered that Python's apparent simplicity
                  masks incredible depth and power—a revelation that challenged
                  my assumptions about what makes a programming language
                  "advanced."
                </p>
              </div>
            </div>
          </div>
        );

      case "info-essay":
        return (
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 px-4 py-2 rounded-full text-green-700 text-sm font-medium">
                <FileText className="w-4 h-4" />
                Research Essay • 350 Words • 3+ Sources
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                The Python Phenomenon
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                How a beginner-friendly language became the backbone of advanced
                technology
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-12 shadow-sm">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Python is a high-level programming language that has become
                  the bridge between beginner accessibility and advanced
                  technological innovation. It was created by Dutch programmer
                  Guido van Rossum in December 1989 and it was first released in
                  1991, succeeding the ABC programming language. Python was an
                  instant hit, in an article by Charles Severance, Rossum says{" "}
                  <em>
                    "I immediately started getting useful, positive feedback
                    from people who picked up Python from Usenet, and we quickly
                    got into a routine of doing new Python releases"
                  </em>{" "}
                  (Severance 2015).
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Before diving into the exploration of Python's dominance in
                  fields such as AI and automation in robotics, it is very
                  essential to understand what makes Python so beginner
                  friendly. Python's English-like syntax makes it one of the
                  most accessible languages in the world. This is a result of
                  the high level of abstraction that Python utilizes. Before
                  understanding abstraction, you must understand how data is
                  stored in computer code. All data is stored in binary which is
                  a collection of 1's and 0's. Abstraction is the process of
                  translating those 1's and 0's to make data more
                  understandable. In the case of Python, it translates those 1's
                  and 0's so far that the words the programmers type is very
                  understandable. One of the most prominent programming
                  resources, Geeks for Geeks confirms this saying,{" "}
                  <em>
                    "A program written in high-level language contains words and
                    symbols that are easier to understand by humans"
                  </em>{" "}
                  (GeeksForGeeks.com 2015).
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Python's rise to prominence in artificial intelligence and
                  machine learning stems from its simplicity and its very
                  powerful capabilities. Python is mostly recognized as a pretty
                  slow language, due to its levels of abstraction. However, what
                  makes Python special and applicable in advanced technologies
                  is its power. Its use of object-oriented programming makes it
                  ideal for efficient data categorization, which is particularly
                  essential for machine learning processes.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  What sets Python apart in the technological landscape is its
                  extensive ecosystem of libraries. Libraries are tools that
                  programmers can use to boost their development, making
                  developing AI and advanced technologies just as accessible to
                  beginners as they can use these pre-build tools. OpenCV
                  provides an example stating,{" "}
                  <em>
                    "instead of writing your functions for data manipulation or
                    complex calculations, you can use NumPy or Pandas to handle
                    these tasks instantly"
                  </em>{" "}
                  (OpenCV).
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-blue-50 rounded-2xl p-6">
                <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                  <Cpu className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  High-Level Abstraction
                </h3>
                <p className="text-gray-600 text-sm">
                  English-like syntax makes complex programming concepts
                  accessible to beginners
                </p>
              </div>
              <div className="bg-green-50 rounded-2xl p-6">
                <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                  <Bot className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  AI Dominance
                </h3>
                <p className="text-gray-600 text-sm">
                  Powerful capabilities in machine learning and artificial
                  intelligence applications
                </p>
              </div>
              <div className="bg-purple-50 rounded-2xl p-6">
                <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                  <Package className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Rich Ecosystem
                </h3>
                <p className="text-gray-600 text-sm">
                  Extensive libraries enable rapid development of advanced
                  applications
                </p>
              </div>
            </div>
          </div>
        );

      case "python-project":
        return (
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 px-4 py-2 rounded-full text-red-700 text-sm font-medium">
                <Video className="w-4 h-4" />
                Practical Demonstration
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Python Project Demo
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Hands-on demonstration showcasing Python's capabilities and
                accessibility
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center relative group">
                <div className="text-center text-white space-y-6">
                  <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-white/20 transition-colors cursor-pointer">
                    <Play className="w-8 h-8 ml-1" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">
                      Your Python Project Video
                    </h3>
                    <p className="text-gray-300">Click to play demonstration</p>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="flex-1 h-1 bg-white/20 rounded-full">
                      <div className="w-1/3 h-full bg-red-500 rounded-full"></div>
                    </div>
                    <span className="text-white text-sm">2:34 / 7:42</span>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Project Overview
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Language:</span>
                        <span className="font-medium">Python 3.x</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Libraries:</span>
                        <span className="font-medium">[Your libraries]</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Complexity:</span>
                        <span className="font-medium">
                          Beginner to Intermediate
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-medium">[Project timeline]</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Key Learnings
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Python's readable syntax advantages",
                        "Library ecosystem benefits",
                        "Rapid prototyping capabilities",
                        "Real-world application insights",
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Code Highlights
              </h3>
              <div className="bg-gray-900 rounded-xl p-6 font-mono text-sm">
                <div className="text-gray-500 mb-2">
                  # Your key code snippets here
                </div>
                <div className="text-green-400">
                  import <span className="text-blue-400">library_name</span>
                </div>
                <div className="text-white mt-2">
                  <span className="text-purple-400">def</span>{" "}
                  <span className="text-yellow-400">main_function</span>():
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
                <div className="text-white mt-2">
                  <span className="text-purple-400">if</span>{" "}
                  <span className="text-blue-400">__name__</span> =={" "}
                  <span className="text-green-400">"__main__"</span>:
                </div>
                <div className="text-white ml-4">
                  <span className="text-yellow-400">main_function</span>()
                </div>
              </div>
            </div>
          </div>
        );

      case "timeline":
        return (
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 px-4 py-2 rounded-full text-purple-700 text-sm font-medium">
                <Clock className="w-4 h-4" />
                Interactive Timeline
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Python's Evolution
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From a Christmas project to the backbone of modern AI and
                automation
              </p>
            </div>

            {/* Timeline Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setTimelineFilter(category.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    timelineFilter === category.id
                      ? `${category.color} text-white`
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      timelineFilter === category.id
                        ? "bg-white"
                        : category.color
                    }`}
                  ></div>
                  {category.label}
                </button>
              ))}
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Central line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-0.5"></div>

              <div className="space-y-16">
                {filteredTimeline.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex items-start ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full transform md:-translate-x-2 z-10">
                      <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75"></div>
                    </div>

                    {/* Content */}
                    <div
                      className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                        index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                      }`}
                    >
                      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl font-bold text-gray-900">
                              {item.year}
                            </span>
                            <span className="text-sm text-gray-500">
                              {item.quarter}
                            </span>
                            <div
                              className={`w-3 h-3 rounded-full ${
                                categories.find((c) => c.id === item.category)
                                  ?.color || "bg-gray-500"
                              }`}
                            ></div>
                          </div>
                          <div
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              item.significance === "high"
                                ? "bg-red-100 text-red-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {item.significance === "high"
                              ? "High Impact"
                              : "Medium Impact"}
                          </div>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-blue-600 font-medium mb-4">
                          {item.subtitle}
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                          {item.description}
                        </p>

                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 mb-2">
                              Key Technologies
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {item.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 mb-2">
                              Key Features
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {item.keyFeatures.map((feature, featureIndex) => (
                                <span
                                  key={featureIndex}
                                  className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs"
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="pt-4 border-t border-gray-100">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-gray-900">
                                Impact:
                              </span>
                              <span className="text-sm text-gray-600">
                                {item.impact}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline Statistics */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                Timeline Insights
              </h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">36</div>
                  <div className="text-sm text-gray-600">
                    Years of Evolution
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">15+</div>
                  <div className="text-sm text-gray-600">Major Milestones</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">8</div>
                  <div className="text-sm text-gray-600">
                    Technology Categories
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">10+</div>
                  <div className="text-sm text-gray-600">AI Breakthroughs</div>
                </div>
              </div>
            </div>
          </div>
        );

      case "tutorial":
        return (
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 px-4 py-2 rounded-full text-yellow-700 text-sm font-medium">
                <Code className="w-4 h-4" />
                Technical Tutorial
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Getting Started with Python
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A beginner-friendly guide to understanding Python's power and
                accessibility
              </p>
            </div>

            <div className="space-y-12">
              {[
                {
                  step: "01",
                  title: "Installation and Setup",
                  description:
                    "Get Python running on your system with the official installer and verify your installation.",
                  code: `# Download Python from python.org
python --version
# Verify installation
Python 3.11.0`,
                  color: "bg-red-500",
                },
                {
                  step: "02",
                  title: "Your First Python Program",
                  description:
                    "Experience Python's readable syntax with a simple but powerful example that demonstrates the language's accessibility.",
                  code: `# hello_world.py
print("Hello, Python World!")
print("Welcome to programming!")

# That's it! Python in action 🐍
# Notice how readable and English-like this is`,
                  color: "bg-green-500",
                },
                {
                  step: "03",
                  title: "Working with Libraries",
                  description:
                    "Discover how Python's extensive library ecosystem accelerates development and makes complex tasks simple.",
                  code: `# Install libraries
pip install requests pandas numpy

# Use powerful libraries with simple imports
import requests
import pandas as pd
import numpy as np

# Fetch data from the internet
response = requests.get('https://api.example.com/data')
# Process data with pandas
data = pd.read_csv('data.csv')
# Perform calculations with numpy
result = np.mean(data['values'])`,
                  color: "bg-blue-500",
                },
                {
                  step: "04",
                  title: "Building Something Amazing",
                  description:
                    "Combine Python's simplicity with its power to create applications that would be complex in other languages.",
                  code: `# A simple AI chatbot in just a few lines
import openai

def chat_with_ai(message):
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=message,
        max_tokens=100
    )
    return response.choices[0].text

# Use it
answer = chat_with_ai("Explain Python in simple terms")
print(answer)`,
                  color: "bg-purple-500",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`${item.color} text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg`}
                      >
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>

                    <div className="bg-gray-900 rounded-xl p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-gray-400 ml-4 text-sm font-mono">
                          tutorial_{item.step}.py
                        </span>
                      </div>
                      <pre className="text-green-400 font-mono text-sm leading-relaxed whitespace-pre-wrap">
                        {item.code}
                      </pre>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Next Steps
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    🔰 Beginner Projects
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Calculator application</li>
                    <li>• File organizer script</li>
                    <li>• Web scraper basics</li>
                    <li>• Simple data visualization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    🚀 Advanced Applications
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Machine learning model</li>
                    <li>• Web API development</li>
                    <li>• Automation scripts</li>
                    <li>• AI-powered applications</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case "reflection":
        return (
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-pink-50 border border-pink-200 px-4 py-2 rounded-full text-pink-700 text-sm font-medium">
                <User className="w-4 h-4" />
                Personal Reflection
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Research Journey
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Insights, challenges, and discoveries from exploring Python's
                remarkable story
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-12 shadow-sm">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  [Your personal reflection essay goes here - share your
                  research process, challenges faced, insights gained, and how
                  your understanding of Python and programming has evolved
                  through this project.]
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Consider reflecting on: What surprised you most about Python's
                  journey? How did your perception of programming languages
                  change? What challenges did you face in your research or
                  project development?
                </p>
                <p className="text-gray-700 leading-relaxed">
                  How will this knowledge influence your future academic or
                  career decisions? What questions do you still have about
                  Python or programming in general?
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-red-50 rounded-2xl p-8">
                <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Challenges Faced
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Understanding technical concepts</li>
                  <li>• Finding reliable sources</li>
                  <li>• Balancing breadth vs depth</li>
                  <li>• Project implementation hurdles</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-2xl p-8">
                <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Lightbulb className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Key Insights
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Python's true power in simplicity</li>
                  <li>• Community impact on success</li>
                  <li>• Bridge between beginner and advanced</li>
                  <li>• Real-world application scope</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-2xl p-8">
                <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Future Applications
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Career path considerations</li>
                  <li>• Project ideas to pursue</li>
                  <li>• Skills to develop further</li>
                  <li>• Impact on CS education view</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case "endnotes":
        return (
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-cyan-50 border border-cyan-200 px-4 py-2 rounded-full text-cyan-700 text-sm font-medium">
                <Lightbulb className="w-4 h-4" />
                Additional Context
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                End Notes
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Behind-the-scenes insights and additional explanations
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  number: "1",
                  title: "Research Methodology",
                  content:
                    "Explain your approach to researching Python's history, the sources you found most valuable, and any limitations you encountered in your research process.",
                  color: "bg-red-500",
                },
                {
                  number: "2",
                  title: "Technical Concepts Simplified",
                  content:
                    "Provide additional explanations for complex programming concepts mentioned in your project that general audiences might need clarification on.",
                  color: "bg-green-500",
                },
                {
                  number: "3",
                  title: "Project Development Process",
                  content:
                    "Detail the challenges you faced while creating your Python demonstration project, including any debugging stories or learning moments.",
                  color: "bg-blue-500",
                },
                {
                  number: "4",
                  title: "Industry Context",
                  content:
                    "Additional background on the programming language landscape and why Python's rise is particularly significant in the current tech environment.",
                  color: "bg-purple-500",
                },
                {
                  number: "5",
                  title: "Future Considerations",
                  content:
                    "Thoughts on Python's future evolution, potential challenges, and emerging competitors in the programming language space.",
                  color: "bg-yellow-500",
                },
              ].map((note, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
                >
                  <div className="flex gap-6">
                    <div
                      className={`${note.color} text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0`}
                    >
                      {note.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {note.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {note.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Presentation Notes
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Use this section to prepare for your final presentation. Include
                key talking points, transitions between pieces, and any
                technical demonstrations you plan to show.
              </p>
            </div>
          </div>
        );

      case "works-cited":
        return (
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-full text-emerald-700 text-sm font-medium">
                <BookOpen className="w-4 h-4" />
                Academic Sources
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Works Cited
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                All sources used in this multi-genre project (MLA Format)
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-12 shadow-sm">
              <p className="text-gray-700 mb-8">
                <strong>Instructions:</strong> List all sources used in your
                research, formatted in MLA style. Include web sources,
                interviews, documentation, books, and any other materials
                referenced.
              </p>

              <div className="space-y-6">
                {[
                  'Severance, Charles. "Guido van Rossum: The History of Python." Computer, vol. 48, no. 7, July 2015, pp. 24-26.',
                  'GeeksForGeeks. "High Level and Low Level Languages." GeeksForGeeks, 2015, www.geeksforgeeks.org/high-level-and-low-level-languages/. Accessed 15 May 2025.',
                  'OpenCV. "Python for Computer Vision." OpenCV Documentation, opencv.org/python-tutorials. Accessed 16 May 2025.',
                  "[Add your additional sources here following MLA format]",
                ].map((citation, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl p-6 border border-gray-200"
                  >
                    <p className="text-gray-700 font-mono text-sm leading-relaxed">
                      {citation}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Source Types
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Python.org official documentation</li>
                  <li>• Guido van Rossum interviews/writings</li>
                  <li>• Academic papers on language adoption</li>
                  <li>• Industry reports on Python usage</li>
                  <li>• Company case studies</li>
                  <li>• PEP (Python Enhancement Proposals)</li>
                </ul>
              </div>
              <div className="bg-purple-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  MLA Format Reminder
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Author's Last, First Name</li>
                  <li>• "Title of Article/Page"</li>
                  <li>• Website Name (italics)</li>
                  <li>• Publication Date</li>
                  <li>• URL</li>
                  <li>• Access Date</li>
                </ul>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Content not found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => setActiveSection("home")}
              className="flex items-center gap-3 group"
            >
              <div className="bg-gray-900 p-2 rounded-lg group-hover:bg-blue-600 transition-colors">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900">Python MGP</div>
                <div className="text-xs text-gray-500">Rishi Suryavanshi</div>
              </div>
            </button>

            <nav className="hidden lg:flex items-center gap-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "bg-gray-900 text-white"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-600">
                <Calendar className="w-3 h-3" />
                May 2025
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="grid grid-cols-5 gap-1 p-2">
          {navigationItems.slice(0, 5).map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`flex flex-col items-center gap-1 p-3 rounded-lg text-xs font-medium transition-colors ${
                activeSection === item.id
                  ? "bg-gray-900 text-white"
                  : "text-gray-600"
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span className="truncate">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-16 pb-20 lg:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {renderContent()}
        </div>
      </main>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 lg:bottom-8 right-8 bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors z-40"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center gap-3 mb-4">
              <div className="bg-gray-900 p-2 rounded-lg">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">
                  Python: The Language That Bridges Worlds
                </div>
                <div className="text-sm text-gray-600">
                  Multi-Genre Project • AP Language & Composition
                </div>
              </div>
            </div>
            <p className="text-gray-500 text-sm">
              "Bridging the gap between beginner-friendly syntax and advanced
              applications"
            </p>
            <div className="mt-6 text-xs text-gray-400">
              Mrs. Sterbin • May 2025 • Rishi Suryavanshi
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PythonMGPPortfolio;
