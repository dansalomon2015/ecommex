import express, { NextFunction, Request, Response } from "express";
import userRoutes from "./routes/userRoutes";
import productRoutes from "./routes/productRoutes";
import orderRoutes from "./routes/orderRoutes";
import merchantRoutes from "./routes/merchantRoutes";
import retailerRoutes from "./routes/retailerRoutes";
import transactionRoutes from "./routes/transactionRoutes";
import { ApiResponse } from "./models";
import { ErrorHandler } from "./utils";
import { ApiResponseCodeType } from "./types";
import { auth } from "./middleware";
import { auditLog } from "./middleware/auditLog";
import { PrismaClient } from "@prisma/client";

const PORT = process.env.PORT || 3000;
const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.use(auth);
app.use(auditLog);

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/order", orderRoutes);
app.use("/api/v1/merchants", merchantRoutes);
app.use("/api/v1/retailer", retailerRoutes);
app.use("/api/v1/transaction", transactionRoutes);

app.get("/", (req, res) => {
    res.send(`App is running on port ${PORT} `);
});

app.all("*", (req, res, next) => {
    next(new ApiResponse(`Can't find ${req.originalUrl} on the server`, "fail", 404));
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    try {
        error = ErrorHandler.process(error);
        error.statusCode = error.statusCode || 500;
        error.status = error.status || "error";
        let data = {
            status: ApiResponseCodeType.ERROR,
            message: error.message,
        };
        if (Object.prototype.hasOwnProperty.call(error, "errors")) {
            res.status(error.statusCode).json({ ...data, errors: error.errors });
        } else {
            res.status(error.statusCode).json(data);
        }
    } catch (error) {
        res.status(500).json({ status: error, message: "Internal server error" });
    }
});

process.on("beforeExit", async () => {
    await prisma.$disconnect();
});

app.listen(PORT, () => {
    console.log(`Start listening on port ${PORT} `);
});
