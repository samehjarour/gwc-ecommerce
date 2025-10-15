import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { LoginPage } from "@/pages/LoginPage";
import { HomePage } from "@/pages/HomePage";
import { HomePageEnterprise } from "@/pages/HomePageEnterprise";
import { HomePageAlternative } from "@/pages/HomePageAlternative";
import { HomePageAlternativeIntegrations } from "@/pages/HomePageAlternativeIntegrations";
import { GccInternalPage } from "@/pages/GccInternalPage";
import { VideoLandingPage } from "@/pages/VideoLandingPage";
import { HomePageLead } from "@/pages/HomePageLead";
import { HomePageAlt3 } from "@/pages/HomePageAlt3";
import { LandingPagesOverview } from "@/pages/LandingPagesOverview";
import { QuotePage } from "@/pages/QuotePage";
import EuSmeGccPage from "@/pages/EuSmeGccPage";
import GccEuMuslimPage from "@/pages/GccEuMuslimPage";
import EnterpriseCrossBorderPage from "@/pages/EnterpriseCrossBorderPage";
import TechInnovationPage from "@/pages/TechInnovationPage";
import UaeRegionalPage from "@/pages/UaeRegionalPage";
import { LocalGccExpansionPage } from "@/pages/LocalGccExpansionPage";
import { UaeTransparentPricing } from "@/pages/UaeTransparentPricing";
import { UaeReliableService } from "@/pages/UaeReliableService";
import { QatarTransparentPricing } from "@/pages/QatarTransparentPricing";
import { QatarReliableService } from "@/pages/QatarReliableService";
import { Quote2Page } from "@/pages/Quote2Page";
import { Quote2PageAr } from "@/pages/Quote2PageAr";
import { QatarVideoPage } from "@/pages/QatarVideoPage";
import { QatarVideoPageAr } from "@/pages/QatarVideoPageAr";
import { UaeVideoPage } from "@/pages/UaeVideoPage";
import { SwitchPage } from "@/pages/SwitchPage";
import { StartupsPage } from "@/pages/StartupsPage";
import { StartupsCalculatorPage } from "@/pages/StartupsCalculatorPage";
import { StartupsCalculatorPageAr } from "@/pages/StartupsCalculatorPageAr";
import { StartupsPageAr } from "@/pages/StartupsPageAr";
import { RateCalculatorPage } from "@/pages/RateCalculatorPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      {/* Public Routes */}
      <Route path="/" component={StartupsPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/startups" component={StartupsPage} />
      <Route path="/startups-ar" component={StartupsPageAr} />
      <Route path="/startups-calculator" component={StartupsCalculatorPage} />
      <Route path="/startups-calculator-ar" component={StartupsCalculatorPageAr} />
      
      {/* Protected Routes */}
      <Route path="/enterprise">
        {() => <ProtectedRoute><HomePageEnterprise /></ProtectedRoute>}
      </Route>
      <Route path="/alternative">
        {() => <ProtectedRoute><HomePageAlternative /></ProtectedRoute>}
      </Route>
      <Route path="/alternative-integrations">
        {() => <ProtectedRoute><HomePageAlternativeIntegrations /></ProtectedRoute>}
      </Route>
      <Route path="/gcc-internal">
        {() => <ProtectedRoute><GccInternalPage /></ProtectedRoute>}
      </Route>
      <Route path="/video">
        {() => <ProtectedRoute><VideoLandingPage /></ProtectedRoute>}
      </Route>
      <Route path="/lead">
        {() => <ProtectedRoute><HomePageLead /></ProtectedRoute>}
      </Route>
      <Route path="/alt3">
        {() => <ProtectedRoute><HomePageAlt3 /></ProtectedRoute>}
      </Route>
      <Route path="/landing-pages">
        {() => <ProtectedRoute><LandingPagesOverview /></ProtectedRoute>}
      </Route>
      <Route path="/quote">
        {() => <ProtectedRoute><QuotePage /></ProtectedRoute>}
      </Route>
      <Route path="/eu-sme-gcc">
        {() => <ProtectedRoute><EuSmeGccPage /></ProtectedRoute>}
      </Route>
      <Route path="/gcc-eu-muslim">
        {() => <ProtectedRoute><GccEuMuslimPage /></ProtectedRoute>}
      </Route>
      <Route path="/enterprise-cross-border">
        {() => <ProtectedRoute><EnterpriseCrossBorderPage /></ProtectedRoute>}
      </Route>
      <Route path="/tech-innovation">
        {() => <ProtectedRoute><TechInnovationPage /></ProtectedRoute>}
      </Route>
      <Route path="/uae-regional">
        {() => <ProtectedRoute><UaeRegionalPage /></ProtectedRoute>}
      </Route>
      <Route path="/local-gcc-expansion">
        {() => <ProtectedRoute><LocalGccExpansionPage /></ProtectedRoute>}
      </Route>
      <Route path="/uae-transparent-pricing">
        {() => <ProtectedRoute><UaeTransparentPricing /></ProtectedRoute>}
      </Route>
      <Route path="/uae-reliable-service">
        {() => <ProtectedRoute><UaeReliableService /></ProtectedRoute>}
      </Route>
      <Route path="/qatar-transparent-pricing">
        {() => <ProtectedRoute><QatarTransparentPricing /></ProtectedRoute>}
      </Route>
      <Route path="/qatar-reliable-service">
        {() => <ProtectedRoute><QatarReliableService /></ProtectedRoute>}
      </Route>
      <Route path="/quote2">
        {() => <ProtectedRoute><Quote2Page /></ProtectedRoute>}
      </Route>
      <Route path="/quote2-ar">
        {() => <ProtectedRoute><Quote2PageAr /></ProtectedRoute>}
      </Route>
      <Route path="/qatar-video">
        {() => <ProtectedRoute><QatarVideoPage /></ProtectedRoute>}
      </Route>
      <Route path="/qatar-video-ar">
        {() => <ProtectedRoute><QatarVideoPageAr /></ProtectedRoute>}
      </Route>
      <Route path="/uae-video">
        {() => <ProtectedRoute><UaeVideoPage /></ProtectedRoute>}
      </Route>
      <Route path="/switch">
        {() => <ProtectedRoute><SwitchPage /></ProtectedRoute>}
      </Route>
      <Route path="/rate-calculator">
        {() => <ProtectedRoute><RateCalculatorPage /></ProtectedRoute>}
      </Route>
      <Route path="/home">
        {() => <ProtectedRoute><HomePage /></ProtectedRoute>}
      </Route>
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    // Add HubSpot tracking script
    const hubspotScript = document.createElement('script');
    hubspotScript.type = 'text/javascript';
    hubspotScript.id = 'hs-script-loader';
    hubspotScript.async = true;
    hubspotScript.defer = true;
    hubspotScript.src = '//js-eu1.hs-scripts.com/146936524.js';
    document.head.appendChild(hubspotScript);

    // Add MindPal chatbot configuration
    const chatbotConfigScript = document.createElement('script');
    chatbotConfigScript.id = 'e-commerce-fulfillment-onboarding-agent-4p3-setup';
    chatbotConfigScript.innerHTML = `
      window.mindpalConfig = {
        chatbotId: "e-commerce-fulfillment-onboarding-agent-4p3",
        behavior: {
          showInitialMessageBubbleWhenMinimized: true,
          minimizedByDefault: true
        }
      };
    `;
    document.head.appendChild(chatbotConfigScript);

    // Add MindPal chatbot script
    const chatbotScript = document.createElement('script');
    chatbotScript.id = 'e-commerce-fulfillment-onboarding-agent-4p3-run';
    chatbotScript.src = 'https://chatbot.getmindpal.com/embed.min.js';
    document.head.appendChild(chatbotScript);

    return () => {
      // Cleanup on unmount
      const hubspotExisting = document.getElementById('hs-script-loader');
      if (hubspotExisting && document.head.contains(hubspotExisting)) {
        document.head.removeChild(hubspotExisting);
      }
      
      const configExisting = document.getElementById('e-commerce-fulfillment-onboarding-agent-4p3-setup');
      if (configExisting && document.head.contains(configExisting)) {
        document.head.removeChild(configExisting);
      }
      
      const chatbotExisting = document.getElementById('e-commerce-fulfillment-onboarding-agent-4p3-run');
      if (chatbotExisting && document.head.contains(chatbotExisting)) {
        document.head.removeChild(chatbotExisting);
      }
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;