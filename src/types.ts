export interface FormInput {
    name: string,
    label: string,
    type: string,  //this type could also be broken down further into html form elements
    register: object,
    options?: string[],
    placeholder?: string,
}

export interface InputComponent {
    name: string,
    ref: any
}