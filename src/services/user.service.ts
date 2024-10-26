import { API } from "@/config/api";
import {resetPassword, validateForgetPassword, validateLogin, validateRegister } from "@/lib/utils";
import { UserType } from "@/types";
import { AxiosError } from "axios";
import z from 'zod'

interface confirmUserType {
    code: UserType['code'],
    token: UserType['token']
}

interface messageStatusType{
    message:string,
    status: 'success' | 'error'
}

export async function createAccount(user: z.infer<typeof validateRegister>):Promise<messageStatusType>{    
    try {
        const { data } = await API.post('/user/register', user)
        return {
            message:data.message,
            status: 'success'
        }


    } catch (error) {
        return {
            message: error instanceof AxiosError ? error.message : 'Request Failed' ,
            status: 'error'
        }
    }
}

export async function confirmUser({code,token}:confirmUserType):Promise<messageStatusType>{

    try {
        const { data } = await API.put(`/user/confirmed/${token}`, {code})
        return {
            message:data.message,
            status: 'success'
        }


    } catch (error) {
        return {
            message: error instanceof AxiosError ? error.message : 'Request Failed' ,
            status: 'error'
        }
    }
    
}

export async function LoginUser(user: z.infer<typeof validateLogin>){
    try {
        const { data } = await API.post('/user/login', user)
        return {
            message:data.message,
            status: 'success'
        }
    } catch (error) {
        return {
            message: error instanceof AxiosError ? error.message : 'Request Failed' ,
            status: 'error'
        }
        
    }
}

export async function forgetPassword(user: z.infer<typeof validateForgetPassword>){
    try {
        const { data } = await API.post('/user/forget-password', user)
        return {
            message:data.message,
            status: 'success'
        }
    } catch (error) {
        return {
            message: error instanceof AxiosError ? error.message : 'Request Failed' ,
            status: 'error'
        }
    }
}