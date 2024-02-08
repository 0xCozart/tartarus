/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
  /** A Ceramic Commit ID */
  CeramicCommitID: { input: any; output: any; }
  /** A Ceramic Stream ID */
  CeramicStreamID: { input: any; output: any; }
  /** A field whose value conforms to the standard DID format as specified in did-core: https://www.w3.org/TR/did-core/. */
  DID: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
};

export type CeramicAccount = Node & {
  __typename?: 'CeramicAccount';
  /** Globally unique identifier of the account (DID string) */
  id: Scalars['ID']['output'];
  /** Whether the Ceramic instance is currently authenticated with this account or not */
  isViewer: Scalars['Boolean']['output'];
  messageList?: Maybe<MessageConnection>;
  messageListCount: Scalars['Int']['output'];
  publicEncryptionDidList?: Maybe<PublicEncryptionDidConnection>;
  publicEncryptionDidListCount: Scalars['Int']['output'];
  roomList?: Maybe<RoomConnection>;
  roomListCount: Scalars['Int']['output'];
  tartarusProfile?: Maybe<TartarusProfile>;
};


export type CeramicAccountMessageListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CeramicAccountPublicEncryptionDidListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CeramicAccountRoomListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateMessageInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  content: MessageInput;
};

export type CreateMessagePayload = {
  __typename?: 'CreateMessagePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  document: Message;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
};


export type CreateMessagePayloadNodeArgs = {
  id: Scalars['ID']['input'];
};

export type CreatePublicEncryptionDidInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  content: PublicEncryptionDidInput;
};

export type CreatePublicEncryptionDidPayload = {
  __typename?: 'CreatePublicEncryptionDIDPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  document: PublicEncryptionDid;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
};


export type CreatePublicEncryptionDidPayloadNodeArgs = {
  id: Scalars['ID']['input'];
};

export type CreateRoomInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  content: RoomInput;
};

export type CreateRoomPayload = {
  __typename?: 'CreateRoomPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  document: Room;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
};


export type CreateRoomPayloadNodeArgs = {
  id: Scalars['ID']['input'];
};

export type CreateTartarusProfileInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  content: TartarusProfileInput;
  options?: InputMaybe<SetOptionsInput>;
};

export type CreateTartarusProfilePayload = {
  __typename?: 'CreateTartarusProfilePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  document: TartarusProfile;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
};


export type CreateTartarusProfilePayloadNodeArgs = {
  id: Scalars['ID']['input'];
};

export type Message = Node & {
  __typename?: 'Message';
  createdAt: Scalars['DateTime']['output'];
  editedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  room?: Maybe<Room>;
  roomId: Scalars['CeramicStreamID']['output'];
  sender?: Maybe<TartarusProfile>;
  senderId: Scalars['CeramicStreamID']['output'];
};

/** A connection to a list of items. */
export type MessageConnection = {
  __typename?: 'MessageConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<MessageEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type MessageEdge = {
  __typename?: 'MessageEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<Message>;
};

export type MessageInput = {
  createdAt: Scalars['DateTime']['input'];
  editedAt?: InputMaybe<Scalars['DateTime']['input']>;
  message: Scalars['String']['input'];
  roomId: Scalars['CeramicStreamID']['input'];
  senderId: Scalars['CeramicStreamID']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createMessage?: Maybe<CreateMessagePayload>;
  createPublicEncryptionDID?: Maybe<CreatePublicEncryptionDidPayload>;
  createRoom?: Maybe<CreateRoomPayload>;
  createTartarusProfile?: Maybe<CreateTartarusProfilePayload>;
  updateMessage?: Maybe<UpdateMessagePayload>;
  updatePublicEncryptionDID?: Maybe<UpdatePublicEncryptionDidPayload>;
  updateRoom?: Maybe<UpdateRoomPayload>;
  updateTartarusProfile?: Maybe<UpdateTartarusProfilePayload>;
};


export type MutationCreateMessageArgs = {
  input: CreateMessageInput;
};


export type MutationCreatePublicEncryptionDidArgs = {
  input: CreatePublicEncryptionDidInput;
};


export type MutationCreateRoomArgs = {
  input: CreateRoomInput;
};


export type MutationCreateTartarusProfileArgs = {
  input: CreateTartarusProfileInput;
};


export type MutationUpdateMessageArgs = {
  input: UpdateMessageInput;
};


export type MutationUpdatePublicEncryptionDidArgs = {
  input: UpdatePublicEncryptionDidInput;
};


export type MutationUpdateRoomArgs = {
  input: UpdateRoomInput;
};


export type MutationUpdateTartarusProfileArgs = {
  input: UpdateTartarusProfileInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PartialMessageInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  editedAt?: InputMaybe<Scalars['DateTime']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  roomId?: InputMaybe<Scalars['CeramicStreamID']['input']>;
  senderId?: InputMaybe<Scalars['CeramicStreamID']['input']>;
};

export type PartialPublicEncryptionDidInput = {
  PublicEncryptionDID?: InputMaybe<Scalars['DID']['input']>;
};

export type PartialRoomInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  members?: InputMaybe<Array<InputMaybe<Scalars['DID']['input']>>>;
  roomName?: InputMaybe<Scalars['String']['input']>;
};

export type PartialTartarusProfileInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  friends?: InputMaybe<Array<InputMaybe<Scalars['DID']['input']>>>;
  profilePictureCid?: InputMaybe<Scalars['String']['input']>;
};

export type PublicEncryptionDid = Node & {
  __typename?: 'PublicEncryptionDID';
  PublicEncryptionDID: CeramicAccount;
  /** Account controlling the document */
  author: CeramicAccount;
  id: Scalars['ID']['output'];
};

/** A connection to a list of items. */
export type PublicEncryptionDidConnection = {
  __typename?: 'PublicEncryptionDIDConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PublicEncryptionDidEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PublicEncryptionDidEdge = {
  __typename?: 'PublicEncryptionDIDEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<PublicEncryptionDid>;
};

export type PublicEncryptionDidInput = {
  PublicEncryptionDID: Scalars['DID']['input'];
};

export type Query = {
  __typename?: 'Query';
  messageCount: Scalars['Int']['output'];
  messageIndex?: Maybe<MessageConnection>;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Fetches objects given their IDs */
  nodes: Array<Maybe<Node>>;
  publicEncryptionDIDCount: Scalars['Int']['output'];
  publicEncryptionDIDIndex?: Maybe<PublicEncryptionDidConnection>;
  roomCount: Scalars['Int']['output'];
  roomIndex?: Maybe<RoomConnection>;
  tartarusProfileCount: Scalars['Int']['output'];
  tartarusProfileIndex?: Maybe<TartarusProfileConnection>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
};


export type QueryMessageIndexArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNodesArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type QueryPublicEncryptionDidIndexArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRoomIndexArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTartarusProfileIndexArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type Room = Node & {
  __typename?: 'Room';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  members?: Maybe<Array<Maybe<CeramicAccount>>>;
  messages: MessageConnection;
  roomName: Scalars['String']['output'];
};


export type RoomMessagesArgs = {
  account?: InputMaybe<Scalars['ID']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of items. */
export type RoomConnection = {
  __typename?: 'RoomConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<RoomEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type RoomEdge = {
  __typename?: 'RoomEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<Room>;
};

export type RoomInput = {
  createdAt: Scalars['DateTime']['input'];
  key: Scalars['String']['input'];
  members?: InputMaybe<Array<InputMaybe<Scalars['DID']['input']>>>;
  roomName: Scalars['String']['input'];
};

export type SetOptionsInput = {
  /** Maximum amount of time to lookup the stream over the network, in seconds - see https://developers.ceramic.network/reference/typescript/interfaces/_ceramicnetwork_common.CreateOpts.html#syncTimeoutSeconds */
  syncTimeout?: InputMaybe<Scalars['Int']['input']>;
};

export type TartarusProfile = Node & {
  __typename?: 'TartarusProfile';
  createdAt: Scalars['DateTime']['output'];
  displayName: Scalars['String']['output'];
  friends?: Maybe<Array<Maybe<CeramicAccount>>>;
  id: Scalars['ID']['output'];
  profilePictureCid: Scalars['String']['output'];
  rooms: RoomConnection;
};


export type TartarusProfileRoomsArgs = {
  account?: InputMaybe<Scalars['ID']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of items. */
export type TartarusProfileConnection = {
  __typename?: 'TartarusProfileConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TartarusProfileEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TartarusProfileEdge = {
  __typename?: 'TartarusProfileEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<TartarusProfile>;
};

export type TartarusProfileInput = {
  createdAt: Scalars['DateTime']['input'];
  displayName: Scalars['String']['input'];
  friends?: InputMaybe<Array<InputMaybe<Scalars['DID']['input']>>>;
  profilePictureCid: Scalars['String']['input'];
};

export type UpdateMessageInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  content: PartialMessageInput;
  id: Scalars['ID']['input'];
  options?: InputMaybe<UpdateOptionsInput>;
};

export type UpdateMessagePayload = {
  __typename?: 'UpdateMessagePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  document: Message;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
};


export type UpdateMessagePayloadNodeArgs = {
  id: Scalars['ID']['input'];
};

export type UpdateOptionsInput = {
  /** Fully replace the document contents instead of performing a shallow merge */
  replace?: InputMaybe<Scalars['Boolean']['input']>;
  /** Only perform mutation if the document matches the provided version */
  version?: InputMaybe<Scalars['CeramicCommitID']['input']>;
};

export type UpdatePublicEncryptionDidInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  content: PartialPublicEncryptionDidInput;
  id: Scalars['ID']['input'];
  options?: InputMaybe<UpdateOptionsInput>;
};

export type UpdatePublicEncryptionDidPayload = {
  __typename?: 'UpdatePublicEncryptionDIDPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  document: PublicEncryptionDid;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
};


export type UpdatePublicEncryptionDidPayloadNodeArgs = {
  id: Scalars['ID']['input'];
};

export type UpdateRoomInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  content: PartialRoomInput;
  id: Scalars['ID']['input'];
  options?: InputMaybe<UpdateOptionsInput>;
};

export type UpdateRoomPayload = {
  __typename?: 'UpdateRoomPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  document: Room;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
};


export type UpdateRoomPayloadNodeArgs = {
  id: Scalars['ID']['input'];
};

export type UpdateTartarusProfileInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  content: PartialTartarusProfileInput;
  id: Scalars['ID']['input'];
  options?: InputMaybe<UpdateOptionsInput>;
};

export type UpdateTartarusProfilePayload = {
  __typename?: 'UpdateTartarusProfilePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  document: TartarusProfile;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
};


export type UpdateTartarusProfilePayloadNodeArgs = {
  id: Scalars['ID']['input'];
};

export type CreateTartarusProfileMutationVariables = Exact<{
  i: CreateTartarusProfileInput;
}>;


export type CreateTartarusProfileMutation = { __typename?: 'Mutation', createTartarusProfile?: { __typename?: 'CreateTartarusProfilePayload', viewer?: { __typename?: 'CeramicAccount', id: string, tartarusProfile?: { __typename?: 'TartarusProfile', createdAt: any, displayName: string, id: string, profilePictureCid: string, friends?: Array<{ __typename?: 'CeramicAccount', id: string } | null> | null } | null } | null } | null };

export type UpdateProfilePictureMutationVariables = Exact<{
  i: UpdateTartarusProfileInput;
}>;


export type UpdateProfilePictureMutation = { __typename?: 'Mutation', updateTartarusProfile?: { __typename?: 'UpdateTartarusProfilePayload', clientMutationId?: string | null, viewer?: { __typename?: 'CeramicAccount', id: string, isViewer: boolean, tartarusProfile?: { __typename?: 'TartarusProfile', createdAt: any, displayName: string, id: string, profilePictureCid: string } | null } | null } | null };

export type TartarusProfileQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type TartarusProfileQueryQuery = { __typename?: 'Query', viewer?: { __typename?: 'CeramicAccount', tartarusProfile?: { __typename?: 'TartarusProfile', createdAt: any, displayName: string, id: string, profilePictureCid: string, friends?: Array<{ __typename?: 'CeramicAccount', id: string } | null> | null, rooms: { __typename?: 'RoomConnection', edges?: Array<{ __typename?: 'RoomEdge', node?: { __typename?: 'Room', id: string } | null } | null> | null } } | null } | null };


export const CreateTartarusProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTartarusProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"i"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTartarusProfileInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTartarusProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"i"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tartarusProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"profilePictureCid"}},{"kind":"Field","name":{"kind":"Name","value":"friends"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateTartarusProfileMutation, CreateTartarusProfileMutationVariables>;
export const UpdateProfilePictureDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProfilePicture"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"i"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateTartarusProfileInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTartarusProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"i"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientMutationId"}},{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isViewer"}},{"kind":"Field","name":{"kind":"Name","value":"tartarusProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"profilePictureCid"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateProfilePictureMutation, UpdateProfilePictureMutationVariables>;
export const TartarusProfileQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TartarusProfileQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tartarusProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"friends"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"profilePictureCid"}},{"kind":"Field","name":{"kind":"Name","value":"rooms"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<TartarusProfileQueryQuery, TartarusProfileQueryQueryVariables>;