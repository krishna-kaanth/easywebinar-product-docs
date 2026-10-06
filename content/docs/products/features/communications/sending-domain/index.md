---
title: "Custom sending domain"
description: "Custom sending domain: detailed EasyWebinar documentation covering purpose, benefits, tradeoffs, availability and review evidence."
url: /products/features/communications/sending-domain/
status: internal-review
---

# Custom sending domain

A custom sending domain associates email delivery with the host's own domain where supported.

This page explains the requirement in the context of EasyWebinar and preserves the supplied inventory status. Read the evidence section before treating an explanation of buyer value as a promise of current product support.

## Product and workflow context

Custom sending domain sits in the communications layer of the webinar workflow. Evaluate it together with the event format, the account’s eligible plan and any external provider involved. Its detailed parameter explanation below covers both the benefit and the limits of relying on it.

The supplied source is an inventory rather than a current implementation manual. Exact configuration steps, UI screenshots and supported limits must be attached during review; this draft does not invent button labels or silently substitute a different feature.

## U103 · Custom sending domain

Status: Unconfirmed

A custom sending domain associates email delivery with the host's own domain where supported.

### What is this feature or requirement for?

A custom sending domain associates email delivery with the host's own domain where supported.

### How does it help?

Recipients can see a familiar sender identity and the team can manage relevant domain authentication.

### What happens if you do not have it?

Messages may use the provider's sender identity or depend on an external email service for domain-specific sending.

### Why should it matter to the buyer?

It matters for branded communications and deliverability setup; a custom page domain does not prove a custom email sending domain.

### Workflow evaluation

Create test attendees for the relevant states: registered, attended, no-show or offer interaction. Inspect which messages are actually generated or sent, the timing, sender identity, content and destination links.

Copy generation, recipient segmentation and delivery are separate parts of a communication workflow. Check available triggers, required providers, sending usage and consent rather than assuming a message type guarantees delivery.

### Evidence and review

The source marks this requirement unconfirmed. The explanation describes its meaning and buyer value, not an available EasyWebinar feature. Obtain product evidence before changing the status or publishing an affirmative capability claim.

Deliverability buyers ask

Confirm the current status of Custom sending domain; identify the supported format and plan, any limits or external dependencies, and the current screenshot, help article, contract or test result that substantiates it. Record corrections against U103.
