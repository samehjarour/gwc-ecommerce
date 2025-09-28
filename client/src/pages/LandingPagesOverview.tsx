import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { 
  BarChart, 
  Users, 
  MousePointer, 
  Eye, 
  TrendingUp, 
  ExternalLink, 
  Globe,
  Target,
  Zap,
  Building,
  ShoppingCart
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";

// Types for analytics data
interface AnalyticsEvent {
  id: string;
  sessionId: string;
  page: string;
  segment: string;
  variant: "A" | "B";
  event: "view" | "cta_click" | "form_submit" | "scroll_depth" | "pricing_view";
  meta?: Record<string, any>;
  createdAt: string;
}

interface PageAnalytics {
  path: string;
  name: string;
  description: string;
  category: string;
  icon: any;
  target: string;
  targeting: 'Intra-GCC' | 'EU->GCC' | 'GCC->EU';
  views: number;
  sessions: number;
  ctaClicks: number;
  conversionRate: number;
  avgScrollDepth: number;
}

// Landing page definitions
const landingPages = [
  {
    path: "/",
    name: "Main Home Page",
    description: "Primary home page with full pricing display for general visitors",
    category: "Home Pages",
    icon: Globe,
    target: "General Audience",
    targeting: "Intra-GCC"
  },
  {
    path: "/enterprise",
    name: "Enterprise Home Page", 
    description: "Enterprise-focused home page without public pricing for B2B prospects",
    category: "Home Pages",
    icon: Building,
    target: "Enterprise Clients",
    targeting: "Intra-GCC"
  },
  {
    path: "/alternative", 
    name: "Alternative Home Design",
    description: "IQ Fulfillment-inspired design with modern layout and interactive elements",
    category: "Home Pages", 
    icon: Zap,
    target: "Design Test",
    targeting: "Intra-GCC"
  },
  {
    path: "/lead",
    name: "Lead Generation Page",
    description: "Home page with embedded HubSpot form for direct lead capture",
    category: "Home Pages",
    icon: Target,
    target: "Lead Generation",
    targeting: "Intra-GCC"
  },
  {
    path: "/alt3",
    name: "Alternative Design #3",
    description: "Quivo-inspired design with process flow, transparency focus, and testimonials",
    category: "Home Pages",
    icon: Building,
    target: "Design Test",
    targeting: "Intra-GCC"
  },
  {
    path: "/eu-sme-gcc",
    name: "EU SME → GCC Landing",
    description: "European SMEs expanding to GCC markets with Quivo partnership messaging",
    category: "Segment Pages",
    icon: ShoppingCart,
    target: "EU SMEs",
    targeting: "EU->GCC"
  },
  {
    path: "/gcc-eu-muslim",
    name: "GCC → EU Muslim Markets", 
    description: "GCC brands targeting European Muslim consumer segments",
    category: "Segment Pages",
    icon: Users,
    target: "GCC Brands",
    targeting: "GCC->EU"
  },
  {
    path: "/enterprise-cross-border",
    name: "Enterprise Cross-Border",
    description: "Fortune 500 companies seeking enterprise-grade cross-border logistics",
    category: "Segment Pages", 
    icon: Building,
    target: "Enterprise",
    targeting: "EU->GCC"
  },
  {
    path: "/tech-innovation",
    name: "Technology Innovation Leaders",
    description: "Tech companies needing advanced APIs, ML optimization, and data analytics",
    category: "Segment Pages",
    icon: Zap,
    target: "Tech Leaders",
    targeting: "Intra-GCC"
  },
  {
    path: "/uae-regional",
    name: "UAE Regional Expansion",
    description: "Companies using UAE as strategic hub for MENA and regional growth",
    category: "Segment Pages",
    icon: Globe,
    target: "Regional Expansion",
    targeting: "Intra-GCC"
  },
  {
    path: "/local-gcc-expansion",
    name: "Local GCC Expansion",
    description: "Local e-commerce sellers expanding across Qatar, UAE, and Saudi Arabia",
    category: "Segment Pages",
    icon: Target,
    target: "Local Businesses",
    targeting: "Intra-GCC"
  },
  {
    path: "/quote",
    name: "Quote Request Form",
    description: "Multi-step quote request form with shipping, platform, and contact details",
    category: "Conversion Pages",
    icon: MousePointer,
    target: "All Segments",
    targeting: "Intra-GCC"
  }
];

export function LandingPagesOverview() {
  // SEO Meta Tags
  useEffect(() => {
    // Set page title
    document.title = "GWC Landing Pages Analytics Dashboard | Live Page Performance & Visitor Data";
    
    // Set meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 
        'Comprehensive analytics dashboard for GWC logistics landing pages. Track visitor data, conversion rates, and performance metrics across all active landing pages and segments.'
      );
    } else {
      const newMetaDesc = document.createElement('meta');
      newMetaDesc.name = 'description';
      newMetaDesc.content = 'Comprehensive analytics dashboard for GWC logistics landing pages. Track visitor data, conversion rates, and performance metrics across all active landing pages and segments.';
      document.head.appendChild(newMetaDesc);
    }

    // Set canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `${window.location.origin}/landing-pages`);
    } else {
      const newCanonical = document.createElement('link');
      newCanonical.rel = 'canonical';
      newCanonical.href = `${window.location.origin}/landing-pages`;
      document.head.appendChild(newCanonical);
    }

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'GWC Landing Pages Analytics Dashboard' },
      { property: 'og:description', content: 'Track performance and visitor data across all GWC logistics landing pages and market segments.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: `${window.location.origin}/landing-pages` },
      { property: 'og:site_name', content: 'GWC Logistics' }
    ];

    ogTags.forEach(tag => {
      const existing = document.querySelector(`meta[property="${tag.property}"]`);
      if (existing) {
        existing.setAttribute('content', tag.content);
      } else {
        const newTag = document.createElement('meta');
        newTag.setAttribute('property', tag.property);
        newTag.setAttribute('content', tag.content);
        document.head.appendChild(newTag);
      }
    });

    // Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: 'GWC Landing Pages Analytics Dashboard' },
      { name: 'twitter:description', content: 'Track performance and visitor data across all GWC logistics landing pages.' }
    ];

    twitterTags.forEach(tag => {
      const existing = document.querySelector(`meta[name="${tag.name}"]`);
      if (existing) {
        existing.setAttribute('content', tag.content);
      } else {
        const newTag = document.createElement('meta');
        newTag.setAttribute('name', tag.name);
        newTag.setAttribute('content', tag.content);
        document.head.appendChild(newTag);
      }
    });

    // JSON-LD structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "GWC Landing Pages Analytics Dashboard",
      "description": "Comprehensive analytics dashboard for GWC logistics landing pages and visitor data.",
      "url": `${window.location.origin}/landing-pages`,
      "isPartOf": {
        "@type": "WebSite",
        "name": "GWC Logistics",
        "url": window.location.origin
      },
      "about": {
        "@type": "Organization",
        "name": "GWC Logistics",
        "description": "Leading cross-border logistics and fulfillment services for European expansion to GCC markets"
      }
    };

    const ldScript = document.createElement('script');
    ldScript.type = 'application/ld+json';
    ldScript.textContent = JSON.stringify(structuredData);
    document.head.appendChild(ldScript);

    return () => {
      // Cleanup on unmount
      document.head.removeChild(ldScript);
    };
  }, []);

  // Fetch analytics data
  const { data: analyticsData, isLoading } = useQuery({
    queryKey: ['/api/analytics/events'],
    queryFn: async () => {
      const response = await fetch('/api/analytics/events');
      if (!response.ok) throw new Error('Failed to fetch analytics');
      return response.json();
    }
  });

  // Process analytics data
  const pageAnalytics: PageAnalytics[] = landingPages.map(page => {
    const events = analyticsData?.events?.filter((e: AnalyticsEvent) => e.page === page.path) || [];
    const views = events.filter((e: AnalyticsEvent) => e.event === 'view').length;
    const sessions = new Set(events.map((e: AnalyticsEvent) => e.sessionId)).size;
    const ctaClicks = events.filter((e: AnalyticsEvent) => e.event === 'cta_click').length;
    const scrollEvents = events.filter((e: AnalyticsEvent) => e.event === 'scroll_depth');
    const avgScrollDepth = scrollEvents.length > 0 
      ? scrollEvents.reduce((sum: number, e: AnalyticsEvent) => sum + (e.meta?.depth || 0), 0) / scrollEvents.length 
      : 0;
    
    return {
      ...page,
      targeting: page.targeting as 'Intra-GCC' | 'EU->GCC' | 'GCC->EU',
      views,
      sessions,
      ctaClicks,
      conversionRate: sessions > 0 ? (ctaClicks / sessions) * 100 : 0,
      avgScrollDepth: Math.round(avgScrollDepth)
    };
  });

  // Calculate totals
  const totalViews = pageAnalytics.reduce((sum, page) => sum + page.views, 0);
  const totalSessions = pageAnalytics.reduce((sum, page) => sum + page.sessions, 0);
  const totalCTAClicks = pageAnalytics.reduce((sum, page) => sum + page.ctaClicks, 0);
  const avgConversionRate = totalSessions > 0 ? (totalCTAClicks / totalSessions) * 100 : 0;

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4" data-testid="badge-analytics-dashboard">
              Analytics Dashboard
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="heading-dashboard">
              GWC Landing Pages Performance
            </h1>
            <p className="text-xl text-muted-foreground mb-8" data-testid="text-dashboard-description">
              Real-time analytics and visitor data across all active landing pages and market segments.
              Track performance, conversion rates, and user engagement metrics.
            </p>
          </div>
        </div>
      </section>

      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Overview Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card data-testid="stat-total-pages">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Pages</p>
                    <p className="text-3xl font-bold">{landingPages.length}</p>
                  </div>
                  <Globe className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card data-testid="stat-total-views">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Views</p>
                    <p className="text-3xl font-bold">{isLoading ? '...' : totalViews.toLocaleString()}</p>
                  </div>
                  <Eye className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card data-testid="stat-total-sessions">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Unique Sessions</p>
                    <p className="text-3xl font-bold">{isLoading ? '...' : totalSessions.toLocaleString()}</p>
                  </div>
                  <Users className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card data-testid="stat-conversion-rate">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Avg Conversion Rate</p>
                    <p className="text-3xl font-bold">{isLoading ? '...' : `${avgConversionRate.toFixed(1)}%`}</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Landing Pages Tabs */}
          <Tabs defaultValue="all" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all" data-testid="tab-all-pages">All Pages</TabsTrigger>
              <TabsTrigger value="home" data-testid="tab-home-pages">Home Pages</TabsTrigger>
              <TabsTrigger value="segment" data-testid="tab-segment-pages">Segment Pages</TabsTrigger>
              <TabsTrigger value="conversion" data-testid="tab-conversion-pages">Conversion</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              <div className="grid gap-6">
                {pageAnalytics.map((page, index) => {
                  const IconComponent = page.icon;
                  return (
                    <Card key={page.path} className="hover-elevate" data-testid={`page-card-${index}`}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                              <IconComponent className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-xl">{page.name}</CardTitle>
                              <p className="text-muted-foreground mt-1">{page.description}</p>
                              <div className="flex items-center gap-2 mt-2">
                                <Badge variant="outline">{page.category}</Badge>
                                <Badge variant="secondary">{page.target}</Badge>
                                <Badge 
                                  variant={page.targeting === 'Intra-GCC' ? 'default' : page.targeting === 'EU->GCC' ? 'destructive' : 'outline'}
                                  className="text-xs"
                                >
                                  {page.targeting}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Link href={page.path}>
                              <Button variant="outline" size="sm" data-testid={`button-visit-${index}`}>
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Visit Page
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-5 gap-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary">{page.views}</div>
                            <div className="text-sm text-muted-foreground">Views</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary">{page.sessions}</div>
                            <div className="text-sm text-muted-foreground">Sessions</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary">{page.ctaClicks}</div>
                            <div className="text-sm text-muted-foreground">CTA Clicks</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary">{page.conversionRate.toFixed(1)}%</div>
                            <div className="text-sm text-muted-foreground">Conversion Rate</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary">{page.avgScrollDepth}%</div>
                            <div className="text-sm text-muted-foreground">Avg Scroll</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="home" className="space-y-6">
              <div className="grid gap-6">
                {pageAnalytics
                  .filter(page => page.category === "Home Pages")
                  .map((page, index) => {
                    const IconComponent = page.icon;
                    return (
                      <Card key={page.path} className="hover-elevate" data-testid={`home-page-card-${index}`}>
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                <IconComponent className="w-6 h-6 text-primary" />
                              </div>
                              <div>
                                <CardTitle className="text-xl">{page.name}</CardTitle>
                                <p className="text-muted-foreground mt-1">{page.description}</p>
                                <div className="flex items-center gap-2 mt-2">
                                  <Badge variant="secondary">{page.target}</Badge>
                                  <Badge 
                                    variant={page.targeting === 'Intra-GCC' ? 'default' : page.targeting === 'EU->GCC' ? 'destructive' : 'outline'}
                                    className="text-xs"
                                  >
                                    {page.targeting}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                            <Link href={page.path}>
                              <Button variant="outline" size="sm">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Visit Page
                              </Button>
                            </Link>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-5 gap-4">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-primary">{page.views}</div>
                              <div className="text-sm text-muted-foreground">Views</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-primary">{page.sessions}</div>
                              <div className="text-sm text-muted-foreground">Sessions</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-primary">{page.ctaClicks}</div>
                              <div className="text-sm text-muted-foreground">CTA Clicks</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-primary">{page.conversionRate.toFixed(1)}%</div>
                              <div className="text-sm text-muted-foreground">Conversion Rate</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-primary">{page.avgScrollDepth}%</div>
                              <div className="text-sm text-muted-foreground">Avg Scroll</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
              </div>
            </TabsContent>

            <TabsContent value="segment" className="space-y-6">
              <div className="grid gap-6">
                {pageAnalytics
                  .filter(page => page.category === "Segment Pages")
                  .map((page, index) => {
                    const IconComponent = page.icon;
                    return (
                      <Card key={page.path} className="hover-elevate" data-testid={`segment-page-card-${index}`}>
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                <IconComponent className="w-6 h-6 text-primary" />
                              </div>
                              <div>
                                <CardTitle className="text-xl">{page.name}</CardTitle>
                                <p className="text-muted-foreground mt-1">{page.description}</p>
                                <div className="flex items-center gap-2 mt-2">
                                  <Badge variant="secondary">{page.target}</Badge>
                                  <Badge 
                                    variant={page.targeting === 'Intra-GCC' ? 'default' : page.targeting === 'EU->GCC' ? 'destructive' : 'outline'}
                                    className="text-xs"
                                  >
                                    {page.targeting}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                            <Link href={page.path}>
                              <Button variant="outline" size="sm">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Visit Page
                              </Button>
                            </Link>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-5 gap-4">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-primary">{page.views}</div>
                              <div className="text-sm text-muted-foreground">Views</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-primary">{page.sessions}</div>
                              <div className="text-sm text-muted-foreground">Sessions</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-primary">{page.ctaClicks}</div>
                              <div className="text-sm text-muted-foreground">CTA Clicks</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-primary">{page.conversionRate.toFixed(1)}%</div>
                              <div className="text-sm text-muted-foreground">Conversion Rate</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-primary">{page.avgScrollDepth}%</div>
                              <div className="text-sm text-muted-foreground">Avg Scroll</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
              </div>
            </TabsContent>

            <TabsContent value="conversion" className="space-y-6">
              <div className="grid gap-6">
                {pageAnalytics
                  .filter(page => page.category === "Conversion Pages")
                  .map((page, index) => {
                    const IconComponent = page.icon;
                    return (
                      <Card key={page.path} className="hover-elevate" data-testid={`conversion-page-card-${index}`}>
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                <IconComponent className="w-6 h-6 text-primary" />
                              </div>
                              <div>
                                <CardTitle className="text-xl">{page.name}</CardTitle>
                                <p className="text-muted-foreground mt-1">{page.description}</p>
                                <div className="flex items-center gap-2 mt-2">
                                  <Badge variant="secondary">{page.target}</Badge>
                                  <Badge 
                                    variant={page.targeting === 'Intra-GCC' ? 'default' : page.targeting === 'EU->GCC' ? 'destructive' : 'outline'}
                                    className="text-xs"
                                  >
                                    {page.targeting}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                            <Link href={page.path}>
                              <Button variant="outline" size="sm">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Visit Page
                              </Button>
                            </Link>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-5 gap-4">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-primary">{page.views}</div>
                              <div className="text-sm text-muted-foreground">Views</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-primary">{page.sessions}</div>
                              <div className="text-sm text-muted-foreground">Sessions</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-primary">{page.ctaClicks}</div>
                              <div className="text-sm text-muted-foreground">CTA Clicks</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-primary">{page.conversionRate.toFixed(1)}%</div>
                              <div className="text-sm text-muted-foreground">Conversion Rate</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-primary">{page.avgScrollDepth}%</div>
                              <div className="text-sm text-muted-foreground">Avg Scroll</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
              </div>
            </TabsContent>
          </Tabs>

          {/* SEO Information Section */}
          <section className="mt-16 py-12 bg-muted/20 rounded-lg">
            <div className="text-center max-w-4xl mx-auto px-6">
              <h2 className="text-2xl font-bold mb-4">SEO & Analytics Information</h2>
              <p className="text-muted-foreground mb-6">
                This page is optimized for Google indexing with comprehensive meta tags, structured data, 
                and canonical URLs. All analytics data is collected in real-time and reflects actual visitor interactions.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <h3 className="font-semibold mb-2">SEO Features</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>✓ Meta title & description</li>
                    <li>✓ Open Graph tags</li>
                    <li>✓ Twitter Card tags</li>
                    <li>✓ JSON-LD structured data</li>
                    <li>✓ Canonical URL</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Analytics Tracking</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>✓ Page views</li>
                    <li>✓ Unique sessions</li>
                    <li>✓ CTA click tracking</li>
                    <li>✓ Scroll depth analysis</li>
                    <li>✓ Conversion rate metrics</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Performance</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>✓ Real-time data updates</li>
                    <li>✓ Responsive design</li>
                    <li>✓ Fast loading times</li>
                    <li>✓ Mobile optimized</li>
                    <li>✓ Google indexable</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}