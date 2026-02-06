"use client"

import * as React from "react"
import { Calendar, Clock, Youtube, Instagram, Video } from "lucide-react"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

import { Button } from "@/components/ui/button"

interface ScheduleData {
    date: string
    time: string
    platforms: string[]
}

interface StepScheduleProps {
    value: ScheduleData
    onChange: (value: ScheduleData) => void
}

const platforms = [
    { id: "youtube", name: "YouTube", icon: Youtube, color: "bg-red-100 text-red-600" },
    { id: "instagram", name: "Instagram", icon: Instagram, color: "bg-pink-100 text-pink-600" },
    { id: "tiktok", name: "TikTok", icon: Video, color: "bg-black text-white" },
]

/**
 * Component for scheduling the series publication.
 * Allows setting date, time, and target platforms (multi-select).
 * 
 * @param props - Component properties
 * @param props.value - Current schedule configuration data
 * @param props.onChange - Callback to update schedule configuration
 */
export function StepSchedule({ value, onChange }: StepScheduleProps) {
    const togglePlatform = (platformId: string) => {
        const newPlatforms = value.platforms.includes(platformId)
            ? value.platforms.filter((p) => p !== platformId)
            : [...value.platforms, platformId]
        onChange({ ...value, platforms: newPlatforms })
    }

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold">Schedule Publishing</h2>
                <p className="text-muted-foreground">
                    Schedule publishing of the series.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label>Date</Label>
                    <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="date"
                            value={value.date}
                            onChange={(e) => onChange({ ...value, date: e.target.value })}
                            className="pl-10"
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label>Time</Label>
                    <div className="relative">
                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="time"
                            value={value.time}
                            onChange={(e) => onChange({ ...value, time: e.target.value })}
                            className="pl-10"
                        />
                    </div>
                </div>
            </div>



            <div className="flex flex-wrap gap-2">
                {platforms.map((platform) => (
                    <Button
                        key={platform.id}
                        type="button"
                        variant={value.platforms.includes(platform.id) ? "default" : "outline"}
                        onClick={() => togglePlatform(platform.id)}
                        className="gap-2"
                    >
                        <platform.icon className="h-4 w-4" />
                        {platform.name}
                    </Button>
                ))}
            </div>
        </div>
    )
}
