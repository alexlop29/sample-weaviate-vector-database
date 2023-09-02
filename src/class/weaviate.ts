import weaviate, { WeaviateClient, ApiKey } from 'weaviate-ts-client';
import { WEAVIATE_API_KEY, WEAVIATE_HOST } from '../config/environment';

class weaviateDB {
    host = WEAVIATE_HOST
    apiKey = WEAVIATE_API_KEY
    conn

    connect() {
      try {
        this.conn = weaviate.client({
          scheme: 'https',
          host: this.host,
          apiKey: new ApiKey(this.apiKey),
        });
      }
      catch (error) {
        throw new Error("Unable to connect to weaviate");
      }
    }

    createClass(classObj) {
      this.conn.schema
        .classCreator()
        .withClass(classObj)
        .do();
    }
}

export { weaviateDB }
