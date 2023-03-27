
export interface ISkill {
    abilityName: string,
    costStar: number,
    speed: number,
    progress: {
        star__1_5?: string,
        star__6_10?: string,
        star__11_15?: string,
        star__16?: string,
        star__20_30?: string,
        star__31_40?: string,
        star__41_50?: string,
        star__51?: string,
    },
    description: string | ISkill[],
}

export interface IClass {
    cName: string,
    quote: string,
    skills: ISkill[],
}

export const ClassList: IClass[] = [
    {
        cName: 'Маг',
        quote: 'string',
        skills: [{
            abilityName: '1',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '2',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '3',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '4',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '5',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '6',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '7',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '8',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '9',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '10',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        }]
    },{
        cName: 'Боевой Маг',
        quote: 'string',
        skills: [{
            abilityName: '1',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '2',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '3',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '4',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '5',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '6',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '7',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '8',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '9',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '10',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        }]
    },{
        cName: 'Воин',
        quote: 'string',
        skills: [{
            abilityName: '1',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '2',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '3',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '4',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '5',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '6',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '7',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '8',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '9',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '10',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        }]
    },{
        cName: 'Мастер',
        quote: 'string',
        skills: [{
            abilityName: '1',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '2',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '3',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '4',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '5',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '6',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '7',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '8',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '9',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '10',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        }]
    },{
        cName: 'Рейнджер',
        quote: 'string',
        skills: [{
            abilityName: '1',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '2',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '3',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '4',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '5',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '6',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '7',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '8',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '9',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '10',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        }]
    },{
        cName: 'Жизнь',
        quote: 'string',
        skills: [{
            abilityName: '1',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '2',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '3',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '4',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '5',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '6',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '7',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '8',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '9',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        },{
            abilityName: '10',
            costStar: 1,
            speed: 3,
            progress: {
                star__1_5: 'string',
                star__6_10: 'string',
                star__11_15: 'string',
                star__16: 'string',
            },
            description: 'string',
        }]
    },{
        cName: 'Элементалист',
        quote: 'string',
        skills: [{
            abilityName: '1',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '2',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '3',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '4',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '5',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '6',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        }]
    },{
        cName: 'Пространство',
        quote: 'string',
        skills: [{
            abilityName: '1',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '2',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '3',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '4',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '5',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '6',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        }]
    },{
        cName: 'Свет/Тьма',
        quote: 'string',
        skills: [{
            abilityName: '1',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '2',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '3',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '4',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '5',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '6',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        }]
    },{
        cName: 'Драконий Воитель',
        quote: 'string',
        skills: [{
            abilityName: '1',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '2',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '3',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '4',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '5',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '6',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        }]
    },{
        cName: 'Воплощение Материи',
        quote: 'string',
        skills: [{
            abilityName: '1',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '2',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '3',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '4',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '5',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '6',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        }]
    },{
        cName: 'Рыцарь Стихий',
        quote: 'string',
        skills: [{
            abilityName: '1',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '2',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '3',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '4',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '5',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '6',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        }]
    },{
        cName: 'Страж',
        quote: 'string',
        skills: [{
            abilityName: '1',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '2',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '3',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '4',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '5',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '6',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        }]
    },{
        cName: 'Крушитель',
        quote: 'string',
        skills: [{
            abilityName: '1',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '2',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '3',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '4',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '5',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '6',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        }]
    },{
        cName: 'Мастер Клинков',
        quote: 'string',
        skills: [{
            abilityName: '1',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '2',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '3',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '4',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '5',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '6',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        }]
    },{
        cName: 'Стрелок',
        quote: 'string',
        skills: [{
            abilityName: '1',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '2',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '3',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '4',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '5',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '6',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        }]
    },{
        cName: 'Охотник на Монстров',
        quote: 'string',
        skills: [{
            abilityName: '1',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '2',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '3',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '4',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '5',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '6',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        }]
    },{
        cName: 'Фантом',
        quote: 'string',
        skills: [{
            abilityName: '1',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '2',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '3',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '4',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '5',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '6',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        }]
    },{
        cName: 'Метаморф',
        quote: 'string',
        skills: [{
            abilityName: '1',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '2',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '3',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '4',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '5',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '6',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        }]
    },{
        cName: 'БиоМант',
        quote: 'string',
        skills: [{
            abilityName: '1',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '2',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '3',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '4',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '5',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '6',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        }]
    },{
        cName: 'Антимаг',
        quote: 'string',
        skills: [{
            abilityName: '1',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '2',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '3',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '4',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '5',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '6',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        }]
    },{
        cName: 'Мастер КИ',
        quote: 'string',
        skills: [{
            abilityName: '1',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '2',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '3',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '4',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '5',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '6',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        }]
    },{
        cName: 'ИяйДо',
        quote: 'string',
        skills: [{
            abilityName: '1',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '2',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '3',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '4',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '5',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '6',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        }]
    },{
        cName: 'Демоник',
        quote: 'string',
        skills: [{
            abilityName: '1',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '2',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '3',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '4',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '5',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        },{
            abilityName: '6',
            costStar: 1,
            speed: 3,
            progress: {
                star__20_30: 'string',
                star__31_40: 'string',
                star__41_50: 'string',
                star__51: 'string',
            },
            description: 'string',
        }]
    },]