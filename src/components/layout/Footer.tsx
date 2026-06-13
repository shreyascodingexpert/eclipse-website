import { Link } from "wouter";

const logoPng = "/logo-cropped.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12 mt-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="flex items-center gap-3 mb-4">
            <img src={logoPng} alt="Eclipse Logo" className="h-7 w-7 object-contain opacity-60" />
            <span className="font-bold text-lg tracking-wider text-muted-foreground">
              ECLIPSE
            </span>
          </Link>
          <p className="text-muted-foreground text-sm max-w-xs">
            The premier high-performance executor. Engineered for power, designed for speed.
            Redefining what's possible in execution technology.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
          <ul className="flex flex-col gap-2">
            <li><Link href="/" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Home</Link></li>
            <li><Link href="/download" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Download</Link></li>
            <li><Link href="/getkey" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Get Key</Link></li>
            <li><Link href="/about" className="text-muted-foreground hover:text-foreground text-sm transition-colors">About</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4">Community</h4>
          <ul className="flex flex-col gap-2">
            <li><Link href="/discord" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Discord Server</Link></li>
            <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Documentation</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Support</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-border/50 text-center text-muted-foreground text-xs">
        &copy; {new Date().getFullYear()} Eclipse. All rights reserved. Not affiliated with Roblox Corporation.
      </div>
    </footer>
  );
}
