import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Key, Copy, ArrowRight, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export function GetKey() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("https://eclipse.app/linkvertise-gateway");
    setCopied(true);
    toast({
      title: "Link Copied!",
      description: "Gateway link copied to clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container mx-auto px-6 py-20 min-h-[80vh] flex flex-col items-center">
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <Key className="w-14 h-14 text-white mx-auto mb-6 opacity-70" />
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Key System
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-lg"
        >
          Eclipse uses a key system to support development. Keys are valid for 24 hours and take less than a minute to obtain.
        </motion.p>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full max-w-3xl"
      >
        <Card className="bg-card border-border overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col items-center text-center space-y-8">

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
                <div className="bg-muted/30 p-6 rounded-xl border border-border">
                  <Clock className="text-white h-8 w-8 mb-4 opacity-70" />
                  <h3 className="font-bold text-lg mb-2">24 Hour Access</h3>
                  <p className="text-sm text-muted-foreground">Each key grants full access to Eclipse for a complete 24-hour period.</p>
                </div>
                <div className="bg-muted/30 p-6 rounded-xl border border-border">
                  <ShieldCheck className="text-white h-8 w-8 mb-4 opacity-70" />
                  <h3 className="font-bold text-lg mb-2">Secure Process</h3>
                  <p className="text-sm text-muted-foreground">Our Linkvertise process is safe and strictly verified to contain no malware.</p>
                </div>
                <div className="bg-muted/30 p-6 rounded-xl border border-border">
                  <Key className="text-white h-8 w-8 mb-4 opacity-70" />
                  <h3 className="font-bold text-lg mb-2">Premium Option</h3>
                  <p className="text-sm text-muted-foreground">Don't want ads? Upgrade to Premium on our Discord for a keyless experience.</p>
                </div>
              </div>

              <div className="w-full h-px bg-border my-4"></div>

              <div className="w-full max-w-md mx-auto">
                <h3 className="text-xl font-bold mb-6">Start Key Process</h3>
                <div className="flex flex-col gap-4">
                  <Button size="lg" className="w-full h-14 bg-white text-black hover:bg-white/90 font-bold text-lg group">
                    Generate Key <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <div className="relative flex items-center py-2">
                    <div className="flex-grow border-t border-border"></div>
                    <span className="flex-shrink-0 mx-4 text-muted-foreground text-sm font-medium">OR</span>
                    <div className="flex-grow border-t border-border"></div>
                  </div>

                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full h-14 border-border text-foreground hover:bg-white/5"
                    onClick={handleCopy}
                  >
                    {copied ? <CheckCircle2 className="mr-2 h-5 w-5" /> : <Copy className="mr-2 h-5 w-5 text-muted-foreground" />}
                    Copy Gateway Link
                  </Button>
                </div>
              </div>

            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
