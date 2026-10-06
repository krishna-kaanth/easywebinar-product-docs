---
title: "Limitations and unsupported requirements"
description: "Limitations and unsupported requirements: detailed EasyWebinar documentation covering purpose, benefits, tradeoffs, availability and review evidence."
url: /products/webinar-platform/limitations/
status: internal-review
---

# Limitations and unsupported requirements

This page preserves known boundaries from the supplied inventory so the feature catalogue does not imply universal support. A requirement can be valuable to a buyer and still be unavailable in EasyWebinar.

Known gaps include visual timeline editing, multi-track conferences, breakouts, deep multi-touch attribution, specified unsupported native CRM connections, AI repurposing, AI chat moderation and agentic one-prompt creation. Specialised HIPAA, ISO 27001 and PCI-DSS platform claims are not supported. Unknowns such as captions, accessibility, library/player functionality and failover require confirmation.

## Unconfirmed requirements remain separate

An unknown is not a no, but it also cannot be sold as a yes. The draft retains unknown room accessibility, translation, captions, library/player support, green-room, failover, identity controls, integration depth and commercial/service terms for a focused product review.

## U19 · Visual timeline editor for automated interactions

Status: Unavailable in source

A visual timeline editor positions automated interactions directly against the recording's playback timeline.

### What is this feature or requirement for?

A visual timeline editor positions automated interactions directly against the recording's playback timeline.

### How does it help?

Editors can see when polls or offers appear and coordinate them with the exact point in the presentation.

### What happens if you do not have it?

A timestamp-based workflow requires entering and maintaining interaction times manually, especially after video edits.

### Why should it matter to the buyer?

It matters for frequent automated-session editing. The inventory identifies this visual editor as unavailable; timed interactions should not be described as a visual timeline UI.

### Workflow evaluation

Choose a real event timezone and two distinct test attendees. Compare the registration choices, confirmation details, session start, recording playback and permitted interaction. Repeat the test for the exact delivery format you intend to use.

The registration schedule, room behaviour and replay policy are related but not interchangeable. Check supported formats and plan eligibility before assuming a setting applies to live, simulive and on-demand delivery alike.

### Evidence and review

The source identifies this item as unavailable. It remains documented so buyers and reviewers understand the boundary. Any external workaround must be identified and tested separately; it must not be described as native support.

Known weakness: Perplexity — polls/offers "require manually entering timestamps rather than placing them visually" (eWebinar does)

Confirm the current status of Visual timeline editor for automated interactions; identify the supported format and plan, any limits or external dependencies, and the current screenshot, help article, contract or test result that substantiates it. Record corrections against U19.

## U22 · Multi-day / multi-track events

Status: Unavailable in source

Multi-day and multi-track events coordinate several sessions or parallel tracks within a larger event programme.

### What is this feature or requirement for?

Multi-day and multi-track events coordinate several sessions or parallel tracks within a larger event programme.

### How does it help?

A conference organiser can manage varied topics, speakers and audiences as one event experience.

### What happens if you do not have it?

A single-room webinar workflow requires separate sessions and external event orchestration to approximate a conference.

### Why should it matter to the buyer?

It matters for conference buyers, but the inventory places this outside EasyWebinar's supported event scope.

### Workflow evaluation

Choose a real event timezone and two distinct test attendees. Compare the registration choices, confirmation details, session start, recording playback and permitted interaction. Repeat the test for the exact delivery format you intend to use.

The registration schedule, room behaviour and replay policy are related but not interchangeable. Check supported formats and plan eligibility before assuming a setting applies to live, simulive and on-demand delivery alike.

### Evidence and review

The source identifies this item as unavailable. It remains documented so buyers and reviewers understand the boundary. Any external workaround must be identified and tested separately; it must not be described as native support.

Out of scope

Confirm the current status of Multi-day / multi-track events; identify the supported format and plan, any limits or external dependencies, and the current screenshot, help article, contract or test result that substantiates it. Record corrections against U22.

## U61 · Breakout rooms

Status: Unavailable in source

Breakout rooms divide attendees into smaller simultaneous discussion spaces.

### What is this feature or requirement for?

Breakout rooms divide attendees into smaller simultaneous discussion spaces.

### How does it help?

Facilitators can support small-group work within a larger session.

### What happens if you do not have it?

Small-group exercises require another conferencing product or separate sessions.

### Why should it matter to the buyer?

It matters for workshops built around group collaboration, but the inventory identifies breakout rooms as unavailable in EasyWebinar.

### Workflow evaluation

Rehearse with the intended cameras, microphones, slides and speaker arrangement. Ask test attendees to inspect the relevant behaviour from the audience side, and check the recording as well as the live presentation.

A successful small rehearsal does not establish large-audience performance. Exact concurrency, latency, session-duration and recovery claims need scoped product documentation or an agreed test.

### Evidence and review

The source identifies this item as unavailable. It remains documented so buyers and reviewers understand the boundary. Any external workaround must be identified and tested separately; it must not be described as native support.

Gemini lists it as a gap; low priority for selling webinars

Confirm the current status of Breakout rooms; identify the supported format and plan, any limits or external dependencies, and the current screenshot, help article, contract or test result that substantiates it. Record corrections against U61.

## U78 · Games / gamification

Status: Unavailable in source

Gamification adds game-like participation mechanisms to an event.

### What is this feature or requirement for?

Gamification adds game-like participation mechanisms to an event.

### How does it help?

It can encourage repeated audience involvement when the event's purpose calls for that style of participation.

### What happens if you do not have it?

The organiser relies on ordinary chat, polls and questions or an external activity tool.

### Why should it matter to the buyer?

It matters for some engagement-led events, but the inventory does not identify games or gamification as an EasyWebinar capability.

### Workflow evaluation

Run a short test presentation with a host and an attendee. Trigger the relevant interaction, inspect what both sides see and check any resulting data or follow-up. For recorded sessions, repeat at the relevant playback timestamp.

An interaction visible in the live room may have different controls or limits in automated playback and external streams. Verify the format rather than treating every engagement tool as universally available.

### Evidence and review

The source identifies this item as unavailable. It remains documented so buyers and reviewers understand the boundary. Any external workaround must be identified and tested separately; it must not be described as native support.

Not needed

Confirm the current status of Games / gamification; identify the supported format and plan, any limits or external dependencies, and the current screenshot, help article, contract or test result that substantiates it. Record corrections against U78.

## U107 · WhatsApp reminders

Status: Unavailable in source

WhatsApp reminders would deliver session notifications through WhatsApp rather than email or SMS.

### What is this feature or requirement for?

WhatsApp reminders would deliver session notifications through WhatsApp rather than email or SMS.

### How does it help?

They could match the communication habits of audiences who primarily use that channel.

### What happens if you do not have it?

The team uses supported email, SMS or a separate messaging arrangement for the reminder.

### Why should it matter to the buyer?

It matters for channel-specific requirements, but WhatsApp reminders are listed as unavailable and should not be implied by ManyChat or Twilio support.

### Workflow evaluation

Create test attendees for the relevant states: registered, attended, no-show or offer interaction. Inspect which messages are actually generated or sent, the timing, sender identity, content and destination links.

Copy generation, recipient segmentation and delivery are separate parts of a communication workflow. Check available triggers, required providers, sending usage and consent rather than assuming a message type guarantees delivery.

### Evidence and review

The source identifies this item as unavailable. It remains documented so buyers and reviewers understand the boundary. Any external workaround must be identified and tested separately; it must not be described as native support.



Confirm the current status of WhatsApp reminders; identify the supported format and plan, any limits or external dependencies, and the current screenshot, help article, contract or test result that substantiates it. Record corrections against U107.

## U133 · Multi-touch attribution

Status: Unavailable in source

Multi-touch attribution models several marketing interactions contributing to a conversion.

### What is this feature or requirement for?

Multi-touch attribution models several marketing interactions contributing to a conversion.

### How does it help?

A team can examine how webinars interact with other channels along a longer buying journey.

### What happens if you do not have it?

It must use a simpler attribution view or a separate analytics system for multi-channel modelling.

### Why should it matter to the buyer?

It matters for complex demand generation, but the inventory identifies deep multi-touch conversion analytics as unavailable.

### Workflow evaluation

Use known test contacts with deliberately different attendance and interaction histories. Compare the displayed metric and any export with those actions. Document the metric’s definition, timeframe and whether live and replay data are separate.

Measured webinar activity is not proof of buyer intent, product adoption or CRM closed-won revenue. Attribution claims need the actual transaction connection and a stated model.

### Evidence and review

The source identifies this item as unavailable. It remains documented so buyers and reviewers understand the boundary. Any external workaround must be identified and tested separately; it must not be described as native support.

AI Mode: *"lacks deep multi-touch conversion analytics"*

Confirm the current status of Multi-touch attribution; identify the supported format and plan, any limits or external dependencies, and the current screenshot, help article, contract or test result that substantiates it. Record corrections against U133.

## U138 · Salesforce core (Sales Cloud)

Status: Unavailable in source

Salesforce Sales Cloud integration would connect webinar activity directly with the core Salesforce CRM workflow.

### What is this feature or requirement for?

Salesforce Sales Cloud integration would connect webinar activity directly with the core Salesforce CRM workflow.

### How does it help?

A team could use its existing sales records without relying on a separate marketing-product connection.

### What happens if you do not have it?

The team needs another verified connection mechanism or manual reconciliation for core CRM objects.

### Why should it matter to the buyer?

It matters for sales-led enterprises, but the inventory does not support a native Sales Cloud claim; Pardot is a separate integration.

### Workflow evaluation

Prepare a test attendee and the intended receiving application. Run the supported event, inspect the actual trigger and payload, compare transferred fields and check how updates, duplicate records and failures are handled.

A tool name is not an integration specification. Native, middleware, webhook, API, external link and manual workflows have different capabilities, costs and failure modes.

### Evidence and review

The source identifies this item as unavailable. It remains documented so buyers and reviewers understand the boundary. Any external workaround must be identified and tested separately; it must not be described as native support.

Pardot only. `/live-webinars` says "Salesforce" — contradiction

Confirm the current status of Salesforce core (Sales Cloud); identify the supported format and plan, any limits or external dependencies, and the current screenshot, help article, contract or test result that substantiates it. Record corrections against U138.

## U140 · Marketo

Status: Unavailable in source

Marketo integration would connect webinar records with a Marketo-based marketing programme.

### What is this feature or requirement for?

Marketo integration would connect webinar records with a Marketo-based marketing programme.

### How does it help?

The team could retain its existing automation and lead workflow through a verified connection.

### What happens if you do not have it?

It needs another route to transfer data or a platform supporting the required Marketo behaviour.

### Why should it matter to the buyer?

It matters for Marketo-dependent buyers, but the supplied inventory identifies the direct integration as unavailable.

### Workflow evaluation

Prepare a test attendee and the intended receiving application. Run the supported event, inspect the actual trigger and payload, compare transferred fields and check how updates, duplicate records and failures are handled.

A tool name is not an integration specification. Native, middleware, webhook, API, external link and manual workflows have different capabilities, costs and failure modes.

### Evidence and review

The source identifies this item as unavailable. It remains documented so buyers and reviewers understand the boundary. Any external workaround must be identified and tested separately; it must not be described as native support.



Confirm the current status of Marketo; identify the supported format and plan, any limits or external dependencies, and the current screenshot, help article, contract or test result that substantiates it. Record corrections against U140.

## U141 · Microsoft Dynamics

Status: Unavailable in source

Microsoft Dynamics integration would connect webinar records with the relevant Dynamics CRM environment.

### What is this feature or requirement for?

Microsoft Dynamics integration would connect webinar records with the relevant Dynamics CRM environment.

### How does it help?

The team could evaluate webinar activity in its existing business system.

### What happens if you do not have it?

It requires another verified connection or manual transfer of supported data.

### Why should it matter to the buyer?

It matters for Dynamics-dependent workflows; no direct integration is established by the supplied inventory.

### Workflow evaluation

Prepare a test attendee and the intended receiving application. Run the supported event, inspect the actual trigger and payload, compare transferred fields and check how updates, duplicate records and failures are handled.

A tool name is not an integration specification. Native, middleware, webhook, API, external link and manual workflows have different capabilities, costs and failure modes.

### Evidence and review

The source identifies this item as unavailable. It remains documented so buyers and reviewers understand the boundary. Any external workaround must be identified and tested separately; it must not be described as native support.



Confirm the current status of Microsoft Dynamics; identify the supported format and plan, any limits or external dependencies, and the current screenshot, help article, contract or test result that substantiates it. Record corrections against U141.

## U150 · LinkedIn Lead Gen Forms

Status: Unavailable in source

LinkedIn Lead Gen Forms integration would connect native LinkedIn campaign forms to webinar registration.

### What is this feature or requirement for?

LinkedIn Lead Gen Forms integration would connect native LinkedIn campaign forms to webinar registration.

### How does it help?

A marketing team could coordinate campaign lead capture with event registration through a verified connection.

### What happens if you do not have it?

It needs a separate transfer process or supported landing-page signup workflow.

### Why should it matter to the buyer?

It matters for LinkedIn acquisition, but LinkedIn Live streaming does not establish Lead Gen Forms support and the inventory lists it as unavailable.

### Workflow evaluation

Prepare a test attendee and the intended receiving application. Run the supported event, inspect the actual trigger and payload, compare transferred fields and check how updates, duplicate records and failures are handled.

A tool name is not an integration specification. Native, middleware, webhook, API, external link and manual workflows have different capabilities, costs and failure modes.

### Evidence and review

The source identifies this item as unavailable. It remains documented so buyers and reviewers understand the boundary. Any external workaround must be identified and tested separately; it must not be described as native support.

Livestorm, WebinarGeek have it

Confirm the current status of LinkedIn Lead Gen Forms; identify the supported format and plan, any limits or external dependencies, and the current screenshot, help article, contract or test result that substantiates it. Record corrections against U150.

## U151 · Facebook Lead Ads

Status: Unavailable in source

Facebook Lead Ads integration would transfer native campaign-form responses into the webinar registration workflow.

### What is this feature or requirement for?

Facebook Lead Ads integration would transfer native campaign-form responses into the webinar registration workflow.

### How does it help?

The team could coordinate social lead capture and session communication through the required connection.

### What happens if you do not have it?

It must use another verified process to move campaign leads into webinar registration.

### Why should it matter to the buyer?

It matters for social acquisition, but Facebook Live streaming and Meta Pixel tracking do not prove this integration.

### Workflow evaluation

Prepare a test attendee and the intended receiving application. Run the supported event, inspect the actual trigger and payload, compare transferred fields and check how updates, duplicate records and failures are handled.

A tool name is not an integration specification. Native, middleware, webhook, API, external link and manual workflows have different capabilities, costs and failure modes.

### Evidence and review

The source identifies this item as unavailable. It remains documented so buyers and reviewers understand the boundary. Any external workaround must be identified and tested separately; it must not be described as native support.

Demio has it

Confirm the current status of Facebook Lead Ads; identify the supported format and plan, any limits or external dependencies, and the current screenshot, help article, contract or test result that substantiates it. Record corrections against U151.

## U162 · AI content repurposing (clips, summaries, blog posts)

Status: Unavailable in source

AI repurposing would turn webinar content into clips, summaries or other reusable content formats.

### What is this feature or requirement for?

AI repurposing would turn webinar content into clips, summaries or other reusable content formats.

### How does it help?

A marketing team could create additional distribution assets from the original session.

### What happens if you do not have it?

It uses external editing or content tools to repurpose the recording.

### Why should it matter to the buyer?

It matters for content programmes, but the inventory identifies this as roadmap or unavailable and not a current EasyWebinar capability.

### Workflow evaluation

Choose a real event timezone and two distinct test attendees. Compare the registration choices, confirmation details, session start, recording playback and permitted interaction. Repeat the test for the exact delivery format you intend to use.

The registration schedule, room behaviour and replay policy are related but not interchangeable. Check supported formats and plan eligibility before assuming a setting applies to live, simulive and on-demand delivery alike.

### Evidence and review

The source identifies this item as unavailable. It remains documented so buyers and reviewers understand the boundary. Any external workaround must be identified and tested separately; it must not be described as native support.

Livestorm, Goldcast win on it. Roadmap only — do not claim

Confirm the current status of AI content repurposing (clips, summaries, blog posts); identify the supported format and plan, any limits or external dependencies, and the current screenshot, help article, contract or test result that substantiates it. Record corrections against U162.

## U164 · AI chat moderation

Status: Unavailable in source

AI chat moderation would automatically evaluate or act on audience messages.

### What is this feature or requirement for?

AI chat moderation would automatically evaluate or act on audience messages.

### How does it help?

A producer could reduce part of the manual effort involved in managing a busy conversation.

### What happens if you do not have it?

Moderation depends on supported human controls and team attention.

### Why should it matter to the buyer?

It matters for large public sessions, but the supplied inventory identifies AI moderation as unavailable.

### Workflow evaluation

Choose a real event timezone and two distinct test attendees. Compare the registration choices, confirmation details, session start, recording playback and permitted interaction. Repeat the test for the exact delivery format you intend to use.

The registration schedule, room behaviour and replay policy are related but not interchangeable. Check supported formats and plan eligibility before assuming a setting applies to live, simulive and on-demand delivery alike.

### Evidence and review

The source identifies this item as unavailable. It remains documented so buyers and reviewers understand the boundary. Any external workaround must be identified and tested separately; it must not be described as native support.

Demio

Confirm the current status of AI chat moderation; identify the supported format and plan, any limits or external dependencies, and the current screenshot, help article, contract or test result that substantiates it. Record corrections against U164.

## U166 · Agentic "give a topic, it builds everything"

Status: Unavailable in source

An agentic topic-to-complete-webinar workflow would create and configure an entire event from a minimal instruction.

### What is this feature or requirement for?

An agentic topic-to-complete-webinar workflow would create and configure an entire event from a minimal instruction.

### How does it help?

It could reduce the number of setup decisions required to assemble a webinar campaign.

### What happens if you do not have it?

The host follows the existing guided generation and event-configuration process.

### Why should it matter to the buyer?

It matters as a future workflow idea, but the inventory explicitly treats it as roadmap rather than an available one-prompt capability.

### Workflow evaluation

Choose a real event timezone and two distinct test attendees. Compare the registration choices, confirmation details, session start, recording playback and permitted interaction. Repeat the test for the exact delivery format you intend to use.

The registration schedule, room behaviour and replay policy are related but not interchangeable. Check supported formats and plan eligibility before assuming a setting applies to live, simulive and on-demand delivery alike.

### Evidence and review

The source identifies this item as unavailable. It remains documented so buyers and reviewers understand the boundary. Any external workaround must be identified and tested separately; it must not be described as native support.

Roadmap — do not claim (2026-09-24)

Confirm the current status of Agentic "give a topic, it builds everything"; identify the supported format and plan, any limits or external dependencies, and the current screenshot, help article, contract or test result that substantiates it. Record corrections against U166.

## U185 · HIPAA

Status: Unavailable in source

HIPAA suitability concerns the contractual and operational requirements of handling protected health information in a relevant workflow.

### What is this feature or requirement for?

HIPAA suitability concerns the contractual and operational requirements of handling protected health information in a relevant workflow.

### How does it help?

A healthcare buyer needs verified evidence and applicable agreements to evaluate that use.

### What happens if you do not have it?

It should use another suitable workflow for protected health information rather than infer suitability from generic security claims.

### Why should it matter to the buyer?

It matters for sensitive healthcare use; the inventory identifies HIPAA as unsupported and no HIPAA-compliant claim should be made.

### Workflow evaluation

Choose a real event timezone and two distinct test attendees. Compare the registration choices, confirmation details, session start, recording playback and permitted interaction. Repeat the test for the exact delivery format you intend to use.

The registration schedule, room behaviour and replay policy are related but not interchangeable. Check supported formats and plan eligibility before assuming a setting applies to live, simulive and on-demand delivery alike.

### Evidence and review

The source identifies this item as unavailable. It remains documented so buyers and reviewers understand the boundary. Any external workaround must be identified and tested separately; it must not be described as native support.

Never claim

Confirm the current status of HIPAA; identify the supported format and plan, any limits or external dependencies, and the current screenshot, help article, contract or test result that substantiates it. Record corrections against U185.

## U186 · ISO 27001 / PCI-DSS

Status: Unavailable in source

ISO 27001 and PCI-DSS are distinct assurance frameworks with specific scopes and evidence requirements.

### What is this feature or requirement for?

ISO 27001 and PCI-DSS are distinct assurance frameworks with specific scopes and evidence requirements.

### How does it help?

A buyer can review relevant vendor or processor assurance evidence where it actually exists.

### What happens if you do not have it?

It must evaluate the service without assuming certification or payment-card compliance from a brand name.

### Why should it matter to the buyer?

It matters for procurement, but using a payment processor does not certify the webinar platform and the inventory lists these platform claims as unsupported.

### Workflow evaluation

Choose a real event timezone and two distinct test attendees. Compare the registration choices, confirmation details, session start, recording playback and permitted interaction. Repeat the test for the exact delivery format you intend to use.

The registration schedule, room behaviour and replay policy are related but not interchangeable. Check supported formats and plan eligibility before assuming a setting applies to live, simulive and on-demand delivery alike.

### Evidence and review

The source identifies this item as unavailable. It remains documented so buyers and reviewers understand the boundary. Any external workaround must be identified and tested separately; it must not be described as native support.

Never claim

Confirm the current status of ISO 27001 / PCI-DSS; identify the supported format and plan, any limits or external dependencies, and the current screenshot, help article, contract or test result that substantiates it. Record corrections against U186.
