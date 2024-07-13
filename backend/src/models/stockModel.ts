import mongoose, { Schema, Document } from 'mongoose';

interface IPriceEntry {
  current_price: number;
  last_updated: Date;
}

interface IStock extends Document {
  api_id: string,
  name: string,
  image: string,
  symbol: string,
  prices: IPriceEntry[],
  updatedOn: Date
}

const priceEntrySchema = new Schema<IPriceEntry>({
  current_price: { type: Number, required: true },
  last_updated: { type: Date, default: Date.now, required: true },
});

const stockSchema = new Schema<IStock>({
  api_id: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  symbol: { type: String, required: true },
  prices: { type: [priceEntrySchema], default: [] },
  updatedOn: { type: Date, default: Date.now}
});

const Stock = mongoose.model<IStock>('Stock', stockSchema);

export default Stock;
