"use client";

import ModeToggle from "@/app/components/ui/mode-toggle";
import Link from "next/link";
import { SlashIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/app/components/ui/breadcrumb";

function Home() {
  return (
    <div className="text-center space-y-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <SlashIcon />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/about">About</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <SlashIcon />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/blog">Blog</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <h1 className="text-4xl font-bold text-center font-serif">
        Ride Smarter, Ride Scenic
      </h1>
      <h3 className="text-xl text-muted-foreground text-center font-serif">
        Explore motorcycle-friendly routes, discover scenic roads, and ride
        safe!
      </h3>
      <h3 className="text-xl text-muted-foreground text-center font-serif">
        This blog is for everything motorcycle related.
      </h3>
    </div>
  );
}
export default Home;
