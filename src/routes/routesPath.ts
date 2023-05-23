import { StackScreenProps } from "@react-navigation/stack";

export enum auth {
    signin = 'signin',
    signup = 'signup',
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
};

export type AuthScreen<T extends keyof AuthParamList> = StackScreenProps<AuthParamList, T>;
export type StackScreen<T extends keyof StackParamList> = StackScreenProps<StackParamList, T>;

