"use client"

import * as React from "react"
import { Calendar, Clock, Youtube, Instagram } from "lucide-react"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
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
]

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

            <div className="space-y-2">
                <Label>Platform</Label>
                <Select
                    value={value.platforms[0] || "youtube"}
                    onValueChange={(platform) => onChange({ ...value, platforms: [platform] })}
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Select platform" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="youtube">YouTube</SelectItem>
                        <SelectItem value="instagram">Instagram</SelectItem>
                        <SelectItem value="tiktok">TikTok</SelectItem>
                    </SelectContent>
                </Select>
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
