
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1488590528505-98d2b5aba04b")'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Leverage the power and flexibility of FreeFlyer Astrodynamics Software in your next mission
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              From CubeSats to interplanetary missions, FreeFlyer provides the tools you need. 
              ITAR-free software designed for mission planning, analysis, and operations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button asChild size="lg" className="w-full">
                <Link to="/demo">
                  Book a Demo
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>

              <Button asChild variant="secondary" size="lg" className="w-full">
                <Link to="/quote">
                  Request a Quote
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="w-full bg-white/10 hover:bg-white/20">
                <Link to="/download">
                  Download FreeFlyer 7.9
                  <Download className="ml-2" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="w-full bg-white/10 hover:bg-white/20">
                <Link to="/preview">
                  Join the FreeFlyer 8 Preview
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
