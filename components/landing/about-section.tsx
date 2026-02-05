"use client";

import { Button } from "@/components/ui/button";

export function AboutSection() {
    return (
        <section id="about" className="py-24 relative overflow-hidden bg-secondary/5">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Democratizing AI Video Creation
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            At VidMax, we believe that creativity shouldn't be limited by technical skills or expensive software. Our mission is to empower creators, marketers, and businesses to tell their stories through high-quality video content generated in seconds.
                        </p>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Founded in 2024, we leverage state-of-the-art AI models to understand your vision and translate it into stunning visuals, perfectly timed edits, and engaging captions.
                        </p>
                        <div className="pt-4 text-center lg:text-left">
                            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20">
                                Join Our Mission
                            </Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        {[
                            { label: "Videos Generated", value: "1M+" },
                            { label: "Happy Creators", value: "50k+" },
                            { label: "Hours Saved", value: "500k+" },
                            { label: "AI Models", value: "12+" },
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center p-8 bg-background/40 backdrop-blur-md border border-border/50 rounded-2xl text-center hover:bg-background/60 transition-colors"
                            >
                                <span className="text-4xl font-bold text-primary mb-2">{stat.value}</span>
                                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
