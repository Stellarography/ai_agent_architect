import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Brain, Cpu, GitBranch, BarChart3, Users, Zap } from "lucide-react";
import { Link } from 'react-router-dom';

interface FeatureCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  color: 'purple' | 'teal' | 'blue' | 'cyan' | 'amber' | 'rose';
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const features: FeatureCard[] = [
  {
    title: "Agent Management",
    description: "Create and configure intelligent AI agents with customizable behaviors and capabilities.",
    icon: <Cpu className="h-8 w-8" />,
    link: "/agents",
    color: 'purple'
  },
  {
    title: "Workflow Designer",
    description: "Design complex agent interaction workflows with our intuitive visual editor.",
    icon: <GitBranch className="h-8 w-8" />,
    link: "/design",
    color: 'teal'
  },
  {
    title: "Real-time Monitoring",
    description: "Monitor agent performance and system health with comprehensive analytics.",
    icon: <BarChart3 className="h-8 w-8" />,
    link: "/monitoring",
    color: 'blue'
  },
  {
    title: "Multi-Agent Collaboration",
    description: "Enable seamless collaboration between multiple AI agents for complex tasks.",
    icon: <Users className="h-8 w-8" />,
    link: "/agents",
    color: 'cyan'
  },
  {
    title: "Smart Automation",
    description: "Automate repetitive tasks with intelligent decision-making capabilities.",
    icon: <Zap className="h-8 w-8" />,
    link: "/design",
    color: 'amber'
  },
  {
    title: "Advanced AI Integration",
    description: "Leverage cutting-edge AI models and algorithms in your workflows.",
    icon: <Brain className="h-8 w-8" />,
    link: "/agents",
    color: 'rose'
  }
];

const testimonials: Testimonial[] = [
  {
    quote: "AI Agent Architect has transformed how we handle our automated workflows. The intuitive interface and powerful features make it a game-changer.",
    author: "Sarah Chen",
    role: "CTO",
    company: "TechForward Solutions"
  },
  {
    quote: "The ability to design and monitor AI agents in real-time has significantly improved our operational efficiency.",
    author: "Marcus Rodriguez",
    role: "Head of AI",
    company: "InnovateAI Labs"
  },
  {
    quote: "Outstanding platform for managing complex AI workflows. The support team is exceptional.",
    author: "Dr. Emily Watson",
    role: "Research Director",
    company: "Future Systems Institute"
  }
];

/**
 * HomePage Component
 * 
 * Contains the main content sections of the home page:
 * - Hero section with call-to-action
 * - Feature showcase with color-coded cards
 * - Testimonials from users
 * - Final call-to-action section
 */
const HomePage = () => {
  return (
    <>
      {/* Hero Section with Blobs */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="hero-background-effects absolute inset-0">
          <div className="blob blob-purple absolute w-[500px] h-[500px] top-0 -left-48 bg-purple-600/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="blob blob-teal absolute w-[500px] h-[500px] top-0 -right-48 bg-teal-600/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="blob blob-blue absolute w-[500px] h-[500px] -bottom-48 left-48 bg-blue-600/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
              Build Intelligent AI Agents with Ease
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Design, configure, and monitor AI agents with our comprehensive platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90"
                asChild
              >
                <Link to="/agents">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-300 hover:bg-gray-300/10"
                asChild
              >
                <Link to="/docs">
                  View Documentation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
            <p className="text-muted-foreground">Everything you need to build and manage AI agents</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className={`hover:shadow-lg transition-shadow hover:shadow-${feature.color}-500/10`}
              >
                <CardHeader>
                  <div className={`h-12 w-12 rounded-lg bg-${feature.color}-500/10 flex items-center justify-center text-${feature.color}-500 mb-4`}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <Link 
                    to={feature.link}
                    className={`text-${feature.color}-500 hover:text-${feature.color}-600 inline-flex items-center`}
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Innovators</h2>
            <p className="text-muted-foreground">See what our clients have to say about AI Agent Architect</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-50 dark:bg-slate-900">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                  </div>
                  <div className="mt-4">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the growing community of developers and businesses building the future of AI automation
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90"
            asChild
          >
            <Link to="/agents">
              Create Your First Agent
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default HomePage;