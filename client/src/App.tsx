import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HomePage } from "@/pages/HomePage";
import { HomePageEnterprise } from "@/pages/HomePageEnterprise";
import { HomePageAlternative } from "@/pages/HomePageAlternative";
import { QuotePage } from "@/pages/QuotePage";
import EuSmeGccPage from "@/pages/EuSmeGccPage";
import GccEuMuslimPage from "@/pages/GccEuMuslimPage";
import EnterpriseCrossBorderPage from "@/pages/EnterpriseCrossBorderPage";
import TechInnovationPage from "@/pages/TechInnovationPage";
import UaeRegionalPage from "@/pages/UaeRegionalPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/enterprise" component={HomePageEnterprise} />
      <Route path="/alternative" component={HomePageAlternative} />
      <Route path="/quote" component={QuotePage} />
      <Route path="/eu-sme-gcc" component={EuSmeGccPage} />
      <Route path="/gcc-eu-muslim" component={GccEuMuslimPage} />
      <Route path="/enterprise-cross-border" component={EnterpriseCrossBorderPage} />
      <Route path="/tech-innovation" component={TechInnovationPage} />
      <Route path="/uae-regional" component={UaeRegionalPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;