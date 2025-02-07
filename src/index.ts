import { PayLinkClient } from './client';
import { TransactionAPI } from './transaction';
import { MerchantAPI } from './merchant';

export class PayLinkSDK extends PayLinkClient {
  public readonly transaction: TransactionAPI;
  public readonly merchant: MerchantAPI;

  constructor(apiKey: string) {
    super(apiKey);
    this.transaction = new TransactionAPI(apiKey);
    this.merchant = new MerchantAPI(apiKey);
  }
}