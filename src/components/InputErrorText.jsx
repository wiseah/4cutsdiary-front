import styled from 'styled-components';

const Text = styled.div`
    height: 15px;
    /* padding: 0 17px; */
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: -0.02em;
    color: #d64949;
    margin: 2px 30px;
`;

const InputErrorText = ({ text }) => {
    return <Text>{text}</Text>;
};

export default InputErrorText;
