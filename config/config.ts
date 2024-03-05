export interface IConfiguration {
    PORT: number;
    MONGO_URI: string;
}

export const config: IConfiguration = {
    PORT: parseInt(process.env.PORT ?? "3002"),
    MONGO_URI: process.env.MONGO_URI ?? "mongodb://localhost:27017/"
}