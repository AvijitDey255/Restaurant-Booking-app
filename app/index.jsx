import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {

  const router = useRouter();

  return (
    <View
      className="bg-blue-600"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-3xl">abhijit is a cow.</Text>
      <TouchableOpacity onPress={()=> router.push("/home")}>
        <Text>
          Changin route
        </Text>
      </TouchableOpacity>
    </View>
  );
}
