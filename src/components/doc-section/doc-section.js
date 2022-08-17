import React from 'react'
import { DocContainer, Info, Message, CardDetails, Docs,
         TopLine, Heading, Subtitle, Text, DocLink, TextHighlight, InfoHeading, InfoText, Phone } from './doc-section-elements'

const openFile = (url) => {
  window.open(url, '_blank');
  console.log('here')
}

const DocSection = () => {
  return (
    <>
      <DocContainer>
          <Message  id='documents'>
            <Text>Проводится сбор средств на строительство мечети в г. Свирске Иркутской области.</Text>

            <Text>
            В июле 2021 года в г. Свирске по инициативе местных мусульман различных национальностей проведено учредительное собрание и создана местная религиозная организация «Мусульманская община города Свирск». В мае 2022 года организация была зарегистрирована в Министерстве юстиции Российской Федерации и получила статус юридического лица.
            </Text>
            <Text>
            Одной из главных задач организации с целью сплочения мусульман города и создания условий для развития обычаев и традиций Ислама является строительство мечети.
            </Text>
            <Text>
            Администрация города в лице Мэра с пониманием отнеслась к данному мероприятию, выделив земельный участок в центре населенного пункта. Поэтому будущая мечеть должна быть достойной и стать украшением города.
            </Text>
            <Text>Сбор пожертвований на строительство и садака на развитие организации можно перечислить по реквизитам: </Text>
          </Message>
          <CardDetails id="payInfo">
          <TopLine>МЕСТНАЯ РЕЛИГИОЗНАЯ ОРГАНИЗАЦИЯ "МУСУЛЬМАНСКАЯ ОБЩИНА ГОРОДА СВИРСК" ИРКУТСКОЙ ОБЛАСТИ</TopLine>
                <Heading>Расчетный счет: <Subtitle>40703810718350002361</Subtitle></Heading>
                <Heading>Банк получателя: <Subtitle>БАЙКАЛЬСКИЙ БАНК ПАО СБЕРБАНК</Subtitle></Heading>
                <Heading>БИК: <Subtitle>01252607</Subtitle></Heading>
                <Heading>Корр.счет: <Subtitle>30101810900000000607</Subtitle></Heading>

                <TextHighlight>Возможно внесение средств на карту СБЕРБАНКА: <br/> 5469 1800 1372 2338 получатель Халифаев Сафар Раджабович</TextHighlight>
          </CardDetails>
          <Docs id='plan'>
              <DocLink onClick={()=>openFile('https://drive.google.com/file/d/1NBFXwKTf9JyyJCwa46w8ZTE7B0V-Lejc/view?usp=sharing')}>Учредительные документы</DocLink>
              <DocLink onClick={()=>openFile('https://drive.google.com/file/d/1eh33WK2hljVXkJtRXvexeCdy2GCMAD6V/view?usp=sharing')}>План мечети</DocLink>
              <DocLink onClick={()=>openFile('https://drive.google.com/file/d/1Z8tfRezFuYt7o1dVUSQfXvh_Xl0RqaY_/view?usp=sharing')}>Договор на землю</DocLink>
              <DocLink onClick={()=>openFile('https://drive.google.com/file/d/1gn_47HzD8kVFF0hnwntBxsuiHlfD_xpq/view?usp=sharing')}>Карточка организации</DocLink>
              {/* <DocLink>Разрешение на строительство</DocLink> */}
          </Docs>
          <Info>
          <InfoHeading>Юридический адрес:</InfoHeading>
          <InfoText>665420, Иркутская область, г.Свирск, ул. Ленина, стр. 4Д</InfoText>

          <InfoHeading>Почтовый адрес:</InfoHeading>
          <InfoText>665420, Иркутская область, г.Свирск, пер. О.Кошевого, дом 13, кв. 83</InfoText>

          <InfoHeading>Председатель организации:</InfoHeading>
          <InfoText>Шамсутдинов Насим Гусамович</InfoText>
          <InfoText> Телефон: <Phone>+7 (914) 922-46-97</Phone> </InfoText>
          <InfoText>Почта: <Phone>nash677@yandex.ru</Phone></InfoText>
          
          <InfoHeading>Имам организации:</InfoHeading>
          <InfoText>Халифаев Сафар Раджабович</InfoText>
          <InfoText>Телефон: <Phone>+7 (995) 092-48-89</Phone></InfoText>
          

          </Info>
      </DocContainer>
    </>
  )
}

export default DocSection