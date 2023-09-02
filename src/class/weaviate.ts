import weaviate, { WeaviateClient, ApiKey } from 'weaviate-ts-client';
import { WEAVIATE_API_KEY, WEAVIATE_HOST } from '../config/environment';

class connecToWeaviate {
    host = WEAVIATE_HOST
    apiKey = WEAVIATE_API_KEY

    connect() {
      try {
        return weaviate.client({
          scheme: 'https',
          host: this.host,
          apiKey: new ApiKey(this.apiKey),
        });
      }
      catch (error) {

      }
    }

    greet(name: string) {
        console.log(`${name}, do your stuff!`);
    }
}
