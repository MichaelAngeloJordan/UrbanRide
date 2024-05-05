import { connect, ConnectOptions } from 'mongoose';

export const dbConnect = () => {
    const options: ConnectOptions = {
        useUnifiedTopology: true,
        lookup: undefined,
        family: undefined,
        hints: undefined,
        localAddress: undefined,
        localPort: undefined
    };

    connect(process.env.MONGO_URI!, options)
        .then(
            () => console.log("connect successfully"),
            (error) => console.log(error)
        );
};

declare module 'mongoose' {
    interface ConnectOptions {
        useUnifiedTopology?: boolean;
    }
}
