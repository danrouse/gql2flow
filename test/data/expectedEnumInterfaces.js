export type GraphQLResponseRoot = {
  data?: Query;
  errors?: Array<GraphQLResponseError>;
}

export type GraphQLResponseError = {
  message: string;            // Required for all errors
  locations?: Array<GraphQLResponseErrorLocation>;
  [propName: string]: any;    // 7.2.2 says 'GraphQL servers may provide additional entries to error'
}

export type GraphQLResponseErrorLocation = {
  line: number;
  column: number;
}

export type Query = {
  __typename: "Query";
  colorEnum?: ColorEnum;
}

export type ColorEnum = "RED" | "GREEN" | "BLUE";