import { ArrowRight, Download, Database, Settings, Compass, Rocket, Orbit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

      {/* Missions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Flying today's most exciting missions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {/* ISS Card */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img
                    src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa"
                    alt="International Space Station"
                    className="object-cover w-full h-full"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg mb-2">International Space Station</CardTitle>
                <CardDescription>
                  Supporting operations and trajectory analysis for the world's premier space laboratory
                </CardDescription>
              </CardContent>
            </Card>

            {/* JWST Card */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img
                    src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb"
                    alt="James Webb Space Telescope"
                    className="object-cover w-full h-full"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg mb-2">James Webb Space Telescope</CardTitle>
                <CardDescription>
                  Mission design and analysis for humanity's most advanced space observatory
                </CardDescription>
              </CardContent>
            </Card>

            {/* Lunar Gateway Card */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img
                    src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
                    alt="Lunar Gateway"
                    className="object-cover w-full h-full"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg mb-2">Lunar Gateway</CardTitle>
                <CardDescription>
                  Enabling sustained lunar presence through advanced orbital mechanics solutions
                </CardDescription>
              </CardContent>
            </Card>

            {/* Dream Chaser Card */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                    alt="Dream Chaser"
                    className="object-cover w-full h-full"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg mb-2">Dream Chaser</CardTitle>
                <CardDescription>
                  Supporting mission planning and operations for the next generation spaceplane
                </CardDescription>
              </CardContent>
            </Card>

            {/* MMS Card */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img
                    src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
                    alt="Magnetospheric Multiscale"
                    className="object-cover w-full h-full"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg mb-2">Magnetospheric Multiscale</CardTitle>
                <CardDescription>
                  Precision formation flying analysis for NASA's MMS constellation
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Astrodynamics building blocks at your fingertips
            </h2>
            <p className="text-lg text-gray-600">
              Spaceflight-proven algorithms under the hood
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {/* Orbit Propagation Card */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 mx-auto mb-4">
                  <Orbit className="w-full h-full text-primary" />
                </div>
                <CardTitle className="text-lg text-center">Orbit Propagation Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 text-gray-600 list-disc pl-4">
                  <li>High-fidelity force modeling</li>
                  <li>Multiple integration methods</li>
                  <li>Extensive atmospheric models</li>
                  <li>Solar radiation pressure</li>
                  <li>Third-body gravity effects</li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact Analysis Card */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 mx-auto mb-4">
                  <Compass className="w-full h-full text-primary" />
                </div>
                <CardTitle className="text-lg text-center">Contact Analysis Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 text-gray-600 list-disc pl-4">
                  <li>Ground station visibility</li>
                  <li>Inter-satellite links</li>
                  <li>Advanced line-of-sight tools</li>
                  <li>Access interval calculation</li>
                  <li>Communication coverage analysis</li>
                </ul>
              </CardContent>
            </Card>

            {/* Maneuver Planning Card */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 mx-auto mb-4">
                  <Rocket className="w-full h-full text-primary" />
                </div>
                <CardTitle className="text-lg text-center">Maneuver Planning Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 text-gray-600 list-disc pl-4">
                  <li>Impulsive & finite maneuvers</li>
                  <li>Delta-V optimization</li>
                  <li>Targeting capabilities</li>
                  <li>Multi-burn sequences</li>
                  <li>Automated planning tools</li>
                </ul>
              </CardContent>
            </Card>

            {/* Optimization Card */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 mx-auto mb-4">
                  <Settings className="w-full h-full text-primary" />
                </div>
                <CardTitle className="text-lg text-center">Optimization Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 text-gray-600 list-disc pl-4">
                  <li>Multiple optimization methods</li>
                  <li>Custom objective functions</li>
                  <li>Constraint handling</li>
                  <li>Parameter sensitivity</li>
                  <li>Multi-variable optimization</li>
                </ul>
              </CardContent>
            </Card>

            {/* Orbit Determination Card */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 mx-auto mb-4">
                  <Database className="w-full h-full text-primary" />
                </div>
                <CardTitle className="text-lg text-center">Orbit Determination Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 text-gray-600 list-disc pl-4">
                  <li>Multiple measurement types</li>
                  <li>Extended Kalman filtering</li>
                  <li>Batch least squares</li>
                  <li>Observation processing</li>
                  <li>Covariance analysis</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
