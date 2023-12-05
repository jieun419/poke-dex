import { useQuery } from 'react-query';
import { getPokemonData, getPokemonSpeciesData } from '../../api/pokemonApi';
import styled from 'styled-components';
import BackArrow from '../../assets/icons/BackArrow';
import { useDispatch, useSelector } from 'react-redux';
import { overlayMadalActions } from '../../store/overlayModal-slice';
import { RootState } from '../../store';
import { useRef } from 'react';
import Loading from '../loading/Loading';

interface ColorT {
  color: string;
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
  background-color: #0000000d;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: -1;
`;

const DetailWrap = styled.section`
  position: relative;
  padding: 40px 6.25rem;
  background-color: #fff;
  width: calc(100vw - 20%);
  height: calc(100vh - 40%);
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

  & > span {
    font-size: 13px;
  }
  & > h3 {
    font-size: 50px;
    font-weight: bold;
  }
`;

const TopImgBox = styled.div`
  display: flex;
  flex: 1;
  & > img {
    width: 250px;
  }
`;

const DetailInfoWrap = styled.section`
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  border: 1px solid #dcdcdc;
  gap: 20px;
  max-width: 900px;
  margin: 0 auto;
  margin-top: -50px;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  gap: 5px;

  & > h3 {
    font-size: 14px;
    font-weight: bold;
    color: #666;
    gap: 10px;
  }
`;

const BackBtn = styled.button``;

const PokemonDetail = () => {
  const dispatch = useDispatch();
  const nameId = useSelector((state: RootState) => state.overlayMoal.id);
  const modal = useSelector((state: RootState) => state.overlayMoal.modalState);
  const idRef = useRef<HTMLDivElement>(null);
  const detailId = idRef.current && idRef.current.id;

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
  });

  const handlerMoal = () => {
    dispatch(overlayMadalActions.toggleModal());
  };

  console.log('nameId', modal, nameId);

  return (
    <DetailContain id={nameId} ref={idRef}>
      {!pokeData && !species && <Loading />}
      {nameId === detailId && (
        <DetailContainer>
          <DropBox />

          <DetailWrap>
            <BackBtn onClick={handlerMoal}>
              <BackArrow />
            </BackBtn>

            <BgBox color={species?.color && species?.color.name} />
            <TopWrap>
              <TopText>
                <span>No. {pokeData?.id}</span>
                <h3>{pokeData?.name}</h3>
              </TopText>

              <TopImgBox>
                <img src={pokeData?.sprites.front_default} alt="앞면" />
                <img src={pokeData?.sprites.back_default} alt="뒷면" />
              </TopImgBox>
            </TopWrap>

            <DetailInfoWrap>
              <InfoBox>
                <h3>타입</h3>
                {pokeData?.types.map((el: TypesT, idx: number) => (
                  <div key={idx}>
                    <div>{el.type && el.type.name}</div>
                  </div>
                ))}
              </InfoBox>

              <InfoBox>
                <h3>키</h3>
                <div>{pokeData?.height}m</div>
              </InfoBox>

              <InfoBox>
                <h3>분류</h3>
                <div></div>
              </InfoBox>

              <InfoBox>
                <h3>성별</h3>
                <div></div>
              </InfoBox>

              <InfoBox>
                <h3>몸무게</h3>
                <div>{pokeData?.weight}kg</div>
              </InfoBox>

              <InfoBox>
                <h3>특성</h3>
                <div></div>
              </InfoBox>
            </DetailInfoWrap>
          </DetailWrap>
        </DetailContainer>
      )}
    </DetailContain>
  );
};

export default PokemonDetail;
