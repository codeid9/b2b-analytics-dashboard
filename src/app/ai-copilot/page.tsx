"use client";

import { useState } from "react";
import { Bot, Send, Sparkles } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";

interface Message {
  id: number;
  sender: "user" | "ai";
  text: string;
}

export default function AiCopilotPage() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: "ai", text: "Hello! I am your AI Copilot. Ask me anything about your B2B dashboard parameters or revenue matrix." }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { id: Date.now(), sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input.toLowerCase();
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      let aiResponseText = "I parsed the dashboard logs, but could not fetch explicit matching telemetry. Try asking 'Why revenue dropped?'";

      if (currentInput.includes("revenue") || currentInput.includes("drop")) {
        aiResponseText = "Revenue decreased by 12% this cycle[cite: 1]. The primary drop vector indicates customer retention optimization degraded in the Enterprise tier[cite: 1]. Primary Action: Review Churn Risk indices.";
      } else if (currentInput.includes("growth") || currentInput.includes("top")) {
        aiResponseText = "Top performing distribution locus mapped: North America cluster holding a +12.3% baseline deviation.";
      }

      setMessages((prev) => [...prev, { id: Date.now() + 1, sender: "ai", text: aiResponseText }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="space-y-6 w-full max-w-4xl mx-auto">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg border border-blue-200">
          <Bot className="h-6 w-6" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">AI Copilot</h1>
          <p className="text-muted-foreground">Deterministic natural language processing for analytical operations[cite: 1].</p>
        </div>
      </div>

      <Card className="bg-white border border-border shadow-md flex flex-col h-125">
        <CardHeader className="border-b border-slate-100 bg-slate-50/50">
          <CardTitle className="text-sm font-semibold flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-blue-500 animate-pulse" />
            Active Session: Context-Aware Intelligence
          </CardTitle>
          <CardDescription>Simulated LLM pipeline playground[cite: 1].</CardDescription>
        </CardHeader>

        <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[80%] rounded-xl px-4 py-2.5 text-sm shadow-sm ${
                msg.sender === "user" 
                  ? "bg-slate-900 text-white rounded-tr-none" 
                  : "bg-slate-100 text-slate-800 border border-slate-200 rounded-tl-none"
              }`}>
                {msg.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-slate-100 text-slate-400 border border-slate-200 rounded-xl rounded-tl-none px-4 py-2.5 text-sm animate-pulse">
                Copilot is calculating nodes...
              </div>
            </div>
          )}
        </CardContent>

        <CardFooter className="p-3 border-t border-slate-100 bg-slate-50/50">
          <form onSubmit={handleSend} className="flex w-full items-center gap-2 relative">
            <Input
              type="text"
              placeholder="Ask: 'Why revenue dropped?'..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-white border-border pr-12 focus-visible:ring-1"
            />
            <Button type="submit" size="icon" className="bg-slate-900 hover:bg-slate-800 h-9 w-9 text-white">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}