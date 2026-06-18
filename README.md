# SIMA Agent SDK

Agent Protection Infrastructure for Autonomous Wallets, AI Agents, and Trading Systems.

## Overview

SIMA provides wallet-first digital asset protection infrastructure for humans, AI agents, trading bots, autonomous wallets, wallet copilots, and machine-to-machine systems.

## Features

- Wallet-first agent authentication flow
- Agent protection quote requests
- Treasury payment destination discovery
- Payment intent preparation
- Certificate verification and portfolio lookup
- Claim intake preparation
- Read-only claim status lookup
- TypeScript SDK foundation
- Copy-paste examples using placeholders only

## Agent API

The public repository may document SIMA agent APIs at a high level:

```text
POST /agent/wallet/nonce
POST /agent/wallet/verify
POST /agent/protection-quote
GET  /agent/treasury/payment-destinations
POST /agent/treasury/payment-intent
POST /agent/certificate-verify
GET  /agent/certificates
POST /agent/claim-intake
GET  /agent/claims
```

## SDK

The TypeScript SDK is an API client only. It does not sign wallet messages, store private keys, execute transfers, activate coverage, approve claims, or perform payouts.

## Discovery Files

```text
https://sima-prime.com/llms.txt
https://sima-prime.com/openapi.json
https://sima-prime.com/bot-manifest.json
https://sima-prime.com/.well-known/agent.json
https://sima-prime.com/agent-capabilities.json
```

## Example Flows

Examples should use placeholders only:

```text
YOUR_WALLET_ADDRESS
YOUR_SIGNATURE
YOUR_ACCESS_TOKEN
YOUR_CERTIFICATE_ID
YOUR_CLAIM_ID
YOUR_TRANSACTION_HASH
```

## Architecture Overview

```text
Agent
-> Wallet Authentication
-> Protection Quote
-> Payment Intent
-> Certificate Workflow
-> Claim Workflow
```

This public overview intentionally excludes production implementation details.

## Trust & Safety

Public developer materials must clearly state:

- SIMA does not require private keys.
- SIMA examples do not move funds.
- SIMA SDK examples do not execute blockchain transfers.
- SIMA does not approve claims automatically.
- SIMA does not perform payouts automatically.
- SIMA V1 economics remain fixed in public examples.

## Quick Start

```ts
import { SimaAgentClient } from "@sima/agent-sdk";

const client = new SimaAgentClient({
  accessToken: "YOUR_ACCESS_TOKEN",
});

const certificates = await client.listCertificates();
```

## Documentation Links

```text
https://sima-prime.com/developers
https://sima-prime.com/developers/public
https://sima-prime.com/ai
https://sima-prime.com/ai/examples
https://sima-prime.com/ai/demo
https://sima-prime.com/discovery
https://sima-prime.com/public-developer-repository-pack.json
```

## Roadmap

- Public SDK repository preparation
- Public examples review
- Public documentation review
- Public package publishing plan
- Community contribution policy
- Security disclosure process

## Open Source Boundaries

Public repository:

- SDK
- examples
- documentation
- discovery assets

Private core repository:

- production systems
- treasury systems
- claims systems
- investigation systems
- risk systems
- internal operations
