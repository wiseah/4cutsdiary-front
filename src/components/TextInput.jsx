import styled from 'styled-components';

const Container = styled.div`
    width: 270px;
    height: 37px;
    /* padding: 17px; */
    border-radius: 8px;
    font-weight: 400;
    font-size: 14px;

    display: flex;
    align-items: center;
    gap: 8px;
    background-color: transparent;
`;

const Input = styled.input`
    flex-grow: 1;
    border: none;
    outline: none;
    background-color: transparent;

    &::placeholder {
        color: #968E88;
    }
`;

const Item = styled.div``;

const TextInput = ({
    placeholder,
    onInput,
    value,
    textHidden,
    additionalItem,
    ...props
}) => {
    const inputType = textHidden ? 'password' : 'text';
    return (
        <Container {...props}>
            <Input
                type={inputType}
                placeholder={placeholder}
                onInput={onInput}
                value={value}
            />
            <Item>{additionalItem}</Item>
        </Container>
    );
};

export default TextInput;
