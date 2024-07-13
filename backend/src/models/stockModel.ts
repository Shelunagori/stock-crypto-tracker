import mongoose from 'mongoose';

interface IStock {
  api_id : string,
  name : string,
  image : string,
  symbol: string,
  current_price: number,
  last_updated: Date
}

const stockSchema = new mongoose.Schema<IStock>({
  api_id : {type: String, required: true},
  name : {type: String, required: true},
  image : {type: String, required: true},
  symbol: { type: String, required: true },
  current_price: { type: Number, required: true },
  last_updated: { type: Date, default: Date.now },
});

const Stock = mongoose.model<IStock>('Stock', stockSchema);

export default Stock;
