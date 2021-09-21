import {ISneaker} from "../sneakersList";
import {Type, Name, Price, Wrapper, Info, AdditionalInfo} from "./styles";

export const SneakerItem: React.FC<ISneaker> = (props) => {

    const {name, price, discount, size, material, type, company} = props;

    return (
        <Wrapper>
            <img src="" alt=""/>
            <Price>
                {price}
            </Price>
            <Info>
                <Name>
                    {name}
                </Name>
                 <Type>
                     {type}
                 </Type>
            </Info>
            <AdditionalInfo>21</AdditionalInfo>
        </Wrapper>
    )
}