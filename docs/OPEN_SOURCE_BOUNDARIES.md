# SIMA Open Source Boundaries

This document defines public and private boundaries for a future SIMA public developer repository.

## Public

The public repository may include:

```text
SDK
examples
documentation
discovery assets
public OpenAPI references
public architecture overview
placeholder integration flows
```

## Private

The private SIMA core repository must retain:

```text
production systems
treasury systems
claims systems
investigation systems
risk systems
internal operations
deployment configuration
security implementation details
private infrastructure details
```

## Never Public

Do not publish:

```text
private keys
seed phrases
production secrets
treasury wallet private material
internal claims decision logic
investigation internals
production infrastructure details
security-sensitive implementation details
```

## Public Repository Rule

The public repository should make SIMA easy to understand and integrate without exposing how private production systems operate.
