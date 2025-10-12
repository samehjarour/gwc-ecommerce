import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Calculator, 
  Package, 
  Truck, 
  RotateCcw,
  Info,
  Sparkles,
  Box,
  PackageOpen,
  Send,
  Download,
  FileText
} from "lucide-react";
import { Link } from "wouter";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  calculateCosts,
  formatCurrency,
  type CalculatorInput,
  type CostBreakdown,
  type SizeTier,
} from "@/lib/rateCalculator";

// Size presets with examples
const SIZE_PRESETS = {
  'Small': {
    dimensions: { length_cm: 25, width_cm: 20, height_cm: 5, weight_kg: 1.5 },
    examples: ['Phone accessories', 'Jewelry', 'Small cosmetics', 'Books'],
    maxInfo: 'Up to 35cm × 35cm × 35cm, 2kg'
  },
  'Medium': {
    dimensions: { length_cm: 35, width_cm: 25, height_cm: 15, weight_kg: 4 },
    examples: ['Shoes', 'Clothing', 'Medium electronics', 'Beauty sets'],
    maxInfo: 'Up to 45cm × 45cm × 45cm, 5kg'
  },
  'Large': {
    dimensions: { length_cm: 50, width_cm: 40, height_cm: 30, weight_kg: 8 },
    examples: ['Small appliances', 'Sports equipment', 'Large toys'],
    maxInfo: 'Up to 60cm × 60cm × 60cm, 10kg'
  },
  'Extra Large': {
    dimensions: { length_cm: 60, width_cm: 50, height_cm: 40, weight_kg: 12 },
    examples: ['Furniture items', 'Large electronics', 'Bulky products'],
    maxInfo: 'Up to 70cm × 70cm × 70cm, 15kg'
  }
};

export function GWCRateCalculatorV2() {
  const [selectedSize, setSelectedSize] = useState<'Small' | 'Medium' | 'Large' | 'Extra Large'>('Medium');
  const [environment, setEnvironment] = useState<'AC' | 'Non-AC'>('AC');
  const [inboundUnits, setInboundUnits] = useState<number>(100);
  const [storageUnits, setStorageUnits] = useState<number>(100);
  const [outboundUnits, setOutboundUnits] = useState<number>(80);
  const [returnUnits, setReturnUnits] = useState<number>(5);
  const [deliverySpeed, setDeliverySpeed] = useState<'Next Day' | 'Same Day'>('Next Day');
  const [paymentMethod, setPaymentMethod] = useState<'Prepaid' | 'COD'>('Prepaid');
  const [result, setResult] = useState<CostBreakdown | null>(null);
  const [showPromo, setShowPromo] = useState(true);

  // Calculate whenever inputs change
  useEffect(() => {
    calculateResults();
  }, [selectedSize, environment, inboundUnits, storageUnits, outboundUnits, returnUnits, deliverySpeed, paymentMethod]);

  const calculateResults = () => {
    const sizePreset = SIZE_PRESETS[selectedSize];
    
    const input: CalculatorInput = {
      environment,
      item: sizePreset.dimensions,
      quantities: {
        stored: inboundUnits, // Inbound = items received
        fulfilled: outboundUnits, // Outbound = items fulfilled
        packages: outboundUnits, // Use same number for packages (simplified)
        returns: returnUnits,
      },
      months_in_storage: 1, // Always 1 month for monthly invoice
      shipping: {
        speed: deliverySpeed,
        payment: paymentMethod,
        fm_pickup: 'None',
      },
      one_time: {
        setup_marketplaces: showPromo ? 1 : 0, // 1 free marketplace
        technology_fee: showPromo, // Free until Dec 31
      },
    };

    try {
      const breakdown = calculateCosts(input);
      setResult(breakdown);
    } catch (error) {
      console.error('Calculation error:', error);
      setResult(null);
    }
  };

  const resetForm = () => {
    setSelectedSize('Medium');
    setEnvironment('AC');
    setInboundUnits(100);
    setStorageUnits(100);
    setOutboundUnits(80);
    setReturnUnits(5);
    setDeliverySpeed('Next Day');
    setPaymentMethod('Prepaid');
  };

  return (
    <div className="w-full max-w-7xl mx-auto" data-testid="gwc-rate-calculator-v2">
      <Card className="mb-8 print:hidden">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-3 rounded-full">
                <Calculator className="w-8 h-8 text-primary" />
              </div>
              <div>
                <CardTitle className="text-3xl">UAE Fulfillment Cost Calculator</CardTitle>
                <p className="text-muted-foreground mt-1">
                  Calculate your monthly fulfillment costs - transparent pricing, no surprises
                </p>
              </div>
            </div>
            <Button variant="outline" onClick={resetForm}>
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>
        </CardHeader>
      </Card>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* LEFT COLUMN - INPUTS */}
        <div className="space-y-6">
          {/* Product Size Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="w-5 h-5" />
                Product Size
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Select the size that best matches your products
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {(Object.keys(SIZE_PRESETS) as Array<keyof typeof SIZE_PRESETS>).map((size) => {
                  const preset = SIZE_PRESETS[size];
                  return (
                    <TooltipProvider key={size}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant={selectedSize === size ? 'default' : 'outline'}
                            className="h-auto flex-col items-start p-4 relative"
                            onClick={() => setSelectedSize(size)}
                          >
                            <div className="font-semibold mb-1">{size}</div>
                            <div className="text-xs text-muted-foreground text-left">
                              {preset.examples[0]}
                            </div>
                            <Info className="w-3 h-3 absolute top-2 right-2 opacity-50" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="max-w-xs">
                          <div className="space-y-2">
                            <p className="font-semibold">{preset.maxInfo}</p>
                            <p className="text-xs">Examples:</p>
                            <ul className="text-xs list-disc list-inside">
                              {preset.examples.map((ex, i) => (
                                <li key={i}>{ex}</li>
                              ))}
                            </ul>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  );
                })}
              </div>

              <div className="bg-muted/50 p-3 rounded-lg text-sm">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Selected: {selectedSize}</p>
                    <p className="text-xs text-muted-foreground">
                      {SIZE_PRESETS[selectedSize].maxInfo}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <Label>Storage Environment</Label>
                <Select value={environment} onValueChange={(value: 'AC' | 'Non-AC') => setEnvironment(value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="AC">Air Conditioned (AC)</SelectItem>
                    <SelectItem value="Non-AC">Non-AC (20% cheaper)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Monthly Volumes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Box className="w-5 h-5" />
                Monthly Volumes
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Enter your expected monthly order volumes
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label htmlFor="inbound" className="flex items-center gap-2">
                    <PackageOpen className="w-4 h-4 text-primary" />
                    Inbound / Receive Units
                  </Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="w-4 h-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs text-xs">
                          Units received into warehouse in Month 1. After that, this is just replenishment.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Input
                  id="inbound"
                  type="number"
                  value={inboundUnits || ''}
                  onChange={(e) => setInboundUnits(parseInt(e.target.value) || 0)}
                  placeholder="100"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label htmlFor="storage" className="flex items-center gap-2">
                    <Box className="w-4 h-4 text-primary" />
                    Storage Units (Month 1)
                  </Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="w-4 h-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs text-xs">
                          Average units stored during the month. After Month 1, this equals (previous storage + inbound - outbound).
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Input
                  id="storage"
                  type="number"
                  value={storageUnits || ''}
                  onChange={(e) => setStorageUnits(parseInt(e.target.value) || 0)}
                  placeholder="100"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label htmlFor="outbound" className="flex items-center gap-2">
                    <Send className="w-4 h-4 text-primary" />
                    Outbound Units (Pick, Pack & Ship)
                  </Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="w-4 h-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs text-xs">
                          Units fulfilled and shipped per month. Used for both fulfillment and shipping calculations.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Input
                  id="outbound"
                  type="number"
                  value={outboundUnits || ''}
                  onChange={(e) => setOutboundUnits(parseInt(e.target.value) || 0)}
                  placeholder="80"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Includes pick & pack handling and shipping/delivery
                </p>
              </div>

              <div>
                <Label htmlFor="returns">Customer Returns (Units)</Label>
                <Input
                  id="returns"
                  type="number"
                  value={returnUnits || ''}
                  onChange={(e) => setReturnUnits(parseInt(e.target.value) || 0)}
                  placeholder="5"
                />
              </div>
            </CardContent>
          </Card>

          {/* Delivery Options */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="w-5 h-5" />
                Delivery Options
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label>Delivery Speed</Label>
                  <Select 
                    value={deliverySpeed} 
                    onValueChange={(value: 'Next Day' | 'Same Day') => setDeliverySpeed(value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Next Day">Next Day</SelectItem>
                      <SelectItem value="Same Day">Same Day</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Payment Method</Label>
                  <Select 
                    value={paymentMethod} 
                    onValueChange={(value: 'Prepaid' | 'COD') => setPaymentMethod(value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Prepaid">Prepaid</SelectItem>
                      <SelectItem value="COD">COD (+5 AED/pkg)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Promotional Offer */}
          {showPromo && (
            <Alert className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 border-green-200">
              <Sparkles className="h-4 w-4 text-green-600" />
              <AlertDescription>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold text-green-900 dark:text-green-100">
                      🎉 Free Until December 31st!
                    </p>
                    <p className="text-sm text-green-800 dark:text-green-200 mt-1">
                      • 1 Marketplace Integration (normally 1,000 AED)<br />
                      • System Integration (normally 1,000 AED)
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowPromo(false)}
                    className="text-green-800 hover:text-green-900"
                  >
                    ✕
                  </Button>
                </div>
              </AlertDescription>
            </Alert>
          )}
        </div>

        {/* RIGHT COLUMN - RESULTS */}
        <div className="space-y-6">
          {result && (
            <>
              {/* Monthly Invoice Header */}
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 print:hidden">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Badge className="mb-2 text-base px-4 py-2">
                      Monthly Sample Invoice
                    </Badge>
                    <div className="mt-4">
                      <p className="text-sm text-muted-foreground mb-1">Product Tier</p>
                      <p className="text-lg font-semibold">{selectedSize}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {SIZE_PRESETS[selectedSize].maxInfo}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Cost Breakdown */}
              <Card className="print:hidden">
                <CardHeader>
                  <CardTitle>Monthly Cost Breakdown</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Based on your monthly volumes
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Inbound / Receive */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold flex items-center gap-2">
                        <PackageOpen className="w-4 h-4 text-primary" />
                        Inbound / Receive
                      </span>
                      <span className="font-bold text-lg">{formatCurrency(result.warehousing.receiving)}</span>
                    </div>
                    <div className="pl-6 text-sm text-muted-foreground">
                      {inboundUnits} units received into warehouse
                    </div>
                  </div>

                  <Separator />

                  {/* Storage */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold flex items-center gap-2">
                        <Box className="w-4 h-4 text-primary" />
                        Storage ({environment})
                      </span>
                      <span className="font-bold text-lg">{formatCurrency(result.warehousing.storage)}</span>
                    </div>
                    <div className="pl-6 text-sm text-muted-foreground">
                      {storageUnits} units × 1 month
                    </div>
                  </div>

                  <Separator />

                  {/* Outbound (Pick & Pack) */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold flex items-center gap-2">
                        <Package className="w-4 h-4 text-primary" />
                        Outbound (Pick & Pack)
                      </span>
                      <span className="font-bold text-lg">{formatCurrency(result.fulfillment.total)}</span>
                    </div>
                    <div className="pl-6 space-y-1 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Pick & Pack ({outboundUnits} units)</span>
                        <span>{formatCurrency(result.fulfillment.pick_pack)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Packaging Material</span>
                        <span>{formatCurrency(result.fulfillment.packaging)}</span>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Shipping / Last Mile Delivery */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold flex items-center gap-2">
                        <Truck className="w-4 h-4 text-primary" />
                        Shipping / Last Mile Delivery
                      </span>
                      <span className="font-bold text-lg">{formatCurrency(result.shipping.total)}</span>
                    </div>
                    <div className="pl-6 space-y-1 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>{deliverySpeed} ({outboundUnits} packages)</span>
                        <span>{formatCurrency(result.shipping.base)}</span>
                      </div>
                      {result.shipping.cod > 0 && (
                        <div className="flex justify-between">
                          <span>COD Fee</span>
                          <span>{formatCurrency(result.shipping.cod)}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <Separator />

                  {/* Returns */}
                  {returnUnits > 0 && (
                    <>
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold flex items-center gap-2">
                            <RotateCcw className="w-4 h-4 text-primary" />
                            Returns Processing
                          </span>
                          <span className="font-bold text-lg">{formatCurrency(result.returns.total)}</span>
                        </div>
                        <div className="pl-6 space-y-1 text-sm text-muted-foreground">
                          <div className="flex justify-between">
                            <span>Collection ({returnUnits} units)</span>
                            <span>{formatCurrency(result.returns.collection)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Processing</span>
                            <span>{formatCurrency(result.returns.processing)}</span>
                          </div>
                        </div>
                      </div>
                      <Separator />
                    </>
                  )}

                  {/* One-Time Fees (if promotional) */}
                  {showPromo && result.one_time.total > 0 && (
                    <>
                      <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold flex items-center gap-2 text-green-900 dark:text-green-100">
                            <Sparkles className="w-4 h-4" />
                            Integration Fees
                          </span>
                          <div className="text-right">
                            <span className="font-bold text-lg line-through text-muted-foreground">
                              {formatCurrency(result.one_time.total)}
                            </span>
                            <Badge className="ml-2 bg-green-600">FREE</Badge>
                          </div>
                        </div>
                        <div className="pl-6 text-sm text-green-800 dark:text-green-200">
                          Promotional offer until December 31st
                        </div>
                      </div>
                      <Separator />
                    </>
                  )}
                </CardContent>
              </Card>

              {/* Monthly Total */}
              <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 border-green-200 dark:border-green-900 print:hidden">
                <CardContent className="pt-6 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-semibold">Monthly Total</span>
                    <span className="text-3xl font-bold text-green-600 dark:text-green-400">
                      {formatCurrency(result.totals.operational)}
                    </span>
                  </div>
                  <Separator />
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-1">Per Unit Fulfilled</p>
                      <p className="text-lg font-semibold">{formatCurrency(result.totals.per_item_fulfilled)}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-1">Per Package Shipped</p>
                      <p className="text-lg font-semibold">{formatCurrency(result.totals.per_package)}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <div className="flex gap-3 print:hidden">
                <Link href="/quote2">
                  <Button className="flex-1" size="lg">
                    <FileText className="w-4 h-4 mr-2" />
                    Get Custom Quote
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="flex-1 print:hidden" 
                  size="lg"
                  onClick={() => window.print()}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Print-Only Quote View */}
      {result && (
        <div className="hidden print:block p-8">
          <div className="print-quote max-w-full">
            {/* Header */}
            <div className="mb-8 pb-6 border-b-2 border-gray-300">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold text-primary mb-2">GWC Logistics</h1>
                  <p className="text-sm text-gray-600">E-commerce Fulfillment Quote</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Quote Date</p>
                  <p className="font-semibold">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Product Specifications</h2>
              <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded">
                <div>
                  <p className="text-sm text-gray-600">Size Category</p>
                  <p className="font-semibold">{selectedSize}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Storage Environment</p>
                  <p className="font-semibold">{environment} (Climate Controlled)</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Dimensions</p>
                  <p className="font-semibold">
                    {SIZE_PRESETS[selectedSize].dimensions.length_cm} × {SIZE_PRESETS[selectedSize].dimensions.width_cm} × {SIZE_PRESETS[selectedSize].dimensions.height_cm} cm
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Weight</p>
                  <p className="font-semibold">{SIZE_PRESETS[selectedSize].dimensions.weight_kg} kg</p>
                </div>
              </div>
            </div>

            {/* Volume Details */}
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Monthly Volume</h2>
              <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded">
                <div>
                  <p className="text-sm text-gray-600">Units Received (Inbound)</p>
                  <p className="font-semibold">{inboundUnits} units</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Units Stored</p>
                  <p className="font-semibold">{storageUnits} units</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Packages Shipped (Outbound)</p>
                  <p className="font-semibold">{outboundUnits} packages</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Returns Processed</p>
                  <p className="font-semibold">{returnUnits} units</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Delivery Speed</p>
                  <p className="font-semibold">{deliverySpeed}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Payment Method</p>
                  <p className="font-semibold">{paymentMethod}</p>
                </div>
              </div>
            </div>

            {/* Cost Breakdown */}
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Monthly Cost Breakdown</h2>
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left p-3 font-semibold">Service</th>
                    <th className="text-right p-3 font-semibold">Cost (AED)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3">
                      <p className="font-medium">Warehousing & Storage</p>
                      <p className="text-sm text-gray-600">{environment} Storage for {storageUnits} units</p>
                    </td>
                    <td className="text-right p-3">{formatCurrency(result.warehousing.total)}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">
                      <p className="font-medium">Fulfillment Services</p>
                      <p className="text-sm text-gray-600">Pick, pack & ship {outboundUnits} packages</p>
                    </td>
                    <td className="text-right p-3">{formatCurrency(result.fulfillment.total)}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">
                      <p className="font-medium">Last-Mile Delivery</p>
                      <p className="text-sm text-gray-600">{deliverySpeed} - {paymentMethod}</p>
                    </td>
                    <td className="text-right p-3">{formatCurrency(result.shipping.total)}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">
                      <p className="font-medium">Returns Processing</p>
                      <p className="text-sm text-gray-600">Collection & processing for {returnUnits} units</p>
                    </td>
                    <td className="text-right p-3">{formatCurrency(result.returns.total)}</td>
                  </tr>
                  {result.one_time && result.one_time.total > 0 && (
                    <tr className="border-b">
                      <td className="p-3">
                        <p className="font-medium">Integration Fees</p>
                        <p className="text-sm text-gray-600">Platform integration setup</p>
                      </td>
                      <td className="text-right p-3">{formatCurrency(result.one_time.total)}</td>
                    </tr>
                  )}
                </tbody>
                <tfoot className="bg-primary text-white">
                  <tr>
                    <td className="p-4 font-bold text-lg">MONTHLY TOTAL</td>
                    <td className="text-right p-4 font-bold text-lg">{formatCurrency(result.totals.operational)}</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* Per Unit Metrics */}
            <div className="mb-6 bg-blue-50 p-4 rounded">
              <h3 className="font-bold mb-3 text-gray-800">Cost Efficiency Metrics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Per Unit Fulfilled</p>
                  <p className="text-2xl font-bold text-primary">{formatCurrency(result.totals.per_item_fulfilled)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Per Package Shipped</p>
                  <p className="text-2xl font-bold text-primary">{formatCurrency(result.totals.per_package)}</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t-2 border-gray-300">
              <p className="text-sm text-gray-600 mb-2">
                <strong>Note:</strong> This quote is valid for 30 days and based on the specifications provided. 
                Final pricing may vary based on actual usage and product requirements.
              </p>
              <p className="text-sm text-gray-600">
                For questions or to proceed with this quote, please contact: <strong>info@gwclogistics.com</strong>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}




