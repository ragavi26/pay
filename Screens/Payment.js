import React,{useState} from 'react'
import {Text,StyleSheet, View,TextInput,TouchableOpacity,Button} from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import Shimmer from 'react-native-shimmer';
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import WalletIcon from '../Components/WalletIcon';
import { overlay } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
// import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'

function Payment() {
    const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)
    const [text, onChangeText] =useState("");
    const [isSelected, setSelection] = useState(false);
    const [isSelected1, setSelection1] = useState(false);
    const [isSelected2, setSelection2] = useState(false);
    const [isSelected3, setSelection3] = useState(false);
    const[walletVisible,setWalletVisible] = useState(0);
    // const[active,setActive] = useState(false);
    const summa=()=>{
        setWalletVisible(!walletVisible)
        setWalletVisible(1)
    }
   
   const btn=()=>{
     setWalletVisible(2)
   }
   const verify=()=>{
    setWalletVisible(3)
   }
 
    return (
      <ScrollView>
        <View style={styles.container}>
        <View style={styles.checkboxContainer}>
            <View style={styles.list}>
                <CheckBox
          boxType='circle'
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Credit / Debit Cards</Text>
          </View>
          
          <View style={styles.list}>
                <CheckBox
          boxType='circle'
            value={isSelected1}
            onValueChange={setSelection1}
            style={styles.checkbox}
          />
          <Text style={styles.label}>UPI</Text>
          </View>
          <View style={styles.list}>
                <CheckBox
          boxType='circle'
            value={isSelected2}
            onValueChange={setSelection2}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Net Banking</Text>
          </View>
          
          <View style={styles.list} >
                <CheckBox
               
          boxType='circle'
            value={isSelected3}
            onValueChange={setSelection3}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Wallet</Text>
          </View>
          
        </View>
        {isSelected3&& <View style={styles.wallet}><View style={styles.icon}>
        <TouchableOpacity onPress={summa}>
            <WalletIcon value={1.0} image='https://www.thehindubusinessline.com/money-and-banking/nz7hvk/article24801784.ece/alternates/FREE_615/google-paya'/>
       </TouchableOpacity> 
       <TouchableOpacity onPress={summa}>

       <WalletIcon value={1.0} image='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEVfJZ7///9gJZxbHpxbHp6GYbaGX7dgJJ5oLaFeJaBRAJjh1e1bF5uVd77///1VB5jPweBcE5+jicX///rAq9f8///PwOJeJppSAJVbJqBTCJp+UbBOAJpWAJtKAJRcJ511S62zns/YzeXt5fbw7PbHudqVcL+Qa7/EtNr8+v+xmtOjjcR6T6l9SrChgsJxO6XSu+Sdd8S3oMvFs+Hg1vHp4PWCVrFpOKTBpdhyPa+igbyUbrNcFaaiiMzs5vdNAIt1eKPRAAAHvklEQVR4nO2dDVebOhiAkxCXhrJQ+kWpFKytH9Wpm7vT3bs79///1U1o3bS+nFtLAg0nz3G6reyEZ2++EwLqPxx9aDXoQ+BRr82gI0pQu1GGpM0oQ970/7JZnKH9OEP7cYb24wztxxnajzO0H2doP87Qfpyh/ThD+3GG9uMMq8BzEhOmfiamktgBozHkiOYxoXGMGswnJg29wJ+kfhYGhOam0vh/jBnSMDuZny6Wy+7ZeRq0KIackCJ4s4vLJX5mdeVLx4YsdRtSTkOfX59iLMSzoPzd8tM0biin6jYMJjfDp5d6ynA0EPg8jXWmszuaDf2rlTISWODRnxgWX0eRxnTegU5DzoJb6TLAACMh7ry8ibKoNYZs1sMC8lPZdrSUZbSBsqjTkPBg/roEvowhxt8m3PIYJiSfdUVJFIVUP82YrrR2R3ddmp3idVUDSeJhSnjdGVW3Ict6RaaE44j7E8RqVtTea+PZZwyHEKsMfDHlNW/g0W8YZ8OS6kYajvCnuvuoJnre2XelWBLHVeLxuM7CaMIw8efreIFV6tLnOasxjiYMc5T24Z6NrIIGuJvR3PIYyrY/vcXlvZtxVmfvzdQI2P+ismmJ5JWf1JdPTRnG03PlV5JXb6cxrWswZWwWIw6PytpFyYdADpaNpPsGU4YU8fCopMkYyPx7R0lNfVSTc23RiVCjJtByFcU1lUSjM8LB3UoOKeA+6sI3lewWRg1J8LgqGS+qoZSpdF9j1FBGsVOiKCM7rEfR9MqM5y2VIdhq9FNSw4KG8bUnShdClGTV89Bo0mtMG/KEhovS0dRJYDLtNaYNWZ7T9BsYQTWUQp7JxAtqWSHNuipgb1sNMVhOPNPzb7UYsuwUD4CWX+BBN+OGO6i1GHKu5qfeGBYV0DhtQQw5Izz9CvVRleJ9ajb1unYqMDU/BTSL0vF2ypDBMX9dhjKjXmFw3D9Qq1IGxxm1GRIyuQJiWCzE3QUtiGFOSeL3gTZxJDPqyjPYLNa5Yyj34fkpgRcZQ6buo05DHvvnGOqjDuRQKslbYCjrk/ACahdlb+drZqo+rdOQxRyFR1AulXHtzw4shpxxzt4Jkr/y6BjMqCP8I0Qxil9dr6XLuncMN9tj+PuQ1wcnAmj6xXooxdGLS2Mtivsa5tyb+fsw8SedFTDMGA1WLJWfvmAaehp65XvHMDrpdffgL/Xt2+BtbSO/lpuPn+kNH9LqDeW+hvTkbY2hH9F9jPKKPbp9DadnJXMvWgVlGsdVe3T7GpbvDdIoWIyuWEMxlIYl60o6DZVib9KM4XRs2u83FZuMgzcU+Ge1KUcLDIfV5o0rGJqvS3ExQm7KsFeHH24whnW0Fs0aht/bbugd1+LXoCFSyy1lm9e0CjZlmHh/49JtTzoNG4shQd5R2b58nQywuG6mxZdD8Oixa9pP8TSr1vWuMhPl+Tfzs/F43JOMS9rH7rhXfL6N/Gv4/0e8vnw8jyrunapiyIgXhBtmKVwo/8nCaQiS/gAF8b/+y6umQdWdRVUMOU/4+qckgsvkT4+WTErRL7Ahez11Ravu1KwWQ1LcTvGHCM6l/YCAY3ROgo/wv+h4Wxfue3sbdM0I81JDeOUs57ChwB3NexbNG8IzSc5QH85wV5zhNs5QH85wV5zhNs5QH85wV5zhNs5QH85wV5zhNs5QH85wV5zhNs5QH85wV5zhNs5QH85wV0gEr671A3h900LDKRzDeckStX2GaLYCDYcRApfHLDT0l9AN488lJ1/ZZ8izBWj49As+icZCw0nJVoUI3gBrnyEKh7DhD68lhjyAHi6Ud3w2aYkhoh9gQxxSDpwnZKEhC+Bciu/BINpomIKVqezoPEJP9thnmJDwErxjgZcz9rY+tc+QF3cMPym0oIFq9lXLn6jnCrna+Idm53YZ5tzz1HHI4F2vPmYRpYRKu5jkOWNekAb9J7sMY9lv65Y97CXw4jrOwiAIoiic+r+ih3m3ZPvt4Roilge3sN/m0N2n8XB+fXs1vxyrHqwYCHCn3wEbyrIVatgWfdCGaHZW1e/QDVmn7THM03HLDVnSweDD9q0x5PFsjkuPZW2FIUNp2dls7TAkCaM3FVuMwzZUTG9x6SGC7TDMs+8CV4jj4RvK7umwSkY9fEPO+frQ+dYaKrL+89tz2mrIp8fLfcNohyFiXnrZ6hiynJP07rTNMUTqqa/0Tg2m1IsuxPO3IuuORsUJQ8v7n5Yb0piGs4+9Ys1tc2jSoCibSrd7f+JPLJtr2yYmBCU0SCc315enfxbexOL06/XNNI08Ztts4jaEM05ywhIazSZ+FnUUgZ/6szBgXH4c2264zeYEtt/YNyP8XpyhPpyhKZyhPpyhKZyhPpyhKZyhPpyhKZyhPpyhOaQhcN5biww5BY8ub5Mh/PxCewwJQym0w6g9hmhdEIF5cd3vf2rQEGUL6C1XnRYZskfojLeq53dv06QhCj4BdY3u1z81aUhI1FkUO3CEGEmKtY15qPnd600ach5H/sXrY7Pvfd0vCm7SUKnk3sR/vDle83DjhZy1p7VQe6FZTFnibaCUyrBWPihxi0YNa8EZ2o8ztB9naD/O0H6cof04Q/txhvbjDO3HGdqPM7QfZ2g/ztB+nKH9OEP7cYb24wztxxnajzO0nv8AaKS+obCiC7gAAAAASUVORK5CYII='/>
       </TouchableOpacity>
       <TouchableOpacity onPress={summa}>
        <WalletIcon value={1.0} image='https://static.amazon.jobs/teams/378/thumbnails/AmazonPayLogo-543.jpg?1508227956'/>

       </TouchableOpacity>
       <TouchableOpacity onPress={summa} >

       <WalletIcon value={1.0} image='https://cdn2.iconfinder.com/data/icons/social-icons-color/512/paytm-512.png'/>
       </TouchableOpacity>
        
        </View></View>}
  
      
{/* <ShimmerPlaceHolder /> */}
{walletVisible===1 &&
  <View>
<Text style={{fontSize:16,marginBottom:3}}>Log in to Use your Wallet</Text>
 <Text style={{fontSize:16}}>Mobile Number</Text>
        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Mobile Number"
        keyboardType="numeric"/>
        <Button style={styles.btn}title="Send an OTP" onPress={btn} />
        
</View>}
{walletVisible===2 &&<View>

<TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="OTP"
        keyboardType="numeric"/>
        <Button style={styles.btn}title="Verify" onPress={btn} color='#146356'onPress={verify}/>
        <View style={styles.otp_box}><Text style={{fontSize:14,fontWeight:"400"}}>Didn't Receive OTP</Text>
        <Text style={{fontSize:14,color:"#541212"}}>Resend OTP</Text></View>
</View>}
{walletVisible===3 &&<View>
<Text style={{fontWeight:"500"}}>Pay Using Wallet</Text>
<Text>Available Balance : ₹3000.00</Text>
<Text>To Pay : ₹2600.00</Text>
</View>}
      </View>
      {walletVisible===3 &&<View style={styles.last_box}>
       
        </View>}
        </ScrollView>
    );
  };
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      
    },
    checkboxContainer: {
      flexDirection: "column",
      marginBottom: 20,
    },
    checkbox: {
      alignSelf: "center",
    },
    label: {
      margin: 15,
      fontSize:18,
      fontWeight:'800'

    },
    list:{
        flexDirection:'row',
        borderBottomColor: '#ddd',
        borderBottomWidth: 2},
    wallet:{
        height:100,
        width:'100%',
       
        alignItems: "center",
        justifyContent: "center",
       
        
    },icon:{
        flexDirection:'row',
        
    },
    input: {
        height: 50,
        width:200,
        margin: 12,
        borderColor:'#ddd',
        borderWidth:2,
        padding: 10,
      },
      btn:{
          height:50,
          width:250
      },
      otp_box:{
          flexDirection:'row',
          margin:4,
          justifyContent:'space-between'
      },
      last_box:{
        margin:20,
        alignItems:'center',
        justifyContent:'center',
        height:200,
        width:'90%',
        backgroundColor:'#fff'
      }
  });

export default Payment
