/**
 * Generated by orval v6.10.3 🍺
 * Do not edit manually.
 * Common Fate
 * Common Fate API
 * OpenAPI spec version: 1.0
 */
import useSwr from 'swr'
import type {
  SWRConfiguration,
  Key
} from 'swr'
import type {
  ListAccessRulesResponseResponse,
  RequestAccessRule,
  ErrorResponseResponse,
  ListAccessRuleApproversResponseResponse,
  ListRequestsResponseResponse,
  UserListRequestsParams,
  CreateRequestResponseResponse,
  CreateRequestRequestBody,
  UserListRequestsUpcomingParams,
  UserListRequestsPastParams,
  RequestDetail,
  ListRequestEventsResponseResponse,
  ReviewResponseResponse,
  ReviewRequestBody,
  UserCancelRequest200,
  AccessTokenResponseResponse,
  User,
  AuthUserResponseResponse,
  LookupAccessRule,
  UserLookupAccessRuleParams,
  ListFavoritesResponseResponse,
  FavoriteDetail,
  CreateFavoriteRequestBody
} from '.././types'
import type {
  AccessInstructions
} from '.././types/accesshandler-openapi.yml'
import { customInstance } from '../../custom-instance'
import type { ErrorType } from '../../custom-instance'


  
  // eslint-disable-next-line
  type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;

/**
 * Get all access rules as an end user.
 * @summary List Access Rules
 */
export const userListAccessRules = (
    
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<ListAccessRulesResponseResponse>(
      {url: `/api/v1/access-rules`, method: 'get'
    },
      options);
    }
  

export const getUserListAccessRulesKey = () => [`/api/v1/access-rules`];

    
export type UserListAccessRulesQueryResult = NonNullable<Awaited<ReturnType<typeof userListAccessRules>>>
export type UserListAccessRulesQueryError = ErrorType<unknown>

export const useUserListAccessRules = <TError = ErrorType<unknown>>(
  options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof userListAccessRules>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getUserListAccessRulesKey() : null);
  const swrFn = () => userListAccessRules(requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * Get details for an Access Rule.

End users are only able to view Access Rules if they are a member of the group the rule relates to, or if they are designated as an approver for the Access Rule. If a user doesn't meet these conditions, a HTTP401 unauthorized error is returned.
 * @summary Get Access Rule
 */
export const userGetAccessRule = (
    ruleId: string,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<RequestAccessRule>(
      {url: `/api/v1/access-rules/${ruleId}`, method: 'get'
    },
      options);
    }
  

export const getUserGetAccessRuleKey = (ruleId: string,) => [`/api/v1/access-rules/${ruleId}`];

    
export type UserGetAccessRuleQueryResult = NonNullable<Awaited<ReturnType<typeof userGetAccessRule>>>
export type UserGetAccessRuleQueryError = ErrorType<ErrorResponseResponse>

export const useUserGetAccessRule = <TError = ErrorType<ErrorResponseResponse>>(
 ruleId: string, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof userGetAccessRule>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false && !!(ruleId)
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getUserGetAccessRuleKey(ruleId) : null);
  const swrFn = () => userGetAccessRule(ruleId, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * Get the approvers for an access rule. 
This returns a list of user IDs.

End users are only able to view Access Rules if they are a member of the group the rule relates to, or if they are designated as an approver for the Access Rule. If a user doesn't meet these conditions, a HTTP401 unauthorized error is returned.
 * @summary List Access Rule approvers
 */
export const userGetAccessRuleApprovers = (
    ruleId: string,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<ListAccessRuleApproversResponseResponse>(
      {url: `/api/v1/access-rules/${ruleId}/approvers`, method: 'get'
    },
      options);
    }
  

export const getUserGetAccessRuleApproversKey = (ruleId: string,) => [`/api/v1/access-rules/${ruleId}/approvers`];

    
export type UserGetAccessRuleApproversQueryResult = NonNullable<Awaited<ReturnType<typeof userGetAccessRuleApprovers>>>
export type UserGetAccessRuleApproversQueryError = ErrorType<ErrorResponseResponse>

export const useUserGetAccessRuleApprovers = <TError = ErrorType<ErrorResponseResponse>>(
 ruleId: string, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof userGetAccessRuleApprovers>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false && !!(ruleId)
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getUserGetAccessRuleApproversKey(ruleId) : null);
  const swrFn = () => userGetAccessRuleApprovers(ruleId, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * List requests.
The reviewer query param allows you to fetch requests which you can review.
 * @summary List my requests
 */
export const userListRequests = (
    params?: UserListRequestsParams,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<ListRequestsResponseResponse>(
      {url: `/api/v1/requests`, method: 'get',
        params
    },
      options);
    }
  

export const getUserListRequestsKey = (params?: UserListRequestsParams,) => [`/api/v1/requests`, ...(params ? [params]: [])];

    
export type UserListRequestsQueryResult = NonNullable<Awaited<ReturnType<typeof userListRequests>>>
export type UserListRequestsQueryError = ErrorType<unknown>

export const useUserListRequests = <TError = ErrorType<unknown>>(
 params?: UserListRequestsParams, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof userListRequests>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getUserListRequestsKey(params) : null);
  const swrFn = () => userListRequests(params, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * Make a request to access something.

Users must specify an Access Rule when making a request. Users are authorized to make a request if they are in a group that the Access Rule references. Otherwise, a HTTP 404 response will be returned.
 * @summary Create a request
 */
export const userCreateRequest = (
    createRequestRequestBody: CreateRequestRequestBody,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<CreateRequestResponseResponse>(
      {url: `/api/v1/requests`, method: 'post',
      headers: {'Content-Type': 'application/json', },
      data: createRequestRequestBody
    },
      options);
    }
  

/**
 * Display pending requests and approved requests that are currently active or scheduled to begin some time in future.
 * @summary Your GET endpoint
 */
export const userListRequestsUpcoming = (
    params?: UserListRequestsUpcomingParams,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<ListRequestsResponseResponse>(
      {url: `/api/v1/requests/upcoming`, method: 'get',
        params
    },
      options);
    }
  

export const getUserListRequestsUpcomingKey = (params?: UserListRequestsUpcomingParams,) => [`/api/v1/requests/upcoming`, ...(params ? [params]: [])];

    
export type UserListRequestsUpcomingQueryResult = NonNullable<Awaited<ReturnType<typeof userListRequestsUpcoming>>>
export type UserListRequestsUpcomingQueryError = ErrorType<unknown>

export const useUserListRequestsUpcoming = <TError = ErrorType<unknown>>(
 params?: UserListRequestsUpcomingParams, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof userListRequestsUpcoming>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getUserListRequestsUpcomingKey(params) : null);
  const swrFn = () => userListRequestsUpcoming(params, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * Display show cancelled, expired, and revoked requests.

 * @summary Your GET endpoint
 */
export const userListRequestsPast = (
    params?: UserListRequestsPastParams,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<ListRequestsResponseResponse>(
      {url: `/api/v1/requests/past`, method: 'get',
        params
    },
      options);
    }
  

export const getUserListRequestsPastKey = (params?: UserListRequestsPastParams,) => [`/api/v1/requests/past`, ...(params ? [params]: [])];

    
export type UserListRequestsPastQueryResult = NonNullable<Awaited<ReturnType<typeof userListRequestsPast>>>
export type UserListRequestsPastQueryError = ErrorType<unknown>

export const useUserListRequestsPast = <TError = ErrorType<unknown>>(
 params?: UserListRequestsPastParams, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof userListRequestsPast>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getUserListRequestsPastKey(params) : null);
  const swrFn = () => userListRequestsPast(params, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * Returns a HTTP401 response if the user is not the requestor or a reviewer.


Use /api/v1/admin/requests/{requestId} as an administrator to view information for requests not made by the current user (note: requires that the user is a Common Fate administrator).
 * @summary Get a request
 */
export const userGetRequest = (
    requestId: string,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<RequestDetail>(
      {url: `/api/v1/requests/${requestId}`, method: 'get'
    },
      options);
    }
  

export const getUserGetRequestKey = (requestId: string,) => [`/api/v1/requests/${requestId}`];

    
export type UserGetRequestQueryResult = NonNullable<Awaited<ReturnType<typeof userGetRequest>>>
export type UserGetRequestQueryError = ErrorType<ErrorResponseResponse>

export const useUserGetRequest = <TError = ErrorType<ErrorResponseResponse>>(
 requestId: string, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof userGetRequest>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false && !!(requestId)
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getUserGetRequestKey(requestId) : null);
  const swrFn = () => userGetRequest(requestId, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * Returns a HTTP401 response if the user is not the requestor or a reviewer.

 * @summary List request events
 */
export const userListRequestEvents = (
    requestId: string,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<ListRequestEventsResponseResponse>(
      {url: `/api/v1/requests/${requestId}/events`, method: 'get'
    },
      options);
    }
  

export const getUserListRequestEventsKey = (requestId: string,) => [`/api/v1/requests/${requestId}/events`];

    
export type UserListRequestEventsQueryResult = NonNullable<Awaited<ReturnType<typeof userListRequestEvents>>>
export type UserListRequestEventsQueryError = ErrorType<ErrorResponseResponse>

export const useUserListRequestEvents = <TError = ErrorType<ErrorResponseResponse>>(
 requestId: string, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof userListRequestEvents>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false && !!(requestId)
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getUserListRequestEventsKey(requestId) : null);
  const swrFn = () => userListRequestEvents(requestId, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * Review an access request made by a user. The reviewing user must be an approver for a request. Users cannot review their own requests, even if they are an approver for the Access Rule.
 * @summary Review a request
 */
export const userReviewRequest = (
    requestId: string,
    reviewRequestBody: ReviewRequestBody,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<ReviewResponseResponse>(
      {url: `/api/v1/requests/${requestId}/review`, method: 'post',
      headers: {'Content-Type': 'application/json', },
      data: reviewRequestBody
    },
      options);
    }
  

/**
 * Users can cancel an access request that they have created while it is in the PENDING state.
 * @summary Cancel a request
 */
export const userCancelRequest = (
    requestId: string,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<UserCancelRequest200>(
      {url: `/api/v1/requests/${requestId}/cancel`, method: 'post'
    },
      options);
    }
  

/**
 * Admins and approvers can revoke access previously approved. Effective immediately 
 * @summary Revoke an active request
 */
export const userRevokeRequest = (
    requestid: string,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<void>(
      {url: `/api/v1/requests/${requestid}/revoke`, method: 'post'
    },
      options);
    }
  

/**
 * Get access instructions for a request.

Returns information on how to access the role or resource.
 * @summary Get Access Instructions
 */
export const userGetAccessInstructions = (
    requestId: string,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<AccessInstructions>(
      {url: `/api/v1/requests/${requestId}/access-instructions`, method: 'get'
    },
      options);
    }
  

export const getUserGetAccessInstructionsKey = (requestId: string,) => [`/api/v1/requests/${requestId}/access-instructions`];

    
export type UserGetAccessInstructionsQueryResult = NonNullable<Awaited<ReturnType<typeof userGetAccessInstructions>>>
export type UserGetAccessInstructionsQueryError = ErrorType<unknown>

export const useUserGetAccessInstructions = <TError = ErrorType<unknown>>(
 requestId: string, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof userGetAccessInstructions>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false && !!(requestId)
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getUserGetAccessInstructionsKey(requestId) : null);
  const swrFn = () => userGetAccessInstructions(requestId, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * Get access token for a request.

Returns information on how to access the role or resource.
 * @summary Get Access Token
 */
export const userGetAccessToken = (
    requestId: string,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<AccessTokenResponseResponse>(
      {url: `/api/v1/requests/${requestId}/access-token`, method: 'get'
    },
      options);
    }
  

export const getUserGetAccessTokenKey = (requestId: string,) => [`/api/v1/requests/${requestId}/access-token`];

    
export type UserGetAccessTokenQueryResult = NonNullable<Awaited<ReturnType<typeof userGetAccessToken>>>
export type UserGetAccessTokenQueryError = ErrorType<ErrorResponseResponse>

export const useUserGetAccessToken = <TError = ErrorType<ErrorResponseResponse>>(
 requestId: string, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof userGetAccessToken>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false && !!(requestId)
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getUserGetAccessTokenKey(requestId) : null);
  const swrFn = () => userGetAccessToken(requestId, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * Returns a Common Fate user.
 * @summary Get a user
 */
export const userGetUser = (
    userId: string,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<User>(
      {url: `/api/v1/users/${userId}`, method: 'get'
    },
      options);
    }
  

export const getUserGetUserKey = (userId: string,) => [`/api/v1/users/${userId}`];

    
export type UserGetUserQueryResult = NonNullable<Awaited<ReturnType<typeof userGetUser>>>
export type UserGetUserQueryError = ErrorType<void>

export const useUserGetUser = <TError = ErrorType<void>>(
 userId: string, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof userGetUser>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false && !!(userId)
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getUserGetUserKey(userId) : null);
  const swrFn = () => userGetUser(userId, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * Returns information about the currently logged in user.
 * @summary Get details for the current user
 */
export const userGetMe = (
    
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<AuthUserResponseResponse>(
      {url: `/api/v1/users/me`, method: 'get'
    },
      options);
    }
  

export const getUserGetMeKey = () => [`/api/v1/users/me`];

    
export type UserGetMeQueryResult = NonNullable<Awaited<ReturnType<typeof userGetMe>>>
export type UserGetMeQueryError = ErrorType<void>

export const useUserGetMe = <TError = ErrorType<void>>(
  options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof userGetMe>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getUserGetMeKey() : null);
  const swrFn = () => userGetMe(requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * Returns an access request.
 * @summary Get a request
 */
export const adminGetRequest = (
    requestId: string,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<RequestDetail>(
      {url: `/api/v1/admin/requests/${requestId}`, method: 'get'
    },
      options);
    }
  

export const getAdminGetRequestKey = (requestId: string,) => [`/api/v1/admin/requests/${requestId}`];

    
export type AdminGetRequestQueryResult = NonNullable<Awaited<ReturnType<typeof adminGetRequest>>>
export type AdminGetRequestQueryError = ErrorType<ErrorResponseResponse>

export const useAdminGetRequest = <TError = ErrorType<ErrorResponseResponse>>(
 requestId: string, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof adminGetRequest>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false && !!(requestId)
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getAdminGetRequestKey(requestId) : null);
  const swrFn = () => adminGetRequest(requestId, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * Endpoint returns an array of relevant access rules (used in combination with granted cli)
 * @summary Lookup an access rule based on the target
 */
export const userLookupAccessRule = (
    params?: UserLookupAccessRuleParams,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<LookupAccessRule[]>(
      {url: `/api/v1/access-rules/lookup`, method: 'get',
        params
    },
      options);
    }
  

export const getUserLookupAccessRuleKey = (params?: UserLookupAccessRuleParams,) => [`/api/v1/access-rules/lookup`, ...(params ? [params]: [])];

    
export type UserLookupAccessRuleQueryResult = NonNullable<Awaited<ReturnType<typeof userLookupAccessRule>>>
export type UserLookupAccessRuleQueryError = ErrorType<ErrorResponseResponse>

export const useUserLookupAccessRule = <TError = ErrorType<ErrorResponseResponse>>(
 params?: UserLookupAccessRuleParams, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof userLookupAccessRule>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getUserLookupAccessRuleKey(params) : null);
  const swrFn = () => userLookupAccessRule(params, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * Returns a list of the user's favourited access requests. 
 * @summary ListFavorites
 */
export const userListFavorites = (
    
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<ListFavoritesResponseResponse>(
      {url: `/api/v1/favorites`, method: 'get'
    },
      options);
    }
  

export const getUserListFavoritesKey = () => [`/api/v1/favorites`];

    
export type UserListFavoritesQueryResult = NonNullable<Awaited<ReturnType<typeof userListFavorites>>>
export type UserListFavoritesQueryError = ErrorType<ErrorResponseResponse>

export const useUserListFavorites = <TError = ErrorType<ErrorResponseResponse>>(
  options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof userListFavorites>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getUserListFavoritesKey() : null);
  const swrFn = () => userListFavorites(requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * Favorites an access request for a given user. This is used for frequent access requests saving time and repeated actions. 
 * @summary Create Favorite
 */
export const userCreateFavorite = (
    createFavoriteRequestBody: CreateFavoriteRequestBody,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<FavoriteDetail>(
      {url: `/api/v1/favorites`, method: 'post',
      headers: {'Content-Type': 'application/json', },
      data: createFavoriteRequestBody
    },
      options);
    }
  

/**
 * Returns a detailed favorite response. This is used to display a favorite's details on the frontend. 
 * @summary Get Favorite
 */
export const userGetFavorite = (
    id: string,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<FavoriteDetail>(
      {url: `/api/v1/favorites/${id}`, method: 'get'
    },
      options);
    }
  

export const getUserGetFavoriteKey = (id: string,) => [`/api/v1/favorites/${id}`];

    
export type UserGetFavoriteQueryResult = NonNullable<Awaited<ReturnType<typeof userGetFavorite>>>
export type UserGetFavoriteQueryError = ErrorType<ErrorResponseResponse>

export const useUserGetFavorite = <TError = ErrorType<ErrorResponseResponse>>(
 id: string, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof userGetFavorite>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false && !!(id)
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getUserGetFavoriteKey(id) : null);
  const swrFn = () => userGetFavorite(id, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * Delete a saved favorite
 */
export const userDeleteFavorite = (
    id: string,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<void>(
      {url: `/api/v1/favorites/${id}`, method: 'delete'
    },
      options);
    }
  

/**
 * Update a favorite with new FavoriteDetails
 */
export const userUpdateFavorite = (
    id: string,
    createFavoriteRequestBody: CreateFavoriteRequestBody,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<FavoriteDetail>(
      {url: `/api/v1/favorites/${id}`, method: 'put',
      headers: {'Content-Type': 'application/json', },
      data: createFavoriteRequestBody
    },
      options);
    }
  

