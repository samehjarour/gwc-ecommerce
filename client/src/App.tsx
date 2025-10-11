import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
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
import { StartupsPageAr } from "@/pages/StartupsPageAr";
import { RateCalculatorPage } from "@/pages/RateCalculatorPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={QatarVideoPage} />
      <Route path="/enterprise" component={HomePageEnterprise} />
      <Route path="/alternative" component={HomePageAlternative} />
      <Route path="/alternative-integrations" component={HomePageAlternativeIntegrations} />
      <Route path="/gcc-internal" component={GccInternalPage} />
      <Route path="/video" component={VideoLandingPage} />
      <Route path="/lead" component={HomePageLead} />
      <Route path="/alt3" component={HomePageAlt3} />
      <Route path="/landing-pages" component={LandingPagesOverview} />
      <Route path="/quote" component={QuotePage} />
      <Route path="/eu-sme-gcc" component={EuSmeGccPage} />
      <Route path="/gcc-eu-muslim" component={GccEuMuslimPage} />
      <Route path="/enterprise-cross-border" component={EnterpriseCrossBorderPage} />
      <Route path="/tech-innovation" component={TechInnovationPage} />
      <Route path="/uae-regional" component={UaeRegionalPage} />
      <Route path="/local-gcc-expansion" component={LocalGccExpansionPage} />
      <Route path="/uae-transparent-pricing" component={UaeTransparentPricing} />
      <Route path="/uae-reliable-service" component={UaeReliableService} />
      <Route path="/qatar-transparent-pricing" component={QatarTransparentPricing} />
      <Route path="/qatar-reliable-service" component={QatarReliableService} />
      <Route path="/quote2" component={Quote2Page} />
      <Route path="/quote2-ar" component={Quote2PageAr} />
      <Route path="/qatar-video" component={QatarVideoPage} />
      <Route path="/qatar-video-ar" component={QatarVideoPageAr} />
      <Route path="/uae-video" component={UaeVideoPage} />
      <Route path="/switch" component={SwitchPage} />
      <Route path="/startups" component={StartupsPage} />
      <Route path="/startups-calculator" component={StartupsCalculatorPage} />
      <Route path="/startups-ar" component={StartupsPageAr} />
      <Route path="/rate-calculator" component={RateCalculatorPage} />
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
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;