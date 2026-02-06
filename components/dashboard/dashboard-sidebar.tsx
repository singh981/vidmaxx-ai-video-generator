"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
    Book,
    CreditCard,
    Film,
    Settings,
    Video,
    Plus,
} from "lucide-react"
import { UserButton } from "@clerk/nextjs"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
    useSidebar,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

// Navigation items
const data = {
    navMain: [
        {
            title: "Series",
            url: "/dashboard/series",
            icon: Film,
        },
        {
            title: "Video",
            url: "/dashboard/video",
            icon: Video,
        },
        {
            title: "Guides",
            url: "/dashboard/guides",
            icon: Book,
        },
        {
            title: "Settings",
            url: "/dashboard/settings",
            icon: Settings,
        },
        {
            title: "Billing",
            url: "/dashboard/billing",
            icon: CreditCard,
        },
    ],
}

export function DashboardSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const pathname = usePathname()
    const { state } = useSidebar()
    const isCollapsed = state === "collapsed"

    return (
        <Sidebar collapsible="icon" {...props}>
            {/* Logo at top - always visible, bigger when collapsed */}
            <SidebarHeader className={isCollapsed ? "flex items-center justify-center py-4" : ""}>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild tooltip="VidMax">
                            <Link href="/dashboard">
                                <Image
                                    src="/vidmaxx-icon.svg"
                                    alt="VidMax Logo"
                                    width={isCollapsed ? 40 : 32}
                                    height={isCollapsed ? 40 : 32}
                                    className={isCollapsed ? "w-10 h-10 rounded-lg" : "w-8 h-8 rounded-lg"}
                                />
                                <span className="truncate font-bold text-xl">VidMax</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            {/* Center content - Create button and nav icons */}
            <SidebarContent className="flex flex-col justify-between">
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu className="gap-2">
                            {/* Create New Series Button */}
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    asChild
                                    tooltip="Create New Series"
                                    className="bg-blue-200 text-blue-900 hover:bg-blue-300 border-blue-300 border"
                                >
                                    <Link href="/dashboard/create-series">
                                        <Plus className="h-4 w-4" />
                                        <span>Create New Series</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            {/* Navigation Items */}
                            {data.navMain.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild isActive={pathname === item.url} tooltip={item.title}>
                                        <Link href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            {/* User button at bottom */}
            <SidebarFooter>
                <div className="p-2">
                    <UserButton showName />
                </div>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
