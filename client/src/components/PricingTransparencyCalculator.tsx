import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingDown, ShieldCheck } from "lucide-react";
import { Link } from "wouter";

interface PricingBreakdown {
  storage: number;
  pickPack: number;
  delivery: number;
  total: number;
}

export function PricingTransparencyCalculator() {
  const [orders, setOrders] = useState<string>("100");
  const [avgWeight, setAvgWeight] = useState<string>("0.5");
  
  const calculatePricing = (): PricingBreakdown => {
    const orderCount = parseInt(orders) || 0;
    const weight = parseFloat(avgWeight) || 0;
    
    // Transparent pricing formula (example rates)
    const storagePerSKU = 2.5; // AED per SKU per month
    const pickPackPerOrder = 3.0; // AED per order
    const deliveryPerKg = 8.0; // AED per kg
    
    const storage = storagePerSKU * 50; // Assuming 50 SKUs average
    const pickPack = pickPackPerOrder * orderCount;
    const delivery = deliveryPerKg * weight * orderCount;
    const total = storage + pickPack + delivery;
    
    return { storage, pickPack, delivery, total };
  };

  const pricing = calculatePricing();
  const costPerOrder = orders !== "0" ? (pricing.total / parseInt(orders || "1")).toFixed(2) : "0";

  return (
    <Card className="w-full max-w-4xl mx-auto" data-testid="pricing-calculator">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-primary/10 p-3 rounded-full">
            <Calculator className="w-8 h-8 text-primary" />
          </div>
        </div>
        <CardTitle className="text-3xl mb-2">Transparent Pricing Calculator</CardTitle>
        <p className="text-muted-foreground">
          No hidden fees. No surprises. Know exactly what you'll pay.
        </p>
        <div className="flex justify-center gap-2 mt-4">
          <Badge variant="outline" className="gap-1">
            <ShieldCheck className="w-3 h-3" />
            No Hidden Fees
          </Badge>
          <Badge variant="outline" className="gap-1">
            <TrendingDown className="w-3 h-3" />
            Competitive Rates
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg mb-4">Your Business Details</h3>
            
            <div className="space-y-2">
              <Label htmlFor="orders">Monthly Orders</Label>
              <Input
                id="orders"
                type="number"
                value={orders}
                onChange={(e) => setOrders(e.target.value)}
                placeholder="100"
                data-testid="input-orders"
              />
              <p className="text-xs text-muted-foreground">
                Average number of orders per month
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="weight">Average Package Weight (kg)</Label>
              <Input
                id="weight"
                type="number"
                step="0.1"
                value={avgWeight}
                onChange={(e) => setAvgWeight(e.target.value)}
                placeholder="0.5"
                data-testid="input-weight"
              />
              <p className="text-xs text-muted-foreground">
                Typical weight of your packages
              </p>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-medium mb-2 text-sm">What's Included:</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>✓ Storage in Qatar fulfillment center</li>
                <li>✓ Pick, pack, and quality check</li>
                <li>✓ Local delivery across Qatar</li>
                <li>✓ Real-time tracking & support</li>
              </ul>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg mb-4">Your Estimated Costs</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                <span className="text-sm">Storage (50 SKUs)</span>
                <span className="font-semibold">AED {pricing.storage.toFixed(2)}/mo</span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                <span className="text-sm">Pick & Pack</span>
                <span className="font-semibold">AED {pricing.pickPack.toFixed(2)}/mo</span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                <span className="text-sm">Delivery</span>
                <span className="font-semibold">AED {pricing.delivery.toFixed(2)}/mo</span>
              </div>

              <div className="border-t-2 pt-3">
                <div className="flex justify-between items-center p-4 bg-primary/10 rounded-lg">
                  <div>
                    <span className="font-semibold text-lg">Total Monthly Cost</span>
                    <p className="text-xs text-muted-foreground mt-1">
                      AED {costPerOrder} per order
                    </p>
                  </div>
                  <span className="font-bold text-2xl text-primary">
                    AED {pricing.total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 p-4 rounded-lg">
              <p className="text-sm font-medium text-green-900 dark:text-green-100 mb-2">
                💰 Compare with your current provider
              </p>
              <p className="text-xs text-green-700 dark:text-green-300">
                Most customers save 15-30% by switching to our transparent pricing model.
              </p>
            </div>

            <Link href="/quote2">
              <Button size="lg" className="w-full" data-testid="btn-get-custom-quote">
                Get Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

