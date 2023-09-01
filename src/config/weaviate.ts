import weaviate, { WeaviateClient, ApiKey } from 'weaviate-ts-client';

  const client: WeaviateClient = weaviate.client({
    scheme: 'https',
    host: 'sample-weaviate-vector-database-yx40ixnd.weaviate.network',
    apiKey: new ApiKey('YOUR-WEAVIATE-API-KEY'),
  });

