import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Download, Shield, Terminal, Code2 } from "lucide-react";

const logoPng = "/logo-cropped.png";
const editorScreenshot = "/editor.png";
const hubScreenshot = "/hub.png";

export function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-10 pb-20 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <img src={logoPng} alt="Eclipse Logo" className="w-32 h-32 md:w-40 md:h-40 mx-auto" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
            >
              Absolute <span className="text-white">Dominance.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl"
            >
              The most advanced execution environment ever engineered. Experience unprecedented speeds, flawless execution, and a stunning interface designed for power users.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
            >
              <Button asChild size="lg" className="bg-white text-black font-bold text-lg px-8 h-14 hover:bg-white/90 transition-all">
                <Link href="/download">
                  <Download className="mr-2 h-5 w-5" /> Download v1.0.0
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 border-border text-foreground hover:bg-white/5">
                <Link href="/discord">
                  Join Discord <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 border-y border-border bg-card/40">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-border/50">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center p-4"
            >
              <span className="text-4xl md:text-5xl font-mono font-bold text-white mb-2">100%</span>
              <span className="text-sm text-muted-foreground tracking-widest uppercase font-semibold">sUNC Rate</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center justify-center p-4"
            >
              <span className="text-4xl md:text-5xl font-mono font-bold text-white mb-2">99%</span>
              <span className="text-sm text-muted-foreground tracking-widest uppercase font-semibold">UNC Compatibility</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center justify-center p-4"
            >
              <span className="text-4xl md:text-5xl font-mono font-bold text-white mb-2">Level 8</span>
              <span className="text-sm text-muted-foreground tracking-widest uppercase font-semibold">Execution Power</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center justify-center p-4"
            >
              <span className="text-4xl md:text-5xl font-mono font-bold text-white mb-2">0ms</span>
              <span className="text-sm text-muted-foreground tracking-widest uppercase font-semibold">Injection Delay</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interface Showcase */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Precision Engineering</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Designed for clarity, built for speed. The Eclipse interface puts raw execution power at your fingertips.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <Terminal className="h-6 w-6 text-white" />
                <h3 className="text-2xl font-bold">Advanced Editor</h3>
              </div>
              <p className="text-muted-foreground mb-6 text-lg">
                Write and execute scripts in a fully-featured editor. Complete with syntax highlighting, global Lua autocomplete, and tab management. The dark aesthetic reduces eye strain during long sessions.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3"><Code2 className="text-white h-5 w-5 shrink-0" /> <span>Multi-tab script management</span></li>
                <li className="flex items-center gap-3"><Code2 className="text-white h-5 w-5 shrink-0" /> <span>Real-time syntax validation</span></li>
                <li className="flex items-center gap-3"><Code2 className="text-white h-5 w-5 shrink-0" /> <span>Global Lua autocomplete</span></li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <img src={editorScreenshot} alt="Eclipse Editor" className="rounded-xl border border-border shadow-lg" />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src={hubScreenshot} alt="Eclipse Script Hub" className="rounded-xl border border-border shadow-lg" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-white" />
                <h3 className="text-2xl font-bold">Integrated Script Hub</h3>
              </div>
              <p className="text-muted-foreground mb-6 text-lg">
                Access thousands of premium scripts directly from the client. No more hunting through forums or risking malicious downloads. Execute with a single click.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3"><Code2 className="text-white h-5 w-5 shrink-0" /> <span>Curated, safe script collection</span></li>
                <li className="flex items-center gap-3"><Code2 className="text-white h-5 w-5 shrink-0" /> <span>One-click execution</span></li>
                <li className="flex items-center gap-3"><Code2 className="text-white h-5 w-5 shrink-0" /> <span>Custom UI integration for popular hubs</span></li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <Card className="bg-card border-border overflow-hidden">
            <CardContent className="p-12 md:p-20 text-center">
              <Shield className="h-14 w-14 mx-auto text-white mb-6 opacity-80" />
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to elevate your game?</h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Join thousands of users who have already switched to the most reliable executor on the market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-black font-bold text-lg px-10 h-14 hover:bg-white/90 transition-all">
                  <Link href="/download">Download Eclipse</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-14 px-10 font-bold border-border hover:bg-white/5">
                  <Link href="/getkey">Get Execution Key</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
