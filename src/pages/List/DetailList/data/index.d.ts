export type ActionDataType = {
  label: string;
  value: number;
};

export type DetailDataType = {
  id: number;
  title: string;
  tag: string[];
  content: string;
  action: ActionDataType[];
  image: string;
};

export type DetailDataResponseType = {
  code: number;
  data: DetailDataType[];
  msg: string;
};
