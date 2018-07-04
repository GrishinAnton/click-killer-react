import React from 'react';
import styled from 'styled-components';

export default function Registartion({ onEnter }) {

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
                        <input type="password" name="email" placeholder="Пассворд" required /> 
                        <button>Глазок</button>                   
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

`;

const Input = styled.div`

`;

const InputPassword = styled.div`

`;

const Select = styled.div`

`;

const Button = styled.div`

`;