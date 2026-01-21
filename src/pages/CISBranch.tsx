import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MemberCarousel from "@/components/MemberCarousel";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";
import { Brain, Network, Sparkles, Bot, BarChart3, Zap } from "lucide-react";

import member1 from "@/assets/member-1.jpg";
import member2 from "@/assets/member-2.jpg";
import member3 from "@/assets/member-3.jpg";
import member4 from "@/assets/member-4.jpg";
import member5 from "@/assets/member-5.jpg";
import member6 from "@/assets/member-6.jpg";

const CISBranch = () => {
  const cisMembers = [
    { name: "Rahul Patil", role: "CIS Chapter Chair", image: member3, linkedin: "#", email: "rahul@ieee.org" },
    { name: "Sneha Kulkarni", role: "Vice Chair", image: member4, linkedin: "#", email: "sneha@ieee.org" },
    { name: "Arjun Sharma", role: "Technical Lead", image: member1, linkedin: "#", email: "arjun@ieee.org" },
    { name: "Ananya Reddy", role: "Research Coordinator", image: member6, linkedin: "#", email: "ananya@ieee.org" },
    { name: "Priya Deshmukh", role: "Events Head", image: member2, linkedin: "#", email: "priya@ieee.org" },
    { name: "Aditya Joshi", role: "Outreach Lead", image: member5, linkedin: "#", email: "aditya@ieee.org" },
  ];

  const events = [
    {
      title: "AI/ML Bootcamp",
      date: "February 1-3, 2025",
      time: "10:00 AM - 5:00 PM",
      location: "AI Lab",
      description: "Intensive 3-day bootcamp covering machine learning fundamentals to advanced neural networks.",
      type: "upcoming" as const,
    },
    {
      title: "Neural Networks Workshop",
      date: "February 15, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "Computer Lab 1",
      description: "Deep dive into neural network architectures and hands-on implementation using PyTorch.",
      type: "upcoming" as const,
    },
    {
      title: "CI Research Symposium",
      date: "March 8, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "Conference Hall",
      description: "Present and discuss cutting-edge research in computational intelligence.",
      type: "upcoming" as const,
    },
  ];

  const focusAreas = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Neural Networks",
      description: "Deep learning, CNNs, RNNs, Transformers, and their applications in real-world problems.",
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Fuzzy Systems",
      description: "Fuzzy logic, fuzzy control systems, and hybrid intelligent systems.",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Evolutionary Computation",
      description: "Genetic algorithms, swarm intelligence, and nature-inspired optimization.",
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Machine Learning",
      description: "Supervised, unsupervised, and reinforcement learning techniques.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <HeroSection
        title="IEEE CIS Chapter"
        subtitle="Computational Intelligence Society"
        description="Exploring the frontiers of artificial intelligence, neural networks, fuzzy systems, and evolutionary computation. Building intelligent systems for tomorrow."
        primaryAction={{ label: "Join CIS", path: "#" }}
        secondaryAction={{ label: "Research Areas", path: "#" }}
        stats={[
          { icon: <Brain className="w-6 h-6" />, value: "50+", label: "CIS Members" },
          { icon: <BarChart3 className="w-6 h-6" />, value: "15+", label: "Research Projects" },
          { icon: <Zap className="w-6 h-6" />, value: "20+", label: "AI Workshops" },
        ]}
      />

      <AboutSection
        title="About IEEE CIS"
        description="The IEEE Computational Intelligence Society (CIS) Chapter at BV(DU)COE Pune focuses on the theory, design, application, and development of biologically and linguistically motivated computational paradigms. We bring together students and researchers passionate about AI and intelligent systems."
        mission="To advance computational intelligence research and education, fostering innovation in neural networks, fuzzy systems, and evolutionary computation while building a community of AI enthusiasts."
        vision="To be a leading academic chapter that contributes to the advancement of computational intelligence, producing research and innovations that benefit society."
      />

      {/* Focus Areas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
            Research Focus Areas
          </h2>
          <div className="w-20 h-1 bg-gradient-ieee mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                className="group relative bg-card p-6 rounded-2xl shadow-ieee-sm hover:shadow-ieee-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-ieee opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="inline-flex p-4 rounded-2xl bg-secondary mb-4 text-primary group-hover:bg-gradient-ieee group-hover:text-primary-foreground transition-all">
                    {area.icon}
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MemberCarousel title="CIS Chapter Team" members={cisMembers} />

      <EventsSection title="CIS Events & Workshops" events={events} />

      {/* Resources Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
            CIS Resources
          </h2>
          <div className="w-20 h-1 bg-gradient-ieee mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-card p-6 rounded-2xl shadow-ieee-sm hover:shadow-ieee-md transition-all">
              <h3 className="text-lg font-display font-semibold text-foreground mb-3">Publications</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• IEEE Transactions on Neural Networks and Learning Systems</li>
                <li>• IEEE Transactions on Fuzzy Systems</li>
                <li>• IEEE Transactions on Evolutionary Computation</li>
                <li>• IEEE Computational Intelligence Magazine</li>
              </ul>
            </div>
            <div className="bg-card p-6 rounded-2xl shadow-ieee-sm hover:shadow-ieee-md transition-all">
              <h3 className="text-lg font-display font-semibold text-foreground mb-3">Conferences</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• IEEE World Congress on Computational Intelligence (WCCI)</li>
                <li>• IEEE Congress on Evolutionary Computation (CEC)</li>
                <li>• International Joint Conference on Neural Networks (IJCNN)</li>
                <li>• IEEE International Conference on Fuzzy Systems (FUZZ-IEEE)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CISBranch;
