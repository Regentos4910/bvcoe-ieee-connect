import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Event {
  title: string;
  date: string;
  time?: string;
  location: string;
  description: string;
  type: "upcoming" | "past";
}

interface EventsSectionProps {
  title: string;
  events: Event[];
}

const EventsSection = ({ title, events }: EventsSectionProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
          {title}
        </h2>
        <div className="w-20 h-1 bg-gradient-ieee mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-ieee-sm hover:shadow-ieee-lg transition-all duration-300 hover:-translate-y-2"
            >
              {/* Header */}
              <div className="h-2 bg-gradient-ieee" />
              
              <div className="p-6">
                {/* Type Badge */}
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                    event.type === "upcoming"
                      ? "bg-ieee-gold/10 text-ieee-gold"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {event.type === "upcoming" ? "Upcoming" : "Past Event"}
                </span>

                <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>

                {/* Details */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  {event.time && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{event.time}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>

                {event.type === "upcoming" && (
                  <Button className="w-full mt-6 gap-2 group/btn" variant="outline">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
