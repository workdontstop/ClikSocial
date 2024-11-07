import dotenv from "dotenv";
import aws from "aws-sdk";
import crypto from "crypto";
import { promisify } from "util";
const randomBytes = promisify(crypto.randomBytes);

dotenv.config();

const fs = require("fs");

const buckname = process.env.BUCKET_NAME;
const region = process.env.BUCKET_REGION;
const accessKeyId = process.env.BUCKET_ACCESS_KEY;
const secretAccessKey = process.env.BUCKET_SECRET_KEY;

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: "v4",
});

export async function generateUploadURLaudio() {
  const rawbytes = await randomBytes(16);
  const name = rawbytes.toString("hex");

  const params = {
    Bucket: buckname,
    Key: name,
    Expires: 8000, // You can adjust the expiration time
    ContentType: "audio/mp3", // Change this based
  };

  const uploadURLvidd = await s3.getSignedUrlPromise("putObject", params);

  return uploadURLvidd;
}
