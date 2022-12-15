
import React from "react";
import { StatusBar } from 'expo-status-bar';
import {
  StyledFormHome,
  Colors,
  WelcomeContainer,
  StyledTouchable,
  StyledTouchableImage,
  StyledTouchableText,
  WhiteZone,
  WZText,
  PageLogo,
  StyledHomeContainer,
  InnerContainer,
  FormHome,
  PageTitle,
  HomePageImage,
  TouchableHomeImage,
  StyledHomeBrownImage,
  THButton,
  THtext,
  HelloText,
  BLtext,
} from "../components/styles"
import { Alert, ScrollView, StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from "react-native";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";


//Colors 
const { light_brand, neon_light_brand, primary, darkLight, brand, BR_blur, JT_brand, OJT_brand, secondary } = Colors;
const Home = ({ navigation }) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  return (
    <StyledHomeContainer style={styles.container} >
      <InnerContainer>
        <HomePageImage style={styles.TouchableImage} resizeMode="cover" source={require('../assets/image/b.png')} />
        <SearchBar searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          clicked={clicked}
          setClicked={setClicked}
          styles={styles.SearchBar}
        />
        <HelloText>Xin Chào!</HelloText>
        <TouchableHomeImage onPress={() => { Alert.alert("Already Log out") }}>
          <StyledHomeBrownImage resizeMode="cover" source={require('../assets/image/a.png')} />
        </TouchableHomeImage>
        <View style={styles.FlexRow}>
          <View style={styles.FlexItem}>
            <THButton style={[styles.TouchableImage, styles.RightColor]}
              onPress={() => { console.log('Date Regist'), navigation.navigate('DateRegist') }}>
              <MaterialCommunityIcons style={styles.icons} name='calendar-check' />
              <THtext numberOfLines={2}>Date Regist </THtext>
            </THButton>
            <THButton style={[styles.TouchableImage, styles.LeftColor]}
              onPress={() => { console.log('Working Date'), navigation.navigate('WorkingkDate') }}>
              <MaterialCommunityIcons style={styles.icons} name='calendar-month' />
              <THtext numberOfLines={2}> Working Date </THtext>
            </THButton>
          </View>
          <View style={styles.FlexItem}>
            <THButton style={[styles.TouchableImage, styles.LeftColor]}
              onPress={() => { console.log('TableChoosing'), navigation.navigate('TableChoosing') }}>
              <MaterialCommunityIcons style={styles.icons} name='coffee-to-go' />
              <THtext numberOfLines={2}> Working </THtext>
            </THButton>
            <THButton style={[styles.TouchableImage, styles.RightColor]}
              onPress={() => { console.log(' Trang Nay` Chiu. '), navigation.navigate('Salary') }}>
              <MaterialCommunityIcons style={styles.icons} name='account-cash' />
              <THtext numberOfLines={2}> Salary </THtext>
            </THButton>
          </View>
        </View>
        <View style={{ flex: .53, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', marginHorizontal: "20%", marginTop: "5%" }}>
          <View style={{ justifyContent: 'center', flexDirection: 'column', alignItems: 'center', }}>
            <TouchableOpacity style={[styles.FBtn,]} onPress={() => Alert.alert("check in")} >
              <MaterialCommunityIcons style={styles.FBIcon} name='checkbox-marked-circle-outline' />
            </TouchableOpacity>
            <Text style={styles.FBText} numberOfLines={2} >Check In   <Ionicons style={{ color: secondary }} name='log-out' />   </Text>
          </View>
          <View style={{ justifyContent: 'center', flexDirection: 'column', alignItems: 'center', }}>
            <TouchableOpacity style={[styles.FBtn,]} onPress={() =>
              navigation.navigate('TotalPurchased')
            }>
              <MaterialCommunityIcons style={styles.FBIcon} name='application-edit-outline' />
            </TouchableOpacity>
            <Text style={styles.FBText} numberOfLines={2} >total purchased </Text>
          </View>
          <View style={{ justifyContent: 'center', flexDirection: 'column', alignItems: 'center', }}>
            <TouchableOpacity style={[styles.FBtn,]} onPress={() =>
              navigation.navigate('DayRevenue')
            }>
              <MaterialCommunityIcons style={styles.FBIcon} name='archive-check-outline' />
            </TouchableOpacity>
            <Text style={styles.FBText} numberOfLines={2} >day revenue</Text>
          </View>
          <View style={{ justifyContent: 'center', flexDirection: 'column', alignItems: 'center', }}>
            <TouchableOpacity style={[styles.FBtn,]} onPress={() => Alert.alert("check out")} >
              <MaterialCommunityIcons style={styles.FBIcon} name='clock-remove-outline' />
            </TouchableOpacity>
            <Text style={styles.FBText} numberOfLines={2} >Check Out</Text>
          </View>
        </View>
      </InnerContainer>


      <View style={{ flex: .15, alignItems: 'center', justifyContent: 'center', marginBottom: "-10%" }}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity style={{ flex: 1, backgroundColor: 'white' }} onPress={() => { navigation.navigate('DrinkChoosing') }}>
            <View style={[styles.belowBtn, styles.right]}>
              <Ionicons style={styles.drop_icons} name='md-list-circle-outline' />
              <BLtext numberOfLines={2}> Take Away </BLtext>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ flex: 1, backgroundColor: 'white' }}
            onPress={() => { navigation.navigate('Notification') }}
          >
            <View style={[styles.belowBtn,]}>
              <Ionicons style={styles.drop_icons} name='md-notifications-circle-outline' />
              <BLtext numberOfLines={2}> Notification </BLtext>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, backgroundColor: 'white' }}
            onPress={() => { navigation.navigate('Login') }}
          >
            <View style={[styles.belowBtn, styles.left]}>
              <Ionicons style={[styles.drop_icons, styles.top]} name='log-out' />
              <BLtext numberOfLines={2}> Log Out </BLtext>
            </View>
          </TouchableOpacity>

        </View>
      </View>
    </StyledHomeContainer >
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: BR_blur,
    backgroundColor: secondary,
  },
  FlexRow: {
    flex: 0.5,
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: "row",
    marginTop: "-15%"
  },
  FlexItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  RightColor: {
    backgroundColor: OJT_brand,
  },
  LeftColor: {
    backgroundColor: JT_brand,
  },
  TouchableImage: {
    elevation: 10,
    // padding: 20,
    shadowColor: "#000000",
    shadowOpacity: .5,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 2
    }
  },
  icons: {
    position: "absolute",
    fontSize: 40,
    color: primary,
    right: "10%",
    top: "10%",
    paddingTop: "5%",
  },
  belowBtn: {
    flex: 1,
    bottom: "10%",
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
  },
  drop_icons: {
    fontSize: 40,
    color: JT_brand,
    marginVertical: '2%',
  },
  left: {
    left: "5%",
  },
  right: {
    right: "5%",
  },
  top: {
    fontSize: 50,
  },
  FBtn: {
    height: 70,
    width: 85,
    borderRadius: 15,
    backgroundColor: primary,
    marginHorizontal: "2%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  FBIcon: {
    color: JT_brand,
    fontSize: 38,
    fontWeight: 'bold',
  },
  FBText: {
    marginTop: "5%",
    fontSize: 19,
    color: darkLight,
    width: 80,
    textTransform: 'capitalize'
  },

});

export default Home;


