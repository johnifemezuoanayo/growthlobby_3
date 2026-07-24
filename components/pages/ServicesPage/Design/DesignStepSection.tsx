"use client"

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, ArrowRight, Sparkles, Check, Play, Layers } from 'lucide-react';

interface WhyChooseUsProps {
  onScheduleClick: () => void;
}

export default function DesignStepSection() {
  // Pricing interactive state for Card 3
  const [selectedItems, setSelectedItems] = useState<{ [key: string]: boolean }>({
    branding: true,
    website: true,
    banner: true,
  });

  const togglePriceItem = (key: string) => {
    setSelectedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const pricingItems = [
    { key: 'branding', label: 'Branding', price: 1000 },
    { key: 'website', label: 'Website design', price: 1500 },
    { key: 'banner', label: 'Banner design', price: 500 },
  ];

  const activeTotal = pricingItems.reduce(
    (sum, item) => sum + (selectedItems[item.key] ? item.price : 0),
    0
  );

  // Chat interactive state for Card 1
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: 'Client', text: 'Hi, I have a problem!', time: '03:24' },
    { id: 2, sender: 'Support', text: 'Hello, I am here to help you', time: '03:25' },
  ]);
  const [customInput, setCustomInput] = useState('');

  const handleSendChat = (e: FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    const newMsgId = chatMessages.length + 1;
    const userMsg = { id: newMsgId, sender: 'Client', text: customInput, time: '03:26' };
    
    setChatMessages((prev) => [...prev, userMsg]);
    setCustomInput('');

    // Auto support reply
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          id: newMsgId + 1,
          sender: 'Support',
          text: "We're on it! Our experts are always available to help you.",
          time: '03:27',
        },
      ]);
    }, 1000);
  };

  return (
    <section 
      id="why-choose-us-section" 
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FBF9FE] via-[#F6EEFA] to-[#EAF3FA] text-zinc-950 overflow-hidden border-b border-zinc-100/50"
    >
      {/* Soft blur backgrounds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-indigo-200/20 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] rounded-full bg-pink-200/25 blur-[150px]" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto space-y-16">
        
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          {/* Tag Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-zinc-200/60 shadow-sm text-xs font-semibold text-zinc-600 uppercase tracking-wider">
            <span className="flex h-2 w-2 rounded-full bg-[#9E5DE5] animate-pulse" />
            <span className="flex items-center gap-1.5">
              <Sparkles className="h-3 w-3 text-[#9E5DE5]" /> Why Choose Us
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1E0B36] leading-[1.1] font-sans">
            Quality & quantity, all <br /> under one roof
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
          
          {/* Card 1: Always Available (Chat Interface) */}
          <motion.div
            id="why-card-always-available"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col justify-between bg-white rounded-[2rem] p-6 shadow-xl shadow-zinc-200/30 border border-zinc-100 hover:shadow-2xl transition-all duration-300"
          >
            {/* Visual Header (Gradient Chat Box) */}
            <div className="relative h-64 rounded-3xl bg-gradient-to-tr from-[#9B5DE5] via-[#F15BB5] to-[#EE4266] p-5 flex flex-col justify-between overflow-hidden shadow-inner">
              
              {/* Header inside gradient box */}
              <div className="flex items-center justify-between">
                <span className="text-white font-bold text-lg tracking-tight">24h Support</span>
                <div className="h-8 w-8 rounded-xl bg-white/10 backdrop-blur border border-white/25 flex items-center justify-center">
                  <MessageSquare className="h-4 w-4 text-white" />
                </div>
              </div>

              {/* Chat Thread */}
              <div className="flex-1 my-3 overflow-y-auto space-y-3.5 pr-1 scrollbar-none flex flex-col justify-end text-xs">
                {chatMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${
                      msg.sender === 'Client' ? 'items-end' : 'items-start'
                    }`}
                  >
                    <span className="text-[10px] text-white/70 mb-0.5 px-1">{msg.sender}</span>
                    <div
                      className={`max-w-[85%] rounded-2xl px-3 py-1.5 shadow-sm leading-relaxed ${
                        msg.sender === 'Client'
                          ? 'bg-white/15 backdrop-blur text-white border border-white/15 rounded-tr-none'
                          : 'bg-white text-zinc-900 rounded-tl-none font-medium'
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className="text-[9px] text-white/50 mt-0.5 px-1">{msg.time}</span>
                  </div>
                ))}
              </div>

              {/* Chat Input Field */}
              <form onSubmit={handleSendChat} className="flex gap-2 text-xs">
                <input
                  type="text"
                  placeholder="Type to test support..."
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  className="flex-1 bg-white/15 border border-white/20 rounded-xl px-3 py-1.5 text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-white/45 text-xs transition"
                />
                <button
                  type="submit"
                  className="bg-white text-[#9B5DE5] hover:bg-zinc-100 font-bold px-2.5 py-1.5 rounded-xl active:scale-95 transition"
                >
                  Send
                </button>
              </form>
            </div>

            {/* Description */}
            <div className="pt-6 pb-2 text-center space-y-2">
              <h3 className="text-2xl font-bold text-[#1E0B36] tracking-tight">
                Always available
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed max-w-[270px] mx-auto">
                With real-time collaboration, we guarantee the perfect finished product.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Seamless Process (Interactive Flow Chart) */}
          <motion.div
            id="why-card-seamless-process"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="flex flex-col justify-between bg-white rounded-[2rem] p-6 shadow-xl shadow-zinc-200/30 border border-zinc-100 hover:shadow-2xl transition-all duration-300"
          >
            {/* Visual Header (Gradient Flow) */}
            <div className="relative h-64 rounded-3xl bg-gradient-to-tr from-[#6366F1] via-[#A855F7] to-[#EC4899] p-5 flex flex-col justify-between shadow-inner">
              
              {/* Top Row with subtle line connections */}
              <div className="flex justify-between items-center w-full">
                {/* Start Node */}
                <div className="relative group/node flex items-center gap-1 bg-white/15 backdrop-blur border border-white/20 px-3 py-1.5 rounded-full text-xs font-semibold text-white shadow-sm cursor-default">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Start</span>
                </div>

                {/* Connection line */}
                <div className="flex-1 border-t border-dashed border-white/25 mx-2" />

                {/* Brainstorm Node */}
                <div className="bg-white/15 backdrop-blur border border-white/20 px-3 py-1.5 rounded-full text-xs font-semibold text-white shadow-sm cursor-default">
                  <span>Brainstorm</span>
                </div>
              </div>

              {/* Design Node Centered */}
              <div className="flex justify-center items-center relative my-2">
                <div className="absolute h-10 w-px border-l border-dashed border-white/30 -top-6" />
                <div className="relative group/node bg-white/25 backdrop-blur border border-white/40 px-6 py-2 rounded-full text-xs font-bold text-white shadow-md cursor-default transform hover:scale-105 transition-all">
                  <span>Design</span>
                </div>
                <div className="absolute h-10 w-px border-l border-dashed border-white/30 -bottom-6" />
              </div>

              {/* Bottom Row Execution Node */}
              <div className="flex justify-center items-center">
                <div className="relative bg-white/15 backdrop-blur border border-white/20 px-5 py-1.5 rounded-full text-xs font-semibold text-white shadow-sm cursor-default">
                  <span>Execution</span>
                </div>
              </div>

            </div>

            {/* Description */}
            <div className="pt-6 pb-2 text-center space-y-2">
              <h3 className="text-2xl font-bold text-[#1E0B36] tracking-tight">
                Seamless Process
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed max-w-[270px] mx-auto">
                We make design easy, so you never even have to think.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Custom pricing (Interactive Calculator) */}
          <motion.div
            id="why-card-custom-pricing"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="flex flex-col justify-between bg-white rounded-[2rem] p-6 shadow-xl shadow-zinc-200/30 border border-zinc-100 hover:shadow-2xl transition-all duration-300"
          >
            {/* Visual Header (Gradient Pricing Calculator) */}
            <div className="relative h-64 rounded-3xl bg-gradient-to-tr from-[#D946EF] via-[#F43F5E] to-[#FB7185] p-5 flex flex-col justify-between shadow-inner">
              
              {/* Title Header */}
              <div className="flex justify-between items-center text-white">
                <span className="font-bold text-lg tracking-tight">Usage-based Pricing</span>
                <span className="text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-1 rounded-full bg-white/15 backdrop-blur border border-white/20">
                  Cost &gt;
                </span>
              </div>

              {/* Calculator Items */}
              <div className="space-y-2.5 text-xs text-white my-2">
                {pricingItems.map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => togglePriceItem(item.key)}
                    className="flex justify-between items-center w-full text-left p-1.5 rounded-xl hover:bg-white/10 active:scale-[0.98] transition-all"
                  >
                    <span className="flex items-center gap-1.5 font-medium">
                      <div className={`h-4 w-4 rounded flex items-center justify-center border transition-all ${
                        selectedItems[item.key] 
                          ? 'bg-white border-white' 
                          : 'border-white/40 bg-transparent'
                      }`}>
                        {selectedItems[item.key] && (
                          <Check className="h-3 w-3 text-[#F43F5E] stroke-[3]" />
                        )}
                      </div>
                      <span className={selectedItems[item.key] ? 'line-none' : 'text-white/60 line-through'}>
                        {item.label}
                      </span>
                    </span>
                    <span className={`font-bold ${selectedItems[item.key] ? '' : 'text-white/40'}`}>
                      ${item.price}
                    </span>
                  </button>
                ))}
              </div>

              {/* Total Block */}
              <div className="border-t border-white/25 pt-3 mt-1 flex justify-between items-center text-white">
                <span className="text-sm font-semibold text-white/95">Total</span>
                <span className="text-xl font-black tracking-tight">${activeTotal}</span>
              </div>

            </div>

            {/* Description */}
            <div className="pt-6 pb-2 text-center space-y-2">
              <h3 className="text-2xl font-bold text-[#1E0B36] tracking-tight">
                Custom pricing
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed max-w-[270px] mx-auto">
                Our prices are flexible to you. We offer set and bespoke packages.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
