import { Button } from "@/components/ui/button";
import { ModeToggle } from "../components/ui/Mode-Toggle";

function Home(): any {
  return (
    <div className="text-center space-y-4">
      <div className="flex justify-end p-4">
        <ModeToggle />
      </div>
      <h1 className="text-4xl font-bold text-center font-serif">
        Ride Smarter, Ride Scenic
      </h1>
      <h3 className="text-xl text-muted-foreground text-center font-serif">
        Explore motorcycle-friendly routes, discover scenic roads, and ride safe
        with real-time hazard pins.
      </h3>
      <Button variant="outline">Explore Now</Button>
    </div>
  );
}

export default Home;
