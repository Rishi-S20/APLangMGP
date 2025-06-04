import React, { useState, useEffect } from "react";
import {
  Code,
  FileText,
  Quote,
  Sparkles,
  BookOpen,
  Lightbulb,
  Home,
  Video,
  BarChart3,
  GitCompare,
  ChevronRight,
  Terminal,
  Clock,
  Zap,
  Brain,
  Coffee,
  Rocket,
  Star,
  CheckCircle,
  ArrowRight,
  Info,
  Play,
  Pause,
} from "lucide-react";

const PythonMGPWebsite = () => {
  const [activeSection, setActiveSection] = useState("cover");
  const [codeAnimation, setCodeAnimation] = useState("");
  const [timelineHover, setTimelineHover] = useState(null);

  // Simple typing animation for header
  useEffect(() => {
    const code = "print('Hello, World!')";
    let index = 0;
    const timer = setInterval(() => {
      if (index <= code.length) {
        setCodeAnimation(code.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const sections = [
    { id: "cover", label: "Cover Page", icon: Home },
    { id: "unifying1", label: "Unifying Element", icon: Sparkles },
    { id: "dear-reader", label: "Dear Reader", icon: Quote },
    { id: "unifying2", label: "Unifying Element", icon: Sparkles },
    { id: "info-essay", label: "Info Essay", icon: FileText },
    { id: "unifying3", label: "Unifying Element", icon: Sparkles },
    { id: "genre1", label: "Genre #1: Video Tutorial", icon: Video },
    { id: "unifying4", label: "Unifying Element", icon: Sparkles },
    { id: "genre2", label: "Genre #2: Timeline", icon: BarChart3 },
    { id: "unifying5", label: "Unifying Element", icon: Sparkles },
    { id: "genre3", label: "Genre #3: Comparison", icon: GitCompare },
    { id: "unifying6", label: "Unifying Element", icon: Sparkles },
    { id: "endnotes", label: "End Notes", icon: Lightbulb },
    { id: "unifying7", label: "Unifying Element", icon: Sparkles },
    { id: "works-cited", label: "Works Cited", icon: BookOpen },
  ];

  const timelineEvents = [
    {
      year: 1989,
      event: "Python conceived by Guido van Rossum",
      significance:
        "Birth of a language that would bridge simplicity and power",
    },
    {
      year: 1991,
      event: "Python 0.9.0 released",
      significance:
        "First public release with classes, exceptions, and functions",
    },
    {
      year: 2000,
      event: "Python 2.0 released",
      significance: "List comprehensions and garbage collection added",
    },
    {
      year: 2008,
      event: "Python 3.0 released",
      significance: "Major redesign for better consistency",
    },
    {
      year: 2010,
      event: "Rise in Data Science",
      significance:
        "NumPy and SciPy make Python the go-to for scientific computing",
    },
    {
      year: 2015,
      event: "TensorFlow released",
      significance: "Google chooses Python as primary interface for AI",
    },
    {
      year: 2020,
      event: "Python becomes #1",
      significance: "Most popular programming language globally",
    },
    {
      year: 2024,
      event: "AI Revolution",
      significance: "Python powers ChatGPT, DALL-E, and major AI breakthroughs",
    },
  ];

  const pythonVsJavaData = [
    {
      category: "Syntax",
      python: "Simple, readable, English-like",
      java: "Verbose, strict, more complex",
    },
    {
      category: "Learning Curve",
      python: "Beginner-friendly, quick to learn",
      java: "Steeper learning curve",
    },
    {
      category: "Performance",
      python: "Slower execution (interpreted)",
      java: "Faster execution (compiled)",
    },
    {
      category: "AI/ML Libraries",
      python: "Extensive (TensorFlow, PyTorch)",
      java: "Limited options",
    },
    {
      category: "Use Cases",
      python: "AI, Data Science, Automation",
      java: "Enterprise, Android, Web backends",
    },
    {
      category: "Type System",
      python: "Dynamic typing",
      java: "Static typing",
    },
  ];

  const UnifyingElement = ({ number }) => (
    <div className="min-h-[200px] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="relative z-10 text-center">
        <div className="inline-block p-2 mb-4">
          <Code className="w-6 h-6 text-blue-400 opacity-40" />
        </div>
        <div className="font-mono text-sm text-gray-500 opacity-50">
          <span className="text-blue-400"># </span>
          <span>Section {number} of 7</span>
        </div>
        <div className="mt-2 text-xs text-gray-600 font-mono">
          <span className="opacity-30">if section == {number}:</span>
          <br />
          <span className="opacity-30 ml-4">continue_reading()</span>
        </div>
      </div>
    </div>
  );

  const renderSection = () => {
    switch (activeSection) {
      case "cover":
        return (
          <div className="min-h-screen flex items-center justify-center p-8">
            <div className="text-center max-w-4xl">
              <div className="mb-8">
                <div className="inline-block p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl mb-6">
                  <Terminal className="w-16 h-16 text-blue-400" />
                </div>
                <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Python: The Language That Bridges Worlds
                </h1>
                <p className="text-xl text-gray-400 mb-8">
                  An exploration into why Python has become the dominant force
                  in AI, automation, and everyday technology
                </p>
                <div className="font-mono text-green-400 bg-black/50 p-4 rounded-lg inline-block">
                  {">>>"} {codeAnimation}
                  <span className="animate-pulse">_</span>
                </div>
              </div>

              <div className="mt-12 space-y-2 text-gray-500">
                <p className="text-lg">Multi-Genre Project</p>
                <p>Rishi Suryavanshi</p>
                <p>Mrs. Sterbin • AP Language</p>
                <p>May 21, 2025</p>
              </div>
            </div>
          </div>
        );

      case "dear-reader":
        return (
          <div className="max-w-4xl mx-auto p-8">
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
              <Quote className="text-blue-400" />
              Dear Reader
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-6">
                When first being introduced to the extensive field of Computer
                Science, students and beginners alike can be often deterred and
                overwhelmed by the extensive code libraries and the ever
                shifting "trendy language" of the day. There is never a clear
                cut answer to which language you need to learn and how to even
                go about it, making programming as inaccessible as ever. Never
                seems to stand the test of time, however, Python seems to defy
                the trends of the industry.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                I chose this topic because the shifts in Computer Science was
                something that I struggled with as a beginner developer. I was
                tired of learning basic website development at school, and
                wanted to really specialize in something that I would pursue
                when I am older. The artificial intelligence market was booming
                at the time and I began to realize that this was the future and
                I wanted a piece. Through some research I discovered that Python
                was the main language in A.I. development. I thought to myself,
                "this can't be Python, it's only for beginners!" Through this
                research, I want to come to a clearer understand as to why
                Python, a easy beginner language, is the lingua franca for the
                most advanced development systems in the world.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My hope for you reader, is for you to grasp a better
                understanding of programming and to realize that it is not as
                frightening as the cryptic script seems to suggest. Whether you
                are a seasoned programmer or not interested in Computer Science,
                I hope you come to the realization, like I did too, that the
                divide between advanced and beginner can be bridged by Python.
              </p>
            </div>
          </div>
        );

      case "info-essay":
        return (
          <div className="max-w-4xl mx-auto p-8">
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
              <FileText className="text-blue-400" />
              Info Essay
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-6">
                Python is a high-level programming language that has become the
                bridge between beginner accessibility and advanced technological
                innovation. It was created by Dutch programmer Guido van Rossum
                in December 1989 and it was first released in 1991, succeeding
                the ABC programming language. Python was an instant hit, in an
                article by Charles Severance, Rossum says "I immediately started
                getting useful, positive feedback from people who picked up
                Python from Usenet, and we quickly got into a routine of doing
                new Python releases" (Severance 2015). Before diving into the
                exploration of Python's dominance in fields such as AI and
                automation in robotics, it is very essential to understand what
                makes Python so beginner friendly.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Python's English-like syntax makes it one of the most accessible
                languages in the world. This is a result of the high level of
                abstraction that Python utilizes. Before understanding
                abstraction, you must understand how data is stored in computer
                code. All data is stored in binary which is a collection of 1's
                and 0's. Abstraction is the process of translating those 1's and
                0's to make data more understandable. In the case of Python, it
                translates those 1's and 0's so far that the words the
                programmers type is very understandable. One of the most
                prominent programming resources, Geeks for Geeks confirms this
                saying, "A program written in high-level language contains words
                and symbols that are easier to understand by humans"
                (GeeksForGeeks.com 2015).
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Python's rise to prominence in artificial intelligence and
                machine learning stems from its simplicity and its very powerful
                capabilities. Python is mostly recognized as a pretty slow
                language, due to its levels of abstraction. However, what makes
                Python special and applicable in advanced technologies is its
                power. Its use of object-oriented programming makes it ideal for
                efficient data categorization, which is particularly essential
                for machine learning processes.
              </p>
              <p className="text-gray-300 leading-relaxed">
                What sets Python apart in the technological landscape is its
                extensive ecosystem of libraries. Libraries are tools that
                programmers can use to boost their development, making
                developing AI and advanced technologies just as accessible to
                beginners as they can use these pre-build tools. OpenCV provides
                an example stating, "instead of writing your functions for data
                manipulation or complex calculations, you can use NumPy or
                Pandas to handle these tasks instantly" (OpenCV).
              </p>
            </div>
          </div>
        );

      case "genre1":
        return (
          <div className="max-w-6xl mx-auto p-8">
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
              <Video className="text-blue-400" />
              Genre #1: Technical Tutorial - Flower Recognition AI
            </h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8">
              <p className="text-gray-300 mb-4">
                This video demonstrates Python's capabilities through building a
                flower recognition AI using TensorFlow and Keras. The project
                showcases how Python's simple syntax can create sophisticated
                machine learning models.
              </p>
            </div>

            <div className="aspect-video w-full max-w-4xl mx-auto mb-8 rounded-xl overflow-hidden shadow-2xl">
              <iframe
                className="w-full h-full"
                src="https://drive.google.com/file/d/18DNtydlo25zMJn9sx-G8sznaSW5LB3MG/preview"
                allow="autoplay"
                allowFullScreen
              ></iframe>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">
                  Key Technologies Used
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />{" "}
                    TensorFlow & Keras
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />{" "}
                    Convolutional Neural Networks (CNN)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" /> Data
                    Augmentation Techniques
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" /> 14 Flower
                    Categories Classification
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">
                  Learning Outcomes
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400" /> Python's
                    readable syntax for complex AI
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400" /> Easy
                    integration of powerful libraries
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400" /> Rapid
                    prototyping capabilities
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400" /> Accessibility
                    of advanced ML concepts
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      case "genre2":
        return (
          <div className="max-w-6xl mx-auto p-8">
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
              <BarChart3 className="text-blue-400" />
              Genre #2: Python's Evolution Timeline
            </h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400"></div>

              {/* Timeline events */}
              <div className="space-y-12">
                {timelineEvents.map((event, index) => (
                  <div
                    key={index}
                    className="relative flex items-center gap-8"
                    onMouseEnter={() => setTimelineHover(index)}
                    onMouseLeave={() => setTimelineHover(null)}
                  >
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-6 w-4 h-4 rounded-full transition-all duration-300 ${
                        timelineHover === index
                          ? "scale-150 bg-blue-400"
                          : "bg-purple-400"
                      }`}
                    ></div>

                    {/* Content */}
                    <div
                      className={`ml-16 bg-slate-800/50 rounded-xl p-6 transition-all duration-300 ${
                        timelineHover === index
                          ? "scale-105 bg-slate-700/50"
                          : ""
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-semibold text-blue-400">
                          {event.year}
                        </h3>
                        {index === 0 && (
                          <Brain className="w-5 h-5 text-purple-400" />
                        )}
                        {index === 5 && (
                          <Rocket className="w-5 h-5 text-purple-400" />
                        )}
                        {index === 7 && (
                          <Zap className="w-5 h-5 text-purple-400" />
                        )}
                      </div>
                      <p className="text-white font-medium mb-2">
                        {event.event}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {event.significance}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Timeline Analysis
              </h3>
              <p className="text-gray-300">
                This timeline reveals Python's remarkable journey from a
                Christmas hobby project to the backbone of modern AI. Each
                milestone shows how Python maintained its core philosophy of
                simplicity while expanding its capabilities to meet the demands
                of cutting-edge technology.
              </p>
            </div>
          </div>
        );

      case "genre3":
        return (
          <div className="max-w-6xl mx-auto p-8">
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
              <GitCompare className="text-blue-400" />
              Genre #3: Python vs Java Comparison
            </h2>

            <div className="mb-8 bg-slate-800/50 rounded-xl p-6">
              <p className="text-gray-300">
                A comprehensive comparison highlighting why Python has become
                the preferred choice for AI and data science, while Java
                maintains its stronghold in enterprise applications.
              </p>
            </div>

            <div className="space-y-6">
              {pythonVsJavaData.map((item, index) => (
                <div key={index} className="bg-slate-800/30 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    {item.category}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                          <span className="text-white font-bold text-sm">
                            Py
                          </span>
                        </div>
                        <span className="font-semibold text-blue-400">
                          Python
                        </span>
                      </div>
                      <p className="text-gray-300">{item.python}</p>
                    </div>
                    <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                          <span className="text-white font-bold text-sm">
                            Ja
                          </span>
                        </div>
                        <span className="font-semibold text-orange-400">
                          Java
                        </span>
                      </div>
                      <p className="text-gray-300">{item.java}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">
                  Python Code Example
                </h3>
                <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm text-green-400">{`# Simple ML model in Python
import tensorflow as tf

model = tf.keras.Sequential([
    tf.keras.layers.Dense(128, activation='relu'),
    tf.keras.layers.Dense(10, activation='softmax')
])

model.compile(optimizer='adam',
              loss='categorical_crossentropy',
              metrics=['accuracy'])`}</code>
                </pre>
              </div>

              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-orange-400">
                  Java Code Example
                </h3>
                <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm text-green-400">{`// Similar concept in Java (more verbose)
public class NeuralNetwork {
    private List<Layer> layers;
    
    public NeuralNetwork() {
        this.layers = new ArrayList<>();
        layers.add(new DenseLayer(128, "relu"));
        layers.add(new DenseLayer(10, "softmax"));
    }
    
    public void compile(String optimizer,
                       String loss,
                       String[] metrics) {
        // Implementation details...
    }
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        );

      case "endnotes":
        return (
          <div className="max-w-4xl mx-auto p-8">
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
              <Lightbulb className="text-blue-400" />
              End Notes
            </h2>

            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">
                  Cover Page & Overall Design
                </h3>
                <p className="text-gray-300">
                  The cover page establishes the central metaphor of Python as a
                  bridge between beginner-friendly programming and advanced
                  applications. The terminal aesthetic with the typing animation
                  immediately signals the technical nature of the content while
                  remaining approachable. The gradient color scheme (blue to
                  purple) represents the journey from foundational learning to
                  advanced mastery.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-400">
                  Unifying Elements
                </h3>
                <p className="text-gray-300">
                  The subtle Python code snippets that appear between sections
                  serve as transitional elements, maintaining thematic cohesion
                  without overwhelming the content. These snippets use actual
                  Python syntax (comments, conditionals) to guide readers
                  through the document, reinforcing the language's readability
                  even for non-programmers. The minimalist approach ensures
                  focus remains on the main content while providing visual
                  breathing room.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">
                  Genre Selection Rationale
                </h3>
                <p className="text-gray-300 mb-4">
                  Each genre was carefully selected to demonstrate different
                  aspects of Python's bridge concept:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex gap-2">
                    <span className="text-green-400">•</span>
                    <span>
                      <strong>Video Tutorial:</strong> Shows Python in action,
                      proving that complex AI projects can be built with
                      readable code. The flower recognition project specifically
                      demonstrates how a beginner can create something that
                      would have required a PhD just decades ago.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-400">•</span>
                    <span>
                      <strong>Timeline:</strong> Provides historical context for
                      Python's strategic positioning at every major
                      technological shift. The visual format makes it easy to
                      see how Python evolved alongside the needs of the
                      programming community.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-400">•</span>
                    <span>
                      <strong>Comparison:</strong> Directly addresses the
                      "bridge" concept by contrasting Python with Java, showing
                      how different design philosophies lead to different
                      outcomes. This genre makes the abstract concept of
                      language design concrete through direct comparison.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">
                  Research Process & Challenges
                </h3>
                <p className="text-gray-300">
                  The most challenging aspect was balancing technical accuracy
                  with accessibility for a general audience. Python's story
                  involves complex computer science concepts that needed to be
                  explained without losing the narrative thread. Sources ranged
                  from academic papers to industry blogs, requiring careful
                  synthesis to present a cohesive argument. The personal
                  connection established in the Dear Reader letter helps ground
                  these technical concepts in relatable experiences.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-red-400">
                  Visual Design Choices
                </h3>
                <p className="text-gray-300">
                  The dark theme with syntax highlighting mirrors modern code
                  editors, creating an immersive experience that places readers
                  in a programmer's environment. The consistent use of monospace
                  fonts for code elements and the terminal-style containers
                  reinforce the technical theme while maintaining readability.
                  Color coding (blue for Python, orange for Java) provides
                  visual distinction without overwhelming the design.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-6 mt-8">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Project Reflection
                </h3>
                <p className="text-gray-300">
                  This project reinforced my understanding that effective
                  communication bridges are as important as technical bridges.
                  Just as Python makes complex computing accessible, this
                  multi-genre approach makes a technical topic accessible to
                  diverse audiences. The process of creating different genres
                  forced me to examine Python's impact from multiple
                  perspectives, deepening my appreciation for how design choices
                  in programming languages can democratize technology.
                </p>
              </div>
            </div>
          </div>
        );

      case "works-cited":
        return (
          <div className="max-w-4xl mx-auto p-8">
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
              <BookOpen className="text-blue-400" />
              Works Cited
            </h2>

            <div className="space-y-4">
              <div className="bg-slate-800/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">
                  Sources
                </h3>
                <div className="space-y-3 font-mono text-sm">
                  <p className="text-gray-300 pl-8 -indent-8">
                    GeeksforGeeks. "History of Python." GeeksforGeeks, 2 Jan.
                    2015,
                    <span className="text-blue-400">
                      {" "}
                      www.geeksforgeeks.org/history-of-python/
                    </span>
                    . Accessed 15 May 2025.
                  </p>

                  <p className="text-gray-300 pl-8 -indent-8">
                    OpenCV Team. "Python Libraries Documentation." OpenCV.org,
                    2024,
                    <span className="text-blue-400">
                      {" "}
                      opencv.org/python-libraries
                    </span>
                    . Accessed 16 May 2025.
                  </p>

                  <p className="text-gray-300 pl-8 -indent-8">
                    Severance, Charles. "Python for Everybody: Exploring Data in
                    Python 3." University of Michigan, 2015,
                    <span className="text-blue-400"> py4e.com</span>. Accessed
                    14 May 2025.
                  </p>

                  <p className="text-gray-300 pl-8 -indent-8">
                    Van Rossum, Guido. "The History of Python." Python.org, 20
                    Jan. 2009,
                    <span className="text-blue-400">
                      {" "}
                      python-history.blogspot.com
                    </span>
                    . Accessed 13 May 2025.
                  </p>

                  <p className="text-gray-300 pl-8 -indent-8">
                    "Python Enhancement Proposals." Python.org, Python Software
                    Foundation,
                    <span className="text-blue-400"> peps.python.org</span>.
                    Accessed 10 May 2025.
                  </p>

                  <p className="text-gray-300 pl-8 -indent-8">
                    Stack Overflow. "2024 Developer Survey." Stack Overflow,
                    2024,
                    <span className="text-blue-400">
                      {" "}
                      insights.stackoverflow.com/survey/2024
                    </span>
                    . Accessed 18 May 2025.
                  </p>

                  <p className="text-gray-300 pl-8 -indent-8">
                    TensorFlow Team. "TensorFlow Documentation." TensorFlow.org,
                    Google, 2024,
                    <span className="text-blue-400"> tensorflow.org</span>.
                    Accessed 20 May 2025.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case "unifying1":
      case "unifying2":
      case "unifying3":
      case "unifying4":
      case "unifying5":
      case "unifying6":
      case "unifying7": {
        const unifyingNumber = parseInt(activeSection.replace("unifying", ""));
        return <UnifyingElement number={unifyingNumber} />;
      }

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-slate-900/95 backdrop-blur-sm border-r border-slate-700 p-6 overflow-y-auto z-50">
        <div className="mb-8">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Python MGP
          </h1>
          <p className="text-sm text-gray-500 mt-1">Multi-Genre Project</p>
        </div>

        <nav className="space-y-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                activeSection === section.id
                  ? "bg-blue-500/20 text-blue-400 border-l-2 border-blue-400"
                  : "text-gray-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <section.icon className="w-4 h-4" />
              <span className="text-sm">{section.label}</span>
              {activeSection === section.id && (
                <ChevronRight className="w-4 h-4 ml-auto" />
              )}
            </button>
          ))}
        </nav>

        <div className="mt-8 pt-8 border-t border-slate-700">
          <div className="text-xs text-gray-500 space-y-1">
            <p>Rishi Suryavanshi</p>
            <p>Mrs. Sterbin</p>
            <p>AP Language</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64">
        <div className="min-h-screen">{renderSection()}</div>
      </div>

      {/* Subtle floating code elements in background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-5">
        <div className="absolute top-20 right-20 font-mono text-blue-400 text-xs animate-pulse">
          import tensorflow as tf
        </div>
        <div
          className="absolute bottom-40 left-80 font-mono text-purple-400 text-xs animate-pulse"
          style={{ animationDelay: "2s" }}
        >
          def bridge_worlds():
        </div>
        <div
          className="absolute top-1/2 right-40 font-mono text-green-400 text-xs animate-pulse"
          style={{ animationDelay: "4s" }}
        >
          # Python connects all
        </div>
      </div>
    </div>
  );
};

export default PythonMGPWebsite;
