import React from 'react';
import styles from './FormControls.module.css'


export type FormType = {
	input: InputType;
	meta: MetaType;
	placeholder: string;
	type: string;
}
export type InputType = {
	name: string;
	value: string;
}
export type MetaType = {
	visited: boolean;
	touched: boolean;
	active: boolean;
	asyncValidating: boolean;
	autofilled: boolean;
	dirty: boolean;
	form: string;
	invalid: boolean;
	pristine: boolean;
	submitting: boolean;
	submitFailed: boolean;
	valid: boolean;
}





export const FormControl=({input, meta, ...props}:any)=>{

    const haseError = meta.touched && meta.error
    return (
        <div className={styles.formControl + ' ' + (haseError ?  styles.error : '')}>
            <div>
                {props.children}
            </div>
            {  haseError && <span>{meta.error}</span>}
        </div>
    )
}


export const Textarea = (props:FormType) => {
    const {input, meta, ...restProps}=props
    return (
        <FormControl {...props}><input {...input} {...restProps}/></FormControl>
    )
}

export const Input = (props: FormType) => {
    const {input, meta, ...restProps}=props
    return (
        <FormControl {...props}><input {...input} {...restProps}/></FormControl>
    )
}

// export const Textarea = ({input, meta, ...props}: any) => {
//
//     const haseError = meta.touched && meta.error
//     return (
//         <div className={styles.formControl + ' ' + (haseError ?  styles.error : '')}>
//             <div>
//                 <textarea {...input} {...props}/>
//             </div>
//             {  haseError && <span>{meta.error}</span>}
//         </div>
//     )
// }


// export const Input = ({input, meta, ...props}: any) => {
//
//     const haseError = meta.touched && meta.error
//     return (
//         <div className={styles.formControl + ' ' + (haseError ?  styles.error : '')}>
//             <div>
//                 <input {...input} {...props}/>
//             </div>
//             {  haseError && <span>{meta.error}</span>}
//         </div>
//     )
// }