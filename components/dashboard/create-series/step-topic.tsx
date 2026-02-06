"use client"

import * as React from "react"
import { Search, Ghost, Lightbulb, GraduationCap } from "lucide-react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const niches = [
    {
        id: "scary-stories",
        name: "Scary Stories",
        description: "Create spine-chilling horror narratives and supernatural tales that captivate audiences",
        icon: Ghost,
        color: "bg-red-100 text-red-600",
    },
    {
        id: "motivation",
        name: "Motivation",
        description: "Inspire and empower your audience with uplifting stories and success principles",
        icon: Lightbulb,
        color: "bg-yellow-100 text-yellow-600",
    },
    {
        id: "educational",
        name: "Educational",
        description: "Share knowledge and teach valuable skills through engaging educational content",
        icon: GraduationCap,
        color: "bg-blue-100 text-blue-600",
    },
]

interface StepTopicProps {
    value: string | null
    onChange: (value: string) => void
}

export function StepTopic({ value, onChange }: StepTopicProps) {
    const [search, setSearch] = React.useState("")

    const filteredNiches = niches.filter((niche) =>
        niche.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold">Choose Your Niche</h2>
                <p className="text-muted-foreground">
                    Select from available niches or create your own custom niche
                </p>
            </div>

            <Tabs defaultValue="available" className="w-full">
                <TabsList>
                    <TabsTrigger value="option">Option</TabsTrigger>
                    <TabsTrigger value="available">Available Niche</TabsTrigger>
                    <TabsTrigger value="custom">Custom Niche</TabsTrigger>
                </TabsList>

                <TabsContent value="available" className="space-y-4 mt-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search niches..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="pl-10"
                        />
                    </div>

                    <div className="space-y-3">
                        {filteredNiches.map((niche) => (
                            <button
                                key={niche.id}
                                type="button"
                                onClick={() => onChange(niche.id)}
                                className={cn(
                                    "w-full flex items-center gap-4 p-4 rounded-lg border transition-all text-left",
                                    value === niche.id
                                        ? "border-primary bg-primary/5"
                                        : "border-border hover:border-primary/50"
                                )}
                            >
                                <div className={cn("p-2 rounded-lg", niche.color)}>
                                    <niche.icon className="h-5 w-5" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold">{niche.name}</h3>
                                    <p className="text-sm text-muted-foreground">
                                        {niche.description}
                                    </p>
                                </div>
                                <div
                                    className={cn(
                                        "w-5 h-5 rounded-full border-2 transition-all",
                                        value === niche.id
                                            ? "border-primary bg-primary"
                                            : "border-muted-foreground/30"
                                    )}
                                >
                                    {value === niche.id && (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-white" />
                                        </div>
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="option" className="mt-4">
                    <p className="text-muted-foreground">Option content coming soon...</p>
                </TabsContent>

                <TabsContent value="custom" className="mt-4">
                    <p className="text-muted-foreground">Custom niche creation coming soon...</p>
                </TabsContent>
            </Tabs>
        </div>
    )
}
