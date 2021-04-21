export type IpListItemDataType = {
  ip?: string;
  cpu?: number | string;
  mem?: number | string;
  disk?: number | string;
  status: statusType;
};

export type IPListItemParams = {
  pageSize?: number;
  current?: number;
};

export type IPListItemResponse = {
  code: number;
  data: IpListItemDataType[];
  msg: string;
};
