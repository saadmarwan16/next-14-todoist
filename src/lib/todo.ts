import { prop } from "@typegoose/typegoose";
// import { type ReturnModelType, getModelForClass, mongoose, prop, deleteModelWithClass, getModelWithString } from "@typegoose/typegoose";
// import type { BeAnObject } from "@typegoose/typegoose/lib/types";

export class Todo {
    @prop({required: true})
    public title!: string;

    @prop()
    public timestamp!: string;
}

// const getModel = () => {
//     deleteModelWithClass(Todo);

//     return getModelForClass(Todo, {
//         options: {

//         }
//         ,
//         schemaOptions: {

//         }
//     });
// }

// export const TodoModel =  mongoose.models.Todo ?? getModelForClass(Todo) as unknown as ReturnModelType<typeof Todo, BeAnObject>;
// export const TodoModel: ReturnModelType<typeof Todo, BeAnObject> = getModelForClass(Todo);

// export const TodoModel = getModel();