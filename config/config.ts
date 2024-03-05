export interface IConfiguration {
    PORT: number;
    MONGO_URI: string;
}

export const config: IConfiguration = {
    PORT: parseInt(process.env.PORT ?? "3002"),
    MONGO_URI: "mongodb://18.195.33.58:27017/"
}