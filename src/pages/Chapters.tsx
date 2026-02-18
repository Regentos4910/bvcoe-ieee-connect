import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

const Chapters = () => {
  const chapters = [
    { name: "CIS", path: "/cis-branch", desc: "Computational Intelligence Society" },
    { name: "EMBS", path: "/embs-branch", desc: "Engineering in Medicine & Biology Society" },
    { name: "IAS", path: "/ias-branch", desc: "Industry Applications Society" },
    { name: "WIE", path: "/wie-branch", desc: "Women in Engineering Affinity Group" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-32">
        <h1 className="text-4xl font-bold text-center mb-12">IEEE Chapters</h1>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {chapters.map((chapter) => (
            <Link key={chapter.path} to={chapter.path}>
              <Card className="p-6 hover:shadow-lg transition">
                <h2 className="text-xl font-semibold mb-2">{chapter.name}</h2>
                <p className="text-muted-foreground">{chapter.desc}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Chapters;
