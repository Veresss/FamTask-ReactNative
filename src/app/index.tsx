import HomeTable from "@/components/HomeTable";
import { StyleSheet, View } from "react-native";


export default function Index() {
  return (
    <View style={styles.container}>
      <HomeTable/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: "3rem"
  },
  homeGrid: {

  }
});
