
export interface CattleType {
    _id:string,
    race:string | RaceType,
    health:string | healthType,
    weight:number,
    genero:string,
    food:string | foodType,
    date:Date | string
}

export interface RaceType{
    _id:string,
    name:string,
    origin:string,
    type:string,
    temperature:string,
    feactures:string,
    catte:string
}

export interface healthType{
    _id:string,
    status:string,
    observes:string,
    treatment:string,
    lastDate:string,
    cattle:string,
}


export interface healthStatusType{
    _id:string,
    value:string,
    status:string
}

export interface statusType{
    _id:string,
    value:string,
    status:string
}

export interface foodType{
    _id:string,
    name:string,
    amount:number,
    cattle:string | CattleType
}

type healthTypeWithCattle = Omit<healthType,'cattle'|'status'> & {
    cattle:CattleType,
    status:statusType
}