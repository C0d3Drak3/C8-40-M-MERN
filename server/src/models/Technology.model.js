import { Schema, model } from 'mongoose';

const technologySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  post: [
    {
      type: Schema.Types.ObjectId,
      ref: 'post',
    },
  ],
});

export default model('technology', technologySchema);