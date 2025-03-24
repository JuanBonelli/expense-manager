export interface Account {
  _id: string;
  name: string;
  description: string;
  currency: string;
}

export interface Master {
  _id: string;
  name: string;
}

export type Movement = {
  _id: string;
  title: string;
  description: string;
  amount: string;
  accountId: string;
  categoryId: string;
  createdAt: string;
}
