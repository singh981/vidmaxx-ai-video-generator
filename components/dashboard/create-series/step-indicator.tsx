"use client"

import * as React from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface Step {
    id: number
    name: string
    icon?: React.ReactNode
}

interface StepIndicatorProps {
    steps: Step[]
    currentStep: number
}

export function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
    return (
        <div className="flex items-center justify-center w-full py-6">
            {steps.map((step, index) => (
                <React.Fragment key={step.id}>
                    <div className="flex flex-col items-center">
                        <div
                            className={cn(
                                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium border-2 transition-all",
                                currentStep > step.id
                                    ? "bg-primary border-primary text-primary-foreground"
                                    : currentStep === step.id
                                        ? "bg-primary border-primary text-primary-foreground"
                                        : "bg-background border-muted-foreground/30 text-muted-foreground"
                            )}
                        >
                            {currentStep > step.id ? (
                                <Check className="w-4 h-4" />
                            ) : (
                                step.id
                            )}
                        </div>
                        <span
                            className={cn(
                                "mt-2 text-xs font-medium transition-colors",
                                currentStep >= step.id
                                    ? "text-primary"
                                    : "text-muted-foreground"
                            )}
                        >
                            {step.name}
                        </span>
                    </div>
                    {index < steps.length - 1 && (
                        <div
                            className={cn(
                                "w-12 h-0.5 mx-2 -mt-6 transition-colors",
                                currentStep > step.id
                                    ? "bg-primary"
                                    : "bg-muted-foreground/30"
                            )}
                        />
                    )}
                </React.Fragment>
            ))}
        </div>
    )
}
