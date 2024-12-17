import React from "react";
import * as Styled from './Button.style';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    disabled?: boolean;
    children: React.ReactNode;
    style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ disabled, children, style, ...rest }) => {
    return (
        <Styled.Button disabled={disabled} style={style} {...rest}>
            {children}
        </Styled.Button>
    );
};

export default Button;