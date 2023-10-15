import React from 'react';
import styled from 'styled-components/macro'
import { BoldSpan, Header1, Header2, TextPurple } from './GlobalStyles'

export const MinTilgang = () => {
  return (
    <SectionWrapper>
      <TextWrapper>
        <Header1>Min tilgang</Header1>
        <Text>
        Ligesom der ikke er to klienter, der er ens, gør det samme sig gældende for terapeuter.
        Så hvordan vælger man den helt rigtige terapeut?
        </Text>
        <Text>
        Det kan godt føles uoverskueligt at danne sig et overblik over,
        hvordan forskellige terapeuter og psykologer arbejder.
        Derfor har jeg her samlet nogle nøgleord for lige præcis min terapeutiske praksis,
        så du kan træffe et valg på et informeret grundlag.
        </Text>
        <Bridge>
          <BoldSpan>Min tilgang er<Dots>…</Dots></BoldSpan>
        </Bridge>
      </TextWrapper>
      <TextWrapper>
        <Header2>Normkritisk</Header2>
        <Text>
            Normer er uskrevne regler eller værdier, der påvirker os alle,
            ofte uden vi er opmærksomme på det. Normer er i sig selv ikke skadelige,
            men kan gå hen og blive det, når vi bliver fastlåst i særlige
            forventninger og føler os forkerte, når vi ikke lever op til disse uskrevne regler.
            Det kan især være smertefuldt for minoriserede personer, når samfundets normative
            idéer internaliseres og fører til usunde og uhensigtsmæssige måder at
            relatere til sig selv på.
        </Text>
        <Text>
            Normkritik er for alle, og du behøver ikke tilhøre en marginaliseret
            befolkningsgruppe for at have gavn af at forholde dig normkritisk til
            dig selv og din omverden. Når vi tør sætte spørgsmålstegn ved de overbevisninger,
            vi hver især har med i bagagen, giver vi os selv nye muligheder og lærer os selv
            at kende på nye måder. Det betyder ikke, at vi afviser og kritiserer alle normer,
            men at vi forholder os nysgerrigt til dem og tør sætte spørgsmålstegn ved dem,
            især når de ikke tjener os. Som normkritisk terapeut vil jeg støtte dig i at
            gøre de usynlige normer synlige, så vi bedre kan udforske dem.
        </Text>
      </TextWrapper>
      <TextWrapper>
        <Header2>Inkluderende</Header2>
        <Text>
          Der er plads til dig i min praksis uanset hvem du er og hvordan du lever dit liv.
          Når du går til en fagperson, fortjener du at føle dig sikker i,
          at denne person rummer dig fuldt og helt, og at du ikke skal forklare
          eller forsvare den, du er.
        </Text>
        <Text>
          Jeg har særlig viden, forståelse og erfaring med områder såsom minoritetsstress,
          neurodiversitet, samt køn, krop og seksualitet, og min praksis er queer-venlig,
          intersektionel, fællesskabsorienteret, m.m., og opererer
          ud fra det menneskesyn, at mangfoldighed er en gave.
        </Text>
      </TextWrapper>
      <TextWrapper>
        <Header2>Integrativ</Header2>
        <Text>
          Mit faglige udgangspunkt er i eksistentiel/humanistisk psykologi og dennes menneskesyn.
          Det betyder, at jeg har fokus på menneskets eksistentielle vilkår og store spørgsmål,
          og ikke mindst vigtigheden af at opleve mening i vores liv og lære at lytte til vores
          egen krop, behov og værdier.
        </Text>
        <Text>
          At min psykoterapeutiske uddannelsesbaggrund er integrativ betyder,
          at jeg er undervist i en bred vifte af anerkendte terapeutiske metoder,
          hvorfra jeg kan trække på forskellige metoder og værktøjer og tilpasse
          terapien efter den enkelte. De forskellige metoder understøtter og
          supplerer hinanden til gavn for dig, og vi udforsker i fællesskab
          hvad der fungerer bedst og er mest givende for dig.
        </Text>
      </TextWrapper>
      <TextWrapper>
        <Header2>Klient-centreret</Header2>
        <Text>
          Mit udgangspunkt i vores møde er, at du først og fremmest er den største
          ekspert på dit eget liv. Vores samtaler er derfor en ligeværdig dialog
          præget af gensidig respekt, og selvom jeg anerkender at
          magtstrukturer og ubalancer findes i alle relationer, stræber jeg alligevel
          efter at skabe en ikke-hierarkisk og samarbejdende relation til mine klienter.
          Sammen tager vi et fælles ansvar for arbejdet med din livssituation,
          diskuterer foretrukne og gavnlige strategier, og identificerer dine mål og ønsker.
        </Text>
        <Text>
          At påbegynde et terapeutisk forløb er din beslutning og på dine præmisser,
          og dit ansvar i processen er først og fremmest at være nysgerrig.
          Gå ind i processen med åbenhed og stå til ansvar for dig selv og det
          arbejde, du lægger i terapien. Jeg er med dig på rejsen og støtter dig
          med min faglighed og erfaring, men mit håb er, at du tager ejerskab over
          processen - og at du hen ad vejen også mærker det ejerskab i andre områder af dit liv.
        </Text>
      </TextWrapper>
      <TextWrapper>
        <Header2>Erfaringsbaseret</Header2>
        <Text>
          Det er vigtigt for mig, at min faglighed har et videnskabeligt fundament,
          og jeg fordyber mig løbende i evidensbaseret forskning.
          Men i forgrunden er de levede erfaringer; mine klienters levede liv er ikke bare
          teoretiske tankeeksperimenter for mig, og jeg bruger
          også mine egne erfaringer som minoriseretmenneske
          i mit arbejde. Min personlige oplevelse er, at dette også kan være en fordel for vores
          terapeutiske relation og din tryghed som klient. Når vi mødes i det terapeutiske rum,
          mødes vi jo også som mennesker, der kan spejle sig i hinanden, og det trygge fællesskab
          kan i sig selv være helende.
        </Text>
        <Text>
          Al forskning viser, at relationen mellem terapeut og klient er vigtig for et godt
          psykoterapeutisk forløb - derfor er det også vigtigt for mig, at kemien er der,
          for at du kan få det fulde udbytte. Viser det sig, at vi ikke er et godt match,
          vil jeg altid stræbe efter at henvise dig til andre mulige terapeuter eller psykologer,
          der kunne give mening for lige præcis dig.
        </Text>
      </TextWrapper>
    </SectionWrapper>
  )
}

// Styled components
const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeIn 0.5s;
  padding-bottom: 60px;
  padding-top: 50px;
    @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
    }
`

const TextWrapper = styled.div`
  margin: 0 auto 50px auto;
  width: 70%;
  min-width: 320px;
  max-width: 600px;
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Text = styled(TextPurple)`
  text-align: justify;
`

const Bridge = styled(TextPurple)`
  text-align: center;
  margin: 30px auto 5px auto;
  font-family: 'M PLUS Rounded 1c', 'Archivo', sans-serif;
  font-size: 1.6rem;
`

const Dots = styled.span`
  font-family: 'Archivo';
`