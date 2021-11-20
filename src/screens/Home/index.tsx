import React, { useRef, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { IPeople, people } from '../../data';
import { Modalize } from 'react-native-modalize';
import { RectButton } from 'react-native-gesture-handler';

export function Home() {
  const [current, setCurrent] = useState({} as IPeople)

  const modalizeRef = useRef<Modalize>(null)

  const openModalize = () => {
    modalizeRef.current?.open()
  }

  const closeModalize = () => {
    modalizeRef.current?.close()
  }

  function handleSelectPeople(people: IPeople) {
    setCurrent(people)
    closeModalize()
  }

  const getUri = ({ size = 128, name = current.name }: { size?: number; name?: string; }) => {
    const names = name.split(' ')
    return `https://ui-avatars.com/api/?name=${names[0]}+${names[names.length - 1]}&rounded=true&=${size}`
  }

  const getAddresses = () => {
    const country = current.country ? current.country + ' - ' : ''
    const city = current.city ? current.city + ', ' : ''
    const state = current.state ? current.state + ', ' : ''
    const street = current.street ? current.street : ''
    return country + city + state + street
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Perfil</Text>

          <View style={styles.imageWrapper}>
            {current.name ? (
              <Image
              source={{ uri: getUri({}) }}
              style={styles.image}
            />
            ) : (
              <View style={styles.image}/>
            )}
            
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.name}>{current.name ? current.name : 'Selecione um perfil'}</Text>
            <View style={{ flex: 1 }} />
          </View>

          <Details title="Aniversário" text={current.birthday} />
          <Details title="Endereço" text={getAddresses()} />
          <Details title="Contato" text={current.telephone} />
        </View>

        <View style={styles.footer}>
          <RectButton style={styles.button} onPress={openModalize}>
            <Text style={styles.buttonText}>Selecionar perfil</Text>
          </RectButton>
        </View>
      </View>

      <Modalize
        ref={modalizeRef}
        adjustToContentHeight
        withHandle={false}
        flatListProps={{
          data: people,
          ListHeaderComponent: <View style={styles.modalHeader} />,
          contentContainerStyle: styles.modal,
          keyExtractor: item => String(item.id),
          renderItem: ({ item }: { item: IPeople }) => (
            <RectButton
              style={[styles.modalContent, current.id === item.id && styles.modalContentSelected]} 
              onPress={() => handleSelectPeople(item)}
            >
              <Image
                source={{ uri: getUri({ size: 25, name: item.name }) }}
                style={styles.modalImage}
              />
              <Text style={styles.modalName}>{item.name}</Text>
            </RectButton>
          )
        }}
      />
    </>
  );
}

function Details({ title, text }: { title: string; text: string; }) {
  return (
    <View style={styles.detail}>
      <Text style={styles.detailTitle}>{title}</Text>
      <Text style={styles.detailText}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 12,
    justifyContent: 'space-between',
    paddingTop: 50
  },
  content: {

  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    paddingBottom: 5,
    marginBottom: 25,
    borderBottomColor: '#bdbdbd',
    borderBottomWidth: 1,
  },
  imageWrapper: {
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
    backgroundColor: '#e4e4e4',
    borderRadius: 50
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    paddingTop: 10,
    paddingBottom: 5,
    marginBottom: 10,
    borderBottomColor: '#bdbdbd',
    borderBottomWidth: 1,
    paddingRight: 16
  },
  detail: {
    flexDirection: 'row',
    paddingBottom: 5
  },
  detailTitle: {
    fontWeight: 'bold',
    color: 'black',
    width: 80
  },
  detailText: {
    color: 'black'
  },
  footer: {
    paddingBottom: 24,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#333',
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  modal: {
    paddingBottom: 20
  },
  modalHeader: {
    height: 4,
    width: 70,
    borderRadius: 2,
    backgroundColor: '#333',
    marginTop: 7,
    marginBottom: 20,
    alignSelf: 'center',
  },
  modalImage: {
    height: 20,
    width: 20, 
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10
  },
  modalName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 10
  },
  modalContent: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  modalContentSelected: {
    backgroundColor: '#ddd',
  }
})