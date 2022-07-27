import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  StatusBar,
  Image,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TemplateForm = {
  name: '',
  email: '',
  dob: '',
  country: '',
  phone: '',
};

const App = () => {
  const [form, setForm] = useState({...TemplateForm});

  const handleForm = (key, value) => {
    let currentForm = {...form};

    currentForm[key] = value;
    setForm(currentForm);
  };

  const _onSubmit = () => {
    let dataString = '';
    Object.entries(form).forEach(entry => {
      console.log(entry[0], ':', entry[1]);
      dataString += `${entry[0]}: ${entry[1]} \n`;
    });
    Alert.alert('User data:', dataString);
  };
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <StatusBar backgroundColor={'#e6e6e6'} barStyle={'dark-content'} />
      <View style={styles.top}>
        <TouchableOpacity style={styles.back_btn}>
          <Ionicons name="chevron-back" size={24} color={'#444'} />
          <Text style={styles.back_btn_txt}>SIGNIN</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.app_container}>
        <View style={styles.form_container}>
          <View style={{width: '100%', alignItems: 'center', marginTop: -60}}>
            <View style={styles.avatar_container}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
              />
              <View style={styles.editIcon_container}>
                <AntDesign size={18} color={'#888'} name={'edit'} />
              </View>
            </View>
          </View>

          <View style={styles.name}>
            <Text style={styles.name_txt}>Sonali Rajput</Text>
          </View>
          <Text style={styles.info_txt}>PERSONAL INFORMATION</Text>
          <TextInput
            style={styles.input}
            placeholder="Full name"
            value={form.name}
            onChangeText={text => handleForm('name', text)}
            placeholderTextColor="#ccc"
          />
          <TextInput
            style={styles.input}
            placeholder="Email address "
            value={form.email}
            onChangeText={text => handleForm('email', text)}
            placeholderTextColor="#ccc"
          />
          <TextInput
            style={styles.input}
            placeholder="DOB"
            value={form.dob}
            onChangeText={text => handleForm('dob', text)}
            placeholderTextColor="#ccc"
          />
          <TextInput
            style={styles.input}
            placeholder="country"
            value={form.country}
            onChangeText={text => handleForm('country', text)}
            placeholderTextColor="#ccc"
          />
          <TextInput
            style={styles.input}
            placeholder="phone number*"
            value={form.phone}
            onChangeText={text => handleForm('phone', text)}
            placeholderTextColor="#ccc"
          />
          <TouchableOpacity style={styles.btn} onPress={_onSubmit}>
            <Text style={styles.btn_txt}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  top: {
    backgroundColor: '#e6e6e6',
    paddingTop: 10,
  },
  back_btn: {
    flexDirection: 'row',
    paddingVertical: 7,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  back_btn_txt: {
    color: '#444',
    fontSize: 15,
    fontWeight: '600',
  },
  app_container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e6e6e6',
    // paddingVertical: 110,
    paddingHorizontal: 20,
  },
  form_container: {
    // flex: 1,
    backgroundColor: '#d9d9d9',
    // alignItems: 'center',
    // justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingBottom: 30,
  },
  name: {
    backgroundColor: '#fff',
    elevation: 3,
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 35,
    marginTop: 20,
  },
  name_txt: {
    color: '#990000',
    fontSize: 19,
    fontWeight: 'bold',
  },
  info_txt: {
    fontSize: 13,
    color: '#000',
    fontWeight: '600',
    marginBottom: 20,
  },
  input: {
    height: 40,
    elevation: 3,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 12,
    color: '#808080',
    fontSize: 15,
    fontWeight: '600',
  },
  btn: {
    backgroundColor: '#990000',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 5,
  },
  btn_txt: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  avatar_container: {
    width: 120,
    height: 120,
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: '#ccc',
    borderRadius: 60,
    elevation: 5,
  },
  editIcon_container: {
    position: 'absolute',
    bottom: 4,
    right: 4,
    width: 26,
    height: 26,
    zIndex: 5,
    backgroundColor: '#fff',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  tinyLogo: {
    width: 116,
    height: 116,
    borderRadius: 60,
  },
});

export default App;
