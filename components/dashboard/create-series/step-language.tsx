"use client"

import * as React from "react"
import { Search, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

const languages = [
    { id: "english", name: "English", flag: "🇺🇸" },
    { id: "spanish", name: "Spanish", flag: "🇪🇸" },
    { id: "french", name: "French", flag: "🇫🇷" },
    { id: "italian", name: "Italian", flag: "🇮🇹" },
    { id: "german", name: "German", flag: "🇩🇪" },
    { id: "portuguese", name: "Portuguese", flag: "🇧🇷" },
]

interface StepLanguageProps {
    value: string | null
    onChange: (value: string) => void
}

export function StepLanguage({ value, onChange }: StepLanguageProps) {
    const [search, setSearch] = React.useState("")

    const filteredLanguages = languages.filter((lang) =>
        lang.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold">Select Language</h2>
                <p className="text-muted-foreground">Choose the language for your video series.</p>
            </div>

            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                    placeholder="Search language..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="pl-10"
                />
            </div>

            <div className="space-y-2">
                {filteredLanguages.map((lang) => (
                    <button
                        key={lang.id}
                        type="button"
                        onClick={() => onChange(lang.id)}
                        className={cn(
                            "w-full flex items-center gap-4 p-4 rounded-lg border transition-all text-left",
                            value === lang.id
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50"
                        )}
                    >
                        <span className="text-2xl">{lang.flag}</span>
                        <span className="flex-1 font-medium">{lang.name}</span>
                        {value === lang.id && (
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
