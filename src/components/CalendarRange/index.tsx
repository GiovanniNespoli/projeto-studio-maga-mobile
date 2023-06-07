import React, { useState, useMemo } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { AntDesign } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import theme from '@styles/theme';
LocaleConfig.locales['pt-br'] = {
  monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  monthNamesShort: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEC'],
  dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  today: 'Hoje',
};
LocaleConfig.defaultLocale = 'pt-br';

export { LocaleConfig };
export default function CalendarRange(props) {
  const [startDay, setStartDay] = useState(null);
  const [endDay, setEndDay] = useState(null);
  const initDate = startDay;
  const [markedDates, setMarkedDates] = useState({});

  console.log('START = ', startDay);
  console.log('END = ', endDay);

  return (
    <Calendar
      style={{
        width: RFValue(312),
        borderRadius: RFValue(30),
        paddingBottom: RFValue(18),
        paddingTop: RFValue(10),
        height: 'auto',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      }}
      initialDate={initDate}
      renderArrow={direction =>
        direction === 'left' ? (
          <AntDesign name="left" size={RFValue(18)} color="#595959" />
        ) : (
          <AntDesign name="right" size={RFValue(18)} color="#595959" />
        )
      }
      hideDayNames={false}
      markingType={'period'}
      markedDates={markedDates}
      theme={{
        arrowColor: '#0874C3',
        arrowWidth: RFValue(100),
        arrowHeight: RFValue(150),
        arrowStyle: {
          backgroundColor: '#FFFFFF',
          width: RFValue(42),
          height: RFValue(42),
          borderRadius: RFValue(50),
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
        },
        monthTextColor: '#AB7C63',
        textDayFontSize: RFValue(16),
        textMonthFontSize: RFValue(22),
        textDayHeaderFontSize: RFValue(14),
        textDayFontFamily: theme.text.outfit.medium,
        dayTextColor: theme.text.color.secondary,
        textMonthFontFamily: theme.text.outfit.medium,
        textDayHeaderFontFamily: 'Montserrat_700Bold',
        'stylesheet.calendar.header': {
          headerContainer: {
            flexDirection: 'row',
            width: RFValue(200),
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Montserrat_700Bold',
            backgroundColor: '#ffffff',
            
          },
          header: {
            flexDirection: 'row',
            backgroundColor: '#ffffff',
            color: 'pink',
            height: RFValue(70),
            borderTopLeftRadius: RFValue(30),
            borderTopRightRadius: RFValue(30),
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: RFValue(-10),
            fontFamily: 'Montserrat_700Bold',
            width: RFValue(312),
            marginLeft: RFValue(-5),
            elevation: 5,
          },
        },
      }}
      {...props}
    />
  );
};