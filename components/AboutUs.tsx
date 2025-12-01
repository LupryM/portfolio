"use client";

import { Users, Code2, Paintbrush, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export default function AboutUs() {
  return (
    <section id="about" className="py-20 px-6 border-t border-border bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">A Team with Big Passion</h2>
          <p className="text-lg text-muted-foreground">
            Meet the minds behind LM Studios.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Left Side: Text Content */}
          <div className="md:col-span-3 space-y-6">
            <h3 className="text-3xl font-bold">Direct Collaboration, No Middlemen</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
Our compact and highly skilled team allows us to work efficiently and personally on every project. When you work with us, you collaborate directly with the designer and the developer who are building your site. This ensures clear communication, fast delivery, and a final result that reflects your vision perfectly.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our lean structure allows us to be agile, personal, and fully invested in your success. We combine our complementary skills to build websites that are not only beautiful but also fast, secure, and reliable.
            </p>
            <a href="#quote">
              <Button variant="outline" className="border-border hover:border-accent/50">
                  Enquire About Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          {/* Right Side: Team Representation */}
          <div className="md:col-span-2 space-y-8">
            <div className="flex items-center gap-4 p-4 border border-border rounded-lg bg-background/50">
              <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                <Paintbrush className="h-8 w-8" />
              </div>
              <div>
                <h4 className="text-xl font-bold">The Designer</h4>
                <p className="text-muted-foreground">Crafting beautiful, intuitive user experiences that capture your brand's essence.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 border border-border rounded-lg bg-background/50">
              <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                <Code2 className="h-8 w-8" />
              </div>
              <div>
                <h4 className="text-xl font-bold">The Developer</h4>
                <p className="text-muted-foreground">Building fast, secure, and scalable websites with clean, modern code.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
