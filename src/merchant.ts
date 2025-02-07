import { PayLinkClient } from './client';
import { PaymentMethod, MerchantInfo } from './types';

export class MerchantAPI extends PayLinkClient {
  async getMerchantPaymentMethods(): Promise<PaymentMethod[]> {
    return this.get<PaymentMethod[]>('/api/merchants/payment-methods');
  }

  async getMerchantInfo(): Promise<MerchantInfo> {
    return this.get<MerchantInfo>('/api/merchants/info');
  }
}
