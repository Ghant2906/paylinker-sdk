# PayLinker SDK

This is a simple SDK that helps you connect and interact with the PayLinker API. The SDK includes modules to handle tasks related to transactions and merchant information. It is built on top of axios, supports both CommonJS and ESM, and is written in TypeScript.

## Features

- **Transaction API**

  - Create a new transaction
  - Retrieve a list of transactions
  - Get transaction details

- **Merchant API**

  - Retrieve the merchant's list of payment methods
  - Get detailed merchant information

- **Multi-module Support:**
  - Built outputs for both CommonJS and ESM
  - Generate TypeScript declaration files (`.d.ts`) for use in TypeScript projects

## Installation

You can install the SDK via npm or yarn:

```bash
npm install paylinker-sdk
```

Or using yarn:

```bash
yarn add paylinker-sdk
```

## Usage

To use the SDK, you need a valid API key from PayLinker. Below is a basic example for initializing and using the API:

```typescript
import { PayLinkSDK } from "paylinker-sdk";

const apiKey = "YOUR_API_KEY_HERE";
const sdk = new PayLinkSDK(apiKey);

// Example: Create a new transaction
const transactionData = {
  // Provide the required parameters for the transaction as defined by the API
};

sdk.transaction
  .createTransaction(transactionData)
  .then((transaction) => {
    console.log("Transaction created:", transaction);
  })
  .catch((error) => {
    console.error("Error creating transaction:", error);
  });

// Example: Retrieve the transaction list
sdk.transaction
  .getTransactionList()
  .then((transactions) => {
    console.log("Transaction list:", transactions);
  })
  .catch((error) => {
    console.error("Error retrieving transactions:", error);
  });

// Example: Get Merchant information
sdk.merchant
  .getMerchantInfo()
  .then((merchantInfo) => {
    console.log("Merchant info:", merchantInfo);
  })
  .catch((error) => {
    console.error("Error retrieving merchant info:", error);
  });
```

## Configuration

The SDK is configured with the following default settings:

- **Base URL:**  
  By default, it is set to `https://paylinker-api.crbgroup.live/` in the `src/client.ts` file.

- **Headers:**  
  Every request includes the following headers:
  - `api-key`: Your API key
  - `Content-Type`: `application/json`

## Build

To build the SDK from the TypeScript source, use the script provided in the `package.json`:

```bash
npm run build
```

This script uses [tsup](https://tsup.egoist.dev/) to produce outputs for both CommonJS and ESM and to generate declaration files (`.d.ts`).

## Contributions

If you have suggestions, wish to report any bugs, or want to contribute code, please fork the repository and submit a Pull Request or open an Issue on the project's GitHub page.

## License

The SDK is licensed under the [ISC License](LICENSE).
