import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MemberCarousel from "@/components/MemberCarousel";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";
import { Users, Lightbulb, BookOpen, Rocket, Code, Cpu } from "lucide-react";

import member1 from "@/assets/member-1.jpg";
import member2 from "@/assets/member-2.jpg";
import member3 from "@/assets/member-3.jpg";
import member4 from "@/assets/member-4.jpg";
import member5 from "@/assets/member-5.jpg";
import member6 from "@/assets/member-6.jpg";

const StudentBranch = () => {
  const studentBranchMembers = [
    { name: "Arjun Sharma", role: "Student Branch Chairperson", image: member1, linkedin: "#", email: "arjun@ieee.org" },
    { name: "Priya Deshmukh", role: "Vice Chairperson", image: member2, linkedin: "#", email: "priya@ieee.org" },
    { name: "Rahul Patil", role: "Secretary", image: member3, linkedin: "#", email: "rahul@ieee.org" },
    { name: "Sneha Kulkarni", role: "Joint Secretary", image: member4, linkedin: "#", email: "sneha@ieee.org" },
    { name: "Aditya Joshi", role: "Technical Coordinator", image: member5, linkedin: "#", email: "aditya@ieee.org" },
    { name: "Ananya Reddy", role: "Membership Chair", image: member6, linkedin: "#", email: "ananya@ieee.org" },
  ];

  const events = [
    {
      title: "Hackathon 2025",
      date: "January 25-26, 2025",
      time: "24 Hours",
      location: "Innovation Hub",
      description: "Annual 24-hour hackathon with exciting prizes and mentorship from industry experts.",
      type: "upcoming" as const,
    },
    {
      title: "Paper Presentation",
      date: "February 20, 2025",
      time: "10:00 AM - 5:00 PM",
      location: "Seminar Hall A",
      description: "Present your research papers and get feedback from IEEE professionals.",
      type: "upcoming" as const,
    },
    {
      title: "Code Sprint",
      date: "March 10, 2025",
      time: "9:00 AM - 1:00 PM",
      location: "Computer Lab 2",
      description: "Competitive programming contest for students of all skill levels.",
      type: "upcoming" as const,
    },
  ];

  const activities = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Technical Workshops",
      description: "Regular hands-on workshops on trending technologies like AI, Web Dev, and Cloud Computing.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation Labs",
      description: "Access to state-of-the-art labs for project development and experimentation.",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Study Groups",
      description: "Collaborative learning sessions and peer mentoring programs.",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Industry Visits",
      description: "Regular visits to tech companies and research institutions.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <HeroSection
        title="IEEE Student Branch"
        subtitle="BV(DU)COE Pune"
        description="Empowering students through technology, innovation, and professional development. Be part of the world's largest technical professional organization."
        primaryAction={{ label: "Join IEEE", path: "#" }}
        secondaryAction={{ label: "View Events", path: "#" }}
        stats={[
          { icon: <Users className="w-6 h-6" />, value: "180+", label: "Student Members" },
          { icon: <Cpu className="w-6 h-6" />, value: "30+", label: "Workshops/Year" },
          { icon: <Rocket className="w-6 h-6" />, value: "25+", label: "Projects" },
        ]}
      />

      <AboutSection
        title="About Student Branch"
        description="The IEEE Student Branch at BV(DU)COE Pune serves as a gateway for students to access IEEE's vast resources, connect with professionals worldwide, and develop skills essential for their engineering careers. Our branch is one of the most active in the Pune Section."
        mission="To provide students with opportunities for professional development, technical skill enhancement, and networking through IEEE's global community of engineers and scientists."
        vision="To create a thriving ecosystem where students can explore, innovate, and lead in their chosen fields of engineering and technology."
      />

      {/* Activities Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
            What We Offer
          </h2>
          <div className="w-20 h-1 bg-gradient-ieee mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="group bg-card p-6 rounded-2xl shadow-ieee-sm hover:shadow-ieee-lg transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="inline-flex p-4 rounded-2xl bg-gradient-ieee mb-4 text-primary-foreground group-hover:scale-110 transition-transform">
                  {activity.icon}
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {activity.title}
                </h3>
                <p className="text-muted-foreground text-sm">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MemberCarousel title="Student Branch Leaders" members={studentBranchMembers} />

      <EventsSection title="Upcoming Events" events={events} />

      {/* Benefits Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
            IEEE Membership Benefits
          </h2>
          <div className="w-20 h-1 bg-gradient-ieee mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              "Access to IEEE Xplore Digital Library",
              "Networking with professionals worldwide",
              "Discounted conference registrations",
              "Career resources and job board access",
              "Technical skill development workshops",
              "Leadership and volunteer opportunities",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-xl shadow-ieee-sm">
                <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                <span className="text-foreground text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StudentBranch;
