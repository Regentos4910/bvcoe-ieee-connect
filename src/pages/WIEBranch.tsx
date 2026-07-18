import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MemberCarousel from "@/components/MemberCarousel";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";
import { Users, HeartHandshake, Briefcase, Lightbulb, BarChart3, Sparkles } from "lucide-react";

import member1 from "@/assets/wiemembers/wiechair.png";
import member2 from "@/assets/wiemembers/wietreasurer.jpeg";
import member3 from "@/assets/wiemembers/wietreasurer.jpeg";
import member4 from "@/assets/wiemembers/wietreasurer.jpeg";
import member5 from "@/assets/wiemembers/wietreasurer.jpeg";
import member6 from "@/assets/wiemembers/wietreasurer.jpeg";

const WIEBranch = () => {
  const wieMembers = [
    { name: "Nishu Kumari", role: "WIE Chair", image: member1, linkedin: "https://www.linkedin.com/in/nishu-kumari-203703357", email: "nishukribanasthali006@gmail.com" },

    { name: "Ishika Narayan", role: "WIE Vice Chair", image: member2, linkedin: "https://www.linkedin.com/in/ishika-narayan-1a65072a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", email: "ishikanarayan21@gmail.com" },

    { name: "Sakshi Patel", role: "Mentorship Lead", image: member3, linkedin: "#", email: "sakshi@ieee.org" },

    { name: "Ishita Rao", role: "Events Head", image: member4, linkedin: "#", email: "ishita@ieee.org" },

    { name: "Megha Verma", role: "Outreach Coordinator", image: member5, linkedin: "#", email: "megha@ieee.org" },

    { name: "Ameya Nigam", role: "Treasurer", image: member6, linkedin: "https://www.linkedin.com/in/ameyanigam", email: "ameyanigam@gmail.com" },
  ];

  const events = [
    {
      title: "Women in Tech Leadership Talk",
      date: "February 10, 2025",
      time: "3:00 PM - 5:00 PM",
      location: "Seminar Hall",
      description: "Industry leaders share insights on leadership, innovation, and career growth in technology.",
      type: "upcoming" as const,
    },
    {
      title: "Mentorship Connect Program",
      date: "March 1, 2025",
      time: "11:00 AM - 2:00 PM",
      location: "Conference Room",
      description: "Interactive mentorship session connecting students with professionals.",
      type: "upcoming" as const,
    },
    {
      title: "Career Development Workshop",
      date: "March 20, 2025",
      time: "1:00 PM - 4:00 PM",
      location: "Auditorium",
      description: "Resume building, interview preparation, and personal branding session.",
      type: "upcoming" as const,
    },
  ];

  const focusAreas = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Leadership Development",
      description: "Empowering women to take leadership roles in engineering and technology.",
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "Mentorship & Networking",
      description: "Building strong professional networks through structured mentorship programs.",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Career Advancement",
      description: "Skill-building workshops and career guidance for professional growth.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "STEM Outreach",
      description: "Encouraging young girls and students to pursue careers in STEM fields.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <HeroSection
        title="IEEE WIE Chapter"
        subtitle="Women in Engineering"
        description="Advancing women in engineering and technology through leadership, mentorship, networking, and professional development opportunities."
        primaryAction={{ label: "Join WIE", path: "https://www.ieee.org/membership-catalog/productdetail/showProductDetailPage.html?product=MEMWIE050" }}
        secondaryAction={{ label: "View Members", path: "#team" }}
        stats={[
          { icon: <Users className="w-6 h-6" />, value: "60+", label: "Active Members" },
          { icon: <BarChart3 className="w-6 h-6" />, value: "10+", label: "Annual Programs" },
          { icon: <Sparkles className="w-6 h-6" />, value: "15+", label: "Leadership Events" },
        ]}
      />

      <AboutSection
        title="About IEEE WIE"
        description="The IEEE Women in Engineering (WIE) Chapter promotes women engineers and scientists by fostering a supportive environment for technical growth, leadership development, and professional networking."
        mission="To inspire, engage, and empower women in engineering and technology by providing opportunities for mentorship, leadership, and community building."
        vision="To create a diverse and inclusive engineering community where women thrive and lead innovation."
      />

      {/* Focus Areas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
            Focus Areas
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

      <section id="team">
        <MemberCarousel title="WIE Chapter Team" members={wieMembers} />
       </section>
      <EventsSection title="WIE Events & Programs" events={events} />

      {/* Resources Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
            WIE Resources
          </h2>
          <div className="w-20 h-1 bg-gradient-ieee mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-card p-6 rounded-2xl shadow-ieee-sm hover:shadow-ieee-md transition-all">
              <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                Professional Development
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Leadership development programs</li>
                <li>• Career guidance webinars</li>
                <li>• Resume & interview workshops</li>
                <li>• Networking opportunities</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-2xl shadow-ieee-sm hover:shadow-ieee-md transition-all">
              <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                Global WIE Initiatives
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• IEEE WIE International Leadership Conference</li>
                <li>• WIE Mentorship Programs</li>
                <li>• STEM Outreach Campaigns</li>
                <li>• Scholarships & Recognition Programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WIEBranch;
