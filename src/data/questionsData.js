import englishQuestions from "./englishQuestions.json" with { type: "json" };

export const questionsData = [
  ...englishQuestions.map(q => ({
    id: q.id,
    category: "English Comprehension",
    difficulty: q.difficulty || "easy",
    question: q.question,
    options: q.options,
    answer: q.answer
  })),
  {
    "id": "grammar_1",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "Choose the correct article: I saw ___ elephant at the zoo.",
    "options": [
      "a",
      "an",
      "the",
      "no article"
    ],
    "answer": "an"
  },
  {
    "id": "grammar_2",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "Choose the correct preposition: The book is ___ the table.",
    "options": [
      "in",
      "on",
      "at",
      "under"
    ],
    "answer": "on"
  },
  {
    "id": "grammar_3",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "Choose the correct verb: She ___ to school every day.",
    "options": [
      "go",
      "goes",
      "going",
      "gone"
    ],
    "answer": "goes"
  },
  {
    "id": "grammar_4",
    "category": "English Grammar",
    "difficulty": "medium",
    "question": "Identify the tense: They have been playing cricket since morning.",
    "options": [
      "Simple Present",
      "Present Continuous",
      "Present Perfect",
      "Present Perfect Continuous"
    ],
    "answer": "Present Perfect Continuous"
  },
  {
    "id": "grammar_5",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "What is the plural of 'Child'?",
    "options": [
      "Childs",
      "Childrens",
      "Children",
      "Childes"
    ],
    "answer": "Children"
  },
  {
    "id": "grammar_6",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "Choose the correct spelling:",
    "options": [
      "Tommorow",
      "Tomorrow",
      "Tomorow",
      "Tommorrow"
    ],
    "answer": "Tomorrow"
  },
  {
    "id": "grammar_7",
    "category": "English Grammar",
    "difficulty": "medium",
    "question": "Choose the correct conjunction: He is poor ___ he is honest.",
    "options": [
      "and",
      "or",
      "but",
      "so"
    ],
    "answer": "but"
  },
  {
    "id": "grammar_8",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "Which of the following is a noun?",
    "options": [
      "Quickly",
      "Beautiful",
      "Happiness",
      "Run"
    ],
    "answer": "Happiness"
  },
  {
    "id": "grammar_9",
    "category": "English Grammar",
    "difficulty": "medium",
    "question": "Choose the correct word: My mother asked me to ___ the door.",
    "options": [
      "close",
      "clothes",
      "cloes",
      "cloze"
    ],
    "answer": "close"
  },
  {
    "id": "grammar_10",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "The dog barked ___ at the stranger.",
    "options": [
      "loud",
      "loudly",
      "louder",
      "loudness"
    ],
    "answer": "loudly"
  }
,
  {
    "id": "api_apt_1",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "How many permutations can be formed using the letters of the word 'REPLAY'?",
    "options": [
      "5040",
      "360",
      "120",
      "720"
    ],
    "answer": "720"
  },
  {
    "id": "api_apt_2",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "If today is Sunday, what day will it be after 3 days?",
    "options": [
      "Thursday",
      "Tuesday",
      "Monday",
      "Wednesday"
    ],
    "answer": "Wednesday"
  },
  {
    "id": "api_apt_3",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "A solution contains 40% alcohol. How many liters of pure alcohol must be added to 15 liters of the solution to make it a 60% alcohol solution?",
    "options": [
      " 5 liters",
      " 12.5 liters",
      " 10 liters",
      " 7.5 liters"
    ],
    "answer": " 10 liters"
  },
  {
    "id": "api_apt_4",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "A 30-liter solution contains alcohol and water in the ratio 2:3. How many liters of alcohol should be added to make the ratio 3:2?",
    "options": [
      " 12 liters",
      " 5 liters",
      " 10 liters",
      " 8 liters"
    ],
    "answer": " 8 liters"
  },
  {
    "id": "api_apt_5",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "A mother is twice as old as her son. After 6 years, her age will be three times the age of her son. What are their present ages?",
    "options": [
      "20 years, 10 years",
      "24 years, 12 years",
      "28 years, 14 years",
      "32 years, 16 years"
    ],
    "answer": "24 years, 12 years"
  },
  {
    "id": "api_apt_6",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "How many odd days are there in the century starting from 1901 to 2000?",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "answer": "5"
  },
  {
    "id": "api_apt_7",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "The ratio of K's present age to his age after 30 years is 12:23. Calculate K's present age?",
    "options": [
      "31 years",
      "46 years",
      "36 years",
      "41 years"
    ],
    "answer": "36 years"
  },
  {
    "id": "api_apt_8",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "56 years ago, X's age was one-twenty-fifth of his present age. Calculate X's present age?",
    "options": [
      "1400 years",
      "1360 years",
      "1480 years",
      "1440 years"
    ],
    "answer": "1400 years"
  },
  {
    "id": "api_apt_9",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "If May 1, 2023, falls on a Monday, what day of the week will May 31, 2023, be?",
    "options": [
      "Thursday",
      "Wednesday",
      "Tuesday",
      "Monday"
    ],
    "answer": "Wednesday"
  },
  {
    "id": "api_apt_10",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "A 60-liter mixture of milk and water contains milk and water in the ratio 3:2. How much of the mixture must be replaced with water so that the resulting mixture has equal parts of milk and water?",
    "options": [
      " 15 liters",
      " 20 liters",
      " 25 liters",
      " 30 liters"
    ],
    "answer": " 25 liters"
  },
  {
    "id": "api_apt_11",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "A retailer mixes two types of pulses, one costing ₹2/kg and the other ₹3/kg, to make a mixture worth ₹2.40/kg. Calculate the ratio in which the two types of pulses are mixed?",
    "options": [
      " 1:2",
      " 2:1",
      " 2:3",
      " 3:2"
    ],
    "answer": " 2:1"
  },
  {
    "id": "api_apt_12",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "If Alice is 5 years older than Bob, and the sum of their ages is 35, how old is Alice?",
    "options": [
      "20",
      "25",
      "35",
      "30"
    ],
    "answer": "20"
  },
  {
    "id": "api_apt_13",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "A solution contains 40% acid. How many liters of pure acid should be added to 15 liters of the solution to make it a 60% acid solution?",
    "options": [
      " 10 liters",
      " 7.5 liters",
      " 12.5 liters",
      " 5 liters"
    ],
    "answer": " 10 liters"
  },
  {
    "id": "api_apt_14",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "In a lottery game, there are 50 numbers. How many different combinations of 6 numbers can be chosen?",
    "options": [
      "2000",
      "151200",
      "15150",
      "19600"
    ],
    "answer": "15150"
  },
  {
    "id": "api_apt_15",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "A solution contains 30% acid. How many liters of pure acid should be added to 10 liters of the solution to make it a 60% acid solution?",
    "options": [
      " 10 liters",
      " 5 liters",
      " 15 liters",
      " 20 liters"
    ],
    "answer": " 20 liters"
  },
  {
    "id": "api_apt_16",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "How many different combinations of 3 fruits can be chosen from a basket containing 5 types of fruits if each type of fruit can be chosen multiple times?",
    "options": [
      "25",
      "10",
      "20",
      "15"
    ],
    "answer": "35"
  },
  {
    "id": "api_apt_17",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "How many different ways can 6 chairs be arranged around a circular table?",
    "options": [
      "40",
      "5040",
      "120",
      "720"
    ],
    "answer": "720"
  },
  {
    "id": "api_apt_18",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "In how many ways can 2 dice be chosen from a set of 6 dice?",
    "options": [
      "30",
      "10",
      "15",
      "20"
    ],
    "answer": "15"
  },
  {
    "id": "api_apt_19",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "60 years ago, Z's age was one-twenty-seventh of his present age. Calculate Z's present age?",
    "options": [
      "1716 years",
      "1668 years",
      "1620 years",
      "1572 years"
    ],
    "answer": "1620 years"
  },
  {
    "id": "api_apt_20",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "The ratio of D's present age to his age after 10 years is 5:9. Calculate D's present age?",
    "options": [
      "30 years",
      "35 years",
      "25 years",
      "20 years"
    ],
    "answer": "25 years"
  },
  {
    "id": "api_apt_21",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "In how many ways can a committee of 5 members be chosen from a group of 10 people?",
    "options": [
      " 252",
      " 100",
      " 210",
      " 50"
    ],
    "answer": " 210"
  },
  {
    "id": "api_apt_22",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "How many ways can a president, vice president, and secretary be selected from a group of 15 people?",
    "options": [
      " 2730",
      " 1260",
      " 32760",
      " 4550"
    ],
    "answer": " 2730"
  },
  {
    "id": "api_apt_23",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "A 40-liter mixture of milk and water contains milk and water in the ratio 5:3. How much of the mixture must be replaced with water so that the resulting mixture has equal parts of milk and water?",
    "options": [
      " 10 liters",
      " 5 liters",
      " 15 liters",
      " 20 liters"
    ],
    "answer": " 15 liters"
  },
  {
    "id": "api_apt_24",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "A solution contains 40% acid. How many liters of pure acid should be added to 15 liters of the solution to make it a 70% acid solution?",
    "options": [
      " 5 liters",
      " 20 liters",
      " 10 liters",
      " 15 liters"
    ],
    "answer": " 20 liters"
  },
  {
    "id": "api_apt_25",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "From a group of 6 people, how many different pairs can be formed?",
    "options": [
      "15",
      "12",
      "6",
      "9"
    ],
    "answer": "15"
  },
  {
    "id": "api_apt_26",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "How many different combinations of 2 letters can be chosen from the word 'BANANA'?",
    "options": [
      "10",
      "25",
      "15",
      "20"
    ],
    "answer": "15"
  },
  {
    "id": "api_apt_27",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "The product of ages of D and E is 1350. If the ratio of their ages is 3:5, Calculate E's age?",
    "options": [
      "45 years",
      "40 years",
      "35 years",
      "30 years"
    ],
    "answer": "45 years"
  },
  {
    "id": "api_apt_28",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "The product of ages of P and Q is 210. If the ratio of their ages is 4:7, Calculate P's age?",
    "options": [
      "18 years",
      "16 years",
      "14 years",
      "12 years"
    ],
    "answer": "12 years"
  },
  {
    "id": "api_apt_29",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "The present age of A is twice the age of B. If the age of B was 4 years more, then the present age of A is 10 years more than thrice the age of B. What are their present ages?",
    "options": [
      "20 years, 10 years",
      "24 years, 12 years",
      "28 years, 14 years",
      "32 years, 16 years"
    ],
    "answer": "24 years, 12 years"
  },
  {
    "id": "api_apt_30",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "How many odd days are there in the century starting from 1701 to 1800?",
    "options": [
      "6",
      "4",
      "5",
      "7"
    ],
    "answer": "5"
  },
  {
    "id": "api_apt_31",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "The product of ages of L and M is 819. If the ratio of their ages is 5:9, Calculate M's age?",
    "options": [
      "27 years",
      "21 years",
      "24 years",
      "30 years"
    ],
    "answer": "27 years"
  },
  {
    "id": "api_apt_32",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "If today is Wednesday, what day was it 4 days ago?",
    "options": [
      "Monday",
      "Tuesday",
      "Sunday",
      "Saturday"
    ],
    "answer": "Saturday"
  },
  {
    "id": "api_apt_33",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "22 years ago, I's age was one-tenth of his present age. Calculate I's present age?",
    "options": [
      "200 years",
      "220 years",
      "260 years",
      "240 years"
    ],
    "answer": "220 years"
  },
  {
    "id": "api_apt_34",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "A container has 40 liters of a solution containing milk and water in the ratio of 3:1. How much of the mixture must be taken out and replaced with water so that the resulting mixture has equal parts of milk and water?",
    "options": [
      " 10 liters",
      " 25 liters",
      " 15 liters",
      " 20 liters"
    ],
    "answer": " 15 liters"
  },
  {
    "id": "api_apt_35",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "From a group of 9 people, how many different pairs can be formed?",
    "options": [
      "36",
      "45",
      "56",
      "42"
    ],
    "answer": "36"
  },
  {
    "id": "api_apt_36",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "If June 1, 2023, falls on a Thursday, what day of the week will June 30, 2023, be?",
    "options": [
      "Monday",
      "Sunday",
      "Saturday",
      "Friday"
    ],
    "answer": "Saturday"
  },
  {
    "id": "api_apt_37",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "If today is Wednesday, what day of the week will it be after 6 days?",
    "options": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday"
    ],
    "answer": "Tuesday"
  },
  {
    "id": "api_apt_38",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "If today is Monday, what day of the week was it 4 days ago?",
    "options": [
      "Monday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "answer": "Thursday"
  },
  {
    "id": "api_apt_39",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "If today is Monday, what day of the week will it be after 3 days?",
    "options": [
      "Thursday",
      "Wednesday",
      "Tuesday",
      "Monday"
    ],
    "answer": "Thursday"
  },
  {
    "id": "api_apt_40",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "If today is Tuesday, what day was it 2 days ago?",
    "options": [
      "Wednesday",
      "Monday",
      "Sunday",
      "Thursday"
    ],
    "answer": "Sunday"
  },
  {
    "id": "api_apt_41",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "A solution contains 40% alcohol. How many liters of pure alcohol should be added to 15 liters of the solution to make it a 60% alcohol solution?",
    "options": [
      " 12.5 liters",
      " 10 liters",
      " 7.5 liters",
      " 5 liters"
    ],
    "answer": " 10 liters"
  },
  {
    "id": "api_apt_42",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "In how many ways can 2 books be selected from a shelf containing 7 books?",
    "options": [
      "15",
      "35",
      "21",
      "42"
    ],
    "answer": "21"
  },
  {
    "id": "api_apt_43",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "The ratio of C's present age to his age after 8 years is 4:7. Calculate C's present age?",
    "options": [
      "12 years",
      "16 years",
      "20 years",
      "24 years"
    ],
    "answer": "16 years"
  },
  {
    "id": "api_apt_44",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "John is twice as old as Peter. If the sum of their ages is 36, how old is John?",
    "options": [
      "24",
      "20",
      "30",
      "32"
    ],
    "answer": "24"
  },
  {
    "id": "api_apt_45",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "A solution contains 20% acid. How many liters of pure acid should be added to 20 liters of the solution to make it a 50% acid solution?",
    "options": [
      " 20 liters",
      " 15 liters",
      " 10 liters",
      " 5 liters"
    ],
    "answer": " 20 liters"
  },
  {
    "id": "api_apt_46",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "In a box of assorted candies, how many different combinations of 4 candies can be chosen if there are 8 types of candies and each type can be chosen multiple times?",
    "options": [
      "70",
      "120",
      "56",
      "84"
    ],
    "answer": "56"
  },
  {
    "id": "api_apt_47",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "A dealer mixes two types of wheat, one costing ₹4/kg and the other ₹5/kg, to make a mixture worth ₹4.50/kg. Calculate the ratio in which the two types of wheat are mixed?",
    "options": [
      " 2:3",
      " 2:1",
      " 1:2",
      " 3:2"
    ],
    "answer": " 2:1"
  },
  {
    "id": "api_apt_48",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "A solution contains 25% salt. How many liters of pure water should be added to 20 liters of the solution to make it a 20% salt solution?",
    "options": [
      " 8 liters",
      " 5 liters",
      " 10 liters",
      " 12 liters"
    ],
    "answer": " 10 liters"
  },
  {
    "id": "api_apt_49",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "A child is arranging beads on a necklace. There are 5 colors of beads available, and the child can choose up to 4 beads with repetition allowed. How many different combinations of beads are possible?",
    "options": [
      "30",
      "70",
      "45",
      "15"
    ],
    "answer": "70"
  },
  {
    "id": "api_apt_50",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "How many different pairs of shoes can be chosen from a collection of 5 pairs?",
    "options": [
      "10",
      "15",
      "20",
      "25"
    ],
    "answer": "10"
  },
  {
    "id": "api_apt_51",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "A solution contains 20% acid. How many liters of pure acid should be added to 15 liters of the solution to make it a 40% acid solution?",
    "options": [
      " 5 liters",
      " 12.5 liters",
      " 7.5 liters",
      " 10 liters"
    ],
    "answer": " 12.5 liters"
  },
  {
    "id": "api_apt_52",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "If tomorrow is Wednesday, what day was it yesterday?",
    "options": [
      "Thursday",
      "Tuesday",
      "Friday",
      "Monday"
    ],
    "answer": "Monday"
  },
  {
    "id": "api_apt_53",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "36 years ago, U's age was one-twenty-second of his present age. Calculate U's present age?",
    "options": [
      "756 years",
      "792 years",
      "828 years",
      "864 years"
    ],
    "answer": "792 years"
  },
  {
    "id": "api_apt_54",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "How many odd days are there in the century starting from 1401 to 1500?",
    "options": [
      "7",
      "4",
      "6",
      "5"
    ],
    "answer": "5"
  },
  {
    "id": "api_apt_55",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "A 30-liter solution contains milk and water in the ratio 5:2. How many liters of milk should be added to make the ratio 2:1?",
    "options": [
      " 18 liters",
      " 10 liters",
      " 12 liters",
      " 15 liters"
    ],
    "answer": " 15 liters"
  },
  {
    "id": "api_apt_56",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "A 30-liter solution contains milk and water in the ratio 7:3. How much water must be added to make the ratio 7:5?",
    "options": [
      " 12 liters",
      " 6 liters",
      " 8 liters",
      " 10 liters"
    ],
    "answer": " 10 liters"
  },
  {
    "id": "api_apt_57",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "In a box of assorted chocolates, how many different combinations of 3 chocolates can be chosen if each chocolate can be chosen multiple times?",
    "options": [
      "20",
      "15",
      "10",
      "30"
    ],
    "answer": "20"
  },
  {
    "id": "api_apt_58",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "A 40-liter solution contains alcohol and water in the ratio 4:1. How many liters of alcohol must be added to make the ratio 3:1?",
    "options": [
      " 8 liters",
      " 12 liters",
      " 16 liters",
      " 4 liters"
    ],
    "answer": " 8 liters"
  },
  {
    "id": "api_apt_59",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "How many odd days are there in 400 years?",
    "options": [
      "2",
      "3",
      "0",
      "1"
    ],
    "answer": "0"
  },
  {
    "id": "api_apt_60",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "What day was it on 1st January 1756?",
    "options": [
      "Wednesday",
      "Friday",
      "Saturday",
      "Thursday"
    ],
    "answer": "Thursday"
  },
  {
    "id": "api_apt_61",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "If today is Friday, what day of the week will it be after 5 days?",
    "options": [
      "Wednesday",
      "Tuesday",
      "Monday",
      "Thursday"
    ],
    "answer": "Wednesday"
  },
  {
    "id": "api_apt_62",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "In a 40-liter solution of acid and water, the ratio of acid to water is 2:3. How many liters of water should be added to make the ratio 1:2?",
    "options": [
      " 35 liters",
      " 30 liters",
      " 25 liters",
      " 20 liters"
    ],
    "answer": " 25 liters"
  },
  {
    "id": "api_apt_63",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "How many odd days are there in 700 years?",
    "options": [
      "3",
      "2",
      "1",
      "0"
    ],
    "answer": "1"
  },
  {
    "id": "api_apt_64",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "How many odd days are there in the century starting from 1201 to 1300?",
    "options": [
      "7",
      "6",
      "5",
      "4"
    ],
    "answer": "6"
  },
  {
    "id": "api_apt_65",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "In how many ways can the letters of the word 'DETERMINATION' be arranged?",
    "options": [
      "302400",
      "30240",
      "1814400",
      "1663200"
    ],
    "answer": "1663200"
  },
  {
    "id": "api_apt_66",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "A solution contains 40% alcohol. How many liters of pure alcohol should be added to 15 liters of the solution to make it a 70% alcohol solution?",
    "options": [
      " 12.5 liters",
      " 5 liters",
      " 7.5 liters",
      " 10 liters"
    ],
    "answer": " 10 liters"
  },
  {
    "id": "api_apt_67",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "A merchant blends two types of coffee, one costing ₹7/kg and the other ₹8/kg, to make a mixture worth ₹7.50/kg. Calculate the ratio in which the two types of coffee are mixed?",
    "options": [
      " 1:2",
      " 2:1",
      " 3:2",
      " 2:3"
    ],
    "answer": " 1:2"
  },
  {
    "id": "api_apt_68",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "How many different permutations can be made using the letters of the word 'SUCCESS'?",
    "options": [
      "5040",
      "720",
      "2520",
      "362880"
    ],
    "answer": "2520"
  },
  {
    "id": "api_apt_69",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "The ratio of L's present age to his age after 35 years is 13:25. Calculate L's present age?",
    "options": [
      "34 years",
      "49 years",
      "39 years",
      "44 years"
    ],
    "answer": "39 years"
  },
  {
    "id": "api_apt_70",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "A 20-liter mixture of milk and water contains milk and water in the ratio 3:1. How many liters of the mixture must be replaced with milk to make the ratio 2:1?",
    "options": [
      " 8 liters",
      " 2 liters",
      " 4 liters",
      " 6 liters"
    ],
    "answer": " 6 liters"
  },
  {
    "id": "api_apt_71",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "A solution contains 20% alcohol. How many liters of pure alcohol should be added to 10 liters of the solution to make it a 50% alcohol solution?",
    "options": [
      " 12.5 liters",
      " 10 liters",
      " 7.5 liters",
      " 5 liters"
    ],
    "answer": " 12.5 liters"
  },
  {
    "id": "api_apt_72",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "If today is Monday, what day was it 3 days ago?",
    "options": [
      "Friday",
      "Monday",
      "Sunday",
      "Saturday"
    ],
    "answer": "Friday"
  },
  {
    "id": "api_apt_73",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "A trader mixes two varieties of rice costing ₹2.50/kg and ₹3/kg, respectively. Calculate the cost price per kg of the mixture if the trader mixes the two in the ratio 2:3?",
    "options": [
      " ₹2.90",
      " ₹2.60",
      " ₹2.70",
      " ₹2.80"
    ],
    "answer": " ₹2.80"
  },
  {
    "id": "api_apt_74",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "In how many ways can 5 beads be arranged on a circular bracelet?",
    "options": [
      "12",
      "4",
      "8",
      "24"
    ],
    "answer": "4"
  },
  {
    "id": "api_apt_75",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "In how many ways can 3 candies be chosen from a jar containing 10 different candies?",
    "options": [
      "84",
      "120",
      "56",
      "210"
    ],
    "answer": "120"
  },
  {
    "id": "api_apt_76",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "A mixture of 30 liters contains alcohol and water in the ratio 2:3. How many liters of water must be added to make the ratio 2:5?",
    "options": [
      " 10 liters",
      " 15 liters",
      " 20 liters",
      " 25 liters"
    ],
    "answer": " 20 liters"
  },
  {
    "id": "api_apt_77",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "In a 20-liter mixture of milk and water, the ratio of milk to water is 3:2. How many liters of water must be added to the mixture to make the ratio 3:4?",
    "options": [
      " 2 liters",
      " 8 liters",
      " 4 liters",
      " 6 liters"
    ],
    "answer": " 6 liters"
  },
  {
    "id": "api_apt_78",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "A committee of 4 people needs to be formed from a group of 9 people. How many different committees are possible?",
    "options": [
      "126",
      "72",
      "84",
      "252"
    ],
    "answer": "126"
  },
  {
    "id": "api_apt_79",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "A solution contains 20% acid. How many liters of pure acid should be added to 20 liters of the solution to make it a 40% acid solution?",
    "options": [
      " 5 liters",
      " 10 liters",
      " 15 liters",
      " 20 liters"
    ],
    "answer": " 20 liters"
  },
  {
    "id": "api_apt_80",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "How many odd days are there in the century starting from 1501 to 1600?",
    "options": [
      "7",
      "4",
      "5",
      "6"
    ],
    "answer": "6"
  },
  {
    "id": "api_apt_81",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "The product of ages of M and N is 600. If the ratio of their ages is 5:8, Calculate N's age?",
    "options": [
      "36 years",
      "32 years",
      "40 years",
      "48 years"
    ],
    "answer": "48 years"
  },
  {
    "id": "api_apt_82",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "A is 2 years older than B who is twice as old as C. If the total of the ages of A, B, and C is 27 years, Calculate the age of B?",
    "options": [
      "8 years",
      "14 years",
      "12 years",
      "10 years"
    ],
    "answer": "10 years"
  },
  {
    "id": "api_apt_83",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "How many odd days are there in the century starting from 401 to 500?",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "answer": "5"
  },
  {
    "id": "api_apt_84",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "In how many ways can 7 beads be arranged on a circular necklace?",
    "options": [
      "40",
      "720",
      "5040",
      "120"
    ],
    "answer": "5040"
  },
  {
    "id": "api_apt_85",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "A 20-liter mixture contains alcohol and water in the ratio 3:2. How many liters of alcohol should be added to make the ratio 4:3?",
    "options": [
      " 10 liters",
      " 7.5 liters",
      " 5 liters",
      " 12.5 liters"
    ],
    "answer": " 7.5 liters"
  },
  {
    "id": "api_apt_86",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "If 12th July 1995 was Wednesday, what day of the week was 12th July 2005?",
    "options": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday"
    ],
    "answer": "Tuesday"
  },
  {
    "id": "api_apt_87",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "A person is 3 times as old as his son. 10 years ago, the age of the person was 4 times the age of his son. What are their present ages?",
    "options": [
      "25 years, 5 years",
      "30 years, 10 years",
      "35 years, 15 years",
      "40 years, 20 years"
    ],
    "answer": "30 years, 10 years"
  },
  {
    "id": "api_apt_88",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "The ratio of the present ages of a father and his son is 4:1. Six years ago, the ratio of their ages was 9:2. What are their present ages?",
    "options": [
      "32 years, 8 years",
      "36 years, 9 years",
      "40 years, 10 years",
      "44 years, 11 years"
    ],
    "answer": "36 years, 9 years"
  },
  {
    "id": "api_apt_89",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "If 18th February 2012 was Saturday, what day of the week was 18th February 2022?",
    "options": [
      "Monday",
      "Tuesday",
      "Friday",
      "Wednesday"
    ],
    "answer": "Friday"
  },
  {
    "id": "api_apt_90",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "How many different 3-letter words can be formed using the letters A, B, C, and D if repetition is allowed?",
    "options": [
      " 64",
      " 24",
      " 12",
      " 16"
    ],
    "answer": " 64"
  },
  {
    "id": "api_apt_91",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "48 years ago, T's age was one-twenty-first of his present age. Calculate T's present age?",
    "options": [
      "960 years",
      "1056 years",
      "1008 years",
      "1104 years"
    ],
    "answer": "1008 years"
  },
  {
    "id": "api_apt_92",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "If today is Friday, what day will it be after 1 week?",
    "options": [
      "Friday",
      "Saturday",
      "Sunday",
      "Monday"
    ],
    "answer": "Friday"
  },
  {
    "id": "api_apt_93",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "The ratio of M's present age to his age after 40 years is 14:27. Calculate M's present age?",
    "options": [
      "37 years",
      "42 years",
      "47 years",
      "52 years"
    ],
    "answer": "42 years"
  },
  {
    "id": "api_apt_94",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "How many 5-card hands can be dealt from a standard deck of 52 cards?",
    "options": [
      " 1,098,240",
      " 52",
      " 2,598,960",
      " 1,326"
    ],
    "answer": " 2,598,960"
  },
  {
    "id": "api_apt_95",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "A solution contains 40% alcohol. How many liters of pure alcohol should be added to 15 liters of the solution to make it a 80% alcohol solution?",
    "options": [
      " 20 liters",
      " 15 liters",
      " 10 liters",
      " 5 liters"
    ],
    "answer": " 15 liters"
  },
  {
    "id": "api_apt_96",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "If today is Sunday, what day of the week was it 3 days ago?",
    "options": [
      "Thursday",
      "Wednesday",
      "Tuesday",
      "Monday"
    ],
    "answer": "Thursday"
  },
  {
    "id": "api_apt_97",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "A container has 60 liters of a mixture of milk and water in the ratio 3:2. How many liters of milk should be added to make the ratio 2:1?",
    "options": [
      " 10 liters",
      " 25 liters",
      " 15 liters",
      " 20 liters"
    ],
    "answer": " 20 liters"
  },
  {
    "id": "api_apt_98",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "50 years ago, R's age was one-nineteenth of his present age. Calculate R's present age?",
    "options": [
      "900 years",
      "950 years",
      "1050 years",
      "1000 years"
    ],
    "answer": "950 years"
  },
  {
    "id": "api_apt_99",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "A retailer mixes two types of flour, one costing ₹2/kg and the other ₹3/kg, to make a mixture worth ₹2.40/kg. Calculate the ratio in which the two types of flour are mixed?",
    "options": [
      " 3:2",
      " 2:3",
      " 2:1",
      " 1:2"
    ],
    "answer": " 3:2"
  },
  {
    "id": "api_apt_100",
    "category": "Quantitative Aptitude",
    "difficulty": "medium",
    "question": "20 years ago, E's age was one-sixth of his present age. Calculate E's present age?",
    "options": [
      "150 years",
      "120 years",
      "180 years",
      "90 years"
    ],
    "answer": "120 years"
  },
  {
    "id": "grammar_1783059484577_0",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "Rohan is very good ___ mathematics.",
    "options": [
      "in",
      "at",
      "with",
      "on"
    ],
    "answer": "at"
  },
  {
    "id": "grammar_1783059484577_1",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "She ___ to the market yesterday.",
    "options": [
      "goes",
      "went",
      "gone",
      "going"
    ],
    "answer": "went"
  },
  {
    "id": "grammar_1783059484577_2",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "I have been living in Mumbai ___ 2015.",
    "options": [
      "for",
      "since",
      "from",
      "till"
    ],
    "answer": "since"
  },
  {
    "id": "grammar_1783059484577_3",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "Neither of the boys ___ done the homework.",
    "options": [
      "have",
      "has",
      "is",
      "are"
    ],
    "answer": "has"
  },
  {
    "id": "grammar_1783059484577_4",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "He is ___ honest boy.",
    "options": [
      "a",
      "an",
      "the",
      "no article"
    ],
    "answer": "an"
  },
  {
    "id": "grammar_1783059484577_5",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "They ___ playing football when it started raining.",
    "options": [
      "are",
      "were",
      "was",
      "have been"
    ],
    "answer": "were"
  },
  {
    "id": "grammar_1783059484577_6",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "I prefer milk ___ coffee.",
    "options": [
      "than",
      "to",
      "over",
      "from"
    ],
    "answer": "to"
  },
  {
    "id": "grammar_1783059484577_7",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "The train ___ before we reached the station.",
    "options": [
      "left",
      "had left",
      "has left",
      "was leaving"
    ],
    "answer": "had left"
  },
  {
    "id": "grammar_1783059484577_8",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "If I ___ a bird, I would fly.",
    "options": [
      "am",
      "was",
      "were",
      "be"
    ],
    "answer": "were"
  },
  {
    "id": "grammar_1783059484577_9",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "Please distribute these sweets ___ the children.",
    "options": [
      "between",
      "among",
      "with",
      "to"
    ],
    "answer": "among"
  },
  {
    "id": "grammar_1783059484577_10",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "Rohan is very good ___ mathematics.",
    "options": [
      "in",
      "at",
      "with",
      "on"
    ],
    "answer": "at"
  },
  {
    "id": "grammar_1783059484577_11",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "She ___ to the market yesterday.",
    "options": [
      "goes",
      "went",
      "gone",
      "going"
    ],
    "answer": "went"
  },
  {
    "id": "grammar_1783059484578_12",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "I have been living in Mumbai ___ 2015.",
    "options": [
      "for",
      "since",
      "from",
      "till"
    ],
    "answer": "since"
  },
  {
    "id": "grammar_1783059484578_13",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "Neither of the boys ___ done the homework.",
    "options": [
      "have",
      "has",
      "is",
      "are"
    ],
    "answer": "has"
  },
  {
    "id": "grammar_1783059484578_14",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "He is ___ honest boy.",
    "options": [
      "a",
      "an",
      "the",
      "no article"
    ],
    "answer": "an"
  },
  {
    "id": "grammar_1783059484578_15",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "They ___ playing football when it started raining.",
    "options": [
      "are",
      "were",
      "was",
      "have been"
    ],
    "answer": "were"
  },
  {
    "id": "grammar_1783059484578_16",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "I prefer milk ___ coffee.",
    "options": [
      "than",
      "to",
      "over",
      "from"
    ],
    "answer": "to"
  },
  {
    "id": "grammar_1783059484578_17",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "The train ___ before we reached the station.",
    "options": [
      "left",
      "had left",
      "has left",
      "was leaving"
    ],
    "answer": "had left"
  },
  {
    "id": "grammar_1783059484578_18",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "If I ___ a bird, I would fly.",
    "options": [
      "am",
      "was",
      "were",
      "be"
    ],
    "answer": "were"
  },
  {
    "id": "grammar_1783059484578_19",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "Please distribute these sweets ___ the children.",
    "options": [
      "between",
      "among",
      "with",
      "to"
    ],
    "answer": "among"
  },
  {
    "id": "grammar_1783059484578_20",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "Rohan is very good ___ mathematics.",
    "options": [
      "in",
      "at",
      "with",
      "on"
    ],
    "answer": "at"
  },
  {
    "id": "grammar_1783059484578_21",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "She ___ to the market yesterday.",
    "options": [
      "goes",
      "went",
      "gone",
      "going"
    ],
    "answer": "went"
  },
  {
    "id": "grammar_1783059484578_22",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "I have been living in Mumbai ___ 2015.",
    "options": [
      "for",
      "since",
      "from",
      "till"
    ],
    "answer": "since"
  },
  {
    "id": "grammar_1783059484578_23",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "Neither of the boys ___ done the homework.",
    "options": [
      "have",
      "has",
      "is",
      "are"
    ],
    "answer": "has"
  },
  {
    "id": "grammar_1783059484578_24",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "He is ___ honest boy.",
    "options": [
      "a",
      "an",
      "the",
      "no article"
    ],
    "answer": "an"
  },
  {
    "id": "grammar_1783059484578_25",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "They ___ playing football when it started raining.",
    "options": [
      "are",
      "were",
      "was",
      "have been"
    ],
    "answer": "were"
  },
  {
    "id": "grammar_1783059484578_26",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "I prefer milk ___ coffee.",
    "options": [
      "than",
      "to",
      "over",
      "from"
    ],
    "answer": "to"
  },
  {
    "id": "grammar_1783059484578_27",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "The train ___ before we reached the station.",
    "options": [
      "left",
      "had left",
      "has left",
      "was leaving"
    ],
    "answer": "had left"
  },
  {
    "id": "grammar_1783059484578_28",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "If I ___ a bird, I would fly.",
    "options": [
      "am",
      "was",
      "were",
      "be"
    ],
    "answer": "were"
  },
  {
    "id": "grammar_1783059484578_29",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "Please distribute these sweets ___ the children.",
    "options": [
      "between",
      "among",
      "with",
      "to"
    ],
    "answer": "among"
  },
  {
    "id": "grammar_1783059484578_30",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "Rohan is very good ___ mathematics.",
    "options": [
      "in",
      "at",
      "with",
      "on"
    ],
    "answer": "at"
  },
  {
    "id": "grammar_1783059484578_31",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "She ___ to the market yesterday.",
    "options": [
      "goes",
      "went",
      "gone",
      "going"
    ],
    "answer": "went"
  },
  {
    "id": "grammar_1783059484578_32",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "I have been living in Mumbai ___ 2015.",
    "options": [
      "for",
      "since",
      "from",
      "till"
    ],
    "answer": "since"
  },
  {
    "id": "grammar_1783059484578_33",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "Neither of the boys ___ done the homework.",
    "options": [
      "have",
      "has",
      "is",
      "are"
    ],
    "answer": "has"
  },
  {
    "id": "grammar_1783059484578_34",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "He is ___ honest boy.",
    "options": [
      "a",
      "an",
      "the",
      "no article"
    ],
    "answer": "an"
  },
  {
    "id": "grammar_1783059484578_35",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "They ___ playing football when it started raining.",
    "options": [
      "are",
      "were",
      "was",
      "have been"
    ],
    "answer": "were"
  },
  {
    "id": "grammar_1783059484578_36",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "I prefer milk ___ coffee.",
    "options": [
      "than",
      "to",
      "over",
      "from"
    ],
    "answer": "to"
  },
  {
    "id": "grammar_1783059484578_37",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "The train ___ before we reached the station.",
    "options": [
      "left",
      "had left",
      "has left",
      "was leaving"
    ],
    "answer": "had left"
  },
  {
    "id": "grammar_1783059484578_38",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "If I ___ a bird, I would fly.",
    "options": [
      "am",
      "was",
      "were",
      "be"
    ],
    "answer": "were"
  },
  {
    "id": "grammar_1783059484578_39",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "Please distribute these sweets ___ the children.",
    "options": [
      "between",
      "among",
      "with",
      "to"
    ],
    "answer": "among"
  },
  {
    "id": "grammar_1783059484578_40",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "Rohan is very good ___ mathematics.",
    "options": [
      "in",
      "at",
      "with",
      "on"
    ],
    "answer": "at"
  },
  {
    "id": "grammar_1783059484578_41",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "She ___ to the market yesterday.",
    "options": [
      "goes",
      "went",
      "gone",
      "going"
    ],
    "answer": "went"
  },
  {
    "id": "grammar_1783059484578_42",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "I have been living in Mumbai ___ 2015.",
    "options": [
      "for",
      "since",
      "from",
      "till"
    ],
    "answer": "since"
  },
  {
    "id": "grammar_1783059484578_43",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "Neither of the boys ___ done the homework.",
    "options": [
      "have",
      "has",
      "is",
      "are"
    ],
    "answer": "has"
  },
  {
    "id": "grammar_1783059484578_44",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "He is ___ honest boy.",
    "options": [
      "a",
      "an",
      "the",
      "no article"
    ],
    "answer": "an"
  },
  {
    "id": "grammar_1783059484578_45",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "They ___ playing football when it started raining.",
    "options": [
      "are",
      "were",
      "was",
      "have been"
    ],
    "answer": "were"
  },
  {
    "id": "grammar_1783059484578_46",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "I prefer milk ___ coffee.",
    "options": [
      "than",
      "to",
      "over",
      "from"
    ],
    "answer": "to"
  },
  {
    "id": "grammar_1783059484578_47",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "The train ___ before we reached the station.",
    "options": [
      "left",
      "had left",
      "has left",
      "was leaving"
    ],
    "answer": "had left"
  },
  {
    "id": "grammar_1783059484578_48",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "If I ___ a bird, I would fly.",
    "options": [
      "am",
      "was",
      "were",
      "be"
    ],
    "answer": "were"
  },
  {
    "id": "grammar_1783059484578_49",
    "category": "English Grammar",
    "difficulty": "easy",
    "question": "Please distribute these sweets ___ the children.",
    "options": [
      "between",
      "among",
      "with",
      "to"
    ],
    "answer": "among"
  }
];