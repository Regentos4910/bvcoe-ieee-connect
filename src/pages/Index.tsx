import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MemberCarousel from "@/components/MemberCarousel";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";
import { Users, Award, Calendar } from "lucide-react";

import member1 from "@/assets/sbmembers/sbsecretary.jpg";
import member2 from "@/assets/sbmembers/sbsecretary.jpg";
import member3 from "@/assets/sbmembers/sbsecretary.jpg";
import member4 from "@/assets/sbmembers/sbtreasurer.jpg";
import member5 from "@/assets/sbmembers/sbsecretary.jpg";
import member6 from "@/assets/sbmembers/sbeventmanagment.jpg";

const Index = () => {
  const coreMembers = [
    { name: "Shaily Mishra", role: "Chairperson", image: member1, linkedin: "https://www.linkedin.com/in/archanaangel?utm_source=share_via&utm_content=profile&utm_medium=member_android", email: "angelarchana_151@ieee.org" },
    { name: "Abhishek Kumar", role: "Vice Chairperson", image: member2, linkedin: "https://www.linkedin.com/in/abhishek-kumar-37165731b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", email: "vats.abhishek.official@gmail.com" },
    { name: "Shaily Mishra", role: "Secretary", image: member3, linkedin: "https://www.linkedin.com/in/shaily-mishra-309b2b37b?utm_source=share_via&utm_content=profile&utm_medium=member_android", email: "shailymishra1185@gmail.com" },
    { name: "Arvind G", role: "Treasurer", image: member4, linkedin: "https://www.linkedin.com/in/arvind4z/", email: "arvind4z@ieee.org" },
    { name: "Aditya Joshi", role: "Technical Head", image: member5, linkedin: "#", email: "aditya@ieee.org" },
    { name: "Nikita Pujari", role: "Events Head", image: member6, linkedin: "https://www.linkedin.com/in/nikita-pujari-0a5964345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", email: "nikitapujari427@gmail.com" },
  ];

  const events = [
    {
      title: "TechFest 2025",
      date: "February 15-17, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "Main Auditorium",
      description: "Annual technical festival featuring workshops, competitions, and keynote speakers from industry leaders.",
      type: "upcoming" as const,
    },
    {
      title: "AI & ML Workshop",
      date: "March 5, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Computer Lab 3",
      description: "Hands-on workshop on Artificial Intelligence and Machine Learning fundamentals.",
      type: "upcoming" as const,
    },
    {
      title: "Industry Connect 2024",
      date: "December 10, 2024",
      location: "Seminar Hall",
      description: "Networking event with industry professionals from top tech companies.",
      type: "past" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <HeroSection
        title="IEEE BV(DU)COE Pune"
        subtitle="Bharati Vidyapeeth College of Engineering"
        description="Advancing Technology for the Benefit of Humanity. Join us in shaping the future through innovation, collaboration, and technical excellence."
        primaryAction={{ label: "Student Branch", path: "/student-branch" }}
        secondaryAction={{ label: "Explore Chapters", path: "/chapters" }}

        stats={[
          { icon: <Users className="w-6 h-6" />, value: "200+", label: "Active Members" },
          { icon: <Award className="w-6 h-6" />, value: "50+", label: "Events Hosted" },
          { icon: <Calendar className="w-6 h-6" />, value: "15+", label: "Years Active" },
        ]}
      />

      <AboutSection
        title="About IEEE BV(DU)COE"
        description="The IEEE Student Branch at Bharati Vidyapeeth (Deemed to be University) College of Engineering, Pune is a vibrant community of tech enthusiasts, innovators, and future engineers. We are dedicated to fostering technical knowledge, professional development, and networking opportunities for our members."
        mission="To inspire and empower students through technical education, professional development, and community engagement, creating future leaders who will advance technology for the benefit of humanity."
        vision="To be the premier student organization that bridges the gap between academic learning and industry practice, nurturing innovative minds and fostering a culture of continuous learning."
      />

      <MemberCarousel title="Our Core Team" members={coreMembers} />

      <EventsSection title="Events & Activities" events={events} />

      <Footer />
    </div>
  );
};

export default Index;
