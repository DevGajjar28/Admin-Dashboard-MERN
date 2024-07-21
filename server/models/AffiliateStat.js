const mongoose = require("mongoose");

const AffiliateStatSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Types.ObjectId, ref: "User" },
        affiliateSales: {
            type: [mongoose.Types.ObjectId],
            ref: "Transaction",
        },
    },
    { timestamps: true }
);

const Affiliate = mongoose.model("Affiliate", AffiliateStatSchema);
module.exports = Affiliate;