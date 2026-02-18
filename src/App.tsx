import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import StudentBranch from "./pages/StudentBranch";
import Chapters from "./pages/Chapters";
import CISBranch from "./pages/CISBranch";
import NotFound from "./pages/NotFound";
import EMBSBranch from "./pages/EMBSBranch";
import IASBranch from "./pages/IASBranch";
import WIEBranch from "./pages/WIEBranch";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/student-branch" element={<StudentBranch />} />
          <Route path="/chapters" element={<Chapters />} />
          <Route path="/cis-branch" element={<CISBranch />} />
          <Route path="/embs-branch" element={<EMBSBranch />} />
          <Route path="/ias-branch" element={<IASBranch />} />
          <Route path="/wie-branch" element={<WIEBranch />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
