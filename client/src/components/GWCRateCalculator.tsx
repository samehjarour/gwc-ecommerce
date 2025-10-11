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
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Calculator, 
  Package, 
  Truck, 
  RotateCcw, 
  Download,
  AlertCircle,
  CheckCircle2,
  Info
} from "lucide-react";
import {
  calculateCosts,
  validateInput,
  formatCurrency,
  isSameDayAvailable,
  getTierName,
  type CalculatorInput,
  type CostBreakdown,
} from "@/lib/rateCalculator";

export function GWCRateCalculator() {
  const [input, setInput] = useState<CalculatorInput>({
    environment: 'AC',
    item: {
      length_cm: 35,
      width_cm: 25,
      height_cm: 10,
      weight_kg: 4,
    },
    quantities: {
      stored: 20,
      fulfilled: 20,
      packages: 20,
      returns: 2,
    },
    months_in_storage: 1,
    shipping: {
      speed: 'Next Day',
      payment: 'Prepaid',
      fm_pickup: 'None',
    },
    one_time: {
      setup_marketplaces: 0,
      technology_fee: false,
    },
    overrides: {
      packaging_per_item: undefined,
      vas_misc: 0,
    },
  });

  const [result, setResult] = useState<CostBreakdown | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [showSameDayWarning, setShowSameDayWarning] = useState(false);

  useEffect(() => {
    calculateResults();
  }, [input]);

  const calculateResults = () => {
    const validationErrors = validateInput(input);
    setErrors(validationErrors);

    if (validationErrors.length === 0) {
      try {
        const breakdown = calculateCosts(input);
        setResult(breakdown);

        // Check if same-day was requested but not available
        if (input.shipping.speed === 'Same Day' && !isSameDayAvailable(breakdown.tier)) {
          setShowSameDayWarning(true);
        } else {
          setShowSameDayWarning(false);
        }
      } catch (error) {
        setErrors([error instanceof Error ? error.message : 'Calculation error']);
        setResult(null);
      }
    } else {
      setResult(null);
    }
  };

  const resetForm = () => {
    setInput({
      environment: 'AC',
      item: { length_cm: 0, width_cm: 0, height_cm: 0, weight_kg: 0 },
      quantities: { stored: 0, fulfilled: 0, packages: 0, returns: 0 },
      months_in_storage: 1,
      shipping: { speed: 'Next Day', payment: 'Prepaid', fm_pickup: 'None' },
      one_time: { setup_marketplaces: 0, technology_fee: false },
      overrides: { packaging_per_item: undefined, vas_misc: 0 },
    });
  };

  const downloadPDF = () => {
    // TODO: Implement PDF generation
    alert('PDF download feature coming soon!');
  };

  return (
    <div className="w-full max-w-7xl mx-auto" data-testid="gwc-rate-calculator">
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-3 rounded-full">
                <Calculator className="w-8 h-8 text-primary" />
              </div>
              <div>
                <CardTitle className="text-3xl">GWC UAE Fulfillment Cost Calculator</CardTitle>
                <p className="text-muted-foreground mt-1">
                  Calculate warehousing, fulfillment, shipping, and returns costs
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
          {/* Item Dimensions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="w-5 h-5" />
                Item Dimensions & Storage
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Storage Environment</Label>
                <Select 
                  value={input.environment} 
                  onValueChange={(value: 'AC' | 'Non-AC') => 
                    setInput({ ...input, environment: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="AC">Air Conditioned (AC)</SelectItem>
                    <SelectItem value="Non-AC">Non-AC</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <Label htmlFor="length">Length (cm)</Label>
                  <Input
                    id="length"
                    type="number"
                    value={input.item.length_cm || ''}
                    onChange={(e) => setInput({
                      ...input,
                      item: { ...input.item, length_cm: parseFloat(e.target.value) || 0 }
                    })}
                    placeholder="35"
                  />
                </div>
                <div>
                  <Label htmlFor="width">Width (cm)</Label>
                  <Input
                    id="width"
                    type="number"
                    value={input.item.width_cm || ''}
                    onChange={(e) => setInput({
                      ...input,
                      item: { ...input.item, width_cm: parseFloat(e.target.value) || 0 }
                    })}
                    placeholder="25"
                  />
                </div>
                <div>
                  <Label htmlFor="height">Height (cm)</Label>
                  <Input
                    id="height"
                    type="number"
                    value={input.item.height_cm || ''}
                    onChange={(e) => setInput({
                      ...input,
                      item: { ...input.item, height_cm: parseFloat(e.target.value) || 0 }
                    })}
                    placeholder="10"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  step="0.1"
                  value={input.item.weight_kg || ''}
                  onChange={(e) => setInput({
                    ...input,
                    item: { ...input.item, weight_kg: parseFloat(e.target.value) || 0 }
                  })}
                  placeholder="4.0"
                />
              </div>

              <Separator />

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="stored">Units Stored</Label>
                  <Input
                    id="stored"
                    type="number"
                    value={input.quantities.stored || ''}
                    onChange={(e) => setInput({
                      ...input,
                      quantities: { ...input.quantities, stored: parseInt(e.target.value) || 0 }
                    })}
                    placeholder="20"
                  />
                </div>
                <div>
                  <Label htmlFor="months">Months in Storage</Label>
                  <Input
                    id="months"
                    type="number"
                    step="0.1"
                    value={input.months_in_storage || ''}
                    onChange={(e) => setInput({
                      ...input,
                      months_in_storage: parseFloat(e.target.value) || 0
                    })}
                    placeholder="1.0"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="fulfilled">Units Fulfilled (Picked & Packed)</Label>
                <Input
                  id="fulfilled"
                  type="number"
                  value={input.quantities.fulfilled || ''}
                  onChange={(e) => setInput({
                    ...input,
                    quantities: { ...input.quantities, fulfilled: parseInt(e.target.value) || 0 }
                  })}
                  placeholder="20"
                />
              </div>
            </CardContent>
          </Card>

          {/* Shipping */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="w-5 h-5" />
                Shipping & Delivery
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="packages">Number of Packages</Label>
                <Input
                  id="packages"
                  type="number"
                  value={input.quantities.packages || ''}
                  onChange={(e) => setInput({
                    ...input,
                    quantities: { ...input.quantities, packages: parseInt(e.target.value) || 0 }
                  })}
                  placeholder="20"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Shipping is charged per package, not per item
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label>Delivery Speed</Label>
                  <Select 
                    value={input.shipping.speed} 
                    onValueChange={(value: 'Next Day' | 'Same Day') => 
                      setInput({ ...input, shipping: { ...input.shipping, speed: value } })
                    }
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
                    value={input.shipping.payment} 
                    onValueChange={(value: 'Prepaid' | 'COD') => 
                      setInput({ ...input, shipping: { ...input.shipping, payment: value } })
                    }
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

              <div>
                <Label>First-Mile Pickup (if not stored at GWC)</Label>
                <Select 
                  value={input.shipping.fm_pickup} 
                  onValueChange={(value: 'None' | 'Within Dubai' | 'Outside Dubai') => 
                    setInput({ ...input, shipping: { ...input.shipping, fm_pickup: value } })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="None">None</SelectItem>
                    <SelectItem value="Within Dubai">Within Dubai (+1 AED/pkg)</SelectItem>
                    <SelectItem value="Outside Dubai">Outside Dubai (+1.5 AED/pkg)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="returns">Customer Returns (Items)</Label>
                <Input
                  id="returns"
                  type="number"
                  value={input.quantities.returns || ''}
                  onChange={(e) => setInput({
                    ...input,
                    quantities: { ...input.quantities, returns: parseInt(e.target.value) || 0 }
                  })}
                  placeholder="2"
                />
              </div>
            </CardContent>
          </Card>

          {/* One-Time Fees */}
          <Card>
            <CardHeader>
              <CardTitle>One-Time Fees (Optional)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="marketplaces">Marketplace Setup Fees</Label>
                <Input
                  id="marketplaces"
                  type="number"
                  value={input.one_time.setup_marketplaces || ''}
                  onChange={(e) => setInput({
                    ...input,
                    one_time: { ...input.one_time, setup_marketplaces: parseInt(e.target.value) || 0 }
                  })}
                  placeholder="0"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  1,000 AED per marketplace
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="technology"
                  checked={input.one_time.technology_fee}
                  onCheckedChange={(checked) => setInput({
                    ...input,
                    one_time: { ...input.one_time, technology_fee: checked as boolean }
                  })}
                />
                <Label htmlFor="technology" className="cursor-pointer">
                  Technology Integration Fee (1,000 AED)
                </Label>
              </div>

              <div>
                <Label htmlFor="vas">VAS / Miscellaneous (AED)</Label>
                <Input
                  id="vas"
                  type="number"
                  value={input.overrides?.vas_misc || ''}
                  onChange={(e) => setInput({
                    ...input,
                    overrides: { ...input.overrides, vas_misc: parseFloat(e.target.value) || 0 }
                  })}
                  placeholder="0"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* RIGHT COLUMN - RESULTS */}
        <div className="space-y-6">
          {/* Errors */}
          {errors.length > 0 && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <ul className="list-disc list-inside space-y-1">
                  {errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                  ))}
                </ul>
              </AlertDescription>
            </Alert>
          )}

          {/* Same-Day Warning */}
          {showSameDayWarning && (
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                Same-day delivery is not available for this size tier. Showing Next-Day pricing instead.
              </AlertDescription>
            </Alert>
          )}

          {/* Results */}
          {result && (
            <>
              {/* Tier Info */}
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Badge className="mb-2 text-base px-4 py-2">
                      {getTierName(result.tier)}
                    </Badge>
                    <div className="grid grid-cols-3 gap-4 mt-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Max Dimension</p>
                        <p className="font-semibold">{result.tier_info.max_dimension_cm} cm</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Cube Volume</p>
                        <p className="font-semibold">{result.tier_info.cube_cm3.toLocaleString()} cm³</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Weight</p>
                        <p className="font-semibold">{input.item.weight_kg} kg</p>
                      </div>
                    </div>
                    {result.tier_info.cat5_extra_kg > 0 && (
                      <Alert className="mt-4">
                        <Info className="h-4 w-4" />
                        <AlertDescription>
                          Category 5 surcharge applied: +{result.tier_info.cat5_extra_kg} kg over 30 kg base
                        </AlertDescription>
                      </Alert>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Cost Breakdown */}
              <Card>
                <CardHeader>
                  <CardTitle>Cost Breakdown</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Warehousing */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Warehousing</span>
                      <span className="font-bold text-lg">{formatCurrency(result.warehousing.total)}</span>
                    </div>
                    <div className="pl-4 space-y-1 text-sm">
                      <div className="flex justify-between text-muted-foreground">
                        <span>Receiving ({input.quantities.stored} items)</span>
                        <span>{formatCurrency(result.warehousing.receiving)}</span>
                      </div>
                      <div className="flex justify-between text-muted-foreground">
                        <span>Storage ({input.months_in_storage} months)</span>
                        <span>{formatCurrency(result.warehousing.storage)}</span>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Fulfillment */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Fulfillment</span>
                      <span className="font-bold text-lg">{formatCurrency(result.fulfillment.total)}</span>
                    </div>
                    <div className="pl-4 space-y-1 text-sm">
                      <div className="flex justify-between text-muted-foreground">
                        <span>Pick & Pack ({input.quantities.fulfilled} items)</span>
                        <span>{formatCurrency(result.fulfillment.pick_pack)}</span>
                      </div>
                      <div className="flex justify-between text-muted-foreground">
                        <span>Packaging Material</span>
                        <span>{formatCurrency(result.fulfillment.packaging)}</span>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Shipping */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Shipping</span>
                      <span className="font-bold text-lg">{formatCurrency(result.shipping.total)}</span>
                    </div>
                    <div className="pl-4 space-y-1 text-sm">
                      <div className="flex justify-between text-muted-foreground">
                        <span>Base Shipping ({input.quantities.packages} packages)</span>
                        <span>{formatCurrency(result.shipping.base)}</span>
                      </div>
                      {result.shipping.cod > 0 && (
                        <div className="flex justify-between text-muted-foreground">
                          <span>COD Fee</span>
                          <span>{formatCurrency(result.shipping.cod)}</span>
                        </div>
                      )}
                      {result.shipping.fm > 0 && (
                        <div className="flex justify-between text-muted-foreground">
                          <span>First-Mile Pickup</span>
                          <span>{formatCurrency(result.shipping.fm)}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <Separator />

                  {/* Returns */}
                  {input.quantities.returns > 0 && (
                    <>
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold">Returns</span>
                          <span className="font-bold text-lg">{formatCurrency(result.returns.total)}</span>
                        </div>
                        <div className="pl-4 space-y-1 text-sm">
                          <div className="flex justify-between text-muted-foreground">
                            <span>Collection ({input.quantities.returns} items)</span>
                            <span>{formatCurrency(result.returns.collection)}</span>
                          </div>
                          <div className="flex justify-between text-muted-foreground">
                            <span>Processing</span>
                            <span>{formatCurrency(result.returns.processing)}</span>
                          </div>
                        </div>
                      </div>
                      <Separator />
                    </>
                  )}

                  {/* One-Time */}
                  {result.one_time.total > 0 && (
                    <>
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold">One-Time Fees</span>
                          <span className="font-bold text-lg">{formatCurrency(result.one_time.total)}</span>
                        </div>
                        <div className="pl-4 space-y-1 text-sm">
                          {result.one_time.setup > 0 && (
                            <div className="flex justify-between text-muted-foreground">
                              <span>Marketplace Setup</span>
                              <span>{formatCurrency(result.one_time.setup)}</span>
                            </div>
                          )}
                          {result.one_time.technology > 0 && (
                            <div className="flex justify-between text-muted-foreground">
                              <span>Technology Integration</span>
                              <span>{formatCurrency(result.one_time.technology)}</span>
                            </div>
                          )}
                          {result.one_time.vas_misc > 0 && (
                            <div className="flex justify-between text-muted-foreground">
                              <span>VAS / Miscellaneous</span>
                              <span>{formatCurrency(result.one_time.vas_misc)}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <Separator />
                    </>
                  )}
                </CardContent>
              </Card>

              {/* Totals */}
              <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 border-green-200 dark:border-green-900">
                <CardContent className="pt-6 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-lg">Operational Total (Recurring)</span>
                    <span className="text-2xl font-bold">{formatCurrency(result.totals.operational)}</span>
                  </div>
                  {result.one_time.total > 0 && (
                    <div className="flex justify-between items-center">
                      <span className="text-lg">One-Time Total</span>
                      <span className="text-2xl font-bold">{formatCurrency(result.totals.one_time)}</span>
                    </div>
                  )}
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-semibold">Grand Total</span>
                    <span className="text-3xl font-bold text-green-600 dark:text-green-400">
                      {formatCurrency(result.totals.grand)}
                    </span>
                  </div>
                  <Separator />
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-1">Per Item Fulfilled</p>
                      <p className="text-lg font-semibold">{formatCurrency(result.totals.per_item_fulfilled)}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-1">Per Package Shipped</p>
                      <p className="text-lg font-semibold">{formatCurrency(result.totals.per_package)}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Actions */}
              <div className="flex gap-3">
                <Button className="flex-1" onClick={downloadPDF}>
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
                <Button variant="outline" className="flex-1">
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Get Quote
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

