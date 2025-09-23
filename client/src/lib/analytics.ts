// Shared analytics utilities for tracking user interactions and A/B testing

export interface AnalyticsEvent {
  sessionId: string;
  page: string;
  segment: string;
  variant: "A" | "B";
  event: "view" | "cta_click" | "form_submit" | "scroll_depth" | "pricing_view";
  meta?: Record<string, any>;
}

// Get or create session ID
export function getSessionId(): string {
  let sessionId = localStorage.getItem('gwc-session-id');
  if (!sessionId) {
    sessionId = 'sess_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
    localStorage.setItem('gwc-session-id', sessionId);
  }
  return sessionId;
}

// Track analytics event
export async function trackEvent(event: Omit<AnalyticsEvent, 'sessionId'>) {
  try {
    await fetch('/api/analytics/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionId: getSessionId(),
        ...event
      })
    });
  } catch (error) {
    console.error('Analytics tracking error:', error);
  }
}

// Get or assign A/B testing variant for a segment
export function getVariant(segment: string): "A" | "B" {
  const urlParams = new URLSearchParams(window.location.search);
  const urlVariant = urlParams.get('v');
  
  if (urlVariant === 'A' || urlVariant === 'B') {
    localStorage.setItem(`gwc-variant-${segment}`, urlVariant);
    return urlVariant;
  }
  
  const savedVariant = localStorage.getItem(`gwc-variant-${segment}`);
  if (savedVariant === 'A' || savedVariant === 'B') {
    return savedVariant;
  }
  
  // Random assignment
  const randomVariant = Math.random() < 0.5 ? 'A' : 'B';
  localStorage.setItem(`gwc-variant-${segment}`, randomVariant);
  return randomVariant;
}

// Track scroll depth (with deduplication)
export function trackScrollDepth(segment: string, variant: "A" | "B", depth: number) {
  const key = `scroll-${depth}-${segment}-${variant}`;
  if (!sessionStorage.getItem(key)) {
    sessionStorage.setItem(key, 'tracked');
    
    trackEvent({
      page: window.location.pathname,
      segment,
      variant,
      event: 'scroll_depth',
      meta: { depth }
    });
  }
}

// Track CTA click
export function trackCTAClick(
  segment: string, 
  variant: "A" | "B", 
  ctaText: string, 
  ctaType: 'primary' | 'secondary',
  ctaId: string
) {
  trackEvent({
    page: window.location.pathname,
    segment,
    variant,
    event: 'cta_click',
    meta: {
      ctaText,
      ctaType,
      ctaId
    }
  });
}

// Track page view
export function trackPageView(segment: string, variant: "A" | "B") {
  trackEvent({
    page: window.location.pathname,
    segment,
    variant,
    event: 'view',
    meta: {
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      timestamp: new Date().toISOString()
    }
  });
}

// Track pricing section view
export function trackPricingView(segment: string, variant: "A" | "B") {
  trackEvent({
    page: window.location.pathname,
    segment,
    variant,
    event: 'pricing_view',
    meta: { section: 'pricing_section' }
  });
}