import { Button } from "@/components/Button";
import { Menu } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];
export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent py-5">
      <nav className="contener mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          {" "}
          NR<span>.</span>
        </a>
        {/*desktop nav*/}
        <div className="hidden md:flex items-center gap-1 ">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        {/*CTA BUTTON*/}
        <div className="hidden md:block">
          <Button size="sm">Contact Me</Button>
        </div>

        {/*mobile button*/}
        <button className="md:hidden p-2 text=foreground ">
          <Menu size={24} />
        </button>
      </nav>
      {/*mobile menu - to be implemented*/}
      <div className="md:hidden glass-strong">
        <div className="container mx-auto px-6 flex flex-col py-6 gap-4 ">
          {navLinks.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className="text-lg text-muted-foreground hover:text-foreground p-2"
            >
              {link.label}
            </a>
          ))}
          <Button>Contact Me</Button>
        </div>
      </div>
    </header>
  );
};
