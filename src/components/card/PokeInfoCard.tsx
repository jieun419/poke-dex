import styled, { css } from 'styled-components';
import Pokeball from '../../assets/icons/Pokeball';
import TypeText from '../text/TypeText';
import { useQuery } from 'react-query';
import { getPokemonData } from '../../api/pokemonApi';
import PokemonDetail from '../../pages/detail/PokemonDetail';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { overlayMadalActions } from '../../store/overlayModal-slice';

const PokeCardContainer = styled.div`
  position: relative;
  overflow: hidden;
  background-color: var(--box-color);
  border-radius: 10px;
  box-shadow: 4px 4px 20px 0 rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 1;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    box-shadow: 4px 4px 30px 0 rgba(0, 0, 0, 0.3);
    transform: translateY(-15px) scale(1.1);
    z-index: 2;
  }
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  width: 100%;
`;

const TypeBox = styled.div`
  display: flex;
  gap: 3px;
`;

const TextColor = css`
  color: var(--text-color);
`;

const NumText = styled.span`
  font-size: 0.9375rem;
  font-weight: 400;
  ${TextColor}
`;

const NameText = styled.h4`
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 10px;
  ${TextColor}
`;

const BgImg = styled.span`
  position: absolute;
  display: inline-block;
  right: 20px;
  top: 40%;
  transform: translate(0, -50%);
  z-index: -1;
  width: 60%;
  opacity: 0.4;
`;

const Img = styled.img``;

type TypesT = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

interface PokeListDataT {
  name: string;
}

const PokeInfoCard = ({ name }: PokeListDataT) => {
  const dispatch = useDispatch();
  const modal = useSelector((state: RootState) => state.overlayMoal.modalState);

  const { data: pokeData } = useQuery({
    queryKey: ['pokeData', name],
    queryFn: () => getPokemonData(name),
    onError(err) {
      console.log(err);
    },
    refetchOnWindowFocus: false,
  });

  const handlerModal = (nameId: string) => {
    dispatch(overlayMadalActions.idSave(nameId));
    dispatch(overlayMadalActions.toggleModal());
  };

  return (
    <>
      {modal && <PokemonDetail name={name} />}
      <PokeCardContainer id={name} onClick={() => handlerModal(name)}>
        <TextWrap>
          <NumText>no. {pokeData?.id}</NumText>
          <NameText>{name}</NameText>
          <TypeBox>
            {pokeData?.types.map((el: TypesT, idx: number) => <TypeText key={idx} typename={el.type.name} />)}
          </TypeBox>
        </TextWrap>
        <Img src={pokeData?.sprites.front_default} loading="lazy" alt={pokeData?.name} />
        <BgImg>
          <Pokeball color="#f5f5f5" />
        </BgImg>
      </PokeCardContainer>
    </>
  );
};

export default PokeInfoCard;
