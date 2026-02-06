"use client"

import * as React from "react"
import { Search, Play } from "lucide-react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

const voices = [
    {
        id: "male-energetic",
        name: "Male - Energetic",
        description: "Energetic male voice with bright tone",
        avatar: "👨",
        color: "bg-purple-100",
    },
    {
        id: "female-calm",
        name: "Female - Calm",
        description: "Calm female voice with soothing tone",
        avatar: "👩",
        color: "bg-pink-100",
    },
    {
        id: "ai-neutral",
        name: "AI - Neutral",
        description: "Neutral AI voice, clear and even",
        avatar: "🤖",
        color: "bg-blue-100",
    },
]

interface StepVoiceProps {
    value: string | null
    onChange: (value: string) => void
}

export function StepVoice({ value, onChange }: StepVoiceProps) {
    const [search, setSearch] = React.useState("")

    const filteredVoices = voices.filter((voice) =>
        voice.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold">Choose Voice</h2>
                <p className="text-muted-foreground">
                    Select a voice from your available voice profiles.
                </p>
            </div>

            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                    placeholder="Search voice..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="pl-10"
                />
            </div>

            <div className="space-y-3">
                {filteredVoices.map((voice) => (
                    <button
                        key={voice.id}
                        type="button"
                        onClick={() => onChange(voice.id)}
                        className={cn(
                            "w-full flex items-center gap-4 p-4 rounded-lg border transition-all text-left",
                            value === voice.id
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50"
                        )}
                    >
                        <div className={cn("p-3 rounded-full text-xl", voice.color)}>
                            {voice.avatar}
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold">{voice.name}</h3>
                            <p className="text-sm text-muted-foreground">
                                {voice.description}
                            </p>
                        </div>
                        <span
                            className="w-8 h-8 rounded-full flex items-center justify-center bg-muted hover:bg-muted/80"
                            aria-label={`Preview ${voice.name} voice`}
                        >
                            <Play className="w-4 h-4" />
                        </span>
                        <div
                            className={cn(
                                "w-5 h-5 rounded-full border-2 transition-all",
                                value === voice.id
                                    ? "border-primary bg-primary"
                                    : "border-muted-foreground/30"
                            )}
                        >
                            {value === voice.id && (
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-white" />
                                </div>
                            )}
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}
