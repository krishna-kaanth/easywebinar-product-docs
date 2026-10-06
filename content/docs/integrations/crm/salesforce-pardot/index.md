---
title: "Salesforce Pardot (MCAE)"
description: "Salesforce Pardot (MCAE): detailed EasyWebinar documentation covering purpose, benefits, tradeoffs, availability and review evidence."
url: /integrations/crm/salesforce-pardot/
status: internal-review
---

# Salesforce Pardot (MCAE)

Salesforce Pardot (MCAE) is documented here as a native connection identified by the source. The purpose is to connect the relevant webinar workflow with a system the business already uses; it is not a promise of complete two-way sync or every feature offered by that provider.

Evaluate this connection using a real event and a test record or transaction. Availability, authentication, eligible plan, transferred events and receiving data must be confirmed for Salesforce Pardot (MCAE) specifically rather than copied from another integration.

## What this connection is for

For Salesforce Pardot (MCAE), start by naming the exact job: transferring a registration, recording an attendance event, sending a follow-up, receiving a purchase event or linking to a next action. Choose only the job supported by the actual connection. This makes the setup testable and prevents a logo from standing in for an integration specification.

The connection can reduce repeated manual entry and preserve continuity with the existing stack when the required action is supported. Without it, the team needs a verified middleware, API, export or manual route; those alternatives have their own operating cost and failure modes.

## Scope the team must verify

Confirm the current Salesforce Pardot (MCAE) connector or workflow, authentication method, account permissions, eligible plan, trigger and action list, receiving objects, transferred fields, event timing and supported direction. For a payment tool, also confirm the checkout path and what purchase, cancellation or refund information actually returns.

Test a new record, an existing record and a deliberate failure. Document deduplication, retries, unsupported fields, required external subscriptions and the way the operator can inspect an error. Do not imply certified-partner status or a field count without direct evidence.

## U139 · Salesforce Pardot (MCAE)

Status: Supported in source

Salesforce Pardot, also known as Marketing Cloud Account Engagement, connects supported webinar data with that marketing automation product.

### What is this feature or requirement for?

Salesforce Pardot, also known as Marketing Cloud Account Engagement, connects supported webinar data with that marketing automation product.

### How does it help?

The marketing team can retain its established prospect and campaign workflow where the connection supports it.

### What happens if you do not have it?

Webinar activity requires manual transfer or another verified automation route.

### Why should it matter to the buyer?

It matters for Pardot users; the documentation must use the specific product name rather than implying all Salesforce products are connected.

### Workflow evaluation

Prepare a test attendee and the intended receiving application. Run the supported event, inspect the actual trigger and payload, compare transferred fields and check how updates, duplicate records and failures are handled.

A tool name is not an integration specification. Native, middleware, webhook, API, external link and manual workflows have different capabilities, costs and failure modes.

### Evidence and review

The supplied inventory marks this item as supported. This is source-based draft status, not a fresh product test. Product review must confirm current scope, formats and any plan restrictions before the page becomes a customer promise.

Native — but the Salesforce question scores 0/5

Confirm the current status of Salesforce Pardot (MCAE); identify the supported format and plan, any limits or external dependencies, and the current screenshot, help article, contract or test result that substantiates it. Record corrections against U139.
