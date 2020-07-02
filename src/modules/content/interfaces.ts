export type IContentRootState = Readonly<{
  view: string,
}>;

/* eslint-disable @typescript-eslint/no-explicit-any */
type UnsafeReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
/* eslint-enable @typescript-eslint/no-explicit-any */

export interface IActionHandler<T> {
  (state: IContentRootState, payload: UnsafeReturnType<T>): IContentRootState,
}
