import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import styled from 'styled-components';

const Button = styled.button`
    background: none;
    padding: 4px 20px;
    border: none;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #968E88;

    transform: background-color 0.2s;

    cursor: pointer;

    & > svg {
        width: 24px;
        height: 24px;
    }

    &:hover {
        background-color: #0000000f;
    }
`;

const PasswordEyeButton = ({ value, onClick }) => {
    const icon = value ? <IoIosEyeOff /> : <IoIosEye />;

    return <Button onClick={onClick}>{icon}</Button>;
};

export default PasswordEyeButton;
