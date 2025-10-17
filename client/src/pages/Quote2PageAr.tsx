import React, { useState, useEffect } from "react";
import { HeaderAr } from "@/components/HeaderAr";
import { FooterAr } from "@/components/FooterAr";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, ArrowRight, CheckCircle, Settings, Moon } from "lucide-react";
import { Link } from "wouter";
import { SiMagento } from "react-icons/si";
import shopifyLogo from "@assets/shopify_1758598346980.png";
import amazonLogo from "@assets/amazon_1758598346980.png";
import wooLogo from "@assets/woo (1)_1758598346980.png";

type Step = 1 | 2;

const platforms = [
  { code: "shopify", icon: shopifyLogo, iconType: "image", name: "Shopify" },
  { code: "amazon", icon: amazonLogo, iconType: "image", name: "Amazon" },
  { code: "noon", icon: Moon, iconType: "lucide", name: "Noon" },
  { code: "magento", icon: SiMagento, iconType: "react-icon", name: "Magento" },
  { code: "woocommerce", icon: wooLogo, iconType: "image", name: "WooCommerce" },
  { code: "custom", icon: Settings, iconType: "lucide", name: "Custom Platform" },
];

const productCategories = [
  { code: "fashion", icon: "👕", name: "الأزياء والملابس" },
  { code: "electronics", icon: "📱", name: "الإلكترونيات" },
  { code: "home", icon: "🏠", name: "المنزل والحديقة" },
  { code: "beauty", icon: "💄", name: "الجمال والعناية الشخصية" },
  { code: "sports", icon: "⚽", name: "الرياضة والهواء الطلق" },
  { code: "other", icon: "📦", name: "أخرى" },
];

export function Quote2PageAr() {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [formData, setFormData] = useState({
    shipFrom: ["Qatar", "UAE"],
    shipTo: ["GCC"],
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

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.dir = 'rtl';
    return () => {
      document.documentElement.dir = 'ltr';
    };
  }, []);

  const handleNext = () => {
    if (currentStep < 2) {
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
      alert("فشل في إرسال طلب عرض الأسعار. يرجى المحاولة مرة أخرى.");
    }
  };

  const toggleSelection = (field: keyof typeof formData, value: string) => {
    setFormData(prev => {
      if (field === 'platforms' || field === 'products') {
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
      <div className="min-h-screen bg-background arabic-font" dir="rtl">
        <HeaderAr />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto text-center">
              <CardContent className="p-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                <h1 className="text-3xl font-bold mb-4" data-testid="text-success-title">
                  تم إرسال طلب عرض الأسعار!
                </h1>
                <p className="text-muted-foreground mb-8 text-lg" data-testid="text-success-message">
                  شكراً لك، {formData.firstName}! لقد استلمنا طلب عرض الأسعار الخاص بك وسنتواصل معك خلال 24 ساعة بحل التنفيذ المخصص.
                </p>
                <Link href="/">
                  <Button data-testid="button-back-home">
                    <ArrowRight className="w-4 h-4 ml-2" />
                    العودة إلى الصفحة الرئيسية
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
        <FooterAr />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background arabic-font" dir="rtl">
      <HeaderAr />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div id="quote-form" className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4" data-testid="text-quote-title">
                احصل على عرض الأسعار المخصص الخاص بك
              </h1>
              <p className="text-xl text-muted-foreground" data-testid="text-quote-subtitle">
                أخبرنا عن احتياجاتك في تنفيذ التجارة الإلكترونية وسنقدم لك حلاً مخصصاً.
              </p>
            </div>

            {/* Progress Bar */}
            <div className="flex justify-center mb-12" data-testid="progress-bar">
              <div className="flex items-center space-x-4 space-x-reverse">
                {[1, 2].map((step) => (
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
                    {step < 2 && (
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
                  {currentStep === 1 && "المنصة والمنتجات"}
                  {currentStep === 2 && "معلومات الاتصال"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  {/* Step 1: Platform & Products */}
                  {currentStep === 1 && (
                    <div className="space-y-8" data-testid="step-platform">
                      <div>
                        <h3 className="text-lg font-semibold mb-4">ما هي المنصة التي تريد التكامل معها؟</h3>
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
                                    alt={`شعار ${platform.name}`}
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
                        <h3 className="text-lg font-semibold mb-4">ماذا تبيع؟</h3>
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

                  {/* Step 2: Contact Information */}
                  {currentStep === 2 && (
                    <div className="space-y-6" data-testid="step-contact">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">الاسم الأول *</Label>
                          <Input
                            id="firstName"
                            required
                            value={formData.firstName}
                            onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                            data-testid="input-first-name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">اسم العائلة *</Label>
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
                          <Label htmlFor="email">البريد الإلكتروني *</Label>
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
                          <Label htmlFor="phone">رقم الهاتف *</Label>
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
                        <Label htmlFor="company">الشركة *</Label>
                        <Input
                          id="company"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                          data-testid="input-company"
                        />
                      </div>

                      <div>
                        <Label htmlFor="additionalInfo">معلومات إضافية (اختياري)</Label>
                        <Textarea
                          id="additionalInfo"
                          value={formData.additionalInfo}
                          onChange={(e) => setFormData(prev => ({ ...prev, additionalInfo: e.target.value }))}
                          placeholder="أخبرنا المزيد عن احتياجاتك في التنفيذ..."
                          rows={4}
                          data-testid="textarea-additional-info"
                        />
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-8">
                    {currentStep > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handlePrevious}
                        data-testid="button-previous"
                      >
                        <ArrowRight className="w-4 h-4 ml-2" />
                        السابق
                      </Button>
                    )}
                    
                    {currentStep === 1 ? (
                      <Button
                        type="button"
                        onClick={handleNext}
                        disabled={formData.platforms.length === 0 || formData.products.length === 0}
                        className="mr-auto"
                        data-testid="button-next"
                      >
                        التالي
                        <ArrowLeft className="w-4 h-4 mr-2" />
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        className="mr-auto"
                        data-testid="button-submit"
                      >
                        إرسال طلب عرض الأسعار
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <FooterAr />
    </div>
  );
}
