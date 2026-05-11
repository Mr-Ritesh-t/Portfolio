import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SpeedInsights } from '@vercel/speed-insights/react';
import { HelmetProvider } from 'react-helmet-async';
import AnimatedCursor from "./components/AnimatedCursor";
import Layout from "./components/Layout";
import { SoundProvider } from "./components/SoundProvider";
import Terminal from "./components/Terminal";
import Dock from "./components/Dock";
import BootScreen from "./components/BootScreen";
import ShortcutHUD from "./components/ShortcutHUD";
import { NotificationProvider } from "./components/SystemNotification";

// Lazy loading pages
const Index = lazy(() => import("./pages/Index"));
const ClientPortal = lazy(() => import("./pages/ClientPortal"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <SoundProvider>
        <TooltipProvider>
          <NotificationProvider>
            <BootScreen />
            <ShortcutHUD />
            <AnimatedCursor />
            <Toaster />
            <SpeedInsights />
            <Sonner />
            <BrowserRouter>
              <Terminal />
              <Dock />
              <Suspense fallback={<div className="h-screen w-full flex items-center justify-center bg-brand-black text-white text-xs font-mono tracking-widest">INITIALIZING_SUBSYSTEMS...</div>}>
                <Routes>
                  <Route path="/" element={<Layout />}>
                    <Route index element={<Index />} />
                    <Route path="client" element={<ClientPortal />} />
                    <Route path="*" element={<NotFound />} />
                  </Route>
                </Routes>
              </Suspense>
            </BrowserRouter>
          </NotificationProvider>
        </TooltipProvider>
      </SoundProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
