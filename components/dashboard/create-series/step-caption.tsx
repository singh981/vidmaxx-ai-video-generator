"use client"

import * as React from "react"
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"

interface CaptionData {
    text: string
    font: string
    position: "left" | "center" | "right"
}

interface StepCaptionProps {
    value: CaptionData
    onChange: (value: CaptionData) => void
}

export function StepCaption({ value, onChange }: StepCaptionProps) {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold">Caption Settings</h2>
                <p className="text-muted-foreground">
                    Select your captions text chroise serour caption noames.
                </p>
            </div>

            <div className="space-y-4">
                <div className="space-y-2">
                    <Label>Caption</Label>
                    <Textarea
                        placeholder="Test is not your caption, fore sow as text."
                        value={value.text}
                        onChange={(e) => onChange({ ...value, text: e.target.value })}
                        className="min-h-[100px]"
                    />
                </div>

                <div className="space-y-2">
                    <Label>Font Style</Label>
                    <div className="flex items-center gap-2">
                        <Select
                            value={value.font}
                            onValueChange={(font) => onChange({ ...value, font })}
                        >
                            <SelectTrigger className="w-[120px]">
                                <SelectValue placeholder="Font" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="inter">Inter</SelectItem>
                                <SelectItem value="roboto">Roboto</SelectItem>
                                <SelectItem value="arial">Arial</SelectItem>
                                <SelectItem value="helvetica">Helvetica</SelectItem>
                            </SelectContent>
                        </Select>
                        <div className="flex items-center gap-1 border rounded-md p-1">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Bold className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Italic className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Underline className="h-4 w-4" />
                            </Button>
                        </div>
                        <div className="w-8 h-8 rounded bg-gradient-to-br from-yellow-400 to-red-500" />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label>Positioning</Label>
                    <div className="flex items-center gap-2">
                        <Button
                            variant={value.position === "left" ? "default" : "outline"}
                            size="icon"
                            onClick={() => onChange({ ...value, position: "left" })}
                        >
                            <AlignLeft className="h-4 w-4" />
                        </Button>
                        <Button
                            variant={value.position === "center" ? "default" : "outline"}
                            size="icon"
                            onClick={() => onChange({ ...value, position: "center" })}
                        >
                            <AlignCenter className="h-4 w-4" />
                        </Button>
                        <Button
                            variant={value.position === "right" ? "default" : "outline"}
                            size="icon"
                            onClick={() => onChange({ ...value, position: "right" })}
                        >
                            <AlignRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
