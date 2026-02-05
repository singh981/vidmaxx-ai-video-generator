"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function PricingSection() {
    return (
        <section id="pricing" className="py-24 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-primary/10 rounded-full blur-3xl -z-10" />

            <div className="container px-4 md:px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent pb-4">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                        Choose the perfect plan for your content creation journey. No hidden fees.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Starter Plan */}
                    <Card className="relative flex flex-col bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors">
                        <CardHeader>
                            <CardTitle className="text-2xl">Starter</CardTitle>
                            <CardDescription>Perfect for trying out VidMax.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="text-4xl font-bold mb-6">
                                Free<span className="text-lg font-normal text-muted-foreground">/mo</span>
                            </div>
                            <ul className="space-y-3">
                                {[
                                    "5 AI Videos per month",
                                    "720p Video Export",
                                    "Basic Templates",
                                    "Standard Support"
                                ].map((feature) => (
                                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Check className="h-4 w-4 text-primary" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="w-full">Get Started</Button>
                        </CardFooter>
                    </Card>

                    {/* Pro Plan */}
                    <Card className="relative flex flex-col bg-background/50 backdrop-blur-sm border-primary/50 shadow-2xl shadow-primary/10 scale-105 z-10">
                        <div className="absolute -top-4 left-0 right-0 flex justify-center">
                            <Badge className="bg-primary hover:bg-primary/90">Most Popular</Badge>
                        </div>
                        <CardHeader>
                            <CardTitle className="text-2xl text-primary">Pro</CardTitle>
                            <CardDescription>For serious content creators.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="text-4xl font-bold mb-6">
                                $29<span className="text-lg font-normal text-muted-foreground">/mo</span>
                            </div>
                            <ul className="space-y-3">
                                {[
                                    "Unlimited AI Videos",
                                    "4K Video Export",
                                    "Premium Templates",
                                    "Auto-Captioning",
                                    "Priority Support",
                                    "No Watermark"
                                ].map((feature) => (
                                    <li key={feature} className="flex items-center gap-2 text-sm font-medium">
                                        <Check className="h-4 w-4 text-primary" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25">Upgrade to Pro</Button>
                        </CardFooter>
                    </Card>

                    {/* Agency Plan */}
                    <Card className="relative flex flex-col bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors">
                        <CardHeader>
                            <CardTitle className="text-2xl">Agency</CardTitle>
                            <CardDescription>For teams and organizations.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="text-4xl font-bold mb-6">
                                $99<span className="text-lg font-normal text-muted-foreground">/mo</span>
                            </div>
                            <ul className="space-y-3">
                                {[
                                    "Everything in Pro",
                                    "5 Team Members",
                                    "API Access",
                                    "Custom Branding",
                                    "Dedicated Account Manager",
                                    "SSO & Advanced Security"
                                ].map((feature) => (
                                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Check className="h-4 w-4 text-primary" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="w-full">Contact Sales</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    );
}
