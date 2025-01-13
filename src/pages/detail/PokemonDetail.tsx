import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../store';
import { usePokeDetailData } from '../../hooks/services/queries/usePokeDetailData';
import { overlayMadalActions } from '../../store/overlayModal-slice';
import BackBtn from '../../components/button/BackBtn';
import { useQuery } from 'react-query';
import { getPokemonSpeciesData } from '../../api/pokemonApi';
import { strRepeat } from '../../utils/strRepeat';
import ModalBgBox from '../../components/box/ModalBgBox';

interface PropsT {
  name: string;
}

type TypesT = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

const DetailWrap = styled.section`
  position: relative;
  padding: 40px 6.25rem;
  background-color: var(--bg-color);
  max-width: 700px;
  z-index: 1;
  overflow: hidden;
  border-radius: 10px;
`;

const TopWrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TopText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const NameText = styled.h3`
  font-size: 50px;
  font-weight: bold;
  color: var(--text-color);
`;

const NumText = styled.span`
  background-color: #000;
  color: #fff;
  padding: 8px 15px;
  border-radius: 50px;
  font-size: 13px;
`;

const GeneraText = styled.span`
  color: var(--text-color);
  font-size: 16px;
`;

const TopImgBox = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 250px;
  & > img {
    width: 250px;
  }
`;

const DetailInfoWrap = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  background-color: var(--box-color);
  box-shadow: 4px 4px 20px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  gap: 20px;
  max-width: 900px;
  margin: 0 auto;
  margin-top: -20px;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  & > h3 {
    font-size: 14px;
    font-weight: bold;
    color: var(--text-color);
    gap: 10px;
  }

  & > div {
    color: var(--text-color);
  }
`;

const Typebox = styled.div`
  display: flex;
  gap: 4px;
  & > span {
    font-size: 12px;
    background-color: var(--bg-color);
    padding: 2px 8px 8px 8px;
    border-radius: 50px;
    border: 1px solid var(--border-color);
  }
`;

const FlavorText = styled.p`
  color: var(--text-color);
  padding: 20px;
  text-align: center;
  font-size: 14px;
  margin-top: 20px;
`;

const PokemonDetail = ({ name }: PropsT) => {
  const dispatch = useDispatch();
  const nameId = useSelector((state: RootState) => state.overlayModal.id);
  const { pokeData, pokeName, pokeFlavorText, pokeGeneraText } = usePokeDetailData(name);

  const speciesData = nameId === name && pokeData?.species.url;

  const { data: pokemonsecies } = useQuery({
    queryKey: ['pokemonsecies', pokeData],
    queryFn: () => {
      if (!speciesData) throw new Error('Species data is undefined');
      return getPokemonSpeciesData(speciesData);
    },
    onError(err) {
      console.error(err, 'pokemonsecies 에러 발생');
    },
  });

  return (
    <DetailWrap>
      <BackBtn onClick={() => dispatch(overlayMadalActions.toggleModal())} />
      <ModalBgBox color={pokemonsecies?.color?.name} />

      <TopWrap>
        <TopText>
          <NumText>No. {pokeData.id}</NumText>
          <NameText>{pokeName}</NameText>
          <GeneraText>{pokeGeneraText}</GeneraText>

          <TopImgBox>
            {pokeData?.sprites?.front_default && <img src={pokeData.sprites.front_default} loading="lazy" alt="앞면" />}
            {pokeData?.sprites?.back_default && <img src={pokeData.sprites.back_default} loading="lazy" alt="뒷면" />}
          </TopImgBox>
        </TopText>

        <DetailInfoWrap>
          <InfoBox>
            <h3>타입</h3>
            <Typebox>
              {pokeData?.types.map((el: TypesT, idx: number) => <span key={idx}>{el.type && el.type.name}</span>)}
            </Typebox>
          </InfoBox>

          <InfoBox>
            <h3>키</h3>
            <div>{pokeData?.height ? strRepeat(pokeData.height) : '-'}m</div>
          </InfoBox>

          <InfoBox>
            <h3>몸무게</h3>
            <div>{pokeData?.weight ? strRepeat(pokeData.weight) : '-'}kg</div>
          </InfoBox>
        </DetailInfoWrap>

        <FlavorText>{pokeFlavorText}</FlavorText>
      </TopWrap>
    </DetailWrap>
  );
};

export default PokemonDetail;
