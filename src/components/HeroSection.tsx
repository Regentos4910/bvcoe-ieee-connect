import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  primaryAction?: {
    label: string;
    path: string;
  };
  secondaryAction?: {
    label: string;
    path: string;
  };
  stats?: { icon: React.ReactNode; value: string; label: string }[];
}

const HeroSection = ({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  stats,
}: HeroSectionProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-ieee-blue-light/20 animate-float" />
      <div className="absolute bottom-32 right-20 w-32 h-32 rounded-full bg-ieee-gold/20 animate-float animation-delay-400" />
      <div className="absolute top-1/3 right-10 w-16 h-16 rounded-full bg-ieee-blue-light/10 animate-float animation-delay-200" />

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-6 animate-fade-in-up opacity-0" style={{ animationFillMode: 'forwards' }}>
            <Zap className="w-4 h-4 text-ieee-gold" />
            <span className="text-primary-foreground text-sm font-medium">{subtitle}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-6 animate-fade-in-up opacity-0 animation-delay-200" style={{ animationFillMode: 'forwards' }}>
            {title}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in-up opacity-0 animation-delay-400" style={{ animationFillMode: 'forwards' }}>
            {description}
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0 animation-delay-600" style={{ animationFillMode: 'forwards' }}>
            {primaryAction && (
              <Link to={primaryAction.path}>
                <Button size="lg" className="bg-primary-foreground text-ieee-blue hover:bg-primary-foreground/90 gap-2 shadow-ieee-lg animate-pulse-glow">
                  {primaryAction.label}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            )}
            {secondaryAction && (
              <Link to={secondaryAction.path}>
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  {secondaryAction.label}
                </Button>
              </Link>
            )}
          </div>

          {/* Stats */}
          {stats && (
            <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-primary-foreground/20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in-up opacity-0" style={{ animationFillMode: 'forwards', animationDelay: `${0.8 + index * 0.2}s` }}>
                  <div className="flex justify-center mb-2 text-ieee-gold">
                    {stat.icon}
                  </div>
                  <p className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">{stat.value}</p>
                  <p className="text-sm text-primary-foreground/70">{stat.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
