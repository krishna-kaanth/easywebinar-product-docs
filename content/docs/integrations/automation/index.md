---
title: "Automation"
description: "Automation: detailed EasyWebinar documentation covering purpose, benefits, tradeoffs, availability and review evidence."
url: /integrations/automation/
status: internal-review
---

# Automation

Field mapping associates supported webinar or custom fields with their destination fields in an integration.

This page explains the requirement in the context of EasyWebinar and preserves the supplied inventory status. Read the evidence section before treating an explanation of buyer value as a promise of current product support.

## EW46 · Integration webinar-field mapping

Status: Supported in source

Field mapping associates supported webinar or custom fields with their destination fields in an integration.

### What is this feature or requirement for?

Field mapping associates supported webinar or custom fields with their destination fields in an integration.

### How does it help?

The receiving system can retain useful access and event context instead of only a name and email address.

### What happens if you do not have it?

Operators transfer information manually or follow up without the missing context.

### Why should it matter to the buyer?

Confirm field names, types, timestamps and destination-object support. A connection does not imply all fields automatically map or all later updates synchronise.

### Workflow evaluation

Prepare a test attendee and the intended receiving application. Run the supported event, inspect the actual trigger and payload, compare transferred fields and check how updates, duplicate records and failures are handled.

A tool name is not an integration specification. Native, middleware, webhook, API, external link and manual workflows have different capabilities, costs and failure modes.

### Evidence and review

The supplied inventory marks this item as supported. This is source-based draft status, not a fresh product test. Product review must confirm current scope, formats and any plan restrictions before the page becomes a customer promise.

Help index article 6986113; EasyCRM article 12943379.

Confirm the current status of Integration webinar-field mapping; identify the supported format and plan, any limits or external dependencies, and the current screenshot, help article, contract or test result that substantiates it. Record corrections against EW46.

## EW47 · Enable an integration per webinar

Status: Supported in source

A per-webinar integration setting attaches an available account connection to the specific event.

### What is this feature or requirement for?

A per-webinar integration setting attaches an available account connection to the specific event.

### How does it help?

Operators can decide which event should send data to the connected system.

### What happens if you do not have it?

A globally connected account may not receive that webinar's leads until the event configuration is completed.

### Why should it matter to the buyer?

Account authorisation and event activation are separate checks. Test both before interpreting missing contacts as a platform-wide integration failure.

### Workflow evaluation

Prepare a test attendee and the intended receiving application. Run the supported event, inspect the actual trigger and payload, compare transferred fields and check how updates, duplicate records and failures are handled.

A tool name is not an integration specification. Native, middleware, webhook, API, external link and manual workflows have different capabilities, costs and failure modes.

### Evidence and review

The supplied inventory marks this item as supported. This is source-based draft status, not a fresh product test. Product review must confirm current scope, formats and any plan restrictions before the page becomes a customer promise.

Help index article 6986114; EasyCRM article 12943379.

Confirm the current status of Enable an integration per webinar; identify the supported format and plan, any limits or external dependencies, and the current screenshot, help article, contract or test result that substantiates it. Record corrections against EW47.

## EW48 · Event tags and conditional tagging

Status: Supported in source

Supported tagging rules associate a documented webinar state with a destination contact tag.

### What is this feature or requirement for?

Supported tagging rules associate a documented webinar state with a destination contact tag.

### How does it help?

The team can create follow-up groups around supported states instead of manually classifying every registrant.

### What happens if you do not have it?

Operators segment records manually or use the receiving system's own available signals.

### Why should it matter to the buyer?

Confirm exact state triggers, application timing and tag identifiers. A tag is evidence of a configured rule, not proof of a transaction or a complete two-way sync.

### Workflow evaluation

Prepare a test attendee and the intended receiving application. Run the supported event, inspect the actual trigger and payload, compare transferred fields and check how updates, duplicate records and failures are handled.

A tool name is not an integration specification. Native, middleware, webhook, API, external link and manual workflows have different capabilities, costs and failure modes.

### Evidence and review

The supplied inventory marks this item as supported. This is source-based draft status, not a fresh product test. Product review must confirm current scope, formats and any plan restrictions before the page becomes a customer promise.

Help index article 6986112; EasyCRM article 12943379.

Confirm the current status of Event tags and conditional tagging; identify the supported format and plan, any limits or external dependencies, and the current screenshot, help article, contract or test result that substantiates it. Record corrections against EW48.
