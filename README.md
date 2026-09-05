# Auto Vault — Module 4: Payments & Invoicing

Module 4 extends the Auto Vault dealership prototype with a payment and invoicing workflow.

## Included
- Payment checkout at `/pay/[orderNo]`
- Mobile Money, bank transfer and card method selection (prototype only)
- Payment confirmation and reference generation
- Order payment status updates in localStorage
- Payment history storage
- Invoice page at `/invoice/[orderNo]`
- Print / Save as PDF via browser print dialog
- Link from the vehicle order confirmation to payment
- Order summary and outstanding balance calculation

## Prototype notice
No real money is moved. Payment gateway integration, server-side verification, webhook handling, authentication, database persistence and PDF generation must be connected before production use.

## Run
```bash
npm install
npm run dev
```


## Module 7 — CRM
Added an integrated CRM section to the admin dashboard with:
- Lead pipeline and stages
- Lead/customer search
- Sales agent ownership
- Lead sources
- Follow-up dates
- Pipeline value
- Lead detail modal and notes
- Stage updates
- Follow-up queue
- CRM dashboard KPIs

The CRM currently uses prototype/local data and is structured for backend/database integration in the next architecture phase.

## Module 8 — Financing & Trade-In
Added a public financing hub at `/financing` plus a matching admin workspace:
- Finance calculator (`/financing`, "Calculator" tab) — monthly payment, total interest and total repayable using an amortization formula, by vehicle or custom price, adjustable term (12–60 months) and rate
- Financing applications (`/financing`, "Apply for financing" tab) — vehicle/loan details, personal details, employment & income; submits an application number and stores it locally
- Approval workflow (Admin → Financing → Financing applications) — move each application through Submitted → Document Review → Credit Check → Approved/Declined → Disbursed
- Trade-in requests (`/financing`, "Trade-in valuation" tab) — vehicle details plus contact info to request a firm offer, stored locally with an instant estimate attached
- Vehicle valuation — instant prototype estimate from brand reference value, age, mileage and condition, shown as a low/mid/high range before the customer requests an offer
- Admin → Financing → Trade-in requests shows submitted trade-ins and lets staff move them through Pending Valuation → Offer Sent → Accepted/Declined

The admin Financing screen reads real submissions from local storage (in addition to demo records) so applications and trade-ins submitted on the public site are visible for processing. As with earlier modules, real lender integration, credit bureau checks, document upload and vehicle inspection scheduling are for the backend phase.

## Module 9 — Service & Warranty
Added a public service hub at `/service` plus a matching admin workspace and account portal history:
- Service bookings (`/service`, "Book a service" tab) — vehicle, service type, preferred date/time and contact details; submits a booking reference and stores it locally
- Job cards (Admin → Service & Warranty → Job cards) — each booking becomes a job card moved through Booked → Checked In → In Progress → Awaiting Parts → Quality Check → Completed, with labor hours/rate and parts line items
- Service history (Account → Service & Warranty) — customers see their own submitted bookings and warranty claims and their current status
- Parts (Admin → Service & Warranty → Parts) — a parts inventory grid with unit price and editable stock on hand, flagging items below 5 units as low stock
- Warranty claims (`/service`, "Warranty claim" tab) — vehicle, order number and issue description; submits a claim reference and stores it locally
- Admin → Service & Warranty → Warranty claims moves each claim through Submitted → Under Review → Approved/Rejected → Resolved
- Service invoices (Admin → Service & Warranty → Service invoices) — generated from completed job cards as labor + parts, with a "Mark paid" action and print support

As with Financing, the admin Service & Warranty screen reads real bookings and claims from local storage (in addition to demo records), so anything a customer submits on `/service` is visible for staff to action. Real technician scheduling, parts purchasing/reordering, manufacturer warranty verification and payment capture are for the backend phase.

## Module 10 — Reports & Business Intelligence
Replaced the placeholder Reports screen with a full BI dashboard (Admin → Reports), organized into six tabs:
- **Management dashboard** — top-level KPIs across every module (revenue collected, outstanding, order book, inventory value, approved loan value, service revenue, pipeline value, open warranty claims) plus quick-nav cards into each report
- **Sales & revenue** — revenue and order-book value by brand, order funnel by status
- **Inventory** — stock counts (in stock / in transit / reserved) and listed value by brand
- **Agent performance** — leads, wins, losses, conversion rate and pipeline/sales value per sales agent, pulled from CRM lead data
- **Finance** — applications by approval stage, approved/disbursed loan value, accepted trade-in value
- **Service** — service revenue and outstanding invoices from completed job cards, job cards by workshop stage, open warranty claims, low-stock parts

The Reports screen reads real submissions from local storage the same way Financing and Service & Warranty do (finance applications, trade-in requests, service bookings, warranty claims), so it reflects real activity from the public site, not just demo data. CRM lead and parts-stock data are still demo-only, since those aren't currently written back to local storage by their own screens — that's a backend-phase fix, same as everywhere else in the prototype.

## Module 11 — Backend & Database Foundation
Every module above ran entirely on `localStorage`. This module replaces that with a real PostgreSQL database via Prisma, real authentication, and a full REST API — and rewires every page (public site, customer portal, and admin) to use it. `localStorage` is no longer used anywhere in the app.

**Data model** (`prisma/schema.prisma`): `User` (with role: `CUSTOMER`, `SALES_MANAGER`, `SALES_AGENT`, `ACCOUNTANT`, `INVENTORY_MANAGER`, `WORKSHOP_MANAGER`, `ADMIN`), `Session`, `Vehicle`, `Order`, `Payment`, `Invoice`, `Shipment`, `Lead`, `FinanceApplication`, `TradeIn`, `ServiceBooking` (doubles as a job card, with `JobPart` line items), `WarrantyClaim`, `Part`, `SavedVehicle`.

**Auth**: bcrypt-hashed passwords, signed session cookies (`lib/auth.ts`). Registering or signing in on `/account` creates a real session. Placing an order, financing application, trade-in, service booking or warranty claim without being signed in automatically finds-or-creates a customer account from the details entered on the form and logs the browser in — a frictionless "checkout creates your account" flow, matching the original guest-checkout UX.

**API** (`app/api/**`): full CRUD/status-transition routes for every module — `vehicles`, `orders`, `payments`, `invoices`, `track`, `leads`, `financing/applications`, `financing/tradeins`, `service/bookings`, `service/claims`, `service/parts`, `account/saved-vehicles`, `account/documents`, `staff`, plus `auth/register|login|logout|me`. Staff-only routes check the signed-in user's role server-side.

**Frontend rewire**: the homepage, brands page, and vehicle detail page now read live from the database (so an admin price/status change shows up on the public site immediately); `/order`, `/pay`, `/invoice`, `/track`, `/account`, `/financing`, and `/service` all call the API instead of `localStorage`; the admin dashboard (orders, CRM, financing, service & warranty, staff, reports) fetches from the API and every stage-move/status-update now persists to the database via `PATCH` requests.

**Seed data** (`prisma/seed.ts`): populates the same 6 vehicles, demo orders, leads, finance applications, trade-ins, service bookings/job cards, warranty claims and parts used throughout the prototype, plus demo staff and customer accounts.

### Setup
1. `npm install`
2. Copy `.env.example` to `.env` and set `DATABASE_URL` to a PostgreSQL connection string, and `SESSION_SECRET` to a random string
3. `npx prisma migrate dev --name init`
4. `npx prisma db seed`
5. `npm run dev`

Demo login: any seeded customer email (see `prisma/seed.ts`) or `admin@autovault.gh`, password `AutoVault123!` for all seeded accounts.

### What's still a prototype
- Vehicle inventory add/edit in Admin → Inventory is still a UI placeholder (toast only) — the vehicle catalogue itself is fully DB-backed and editable via the API/Prisma Studio, just not yet through an admin edit form
- No real payment gateway, SMS/email delivery, or document generation/upload — payments are recorded as immediately verified, and "documents" are derived from paid orders rather than generated files
- No credit bureau checks, manufacturer warranty verification, or parts purchasing/reordering workflow
- This sandbox has no network access, so none of this has been run through `npm install` / `prisma generate` / `prisma migrate` / a live Postgres instance — please run the setup steps above yourself and report back anything that doesn't compile
