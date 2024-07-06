"use client";
import React from "react";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const FlexibleBreadcrumb = ({ items, className }) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "flex items-center space-x-1 text-sm font-medium",
        className
      )}>
      <ol className="flex items-center space-x-1">
        <li>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="/"
                  className="flex items-center text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors duration-200">
                  <Home className="h-4 w-4" />
                  <span className="sr-only">Home</span>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Home</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </li>
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center">
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={item.href}
                    className={cn(
                      "ml-1 flex items-center text-sm font-medium",
                      index === items.length - 1
                        ? "text-gray-900 dark:text-gray-100 cursor-default"
                        : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                    )}
                    aria-current={
                      index === items.length - 1 ? "page" : undefined
                    }>
                    {item.icon && <span className="mr-1">{item.icon}</span>}
                    <span
                      className={cn(index === items.length - 1 && "sr-only")}>
                      {item.label}
                    </span>
                    {index === items.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="ml-1 text-xs text-gray-400">
                        {item.label}
                      </span>
                    )}
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
        ))}
      </ol>
    </nav>
  );
};
