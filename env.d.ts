import { DOMAttributes } from "react"

type CustomElement<T> = Partial<T & DOMAttributes<T> & { children: any }>;
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // Add here the Cloudflare Bindings you want to have available in your application
      // (for more details on Bindings see: https://developers.cloudflare.com/pages/functions/bindings/)
      //
      // KV Example:
      // MY_KV: KVNamespace
    }
  }
  namespace JSX {
    interface IntrinsicElements {
      ['stripe-buy-button']: CustomElement<any>;
    }
  }
}

export {}
