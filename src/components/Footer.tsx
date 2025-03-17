import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-luxury-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Section Marque */}
          <div>
            <Link to="/" className="inline-block">
              <h2 className="text-2xl font-heading font-bold mb-4">LuxuryRentalWord</h2>
            </Link>
            <p className="text-gray-300 mb-6 max-w-xs">
              Vivez l'expérience ultime du luxe avec notre service de location de véhicules haut de gamme. Élevez votre voyage avec nous.
            </p>
            <div className="flex space-x-4">
              
            <a href="https://www.instagram.com/luxuryrentalword/" className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
  <Instagram className="h-5 w-5" />
</a>
<a href="https://snapchat.com/t/KVqFzQOj" className="text-gray-300 hover:text-white transition-colors" aria-label="Snapchat" target="_blank" rel="noopener noreferrer">
  <MessageSquare className="h-5 w-5" />
</a>

            </div>
          </div>

          {/* Section Liens */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Accueil</Link>
              </li>
              <li>
                <Link to="/vehicles" className="text-gray-300 hover:text-white transition-colors">Notre flotte</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">À propos</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-300 hover:text-white transition-colors">Connexion</Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-300 hover:text-white transition-colors">Inscription</Link>
              </li>
            </ul>
          </div>

          {/* Catégories de véhicules */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Catégories de véhicules</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/vehicles?type=Luxury" className="text-gray-300 hover:text-white transition-colors">Voitures de luxe</Link>
              </li>
              <li>
                <Link to="/vehicles?type=Sports" className="text-gray-300 hover:text-white transition-colors">Voitures de sport</Link>
              </li>
              <li>
                <Link to="/vehicles?type=SUV" className="text-gray-300 hover:text-white transition-colors">SUV</Link>
              </li>
              <li>
                <Link to="/vehicles?type=Sedan" className="text-gray-300 hover:text-white transition-colors">Berlines</Link>
              </li>
            </ul>
          </div>

          {/* Section Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contactez-nous</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-gray-300 mr-3 shrink-0" />
                <span className="text-gray-300">71 rue desnouettes 75015, Paris, France</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-gray-300 mr-3 shrink-0" />
                <a href="tel:+33123456789" className="text-gray-300 hover:text-white transition-colors">+33 6 72 74 06 85</a>
              </li>
              <li className="flex">
<<<<<<< HEAD
                <Phone className="h-5 w-5 text-gray-300 mr-3 shrink-0" />
                <a href="tel:+33123456789" className="text-gray-300 hover:text-white transition-colors">+33 7 53 91 07 12</a>
              </li>
              <li className="flex">
=======
>>>>>>> 5c01f9dd5dbdbc949d9e329152d2c7bf99246958
                <Mail className="h-5 w-5 text-gray-300 mr-3 shrink-0" />
                <a href="mailto:info@luxuryrentalword.com" className="text-gray-300 hover:text-white transition-colors">info@luxuryrentalworld.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} LuxuryRentalWord. Tous droits réservés.
          </p>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Conditions d'utilisation</Link>
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Politique de confidentialité</Link>
            <Link to="/faq" className="text-gray-400 hover:text-white text-sm transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
