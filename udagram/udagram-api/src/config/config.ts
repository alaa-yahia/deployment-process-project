import * as dotenv from 'dotenv';
dotenv.config();

// ENV variables
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

export const config = {
  dbUsername: process.env.POSTGRES_USERNAME,
  dbPassword: process.env.POSTGRES_PASSWORD,
  dbName: process.env.POSTGRES_DB,
  dbHost: process.env.POSTGRES_HOST,
  dbPort: process.env.DB_PORT,
  port: process.env.PORT,
  aws_region: process.env.AWS_REGION,
  aws_profile: process.env.AWS_PROFILE,
  aws_media_bucket: process.env.AWS_BUCKET,
  aws_access_key: process.env.AWS_ACCESS_KEY_ID,
  aws_access__secret_key: process.env.AWS_SECRET_ACCESS_KEY,
  url: process.env.URL,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
