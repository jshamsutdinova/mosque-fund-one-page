import React from 'react'
import { DocContainer, Info, CardDetails, Docs,
         TopLine, Heading, Subtitle, Text, QR, ImgContainer, DocLink  } from './doc-section-elements'
import Img from '../../images/qr.png'


const DocSection = () => {
  return (
    <>
      <DocContainer>
          <Info  id='documents'>
            <Text>Объявляется сбор средств для строительства Свирской мечети.</Text>
            <Text>Чтобы открыть мечеть для посещения, осталось облагородить территорию вокруг нее, а также построить отдельное помещение для омовения — тахаратхана.
            Это уникальная возможность для участников сбора получать непрерывное вознаграждение от Аллаха!</Text>
            <Text>Мы надеемся на милость Всевышнего, чтобы каждая капля воды, которую будет брать молящийся при омовении, принесет награду тем, кто пожертвовал.</Text>
             <Text>Этот вид милостыни способен увеличить награду пред Всевышним даже после того, как человек уйдет из жизни, до тех пор, пока мусульмане пользуются 
             тахаратханой. Кроме этого, поддержка омских братьев и сестер в открытии дома Аллаха сплачивает умму. </Text> 
             <Text>Пусть Омская мечеть станет местом, где каждый исповедующий Ислам найдет покой души, источник знаний и праведное окружение!</Text>
          </Info>
          <CardDetails id="payInfo">
          <TopLine>реквизиты</TopLine>
                <Heading>Получатель: <Subtitle>ШАМСУТДИНОВ НАСИМ ГУСАМОВИЧ</Subtitle></Heading>
                <Heading>Номер счета: <Subtitle>40817810618351182409</Subtitle></Heading>
                <Heading>Банк получателя: <Subtitle>БАЙКАЛЬСКИЙ БАНК ПАО СБЕРБАНК</Subtitle></Heading>
                <Heading>БИК: <Subtitle>042520607</Subtitle></Heading>
                <Heading>Корр.счет: <Subtitle>30101810900000607</Subtitle></Heading>
                <Heading>ИНН: <Subtitle>042520607</Subtitle></Heading>
                <Heading>КПП: <Subtitle>381243001</Subtitle></Heading>
                <Heading>SWIFT-код: <Subtitle>Sabrrumm</Subtitle></Heading>
                <ImgContainer>
                  <QR src={Img} alt="qr"></QR>
                </ImgContainer>
          </CardDetails>
          <Docs id='plan'>
              <DocLink>инн</DocLink>
              <DocLink>Лицензия</DocLink>
              <DocLink>Схема мечети</DocLink>
              <DocLink>Договор на землю</DocLink>
              <DocLink>Разрешение на строительство</DocLink>
              
          </Docs>
      </DocContainer>
    </>
  )
}

export default DocSection