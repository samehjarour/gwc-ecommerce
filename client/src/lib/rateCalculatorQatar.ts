/**
 * GWC Qatar E-Commerce Cost Calculator
 * Based on GWC_EComm_RateCard_QA.pdf
 * 
 * NOTE: Please verify these rates match the Qatar PDF (GWC_EComm_RateCard_QA.pdf)
 * The rates below are placeholders and should be updated according to the Qatar rate card.
 */

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

export type StorageEnvironment = 'AC' | 'Non-AC';
export type DeliverySpeed = 'Next Day' | 'Same Day';
export type PaymentMethod = 'Prepaid' | 'COD';
export type FMPickupZone = 'None' | 'Within Dubai' | 'Outside Dubai';
export type SizeTier = 'Small' | 'Medium' | 'Large' | 'Extra Large' | 'OS_CAT1' | 'OS_CAT2' | 'OS_CAT3' | 'OS_CAT4' | 'OS_CAT5';

export interface ItemDimensions {
  length_cm: number;
  width_cm: number;
  height_cm: number;
  weight_kg: number;
}

export interface Quantities {
  stored: number;
  fulfilled: number;
  packages: number;
  returns: number;
}

export interface CalculatorInput {
  environment: StorageEnvironment;
  item: ItemDimensions;
  quantities: Quantities;
  months_in_storage: number;
  shipping: {
    speed: DeliverySpeed;
    payment: PaymentMethod;
    fm_pickup: FMPickupZone;
  };
  one_time: {
    setup_marketplaces: number;
    technology_fee: boolean;
  };
  overrides?: {
    packaging_per_item?: number;
    vas_misc?: number;
  };
}

export interface CostBreakdown {
  warehousing: {
    receiving: number;
    storage: number;
    total: number;
  };
  fulfillment: {
    pick_pack: number;
    packaging: number;
    total: number;
  };
  shipping: {
    base: number;
    cod: number;
    fm: number;
    total: number;
  };
  returns: {
    collection: number;
    processing: number;
    total: number;
  };
  one_time: {
    setup: number;
    technology: number;
    vas_misc: number;
    total: number;
  };
  totals: {
    operational: number;
    one_time: number;
    grand: number;
    per_item_fulfilled: number;
    per_package: number;
  };
  tier: SizeTier;
  tier_info: {
    cube_cm3: number;
    max_dimension_cm: number;
    is_oversized: boolean;
    cat5_extra_kg: number;
  };
}

// ============================================================================
// RATE TABLES - QATAR (from GWC_EComm_RateCard_QA.pdf)
// ============================================================================
// ⚠️ TODO: Update these rates according to GWC_EComm_RateCard_QA.pdf

// Warehousing - AC (Qatar Rates)
const WAREHOUSING_AC = {
  'Small': { receiving: 0.5, storage_monthly: 0.25 },
  'Medium': { receiving: 1.0, storage_monthly: 0.5 },
  'Large': { receiving: 1.5, storage_monthly: 0.75 },
  'Extra Large': { receiving: 2.0, storage_monthly: 1.0 },
  'OS_CAT1': { receiving: 2.5, storage_monthly: 1.25 },
  'OS_CAT2': { receiving: 3.0, storage_monthly: 1.5 },
  'OS_CAT3': { receiving: 3.5, storage_monthly: 1.75 },
  'OS_CAT4': { receiving: 4.0, storage_monthly: 2.0 },
  'OS_CAT5': { receiving: 4.0, storage_monthly: 2.0 }, // Base + 0.5 per kg over 30
};

// Warehousing - Non-AC (Page 3)
const WAREHOUSING_NON_AC = {
  'Small': { receiving: 0.4, storage_monthly: 0.2 },
  'Medium': { receiving: 0.8, storage_monthly: 0.4 },
  'Large': { receiving: 1.2, storage_monthly: 0.6 },
  'Extra Large': { receiving: 1.6, storage_monthly: 0.8 },
  'OS_CAT1': { receiving: 2.0, storage_monthly: 1.0 },
  'OS_CAT2': { receiving: 2.4, storage_monthly: 1.2 },
  'OS_CAT3': { receiving: 2.8, storage_monthly: 1.4 },
  'OS_CAT4': { receiving: 3.2, storage_monthly: 1.6 },
  'OS_CAT5': { receiving: 3.2, storage_monthly: 1.6 }, // Base + 0.5 per kg over 30
};

// Fulfillment (Page 4)
const FULFILLMENT = {
  'Small': { pick_pack: 0.5, packaging: 0.5 },
  'Medium': { pick_pack: 1.0, packaging: 0.75 },
  'Large': { pick_pack: 1.5, packaging: 1.0 },
  'Extra Large': { pick_pack: 2.0, packaging: 1.25 },
  'OS_CAT1': { pick_pack: 2.5, packaging: 'actuals' as const },
  'OS_CAT2': { pick_pack: 3.0, packaging: 'actuals' as const },
  'OS_CAT3': { pick_pack: 3.5, packaging: 'actuals' as const },
  'OS_CAT4': { pick_pack: 4.0, packaging: 'actuals' as const },
  'OS_CAT5': { pick_pack: 4.0, packaging: 'actuals' as const }, // Base + 0.5 per kg over 30
};

// Shipping - per package (Page 5)
const SHIPPING = {
  'Small': { next_day: 10, same_day: 15 },
  'Medium': { next_day: 12, same_day: 18 },
  'Large': { next_day: 15, same_day: 22 },
  'Extra Large': { next_day: 20, same_day: null }, // Same-day N/A
  'OS_CAT1': { next_day: 25, same_day: null },
  'OS_CAT2': { next_day: 30, same_day: null },
  'OS_CAT3': { next_day: 35, same_day: null },
  'OS_CAT4': { next_day: 40, same_day: null },
  'OS_CAT5': { next_day: 40, same_day: null }, // Base + 1.0 per kg over 30
};

// Returns (Page 6)
const RETURNS = {
  'Small': { collection: 3, processing: 0.5 },
  'Medium': { collection: 5, processing: 1.0 },
  'Large': { collection: 7, processing: 1.5 },
  'Extra Large': { collection: 10, processing: 2.0 },
  'OS_CAT1': { collection: 12, processing: 2.5 },
  'OS_CAT2': { collection: 15, processing: 3.0 },
  'OS_CAT3': { collection: 18, processing: 3.5 },
  'OS_CAT4': { collection: 20, processing: 4.0 },
  'OS_CAT5': { collection: 20, processing: 4.0 }, // Collection +1, Processing +0.5 per kg over 30
};

// Size tier bounds (from tables)
const SIZE_BOUNDS = {
  'Small': { max_dim: 35, max_cube: 30000, max_weight: 2 },
  'Medium': { max_dim: 45, max_cube: 50000, max_weight: 5 },
  'Large': { max_dim: 60, max_cube: 100000, max_weight: 10 },
  'Extra Large': { max_dim: 70, max_cube: 200000, max_weight: 15 },
};

// Constants
const COD_FEE = 5; // AED per package
const FM_PICKUP_DUBAI = 1; // AED per package
const FM_PICKUP_OUTSIDE = 1.5; // AED per package
const SETUP_FEE = 1000; // AED per marketplace
const TECHNOLOGY_FEE = 1000; // AED one-time

// ============================================================================
// TIER DETERMINATION
// ============================================================================

export function determineTier(item: ItemDimensions): SizeTier {
  const { length_cm, width_cm, height_cm, weight_kg } = item;
  const cube = length_cm * width_cm * height_cm;
  const maxDim = Math.max(length_cm, width_cm, height_cm);

  // Check for oversized (max dimension > 70 cm and cube <= 3,000,000)
  if (maxDim > 70 && cube <= 3_000_000) {
    if (weight_kg <= 15) return 'OS_CAT1';
    if (weight_kg <= 20) return 'OS_CAT2';
    if (weight_kg <= 25) return 'OS_CAT3';
    if (weight_kg <= 30) return 'OS_CAT4';
    if (weight_kg <= 120) return 'OS_CAT5';
    throw new Error('Weight exceeds maximum of 120 kg');
  }

  // Standard tiers - must satisfy ALL three constraints
  const tiers: Array<{ name: SizeTier; bounds: typeof SIZE_BOUNDS[keyof typeof SIZE_BOUNDS] }> = [
    { name: 'Small', bounds: SIZE_BOUNDS['Small'] },
    { name: 'Medium', bounds: SIZE_BOUNDS['Medium'] },
    { name: 'Large', bounds: SIZE_BOUNDS['Large'] },
    { name: 'Extra Large', bounds: SIZE_BOUNDS['Extra Large'] },
  ];

  for (const { name, bounds } of tiers) {
    if (maxDim <= bounds.max_dim && cube <= bounds.max_cube && weight_kg <= bounds.max_weight) {
      return name;
    }
  }

  // If no standard tier fits, it's Extra Large by default
  return 'Extra Large';
}

function cat5ExtraKg(weight_kg: number): number {
  if (weight_kg <= 30) return 0;
  return Math.min(Math.ceil(weight_kg) - 30, 90); // Cap at 90 kg over
}

// ============================================================================
// PRICING FUNCTIONS
// ============================================================================

function priceWarehousing(
  tier: SizeTier,
  env: StorageEnvironment,
  months: number,
  qStored: number,
  weight_kg: number
) {
  const rates = env === 'AC' ? WAREHOUSING_AC[tier] : WAREHOUSING_NON_AC[tier];
  let receiving = rates.receiving;
  let storage = rates.storage_monthly;

  // Cat 5 escalator
  if (tier === 'OS_CAT5') {
    const extra = cat5ExtraKg(weight_kg);
    receiving += 0.5 * extra;
    storage += 0.5 * extra;
  }

  return {
    receiving: receiving * qStored,
    storage: storage * months * qStored,
    total: (receiving * qStored) + (storage * months * qStored),
  };
}

function priceFulfillment(
  tier: SizeTier,
  qFulfilled: number,
  weight_kg: number,
  packagingOverride?: number
) {
  const rates = FULFILLMENT[tier];
  let pickPack = rates.pick_pack;

  // Cat 5 escalator
  if (tier === 'OS_CAT5') {
    const extra = cat5ExtraKg(weight_kg);
    pickPack += 0.5 * extra;
  }

  // Packaging
  let packaging = 0;
  if (rates.packaging === 'actuals') {
    packaging = packagingOverride || 0;
  } else {
    packaging = rates.packaging;
  }

  return {
    pick_pack: pickPack * qFulfilled,
    packaging: packaging * qFulfilled,
    total: (pickPack * qFulfilled) + (packaging * qFulfilled),
  };
}

function priceShipping(
  tier: SizeTier,
  speed: DeliverySpeed,
  qPackages: number,
  payment: PaymentMethod,
  fmPickup: FMPickupZone,
  weight_kg: number
): { base: number; cod: number; fm: number; total: number; speed_adjusted: DeliverySpeed } {
  const rates = SHIPPING[tier];
  
  // Validate same-day availability
  let actualSpeed = speed;
  if (speed === 'Same Day' && rates.same_day === null) {
    actualSpeed = 'Next Day'; // Fall back
  }

  let rate = actualSpeed === 'Next Day' ? rates.next_day : (rates.same_day || rates.next_day);

  // Cat 5 escalator for next-day
  if (tier === 'OS_CAT5' && actualSpeed === 'Next Day') {
    const extra = cat5ExtraKg(weight_kg);
    rate += 1.0 * extra;
  }

  const base = rate * qPackages;
  const cod = payment === 'COD' ? COD_FEE * qPackages : 0;
  
  let fm = 0;
  if (fmPickup === 'Within Dubai') {
    fm = FM_PICKUP_DUBAI * qPackages;
  } else if (fmPickup === 'Outside Dubai') {
    fm = FM_PICKUP_OUTSIDE * qPackages;
  }

  return {
    base,
    cod,
    fm,
    total: base + cod + fm,
    speed_adjusted: actualSpeed,
  };
}

function priceReturns(tier: SizeTier, qReturns: number, weight_kg: number) {
  const rates = RETURNS[tier];
  let collection = rates.collection;
  let processing = rates.processing;

  // Cat 5 escalator
  if (tier === 'OS_CAT5') {
    const extra = cat5ExtraKg(weight_kg);
    collection += 1.0 * extra;
    processing += 0.5 * extra;
  }

  return {
    collection: collection * qReturns,
    processing: processing * qReturns,
    total: (collection * qReturns) + (processing * qReturns),
  };
}

// ============================================================================
// MAIN CALCULATOR
// ============================================================================

export function calculateCosts(input: CalculatorInput): CostBreakdown {
  const tier = determineTier(input.item);
  const { length_cm, width_cm, height_cm, weight_kg } = input.item;
  const cube = length_cm * width_cm * height_cm;
  const maxDim = Math.max(length_cm, width_cm, height_cm);

  // Warehousing
  const warehousing = priceWarehousing(
    tier,
    input.environment,
    input.months_in_storage,
    input.quantities.stored,
    weight_kg
  );

  // Fulfillment
  const fulfillment = priceFulfillment(
    tier,
    input.quantities.fulfilled,
    weight_kg,
    input.overrides?.packaging_per_item
  );

  // Shipping
  const shipping = priceShipping(
    tier,
    input.shipping.speed,
    input.quantities.packages,
    input.shipping.payment,
    input.shipping.fm_pickup,
    weight_kg
  );

  // Returns
  const returns = priceReturns(tier, input.quantities.returns, weight_kg);

  // One-time fees
  const setup = SETUP_FEE * input.one_time.setup_marketplaces;
  const technology = input.one_time.technology_fee ? TECHNOLOGY_FEE : 0;
  const vas_misc = input.overrides?.vas_misc || 0;
  const one_time_total = setup + technology + vas_misc;

  // Totals
  const operational = warehousing.total + fulfillment.total + shipping.total + returns.total;
  const grand = operational + one_time_total;
  const per_item_fulfilled = input.quantities.fulfilled > 0 
    ? operational / input.quantities.fulfilled 
    : 0;
  const per_package = input.quantities.packages > 0 
    ? shipping.total / input.quantities.packages 
    : 0;

  return {
    warehousing,
    fulfillment,
    shipping,
    returns,
    one_time: {
      setup,
      technology,
      vas_misc,
      total: one_time_total,
    },
    totals: {
      operational,
      one_time: one_time_total,
      grand,
      per_item_fulfilled,
      per_package,
    },
    tier,
    tier_info: {
      cube_cm3: cube,
      max_dimension_cm: maxDim,
      is_oversized: tier.startsWith('OS_'),
      cat5_extra_kg: tier === 'OS_CAT5' ? cat5ExtraKg(weight_kg) : 0,
    },
  };
}

// ============================================================================
// VALIDATION
// ============================================================================

export function validateInput(input: Partial<CalculatorInput>): string[] {
  const errors: string[] = [];

  if (!input.item) {
    errors.push('Item dimensions are required');
    return errors;
  }

  if (!input.item.length_cm || input.item.length_cm <= 0) {
    errors.push('Item length must be greater than 0');
  }
  if (!input.item.width_cm || input.item.width_cm <= 0) {
    errors.push('Item width must be greater than 0');
  }
  if (!input.item.height_cm || input.item.height_cm <= 0) {
    errors.push('Item height must be greater than 0');
  }
  if (!input.item.weight_kg || input.item.weight_kg <= 0) {
    errors.push('Item weight must be greater than 0');
  }
  if (input.item.weight_kg > 120) {
    errors.push('Item weight cannot exceed 120 kg');
  }

  if (input.quantities) {
    if (input.quantities.stored < 0) errors.push('Units stored cannot be negative');
    if (input.quantities.fulfilled < 0) errors.push('Units fulfilled cannot be negative');
    if (input.quantities.packages < 0) errors.push('Packages cannot be negative');
    if (input.quantities.returns < 0) errors.push('Returns cannot be negative');
  }

  if (input.months_in_storage && input.months_in_storage < 0) {
    errors.push('Months in storage cannot be negative');
  }

  return errors;
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

export function formatCurrency(amount: number): string {
  return `QAR ${amount.toFixed(2)}`;
}

export function isSameDayAvailable(tier: SizeTier): boolean {
  return SHIPPING[tier].same_day !== null;
}

export function getTierName(tier: SizeTier): string {
  const names: Record<SizeTier, string> = {
    'Small': 'Small',
    'Medium': 'Medium',
    'Large': 'Large',
    'Extra Large': 'Extra Large',
    'OS_CAT1': 'Oversized Category 1 (≤15 kg)',
    'OS_CAT2': 'Oversized Category 2 (≤20 kg)',
    'OS_CAT3': 'Oversized Category 3 (≤25 kg)',
    'OS_CAT4': 'Oversized Category 4 (≤30 kg)',
    'OS_CAT5': 'Oversized Category 5 (≤120 kg)',
  };
  return names[tier];
}

