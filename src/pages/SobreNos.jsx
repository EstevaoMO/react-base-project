import ListContainer from "../components/ListContainer/ListContainer";
import Cartao from "../components/Cartao/Cartao";
import Base from "./Base"

const dados = [
    {
    titulo: "Um título do Array",
    texto: "Um texto grande do Array."
    },
    {
        titulo: "Um outro título do Array",
        texto: "Um outro texto do Array."
    }
]

const SobreNos = () => (
        <Base>
        <ListContainer>
        {
            dados.map( (ele, i) => (
                <Cartao
                    key={i}
                    titulo={ele.titulo}
                    texto={ele.texto}
                />   
                
            ))
        }
        </ListContainer>
        </Base>
)

export default SobreNos;