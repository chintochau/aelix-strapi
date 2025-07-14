  export default ({ env }) => ({
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          baseUrl: env('MINIO_PUBLIC_URL', 'https://storage.aelix.ai/strapi-uploads'),
          s3Options: {
            credentials: {
              accessKeyId: env('MINIO_ACCESS_KEY', 'minioadmin'),
              secretAccessKey: env('MINIO_SECRET_KEY', 'Aa31093066'),
            },
            endpoint: env('MINIO_ENDPOINT', 'http://localhost:9000'),
            region: env('MINIO_REGION', 'us-east-1'),
            forcePathStyle: true,
          },
          params: {
            Bucket: env('MINIO_BUCKET', 'strapi-uploads'),
          },
        },
      },
    },
  });
