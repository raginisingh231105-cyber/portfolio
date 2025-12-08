import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Hero3D from "@/components/Hero3D";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Experience from "@/pages/Experience";
import Contact from "@/pages/Contact";

function Router() {
  return (
    <PageTransition>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/experience" component={Experience} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </PageTransition>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* 3D Background - Persistent */}
      <Hero3D />
      
      {/* Cursor */}
      <CustomCursor />
      
      {/* Navigation - Persistent */}
      <NavBar />
      
      {/* Main Content with Transitions */}
      <Router />
      
      {/* Footer - Persistent */}
      <div className="fixed bottom-0 w-full z-10 pointer-events-none">
        <div className="pointer-events-auto">
          {/* We might want footer to be relative on long pages, but fixed for the aesthetic. 
              Let's make it relative inside the pages if needed, or keep it simple. 
              Actually, usually footer is at bottom of scroll. 
              Given the design, let's put it inside PageTransition or just have it appear on scroll.
              For now, simpler to not have a global footer if pages are 100vh+.
              But let's stick to the request structure. I'll omit global fixed footer to avoid overlap.
          */}
        </div>
      </div>
      
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
