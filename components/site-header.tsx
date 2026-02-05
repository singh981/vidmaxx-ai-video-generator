import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Menu } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

/**
 * SiteHeader component.
 * Displays the main site navigation, logo, and authentication actions (Login/Get Started).
 * Uses glassmorphism effects for a premium feel.
 */
export function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
                <div className="flex items-center">
                    <Link className="mr-6 flex items-center space-x-2" href="/">
                        <Image
                            src="/vidmaxx-icon.svg"
                            alt="VidMax Logo"
                            width={40}
                            height={40}
                            className="w-10 h-10"
                        />
                        <span className="font-bold inline-block text-xl tracking-tighter bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                            VidMax
                        </span>
                    </Link>
                    {/* Desktop Navigation - Hidden on mobile */}
                    <nav className="hidden md:flex items-center gap-6 text-sm">
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

                <div className="flex items-center justify-end space-x-4">
                    <nav className="flex items-center space-x-6">
                        <SignedIn>
                            <Link href="/dashboard">
                                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20">
                                    Dashboard
                                </Button>
                            </Link>
                        </SignedIn>
                        <SignedOut>
                            <SignInButton mode="modal">
                                <Button variant="ghost" className="hover:text-primary">
                                    Sign In
                                </Button>
                            </SignInButton>
                            <SignUpButton mode="modal">
                                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20">
                                    Sign Up
                                </Button>
                            </SignUpButton>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </nav>

                    {/* Mobile Menu Trigger */}
                    <div className="md:hidden">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-9 w-9">
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-[200px] flex flex-col gap-2 p-4 rounded-xl border border-border/40 bg-background/95 backdrop-blur-md">
                                <DropdownMenuItem asChild>
                                    <Link
                                        href="#features"
                                        className="w-full cursor-pointer text-base font-medium transition-colors hover:text-primary"
                                    >
                                        Features
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link
                                        href="#pricing"
                                        className="w-full cursor-pointer text-base font-medium transition-colors hover:text-primary"
                                    >
                                        Pricing
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link
                                        href="#about"
                                        className="w-full cursor-pointer text-base font-medium transition-colors hover:text-primary"
                                    >
                                        About
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </header>
    )
}

