
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Star, Shield, Clock, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import VehicleCard from "@/components/VehicleCard";
import { vehicles } from "@/lib/types";

const Index = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get featured vehicles (first 3)
  const featuredVehicles = vehicles.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Featured Vehicles Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meilleurs véhicules</h2>
              <p className="text-luxury-600 max-w-2xl mx-auto">
              Découvrez notre sélection de véhicules de luxe triés sur le volet pour votre prochaine aventure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredVehicles.map((vehicle) => (
                <div key={vehicle.id} className="animate-slide-up">
                  <VehicleCard vehicle={vehicle} />
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/vehicles">
                <Button className="bg-luxury-900 hover:bg-luxury-800 text-white">
                  Voir tout nos véhicules
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi nous choisir ?</h2>
              <p className="text-luxury-600 max-w-2xl mx-auto">
              Découvrez l'alliance parfaite du luxe, de la commodité et d'un service exceptionnel.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-gray-50 p-8 rounded-lg text-center animate-slide-up">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-luxury-100 text-luxury-900 mb-6">
                  <Star className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Premium Fleet</h3>
                <p className="text-luxury-600">
                Notre collection comprend les véhicules les plus prestigieux du monde, méticuleusement entretenus à la perfection.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg text-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-luxury-100 text-luxury-900 mb-6">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Assurance complète</h3>
                <p className="text-luxury-600">
                Conduisez en toute confiance en sachant que vous êtes entièrement couvert par nos assurances complètes.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg text-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-luxury-100 text-luxury-900 mb-6">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Location flexible</h3>
                <p className="text-luxury-600">
                Choisissez des périodes de location allant de 24 heures à une semaine complète, avec des processus de réservation et d'enlèvement transparents.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-luxury-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à vivre l'expérience du luxe ?</h2>
              <p className="text-gray-300 mb-8">
              Créez un compte dès aujourd'hui et bénéficiez d'offres exclusives et de réservations prioritaires.
              </p>
              <Link to="/register">
                <Button size="lg" className="bg-white text-luxury-900 hover:bg-white/90 px-6 py-6 text-lg">
                  <PlusCircle className="mr-2 h-5 w-5" />
                  Créez votre compte
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
