import React from 'react';
import styled from 'styled-components';

export default function Registartion({ onEnter, passwordValue, changePassword }) {

    return (
        <Wrapper>
            <Form>
                <Radio>
                    <input type="radio" name="radio" id="enter" value="enter" />
                    <label htmlFor="enter">Зарегестрироваться</label>
                    <input type="radio" name="radio" id="reg" value="reg" />
                    <label htmlFor="reg">Войти</label>
                </Radio>
                <Input>
                    <input type="text" name="email" placeholder="Ваша почта" required />
                    <InputPassword>
                        <input type={passwordValue} name="password" placeholder="Пассворд" required /> 
                        <button type="button" onClick={() => changePassword(passwordValue)}>Глазок</button>                   
                    </InputPassword>
                </Input>
                <Select>
                    <select>
                        <option value="2">2 этаж</option>
                        <option value="3">3 этаж</option>
                        <option value="autors">Аутсорс</option>
                        <option value="udalenka">Удаленка</option>
                    </select>
                </Select>
                <Button>
                    <button onClick={onEnter}>Понеслась!!</button>
                </Button>
            </Form>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 30px;
`;

const Form = styled.form`

`;

const Radio = styled.div`

    text-align: center;
    margin-bottom: 15px;

    label,
    input {
        cursor: pointer;
    }

`;

const Input = styled.div`

    position: relative;

    input {
        width: 100%;
        margin-bottom: 10px;
        height: 30px;
        padding-left: 15px;

        border-radius: 5px;

        line-height: 30px;
        border: 1px solid grey;
    }
`;

const InputPassword = styled.div`
    position: relative;
    
    button {
        position: absolute;
        top: 7px;
        right: 5px;
    }
`;

const Select = styled.div`
    width: 50%;
    margin-bottom: 15px;

    select {
        width: 100%;
    }
`;

const Button = styled.div`

    text-align: right;
`;