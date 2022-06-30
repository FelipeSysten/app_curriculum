import { Text, View } from 'react-native';
import styles from './style.js';


const Card = ({titulo, children}) => {

    return (

        <View style={styles.card_container}>
        <View style={styles.card}>
  
          <View style={styles.card_header}>
            <Text>{titulo}</Text>
  
          </View>
  
          <View style={styles.card_content}>
          {children}
            </View>
    
  
        </View>
        </View>
    )




}

export default Card;