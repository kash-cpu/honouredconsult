import mongoose, { Schema, Document } from 'mongoose';

export interface INewsletter extends Document {
  title: string;
  content: string;
  excerpt: string;
  author: mongoose.Types.ObjectId;
  published: boolean;
  publishedAt?: Date;
  sentToSubscribers: boolean;
  recipientCount: number;
}

const NewsletterSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  excerpt: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  published: { type: Boolean, default: false },
  publishedAt: Date,
  sentToSubscribers: { type: Boolean, default: false },
  recipientCount: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.model<INewsletter>('Newsletter', NewsletterSchema);
