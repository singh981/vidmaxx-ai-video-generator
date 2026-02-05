import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs"

/**
 * HeroSection component.
 * The main visual anchor of the landing page, featuring a headline, CTA, and animated background visuals.
 */
export function HeroSection() {
    return (
        <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28">
            {/* Background Gradient Mesh */}
            <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px] animate-pulse" />
            <div className="absolute bottom-0 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[100px]" />

            <div className="container flex flex-col items-center text-center max-w-screen-xl">
                <div className="animate-fade-in-up md:max-w-4xl">
                    <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary mb-6 backdrop-blur-sm">
                        <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-ping" />
                        New: Auto-Schedule for TikTok & Reels
                    </div>

                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-br from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent pb-4">
                        Create Viral Short Videos <br className="hidden sm:block" />
                        <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                            with AI Magic
                        </span>
                    </h1>

                    <p className="mt-6 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Stop editing for hours. VidMax generates, edits, and schedules your short-form content for YouTube, Instagram, and TikTok automatically.
                    </p>

                    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <SignedOut>
                            <SignInButton mode="modal">
                                <Button size="lg" className="h-12 px-8 text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 rounded-full transition-all hover:scale-105">
                                    Go to Dashboard
                                </Button>
                            </SignInButton>
                        </SignedOut>

                        <SignedIn>
                            <Link href="/dashboard">
                                <Button size="lg" className="h-12 px-8 text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 rounded-full transition-all hover:scale-105">
                                    Go to Dashboard
                                </Button>
                            </Link>
                        </SignedIn>
                    </div>
                </div>

                {/* Dashboard Mockup / Visual */}
                <div className="mt-20 relative w-full max-w-5xl mx-auto perspective-1000">
                    <div className="relative rounded-xl bg-gradient-to-b from-white/10 to-white/5 p-2 backdrop-blur-sm shadow-2xl border border-white/10 animate-fade-in-up [animation-delay:200ms]">
                        <div className="rounded-lg bg-black/80 aspect-video overflow-hidden relative group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Fake UI Elements */}
                            <div className="absolute top-4 left-4 right-4 h-8 bg-white/5 rounded flex items-center px-4 space-x-2">
                                <div className="h-3 w-3 rounded-full bg-red-500/50" />
                                <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                                <div className="h-3 w-3 rounded-full bg-green-500/50" />
                            </div>

                            <div className="flex items-center justify-center h-full text-muted-foreground/50">
                                <div className="text-center">
                                    <p className="text-sm">AI Video Generation In Progress...</p>
                                    <div className="h-1 w-64 bg-white/10 rounded-full mt-4 overflow-hidden">
                                        <div className="h-full w-2/3 bg-primary animate-[progress_2s_ease-in-out_infinite]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-12 -left-12 p-4 glass-card rounded-2xl animate-float [animation-delay:0ms] hidden md:block">
                        <div className="flex items-center space-x-3">
                            <div className="h-10 w-10 rounded-full bg-red-500 flex items-center justify-center text-white font-bold">YT</div>
                            <div>
                                <p className="text-xs text-muted-foreground">Uploaded</p>
                                <p className="text-sm font-bold">Shorts #291</p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute -bottom-8 -right-8 p-4 glass-card rounded-2xl animate-float [animation-delay:2000ms] hidden md:block">
                        <div className="flex items-center space-x-3">
                            <div className="h-10 w-10 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold">IG</div>
                            <div>
                                <p className="text-xs text-muted-foreground">Scheduled</p>
                                <p className="text-sm font-bold">Reel for 10 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
