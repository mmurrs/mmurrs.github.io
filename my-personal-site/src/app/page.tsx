'use client'

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    { src: "/api/placeholder/1920/1080", alt: "Mountain vista" },
    { src: "/api/placeholder/1920/1080", alt: "Ocean sunrise" },
    { src: "/api/placeholder/1920/1080", alt: "Forest canopy" },
    { src: "/api/placeholder/1920/1080", alt: "Desert landscape" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="berkeley-mono text-xl font-bold">YourName.dev</div>
            <div className="space-x-4">
              <Button variant="ghost" className="berkeley-mono">About</Button>
              <Button variant="ghost" className="berkeley-mono">Projects</Button>
              <Button variant="ghost" className="berkeley-mono">Gallery</Button>
              <Button variant="ghost" className="berkeley-mono">Contact</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Carousel */}
      <div className="pt-16">
        <div className="relative h-screen max-h-[70vh] overflow-hidden">
          {/* Carousel */}
          <div className="relative h-full">
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            {/* Carousel Controls */}
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <Button
                variant="ghost"
                size="icon"
                className="bg-black/20 hover:bg-black/40 text-white rounded-full"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="bg-black/20 hover:bg-black/40 text-white rounded-full"
                onClick={nextSlide}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            </div>
            {/* Hero Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <div className="text-center text-white">
                <h1 className="berkeley-mono text-5xl font-bold mb-4">Hello, I'm Your Name</h1>
                <p className="berkeley-mono text-xl mb-8">Developer • Designer • Creator</p>
                <div className="flex justify-center space-x-4">
                  <Button className="berkeley-mono">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Me
                  </Button>
                  <Button variant="outline" className="berkeley-mono text-white border-white hover:bg-white/20">
                    View Projects
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="berkeley-mono text-3xl">About Me</CardTitle>
            <CardDescription className="berkeley-mono">Creating digital experiences</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 leading-relaxed">
              I'm a passionate developer focused on building modern, accessible web applications.
              With a keen eye for design and a love for clean code, I bring ideas to life through
              technology.
            </p>
          </CardContent>
        </Card>

        {/* Projects Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="berkeley-mono">Project Alpha</CardTitle>
              <CardDescription className="berkeley-mono">Web Application</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src="/api/placeholder/600/300"
                alt="Project preview"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="text-gray-600 mb-4">
                A next-generation web application built with React and modern technologies.
                Focused on user experience and performance.
              </p>
              <Button variant="outline" size="sm" className="berkeley-mono">
                View Project
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="berkeley-mono">Project Beta</CardTitle>
              <CardDescription className="berkeley-mono">Mobile App</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src="/api/placeholder/600/300"
                alt="Project preview"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="text-gray-600 mb-4">
                An innovative mobile application that pushes the boundaries of what's
                possible in mobile development.
              </p>
              <Button variant="outline" size="sm" className="berkeley-mono">
                View Project
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
          <p className="berkeley-mono text-center text-gray-600 mt-4">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}