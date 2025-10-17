import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, ArrowRight, CheckCircle, Settings, Moon } from "lucide-react";
import { Link } from "wouter";
import { SiMagento } from "react-icons/si";
import shopifyLogo from "@assets/shopify_1758598346980.png";
import amazonLogo from "@assets/amazon_1758598346980.png";
import wooLogo from "@assets/woo (1)_1758598346980.png";
import { countries } from "@/data/countries";

type Step = 1 | 2 | 3;

const platforms = [
  { code: "shopify", icon: shopifyLogo, iconType: "image", name: "Shopify" },
  { code: "amazon", icon: amazonLogo, iconType: "image", name: "Amazon" },
  { code: "noon", icon: Moon, iconType: "lucide", name: "Noon" },
  { code: "magento", icon: SiMagento, iconType: "react-icon", name: "Magento" },
  { code: "woocommerce", icon: wooLogo, iconType: "image", name: "WooCommerce" },
  { code: "custom", icon: Settings, iconType: "lucide", name: "Custom Platform" },
];

const productCategories = [
  { code: "fashion", icon: "👕", name: "Fashion & Apparel" },
  { code: "electronics", icon: "📱", name: "Electronics" },
  { code: "home", icon: "🏠", name: "Home & Garden" },
  { code: "beauty", icon: "💄", name: "Beauty & Personal Care" },
  { code: "sports", icon: "⚽", name: "Sports & Outdoors" },
  { code: "other", icon: "📦", name: "Other" },
];

export function QuotePage() {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [formData, setFormData] = useState({
    shipFrom: [] as string[],
    shipTo: [] as string[],
    platforms: [] as string[],
    products: [] as string[],
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    additionalInfo: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  console.log("Quote form data:", formData); // todo: remove mock functionality

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep((prev) => (prev + 1) as Step);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as Step);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("/api/quotes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.details || errorData.message || "Failed to submit quote");
      }

      const result = await response.json();
      console.log("Quote submitted successfully:", result);
      setIsSubmitted(true);
      
      // Track Google Ads conversion
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'conversion', {
          'send_to': 'AW-17653547806/DRHgCM_-m64bEJ6G7-FB',
          'value': 1.0,
          'currency': 'USD'
        });
      }
    } catch (error) {
      console.error("Error submitting quote:", error);
      alert("Failed to submit quote request. Please try again.");
    }
  };

  const toggleSelection = (field: keyof typeof formData, value: string) => {
    setFormData(prev => {
      if (field === 'shipTo' || field === 'platforms' || field === 'products') {
        const currentArray = prev[field] as string[];
        const updated = currentArray.includes(value)
          ? currentArray.filter(item => item !== value)
          : [...currentArray, value];
        return { ...prev, [field]: updated };
      } else {
        return { ...prev, [field]: value };
      }
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto text-center">
              <CardContent className="p-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                <h1 className="text-3xl font-bold mb-4" data-testid="text-success-title">
                  Quote Request Submitted!
                </h1>
                <p className="text-muted-foreground mb-8 text-lg" data-testid="text-success-message">
                  Thank you, {formData.firstName}! We've received your quote request and will get back to you within 24 hours with a customized fulfillment solution.
                </p>
                <Link href="/">
                  <Button data-testid="button-back-home">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div id="quote-form" className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4" data-testid="text-quote-title">
                Get Your Custom Quote
              </h1>
              <p className="text-xl text-muted-foreground" data-testid="text-quote-subtitle">
                Tell us about your e-commerce fulfillment needs and we'll provide a tailored solution.
              </p>
            </div>

            {/* Progress Bar */}
            <div className="flex justify-center mb-12" data-testid="progress-bar">
              <div className="flex items-center space-x-4">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                        step <= currentStep
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}
                      data-testid={`step-${step}`}
                    >
                      {step}
                    </div>
                    {step < 3 && (
                      <div
                        className={`w-16 h-1 mx-2 ${
                          step < currentStep ? 'bg-primary' : 'bg-muted'
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  {currentStep === 1 && "Shipping Details"}
                  {currentStep === 2 && "Platform & Products"}
                  {currentStep === 3 && "Contact Information"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  {/* Step 1: Shipping Details */}
                  {currentStep === 1 && (
                    <div className="space-y-8" data-testid="step-shipping">
                      <div>
                        <Label className="text-lg font-semibold mb-2 block">
                          Where do you want to ship from? *
                        </Label>
                        <p className="text-sm text-muted-foreground mb-4">
                          Type to search and select origin countries
                        </p>
                        <Select
                          value=""
                          onValueChange={(value) => {
                            if (value && !formData.shipFrom.includes(value)) {
                              setFormData(prev => ({ ...prev, shipFrom: [...prev.shipFrom, value] }));
                            }
                          }}
                        >
                          <SelectTrigger 
                            className="mt-2"
                            data-testid="select-ship-from"
                          >
                            <SelectValue placeholder="Select origin countries" />
                          </SelectTrigger>
                          <SelectContent className="max-h-[300px]">
                            {countries.map((country) => (
                              <SelectItem 
                                key={country.value} 
                                value={country.value}
                                disabled={formData.shipFrom.includes(country.value)}
                                data-testid={`option-ship-from-${country.value}`}
                              >
                                <span className="flex items-center gap-2">
                                  <span>{country.flag}</span>
                                  <span>{country.label}</span>
                                  {formData.shipFrom.includes(country.value) && (
                                    <span className="ml-2 text-xs text-muted-foreground">(Selected)</span>
                                  )}
                                </span>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        
                        {formData.shipFrom.length > 0 && (
                          <div className="mt-4 space-y-2">
                            <p className="text-sm font-medium">Selected origins:</p>
                            <div className="flex flex-wrap gap-2">
                              {formData.shipFrom.map((country) => {
                                const countryData = countries.find(c => c.value === country);
                                return (
                                  <div
                                    key={country}
                                    className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-md text-sm"
                                  >
                                    <span>{countryData?.flag}</span>
                                    <span>{country}</span>
                                    <button
                                      type="button"
                                      onClick={() => setFormData(prev => ({
                                        ...prev,
                                        shipFrom: prev.shipFrom.filter(c => c !== country)
                                      }))}
                                      className="ml-1 hover:text-destructive"
                                      data-testid={`remove-origin-${country}`}
                                    >
                                      ×
                                    </button>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>

                      <div>
                        <Label className="text-lg font-semibold mb-2 block">
                          Where do you want to ship/expand to? *
                        </Label>
                        <p className="text-sm text-muted-foreground mb-4">
                          Type to search and select multiple destination countries
                        </p>
                        <Select
                          value=""
                          onValueChange={(value) => {
                            if (value && !formData.shipTo.includes(value)) {
                              setFormData(prev => ({ ...prev, shipTo: [...prev.shipTo, value] }));
                            }
                          }}
                        >
                          <SelectTrigger 
                            className="mt-2"
                            data-testid="select-ship-to"
                          >
                            <SelectValue placeholder="Select destination countries" />
                          </SelectTrigger>
                          <SelectContent className="max-h-[300px]">
                            {countries.map((country) => (
                              <SelectItem 
                                key={country.value} 
                                value={country.value}
                                disabled={formData.shipTo.includes(country.value)}
                                data-testid={`option-ship-to-${country.value}`}
                              >
                                <span className="flex items-center gap-2">
                                  <span>{country.flag}</span>
                                  <span>{country.label}</span>
                                  {formData.shipTo.includes(country.value) && (
                                    <span className="ml-2 text-xs text-muted-foreground">(Selected)</span>
                                  )}
                                </span>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        
                        {formData.shipTo.length > 0 && (
                          <div className="mt-4 space-y-2">
                            <p className="text-sm font-medium">Selected destinations:</p>
                            <div className="flex flex-wrap gap-2">
                              {formData.shipTo.map((country) => {
                                const countryData = countries.find(c => c.value === country);
                                return (
                                  <div
                                    key={country}
                                    className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-md text-sm"
                                  >
                                    <span>{countryData?.flag}</span>
                                    <span>{country}</span>
                                    <button
                                      type="button"
                                      onClick={() => setFormData(prev => ({
                                        ...prev,
                                        shipTo: prev.shipTo.filter(c => c !== country)
                                      }))}
                                      className="ml-1 hover:text-destructive"
                                      data-testid={`remove-${country}`}
                                    >
                                      ×
                                    </button>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Step 2: Platform & Products */}
                  {currentStep === 2 && (
                    <div className="space-y-8" data-testid="step-platform">
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Which platform do you want to integrate with?</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {platforms.map((platform) => (
                            <button
                              key={platform.code}
                              type="button"
                              onClick={() => toggleSelection('platforms', platform.code)}
                              className={`p-4 border rounded-lg text-center hover-elevate transition-all ${
                                formData.platforms.includes(platform.code)
                                  ? 'border-primary bg-primary/10'
                                  : 'border-border'
                              }`}
                              data-testid={`button-platform-${platform.code}`}
                            >
                              <div className="text-2xl mb-2 flex justify-center">
                                {platform.iconType === 'image' ? (
                                  <img 
                                    src={platform.icon as string} 
                                    alt={`${platform.name} logo`}
                                    className="w-8 h-8 object-contain"
                                  />
                                ) : platform.iconType === 'lucide' ? (
                                  React.createElement(platform.icon as any, { className: "w-8 h-8" })
                                ) : platform.iconType === 'react-icon' ? (
                                  React.createElement(platform.icon as any, { className: "w-8 h-8" })
                                ) : (
                                  <span>{platform.icon as string}</span>
                                )}
                              </div>
                              <div className="font-medium">{platform.name}</div>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-4">What are you selling?</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {productCategories.map((category) => (
                            <button
                              key={category.code}
                              type="button"
                              onClick={() => toggleSelection('products', category.code)}
                              className={`p-4 border rounded-lg text-center hover-elevate transition-all ${
                                formData.products.includes(category.code)
                                  ? 'border-primary bg-primary/10'
                                  : 'border-border'
                              }`}
                              data-testid={`button-product-${category.code}`}
                            >
                              <div className="text-2xl mb-2">{category.icon}</div>
                              <div className="font-medium">{category.name}</div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Contact Information */}
                  {currentStep === 3 && (
                    <div className="space-y-6" data-testid="step-contact">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            required
                            value={formData.firstName}
                            onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                            data-testid="input-first-name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            required
                            value={formData.lastName}
                            onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                            data-testid="input-last-name"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                            data-testid="input-email"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                            data-testid="input-phone"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="company">Company *</Label>
                        <Input
                          id="company"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                          data-testid="input-company"
                        />
                      </div>

                      <div>
                        <Label htmlFor="additionalInfo">Additional Information</Label>
                        <Textarea
                          id="additionalInfo"
                          placeholder="Tell us more about your business needs..."
                          value={formData.additionalInfo}
                          onChange={(e) => setFormData(prev => ({ ...prev, additionalInfo: e.target.value }))}
                          data-testid="textarea-additional-info"
                        />
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-8">
                    {currentStep > 1 ? (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handlePrevious}
                        data-testid="button-previous"
                      >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Previous
                      </Button>
                    ) : (
                      <Link href="/">
                        <Button variant="outline" data-testid="button-back">
                          <ArrowLeft className="w-4 h-4 mr-2" />
                          Back to Home
                        </Button>
                      </Link>
                    )}

                    {currentStep < 3 ? (
                      <Button
                        type="button"
                        onClick={handleNext}
                        data-testid="button-next"
                      >
                        Next Step
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    ) : (
                      <Button type="submit" data-testid="button-submit">
                        Submit Quote Request
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}