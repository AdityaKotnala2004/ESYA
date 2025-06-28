"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  MapPin,
  Users,
  Trophy,
  Zap,
  Code,
  Cpu,
  Rocket,
  ArrowRight,
  Menu,
  X,
  Mail,
  Phone,
  Instagram,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react"
import Link from "next/link"

export default function ESYALandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const events = [
    {
      title: "RoboWars",
      category: "Hardware",
      description: "Build combat robots and battle for supremacy",
      icon: <Cpu className="h-6 w-6" />,
      prize: "₹50,000",
    },
    {
      title: "CodeStorm",
      category: "Software",
      description: "48-hour hackathon to solve real-world problems",
      icon: <Code className="h-6 w-6" />,
      prize: "₹75,000",
    },
    {
      title: "Innovation Expo",
      category: "Mixed",
      description: "Showcase your groundbreaking tech innovations",
      icon: <Rocket className="h-6 w-6" />,
      prize: "₹1,00,000",
    },
    {
      title: "Circuit Master",
      category: "Hardware",
      description: "Design and build complex electronic circuits",
      icon: <Zap className="h-6 w-6" />,
      prize: "₹30,000",
    },
  ]

  const sponsors = [
    { name: "TechCorp", tier: "Title" },
    { name: "InnovateLabs", tier: "Gold" },
    { name: "FutureTech", tier: "Silver" },
    { name: "DevSolutions", tier: "Bronze" },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-cyan-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-black text-cyan-400">
              ESYA<span className="text-purple-400">'25</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="hover:text-cyan-400 transition-colors font-medium">
                About
              </Link>
              <Link href="#events" className="hover:text-cyan-400 transition-colors font-medium">
                Events
              </Link>
              <Link href="#sponsors" className="hover:text-cyan-400 transition-colors font-medium">
                Sponsors
              </Link>
              <Link href="#contact" className="hover:text-cyan-400 transition-colors font-medium">
                Contact
              </Link>
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-black font-bold">
                Register Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-cyan-500/20">
              <div className="flex flex-col space-y-4 mt-4">
                <Link href="#about" className="hover:text-cyan-400 transition-colors">
                  About
                </Link>
                <Link href="#events" className="hover:text-cyan-400 transition-colors">
                  Events
                </Link>
                <Link href="#sponsors" className="hover:text-cyan-400 transition-colors">
                  Sponsors
                </Link>
                <Link href="#contact" className="hover:text-cyan-400 transition-colors">
                  Contact
                </Link>
                <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-black font-bold w-full">
                  Register Now
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />

          {/* Geometric Shapes */}
          <div
            className="absolute top-20 left-10 w-32 h-32 border-4 border-cyan-400/30 rotate-45 animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.1}px) rotate(45deg)` }}
          />
          <div
            className="absolute top-40 right-20 w-24 h-24 bg-purple-500/20 rotate-12"
            style={{ transform: `translateY(${scrollY * -0.15}px) rotate(12deg)` }}
          />
          <div
            className="absolute bottom-40 left-1/4 w-16 h-16 border-2 border-green-400/40 rounded-full animate-bounce"
            style={{ transform: `translateY(${scrollY * 0.08}px)` }}
          />

          {/* Circuit Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M0 10h5v-5h5v10h5v-5h5v5" stroke="currentColor" strokeWidth="0.5" fill="none" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit)" className="text-cyan-400" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="mb-8">
            <Badge className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border-cyan-400/50 mb-4 text-lg px-6 py-2">
              August 15-17, 2025
            </Badge>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-none">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              ESYA
            </span>
            <br />
            <span className="text-white text-4xl md:text-6xl lg:text-7xl">TECH FEST</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Where <span className="text-cyan-400 font-bold">INNOVATION</span> meets{" "}
            <span className="text-purple-400 font-bold">EXECUTION</span>. Join India's most electrifying tech fest at
            IIIT-Delhi.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-black font-bold text-lg px-8 py-4 group"
            >
              Register Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold text-lg px-8 py-4 bg-transparent"
            >
              View Events
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-cyan-400 mb-2">50+</div>
              <div className="text-gray-400 font-medium">Events</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-purple-400 mb-2">5000+</div>
              <div className="text-gray-400 font-medium">Participants</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-pink-400 mb-2">₹10L+</div>
              <div className="text-gray-400 font-medium">Prize Pool</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-green-400 mb-2">100+</div>
              <div className="text-gray-400 font-medium">Colleges</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black mb-6">
                ABOUT <span className="text-cyan-400">ESYA</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8" />
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-purple-400">Innovation. Technology. Future.</h3>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  ESYA is IIIT-Delhi's flagship tech fest that brings together the brightest minds in technology,
                  innovation, and development. From cutting-edge hardware projects to revolutionary software solutions,
                  ESYA is where the future takes shape.
                </p>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Join us for three days of intense competition, learning, and networking with industry leaders, tech
                  enthusiasts, and fellow innovators from across the nation.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 border border-cyan-400/30 rounded-lg">
                    <Calendar className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
                    <div className="font-bold text-cyan-400">3 Days</div>
                    <div className="text-sm text-gray-400">Non-stop Action</div>
                  </div>
                  <div className="text-center p-4 border border-purple-400/30 rounded-lg">
                    <MapPin className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                    <div className="font-bold text-purple-400">IIIT-Delhi</div>
                    <div className="text-sm text-gray-400">Premium Venue</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                {/* Tech Illustration */}
                <div className="relative bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-400/20">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-16 bg-cyan-400/20 rounded-lg flex items-center justify-center">
                      <Code className="h-8 w-8 text-cyan-400" />
                    </div>
                    <div className="h-16 bg-purple-400/20 rounded-lg flex items-center justify-center">
                      <Cpu className="h-8 w-8 text-purple-400" />
                    </div>
                    <div className="h-16 bg-pink-400/20 rounded-lg flex items-center justify-center">
                      <Rocket className="h-8 w-8 text-pink-400" />
                    </div>
                    <div className="h-16 bg-green-400/20 rounded-lg flex items-center justify-center">
                      <Zap className="h-8 w-8 text-green-400" />
                    </div>
                    <div className="h-16 bg-yellow-400/20 rounded-lg flex items-center justify-center">
                      <Trophy className="h-8 w-8 text-yellow-400" />
                    </div>
                    <div className="h-16 bg-red-400/20 rounded-lg flex items-center justify-center">
                      <Users className="h-8 w-8 text-red-400" />
                    </div>
                  </div>

                  {/* Connecting Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                    <path
                      d="M20 20 L50 50 L80 20 M20 80 L50 50 L80 80"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      fill="none"
                      className="text-cyan-400/30"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black mb-6">
                FEATURED <span className="text-purple-400">EVENTS</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mb-8" />
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Compete in cutting-edge challenges that push the boundaries of technology and innovation
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {events.map((event, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all">
                          {event.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {event.title}
                          </h3>
                          <Badge variant="outline" className="text-purple-400 border-purple-400/50 mt-1">
                            {event.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">Prize Pool</div>
                        <div className="text-xl font-bold text-green-400">{event.prize}</div>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">{event.description}</p>
                    <Button
                      variant="outline"
                      className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400 hover:text-black group-hover:border-cyan-400 transition-all bg-transparent"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-black font-bold text-lg px-8 py-4"
              >
                View All Events
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black mb-6">
                OUR <span className="text-green-400">SPONSORS</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto mb-8" />
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powered by industry leaders who believe in innovation and the future of technology
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {sponsors.map((sponsor, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8 hover:border-green-400/50 transition-all duration-300 group-hover:bg-gray-800/70">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-400/20 to-cyan-400/20 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:from-green-400/30 group-hover:to-cyan-400/30 transition-all">
                      <div className="text-2xl font-black text-green-400">{sponsor.name.charAt(0)}</div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                      {sponsor.name}
                    </h3>
                    <Badge variant="outline" className="text-green-400 border-green-400/50">
                      {sponsor.tier}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                variant="outline"
                className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-bold text-lg px-8 py-4 bg-transparent"
              >
                Become a Sponsor
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              READY TO <span className="text-cyan-400">INNOVATE?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of tech enthusiasts, innovators, and future leaders at ESYA 2025. Register now and be part
              of something extraordinary.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-black font-bold text-xl px-12 py-6 group"
              >
                Register Now
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold text-xl px-12 py-6 bg-transparent"
              >
                Download Brochure
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>August 15-17, 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>IIIT-Delhi Campus</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>5000+ Expected Participants</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black mb-6">
                GET IN <span className="text-pink-400">TOUCH</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mb-8" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Mail className="h-8 w-8 text-pink-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-gray-400 mb-4">Get in touch for any queries</p>
                <a href="mailto:esya@iiitd.ac.in" className="text-pink-400 hover:text-pink-300 transition-colors">
                  esya@iiitd.ac.in
                </a>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-gray-400 mb-4">Speak to our team directly</p>
                <a href="tel:+911234567890" className="text-purple-400 hover:text-purple-300 transition-colors">
                  +91 12345 67890
                </a>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-green-500/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                <p className="text-gray-400 mb-4">IIIT-Delhi Campus</p>
                <p className="text-cyan-400">
                  Okhla Industrial Estate
                  <br />
                  New Delhi - 110020
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="text-3xl font-black text-cyan-400 mb-4">
                  ESYA<span className="text-purple-400">'25</span>
                </div>
                <p className="text-gray-400 mb-4">
                  IIIT-Delhi's flagship tech fest bringing together innovation, technology, and the future.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#events" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      Events
                    </a>
                  </li>
                  <li>
                    <a href="#sponsors" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      Sponsors
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4 text-white">Events</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      RoboWars
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      CodeStorm
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      Innovation Expo
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      Circuit Master
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4 text-white">Contact Info</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>IIIT-Delhi</li>
                  <li>Okhla Industrial Estate</li>
                  <li>New Delhi - 110020</li>
                  <li>esya@iiitd.ac.in</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center">
              <p className="text-gray-400">© 2025 ESYA Tech Fest, IIIT-Delhi. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
