import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wand2, CalendarClock, Zap, CheckCircle2 } from "lucide-react"

/**
 * FeaturesSection component.
 * Displays a grid of key product features (AI Generation, Scheduling, Auto-Pilot) using cards.
 */
export function FeaturesSection() {
    const features = [
        {
            title: "AI Video Generator",
            description: "Turn text prompts into viral simplified videos. Our AI handles the script, voiceover, and editing.",
            icon: Wand2,
            benefits: ["Text-to-Video", "AI Voiceovers", "Auto-Captions"]
        },
        {
            title: "Multi-Platform Scheduler",
            description: "Schedule your content for YouTube Shorts, Instagram Reels, and TikTok from a single dashboard.",
            icon: CalendarClock,
            benefits: ["Drag & Drop Calendar", "Best Time Prediction", "Cross-Posting"]
        },
        {
            title: "Auto-Pilot Mode",
            description: "Set it and forget it. VidMax automatically generates and posts daily content based on your niche.",
            icon: Zap,
            benefits: ["Daily Posting", "Niche Optimization", "Growth Analytics"]
        }
    ]

    return (
        <section id="features" className="container py-24 md:py-32 max-w-screen-xl">
            <div className="flex flex-col items-center justify-center text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                    Everything You Need to Go Viral
                </h2>
                <p className="mt-4 text-muted-foreground md:text-lg max-w-2xl">
                    VidMax combines powerful AI creation tools with a smart scheduler to automate your growth.
                </p>
            </div>

            <div className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-16">
                {features.map((feature, index) => (
                    <Card key={index} className="glass-card transition-all hover:bg-card/80 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 border-white/5">
                        <CardHeader>
                            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20 text-primary">
                                <feature.icon className="h-7 w-7" />
                            </div>
                            <CardTitle className="text-xl font-bold text-foreground">{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-6">
                                {feature.description}
                            </p>
                            <ul className="space-y-2">
                                {feature.benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-center text-sm text-foreground/80">
                                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
