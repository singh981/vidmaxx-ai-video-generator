import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Twitter, Instagram, Linkedin, Github } from "lucide-react"

/**
 * SiteFooter component.
 * Displays the footer with links to product, company, and legal pages, along with a newsletter form.
 */
export function SiteFooter() {
    return (
        <footer className="border-t border-white/5 bg-black/20 backdrop-blur-sm">
            <div className="container py-16 max-w-screen-xl">
                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col space-y-4">
                        <Link href="/" className="text-xl font-bold tracking-tighter bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                            VidMax
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            The AI-powered video generator and scheduler for the next generation of creators.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Product</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-primary transition-colors">AI Generator</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Video Scheduler</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Templates</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Pricing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Company</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Stay Updated</h3>
                        <p className="mb-4 text-sm text-muted-foreground">
                            Subscribe to our newsletter for the latest AI trends and features.
                        </p>
                        <div className="flex flex-col space-y-2">
                            <Input type="email" placeholder="Enter your email" className="bg-white/5 border-white/10 focus-visible:ring-primary" />
                            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} VidMax AI. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
