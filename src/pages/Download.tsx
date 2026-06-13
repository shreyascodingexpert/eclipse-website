import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download as DownloadIcon, AlertTriangle, FileWarning, CheckCircle2 } from "lucide-react";

const logoPng = "/logo-cropped.png";

export function Download() {
  return (
    <div className="container mx-auto px-6 py-20 min-h-[80vh] flex flex-col items-center justify-center">
      <div className="text-center mb-12">
        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          src={logoPng}
          alt="Eclipse Logo"
          className="w-20 h-20 mx-auto mb-6"
        />
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Download Eclipse
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg max-w-xl mx-auto"
        >
          Experience the cutting-edge of script execution. Version 1.0.0 is currently available for Windows.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="md:col-span-2"
        >
          <Card className="bg-card border-border h-full">
            <CardHeader className="border-b border-border/50 pb-6">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl">Latest Release</CardTitle>
                  <CardDescription className="text-base mt-2">Eclipse v1.0.0 (Stable)</CardDescription>
                </div>
                <div className="bg-white/10 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                  Windows 10/11
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-white shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">100% sUNC Compatibility</h4>
                    <p className="text-muted-foreground text-sm">Full support for all standard UNC functions, ensuring your scripts run flawlessly.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-white shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Bypass Implementation</h4>
                    <p className="text-muted-foreground text-sm">Advanced anti-cheat evasion techniques to keep your accounts secure.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-white shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Global Lua Autocomplete</h4>
                    <p className="text-muted-foreground text-sm">Full Lua global autocomplete built into the editor — no IntelliSense required.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-white shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Built-in Script Hub</h4>
                    <p className="text-muted-foreground text-sm">Access to hundreds of pre-verified premium scripts directly from the UI.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Button size="lg" className="w-full h-16 bg-white text-black font-bold text-lg hover:bg-white/90">
                  <DownloadIcon className="mr-3 h-6 w-6" /> Download for Windows
                </Button>
                <p className="text-center text-xs text-muted-foreground mt-4">
                  File size: ~45MB &bull; Requires .NET Framework 4.8
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2 text-yellow-500">
                <AlertTriangle className="h-5 w-5" /> Important Notice
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Your antivirus may flag Eclipse as a false positive. This is common with all execution software due to how they interact with game processes. Please add an exclusion for the installation folder.
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <FileWarning className="h-5 w-5" /> Installation Steps
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-2">
                <li>Download the zip file.</li>
                <li>Extract to a dedicated folder.</li>
                <li>Run <code className="text-foreground bg-muted px-1 rounded">Eclipse.exe</code></li>
                <li>Obtain a key from the Get Key tab.</li>
                <li>Inject and execute!</li>
              </ol>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
