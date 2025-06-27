"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/app/components/ui/button";
import ModeToggle from "@/app/components/ui/mode-toggle";

function Home() {
  const router = useRouter();

  return (
    <div className="text-center space-y-4">
      <div className="flex justify-end p-4">
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
      <Button
        variant="outline"
        type="button"
        onClick={() => router.push("/blog")}
      >
        Blog
      </Button>
    </div>
  );
}
export default Home;
