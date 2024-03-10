import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/loginpage';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageParentData = Omit<EnsureDefined<import('../$types.js').LayoutData>, keyof LayoutData> & EnsureDefined<LayoutData>;
type LayoutRouteId = RouteId | "/loginpage" | "/loginpage/components" | "/loginpage/components/admin" | "/loginpage/components/admin/alteremployees" | "/loginpage/components/admin/createowners" | "/loginpage/components/employee" | "/loginpage/components/owner" | "/loginpage/components/owner/inbox" | "/loginpage/components/owner/request" | "/loginpage/components/user" | "/loginpage/components/user/complaints" | "/loginpage/components/user/editprofile" | "/loginpage/components/user/groupchat/chat1" | "/loginpage/components/user/groupchat/chat2" | "/loginpage/components/user/home" | "/loginpage/components/user/house" | "/loginpage/components/user/notifications" | "/loginpage/components/user/profile" | "/loginpage/components/user/search/search1" | "/loginpage/components/user/search/search2" | "/loginpage/createacc" | "/loginpage/login"
type LayoutParams = RouteParams & {  }
type LayoutParentData = EnsureDefined<import('../$types.js').LayoutData>;

export type PageServerData = null;
export type PageData = Expand<PageParentData>;
export type LayoutServerData = null;
export type LayoutData = Expand<LayoutParentData>;