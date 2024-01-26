import { useQuery } from 'react-query';
import { getPokemonData, getPokemonSpeciesData } from '../../api/pokemonApi';
import styled from 'styled-components';
import BackArrow from '../../assets/icons/BackArrow';
import { useDispatch, useSelector } from 'react-redux';
import { overlayMadalActions } from '../../store/overlayModal-slice';
import { RootState } from '../../store';
import { Suspense, useRef } from 'react';
import Loading from '../loading/Loading';

interface ColorT {
  color: string;
}

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

const DetailContain = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

const DetailContainer = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const DropBox = styled.div`
  position: fixed;
  background-color: #000;
  opacity: 0.6;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
`;

const DetailWrap = styled.section`
  position: relative;
  padding: 40px 6.25rem;
  background-color: var(--bg-color);
  max-width: 700px;
  z-index: 1;
  overflow: hidden;
  border-radius: 10px;
`;

const BgBox = styled.div<ColorT>`
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100vh - 60vh);
  background-color: ${({ color }) => (color ? color : '#333')};
  opacity: 0.2;
  position: absolute;
  border-bottom: 1px solid #000;
  z-index: -1;
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

const TopImgBox = styled.div`
  display: flex;
  flex: 1;
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

const BackBtn = styled.button``;

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

const PokemonDetail = ({ name }: PropsT) => {
  const dispatch = useDispatch();
  const nameId = useSelector((state: RootState) => state.overlayMoal.id);
  const idRef = useRef<HTMLDivElement>(null);

  const { data: pokeData } = useQuery({
    queryKey: ['pokemondetail', nameId],
    queryFn: () => getPokemonData(nameId),
    onError(err) {
      console.log(err);
    },
    refetchOnWindowFocus: false,
  });

  const speciesData = pokeData?.species.url;

  const { data: species } = useQuery({
    queryKey: ['pokemonsecies', pokeData],
    queryFn: () => getPokemonSpeciesData(speciesData),
    onError(err) {
      console.log(err);
    },
    refetchOnWindowFocus: false,
  });

  const handlerModal = () => {
    dispatch(overlayMadalActions.toggleModal());
  };

  const strRepeat = (value: number): string => {
    const str = String(value);
    const result = str.slice(0, str.length - 1) + '.' + str.slice(str.length - 1);
    return result.padStart(3, '0');
  };

  return (
    <>
      {nameId === name && (
        <DetailContain id={nameId} ref={idRef}>
          <DetailContainer>
            <DetailWrap>
              <Suspense fallback={<Loading />}>
                <BackBtn onClick={handlerModal}>
                  <BackArrow />
                </BackBtn>

                <BgBox color={species?.color && species?.color.name} />
                <TopWrap>
                  <TopText>
                    <NumText>No. {pokeData?.id}</NumText>
                    <NameText>{pokeData?.name}</NameText>
                  </TopText>

                  <TopImgBox>
                    <img src={pokeData?.sprites.front_default} loading="lazy" alt="앞면" />
                    <img src={pokeData?.sprites.back_default} loading="lazy" alt="뒷면" />
                  </TopImgBox>
                </TopWrap>

                <DetailInfoWrap>
                  <InfoBox>
                    <h3>타입</h3>
                    <Typebox>
                      {pokeData?.types.map((el: TypesT, idx: number) => (
                        <span key={idx}>{el.type && el.type.name}</span>
                      ))}
                    </Typebox>
                  </InfoBox>

                  <InfoBox>
                    <h3>키</h3>
                    <div>{strRepeat(pokeData?.height)}m</div>
                  </InfoBox>

                  <InfoBox>
                    <h3>몸무게</h3>
                    <div>{strRepeat(pokeData?.weight)}kg</div>
                  </InfoBox>
                </DetailInfoWrap>
              </Suspense>
            </DetailWrap>

            <DropBox onClick={handlerModal} />
          </DetailContainer>
        </DetailContain>
      )}
    </>
  );
};

export default PokemonDetail;
