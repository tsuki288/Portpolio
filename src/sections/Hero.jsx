import { Button } from "@/components/Button";
import heroImg from "@/assets/Hero.jpg";
import profileImg from "@/assets/Profile.jpg";

import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  ChevronDown,
  Facebook,
} from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

export const Hero = () => {
  const skills = [
    "React",
    "Tailwind",
    "Html",
    "figma",
    "node.js",
    "tailwind",
    "C++",
    "javascript",
    "CSS",
    "MySQL",
    "GitHub",
    "Git",
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Hero"
          className="w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 from-background/20 via-background/80 to-background" />
      </div>
      {/*Green dots*/}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${Math.random() * 20 + 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      {/*content*/}

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/*left Column*/}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                FRONTEND DEVELOPER
              </span>
            </div>
            {/*Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animate-delay-100">
                Turning<span className="text-primary glow-text"> coffee</span>
                <br />
                Into frontend
                <br />
                <span className="font-serif italic font-normal text-white">
                  since forever.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animate-delay-200">
                Hi, I'm Najib — a frontend developer crafting clean,
                interactive, and responsive web experiences with React and
                Tailwind CSS.
              </p>
            </div>
            {/*CTAs*/}
            <div className="flex flex-wrap gap-4 animate-fade-in animate-delay-300">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton>
                <Download className="w-5 h-5 " />
                Download CV
              </AnimatedBorderButton>
            </div>
            {/*Social links*/}
            <div className="flex items-center gap-4 animate-fade-in animate-delay-400">
              <span className="text-sm text-muted-foreground">Follow me:</span>
              {[
                { icon: Github, href: "https://github.com/Devtsukii" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/najib-racman-9423833a0/",
                },
                { icon: Facebook, href: "https://www.facebook.com/Tsukii28" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/*right Column*/}
          <div className="relative animate-fade-in animate-delay-300">
            {/*profile image*/}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 blur-2xl animate-pulse" />

              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src={profileImg}
                  alt="Najib S. Racman"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />
              </div>
              {/*floating badge*/}
              <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />

                  <span className="text-sm font-medium">
                    Available for work
                  </span>
                </div>
              </div>
              {/*Stats badge*/}
              <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animate-delay-500">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-xs text-muted-foreground">Years Exp.</div>
              </div>
            </div>
          </div>
        </div>
        {/*Skills section*/}

        <div className="mt-20 animate-fade-in animate-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animate-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
