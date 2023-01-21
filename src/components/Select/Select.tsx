import { FC } from "react";
import classes from './select.module.css';

type ComponentPropsType = {
    value: string
    name?: string
    className?: string
    options: Array<string>
}

const Select: FC<ComponentPropsType> = ({ options, name = '', className = '', value }) => {
    return (
        <div className={classes.wrapper}>
            <select name={name} className={className}>
                {!!options.length && options.map((el, i) => <option key={i} selected={el === value}>{el}</option>)}
            </select>
        </div>
    )
}

export default Select;