import { StyleSheet, View, Text,  } from 'react-native';
import { Button } from 'react-native-elements'
import { ButtonGroup } from '@rneui/themed';
import { useState } from 'react';

const quizQuestions = [
{
  prompt: "What year was UCF founded?",
  type: "Single-choice",
  choices: [
    "1963",
    "1957",
    "1989",
    "1977",
  ],
  correct: 0
},
{
  prompt: "Which is NOT a programming language?",
  type: "multiple-choice",
  choices: [
    "React",
    "B++",
    "Doge",
    "JavaScript",
  ],
  correct: [1,2]
},
{
  prompt: "What is the 3rd largest country in Europe landwise?",
  type: "single-choice",
  choices: [
    "Germany",
    "Spain",
    "Sweeden",
    "France",
  ],
   correct: 3
},
{
  prompt: "The strait of Gibraltar Seperates Spain and Algeria",
  type: "true-false",
  choices: [
    "True",
    "False",
  ],
  correct: 1
},
{
  prompt: "President Biden Visted UCF and gave the commencent speech in which year?",
  type: "Single-choice",
  choices: [
    "1973",
    "1981",
    "1978",
    "He never gave a speech at ucf"
  ],
  correct: 2
},
{
  prompt: "Dont Believe the answer choices to this question ",
  type: "Single-choice",
  choices: [
    "This is the answer",
    "No,this is the answer",
    "This is not the answer",
    "The First choice is the answer",
  ],
  correct: [2,3]
},
{
  prompt: "la respuesta a esta pregunta son las ultimas 2 opciones",
  type: "multiple-choice",
  choices: [
    "choice 1",
    "choice 2",
    "choice 3",
    "choice 4",
  ],
  correct: [2,3]
},

]

export default function Questions({  navigation }) {

  const [currentQuestion, setCurrentQuestions] = useState(0)
  const [selectedIndex, setselectedIndex] = useState(-1)
  //make one question multiple answers
  const [selectedIndexes, setSelectedIndexes] = useState([0, 2,])
  // score for summary page
  const [score, setScore] = useState(0)
  const [allQuestions, setAllQuestions] = useState([0])

  const handleQuestions = () => {
  if (currentQuestion + 1 < quizQuestions.length) {
    //goes to the next question
    setCurrentQuestions(currentQuestion + 1);
    //prevents choice from being pre-selected
    setselectedIndex(-1)
  }
  else {
    //on the last question the button will go to summary 
    navigation.navigate('Summary',  {
    quiz: quizQuestions,
    
    }) 
    
  } 
  //if(selectedIndex){
  //  alert('must select something')
  //  setCurrentQuestions(currentQuestion)
  //} 
  }

  const selectAnswers = (index) => {
    console.log(quizQuestions[currentQuestion].type)
    if(quizQuestions[currentQuestion].type = 'multiple-choice'){
    setSelectedIndexes(currentindexes  => [...
    currentindexes, index])
    } else {
      selectedIndex(index)
    }
  }
  console.log(selectedIndexes)

  const reset = () => {
    setCurrentQuestions(0)
  }

  return (
    <View style={styles.container}>  
      <View style = {styles.questionContainer}>
        <Text style = {styles.questionStatus}>
          Question {currentQuestion +1} out of {quizQuestions.length}
        </Text>
        <Text style = {styles.questionPrompt}>
          {quizQuestions[currentQuestion].prompt}
        </Text>
        <Text style = {styles.questionType}>
          {quizQuestions[currentQuestion].type}
        </Text>
        <View>
          <ButtonGroup         
            buttons={quizQuestions[currentQuestion].choices}
            selectedIndex = {selectedIndex}
            testID = {'choices'}
            onPress={(choice) => selectAnswers(choice)}
            buttonStyle = {styles.ButtonGroup}
            selectedButtonStyle = {styles.selectedButton}
            textStyle = {styles.ButtonGroupText}
            selectedTextStyle = {styles.selectedButtonText}
            vertical
          />
        </View>
        <Button 
          title = {currentQuestion < 6 ? 'Next question' : 'Go to results'} 
          buttonStyle = {styles.Button}
          onPress={handleQuestions} 
          testID = {'next-question'}
          onLongPress = {reset}
        />  
        <View 
        data = {quizQuestions}
        >
        <Button
        title = "Summary"
        buttonStyle = {styles.Button}
        onPress = {() => navigation.navigate('Summary' , {
          quizPrompt: quizQuestions[currentQuestion].prompt,
          quizChoicesResults: quizQuestions[currentQuestion].choices
        })}
        />
        </View>
        
    </View>     
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#636366', //ios systemgray2 dark
  },
  questionContainer: {
    padding: 10,
    width: 360,
    paddingVertical: 15,
    paddingHorizontal: 0
    
  },
  questionStatus:{
    fontSize: 22,
    marginBottom: 6,
    color: '#F2F2F7' //ios systemgray6 light
  },
  questionType:{
    fontSize: 16,
    marginBottom: 6,
    color: '#F2F2F7' //ios systemgray6 light
  },
  //question styles 
  questionPrompt: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#F2F2F7' //ios systemgray6 light
  },
  //styles for button group 
  ButtonGroup: {
    backgroundColor: 'lightgray',
    color: '#F2F2F7' //ios systemgray6 light
   // borderRadius: 10,
   // overflow: 'hidden'
   //make postion fixed
  },
  //styles for button group option that is selected
  selectedButton: {
    backgroundColor: '#0A84FF', //ios system blue 
    color: 'white'
  },
  //Button group text 
  ButtonGroupText: {
    color: 'black'
  },
  //selected button group text
  selectedButtonText: {
    color: 'white'
  },
  //bottom button styles, "Next question" and "Go to Results" 
  Button: {
    backgroundColor: 'black',
    marginTop: 25,
    paddingVertical: 20,
    borderRadius: 15
  },
  choiceText: {
    fontSize: 16,
    marginBottom: 10,
    backgroundColor: '#7C9885',
    color: 'black',
    padding: 10
    
  },
});
