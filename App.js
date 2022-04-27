import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import I18N from 'i18next';
import {Trans, initReactI18next, useTranslation} from 'react-i18next';

I18N.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        'My test': 'My test',
        'Open <1>link</1>': 'Open <1>link</1>',
        'Hello <1>{{name}}</1>!': 'Hello <1>{{name}}</1>!',
      },
    },
    sv: {
      translation: {
        'My test': 'Mitt test',
        'Open <1>link</1>': 'Öppna <1>länk</1>',
        'Hello <1>{{name}}</1>!': 'Hej <1>{{name}}</1>!',
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  nsSeparator: false,
  keySeparator: false,
  debug: true,
});

const App = () => {
  const {t, i18n} = useTranslation();

  return (
    <View padding={100}>
      <Button
        title={`Change lang: ${i18n.language}`}
        onPress={() =>
          i18n.changeLanguage(i18n.language === 'en' ? 'sv' : 'en')
        }
      />

      <Text>
        <Trans t={t}>My test</Trans>
      </Text>

      <Text>
        <Trans t={t}>
          Open <Text style={styles.link}>link</Text>
        </Trans>
      </Text>

      <Text>
        <Trans t={t} values={{name: 'callstack'}}>
          Hello <Text style={styles.bold}>{'{{name}}'}</Text>!
        </Trans>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bold: {
    fontWeight: '700',
  },
  link: {
    fontWeight: '500',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: 'blue',
    color: 'blue',
  },
});

export default App;
