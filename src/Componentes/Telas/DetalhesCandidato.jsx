import { Container } from "react-bootstrap";

export default function DetalhesCandidato(props) {
    return (
        <Container>
            <h1>Detalhes Candidato</h1>
            <h3>ID: {props.clicarCandidato.id}</h3>
            <h3>Email: {props.clicarCandidato.email} </h3>
            <h3>Nome: {props.clicarCandidato.nome}</h3>
            <h3>Avatar: {props.clicarCandidato.avatar}</h3>
            <h3>Propostas: {props.clicarCandidato.propostas}</h3>
            <h3>Curtidas: {props.clicarCandidato.curtidas}</h3>
            <h3>Descurtidas: {props.clicarCandidato.descurtidas}</h3>
            <h3>Questionamentos: {
                props.clicarCandidato.questionamentos.map((questionamento)=>{
                    return(
                        <h4>{questionamento}</h4>
                    );
                })
                }</h3>
        </Container>
    );
}