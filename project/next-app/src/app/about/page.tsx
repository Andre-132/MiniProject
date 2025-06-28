"use client";

import Link from "next/link";
import ModeToggle from "../components/ui/mode-toggle";
import { SlashIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/app/components/ui/breadcrumb";

function AboutPage() {
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

      <div className="text-center space-y-8 mt-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold font-serif">My Vision</h1>
          <p className="text-xl text-muted-foreground font-serif">
            My vision with this application is to provide bikers like myself a
            safe and comfortable riding experience.
          </p>

          <h2 className="text-3xl font-bold font-serif">My Purpose</h2>
          <p className="text-xl text-muted-foreground font-serif">
            With my focus being tailored to rider safety along with an
            interactive community of bikers alike.
          </p>
          <p className="text-xl font-serif font-bold"></p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
