module.exports = ({ env }) => ({
  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: env("drhwwwozj"),
      api_key: env("245497232148366"),
      api_secret: env("Bgqu7NrEcyyosZUHODJz2HVyZjA"),
    },
    actionOptions: {
      upload: {},
      delete: {},
    },
  },
});
