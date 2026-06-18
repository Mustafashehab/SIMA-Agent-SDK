import { SimaAgentClient } from "@sima/agent-sdk";

const client = new SimaAgentClient({
  accessToken: "YOUR_ACCESS_TOKEN",
});

const walletAddress = "YOUR_WALLET_ADDRESS";
const signature = "YOUR_SIGNATURE";
const certificateId = "YOUR_CERTIFICATE_ID";
const transactionHash = "YOUR_TRANSACTION_HASH";

async function runAutonomousDemoFlow() {
  console.log("SIMA public autonomous demo flow");
  console.log("This public example uses placeholders only.");

  const nonce = await client.requestWalletNonce(walletAddress);

  console.log("Sign this message outside the SDK:");
  console.log(nonce.message);

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

  const claimIntake = await client.submitClaimIntake({
    walletAddress,
    certificateId,
    incidentType: "SECURITY_INCIDENT",
    incidentSummary: "Describe the incident using evidence-backed facts.",
    evidenceLinks: ["https://example.invalid/evidence-placeholder"],
  });

  return {
    quote,
    paymentIntent,
    paymentEvidence,
    certificateVerification,
    claimIntake,
  };
}

void runAutonomousDemoFlow();

/*
Public safety boundary:
- No private keys.
- No real wallet address.
- No production credentials.
- No blockchain transfer.
- No payment execution.
- No coverage activation.
- No claim approval.
- No payout behavior.
*/
