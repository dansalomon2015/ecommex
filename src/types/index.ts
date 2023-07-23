export enum PrivilegeType {
    USER_PRIVILEGE = "USER_PRIVILEGE",
    ADMIN_PRIVILEGE = "ADMIN_PRIVILEGE",
    SUPER_PRIVILEGE = "SUPER_PRIVILEGE",
    VIEW_USERS = "VIEW_USERS",
    EDIT_USERS = "EDIT_USERS",
    DELETE_USERS = "DELETE_USERS",
    CREATE_USERS = "CREATE_USERS",
}

export enum OrderStateType {
    INITIATED = "INITIATED",
    ASSIGNED = "ASSIGNED",
    UNASSIGNED = "UNASSIGNED",
    USER_CANCELLED = "USER_CANCELLED",
    CANCELLED = "CANCELLED",
    REJECTED = "REJECTED",
}

export enum PaymentStatusType {
    SUCCESS = "SUCCESS",
    FAILED = "FAILED",
    PENDING = "PENDING",
    CANCELLED = "CANCELLED",
}

export enum ProductAtTributeTypeType {
    COLOR = "COLOR",
    VOLUME = "VOLUME",
    SIZE = "SIZE",
    TYPE = "TYPE",
}

export enum ApiResponseCodeType {
    SUCCESS = 0,
    FAILED = 1,
    ERROR = 2,
}

export enum HTTP_RESPONSE_CODES {
    OK = 200,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    INTERNAL_SERVER_ERROR = 500,
    NOT_IMPLEMENTED = 501,
    BAD_GATEWAY = 502,
    REQUEST_CONFLICT = 409,
    UNPROCESSABLE_ENTITY = 422,
}

export interface JwtAccessDecoded {
    id: number;
    email: string;
}
