import { StackScreenProps } from "@react-navigation/stack";

export enum auth {
    signin = 'signin',
    signup = 'signup',
    hometab = 'hometab',
    home = 'home',
    appointemnts = 'appointemnts',
    newappoitment = 'newappoitment',
    tab = 'tab'
}

export enum stack {
    home = 'home',
}

export type StackParamList = {
    Home: undefined
};

export type AuthParamList = {
    signin: undefined,
    signup: undefined,
    hometab: undefined,
    appointemnts: undefined,
    home: undefined,
    tab: undefined,
    newappoitment: undefined,
};

export type AuthScreen<T extends keyof AuthParamList> = StackScreenProps<AuthParamList, T>;
export type StackScreen<T extends keyof StackParamList> = StackScreenProps<StackParamList, T>;

