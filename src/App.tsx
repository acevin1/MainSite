import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DemoRestaurant from "./pages/DemoRestaurant";
import DemoRealEstate from "./pages/DemoRealEstate";
import DemoHairdresser from "./pages/DemoHairdresser";
import Imprint from "./pages/Imprint";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/demo/restaurant" element={<DemoRestaurant />} />
          <Route path="/demo/real-estate" element={<DemoRealEstate />} />
          <Route path="/demo/hairdresser" element={<DemoHairdresser />} />
          <Route path="/imprint" element={<Imprint />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
