/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    PROJECT_ID: "93bb8537-798c-48b2-9712-3a019fd3feee",
    RPC_URL:
      "https://node.stackup.sh/v1/rpc/2819c4c6aafb9a07fae89c61a8c282131c832224a19b5dcfa40645aaeafd4b03",
  },
};

module.exports = nextConfig;
