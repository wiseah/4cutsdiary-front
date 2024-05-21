import React from 'react';
import styled from 'styled-components';

const AlbumNameContainer = styled.div`
    width: 250px;
    height: 40px;
    border-radius: 25px;
    border: 5px solid #f48b9f;
    margin-bottom: 10px;
    cursor: pointer;
`
const Input = styled.input`
    width: 250px;
    font-size: 14px;
    margin-top: 11px;
    margin-left: 10px;
    flex-grow: 1;
    border: none;
    outline: none;
    background-color: transparent;

    &::placeholder {
        color: #7C3845;
    }
`; 

const AlbumNameInput = 
    ({placeholder, value, ...props
        }) => {
            return (
                <AlbumNameContainer {...props}>
                    <Input
                        type= "text"
                        placeholder={placeholder}
                        // onInput={onInput}
                        value={value}
                    />
                </AlbumNameContainer>
            );
        };
    

export default AlbumNameInput;