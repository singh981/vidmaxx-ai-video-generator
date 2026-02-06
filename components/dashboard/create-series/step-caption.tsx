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
    bold: boolean
    italic: boolean
    underline: boolean
    color: string
}

interface StepCaptionProps {
    value: CaptionData
    onChange: (value: CaptionData) => void
}

const colorPresets = [
    "#fbbf24", // yellow
    "#f97316", // orange
    "#ef4444", // red
    "#8b5cf6", // purple
    "#3b82f6", // blue
    "#22c55e", // green
]

/**
 * Component for configuring video caption settings.
 * Allows users to set text, font, styling, positioning, and color.
 * 
 * @param props - Component properties
 * @param props.value - Current caption configuration data
 * @param props.onChange - Callback to update caption configuration
 */
export function StepCaption({ value, onChange }: StepCaptionProps) {
    const toggleBold = () => onChange({ ...value, bold: !value.bold })
    const toggleItalic = () => onChange({ ...value, italic: !value.italic })
    const toggleUnderline = () => onChange({ ...value, underline: !value.underline })
    const cycleColor = () => {
        const currentIndex = colorPresets.indexOf(value.color)
        const nextIndex = (currentIndex + 1) % colorPresets.length
        onChange({ ...value, color: colorPresets[nextIndex] })
    }

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold">Caption Settings</h2>
                <p className="text-muted-foreground">
                    Add a short caption that describes this series.
                </p>
            </div>

            <div className="space-y-4">
                <div className="space-y-2">
                    <Label>Caption</Label>
                    <Textarea
                        placeholder="Enter a brief caption (max 200 characters)."
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
                            <Button
                                variant={value.bold ? "default" : "ghost"}
                                size="icon"
                                className="h-8 w-8"
                                onClick={toggleBold}
                                aria-pressed={value.bold}
                                aria-label="Bold (Formatting not implemented)"
                                title="Formatting not implemented"
                                disabled
                                aria-disabled="true"
                            >
                                <Bold className="h-4 w-4" />
                            </Button>
                            <Button
                                variant={value.italic ? "default" : "ghost"}
                                size="icon"
                                className="h-8 w-8"
                                onClick={toggleItalic}
                                aria-pressed={value.italic}
                                aria-label="Italic (Formatting not implemented)"
                                title="Formatting not implemented"
                                disabled
                                aria-disabled="true"
                            >
                                <Italic className="h-4 w-4" />
                            </Button>
                            <Button
                                variant={value.underline ? "default" : "ghost"}
                                size="icon"
                                className="h-8 w-8"
                                onClick={toggleUnderline}
                                aria-pressed={value.underline}
                                aria-label="Underline (Formatting not implemented)"
                                title="Formatting not implemented"
                                disabled
                                aria-disabled="true"
                            >
                                <Underline className="h-4 w-4" />
                            </Button>
                        </div>
                        <button
                            type="button"
                            onClick={cycleColor}
                            className="w-8 h-8 rounded border-2 border-muted cursor-pointer transition-transform hover:scale-110"
                            style={{ backgroundColor: value.color || colorPresets[0] }}
                            aria-label="Change caption color"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label>Positioning</Label>
                    <div className="flex items-center gap-2">
                        <Button
                            variant={value.position === "left" ? "default" : "outline"}
                            size="icon"
                            onClick={() => onChange({ ...value, position: "left" })}
                            aria-label="Align left"
                        >
                            <AlignLeft className="h-4 w-4" />
                        </Button>
                        <Button
                            variant={value.position === "center" ? "default" : "outline"}
                            size="icon"
                            onClick={() => onChange({ ...value, position: "center" })}
                            aria-label="Align center"
                        >
                            <AlignCenter className="h-4 w-4" />
                        </Button>
                        <Button
                            variant={value.position === "right" ? "default" : "outline"}
                            size="icon"
                            onClick={() => onChange({ ...value, position: "right" })}
                            aria-label="Align right"
                        >
                            <AlignRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
