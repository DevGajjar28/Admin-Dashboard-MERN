const mongoose = require("mongoose");

const OverallStatSchema = new mongoose.Schema(
    {

        totalCustomers: Number,
        yearlySalesTotal: Number,
        yearlyTotalSoldUnits: Number,
        year: Number,
        monthlyData: [
            {
                month: String,
                totalSales: Number,
                totalUnits: Number,
            },
        ],
        dailyData: [{
            data: String,
            totalSales: Number,
            totalUnits: Number,
        },
        ],
        salesByCategory: {
            type: Map,
            of: Number,
        },

    }, { timestamps: true }
);

const OverallStat = mongoose.model("OverallStat", OverallStatSchema);
module.exports = OverallStat;