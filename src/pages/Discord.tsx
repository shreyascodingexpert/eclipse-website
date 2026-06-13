import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Users, Star, ShieldAlert } from "lucide-react";

const logoPng = "/logo-cropped.png";

export function Discord() {
  return (
    <div className="container mx-auto px-6 py-20 min-h-[80vh] flex flex-col items-center justify-center">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-4xl"
      >
        <Card className="bg-card border-border overflow-hidden">
          <div className="h-28 bg-[#5865F2]/80 w-full"></div>

          <CardContent className="pt-0 px-8 pb-12 text-center">
            <div className="w-28 h-28 mx-auto -mt-14 rounded-2xl bg-card border-4 border-card flex items-center justify-center relative z-20 overflow-hidden">
              <img src={logoPng} alt="Eclipse" className="w-20 h-20 object-contain" />
            </div>

            <h1 className="text-4xl font-bold mt-6 mb-2">Eclipse Community</h1>
            <p className="text-muted-foreground font-semibold mb-8 flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
              Join the server
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto mb-10">
              <div className="bg-muted/30 p-4 rounded-lg flex gap-4 border border-border">
                <MessageSquare className="h-6 w-6 text-white shrink-0 opacity-70" />
                <div>
                  <h4 className="font-semibold">Active Support</h4>
                  <p className="text-sm text-muted-foreground">Get help from staff and community members 24/7.</p>
                </div>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg flex gap-4 border border-border">
                <Star className="h-6 w-6 text-white shrink-0 opacity-70" />
                <div>
                  <h4 className="font-semibold">Premium Access</h4>
                  <p className="text-sm text-muted-foreground">Purchase keyless access and exclusive features.</p>
                </div>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg flex gap-4 border border-border">
                <Users className="h-6 w-6 text-white shrink-0 opacity-70" />
                <div>
                  <h4 className="font-semibold">Script Sharing</h4>
                  <p className="text-sm text-muted-foreground">Discover new scripts shared by the community.</p>
                </div>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg flex gap-4 border border-border">
                <ShieldAlert className="h-6 w-6 text-white shrink-0 opacity-70" />
                <div>
                  <h4 className="font-semibold">Updates & Status</h4>
                  <p className="text-sm text-muted-foreground">Real-time alerts on Roblox updates and executor status.</p>
                </div>
              </div>
            </div>

            <Button asChild size="lg" className="h-14 px-12 text-lg font-bold bg-[#5865F2] hover:bg-[#4752C4] text-white transition-all">
              <a href="#" target="_blank" rel="noreferrer">Join the Server</a>
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
