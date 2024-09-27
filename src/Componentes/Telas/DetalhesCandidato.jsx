import { Container } from "react-bootstrap";

export default function DetalhesCandidato(props) {
    return (
        <Container>
            <h1>Detalhes Candidato</h1>
            <h3>ID: {props.candidato.id}</h3>
            <h3>Email: </h3>
            <h3>Nome: </h3>
            <h3>Avatar: </h3>
            <h3>Propostas: </h3>
            <h3>Curtidas: </h3>
            <h3>Descurtidas: </h3>
            <h3>Questionamentos: </h3>
        </Container>
    );
}