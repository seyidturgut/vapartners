"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
    label: string;
    href: string;
    isCurrent: boolean;
}

export const Breadcrumbs = ({ className }: { className?: string }) => {
    const pathname = usePathname();

    // Don't show on homepage
    if (pathname === "/") return null;

    const pathSegments = pathname.split("/").filter((segment) => segment !== "");

    const breadcrumbs: BreadcrumbItem[] = pathSegments.map((segment, index) => {
        const href = `/${pathSegments.slice(0, index + 1).join("/")}`;

        // Format label: replace hyphens with spaces and capitalize
        let label = segment
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

        // Custom overrides
        if (label === "Blog") label = "Blog";

        return {
            label,
            href,
            isCurrent: index === pathSegments.length - 1,
        };
    });

    return (
        <nav aria-label="Breadcrumb" className={cn("flex items-center space-x-2 text-xs", className)}>
            <Link
                href="/"
                className="text-muted-foreground hover:text-gold transition-colors flex items-center"
            >
                <Home className="size-3.5" />
            </Link>

            {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={crumb.href}>
                    <ChevronRight className="size-3 text-muted-foreground/40" />
                    <Link
                        href={crumb.href}
                        className={cn(
                            "transition-colors",
                            crumb.isCurrent
                                ? "text-foreground font-semibold pointer-events-none"
                                : "text-muted-foreground hover:text-gold"
                        )}
                        aria-current={crumb.isCurrent ? "page" : undefined}
                    >
                        {crumb.label}
                    </Link>
                </React.Fragment>
            ))}
        </nav>
    );
};
