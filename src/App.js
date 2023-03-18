import logo from './logo.svg';
import React,{useState} from "react";

import classes from './App.module.css';
import ListItem from './components/ListItem.js'

const DummyData = {
  "0": [
      {
          "display_name": "Public Speaking",
          "rating": "4.9;5;117",
          "games_count": "5",
          "category_name": "Communication",
          "original_price": 10000,
          "discounted_price": 8000,
          "name": "Public Speaking - Learn",
          "certificate_count": 1,
          "num_classes": 24,
          "min_age": 6,
          "max_age": 10,
          "pitch": "Learn to create well-researched speeches, structure arguments, and prepare for rebuttals through grammar and interactive speaking activities",
          "curriculum_outcomes": [
              "Understand the debate format of communications and it’s structure",
              "Practice micro-skills used in debate - stating opinion, effective opening and closing, rebuttal",
              "Learn to research and prepare for a debate",
              "Perform and compete with other students!"
          ]
      },
      {
          "display_name": "Public Speaking",
          "rating": "4.5;5;100",
          "games_count": "3",
          "category_name": "Communication",
          "original_price": 10000,
          "discounted_price": 8000,
          "name": "Public Speaking - Learn",
          "certificate_count": 2,
          "num_classes": 20,
          "min_age": 11,
          "max_age": 15,
          "pitch": "Learn to create well-researched speeches, structure arguments, and prepare for rebuttals through grammar and interactive speaking activities",
          "curriculum_outcomes": [
              "Understand the debate format of communications and it’s structure",
              "Practice micro-skills used in debate - stating opinion, effective opening and closing, rebuttal",
              "Learn to research and prepare for a debate",
              "Perform and compete with other students!"
          ]
      }
  ],
  "1": [
      {
          "display_name": "Stop Motion Animation",
          "rating": "4.9;5;117",
          "games_count": "5",
          "category_name": "Visual Arts",
          "original_price": 12000,
          "discounted_price": 7000,
          "name": "Stop Motion Animation-Learn",
          "certificate_count": 1,
          "num_classes": 24,
          "min_age": 5,
          "max_age": 9,
          "pitch": "Learn to create well-researched speeches, structure arguments, and prepare for rebuttals through grammar and interactive speaking activities",
          "curriculum_outcomes": [
              "Understand the debate format of communications and it’s structure",
              "Practice micro-skills used in debate - stating opinion, effective opening and closing, rebuttal",
              "Learn to research and prepare for a debate",
              "Perform and compete with other students!"
          ]
      },
      {
          "display_name": "Stop Motion Animation",
          "rating": "4.5;5;100",
          "games_count": "3",
          "category_name": "Visual Arts",
          "original_price": 11000,
          "discounted_price": 5000,
          "name": "Stop Motion Animation-Discover",
          "certificate_count": 2,
          "num_classes": 20,
          "min_age": 5,
          "max_age": 9,
          "pitch": "Learn to create well-researched speeches, structure arguments, and prepare for rebuttals through grammar and interactive speaking activities",
          "curriculum_outcomes": [
              "Understand the debate format of communications and it’s structure",
              "Practice micro-skills used in debate - stating opinion, effective opening and closing, rebuttal",
              "Learn to research and prepare for a debate",
              "Perform and compete with other students!"
          ]
      },
      {
          "display_name": "Stop Motion Animation",
          "rating": "4.5;5;100",
          "games_count": "3",
          "category_name": "Visual Arts",
          "original_price": 11000,
          "discounted_price": 5000,
          "name": "Stop Motion Animation-Discover",
          "certificate_count": 2,
          "num_classes": 20,
          "min_age": 10,
          "max_age": 15,
          "pitch": "Learn to create well-researched speeches, structure arguments, and prepare for rebuttals through grammar and interactive speaking activities",
          "curriculum_outcomes": [
              "Understand the debate format of communications and it’s structure",
              "Practice micro-skills used in debate - stating opinion, effective opening and closing, rebuttal",
              "Learn to research and prepare for a debate",
              "Perform and compete with other students!"
          ]
      }
  ],
  "2": [
      {
          "display_name": "Western Vocals",
          "rating": "4.9;5;117",
          "games_count": "5",
          "category_name": "Music",
          "original_price": 12000,
          "discounted_price": 7000,
          "name": "Western Vocals-Learn",
          "certificate_count": 1,
          "num_classes": 14,
          "min_age": 6,
          "max_age": 15,
          "pitch": "Learn to create well-researched speeches, structure arguments, and prepare for rebuttals through grammar and interactive speaking activities",
          "curriculum_outcomes": [
              "Understand the debate format of communications and it’s structure",
              "Practice micro-skills used in debate - stating opinion, effective opening and closing, rebuttal",
              "Learn to research and prepare for a debate",
              "Perform and compete with other students!"
          ]
      },
      {
          "display_name": "Western Vocals",
          "rating": "4.5;5;100",
          "games_count": "3",
          "category_name": "Music",
          "original_price": 11000,
          "discounted_price": 5000,
          "name": "Western Vocals-Discover",
          "certificate_count": 2,
          "num_classes": 20,
          "min_age": 6,
          "max_age": 15,
          "pitch": "Learn to create well-researched speeches, structure arguments, and prepare for rebuttals through grammar and interactive speaking activities",
          "curriculum_outcomes": [
              "Understand the debate format of communications and it’s structure",
              "Practice micro-skills used in debate - stating opinion, effective opening and closing, rebuttal",
              "Learn to research and prepare for a debate",
              "Perform and compete with other students!"
          ]
      },
      {
          "display_name": "Western Vocals",
          "rating": "4.0;5;100",
          "games_count": "8",
          "category_name": "Music",
          "original_price": 11000,
          "discounted_price": 5000,
          "name": "Western Vocals-Excel",
          "certificate_count": 2,
          "num_classes": 30,
          "min_age": 6,
          "max_age": 15,
          "pitch": "Learn to create well-researched speeches, structure arguments, and prepare for rebuttals through grammar and interactive speaking activities",
          "curriculum_outcomes": [
              "Understand the debate format of communications and it’s structure",
              "Practice micro-skills used in debate - stating opinion, effective opening and closing, rebuttal",
              "Learn to research and prepare for a debate",
              "Perform and compete with other students!"
          ]
      }
  ]
}

const result = DummyData[Math.floor(Math.random() * Object.keys(DummyData).length)]

function App() {
  const [juniorSelected,setJuniorSelected] = useState(true); 
  const finalResult = result.filter(data => {
    return juniorSelected ? (data.min_age >= 6 && data.min_age <= 10 || data.max_age >= 6 && data.max_age <= 10) : (data.min_age >= 10 && data.min_age <= 15 || data.max_age >= 10 && data.max_age <= 15) 
  })

  return (
    <center>
      <div className={classes.selectContainer}>
        <div onClick={() => {setJuniorSelected(!juniorSelected)}} style={{backgroundColor:juniorSelected ? "#003F5C" : "#D5F1FE"}} className={classes.selectText}>Junior
(Age 6-10)</div>
        <div onClick={() => {setJuniorSelected(!juniorSelected)}} style={{backgroundColor:juniorSelected ? "#D5F1FE" : "#003F5C"}} className={classes.selectText}>Senior
(Age 10-15)</div>
      </div>
      <div className={classes.listItemContainer}>
          {finalResult.map((data) => <ListItem data={data}></ListItem>)}        
      </div>
    </center>
  );
}

export default App;
