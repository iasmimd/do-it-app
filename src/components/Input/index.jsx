import { Container, InputContainer } from "./styles"

const Input = ({label, icon: Icon, ...rest}) => {
    return(
        <Container>
            <div>{label}</div>
            <InputContainer>
            {Icon && <Icon size={20}/>}
            <input {...rest}/>
            </InputContainer>
        </Container>
    )
}

export default Input