# Story: Lifestyle Factors & Triggers

**Epic:** Symptom Logging
**PRD Ref:** §2.2.5 Lifestyle Factors, §2.2.6 Possible Triggers

## Summary

Capture lifestyle context (sleep, stress) and possible triggers (environment, food, personal) for the day's log entry.

## Functional Requirements

### Lifestyle Factors
- Sleep Last Night: single-select chips — 2h, 4h, 6h, 8h, 10h
- Stress Level: single-select chips — Low, Medium, High

### Possible Triggers (multi-select within each category)
- **Environment:** Heat, Dust, Pollen, Sweat
- **Food and Drink:** Dairy, Alcohol, Sugar
- **Personal and Products:** Stress, New Product, Exercise
- "+ Add Custom" chip per category for user-defined triggers
- Custom triggers saved per-user for reuse

## Non-Functional Requirements

- All selections optional; no required fields in this section
- Custom trigger input: max 50 characters

## Designs

Place any reference screenshots in `designs/`.
