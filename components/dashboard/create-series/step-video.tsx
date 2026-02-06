"use client"

import * as React from "react"
import { Film, Sparkles, Upload, Check } from "lucide-react"
import { cn } from "@/lib/utils"

const videoOptions = [
    {
        id: "stock",
        name: "Stock Video",
        description: "High-quality stock footage for general-purpose video content.",
        icon: Film,
        color: "bg-blue-100 text-blue-600",
    },
    {
        id: "ai-generated",
        name: "AI Generated Video",
        description: "Generate videos using AI-assisted tools.",
        icon: Sparkles,
        color: "bg-purple-100 text-purple-600",
    },
    {
        id: "upload",
        name: "Upload Video",
        description: "Upload your own video files and metadata.",
        icon: Upload,
        color: "bg-green-100 text-green-600",
    },
]

interface StepVideoProps {
    value: string | null
    onChange: (value: string) => void
}

export function StepVideo({ value, onChange }: StepVideoProps) {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold">Video Options</h2>
                <p className="text-muted-foreground">
                    Choose video options by selecting a background asset video.
                </p>
            </div>

            <div className="space-y-3">
                {videoOptions.map((option) => (
                    <button
                        key={option.id}
                        type="button"
                        onClick={() => onChange(option.id)}
                        className={cn(
                            "w-full flex items-center gap-4 p-4 rounded-lg border transition-all text-left",
                            value === option.id
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50"
                        )}
                    >
                        <div className={cn("p-3 rounded-lg", option.color)}>
                            <option.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold">{option.name}</h3>
                            <p className="text-sm text-muted-foreground">
                                {option.description}
                            </p>
                        </div>
                        {value === option.id && (
                            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                                <Check className="w-4 h-4 text-primary-foreground" />
                            </div>
                        )}
                    </button>
                ))}
            </div>
        </div>
    )
}
