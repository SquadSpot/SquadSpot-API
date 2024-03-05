import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type TaskDocument = HydratedDocument<Task>;

@Schema()
export class Task {
    @Prop({ required: true })
    title: string;

    @Prop()
    description: string;

    @Prop({ default: false })
    done: boolean;
}

export type TaskCreationParams = Partial<Task>

export const TaskSchema = SchemaFactory.createForClass(Task);
