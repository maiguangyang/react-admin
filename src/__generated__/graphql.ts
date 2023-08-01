/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Any: { input: any; output: any; }
  Time: { input: any; output: any; }
  Upload: { input: any; output: any; }
  _Any: { input: any; output: any; }
};

export type FileField = {
  file: Scalars['Upload']['input'];
  hash: Scalars['String']['input'];
};

export type Good = {
  __typename?: 'Good';
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Int']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  isDelete?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
  shortDesc?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  weight?: Maybe<Scalars['Int']['output']>;
};

export type GoodCreateInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  isDelete?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
  shortDesc?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['Int']['input']>;
  weight?: InputMaybe<Scalars['Int']['input']>;
};

export type GoodFilterType = {
  AND?: InputMaybe<Array<GoodFilterType>>;
  OR?: InputMaybe<Array<GoodFilterType>>;
  content?: InputMaybe<Scalars['String']['input']>;
  content_gt?: InputMaybe<Scalars['String']['input']>;
  content_gte?: InputMaybe<Scalars['String']['input']>;
  content_in?: InputMaybe<Array<Scalars['String']['input']>>;
  content_like?: InputMaybe<Scalars['String']['input']>;
  content_lt?: InputMaybe<Scalars['String']['input']>;
  content_lte?: InputMaybe<Scalars['String']['input']>;
  content_ne?: InputMaybe<Scalars['String']['input']>;
  content_null?: InputMaybe<Scalars['Boolean']['input']>;
  content_prefix?: InputMaybe<Scalars['String']['input']>;
  content_suffix?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_lte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_ne?: InputMaybe<Scalars['Int']['input']>;
  createdAt_null?: InputMaybe<Scalars['Boolean']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  createdBy_gt?: InputMaybe<Scalars['ID']['input']>;
  createdBy_gte?: InputMaybe<Scalars['ID']['input']>;
  createdBy_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  createdBy_lt?: InputMaybe<Scalars['ID']['input']>;
  createdBy_lte?: InputMaybe<Scalars['ID']['input']>;
  createdBy_ne?: InputMaybe<Scalars['ID']['input']>;
  createdBy_null?: InputMaybe<Scalars['Boolean']['input']>;
  deletedAt?: InputMaybe<Scalars['Int']['input']>;
  deletedAt_gt?: InputMaybe<Scalars['Int']['input']>;
  deletedAt_gte?: InputMaybe<Scalars['Int']['input']>;
  deletedAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  deletedAt_lt?: InputMaybe<Scalars['Int']['input']>;
  deletedAt_lte?: InputMaybe<Scalars['Int']['input']>;
  deletedAt_ne?: InputMaybe<Scalars['Int']['input']>;
  deletedAt_null?: InputMaybe<Scalars['Boolean']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  deletedBy_gt?: InputMaybe<Scalars['ID']['input']>;
  deletedBy_gte?: InputMaybe<Scalars['ID']['input']>;
  deletedBy_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  deletedBy_lt?: InputMaybe<Scalars['ID']['input']>;
  deletedBy_lte?: InputMaybe<Scalars['ID']['input']>;
  deletedBy_ne?: InputMaybe<Scalars['ID']['input']>;
  deletedBy_null?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_ne?: InputMaybe<Scalars['ID']['input']>;
  id_null?: InputMaybe<Scalars['Boolean']['input']>;
  isDelete?: InputMaybe<Scalars['Int']['input']>;
  isDelete_gt?: InputMaybe<Scalars['Int']['input']>;
  isDelete_gte?: InputMaybe<Scalars['Int']['input']>;
  isDelete_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  isDelete_lt?: InputMaybe<Scalars['Int']['input']>;
  isDelete_lte?: InputMaybe<Scalars['Int']['input']>;
  isDelete_ne?: InputMaybe<Scalars['Int']['input']>;
  isDelete_null?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_like?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_ne?: InputMaybe<Scalars['String']['input']>;
  name_null?: InputMaybe<Scalars['Boolean']['input']>;
  name_prefix?: InputMaybe<Scalars['String']['input']>;
  name_suffix?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  price_gt?: InputMaybe<Scalars['Int']['input']>;
  price_gte?: InputMaybe<Scalars['Int']['input']>;
  price_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  price_lt?: InputMaybe<Scalars['Int']['input']>;
  price_lte?: InputMaybe<Scalars['Int']['input']>;
  price_ne?: InputMaybe<Scalars['Int']['input']>;
  price_null?: InputMaybe<Scalars['Boolean']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
  score_gt?: InputMaybe<Scalars['Int']['input']>;
  score_gte?: InputMaybe<Scalars['Int']['input']>;
  score_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  score_lt?: InputMaybe<Scalars['Int']['input']>;
  score_lte?: InputMaybe<Scalars['Int']['input']>;
  score_ne?: InputMaybe<Scalars['Int']['input']>;
  score_null?: InputMaybe<Scalars['Boolean']['input']>;
  shortDesc?: InputMaybe<Scalars['String']['input']>;
  shortDesc_gt?: InputMaybe<Scalars['String']['input']>;
  shortDesc_gte?: InputMaybe<Scalars['String']['input']>;
  shortDesc_in?: InputMaybe<Array<Scalars['String']['input']>>;
  shortDesc_like?: InputMaybe<Scalars['String']['input']>;
  shortDesc_lt?: InputMaybe<Scalars['String']['input']>;
  shortDesc_lte?: InputMaybe<Scalars['String']['input']>;
  shortDesc_ne?: InputMaybe<Scalars['String']['input']>;
  shortDesc_null?: InputMaybe<Scalars['Boolean']['input']>;
  shortDesc_prefix?: InputMaybe<Scalars['String']['input']>;
  shortDesc_suffix?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['Int']['input']>;
  state_gt?: InputMaybe<Scalars['Int']['input']>;
  state_gte?: InputMaybe<Scalars['Int']['input']>;
  state_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  state_lt?: InputMaybe<Scalars['Int']['input']>;
  state_lte?: InputMaybe<Scalars['Int']['input']>;
  state_ne?: InputMaybe<Scalars['Int']['input']>;
  state_null?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  updatedAt_lt?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_ne?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_null?: InputMaybe<Scalars['Boolean']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  updatedBy_gt?: InputMaybe<Scalars['ID']['input']>;
  updatedBy_gte?: InputMaybe<Scalars['ID']['input']>;
  updatedBy_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  updatedBy_lt?: InputMaybe<Scalars['ID']['input']>;
  updatedBy_lte?: InputMaybe<Scalars['ID']['input']>;
  updatedBy_ne?: InputMaybe<Scalars['ID']['input']>;
  updatedBy_null?: InputMaybe<Scalars['Boolean']['input']>;
  weight?: InputMaybe<Scalars['Int']['input']>;
  weight_gt?: InputMaybe<Scalars['Int']['input']>;
  weight_gte?: InputMaybe<Scalars['Int']['input']>;
  weight_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  weight_lt?: InputMaybe<Scalars['Int']['input']>;
  weight_lte?: InputMaybe<Scalars['Int']['input']>;
  weight_ne?: InputMaybe<Scalars['Int']['input']>;
  weight_null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GoodRelationship = {
  content?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isDelete?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
  shortDesc?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['Int']['input']>;
  weight?: InputMaybe<Scalars['Int']['input']>;
};

export type GoodResultType = {
  __typename?: 'GoodResultType';
  current_page: Scalars['Int']['output'];
  data: Array<Good>;
  per_page: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  total_page: Scalars['Int']['output'];
};

export type GoodSortType = {
  content?: InputMaybe<ObjectSortType>;
  createdAt?: InputMaybe<ObjectSortType>;
  createdBy?: InputMaybe<ObjectSortType>;
  deletedAt?: InputMaybe<ObjectSortType>;
  deletedBy?: InputMaybe<ObjectSortType>;
  id?: InputMaybe<ObjectSortType>;
  isDelete?: InputMaybe<ObjectSortType>;
  name?: InputMaybe<ObjectSortType>;
  price?: InputMaybe<ObjectSortType>;
  score?: InputMaybe<ObjectSortType>;
  shortDesc?: InputMaybe<ObjectSortType>;
  state?: InputMaybe<ObjectSortType>;
  updatedAt?: InputMaybe<ObjectSortType>;
  updatedBy?: InputMaybe<ObjectSortType>;
  weight?: InputMaybe<ObjectSortType>;
};

export type GoodUpdateInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  isDelete?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
  shortDesc?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['Int']['input']>;
  weight?: InputMaybe<Scalars['Int']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  chatGPT?: Maybe<Scalars['Any']['output']>;
  createGood: Good;
  createOrder: Order;
  createProject: Project;
  createProjectTable: ProjectTable;
  createProjectTableField: ProjectTableField;
  createUploadFile: UploadFile;
  createUser: User;
  deleteGoods: Scalars['Boolean']['output'];
  deleteOrders: Scalars['Boolean']['output'];
  deleteProjectTableFields: Scalars['Boolean']['output'];
  deleteProjectTables: Scalars['Boolean']['output'];
  deleteProjects: Scalars['Boolean']['output'];
  deleteUploadFiles: Scalars['Boolean']['output'];
  deleteUsers: Scalars['Boolean']['output'];
  gptBuildProject?: Maybe<Scalars['Any']['output']>;
  gptCreateProject?: Maybe<Scalars['Any']['output']>;
  gptCreateProjectTable?: Maybe<Scalars['Any']['output']>;
  gptUpdateProjectTable?: Maybe<Scalars['Any']['output']>;
  recoveryGoods: Scalars['Boolean']['output'];
  recoveryOrders: Scalars['Boolean']['output'];
  recoveryProjectTableFields: Scalars['Boolean']['output'];
  recoveryProjectTables: Scalars['Boolean']['output'];
  recoveryProjects: Scalars['Boolean']['output'];
  recoveryUploadFiles: Scalars['Boolean']['output'];
  recoveryUsers: Scalars['Boolean']['output'];
  updateGood: Good;
  updateOrder: Order;
  updateProject: Project;
  updateProjectTable: ProjectTable;
  updateProjectTableField: ProjectTableField;
  updateUploadFile: UploadFile;
  updateUser: User;
  upload?: Maybe<Scalars['Any']['output']>;
};


export type MutationChatGptArgs = {
  text: Scalars['String']['input'];
};


export type MutationCreateGoodArgs = {
  input: GoodCreateInput;
};


export type MutationCreateOrderArgs = {
  input: OrderCreateInput;
};


export type MutationCreateProjectArgs = {
  input: ProjectCreateInput;
};


export type MutationCreateProjectTableArgs = {
  input: ProjectTableCreateInput;
};


export type MutationCreateProjectTableFieldArgs = {
  input: ProjectTableFieldCreateInput;
};


export type MutationCreateUploadFileArgs = {
  input: UploadFileCreateInput;
};


export type MutationCreateUserArgs = {
  input: UserCreateInput;
};


export type MutationDeleteGoodsArgs = {
  id: Array<Scalars['ID']['input']>;
  unscoped?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteOrdersArgs = {
  id: Array<Scalars['ID']['input']>;
  unscoped?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteProjectTableFieldsArgs = {
  id: Array<Scalars['ID']['input']>;
  unscoped?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteProjectTablesArgs = {
  id: Array<Scalars['ID']['input']>;
  unscoped?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteProjectsArgs = {
  id: Array<Scalars['ID']['input']>;
  unscoped?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteUploadFilesArgs = {
  id: Array<Scalars['ID']['input']>;
  unscoped?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteUsersArgs = {
  id: Array<Scalars['ID']['input']>;
  unscoped?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationGptBuildProjectArgs = {
  id: Scalars['String']['input'];
};


export type MutationGptCreateProjectArgs = {
  content: Scalars['String']['input'];
};


export type MutationGptCreateProjectTableArgs = {
  content: Scalars['String']['input'];
  id: Scalars['String']['input'];
};


export type MutationGptUpdateProjectTableArgs = {
  content: Scalars['String']['input'];
  id: Scalars['String']['input'];
};


export type MutationRecoveryGoodsArgs = {
  id: Array<Scalars['ID']['input']>;
};


export type MutationRecoveryOrdersArgs = {
  id: Array<Scalars['ID']['input']>;
};


export type MutationRecoveryProjectTableFieldsArgs = {
  id: Array<Scalars['ID']['input']>;
};


export type MutationRecoveryProjectTablesArgs = {
  id: Array<Scalars['ID']['input']>;
};


export type MutationRecoveryProjectsArgs = {
  id: Array<Scalars['ID']['input']>;
};


export type MutationRecoveryUploadFilesArgs = {
  id: Array<Scalars['ID']['input']>;
};


export type MutationRecoveryUsersArgs = {
  id: Array<Scalars['ID']['input']>;
};


export type MutationUpdateGoodArgs = {
  id: Scalars['ID']['input'];
  input: GoodUpdateInput;
};


export type MutationUpdateOrderArgs = {
  id: Scalars['ID']['input'];
  input: OrderUpdateInput;
};


export type MutationUpdateProjectArgs = {
  id: Scalars['ID']['input'];
  input: ProjectUpdateInput;
};


export type MutationUpdateProjectTableArgs = {
  id: Scalars['ID']['input'];
  input: ProjectTableUpdateInput;
};


export type MutationUpdateProjectTableFieldArgs = {
  id: Scalars['ID']['input'];
  input: ProjectTableFieldUpdateInput;
};


export type MutationUpdateUploadFileArgs = {
  id: Scalars['ID']['input'];
  input: UploadFileUpdateInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID']['input'];
  input: UserUpdateInput;
};


export type MutationUploadArgs = {
  files: Array<FileField>;
};

export enum ObjectSortType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Order = {
  __typename?: 'Order';
  createdAt: Scalars['Int']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  isDelete?: Maybe<Scalars['Int']['output']>;
  orderNumber?: Maybe<Scalars['String']['output']>;
  orderQuantity?: Maybe<Scalars['Int']['output']>;
  recipient?: Maybe<Scalars['String']['output']>;
  shippingAddress?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  weight?: Maybe<Scalars['Int']['output']>;
};

export type OrderCreateInput = {
  isDelete?: InputMaybe<Scalars['Int']['input']>;
  orderNumber?: InputMaybe<Scalars['String']['input']>;
  orderQuantity?: InputMaybe<Scalars['Int']['input']>;
  recipient?: InputMaybe<Scalars['String']['input']>;
  shippingAddress?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['Int']['input']>;
  weight?: InputMaybe<Scalars['Int']['input']>;
};

export type OrderFilterType = {
  AND?: InputMaybe<Array<OrderFilterType>>;
  OR?: InputMaybe<Array<OrderFilterType>>;
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_lte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_ne?: InputMaybe<Scalars['Int']['input']>;
  createdAt_null?: InputMaybe<Scalars['Boolean']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  createdBy_gt?: InputMaybe<Scalars['ID']['input']>;
  createdBy_gte?: InputMaybe<Scalars['ID']['input']>;
  createdBy_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  createdBy_lt?: InputMaybe<Scalars['ID']['input']>;
  createdBy_lte?: InputMaybe<Scalars['ID']['input']>;
  createdBy_ne?: InputMaybe<Scalars['ID']['input']>;
  createdBy_null?: InputMaybe<Scalars['Boolean']['input']>;
  deletedAt?: InputMaybe<Scalars['Int']['input']>;
  deletedAt_gt?: InputMaybe<Scalars['Int']['input']>;
  deletedAt_gte?: InputMaybe<Scalars['Int']['input']>;
  deletedAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  deletedAt_lt?: InputMaybe<Scalars['Int']['input']>;
  deletedAt_lte?: InputMaybe<Scalars['Int']['input']>;
  deletedAt_ne?: InputMaybe<Scalars['Int']['input']>;
  deletedAt_null?: InputMaybe<Scalars['Boolean']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  deletedBy_gt?: InputMaybe<Scalars['ID']['input']>;
  deletedBy_gte?: InputMaybe<Scalars['ID']['input']>;
  deletedBy_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  deletedBy_lt?: InputMaybe<Scalars['ID']['input']>;
  deletedBy_lte?: InputMaybe<Scalars['ID']['input']>;
  deletedBy_ne?: InputMaybe<Scalars['ID']['input']>;
  deletedBy_null?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_ne?: InputMaybe<Scalars['ID']['input']>;
  id_null?: InputMaybe<Scalars['Boolean']['input']>;
  isDelete?: InputMaybe<Scalars['Int']['input']>;
  isDelete_gt?: InputMaybe<Scalars['Int']['input']>;
  isDelete_gte?: InputMaybe<Scalars['Int']['input']>;
  isDelete_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  isDelete_lt?: InputMaybe<Scalars['Int']['input']>;
  isDelete_lte?: InputMaybe<Scalars['Int']['input']>;
  isDelete_ne?: InputMaybe<Scalars['Int']['input']>;
  isDelete_null?: InputMaybe<Scalars['Boolean']['input']>;
  orderNumber?: InputMaybe<Scalars['String']['input']>;
  orderNumber_gt?: InputMaybe<Scalars['String']['input']>;
  orderNumber_gte?: InputMaybe<Scalars['String']['input']>;
  orderNumber_in?: InputMaybe<Array<Scalars['String']['input']>>;
  orderNumber_like?: InputMaybe<Scalars['String']['input']>;
  orderNumber_lt?: InputMaybe<Scalars['String']['input']>;
  orderNumber_lte?: InputMaybe<Scalars['String']['input']>;
  orderNumber_ne?: InputMaybe<Scalars['String']['input']>;
  orderNumber_null?: InputMaybe<Scalars['Boolean']['input']>;
  orderNumber_prefix?: InputMaybe<Scalars['String']['input']>;
  orderNumber_suffix?: InputMaybe<Scalars['String']['input']>;
  orderQuantity?: InputMaybe<Scalars['Int']['input']>;
  orderQuantity_gt?: InputMaybe<Scalars['Int']['input']>;
  orderQuantity_gte?: InputMaybe<Scalars['Int']['input']>;
  orderQuantity_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  orderQuantity_lt?: InputMaybe<Scalars['Int']['input']>;
  orderQuantity_lte?: InputMaybe<Scalars['Int']['input']>;
  orderQuantity_ne?: InputMaybe<Scalars['Int']['input']>;
  orderQuantity_null?: InputMaybe<Scalars['Boolean']['input']>;
  recipient?: InputMaybe<Scalars['String']['input']>;
  recipient_gt?: InputMaybe<Scalars['String']['input']>;
  recipient_gte?: InputMaybe<Scalars['String']['input']>;
  recipient_in?: InputMaybe<Array<Scalars['String']['input']>>;
  recipient_like?: InputMaybe<Scalars['String']['input']>;
  recipient_lt?: InputMaybe<Scalars['String']['input']>;
  recipient_lte?: InputMaybe<Scalars['String']['input']>;
  recipient_ne?: InputMaybe<Scalars['String']['input']>;
  recipient_null?: InputMaybe<Scalars['Boolean']['input']>;
  recipient_prefix?: InputMaybe<Scalars['String']['input']>;
  recipient_suffix?: InputMaybe<Scalars['String']['input']>;
  shippingAddress?: InputMaybe<Scalars['String']['input']>;
  shippingAddress_gt?: InputMaybe<Scalars['String']['input']>;
  shippingAddress_gte?: InputMaybe<Scalars['String']['input']>;
  shippingAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
  shippingAddress_like?: InputMaybe<Scalars['String']['input']>;
  shippingAddress_lt?: InputMaybe<Scalars['String']['input']>;
  shippingAddress_lte?: InputMaybe<Scalars['String']['input']>;
  shippingAddress_ne?: InputMaybe<Scalars['String']['input']>;
  shippingAddress_null?: InputMaybe<Scalars['Boolean']['input']>;
  shippingAddress_prefix?: InputMaybe<Scalars['String']['input']>;
  shippingAddress_suffix?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['Int']['input']>;
  state_gt?: InputMaybe<Scalars['Int']['input']>;
  state_gte?: InputMaybe<Scalars['Int']['input']>;
  state_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  state_lt?: InputMaybe<Scalars['Int']['input']>;
  state_lte?: InputMaybe<Scalars['Int']['input']>;
  state_ne?: InputMaybe<Scalars['Int']['input']>;
  state_null?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  updatedAt_lt?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_ne?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_null?: InputMaybe<Scalars['Boolean']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  updatedBy_gt?: InputMaybe<Scalars['ID']['input']>;
  updatedBy_gte?: InputMaybe<Scalars['ID']['input']>;
  updatedBy_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  updatedBy_lt?: InputMaybe<Scalars['ID']['input']>;
  updatedBy_lte?: InputMaybe<Scalars['ID']['input']>;
  updatedBy_ne?: InputMaybe<Scalars['ID']['input']>;
  updatedBy_null?: InputMaybe<Scalars['Boolean']['input']>;
  weight?: InputMaybe<Scalars['Int']['input']>;
  weight_gt?: InputMaybe<Scalars['Int']['input']>;
  weight_gte?: InputMaybe<Scalars['Int']['input']>;
  weight_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  weight_lt?: InputMaybe<Scalars['Int']['input']>;
  weight_lte?: InputMaybe<Scalars['Int']['input']>;
  weight_ne?: InputMaybe<Scalars['Int']['input']>;
  weight_null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrderRelationship = {
  id?: InputMaybe<Scalars['ID']['input']>;
  isDelete?: InputMaybe<Scalars['Int']['input']>;
  orderNumber?: InputMaybe<Scalars['String']['input']>;
  orderQuantity?: InputMaybe<Scalars['Int']['input']>;
  recipient?: InputMaybe<Scalars['String']['input']>;
  shippingAddress?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['Int']['input']>;
  weight?: InputMaybe<Scalars['Int']['input']>;
};

export type OrderResultType = {
  __typename?: 'OrderResultType';
  current_page: Scalars['Int']['output'];
  data: Array<Order>;
  per_page: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  total_page: Scalars['Int']['output'];
};

export type OrderSortType = {
  createdAt?: InputMaybe<ObjectSortType>;
  createdBy?: InputMaybe<ObjectSortType>;
  deletedAt?: InputMaybe<ObjectSortType>;
  deletedBy?: InputMaybe<ObjectSortType>;
  id?: InputMaybe<ObjectSortType>;
  isDelete?: InputMaybe<ObjectSortType>;
  orderNumber?: InputMaybe<ObjectSortType>;
  orderQuantity?: InputMaybe<ObjectSortType>;
  recipient?: InputMaybe<ObjectSortType>;
  shippingAddress?: InputMaybe<ObjectSortType>;
  state?: InputMaybe<ObjectSortType>;
  updatedAt?: InputMaybe<ObjectSortType>;
  updatedBy?: InputMaybe<ObjectSortType>;
  weight?: InputMaybe<ObjectSortType>;
};

export type OrderUpdateInput = {
  isDelete?: InputMaybe<Scalars['Int']['input']>;
  orderNumber?: InputMaybe<Scalars['String']['input']>;
  orderQuantity?: InputMaybe<Scalars['Int']['input']>;
  recipient?: InputMaybe<Scalars['String']['input']>;
  shippingAddress?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['Int']['input']>;
  weight?: InputMaybe<Scalars['Int']['input']>;
};

export type Project = {
  __typename?: 'Project';
  createdAt: Scalars['Int']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  desc?: Maybe<Scalars['String']['output']>;
  dirPath: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isDelete?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  projectName: Scalars['String']['output'];
  state?: Maybe<Scalars['Int']['output']>;
  tables: Array<ProjectTable>;
  tablesIds?: Maybe<Array<Scalars['ID']['output']>>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  weight?: Maybe<Scalars['Int']['output']>;
};

export type ProjectCreateInput = {
  desc?: InputMaybe<Scalars['String']['input']>;
  dirPath: Scalars['String']['input'];
  isDelete?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  projectName: Scalars['String']['input'];
  state?: InputMaybe<Scalars['Int']['input']>;
  tables?: InputMaybe<Array<InputMaybe<ProjectTableRelationship>>>;
  tablesIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  weight?: InputMaybe<Scalars['Int']['input']>;
};

export type ProjectFilterType = {
  AND?: InputMaybe<Array<ProjectFilterType>>;
  OR?: InputMaybe<Array<ProjectFilterType>>;
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_lte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_ne?: InputMaybe<Scalars['Int']['input']>;
  createdAt_null?: InputMaybe<Scalars['Boolean']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  createdBy_gt?: InputMaybe<Scalars['ID']['input']>;
  createdBy_gte?: InputMaybe<Scalars['ID']['input']>;
  createdBy_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  createdBy_lt?: InputMaybe<Scalars['ID']['input']>;
  createdBy_lte?: InputMaybe<Scalars['ID']['input']>;
  createdBy_ne?: InputMaybe<Scalars['ID']['input']>;
  createdBy_null?: InputMaybe<Scalars['Boolean']['input']>;
  deletedAt?: InputMaybe<Scalars['Int']['input']>;
  deletedAt_gt?: InputMaybe<Scalars['Int']['input']>;
  deletedAt_gte?: InputMaybe<Scalars['Int']['input']>;
  deletedAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  deletedAt_lt?: InputMaybe<Scalars['Int']['input']>;
  deletedAt_lte?: InputMaybe<Scalars['Int']['input']>;
  deletedAt_ne?: InputMaybe<Scalars['Int']['input']>;
  deletedAt_null?: InputMaybe<Scalars['Boolean']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  deletedBy_gt?: InputMaybe<Scalars['ID']['input']>;
  deletedBy_gte?: InputMaybe<Scalars['ID']['input']>;
  deletedBy_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  deletedBy_lt?: InputMaybe<Scalars['ID']['input']>;
  deletedBy_lte?: InputMaybe<Scalars['ID']['input']>;
  deletedBy_ne?: InputMaybe<Scalars['ID']['input']>;
  deletedBy_null?: InputMaybe<Scalars['Boolean']['input']>;
  desc?: InputMaybe<Scalars['String']['input']>;
  desc_gt?: InputMaybe<Scalars['String']['input']>;
  desc_gte?: InputMaybe<Scalars['String']['input']>;
  desc_in?: InputMaybe<Array<Scalars['String']['input']>>;
  desc_like?: InputMaybe<Scalars['String']['input']>;
  desc_lt?: InputMaybe<Scalars['String']['input']>;
  desc_lte?: InputMaybe<Scalars['String']['input']>;
  desc_ne?: InputMaybe<Scalars['String']['input']>;
  desc_null?: InputMaybe<Scalars['Boolean']['input']>;
  desc_prefix?: InputMaybe<Scalars['String']['input']>;
  desc_suffix?: InputMaybe<Scalars['String']['input']>;
  dirPath?: InputMaybe<Scalars['String']['input']>;
  dirPath_gt?: InputMaybe<Scalars['String']['input']>;
  dirPath_gte?: InputMaybe<Scalars['String']['input']>;
  dirPath_in?: InputMaybe<Array<Scalars['String']['input']>>;
  dirPath_like?: InputMaybe<Scalars['String']['input']>;
  dirPath_lt?: InputMaybe<Scalars['String']['input']>;
  dirPath_lte?: InputMaybe<Scalars['String']['input']>;
  dirPath_ne?: InputMaybe<Scalars['String']['input']>;
  dirPath_null?: InputMaybe<Scalars['Boolean']['input']>;
  dirPath_prefix?: InputMaybe<Scalars['String']['input']>;
  dirPath_suffix?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_ne?: InputMaybe<Scalars['ID']['input']>;
  id_null?: InputMaybe<Scalars['Boolean']['input']>;
  isDelete?: InputMaybe<Scalars['Int']['input']>;
  isDelete_gt?: InputMaybe<Scalars['Int']['input']>;
  isDelete_gte?: InputMaybe<Scalars['Int']['input']>;
  isDelete_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  isDelete_lt?: InputMaybe<Scalars['Int']['input']>;
  isDelete_lte?: InputMaybe<Scalars['Int']['input']>;
  isDelete_ne?: InputMaybe<Scalars['Int']['input']>;
  isDelete_null?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_like?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_ne?: InputMaybe<Scalars['String']['input']>;
  name_null?: InputMaybe<Scalars['Boolean']['input']>;
  name_prefix?: InputMaybe<Scalars['String']['input']>;
  name_suffix?: InputMaybe<Scalars['String']['input']>;
  projectName?: InputMaybe<Scalars['String']['input']>;
  projectName_gt?: InputMaybe<Scalars['String']['input']>;
  projectName_gte?: InputMaybe<Scalars['String']['input']>;
  projectName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  projectName_like?: InputMaybe<Scalars['String']['input']>;
  projectName_lt?: InputMaybe<Scalars['String']['input']>;
  projectName_lte?: InputMaybe<Scalars['String']['input']>;
  projectName_ne?: InputMaybe<Scalars['String']['input']>;
  projectName_null?: InputMaybe<Scalars['Boolean']['input']>;
  projectName_prefix?: InputMaybe<Scalars['String']['input']>;
  projectName_suffix?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['Int']['input']>;
  state_gt?: InputMaybe<Scalars['Int']['input']>;
  state_gte?: InputMaybe<Scalars['Int']['input']>;
  state_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  state_lt?: InputMaybe<Scalars['Int']['input']>;
  state_lte?: InputMaybe<Scalars['Int']['input']>;
  state_ne?: InputMaybe<Scalars['Int']['input']>;
  state_null?: InputMaybe<Scalars['Boolean']['input']>;
  tables?: InputMaybe<ProjectTableFilterType>;
  updatedAt?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  updatedAt_lt?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_ne?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_null?: InputMaybe<Scalars['Boolean']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  updatedBy_gt?: InputMaybe<Scalars['ID']['input']>;
  updatedBy_gte?: InputMaybe<Scalars['ID']['input']>;
  updatedBy_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  updatedBy_lt?: InputMaybe<Scalars['ID']['input']>;
  updatedBy_lte?: InputMaybe<Scalars['ID']['input']>;
  updatedBy_ne?: InputMaybe<Scalars['ID']['input']>;
  updatedBy_null?: InputMaybe<Scalars['Boolean']['input']>;
  weight?: InputMaybe<Scalars['Int']['input']>;
  weight_gt?: InputMaybe<Scalars['Int']['input']>;
  weight_gte?: InputMaybe<Scalars['Int']['input']>;
  weight_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  weight_lt?: InputMaybe<Scalars['Int']['input']>;
  weight_lte?: InputMaybe<Scalars['Int']['input']>;
  weight_ne?: InputMaybe<Scalars['Int']['input']>;
  weight_null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProjectRelationship = {
  desc?: InputMaybe<Scalars['String']['input']>;
  dirPath: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  isDelete?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  projectName: Scalars['String']['input'];
  state?: InputMaybe<Scalars['Int']['input']>;
  weight?: InputMaybe<Scalars['Int']['input']>;
};

export type ProjectResultType = {
  __typename?: 'ProjectResultType';
  current_page: Scalars['Int']['output'];
  data: Array<Project>;
  per_page: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  total_page: Scalars['Int']['output'];
};

export type ProjectSortType = {
  createdAt?: InputMaybe<ObjectSortType>;
  createdBy?: InputMaybe<ObjectSortType>;
  deletedAt?: InputMaybe<ObjectSortType>;
  deletedBy?: InputMaybe<ObjectSortType>;
  desc?: InputMaybe<ObjectSortType>;
  dirPath?: InputMaybe<ObjectSortType>;
  id?: InputMaybe<ObjectSortType>;
  isDelete?: InputMaybe<ObjectSortType>;
  name?: InputMaybe<ObjectSortType>;
  projectName?: InputMaybe<ObjectSortType>;
  state?: InputMaybe<ObjectSortType>;
  tables?: InputMaybe<ProjectTableSortType>;
  tablesIds?: InputMaybe<ObjectSortType>;
  updatedAt?: InputMaybe<ObjectSortType>;
  updatedBy?: InputMaybe<ObjectSortType>;
  weight?: InputMaybe<ObjectSortType>;
};

export type ProjectTable = {
  __typename?: 'ProjectTable';
  createdAt: Scalars['Int']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  fields: Array<ProjectTableField>;
  fieldsIds?: Maybe<Array<Scalars['ID']['output']>>;
  id: Scalars['ID']['output'];
  isAuth?: Maybe<Scalars['Int']['output']>;
  isDelete?: Maybe<Scalars['Int']['output']>;
  isNav?: Maybe<Scalars['Int']['output']>;
  project: Project;
  projectId?: Maybe<Scalars['ID']['output']>;
  state?: Maybe<Scalars['Int']['output']>;
  tableName: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Int']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  weight?: Maybe<Scalars['Int']['output']>;
};

export type ProjectTableCreateInput = {
  fields?: InputMaybe<Array<InputMaybe<ProjectTableFieldRelationship>>>;
  fieldsIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  isAuth?: InputMaybe<Scalars['Int']['input']>;
  isDelete?: InputMaybe<Scalars['Int']['input']>;
  isNav?: InputMaybe<Scalars['Int']['input']>;
  project?: InputMaybe<ProjectRelationship>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
  state?: InputMaybe<Scalars['Int']['input']>;
  tableName: Scalars['String']['input'];
  title: Scalars['String']['input'];
  weight?: InputMaybe<Scalars['Int']['input']>;
};

export type ProjectTableField = {
  __typename?: 'ProjectTableField';
  comment?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Int']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  index?: Maybe<Scalars['String']['output']>;
  isDelete?: Maybe<Scalars['Int']['output']>;
  len?: Maybe<Scalars['String']['output']>;
  model: Scalars['String']['output'];
  name: Scalars['String']['output'];
  required?: Maybe<Scalars['Int']['output']>;
  state?: Maybe<Scalars['Int']['output']>;
  table: ProjectTable;
  tableId?: Maybe<Scalars['ID']['output']>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Int']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  validator?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
  weight?: Maybe<Scalars['Int']['output']>;
};

export type ProjectTableFieldCreateInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  index?: InputMaybe<Scalars['String']['input']>;
  isDelete?: InputMaybe<Scalars['Int']['input']>;
  len?: InputMaybe<Scalars['String']['input']>;
  model: Scalars['String']['input'];
  name: Scalars['String']['input'];
  required?: InputMaybe<Scalars['Int']['input']>;
  state?: InputMaybe<Scalars['Int']['input']>;
  table?: InputMaybe<ProjectTableRelationship>;
  tableId?: InputMaybe<Scalars['ID']['input']>;
  title: Scalars['String']['input'];
  validator?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['Int']['input']>;
};

export type ProjectTableFieldFilterType = {
  AND?: InputMaybe<Array<ProjectTableFieldFilterType>>;
  OR?: InputMaybe<Array<ProjectTableFieldFilterType>>;
  comment?: InputMaybe<Scalars['String']['input']>;
  comment_gt?: InputMaybe<Scalars['String']['input']>;
  comment_gte?: InputMaybe<Scalars['String']['input']>;
  comment_in?: InputMaybe<Array<Scalars['String']['input']>>;
  comment_like?: InputMaybe<Scalars['String']['input']>;
  comment_lt?: InputMaybe<Scalars['String']['input']>;
  comment_lte?: InputMaybe<Scalars['String']['input']>;
  comment_ne?: InputMaybe<Scalars['String']['input']>;
  comment_null?: InputMaybe<Scalars['Boolean']['input']>;
  comment_prefix?: InputMaybe<Scalars['String']['input']>;
  comment_suffix?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_lte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_ne?: InputMaybe<Scalars['Int']['input']>;
  createdAt_null?: InputMaybe<Scalars['Boolean']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  createdBy_gt?: InputMaybe<Scalars['ID']['input']>;
  createdBy_gte?: InputMaybe<Scalars['ID']['input']>;
  createdBy_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  createdBy_lt?: InputMaybe<Scalars['ID']['input']>;
  createdBy_lte?: InputMaybe<Scalars['ID']['input']>;
  createdBy_ne?: InputMaybe<Scalars['ID']['input']>;
  createdBy_null?: InputMaybe<Scalars['Boolean']['input']>;
  deletedAt?: InputMaybe<Scalars['Int']['input']>;
  deletedAt_gt?: InputMaybe<Scalars['Int']['input']>;
  deletedAt_gte?: InputMaybe<Scalars['Int']['input']>;
  deletedAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  deletedAt_lt?: InputMaybe<Scalars['Int']['input']>;
  deletedAt_lte?: InputMaybe<Scalars['Int']['input']>;
  deletedAt_ne?: InputMaybe<Scalars['Int']['input']>;
  deletedAt_null?: InputMaybe<Scalars['Boolean']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  deletedBy_gt?: InputMaybe<Scalars['ID']['input']>;
  deletedBy_gte?: InputMaybe<Scalars['ID']['input']>;
  deletedBy_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  deletedBy_lt?: InputMaybe<Scalars['ID']['input']>;
  deletedBy_lte?: InputMaybe<Scalars['ID']['input']>;
  deletedBy_ne?: InputMaybe<Scalars['ID']['input']>;
  deletedBy_null?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_ne?: InputMaybe<Scalars['ID']['input']>;
  id_null?: InputMaybe<Scalars['Boolean']['input']>;
  index?: InputMaybe<Scalars['String']['input']>;
  index_gt?: InputMaybe<Scalars['String']['input']>;
  index_gte?: InputMaybe<Scalars['String']['input']>;
  index_in?: InputMaybe<Array<Scalars['String']['input']>>;
  index_like?: InputMaybe<Scalars['String']['input']>;
  index_lt?: InputMaybe<Scalars['String']['input']>;
  index_lte?: InputMaybe<Scalars['String']['input']>;
  index_ne?: InputMaybe<Scalars['String']['input']>;
  index_null?: InputMaybe<Scalars['Boolean']['input']>;
  index_prefix?: InputMaybe<Scalars['String']['input']>;
  index_suffix?: InputMaybe<Scalars['String']['input']>;
  isDelete?: InputMaybe<Scalars['Int']['input']>;
  isDelete_gt?: InputMaybe<Scalars['Int']['input']>;
  isDelete_gte?: InputMaybe<Scalars['Int']['input']>;
  isDelete_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  isDelete_lt?: InputMaybe<Scalars['Int']['input']>;
  isDelete_lte?: InputMaybe<Scalars['Int']['input']>;
  isDelete_ne?: InputMaybe<Scalars['Int']['input']>;
  isDelete_null?: InputMaybe<Scalars['Boolean']['input']>;
  len?: InputMaybe<Scalars['String']['input']>;
  len_gt?: InputMaybe<Scalars['String']['input']>;
  len_gte?: InputMaybe<Scalars['String']['input']>;
  len_in?: InputMaybe<Array<Scalars['String']['input']>>;
  len_like?: InputMaybe<Scalars['String']['input']>;
  len_lt?: InputMaybe<Scalars['String']['input']>;
  len_lte?: InputMaybe<Scalars['String']['input']>;
  len_ne?: InputMaybe<Scalars['String']['input']>;
  len_null?: InputMaybe<Scalars['Boolean']['input']>;
  len_prefix?: InputMaybe<Scalars['String']['input']>;
  len_suffix?: InputMaybe<Scalars['String']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  model_gt?: InputMaybe<Scalars['String']['input']>;
  model_gte?: InputMaybe<Scalars['String']['input']>;
  model_in?: InputMaybe<Array<Scalars['String']['input']>>;
  model_like?: InputMaybe<Scalars['String']['input']>;
  model_lt?: InputMaybe<Scalars['String']['input']>;
  model_lte?: InputMaybe<Scalars['String']['input']>;
  model_ne?: InputMaybe<Scalars['String']['input']>;
  model_null?: InputMaybe<Scalars['Boolean']['input']>;
  model_prefix?: InputMaybe<Scalars['String']['input']>;
  model_suffix?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_like?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_ne?: InputMaybe<Scalars['String']['input']>;
  name_null?: InputMaybe<Scalars['Boolean']['input']>;
  name_prefix?: InputMaybe<Scalars['String']['input']>;
  name_suffix?: InputMaybe<Scalars['String']['input']>;
  required?: InputMaybe<Scalars['Int']['input']>;
  required_gt?: InputMaybe<Scalars['Int']['input']>;
  required_gte?: InputMaybe<Scalars['Int']['input']>;
  required_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  required_lt?: InputMaybe<Scalars['Int']['input']>;
  required_lte?: InputMaybe<Scalars['Int']['input']>;
  required_ne?: InputMaybe<Scalars['Int']['input']>;
  required_null?: InputMaybe<Scalars['Boolean']['input']>;
  state?: InputMaybe<Scalars['Int']['input']>;
  state_gt?: InputMaybe<Scalars['Int']['input']>;
  state_gte?: InputMaybe<Scalars['Int']['input']>;
  state_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  state_lt?: InputMaybe<Scalars['Int']['input']>;
  state_lte?: InputMaybe<Scalars['Int']['input']>;
  state_ne?: InputMaybe<Scalars['Int']['input']>;
  state_null?: InputMaybe<Scalars['Boolean']['input']>;
  table?: InputMaybe<ProjectTableFilterType>;
  tableId?: InputMaybe<Scalars['ID']['input']>;
  tableId_gt?: InputMaybe<Scalars['ID']['input']>;
  tableId_gte?: InputMaybe<Scalars['ID']['input']>;
  tableId_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  tableId_lt?: InputMaybe<Scalars['ID']['input']>;
  tableId_lte?: InputMaybe<Scalars['ID']['input']>;
  tableId_ne?: InputMaybe<Scalars['ID']['input']>;
  tableId_null?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_gt?: InputMaybe<Scalars['String']['input']>;
  title_gte?: InputMaybe<Scalars['String']['input']>;
  title_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_like?: InputMaybe<Scalars['String']['input']>;
  title_lt?: InputMaybe<Scalars['String']['input']>;
  title_lte?: InputMaybe<Scalars['String']['input']>;
  title_ne?: InputMaybe<Scalars['String']['input']>;
  title_null?: InputMaybe<Scalars['Boolean']['input']>;
  title_prefix?: InputMaybe<Scalars['String']['input']>;
  title_suffix?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  updatedAt_lt?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_ne?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_null?: InputMaybe<Scalars['Boolean']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  updatedBy_gt?: InputMaybe<Scalars['ID']['input']>;
  updatedBy_gte?: InputMaybe<Scalars['ID']['input']>;
  updatedBy_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  updatedBy_lt?: InputMaybe<Scalars['ID']['input']>;
  updatedBy_lte?: InputMaybe<Scalars['ID']['input']>;
  updatedBy_ne?: InputMaybe<Scalars['ID']['input']>;
  updatedBy_null?: InputMaybe<Scalars['Boolean']['input']>;
  validator?: InputMaybe<Scalars['String']['input']>;
  validator_gt?: InputMaybe<Scalars['String']['input']>;
  validator_gte?: InputMaybe<Scalars['String']['input']>;
  validator_in?: InputMaybe<Array<Scalars['String']['input']>>;
  validator_like?: InputMaybe<Scalars['String']['input']>;
  validator_lt?: InputMaybe<Scalars['String']['input']>;
  validator_lte?: InputMaybe<Scalars['String']['input']>;
  validator_ne?: InputMaybe<Scalars['String']['input']>;
  validator_null?: InputMaybe<Scalars['Boolean']['input']>;
  validator_prefix?: InputMaybe<Scalars['String']['input']>;
  validator_suffix?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  value_gt?: InputMaybe<Scalars['String']['input']>;
  value_gte?: InputMaybe<Scalars['String']['input']>;
  value_in?: InputMaybe<Array<Scalars['String']['input']>>;
  value_like?: InputMaybe<Scalars['String']['input']>;
  value_lt?: InputMaybe<Scalars['String']['input']>;
  value_lte?: InputMaybe<Scalars['String']['input']>;
  value_ne?: InputMaybe<Scalars['String']['input']>;
  value_null?: InputMaybe<Scalars['Boolean']['input']>;
  value_prefix?: InputMaybe<Scalars['String']['input']>;
  value_suffix?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['Int']['input']>;
  weight_gt?: InputMaybe<Scalars['Int']['input']>;
  weight_gte?: InputMaybe<Scalars['Int']['input']>;
  weight_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  weight_lt?: InputMaybe<Scalars['Int']['input']>;
  weight_lte?: InputMaybe<Scalars['Int']['input']>;
  weight_ne?: InputMaybe<Scalars['Int']['input']>;
  weight_null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProjectTableFieldRelationship = {
  comment?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  index?: InputMaybe<Scalars['String']['input']>;
  isDelete?: InputMaybe<Scalars['Int']['input']>;
  len?: InputMaybe<Scalars['String']['input']>;
  model: Scalars['String']['input'];
  name: Scalars['String']['input'];
  required?: InputMaybe<Scalars['Int']['input']>;
  state?: InputMaybe<Scalars['Int']['input']>;
  tableId?: InputMaybe<Scalars['ID']['input']>;
  title: Scalars['String']['input'];
  validator?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['Int']['input']>;
};

export type ProjectTableFieldResultType = {
  __typename?: 'ProjectTableFieldResultType';
  current_page: Scalars['Int']['output'];
  data: Array<ProjectTableField>;
  per_page: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  total_page: Scalars['Int']['output'];
};

export type ProjectTableFieldSortType = {
  comment?: InputMaybe<ObjectSortType>;
  createdAt?: InputMaybe<ObjectSortType>;
  createdBy?: InputMaybe<ObjectSortType>;
  deletedAt?: InputMaybe<ObjectSortType>;
  deletedBy?: InputMaybe<ObjectSortType>;
  id?: InputMaybe<ObjectSortType>;
  index?: InputMaybe<ObjectSortType>;
  isDelete?: InputMaybe<ObjectSortType>;
  len?: InputMaybe<ObjectSortType>;
  model?: InputMaybe<ObjectSortType>;
  name?: InputMaybe<ObjectSortType>;
  required?: InputMaybe<ObjectSortType>;
  state?: InputMaybe<ObjectSortType>;
  table?: InputMaybe<ProjectTableSortType>;
  tableId?: InputMaybe<ObjectSortType>;
  title?: InputMaybe<ObjectSortType>;
  updatedAt?: InputMaybe<ObjectSortType>;
  updatedBy?: InputMaybe<ObjectSortType>;
  validator?: InputMaybe<ObjectSortType>;
  value?: InputMaybe<ObjectSortType>;
  weight?: InputMaybe<ObjectSortType>;
};

export type ProjectTableFieldUpdateInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  index?: InputMaybe<Scalars['String']['input']>;
  isDelete?: InputMaybe<Scalars['Int']['input']>;
  len?: InputMaybe<Scalars['String']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  required?: InputMaybe<Scalars['Int']['input']>;
  state?: InputMaybe<Scalars['Int']['input']>;
  table?: InputMaybe<ProjectTableRelationship>;
  tableId?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  validator?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['Int']['input']>;
};

export type ProjectTableFilterType = {
  AND?: InputMaybe<Array<ProjectTableFilterType>>;
  OR?: InputMaybe<Array<ProjectTableFilterType>>;
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_lte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_ne?: InputMaybe<Scalars['Int']['input']>;
  createdAt_null?: InputMaybe<Scalars['Boolean']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  createdBy_gt?: InputMaybe<Scalars['ID']['input']>;
  createdBy_gte?: InputMaybe<Scalars['ID']['input']>;
  createdBy_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  createdBy_lt?: InputMaybe<Scalars['ID']['input']>;
  createdBy_lte?: InputMaybe<Scalars['ID']['input']>;
  createdBy_ne?: InputMaybe<Scalars['ID']['input']>;
  createdBy_null?: InputMaybe<Scalars['Boolean']['input']>;
  deletedAt?: InputMaybe<Scalars['Int']['input']>;
  deletedAt_gt?: InputMaybe<Scalars['Int']['input']>;
  deletedAt_gte?: InputMaybe<Scalars['Int']['input']>;
  deletedAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  deletedAt_lt?: InputMaybe<Scalars['Int']['input']>;
  deletedAt_lte?: InputMaybe<Scalars['Int']['input']>;
  deletedAt_ne?: InputMaybe<Scalars['Int']['input']>;
  deletedAt_null?: InputMaybe<Scalars['Boolean']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  deletedBy_gt?: InputMaybe<Scalars['ID']['input']>;
  deletedBy_gte?: InputMaybe<Scalars['ID']['input']>;
  deletedBy_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  deletedBy_lt?: InputMaybe<Scalars['ID']['input']>;
  deletedBy_lte?: InputMaybe<Scalars['ID']['input']>;
  deletedBy_ne?: InputMaybe<Scalars['ID']['input']>;
  deletedBy_null?: InputMaybe<Scalars['Boolean']['input']>;
  fields?: InputMaybe<ProjectTableFieldFilterType>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_ne?: InputMaybe<Scalars['ID']['input']>;
  id_null?: InputMaybe<Scalars['Boolean']['input']>;
  isAuth?: InputMaybe<Scalars['Int']['input']>;
  isAuth_gt?: InputMaybe<Scalars['Int']['input']>;
  isAuth_gte?: InputMaybe<Scalars['Int']['input']>;
  isAuth_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  isAuth_lt?: InputMaybe<Scalars['Int']['input']>;
  isAuth_lte?: InputMaybe<Scalars['Int']['input']>;
  isAuth_ne?: InputMaybe<Scalars['Int']['input']>;
  isAuth_null?: InputMaybe<Scalars['Boolean']['input']>;
  isDelete?: InputMaybe<Scalars['Int']['input']>;
  isDelete_gt?: InputMaybe<Scalars['Int']['input']>;
  isDelete_gte?: InputMaybe<Scalars['Int']['input']>;
  isDelete_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  isDelete_lt?: InputMaybe<Scalars['Int']['input']>;
  isDelete_lte?: InputMaybe<Scalars['Int']['input']>;
  isDelete_ne?: InputMaybe<Scalars['Int']['input']>;
  isDelete_null?: InputMaybe<Scalars['Boolean']['input']>;
  isNav?: InputMaybe<Scalars['Int']['input']>;
  isNav_gt?: InputMaybe<Scalars['Int']['input']>;
  isNav_gte?: InputMaybe<Scalars['Int']['input']>;
  isNav_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNav_lt?: InputMaybe<Scalars['Int']['input']>;
  isNav_lte?: InputMaybe<Scalars['Int']['input']>;
  isNav_ne?: InputMaybe<Scalars['Int']['input']>;
  isNav_null?: InputMaybe<Scalars['Boolean']['input']>;
  project?: InputMaybe<ProjectFilterType>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
  projectId_gt?: InputMaybe<Scalars['ID']['input']>;
  projectId_gte?: InputMaybe<Scalars['ID']['input']>;
  projectId_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  projectId_lt?: InputMaybe<Scalars['ID']['input']>;
  projectId_lte?: InputMaybe<Scalars['ID']['input']>;
  projectId_ne?: InputMaybe<Scalars['ID']['input']>;
  projectId_null?: InputMaybe<Scalars['Boolean']['input']>;
  state?: InputMaybe<Scalars['Int']['input']>;
  state_gt?: InputMaybe<Scalars['Int']['input']>;
  state_gte?: InputMaybe<Scalars['Int']['input']>;
  state_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  state_lt?: InputMaybe<Scalars['Int']['input']>;
  state_lte?: InputMaybe<Scalars['Int']['input']>;
  state_ne?: InputMaybe<Scalars['Int']['input']>;
  state_null?: InputMaybe<Scalars['Boolean']['input']>;
  tableName?: InputMaybe<Scalars['String']['input']>;
  tableName_gt?: InputMaybe<Scalars['String']['input']>;
  tableName_gte?: InputMaybe<Scalars['String']['input']>;
  tableName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tableName_like?: InputMaybe<Scalars['String']['input']>;
  tableName_lt?: InputMaybe<Scalars['String']['input']>;
  tableName_lte?: InputMaybe<Scalars['String']['input']>;
  tableName_ne?: InputMaybe<Scalars['String']['input']>;
  tableName_null?: InputMaybe<Scalars['Boolean']['input']>;
  tableName_prefix?: InputMaybe<Scalars['String']['input']>;
  tableName_suffix?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_gt?: InputMaybe<Scalars['String']['input']>;
  title_gte?: InputMaybe<Scalars['String']['input']>;
  title_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_like?: InputMaybe<Scalars['String']['input']>;
  title_lt?: InputMaybe<Scalars['String']['input']>;
  title_lte?: InputMaybe<Scalars['String']['input']>;
  title_ne?: InputMaybe<Scalars['String']['input']>;
  title_null?: InputMaybe<Scalars['Boolean']['input']>;
  title_prefix?: InputMaybe<Scalars['String']['input']>;
  title_suffix?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  updatedAt_lt?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_ne?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_null?: InputMaybe<Scalars['Boolean']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  updatedBy_gt?: InputMaybe<Scalars['ID']['input']>;
  updatedBy_gte?: InputMaybe<Scalars['ID']['input']>;
  updatedBy_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  updatedBy_lt?: InputMaybe<Scalars['ID']['input']>;
  updatedBy_lte?: InputMaybe<Scalars['ID']['input']>;
  updatedBy_ne?: InputMaybe<Scalars['ID']['input']>;
  updatedBy_null?: InputMaybe<Scalars['Boolean']['input']>;
  weight?: InputMaybe<Scalars['Int']['input']>;
  weight_gt?: InputMaybe<Scalars['Int']['input']>;
  weight_gte?: InputMaybe<Scalars['Int']['input']>;
  weight_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  weight_lt?: InputMaybe<Scalars['Int']['input']>;
  weight_lte?: InputMaybe<Scalars['Int']['input']>;
  weight_ne?: InputMaybe<Scalars['Int']['input']>;
  weight_null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProjectTableRelationship = {
  id?: InputMaybe<Scalars['ID']['input']>;
  isAuth?: InputMaybe<Scalars['Int']['input']>;
  isDelete?: InputMaybe<Scalars['Int']['input']>;
  isNav?: InputMaybe<Scalars['Int']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
  state?: InputMaybe<Scalars['Int']['input']>;
  tableName: Scalars['String']['input'];
  title: Scalars['String']['input'];
  weight?: InputMaybe<Scalars['Int']['input']>;
};

export type ProjectTableResultType = {
  __typename?: 'ProjectTableResultType';
  current_page: Scalars['Int']['output'];
  data: Array<ProjectTable>;
  per_page: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  total_page: Scalars['Int']['output'];
};

export type ProjectTableSortType = {
  createdAt?: InputMaybe<ObjectSortType>;
  createdBy?: InputMaybe<ObjectSortType>;
  deletedAt?: InputMaybe<ObjectSortType>;
  deletedBy?: InputMaybe<ObjectSortType>;
  fields?: InputMaybe<ProjectTableFieldSortType>;
  fieldsIds?: InputMaybe<ObjectSortType>;
  id?: InputMaybe<ObjectSortType>;
  isAuth?: InputMaybe<ObjectSortType>;
  isDelete?: InputMaybe<ObjectSortType>;
  isNav?: InputMaybe<ObjectSortType>;
  project?: InputMaybe<ProjectSortType>;
  projectId?: InputMaybe<ObjectSortType>;
  state?: InputMaybe<ObjectSortType>;
  tableName?: InputMaybe<ObjectSortType>;
  title?: InputMaybe<ObjectSortType>;
  updatedAt?: InputMaybe<ObjectSortType>;
  updatedBy?: InputMaybe<ObjectSortType>;
  weight?: InputMaybe<ObjectSortType>;
};

export type ProjectTableUpdateInput = {
  fields?: InputMaybe<Array<InputMaybe<ProjectTableFieldRelationship>>>;
  fieldsIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  isAuth?: InputMaybe<Scalars['Int']['input']>;
  isDelete?: InputMaybe<Scalars['Int']['input']>;
  isNav?: InputMaybe<Scalars['Int']['input']>;
  project?: InputMaybe<ProjectRelationship>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
  state?: InputMaybe<Scalars['Int']['input']>;
  tableName?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['Int']['input']>;
};

export type ProjectUpdateInput = {
  desc?: InputMaybe<Scalars['String']['input']>;
  dirPath?: InputMaybe<Scalars['String']['input']>;
  isDelete?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  projectName?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['Int']['input']>;
  tables?: InputMaybe<Array<InputMaybe<ProjectTableRelationship>>>;
  tablesIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  weight?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  good?: Maybe<Good>;
  goods?: Maybe<GoodResultType>;
  order?: Maybe<Order>;
  orders?: Maybe<OrderResultType>;
  project?: Maybe<Project>;
  projectTable?: Maybe<ProjectTable>;
  projectTableField?: Maybe<ProjectTableField>;
  projectTableFields?: Maybe<ProjectTableFieldResultType>;
  projectTables?: Maybe<ProjectTableResultType>;
  projects?: Maybe<ProjectResultType>;
  uploadFile?: Maybe<UploadFile>;
  uploadFiles?: Maybe<UploadFileResultType>;
  user?: Maybe<User>;
  users?: Maybe<UserResultType>;
};


export type QueryGoodArgs = {
  filter?: InputMaybe<GoodFilterType>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGoodsArgs = {
  current_page?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<GoodFilterType>;
  per_page?: InputMaybe<Scalars['Int']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
  rand?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Array<GoodSortType>>;
};


export type QueryOrderArgs = {
  filter?: InputMaybe<OrderFilterType>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryOrdersArgs = {
  current_page?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<OrderFilterType>;
  per_page?: InputMaybe<Scalars['Int']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
  rand?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Array<OrderSortType>>;
};


export type QueryProjectArgs = {
  filter?: InputMaybe<ProjectFilterType>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProjectTableArgs = {
  filter?: InputMaybe<ProjectTableFilterType>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProjectTableFieldArgs = {
  filter?: InputMaybe<ProjectTableFieldFilterType>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProjectTableFieldsArgs = {
  current_page?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<ProjectTableFieldFilterType>;
  per_page?: InputMaybe<Scalars['Int']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
  rand?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Array<ProjectTableFieldSortType>>;
};


export type QueryProjectTablesArgs = {
  current_page?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<ProjectTableFilterType>;
  per_page?: InputMaybe<Scalars['Int']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
  rand?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Array<ProjectTableSortType>>;
};


export type QueryProjectsArgs = {
  current_page?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<ProjectFilterType>;
  per_page?: InputMaybe<Scalars['Int']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
  rand?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Array<ProjectSortType>>;
};


export type QueryUploadFileArgs = {
  filter?: InputMaybe<UploadFileFilterType>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  current_page?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<UploadFileFilterType>;
  per_page?: InputMaybe<Scalars['Int']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
  rand?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Array<UploadFileSortType>>;
};


export type QueryUserArgs = {
  filter?: InputMaybe<UserFilterType>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersArgs = {
  current_page?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<UserFilterType>;
  per_page?: InputMaybe<Scalars['Int']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
  rand?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Array<UserSortType>>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  createdAt: Scalars['Int']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  hash: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isDelete?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  state?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  weight?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileCreateInput = {
  hash: Scalars['String']['input'];
  isDelete?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  state?: InputMaybe<Scalars['Int']['input']>;
  weight?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileFilterType = {
  AND?: InputMaybe<Array<UploadFileFilterType>>;
  OR?: InputMaybe<Array<UploadFileFilterType>>;
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_lte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_ne?: InputMaybe<Scalars['Int']['input']>;
  createdAt_null?: InputMaybe<Scalars['Boolean']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  createdBy_gt?: InputMaybe<Scalars['ID']['input']>;
  createdBy_gte?: InputMaybe<Scalars['ID']['input']>;
  createdBy_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  createdBy_lt?: InputMaybe<Scalars['ID']['input']>;
  createdBy_lte?: InputMaybe<Scalars['ID']['input']>;
  createdBy_ne?: InputMaybe<Scalars['ID']['input']>;
  createdBy_null?: InputMaybe<Scalars['Boolean']['input']>;
  deletedAt?: InputMaybe<Scalars['Int']['input']>;
  deletedAt_gt?: InputMaybe<Scalars['Int']['input']>;
  deletedAt_gte?: InputMaybe<Scalars['Int']['input']>;
  deletedAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  deletedAt_lt?: InputMaybe<Scalars['Int']['input']>;
  deletedAt_lte?: InputMaybe<Scalars['Int']['input']>;
  deletedAt_ne?: InputMaybe<Scalars['Int']['input']>;
  deletedAt_null?: InputMaybe<Scalars['Boolean']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  deletedBy_gt?: InputMaybe<Scalars['ID']['input']>;
  deletedBy_gte?: InputMaybe<Scalars['ID']['input']>;
  deletedBy_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  deletedBy_lt?: InputMaybe<Scalars['ID']['input']>;
  deletedBy_lte?: InputMaybe<Scalars['ID']['input']>;
  deletedBy_ne?: InputMaybe<Scalars['ID']['input']>;
  deletedBy_null?: InputMaybe<Scalars['Boolean']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  hash_gt?: InputMaybe<Scalars['String']['input']>;
  hash_gte?: InputMaybe<Scalars['String']['input']>;
  hash_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hash_like?: InputMaybe<Scalars['String']['input']>;
  hash_lt?: InputMaybe<Scalars['String']['input']>;
  hash_lte?: InputMaybe<Scalars['String']['input']>;
  hash_ne?: InputMaybe<Scalars['String']['input']>;
  hash_null?: InputMaybe<Scalars['Boolean']['input']>;
  hash_prefix?: InputMaybe<Scalars['String']['input']>;
  hash_suffix?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_ne?: InputMaybe<Scalars['ID']['input']>;
  id_null?: InputMaybe<Scalars['Boolean']['input']>;
  isDelete?: InputMaybe<Scalars['Int']['input']>;
  isDelete_gt?: InputMaybe<Scalars['Int']['input']>;
  isDelete_gte?: InputMaybe<Scalars['Int']['input']>;
  isDelete_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  isDelete_lt?: InputMaybe<Scalars['Int']['input']>;
  isDelete_lte?: InputMaybe<Scalars['Int']['input']>;
  isDelete_ne?: InputMaybe<Scalars['Int']['input']>;
  isDelete_null?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_like?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_ne?: InputMaybe<Scalars['String']['input']>;
  name_null?: InputMaybe<Scalars['Boolean']['input']>;
  name_prefix?: InputMaybe<Scalars['String']['input']>;
  name_suffix?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['Int']['input']>;
  state_gt?: InputMaybe<Scalars['Int']['input']>;
  state_gte?: InputMaybe<Scalars['Int']['input']>;
  state_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  state_lt?: InputMaybe<Scalars['Int']['input']>;
  state_lte?: InputMaybe<Scalars['Int']['input']>;
  state_ne?: InputMaybe<Scalars['Int']['input']>;
  state_null?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  updatedAt_lt?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_ne?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_null?: InputMaybe<Scalars['Boolean']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  updatedBy_gt?: InputMaybe<Scalars['ID']['input']>;
  updatedBy_gte?: InputMaybe<Scalars['ID']['input']>;
  updatedBy_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  updatedBy_lt?: InputMaybe<Scalars['ID']['input']>;
  updatedBy_lte?: InputMaybe<Scalars['ID']['input']>;
  updatedBy_ne?: InputMaybe<Scalars['ID']['input']>;
  updatedBy_null?: InputMaybe<Scalars['Boolean']['input']>;
  weight?: InputMaybe<Scalars['Int']['input']>;
  weight_gt?: InputMaybe<Scalars['Int']['input']>;
  weight_gte?: InputMaybe<Scalars['Int']['input']>;
  weight_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  weight_lt?: InputMaybe<Scalars['Int']['input']>;
  weight_lte?: InputMaybe<Scalars['Int']['input']>;
  weight_ne?: InputMaybe<Scalars['Int']['input']>;
  weight_null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UploadFileRelationship = {
  hash: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  isDelete?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  state?: InputMaybe<Scalars['Int']['input']>;
  weight?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileResultType = {
  __typename?: 'UploadFileResultType';
  current_page: Scalars['Int']['output'];
  data: Array<UploadFile>;
  per_page: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  total_page: Scalars['Int']['output'];
};

export type UploadFileSortType = {
  createdAt?: InputMaybe<ObjectSortType>;
  createdBy?: InputMaybe<ObjectSortType>;
  deletedAt?: InputMaybe<ObjectSortType>;
  deletedBy?: InputMaybe<ObjectSortType>;
  hash?: InputMaybe<ObjectSortType>;
  id?: InputMaybe<ObjectSortType>;
  isDelete?: InputMaybe<ObjectSortType>;
  name?: InputMaybe<ObjectSortType>;
  state?: InputMaybe<ObjectSortType>;
  updatedAt?: InputMaybe<ObjectSortType>;
  updatedBy?: InputMaybe<ObjectSortType>;
  weight?: InputMaybe<ObjectSortType>;
};

export type UploadFileUpdateInput = {
  hash?: InputMaybe<Scalars['String']['input']>;
  isDelete?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['Int']['input']>;
  weight?: InputMaybe<Scalars['Int']['input']>;
};

export type User = {
  __typename?: 'User';
  age?: Maybe<Scalars['Int']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Int']['output'];
  createdBy?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  deletedBy?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  isDelete?: Maybe<Scalars['Int']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  password: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  state?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
  updatedBy?: Maybe<Scalars['ID']['output']>;
  weight?: Maybe<Scalars['Int']['output']>;
};

export type UserCreateInput = {
  age?: InputMaybe<Scalars['Int']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  isDelete?: InputMaybe<Scalars['Int']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  state?: InputMaybe<Scalars['Int']['input']>;
  weight?: InputMaybe<Scalars['Int']['input']>;
};

export type UserFilterType = {
  AND?: InputMaybe<Array<UserFilterType>>;
  OR?: InputMaybe<Array<UserFilterType>>;
  age?: InputMaybe<Scalars['Int']['input']>;
  age_gt?: InputMaybe<Scalars['Int']['input']>;
  age_gte?: InputMaybe<Scalars['Int']['input']>;
  age_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  age_lt?: InputMaybe<Scalars['Int']['input']>;
  age_lte?: InputMaybe<Scalars['Int']['input']>;
  age_ne?: InputMaybe<Scalars['Int']['input']>;
  age_null?: InputMaybe<Scalars['Boolean']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  avatar_gt?: InputMaybe<Scalars['String']['input']>;
  avatar_gte?: InputMaybe<Scalars['String']['input']>;
  avatar_in?: InputMaybe<Array<Scalars['String']['input']>>;
  avatar_like?: InputMaybe<Scalars['String']['input']>;
  avatar_lt?: InputMaybe<Scalars['String']['input']>;
  avatar_lte?: InputMaybe<Scalars['String']['input']>;
  avatar_ne?: InputMaybe<Scalars['String']['input']>;
  avatar_null?: InputMaybe<Scalars['Boolean']['input']>;
  avatar_prefix?: InputMaybe<Scalars['String']['input']>;
  avatar_suffix?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_lte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_ne?: InputMaybe<Scalars['Int']['input']>;
  createdAt_null?: InputMaybe<Scalars['Boolean']['input']>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  createdBy_gt?: InputMaybe<Scalars['ID']['input']>;
  createdBy_gte?: InputMaybe<Scalars['ID']['input']>;
  createdBy_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  createdBy_lt?: InputMaybe<Scalars['ID']['input']>;
  createdBy_lte?: InputMaybe<Scalars['ID']['input']>;
  createdBy_ne?: InputMaybe<Scalars['ID']['input']>;
  createdBy_null?: InputMaybe<Scalars['Boolean']['input']>;
  deletedAt?: InputMaybe<Scalars['Int']['input']>;
  deletedAt_gt?: InputMaybe<Scalars['Int']['input']>;
  deletedAt_gte?: InputMaybe<Scalars['Int']['input']>;
  deletedAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  deletedAt_lt?: InputMaybe<Scalars['Int']['input']>;
  deletedAt_lte?: InputMaybe<Scalars['Int']['input']>;
  deletedAt_ne?: InputMaybe<Scalars['Int']['input']>;
  deletedAt_null?: InputMaybe<Scalars['Boolean']['input']>;
  deletedBy?: InputMaybe<Scalars['ID']['input']>;
  deletedBy_gt?: InputMaybe<Scalars['ID']['input']>;
  deletedBy_gte?: InputMaybe<Scalars['ID']['input']>;
  deletedBy_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  deletedBy_lt?: InputMaybe<Scalars['ID']['input']>;
  deletedBy_lte?: InputMaybe<Scalars['ID']['input']>;
  deletedBy_ne?: InputMaybe<Scalars['ID']['input']>;
  deletedBy_null?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_ne?: InputMaybe<Scalars['ID']['input']>;
  id_null?: InputMaybe<Scalars['Boolean']['input']>;
  isDelete?: InputMaybe<Scalars['Int']['input']>;
  isDelete_gt?: InputMaybe<Scalars['Int']['input']>;
  isDelete_gte?: InputMaybe<Scalars['Int']['input']>;
  isDelete_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  isDelete_lt?: InputMaybe<Scalars['Int']['input']>;
  isDelete_lte?: InputMaybe<Scalars['Int']['input']>;
  isDelete_ne?: InputMaybe<Scalars['Int']['input']>;
  isDelete_null?: InputMaybe<Scalars['Boolean']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  nickname_gt?: InputMaybe<Scalars['String']['input']>;
  nickname_gte?: InputMaybe<Scalars['String']['input']>;
  nickname_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nickname_like?: InputMaybe<Scalars['String']['input']>;
  nickname_lt?: InputMaybe<Scalars['String']['input']>;
  nickname_lte?: InputMaybe<Scalars['String']['input']>;
  nickname_ne?: InputMaybe<Scalars['String']['input']>;
  nickname_null?: InputMaybe<Scalars['Boolean']['input']>;
  nickname_prefix?: InputMaybe<Scalars['String']['input']>;
  nickname_suffix?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  password_gt?: InputMaybe<Scalars['String']['input']>;
  password_gte?: InputMaybe<Scalars['String']['input']>;
  password_in?: InputMaybe<Array<Scalars['String']['input']>>;
  password_like?: InputMaybe<Scalars['String']['input']>;
  password_lt?: InputMaybe<Scalars['String']['input']>;
  password_lte?: InputMaybe<Scalars['String']['input']>;
  password_ne?: InputMaybe<Scalars['String']['input']>;
  password_null?: InputMaybe<Scalars['Boolean']['input']>;
  password_prefix?: InputMaybe<Scalars['String']['input']>;
  password_suffix?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phone_gt?: InputMaybe<Scalars['String']['input']>;
  phone_gte?: InputMaybe<Scalars['String']['input']>;
  phone_in?: InputMaybe<Array<Scalars['String']['input']>>;
  phone_like?: InputMaybe<Scalars['String']['input']>;
  phone_lt?: InputMaybe<Scalars['String']['input']>;
  phone_lte?: InputMaybe<Scalars['String']['input']>;
  phone_ne?: InputMaybe<Scalars['String']['input']>;
  phone_null?: InputMaybe<Scalars['Boolean']['input']>;
  phone_prefix?: InputMaybe<Scalars['String']['input']>;
  phone_suffix?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['Int']['input']>;
  state_gt?: InputMaybe<Scalars['Int']['input']>;
  state_gte?: InputMaybe<Scalars['Int']['input']>;
  state_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  state_lt?: InputMaybe<Scalars['Int']['input']>;
  state_lte?: InputMaybe<Scalars['Int']['input']>;
  state_ne?: InputMaybe<Scalars['Int']['input']>;
  state_null?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  updatedAt_lt?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_ne?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_null?: InputMaybe<Scalars['Boolean']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
  updatedBy_gt?: InputMaybe<Scalars['ID']['input']>;
  updatedBy_gte?: InputMaybe<Scalars['ID']['input']>;
  updatedBy_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  updatedBy_lt?: InputMaybe<Scalars['ID']['input']>;
  updatedBy_lte?: InputMaybe<Scalars['ID']['input']>;
  updatedBy_ne?: InputMaybe<Scalars['ID']['input']>;
  updatedBy_null?: InputMaybe<Scalars['Boolean']['input']>;
  weight?: InputMaybe<Scalars['Int']['input']>;
  weight_gt?: InputMaybe<Scalars['Int']['input']>;
  weight_gte?: InputMaybe<Scalars['Int']['input']>;
  weight_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  weight_lt?: InputMaybe<Scalars['Int']['input']>;
  weight_lte?: InputMaybe<Scalars['Int']['input']>;
  weight_ne?: InputMaybe<Scalars['Int']['input']>;
  weight_null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserRelationship = {
  age?: InputMaybe<Scalars['Int']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isDelete?: InputMaybe<Scalars['Int']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  state?: InputMaybe<Scalars['Int']['input']>;
  weight?: InputMaybe<Scalars['Int']['input']>;
};

export type UserResultType = {
  __typename?: 'UserResultType';
  current_page: Scalars['Int']['output'];
  data: Array<User>;
  per_page: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  total_page: Scalars['Int']['output'];
};

export type UserSortType = {
  age?: InputMaybe<ObjectSortType>;
  avatar?: InputMaybe<ObjectSortType>;
  createdAt?: InputMaybe<ObjectSortType>;
  createdBy?: InputMaybe<ObjectSortType>;
  deletedAt?: InputMaybe<ObjectSortType>;
  deletedBy?: InputMaybe<ObjectSortType>;
  id?: InputMaybe<ObjectSortType>;
  isDelete?: InputMaybe<ObjectSortType>;
  nickname?: InputMaybe<ObjectSortType>;
  password?: InputMaybe<ObjectSortType>;
  phone?: InputMaybe<ObjectSortType>;
  state?: InputMaybe<ObjectSortType>;
  updatedAt?: InputMaybe<ObjectSortType>;
  updatedBy?: InputMaybe<ObjectSortType>;
  weight?: InputMaybe<ObjectSortType>;
};

export type UserUpdateInput = {
  age?: InputMaybe<Scalars['Int']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  isDelete?: InputMaybe<Scalars['Int']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['Int']['input']>;
  weight?: InputMaybe<Scalars['Int']['input']>;
};
