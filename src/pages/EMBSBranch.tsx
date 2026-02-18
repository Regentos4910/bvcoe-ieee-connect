import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MemberCarousel from "@/components/MemberCarousel";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";
import { HeartPulse, Activity, Microscope, Cpu, BarChart3, Zap } from "lucide-react";

import member1 from "@/assets/member-1.jpg";
import member2 from "@/assets/member-2.jpg";
import member3 from "@/assets/member-3.jpg";
import member4 from "@/assets/member-4.jpg";
import member5 from "@/assets/member-5.jpg";
import member6 from "@/assets/member-6.jpg";

const EMBSBranch = () => {
  const embsMembers = [
    { name: "Rahul Patil", role: "EMBS Chapter Chair", image: member3, linkedin: "#", email: "rahul@ieee.org" },
    { name: "Sneha Kulkarni", role: "Vice Chair", image: member4, linkedin: "#", email: "sneha@ieee.org" },
    { name: "Arjun Sharma", role: "Technical Lead", image: member1, linkedin: "#", email: "arjun@ieee.org" },
    { name: "Ananya Reddy", role: "Research Coordinator", image: member6, linkedin: "#", email: "ananya@ieee.org" },
    { name: "Priya Deshmukh", role: "Events Head", image: member2, linkedin: "#", email: "priya@ieee.org" },
    { name: "Aditya Joshi", role: "Outreach Lead", image: member5, linkedin: "#", email: "aditya@ieee.org" },
  ];

  const events = [
    {
      title: "Biomedical Signal Processing Workshop",
      date: "February 10, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Biomedical Lab",
      description: "Hands-on workshop on ECG signal analysis, filtering techniques, and feature extraction using MATLAB and Python.",
      type: "upcoming" as const,
    },
    {
      title: "Medical Imaging Bootcamp",
      date: "February 22-23, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Computer Lab 2",
      description: "Comprehensive training on image segmentation, MRI/CT image processing, and deep learning for diagnostics.",
      type: "upcoming" as const,
    },
    {
      title: "Healthcare Innovation Summit",
      date: "March 12, 2025",
      time: "9:30 AM - 3:30 PM",
      location: "Conference Hall",
      description: "Panel discussions and student research presentations on emerging healthcare technologies.",
      type: "upcoming" as const,
    },
  ];

  const focusAreas = [
    {
      icon: <HeartPulse className="w-8 h-8" />,
      title: "Biomedical Signal Processing",
      description: "Analysis of ECG, EEG, EMG signals and development of intelligent diagnostic systems.",
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Medical Imaging",
      description: "MRI, CT, ultrasound image enhancement, segmentation, and AI-based diagnosis.",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Healthcare AI",
      description: "Machine learning applications in disease prediction, clinical decision support, and wearable tech.",
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Bioinstrumentation",
      description: "Design and development of medical devices, sensors, and embedded healthcare systems.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <HeroSection
        title="IEEE EMBS Chapter"
        subtitle="Engineering in Medicine and Biology Society"
        description="Advancing healthcare technology through biomedical engineering, signal processing, medical imaging, and AI-driven diagnostics."
        primaryAction={{ label: "Join EMBS", path: "#" }}
        secondaryAction={{ label: "Explore Research", path: "#" }}
        stats={[
          { icon: <HeartPulse className="w-6 h-6" />, value: "40+", label: "EMBS Members" },
          { icon: <BarChart3 className="w-6 h-6" />, value: "12+", label: "Research Projects" },
          { icon: <Zap className="w-6 h-6" />, value: "18+", label: "Workshops Conducted" },
        ]}
      />

      <AboutSection
        title="About IEEE EMBS"
        description="The IEEE Engineering in Medicine and Biology Society (EMBS) Chapter at BV(DU)COE Pune promotes innovation at the intersection of engineering and healthcare. We empower students to design intelligent medical technologies that improve quality of life."
        mission="To foster research and innovation in biomedical engineering, enabling students to contribute to advancements in healthcare technology."
        vision="To be a premier student chapter driving impactful biomedical solutions through interdisciplinary collaboration."
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

      <MemberCarousel title="EMBS Chapter Team" members={embsMembers} />
      <EventsSection title="EMBS Events & Workshops" events={events} />

      {/* Resources Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
            EMBS Resources
          </h2>
          <div className="w-20 h-1 bg-gradient-ieee mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-card p-6 rounded-2xl shadow-ieee-sm hover:shadow-ieee-md transition-all">
              <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                Publications
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• IEEE Transactions on Biomedical Engineering</li>
                <li>• IEEE Transactions on Medical Imaging</li>
                <li>• IEEE Open Journal of Engineering in Medicine and Biology</li>
                <li>• IEEE Reviews in Biomedical Engineering</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-2xl shadow-ieee-sm hover:shadow-ieee-md transition-all">
              <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                Conferences
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• IEEE EMBS Annual International Conference (EMBC)</li>
                <li>• IEEE Healthcare Innovations Conference</li>
                <li>• IEEE Biomedical Circuits & Systems Conference (BioCAS)</li>
                <li>• IEEE International Conference on Biomedical Robotics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EMBSBranch;
