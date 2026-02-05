import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

/**
 * SiteHeader component.
 * Displays the main site navigation, logo, and authentication actions (Login/Get Started).
 * Uses glassmorphism effects for a premium feel.
 */
export function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 max-w-screen-2xl items-center">
                <div className="mr-4 flex">
                    <Link className="mr-6 flex items-center space-x-2" href="/">
                        <span className="hidden font-bold sm:inline-block text-xl tracking-tighter bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                            VidMax
                        </span>
                    </Link>
                    <nav className="flex items-center gap-6 text-sm">
                        <Link
                            href="#features"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            Features
                        </Link>
                        <Link
                            href="#pricing"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            Pricing
                        </Link>
                        <Link
                            href="#about"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            About
                        </Link>
                    </nav>
                </div>

                <div className="flex flex-1 items-center justify-end space-x-2 md:justify-end">
                    <nav className="flex items-center space-x-2">
                        <SignedOut>
                            <SignInButton mode="modal">
                                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20">
                                    Sign In
                                </Button>
                            </SignInButton>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </nav>
                </div>
            </div>
        </header>
    )
}
