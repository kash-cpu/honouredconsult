import mongoose, { Schema, Document } from 'mongoose';

export interface ISubscriber extends Document {
  email: string;
  name?: string;
  subscribedAt: Date;
  isActive: boolean;
  unsubscribedAt?: Date;
}

const SubscriberSchema: Schema = new Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true,
    lowercase: true,
    trim: true 
  },
  name: String,
  subscribedAt: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true },
  unsubscribedAt: Date
}, { timestamps: true });

export default mongoose.model<ISubscriber>('Subscriber', SubscriberSchema);
