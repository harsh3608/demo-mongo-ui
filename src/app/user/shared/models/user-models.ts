export interface RegisterModel {
    firstName: string
    lastName: string
    gender: string
    dob: string
    email: string
    phone: string
    password: string
    createdDate: string
    userType: string
}

export interface LoginModel {
    email: string
    password: string
}

export interface UserCommonResponse {
    statusCode: number
    isSuccess: boolean
    response: AuthTicket
    message: string
}
  
export interface AuthTicket {
    personName: string
    email: string
    userType: string
    token: string
    expiration: string
}