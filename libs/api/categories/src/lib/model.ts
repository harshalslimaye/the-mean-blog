import { Schema, model } from 'mongoose';

export interface ICategory {
  name: string;
  description?: string;
}

export const categorySchema = new Schema<ICategory>({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  }
});

export const Category = model<ICategory>('Category', categorySchema);
