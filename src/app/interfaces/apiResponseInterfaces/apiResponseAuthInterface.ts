export interface ApiResponseInterface<T>{
    status: boolean,
    message?: string,
    data: T
}