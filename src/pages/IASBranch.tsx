import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MemberCarousel from "@/components/MemberCarousel";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";
import { Factory, Cpu, Zap, Settings, BarChart3, Wrench } from "lucide-react";

import member1 from "@/assets/member-1.jpg";
import member2 from "@/assets/member-2.jpg";
import member3 from "@/assets/member-3.jpg";
import member4 from "@/assets/member-4.jpg";
import member5 from "@/assets/member-5.jpg";
import member6 from "@/assets/member-6.jpg";

const IASBranch = () => {
  const iasMembers = [
    { name: "Amit Desai", role: "IAS Chapter Chair", image: member1, linkedin: "#", email: "amit@ieee.org" },
    { name: "Riya Shah", role: "Vice Chair", image: member2, linkedin: "#", email: "riya@ieee.org" },
    { name: "Karan Mehta", role: "Technical Lead", image: member3, linkedin: "#", email: "karan@ieee.org" },
    { name: "Neha Patil", role: "Industry Relations Head", image: member4, linkedin: "#", email: "neha@ieee.org" },
    { name: "Siddharth Rao", role: "Projects Lead", image: member5, linkedin: "#", email: "sid@ieee.org" },
    { name: "Tanvi Kulkarni", role: "Events Head", image: member6, linkedin: "#", email: "tanvi@ieee.org" },
  ];

  const events = [
    {
      title: "Industrial Automation Workshop",
      date: "March 5, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "Automation Lab",
      description: "Hands-on session on PLC programming, SCADA systems, and smart factory technologies.",
      type: "upcoming" as const,
    },
    {
      title: "Power Systems Seminar",
      date: "March 18, 2025",
      time: "11:00 AM - 2:00 PM",
      location: "Seminar Hall",
      description: "Industry experts discussing modern power grids, renewable integration, and energy management.",
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
      icon: <Factory className="w-8 h-8" />,
      title: "Industrial Automation",
      description: "PLC, SCADA, robotics, and smart manufacturing technologies.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Power & Energy Systems",
      description: "Power distribution, renewable energy integration, and grid modernization.",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Embedded & Control Systems",
      description: "Industrial IoT, microcontrollers, and control engineering applications.",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Industrial Safety",
      description: "Electrical safety standards, compliance, and industrial best practices.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <HeroSection
        title="IEEE IAS Chapter"
        subtitle="Industry Applications Society"
        description="Bridging academia and industry through power systems, automation, industrial IoT, and applied engineering solutions."
        primaryAction={{ label: "Join IAS", path: "#" }}
        secondaryAction={{ label: "Explore Projects", path: "#" }}
        stats={[
          { icon: <Factory className="w-6 h-6" />, value: "35+", label: "IAS Members" },
          { icon: <BarChart3 className="w-6 h-6" />, value: "10+", label: "Industry Projects" },
          { icon: <Wrench className="w-6 h-6" />, value: "15+", label: "Workshops Conducted" },
        ]}
      />

      <AboutSection
        title="About IEEE IAS"
        description="The IEEE Industry Applications Society (IAS) Chapter promotes practical engineering solutions in industrial environments, empowering students with industry-relevant technical skills."
        mission="To advance the theory and practice of electrical and electronic engineering in industrial and commercial applications."
        vision="To create industry-ready engineers through applied learning and technical excellence."
      />

      <MemberCarousel title="IAS Chapter Team" members={iasMembers} />
      <EventsSection title="IAS Events & Workshops" events={events} />

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


      {/* Resources Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
            IAS Resources
          </h2>
          <div className="w-20 h-1 bg-gradient-ieee mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-card p-6 rounded-2xl shadow-ieee-sm hover:shadow-ieee-md transition-all">
              <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                Publications
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• IEEE Transactions on Industry Applications</li>
                <li>• IEEE Industry Applications Magazine</li>
                <li>• IEEE Transactions on Industrial Electronics</li>
                <li>• IEEE Transactions on Power Electronics</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-2xl shadow-ieee-sm hover:shadow-ieee-md transition-all">
              <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                Conferences
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• IEEE Industry Applications Society Annual Meeting</li>
                <li>• IEEE Energy Conversion Congress & Expo (ECCE)</li>
                <li>• IEEE Applied Power Electronics Conference (APEC)</li>
                <li>• IEEE Petroleum and Chemical Industry Conference (PCIC)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default IASBranch;
