import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ieee-navy text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-ieee flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">IEEE</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg">IEEE BV(DU)COE Pune</h3>
                <p className="text-primary-foreground/70 text-sm">Student Branch</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-md">
              Advancing technology for the benefit of humanity. The IEEE BV(DU)COE Pune Student Branch is dedicated to fostering innovation and technical excellence among students.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/70 hover:text-ieee-blue-light transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/student-branch" className="text-primary-foreground/70 hover:text-ieee-blue-light transition-colors text-sm">
                  Student Branch
                </Link>
              </li>
              <li>
                <Link to="/cis-branch" className="text-primary-foreground/70 hover:text-ieee-blue-light transition-colors text-sm">
                  CIS Chapter
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 text-ieee-blue-light shrink-0" />
                <span>Bharati Vidyapeeth Campus, Pune - 411043</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Mail className="w-4 h-4 text-ieee-blue-light" />
                <span>ieee@bvucoep.edu.in</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-ieee-blue-light/20 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-ieee-blue-light/20 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-ieee-blue-light/20 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} IEEE BV(DU)COE Pune Student Branch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
