export interface FormInput {
    name: string,
    label: string,
    type: string,  //this type could also be broken down further into html form elements
    options?: FormInputOption[],
    placeholder?: string,
    validators?: any[]
}

export interface FormInputOption {
    value: string,
    label: string
}

export interface InputComponent {
    onChange: (a:any, b:any) => void,
    input: FormInput,
    value: any
}