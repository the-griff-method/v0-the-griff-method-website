import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Target, Zap } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every strategy is built around measurable outcomes and ROI.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our success. We become an extension of your team.",
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "We stay ahead of trends and platform changes to keep you competitive.",
  },
  {
    icon: Award,
    title: "Proven Expertise",
    description: "Years of experience across industries with a track record of success.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
              The{" "}
              <span className="italic animate-pulse text-white text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent drop-shadow-lg">
                Griff
              </span>{" "}
              <span className="italic animate-pulse text-white text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent drop-shadow-lg">
                Method
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-6 text-pretty">
              We don't just manage social media – we engineer growth. Our methodology combines data science, creative
              excellence, and strategic thinking to deliver results that matter to your bottom line.
            </p>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Founded on the principle that social media should drive real business outcomes, we've helped hundreds of
              brands transform their digital presence into their most powerful growth engine.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div></div>
              <div></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-card border-border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/10 hover:border-white/20 cursor-pointer group"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-gray-100 group-hover:scale-110">
                    <value.icon className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
