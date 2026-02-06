"use client"

import * as React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ArrowLeft, ArrowRight, HelpCircle } from "lucide-react"
import { UserButton } from "@clerk/nextjs"

import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { StepIndicator } from "./step-indicator"
import { StepTopic } from "./step-topic"
import { StepLanguage } from "./step-language"
import { StepVoice } from "./step-voice"
import { StepMusic } from "./step-music"
import { StepVideo } from "./step-video"
import { StepCaption } from "./step-caption"
import { StepSchedule } from "./step-schedule"

const steps = [
    { id: 1, name: "Topic" },
    { id: 2, name: "Language" },
    { id: 3, name: "Voice" },
    { id: 4, name: "Music" },
    { id: 5, name: "Video" },
    { id: 6, name: "Caption" },
    { id: 7, name: "Schedule" },
]

interface FormData {
    topic: string | null
    language: string | null
    voice: string | null
    music: string | null
    video: string | null
    caption: {
        text: string
        font: string
        position: "left" | "center" | "right"
    }
    schedule: {
        date: string
        time: string
        platforms: string[]
    }
}

export function CreateSeriesWizard() {
    const router = useRouter()
    const { state } = useSidebar()
    const isCollapsed = state === "collapsed"
    const [currentStep, setCurrentStep] = React.useState(1)
    const [formData, setFormData] = React.useState<FormData>({
        topic: null,
        language: null,
        voice: null,
        music: null,
        video: null,
        caption: {
            text: "",
            font: "inter",
            position: "center",
        },
        schedule: {
            date: "",
            time: "",
            platforms: ["youtube"],
        },
    })

    const handleNext = () => {
        if (currentStep < 7) {
            setCurrentStep(currentStep + 1)
        } else {
            // Final submit
            console.log("Form submitted:", formData)
            router.push("/dashboard/series")
        }
    }

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1)
        } else {
            router.push("/dashboard")
        }
    }

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <StepTopic
                        value={formData.topic}
                        onChange={(topic) => setFormData({ ...formData, topic })}
                    />
                )
            case 2:
                return (
                    <StepLanguage
                        value={formData.language}
                        onChange={(language) => setFormData({ ...formData, language })}
                    />
                )
            case 3:
                return (
                    <StepVoice
                        value={formData.voice}
                        onChange={(voice) => setFormData({ ...formData, voice })}
                    />
                )
            case 4:
                return (
                    <StepMusic
                        value={formData.music}
                        onChange={(music) => setFormData({ ...formData, music })}
                    />
                )
            case 5:
                return (
                    <StepVideo
                        value={formData.video}
                        onChange={(video) => setFormData({ ...formData, video })}
                    />
                )
            case 6:
                return (
                    <StepCaption
                        value={formData.caption}
                        onChange={(caption) => setFormData({ ...formData, caption })}
                    />
                )
            case 7:
                return (
                    <StepSchedule
                        value={formData.schedule}
                        onChange={(schedule) => setFormData({ ...formData, schedule })}
                    />
                )
            default:
                return null
        }
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Fixed Header */}
            <header className="sticky top-0 z-50 flex items-center justify-between border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-6 py-3">
                <div className="flex items-center gap-3">
                    <SidebarTrigger className="-ml-1" />
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon">
                        <HelpCircle className="h-5 w-5" />
                    </Button>
                    <UserButton />
                </div>
            </header>

            {/* Step Indicator */}
            <div>
                <StepIndicator steps={steps} currentStep={currentStep} />
            </div>

            {/* Content */}
            <main className="container max-w-3xl py-2">
                <div className="bg-card rounded-xl border p-8 min-h-[600px] flex flex-col">
                    <div className="flex-1">
                        {renderStep()}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-between mt-8 pt-6 border-t">
                        <Button variant="ghost" onClick={handleBack} className="gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Back
                        </Button>
                        <Button onClick={handleNext} className="gap-2">
                            {currentStep === 7 ? "Schedule Now" : "Continue"}
                            {currentStep !== 7 && <ArrowRight className="h-4 w-4" />}
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    )
}
