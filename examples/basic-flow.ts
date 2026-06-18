import { SimaAgentClient } from "@sima/agent-sdk";

const client = new SimaAgentClient({
  accessToken: "YOUR_ACCESS_TOKEN",
});

const walletAddress = "YOUR_WALLET_ADDRESS";
const signature = "YOUR_SIGNATURE";
const certificateId = "YOUR_CERTIFICATE_ID";
const claimId = "YOUR_CLAIM_ID";
const transactionHash = "YOUR_TRANSACTION_HASH";

async function runBasicFlow() {
  const nonce = await client.requestWalletNonce(walletAddress);

  // Sign nonce.message with your wallet outside this SDK example.
  const walletAuth = await client.verifyWalletSignature({
    chain: "SOLANA",
    walletAddress,
    message: nonce.message,
    signature,
  });

  client.setAccessToken(walletAuth.accessToken || "YOUR_ACCESS_TOKEN");

  const quote = await client.createProtectionQuote({
    chain: "SOLANA",
    walletAddress,
    assetAddress: "YOUR_ASSET_ADDRESS",
    assetSymbol: "EXAMPLE",
    assetType: "TOKEN",
    investedAmountUsd: "1000.00",
  });

  const paymentDestinations = await client.getTreasuryPaymentDestinations();

  const paymentIntent = await client.createPaymentIntent({
    chain: "SOLANA",
    asset: "USDC",
    investedAmount: "1000.00",
    assetSymbol: "EXAMPLE",
    assetAddress: "YOUR_ASSET_ADDRESS",
    projectName: "YOUR_PROJECT_NAME",
  });

  const paymentEvidence = await client.submitPaymentEvidence({
    paymentReference: "YOUR_PAYMENT_REFERENCE",
    chain: "SOLANA",
    asset: "USDC",
    transactionHash,
    walletAddress,
  });

  const certificateVerification = await client.verifyCertificate({
    walletAddress,
    certificateId,
  });

  const certificates = await client.listCertificates();
  const certificate = await client.getCertificate(certificateId);

  const claimIntake = await client.submitClaimIntake({
    walletAddress,
    certificateId,
    incidentType: "SECURITY_INCIDENT",
    incidentSummary: "Describe the incident using evidence-backed facts.",
    evidenceLinks: ["https://example.invalid/evidence-placeholder"],
  });

  const claims = await client.listClaims();
  const claim = await client.getClaim(claimId);

  return {
    quote,
    paymentDestinations,
    paymentIntent,
    paymentEvidence,
    certificateVerification,
    certificates,
    certificate,
    claimIntake,
    claims,
    claim,
  };
}

void runBasicFlow();

/*
Safety notes:
- This SDK example uses placeholders only.
- The SDK does not sign wallet messages or store private keys.
- The SDK does not execute payments, transfer funds, activate coverage, approve claims, or perform payouts.
- SIMA V1 economics remain 5% premium, 50% coverage, 10% deductible, 40% maximum net payment.
*/
