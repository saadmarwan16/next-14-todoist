import mongoose from 'mongoose';
import { env } from '~/env';
import { typeDb } from '~/server/db';

export const connect = async () => {
    await mongoose.connect(env.DATABASE_URL)

    return {
        // todo: getModelForClass(Todo)
        // todo: TodoModel
        todo: typeDb
    }
}

// export const disconnect = () => {}