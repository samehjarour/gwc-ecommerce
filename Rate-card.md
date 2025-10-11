Rate-card


# Product spec: “GWC UAE E-Comm Cost Calculator”

## 1) Purpose

Compute per-item and consolidated e-commerce fulfillment costs in the UAE across:

* Warehousing (AC vs Non-AC): storage + receiving
* Fulfillment: pick/pack + packaging material
* Last-mile shipping: next-day or same-day (package-level)
* Returns: pickup + processing
* Optional extras: COD handling, first-mile pickup (FM), set-up & technology one-time fees

Rates, tiers, and examples are taken from the 7-page “GWC – UAE E-COMM RATE CARD” PDF (tier tables on pp.2–6; consolidated example on p.7). 

---

## 2) User inputs (UI fields)

### Inventory / items

* **Storage environment**: `AC | Non-AC`
* **Item dimensions (cm)**: `L, W, H`
* **Item weight (kg)**: decimal (per item)
* **Units stored**: integer
* **Months in storage**: decimal (e.g., 1.5)
* **Units to fulfill (picked & packed)**: integer

### Packaging & shipping

* **Packages to ship**: integer (note: shipping is per package, not per item)
* **Delivery speed**: `Next Day | Same Day` (Same Day not available for some tiers—see logic)
* **Payment method**: `Prepaid | COD` (COD adds fee; see logic)
* **FM pickup (inventory NOT stored at GWC)**: `None | Within Dubai city limits | Outside Dubai city limits`

### Returns

* **Customer returns (items)**: integer

### One-time fees (optional toggles)

* **Marketplace setup fee** (per marketplace)
* **Technology integration fee**

### Calculator options (quality of life)

* **Currency**: default AED (no FX math needed now)
* **Rounding**: show two decimals; compute with full precision

---

## 3) Derived values and tiering rules

### 3.1 Basic derived values

* **Cube (cm³)** = `L * W * H`
* **Max dimension (cm)** = `max(L, W, H)`

### 3.2 Size tier determination (per item)

Determine the *size tier* used across warehousing, fulfillment, shipping, and returns:

1. **Small / Medium / Large / Extra Large**

   * Based on upper bounds for dimensions, cube, and weight (see tables).
2. **Oversized (Cat 1–5)**

   * Triggered if `max dimension > 70 cm` and cube within specified oversized cube ranges.
   * Sub-categories depend on weight ranges (≤15 kg, >15–≤20 kg, >20–≤25 kg, >25–≤30 kg, >30–≤120 kg).
3. **Edge case**: If a single item violates multiple constraints, pick the *highest* tier that satisfies all limits.

(Use AC table for warehousing when `Storage environment = AC`; Non-AC table otherwise. Fulfillment/Shipping/Returns use the common tier grid on pp.4–6.) 

---

## 4) Pricing data (from the PDF)

Implement the following tables exactly as constants:

* **Warehousing – AC** (storage/month & receiving per item) – *p.2*.
  Oversized Cat 5: storage & receiving escalate by **+0.5 AED per kg** vs Cat 4 for each kg over 30 kg up to 120 kg. 

* **Warehousing – Non-AC** – *p.3*.
  Same Cat 5 escalation rule (+0.5 AED per kg vs Cat 4). 

* **Fulfillment (pick/pack per item + packaging material per item)** – *p.4*.
  Oversized Cat 5: **pick/pack increases +0.5 AED per kg** vs Cat 4 for each kg over 30 kg up to 120 kg; packaging material is “as per actuals” for oversized, otherwise fixed per table. 

* **Shipping (package level)** – *p.5*.

  * Next-day & same-day fees by tier (same-day N/A for Extra Large and all Oversized).
  * Cat 5 next-day: **+1 AED per kg** vs Cat 4 for each kg over 30 kg up to 120 kg.
  * **COD add-on**: +5 AED per package.
  * **FM pickup** (only when inventory **not** stored/picked/packed at GWC): +1 AED/package within Dubai city limits; +1.5 AED/package outside. Some remote areas case-by-case (note for UI hint). 

* **Returns (per item)** – *p.6*.
  Cat 5: *Collection* **+1 AED per kg** vs Cat 4 for each kg over 30 kg; *Processing* **+0.5 AED per kg** vs Cat 4 for each kg over 30 kg. Domestic only. 

* **Additional one-time fees** – *p.7*.

  * Setup fee (per marketplace): 1000 AED
  * Technology fee (one-time): 1000 AED
  * Other VAS: “on request/as per actuals” (leave as free-text overrides). 

---

## 5) Calculation logic

> **Notation**
> `Q_items_stored` = units stored
> `Q_items_fulfilled` = units picked/packed
> `Q_packages` = packages shipped
> `Q_returns` = items returned
> `months` = months in storage (can be fractional)

### 5.1 Warehousing

* **Receiving** = `ReceivingFee_perItem(tier, AC/NonAC) * Q_items_stored`
* **Storage** = `StorageFee_perItemPerMonth(tier, AC/NonAC) * months * Q_items_stored`
* **Total warehousing** = Receiving + Storage

> **Cat 5 escalator (warehousing)**
> For items in Cat 5 with weight `w > 30 kg`, compute **extra kg = ceil(w) − 30** (cap at 90).
> Add `0.5 AED * extra kg` to both **receiving** and **monthly storage** base rates before multiplying.

### 5.2 Fulfillment

* **Pick/Pack** = `PickPackFee_perItem(tier) * Q_items_fulfilled`
* **Packaging material**

  * For standard tiers: `FixedPackagingFee_perItem(tier) * Q_items_fulfilled`
  * For oversized “as per actuals”: expose an **override input**; default `0` if not provided.
* **Total fulfillment** = Pick/Pack + Packaging

> **Cat 5 escalator (fulfillment)**
> For Cat 5, increase **pick/pack** by `0.5 AED * extra kg` (as defined above) before multiplying.

### 5.3 Shipping (per package)

* Validate speed availability (Same-Day is **unavailable** for Extra Large and Oversized; if chosen, show error and fall back to Next-Day).
* **Base shipping** = `ShippingFee_perPackage(tier, speed) * Q_packages`
* **COD add-on (optional)** = `5 AED * Q_packages` (if Payment = COD)
* **FM pickup add-on (optional)**:

  * Within Dubai city limits: `1 AED * Q_packages`
  * Outside Dubai city limits: `1.5 AED * Q_packages`
* **Total shipping** = Base + COD + FM

> **Cat 5 escalator (shipping)**
> For Next-Day Cat 5, increase **per-package fee** by `1 AED * extra kg` before multiplying.

### 5.4 Returns

* **Collection** = `ReturnCollectionFee_perItem(tier) * Q_returns`
* **Processing** = `ReturnProcessingFee_perItem(tier) * Q_returns`
* **Total returns** = Collection + Processing

> **Cat 5 escalator (returns)**
> For Cat 5, increase **collection** by `1 AED * extra kg`, and **processing** by `0.5 AED * extra kg`, then multiply.

### 5.5 One-time fees

* **Setup fee** = `1000 AED * (# of marketplaces toggled)`
* **Technology fee** = `1000 AED` if toggled

### 5.6 Grand totals & unit economics

* **Operational total (repeatable)** = Warehousing + Fulfillment + Shipping + Returns
* **One-time total** = Setup + Technology + any manual VAS/Misc overrides
* **Grand total** = Operational total + One-time total
* **Per-item fulfilled** = `(Warehousing + Fulfillment + Shipping + Returns) / max(Q_items_fulfilled, 1)`
* **Per-package** = `Shipping / max(Q_packages, 1)`

---

## 6) Validation & UX rules

* Require `L, W, H, weight` for tiering. If missing, show “Enter item dimensions and weight.”
* If **Same-Day** chosen for an ineligible tier, prompt and switch to **Next-Day**.
* If **FM pickup** is selected **and** inventory is stored at GWC (i.e., warehousing used), show an info tooltip and allow user to toggle it off (FM pickup applies only when inventory not stored & picked/packed at GWC).
* For **oversized Cat 5**, display the computed extra-kg adder in a line-item tooltip.
* Allow manual overrides for **packaging material (oversized)** and **VAS/Misc**.
* All outputs in AED (no tax applied unless future requirement).

---

## 7) Data model (example)

```json
{
  "env": "AC | Non-AC",
  "item": {"L_cm": 35, "W_cm": 25, "H_cm": 10, "weight_kg": 4},
  "qty": {"stored": 20, "fulfilled": 20, "packages": 20, "returns": 2},
  "months_in_storage": 1,
  "shipping": {"speed": "Next Day", "payment": "Prepaid | COD", "fm_pickup": "None | Dubai | OutsideDubai"},
  "one_time": {"setup_marketplaces": 0, "technology_fee": false},
  "overrides": {"packaging_per_item": null, "vas_misc": 0}
}
```

---

## 8) Core algorithm (pseudocode)

```pseudo
function determineTier(L, W, H, weight):
  cube = L*W*H
  maxDim = max(L, W, H)
  if maxDim > 70 and cube <= 3_000_000:
      // Oversized path with weight bands
      if weight <= 15: return "OS_CAT1"
      if weight <= 20: return "OS_CAT2"
      if weight <= 25: return "OS_CAT3"
      if weight <= 30: return "OS_CAT4"
      return "OS_CAT5" // up to 120 kg
  else:
      // Small/Medium/Large/XL using bounds from tables (dim, cube, weight)
      // Choose the smallest tier that satisfies ALL three limits; otherwise bump up
      ...

function cat5_extra_kg(weight):
  return max(0, ceil(weight) - 30) // cap at 90

function priceWarehousing(tier, env, months, qStored, weight):
  rates = getWarehousingRates(env, tier)
  recv = rates.receiving
  storage = rates.storageMonthly
  if tier == OS_CAT5:
      extra = cat5_extra_kg(weight)
      recv += 0.5 * extra
      storage += 0.5 * extra
  return {
    receiving: recv * qStored,
    storage: storage * months * qStored
  }

function priceFulfillment(tier, qFulfilled, weight, packOverride):
  rates = getFulfillmentRates(tier)
  pick = rates.pickPack
  if tier == OS_CAT5:
     pick += 0.5 * cat5_extra_kg(weight)
  packaging = (rates.packagingIsActuals)
      ? (packOverride or 0)
      : rates.packaging
  return {
    pick_pack: pick * qFulfilled,
    packaging: packaging * qFulfilled
  }

function priceShipping(tier, speed, qPkgs, payment, fm, weight):
  rate = getShippingRate(tier, speed) // validate availability
  if tier == OS_CAT5 and speed == "Next Day":
      rate += 1.0 * cat5_extra_kg(weight)
  base = rate * qPkgs
  cod = (payment == "COD") ? 5 * qPkgs : 0
  fmAdd = (fm == "Dubai") ? 1 * qPkgs : (fm == "OutsideDubai" ? 1.5 * qPkgs : 0)
  return { base: base, cod: cod, fm: fmAdd }

function priceReturns(tier, qReturns, weight):
  rates = getReturnRates(tier)
  collect = rates.collection
  process = rates.processing
  if tier == OS_CAT5:
      extra = cat5_extra_kg(weight)
      collect += 1.0 * extra
      process += 0.5 * extra
  return { collection: collect * qReturns, processing: process * qReturns }

function computeTotals(input):
  tier = determineTier(...)
  w = priceWarehousing(...)
  f = priceFulfillment(...)
  s = priceShipping(...)
  r = priceReturns(...)
  oneTime = (1000 * input.one_time.setup_marketplaces) + (input.one_time.technology_fee ? 1000 : 0) + (input.overrides.vas_misc or 0)
  operational = sum(w) + sum(f) + sum(s) + sum(r)
  grand = operational + oneTime
  return detailed breakdown + per-item/per-package metrics
```

---

## 9) Test cases (must pass)

1. **PDF example (p.7)**

   * Env: **AC**
   * Item: **Medium**, `cube=3000 cm³`, `weight=4 kg`, `dims ≤ 35×25×10 cm`
   * Quantities: `stored=20`, `months=1`, `fulfilled=20`, `packages=20`, `returns=2`
   * Shipping speed: **Next Day**; Payment: **Prepaid**; FM: **None**
   * **Expected line items** (from p.7):

     * Receiving: 20 AED
     * Storage: 10 AED
     * Pick/Pack: 20 AED
     * Packaging: 15 AED
     * Shipping (Next Day): 240 AED
     * Returns: collection 10 AED; processing 2 AED
     * **Operational total**: 317 AED (per table). 

2. **Oversized Cat 5, 45 kg, Next-Day**

   * Extra kg = `ceil(45) − 30 = 15`
   * Shipping per-pkg = `Cat4 rate + (1 * 15)`; Fulfillment pick/pack per-item = `Cat4 + (0.5 * 15)`; Warehousing receiving/storage per-item = `Cat4 + (0.5 * 15)`; Returns collection `Cat4 + (1 * 15)`, processing `Cat4 + (0.5 * 15)`.

3. **Same-Day validation**

   * Tier = Extra Large → Same-Day chosen → show message and switch to Next-Day.

4. **FM pickup applied**

   * Inventory not stored at GWC → FM = Outside Dubai → add `+1.5 AED * Q_packages`.

5. **COD add-on**

   * Payment = COD → add `+5 AED * Q_packages`.

---

## 10) Deliverables

* **Front-end**: simple form (as per inputs), dynamic breakdown panel, and “copy CSV” + “download PDF” of line items.
* **Back-end**: pure function module implementing the tables & logic above; 100% unit-tested with the cases in §9.
* **Config**: all rate tables externalized as JSON so they can be updated without code changes.

---

## 11) Notes & citations

* All numeric rates, availability constraints, and examples come from the uploaded PDF:
  tier tables (pp.2–6), COD & FM pickup surcharges and same-day availability (p.5), one-time fees (p.7), consolidated example (p.7). 

If you want, I can also spin up a quick interactive prototype UI with these rules baked in.
