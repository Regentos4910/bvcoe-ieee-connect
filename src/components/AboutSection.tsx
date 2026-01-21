import { Target, Eye, Lightbulb } from "lucide-react";

interface AboutSectionProps {
  title: string;
  description: string;
  mission?: string;
  vision?: string;
}

const AboutSection = ({ title, description, mission, vision }: AboutSectionProps) => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            {title}
          </h2>
          <div className="w-20 h-1 bg-gradient-ieee mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {(mission || vision) && (
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {mission && (
              <div className="group bg-card p-8 rounded-2xl shadow-ieee-sm hover:shadow-ieee-md transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-ieee">
                    <Target className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{mission}</p>
              </div>
            )}

            {vision && (
              <div className="group bg-card p-8 rounded-2xl shadow-ieee-sm hover:shadow-ieee-md transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-ieee">
                    <Eye className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{vision}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutSection;
