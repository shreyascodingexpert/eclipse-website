import { motion } from "framer-motion";
import { Zap, Cpu, Code, Shield } from "lucide-react";

const logoPng = "/logo-cropped.png";

export function About() {
  return (
    <div className="container mx-auto px-6 py-20 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <img src={logoPng} alt="Eclipse" className="w-20 h-20 mx-auto mb-6 opacity-80" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Built for Excellence</h1>
          <p className="text-xl text-muted-foreground">
            Eclipse isn't just another executor. It's a fundamental reimagining of what a script execution environment should be.
          </p>
        </motion.div>

        <div className="space-y-24">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-border">
                <Cpu className="text-white h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Core Architecture</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our custom-built execution engine interacts directly with the Luau virtual machine, bypassing standard abstraction layers. This results in unprecedented execution speeds and the ability to run massive scripts without freezing the client. With 100% sUNC compatibility, if a script exists, Eclipse runs it.
              </p>
            </div>
            <div className="bg-card border border-border p-8 rounded-2xl overflow-hidden">
              <pre className="font-mono text-sm text-white/60 overflow-x-auto whitespace-pre-wrap break-words">
                <code className="block mb-2">{"// Core injection hook initialized"}</code>
                <code className="block mb-2 text-foreground">{"auto vm = memory::scan(signatures::luau_vm);"}</code>
                <code className="block mb-2 text-foreground">{"if (!vm) return ERROR_VM_NOT_FOUND;"}</code>
                <code className="block mb-2">{"// Bypassing integrity checks"}</code>
                <code className="block mb-2 text-foreground">{"integrity::disable_trust_check();"}</code>
                <code className="block mb-2 text-white">{"executor::ready = true;"}</code>
              </pre>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 md:order-1 bg-card border border-border p-8 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background border border-border p-4 rounded-lg flex flex-col items-center justify-center text-center">
                  <Shield className="text-white h-6 w-6 mb-2" />
                  <span className="font-bold text-sm">Byfron Bypass</span>
                </div>
                <div className="bg-background border border-border p-4 rounded-lg flex flex-col items-center justify-center text-center">
                  <Zap className="text-white h-6 w-6 mb-2" />
                  <span className="font-bold text-sm">Fast Inject</span>
                </div>
                <div className="bg-background border border-border p-4 rounded-lg flex flex-col items-center justify-center text-center">
                  <Code className="text-white h-6 w-6 mb-2" />
                  <span className="font-bold text-sm">Lua Autocomplete</span>
                </div>
                <div className="bg-background border border-border p-4 rounded-lg flex flex-col items-center justify-center text-center">
                  <Cpu className="text-white h-6 w-6 mb-2" />
                  <span className="font-bold text-sm">Level 8</span>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-border">
                <Shield className="text-white h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Security First</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Execution power means nothing without security. Eclipse employs dynamic obfuscation and advanced evasion techniques that adapt to new anti-cheat updates. We protect your hardware identifiers and secure the client connection to keep your main accounts safe from automated flagging.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center border-t border-border pt-16"
        >
          <h3 className="text-2xl font-bold mb-4">The Team Behind Eclipse</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We are a group of reverse engineers and UI designers who were tired of bloated, crash-prone executors. We built Eclipse as the tool we wanted to use ourselves: lightweight, clean, and devastatingly effective.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
