---
title: "SMS reminders"
description: "SMS reminders: detailed EasyWebinar documentation covering purpose, benefits, tradeoffs, availability and review evidence."
url: /products/features/communications/sms-reminders/
status: internal-review
---

# SMS reminders

SMS reminders use supported messaging delivery, identified as Twilio in the inventory, to remind registered attendees.

This page explains the requirement in the context of EasyWebinar and preserves the supplied inventory status. Read the evidence section before treating an explanation of buyer value as a promise of current product support.

## Product and workflow context

SMS reminders sits in the communications layer of the webinar workflow. Evaluate it together with the event format, the account’s eligible plan and any external provider involved. Its detailed parameter explanation below covers both the benefit and the limits of relying on it.

The supplied source is an inventory rather than a current implementation manual. Exact configuration steps, UI screenshots and supported limits must be attached during review; this draft does not invent button labels or silently substitute a different feature.

## U97 · SMS reminders

Status: Supported in source

SMS reminders use supported messaging delivery, identified as Twilio in the inventory, to remind registered attendees.

### What is this feature or requirement for?

SMS reminders use supported messaging delivery, identified as Twilio in the inventory, to remind registered attendees.

### How does it help?

A time-sensitive reminder can reach a person outside their email inbox.

### What happens if you do not have it?

The campaign relies on email or another separately configured messaging workflow when the audience prefers phone notifications.

### Why should it matter to the buyer?

It matters for near-start reminders; recipient permission, country availability, delivery charges and provider requirements must be confirmed.

### Workflow evaluation

Create test attendees for the relevant states: registered, attended, no-show or offer interaction. Inspect which messages are actually generated or sent, the timing, sender identity, content and destination links.

Copy generation, recipient segmentation and delivery are separate parts of a communication workflow. Check available triggers, required providers, sending usage and consent rather than assuming a message type guarantees delivery.

### Evidence and review

The supplied inventory marks this item as supported. This is source-based draft status, not a fresh product test. Product review must confirm current scope, formats and any plan restrictions before the page becomes a customer promise.

Twilio

Confirm the current status of SMS reminders; identify the supported format and plan, any limits or external dependencies, and the current screenshot, help article, contract or test result that substantiates it. Record corrections against U97.
