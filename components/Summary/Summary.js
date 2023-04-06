import { StyleSheet, View, Text, ScrollView } from "react-native";
import { ButtonGroup } from "@rneui/themed";
import { useMemo } from "react";

export default function Summary({ route }) {
  const { quiz, answers } = route.params;
  const corrected = useMemo(
    () => answers.filter((item) => item.corrected).length,
    [answers]
  );
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Your Score: {corrected} out of {quiz.length}
        </Text>
        {quiz?.map((item, index) => (
          <View key={index}>
            <Text>{item.prompt}</Text>
            <View>
              {item.choices?.map((choice, _index) => (
                <Text
                  key={_index}
                  style={{
                    color:
                      answers[index] &&
                      answers[index].selected.toString().includes(_index) &&
                      answers[index].corrected
                        ? "green"
                        : answers[index] &&
                          answers[index].selected.toString().includes(_index) &&
                          !answers[index].corrected
                        ? "red"
                        : "black",
                  }}
                >
                  {choice}
                </Text>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
