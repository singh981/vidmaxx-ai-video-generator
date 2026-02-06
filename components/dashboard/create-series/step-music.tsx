"use client"

import * as React from "react"
import { Search, Music } from "lucide-react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

const musicTracks = [
    { id: "upbeat", name: "Upbeat", icon: "🎵" },
    { id: "ambient", name: "Ambient", icon: "🎶" },
    { id: "cinematic", name: "Cinematic", icon: "🎬" },
    { id: "dramatic", name: "Dramatic", icon: "🎭" },
    { id: "inspiring", name: "Inspiring", icon: "✨" },
]

interface StepMusicProps {
    value: string | null
    onChange: (value: string) => void
}

/**
 * Component for selecting background music.
 * Provides a searchable list of music tracks/moods.
 * 
 * @param props - Component properties
 * @param props.value - Currently selected music track ID
 * @param props.onChange - Callback to update selected music
 */
export function StepMusic({ value, onChange }: StepMusicProps) {
    const [search, setSearch] = React.useState("")

    const filteredTracks = musicTracks.filter((track) =>
        track.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold">Select Background Music</h2>
                <p className="text-muted-foreground">
                    Select the background music.
                </p>
            </div>

            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                    placeholder="Search music..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="pl-10"
                />
            </div>

            <div className="space-y-2">
                {filteredTracks.map((track) => (
                    <button
                        key={track.id}
                        type="button"
                        onClick={() => onChange(track.id)}
                        className={cn(
                            "w-full flex items-center gap-4 p-4 rounded-lg border transition-all text-left",
                            value === track.id
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50"
                        )}
                    >
                        <span className="text-xl">{track.icon}</span>
                        <span className="flex-1 font-medium">{track.name}</span>
                        <div
                            className={cn(
                                "w-5 h-5 rounded-full border-2 transition-all",
                                value === track.id
                                    ? "border-primary bg-primary"
                                    : "border-muted-foreground/30"
                            )}
                        >
                            {value === track.id && (
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
