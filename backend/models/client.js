const mongoose = require("mongoose");

const Client = mongoose.model("Client", {
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  entreprise: {
    type: String,
  },
  titreprojet: {
    type: String,
  },
  image: {
    type: String,
  },
});

module.exports = Client;
