# SIMA Public Architecture Overview

This document is a public-safe architecture overview for a future SIMA public developer repository.

It intentionally excludes production implementation details, infrastructure configuration, treasury internals, claims decision internals, investigation logic, risk systems, secrets, and private keys.

## Public Flow

```text
Agent
  |
  v
Wallet Authentication
  |
  v
Protection Quote
  |
  v
Payment Intent
  |
  v
Certificate Workflow
  |
  v
Claim Workflow
```

## Public Components

```text
TypeScript SDK
Example flows
OpenAPI document
llms.txt
bot manifest
agent manifest
agent capabilities registry
developer documentation
```

## Private Components

```text
production service internals
treasury operations
claims decision systems
investigation systems
risk systems
infrastructure configuration
security architecture
```

## Boundary

The public architecture is designed to help developers integrate with SIMA APIs without exposing private operational systems.
