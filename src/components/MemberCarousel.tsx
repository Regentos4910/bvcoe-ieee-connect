import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Linkedin, Mail } from "lucide-react";

interface Member {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  email?: string;
}

interface MemberCarouselProps {
  title: string;
  members: Member[];
}

const MemberCarousel = ({ title, members }: MemberCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", skipSnaps: false },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    
    emblaApi.on("select", onSelect);
    onSelect();
    
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
          {title}
        </h2>
        <div className="w-20 h-1 bg-gradient-ieee mx-auto mb-12 rounded-full" />

        <div className="relative max-w-5xl mx-auto">
          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {members.map((member, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4"
                >
                  <div
                    className={`group relative bg-card rounded-2xl overflow-hidden shadow-ieee-md transition-all duration-500 ${
                      selectedIndex === index ? "scale-105 shadow-ieee-lg" : "scale-95 opacity-70"
                    }`}
                  >
                    {/* Image */}
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ieee-navy via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-ieee-navy to-transparent">
                      <h3 className="font-display font-semibold text-primary-foreground text-lg">
                        {member.name}
                      </h3>
                      <p className="text-ieee-blue-light text-sm mb-3">{member.role}</p>
                      
                      {/* Social Links */}
                      <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                          >
                            <Linkedin className="w-4 h-4 text-primary-foreground" />
                          </a>
                        )}
                        {member.email && (
                          <a
                            href={`mailto:${member.email}`}
                            className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                          >
                            <Mail className="w-4 h-4 text-primary-foreground" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-3 rounded-full bg-card shadow-ieee-md hover:shadow-ieee-lg transition-all hover:scale-110 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-3 rounded-full bg-card shadow-ieee-md hover:shadow-ieee-lg transition-all hover:scale-110 z-10"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {members.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  selectedIndex === index
                    ? "w-8 bg-primary"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberCarousel;
