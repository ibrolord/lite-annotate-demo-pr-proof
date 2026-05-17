# Lite Annotate Auto-Fix Artifact

Artifact type: setup_pr
Report class: copy_content

## Report

Hosted artifact PR proof current deployment 1778976710239

On the hosted profile route, the banner wording is confusing and should stay patchable even with low confidence.

## Why this artifact exists

Auto-Fix ran, but the available evidence was not strong enough for a direct product-code fix. This artifact keeps the report patchable by adding a reviewable engineering artifact inside the repository instead of stopping at diagnosis-only output.

Previous patch gate: targetFiles must include at least one file; shouldPatch is false; confidence below 0.75


## Evidence captured

- Route: /profile
- URL: https://demo.example.test/profile
- Annotation target: #profile-banner

## Candidate files

No code candidates were available.

## Current diagnosis

No candidate source file ranked highly enough to explain the report.

## Required follow-up

- Add or confirm the missing reproduction evidence.
- Convert this artifact into a product fix, regression test, or targeted instrumentation once the owner confirms the intended behavior.
- Keep future Auto-Fix attempts scoped to the candidate files above unless new evidence changes ownership.
