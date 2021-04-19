export interface ITweet {
  _id: string;
  user: {
    _id: string;
    name: string;
  };
  message: string;
  createdAt: Date;
  updatedAt: Date;
};