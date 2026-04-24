const examData = {
    "exams": [
        {
            "id": "cbse10",
            "name": "CBSE Class 10"
        },
        {
            "id": "jee",
            "name": "JEE Main"
        },
        {
            "id": "neet",
            "name": "NEET UG"
        },
        {
            "id": "jee_adv",
            "name": "JEE Advanced"
        }
    ],
    "subjects": {
        "cbse10": [
            {
                "id": "english",
                "name": "English"
            },
            {
                "id": "science",
                "name": "Science"
            },
            {
                "id": "sst",
                "name": "Social Science"
            },
            {
                "id": "maths",
                "name": "Mathematics"
            },
            {
                "id": "it",
                "name": "Information Technology"
            },
            {
                "id": "hindi",
                "name": "Hindi"
            },
            {
                "id": "sanskrit_comm",
                "name": "Sanskrit Communicative"
            },
            {
                "id": "sanskrit",
                "name": "Sanskrit"
            }
        ],
        "jee": [
            {
                "id": "physics",
                "name": "Physics"
            },
            {
                "id": "chemistry",
                "name": "Chemistry"
            },
            {
                "id": "maths",
                "name": "Mathematics"
            }
        ],
        "neet": [
            {
                "id": "physics",
                "name": "Physics"
            },
            {
                "id": "chemistry",
                "name": "Chemistry"
            },
            {
                "id": "biology",
                "name": "Biology"
            }
        ],
        "jee_adv": [
            {
                "id": "physics",
                "name": "Physics"
            },
            {
                "id": "chemistry",
                "name": "Chemistry"
            },
            {
                "id": "maths",
                "name": "Mathematics"
            }
        ]
    },
    "topics": {
        "maths": [
            "Algebra",
            "Geometry",
            "Calculus",
            "Trigonometry",
            "Statistics"
        ],
        "science": [
            "Physics",
            "Chemistry",
            "Biology"
        ],
        "sst": [
            "History",
            "Geography",
            "Civics",
            "Economics"
        ],
        "english": [
            "Grammar",
            "Literature"
        ],
        "it": [
            "RDBMS",
            "Web Apps"
        ],
        "hindi": [
            "Vyakaran",
            "Kshitij"
        ],
        "sanskrit": [
            "Vyakaran"
        ],
        "sanskrit_comm": [
            "Vyakaran"
        ],
        "physics": [
            "Mechanics",
            "Optics"
        ],
        "chemistry": [
            "Organic",
            "Inorganic"
        ],
        "biology": [
            "Zoology",
            "Botany"
        ]
    },
    "questions": {
        "cbse10": [
            {
                "id": 1,
                "subject": "english",
                "topic": "Grammar",
                "difficulty": "hard",
                "text": "Identify the tense: 'The sun rises in the east.'",
                "options": [
                    "Present Continuous",
                    "Simple Present",
                    "Present Perfect",
                    "Simple Past"
                ],
                "answer": 1
            },
            {
                "id": 2,
                "subject": "english",
                "topic": "Grammar",
                "difficulty": "hard",
                "text": "Change to reported speech: He said, 'I am busy.'",
                "options": [
                    "He said that he was busy.",
                    "He said he is busy.",
                    "He says he is busy.",
                    "He said I was busy."
                ],
                "answer": 0
            },
            {
                "id": 3,
                "subject": "english",
                "topic": "Grammar",
                "difficulty": "hard",
                "text": "Who is the author of 'A Letter to God'?",
                "options": [
                    "G.L. Fuentes",
                    "Nelson Mandela",
                    "Liam O'Flaherty",
                    "Robert Frost"
                ],
                "answer": 0
            },
            {
                "id": 4,
                "subject": "english",
                "topic": "Grammar",
                "difficulty": "hard",
                "text": "What did Lencho hope for?",
                "options": [
                    "A new house",
                    "A good shower of rain",
                    "A tractor",
                    "Money from his brother"
                ],
                "answer": 1
            },
            {
                "id": 5,
                "subject": "english",
                "topic": "Grammar",
                "difficulty": "hard",
                "text": "Nelson Mandela was sworn in as the ___ President of South Africa.",
                "options": [
                    "First Black",
                    "Second",
                    "First White",
                    "Third"
                ],
                "answer": 0
            },
            {
                "id": 6,
                "subject": "english",
                "topic": "Grammar",
                "difficulty": "hard",
                "text": "The poem 'Dust of Snow' is written by:",
                "options": [
                    "John Berryman",
                    "Robert Frost",
                    "Walt Whitman",
                    "W.B. Yeats"
                ],
                "answer": 1
            },
            {
                "id": 7,
                "subject": "english",
                "topic": "Grammar",
                "difficulty": "hard",
                "text": "In 'Two Stories about Flying', the young seagull was afraid to:",
                "options": [
                    "Swim",
                    "Run",
                    "Fly",
                    "Eat"
                ],
                "answer": 2
            },
            {
                "id": 8,
                "subject": "english",
                "topic": "Grammar",
                "difficulty": "hard",
                "text": "Identify the modal: 'You ___ wear a helmet while riding a bike.'",
                "options": [
                    "can",
                    "may",
                    "must",
                    "might"
                ],
                "answer": 2
            },
            {
                "id": 9,
                "subject": "english",
                "topic": "Grammar",
                "difficulty": "hard",
                "text": "Subject-Verb Concord: 'Neither of the boys ___ done the homework.'",
                "options": [
                    "has",
                    "have",
                    "are",
                    "were"
                ],
                "answer": 0
            },
            {
                "id": 10,
                "subject": "english",
                "topic": "Grammar",
                "difficulty": "hard",
                "text": "What is the central theme of 'The Necklace'?",
                "options": [
                    "Greed leads to downfall",
                    "Honesty is the best policy",
                    "Love conquers all",
                    "Hard work pays off"
                ],
                "answer": 0
            },
            {
                "id": 11,
                "subject": "english",
                "topic": "Grammar",
                "difficulty": "hard",
                "text": "Who was Tricki in 'A Triumph of Surgery'?",
                "options": [
                    "A cat",
                    "A dog",
                    "A bird",
                    "A horse"
                ],
                "answer": 1
            },
            {
                "id": 12,
                "subject": "english",
                "topic": "Grammar",
                "difficulty": "hard",
                "text": "Change to passive voice: 'She writes a letter.'",
                "options": [
                    "A letter was written by her.",
                    "A letter is written by her.",
                    "A letter has been written by her.",
                    "A letter is being written by her."
                ],
                "answer": 1
            },
            {
                "id": 13,
                "subject": "english",
                "topic": "Grammar",
                "difficulty": "hard",
                "text": "Identify the poetic device: 'And saved some part of a day I had rued.'",
                "options": [
                    "Simile",
                    "Metaphor",
                    "Alliteration",
                    "Personification"
                ],
                "answer": 2
            },
            {
                "id": 14,
                "subject": "english",
                "topic": "Grammar",
                "difficulty": "hard",
                "text": "What did the postmaster do to help Lencho?",
                "options": [
                    "Ignored him",
                    "Laughed at him",
                    "Collected money for him",
                    "Tore the letter"
                ],
                "answer": 2
            },
            {
                "id": 15,
                "subject": "english",
                "topic": "Grammar",
                "difficulty": "hard",
                "text": "Fill in the blank: 'If it rains, we ___ stay indoors.'",
                "options": [
                    "would",
                    "will",
                    "could",
                    "might"
                ],
                "answer": 1
            },
            {
                "id": 16,
                "subject": "science",
                "topic": "Science",
                "difficulty": "hard",
                "text": "In the reaction CuO + H2 -> Cu + H2O, which substance is oxidized?",
                "options": [
                    "CuO",
                    "H2",
                    "Cu",
                    "H2O"
                ],
                "answer": 1
            },
            {
                "id": 17,
                "subject": "science",
                "topic": "Science",
                "difficulty": "hard",
                "text": "Which acid is present in ant sting?",
                "options": [
                    "Methanoic acid",
                    "Lactic acid",
                    "Citric acid",
                    "Oxalic acid"
                ],
                "answer": 0
            },
            {
                "id": 18,
                "subject": "science",
                "topic": "Science",
                "difficulty": "hard",
                "text": "What happens when dilute HCl is added to iron filings?",
                "options": [
                    "Hydrogen gas and iron chloride are produced.",
                    "Chlorine gas and iron hydroxide are produced.",
                    "No reaction takes place.",
                    "Iron salt and water are produced."
                ],
                "answer": 0
            },
            {
                "id": 19,
                "subject": "science",
                "topic": "Science",
                "difficulty": "hard",
                "text": "Which metal is liquid at room temperature?",
                "options": [
                    "Sodium",
                    "Mercury",
                    "Iron",
                    "Gold"
                ],
                "answer": 1
            },
            {
                "id": 20,
                "subject": "science",
                "topic": "Science",
                "difficulty": "hard",
                "text": "The functional group present in propanal is:",
                "options": [
                    "-OH",
                    "-COOH",
                    "-CHO",
                    "-CO-"
                ],
                "answer": 2
            },
            {
                "id": 21,
                "subject": "science",
                "topic": "Science",
                "difficulty": "hard",
                "text": "Which plant hormone promotes cell division?",
                "options": [
                    "Auxin",
                    "Gibberellin",
                    "Cytokinin",
                    "Abscisic acid"
                ],
                "answer": 2
            },
            {
                "id": 22,
                "subject": "science",
                "topic": "Science",
                "difficulty": "hard",
                "text": "In a human female, fertilization takes place in the:",
                "options": [
                    "Uterus",
                    "Ovary",
                    "Fallopian tube",
                    "Vagina"
                ],
                "answer": 2
            },
            {
                "id": 23,
                "subject": "science",
                "topic": "Science",
                "difficulty": "hard",
                "text": "The phenotypic ratio of a dihybrid cross in F2 generation is:",
                "options": [
                    "3:1",
                    "1:2:1",
                    "9:3:3:1",
                    "9:1"
                ],
                "answer": 2
            },
            {
                "id": 24,
                "subject": "science",
                "topic": "Science",
                "difficulty": "hard",
                "text": "A convex mirror used for rear-view on an automobile has a radius of curvature of 3.00 m. If a bus is located at 5.00 m from this mirror, find the position of the image.",
                "options": [
                    "+1.15 m",
                    "-1.15 m",
                    "+2.30 m",
                    "-2.30 m"
                ],
                "answer": 0
            },
            {
                "id": 25,
                "subject": "science",
                "topic": "Science",
                "difficulty": "hard",
                "text": "The absolute refractive index of water is:",
                "options": [
                    "1.50",
                    "1.33",
                    "2.42",
                    "1.00"
                ],
                "answer": 1
            },
            {
                "id": 26,
                "subject": "science",
                "topic": "Science",
                "difficulty": "hard",
                "text": "The focal length of a concave lens is 2m. Calculate its power.",
                "options": [
                    "+0.5 D",
                    "-0.5 D",
                    "+2.0 D",
                    "-2.0 D"
                ],
                "answer": 1
            },
            {
                "id": 27,
                "subject": "science",
                "topic": "Science",
                "difficulty": "hard",
                "text": "At the time of short circuit, the current in the circuit:",
                "options": [
                    "reduces substantially.",
                    "does not change.",
                    "increases heavily.",
                    "vary continuously."
                ],
                "answer": 2
            },
            {
                "id": 28,
                "subject": "science",
                "topic": "Science",
                "difficulty": "hard",
                "text": "The device used for producing electric current is called a:",
                "options": [
                    "Generator",
                    "Galvanometer",
                    "Ammeter",
                    "Motor"
                ],
                "answer": 0
            },
            {
                "id": 29,
                "subject": "science",
                "topic": "Science",
                "difficulty": "hard",
                "text": "Which of the following constitutes a food chain?",
                "options": [
                    "Grass, wheat and mango",
                    "Grass, goat and human",
                    "Goat, cow and elephant",
                    "Grass, fish and goat"
                ],
                "answer": 1
            },
            {
                "id": 30,
                "subject": "science",
                "topic": "Science",
                "difficulty": "hard",
                "text": "Ozone layer protects us from which harmful rays?",
                "options": [
                    "IR rays",
                    "UV rays",
                    "X-rays",
                    "Gamma rays"
                ],
                "answer": 1
            },
            {
                "id": 31,
                "subject": "sst",
                "topic": "History",
                "difficulty": "hard",
                "text": "When did the Jallianwala Bagh incident take place?",
                "options": [
                    "13 April 1919",
                    "15 August 1947",
                    "26 January 1950",
                    "10 May 1857"
                ],
                "answer": 0
            },
            {
                "id": 32,
                "subject": "sst",
                "topic": "History",
                "difficulty": "hard",
                "text": "Who wrote the book 'Hind Swaraj'?",
                "options": [
                    "Jawaharlal Nehru",
                    "Subhas Chandra Bose",
                    "Mahatma Gandhi",
                    "Bhagat Singh"
                ],
                "answer": 2
            },
            {
                "id": 33,
                "subject": "sst",
                "topic": "History",
                "difficulty": "hard",
                "text": "Which treaty recognized Greece as an independent nation?",
                "options": [
                    "Treaty of Vienna",
                    "Treaty of Versailles",
                    "Treaty of Constantinople",
                    "Treaty of Paris"
                ],
                "answer": 2
            },
            {
                "id": 34,
                "subject": "sst",
                "topic": "History",
                "difficulty": "hard",
                "text": "Black soil is also known as:",
                "options": [
                    "Bangar",
                    "Khadar",
                    "Regur soil",
                    "Laterite soil"
                ],
                "answer": 2
            },
            {
                "id": 35,
                "subject": "sst",
                "topic": "History",
                "difficulty": "hard",
                "text": "Which one of the following is a Rabi crop?",
                "options": [
                    "Rice",
                    "Gram",
                    "Millets",
                    "Cotton"
                ],
                "answer": 1
            },
            {
                "id": 36,
                "subject": "sst",
                "topic": "History",
                "difficulty": "hard",
                "text": "In which state is the Hirakud dam located?",
                "options": [
                    "Odisha",
                    "Gujarat",
                    "Punjab",
                    "Kerala"
                ],
                "answer": 0
            },
            {
                "id": 37,
                "subject": "sst",
                "topic": "History",
                "difficulty": "hard",
                "text": "Which industry uses limestone as a raw material?",
                "options": [
                    "Aluminum",
                    "Cement",
                    "Sugar",
                    "Jute"
                ],
                "answer": 1
            },
            {
                "id": 38,
                "subject": "sst",
                "topic": "History",
                "difficulty": "hard",
                "text": "The longest National Highway in India is:",
                "options": [
                    "NH-1",
                    "NH-44",
                    "NH-8",
                    "NH-2"
                ],
                "answer": 1
            },
            {
                "id": 39,
                "subject": "sst",
                "topic": "History",
                "difficulty": "hard",
                "text": "In Belgium, which language is spoken by the majority of the population?",
                "options": [
                    "French",
                    "Dutch",
                    "German",
                    "English"
                ],
                "answer": 1
            },
            {
                "id": 40,
                "subject": "sst",
                "topic": "History",
                "difficulty": "hard",
                "text": "What are the subjects included in the Concurrent List?",
                "options": [
                    "Defense, Foreign Affairs",
                    "Police, Trade",
                    "Education, Forest",
                    "Agriculture, Irrigation"
                ],
                "answer": 2
            },
            {
                "id": 41,
                "subject": "sst",
                "topic": "History",
                "difficulty": "hard",
                "text": "Which of the following is a National Political Party?",
                "options": [
                    "Aam Aadmi Party",
                    "Trinamool Congress",
                    "Bharatiya Janata Party",
                    "All of the above"
                ],
                "answer": 2
            },
            {
                "id": 42,
                "subject": "sst",
                "topic": "History",
                "difficulty": "hard",
                "text": "BMI stands for:",
                "options": [
                    "Body Mass Index",
                    "Body Muscle Index",
                    "Base Mass Index",
                    "Basic Metabolic Index"
                ],
                "answer": 0
            },
            {
                "id": 43,
                "subject": "sst",
                "topic": "History",
                "difficulty": "hard",
                "text": "Which sector is also called the service sector?",
                "options": [
                    "Primary",
                    "Secondary",
                    "Tertiary",
                    "Quaternary"
                ],
                "answer": 2
            },
            {
                "id": 44,
                "subject": "sst",
                "topic": "History",
                "difficulty": "hard",
                "text": "NREGA (National Rural Employment Guarantee Act) was enacted in:",
                "options": [
                    "2000",
                    "2005",
                    "2010",
                    "2014"
                ],
                "answer": 1
            },
            {
                "id": 45,
                "subject": "sst",
                "topic": "History",
                "difficulty": "hard",
                "text": "Who issues one-rupee notes in India?",
                "options": [
                    "Reserve Bank of India",
                    "State Bank of India",
                    "Ministry of Finance",
                    "President of India"
                ],
                "answer": 2
            },
            {
                "id": 46,
                "subject": "maths",
                "topic": "Algebra",
                "difficulty": "hard",
                "text": "If the HCF of 65 and 117 is expressible in the form 65m - 117, then the value of m is:",
                "options": [
                    "4",
                    "2",
                    "1",
                    "3"
                ],
                "answer": 1
            },
            {
                "id": 47,
                "subject": "maths",
                "topic": "Algebra",
                "difficulty": "hard",
                "text": "A quadratic polynomial, whose zeroes are -3 and 4, is:",
                "options": [
                    "x² - x + 12",
                    "x² + x + 12",
                    "x² - x - 12",
                    "x² + x - 12"
                ],
                "answer": 2
            },
            {
                "id": 48,
                "subject": "maths",
                "topic": "Algebra",
                "difficulty": "hard",
                "text": "The pair of equations x = 0 and x = -4 has:",
                "options": [
                    "A unique solution",
                    "Two solutions",
                    "Infinitely many solutions",
                    "No solution"
                ],
                "answer": 3
            },
            {
                "id": 49,
                "subject": "maths",
                "topic": "Algebra",
                "difficulty": "hard",
                "text": "Find the discriminant of the quadratic equation 2x² - 4x + 3 = 0.",
                "options": [
                    "-8",
                    "8",
                    "-16",
                    "16"
                ],
                "answer": 0
            },
            {
                "id": 50,
                "subject": "maths",
                "topic": "Algebra",
                "difficulty": "hard",
                "text": "The 10th term of the AP: 5, 8, 11, 14, ... is:",
                "options": [
                    "32",
                    "35",
                    "38",
                    "41"
                ],
                "answer": 0
            },
            {
                "id": 51,
                "subject": "maths",
                "topic": "Algebra",
                "difficulty": "hard",
                "text": "If the points A(x, 2), B(-3, -4) and C(7, -5) are collinear, then the value of x is:",
                "options": [
                    "-63",
                    "63",
                    "60",
                    "-60"
                ],
                "answer": 0
            },
            {
                "id": 52,
                "subject": "maths",
                "topic": "Algebra",
                "difficulty": "hard",
                "text": "If sin A = 3/4, calculate cos A.",
                "options": [
                    "√7/4",
                    "3/5",
                    "4/5",
                    "√7/3"
                ],
                "answer": 0
            },
            {
                "id": 53,
                "subject": "maths",
                "topic": "Algebra",
                "difficulty": "hard",
                "text": "If tan 2A = cot (A - 18°), where 2A is an acute angle, find the value of A.",
                "options": [
                    "36°",
                    "18°",
                    "54°",
                    "72°"
                ],
                "answer": 0
            },
            {
                "id": 54,
                "subject": "maths",
                "topic": "Algebra",
                "difficulty": "hard",
                "text": "The shadow of a tower is equal to its height. The angle of elevation of the sun is:",
                "options": [
                    "30°",
                    "45°",
                    "60°",
                    "90°"
                ],
                "answer": 1
            },
            {
                "id": 55,
                "subject": "maths",
                "topic": "Algebra",
                "difficulty": "hard",
                "text": "The length of the tangent from a point A at a distance 5 cm from the centre of the circle is 4 cm. Find the radius of the circle.",
                "options": [
                    "3 cm",
                    "4 cm",
                    "5 cm",
                    "6 cm"
                ],
                "answer": 0
            },
            {
                "id": 56,
                "subject": "maths",
                "topic": "Algebra",
                "difficulty": "hard",
                "text": "The area of a quadrant of a circle whose circumference is 22 cm is:",
                "options": [
                    "77/8 cm²",
                    "77/4 cm²",
                    "77/2 cm²",
                    "77 cm²"
                ],
                "answer": 0
            },
            {
                "id": 57,
                "subject": "maths",
                "topic": "Algebra",
                "difficulty": "hard",
                "text": "A metallic sphere of radius 4.2 cm is melted and recast into the shape of a cylinder of radius 6 cm. Find the height of the cylinder.",
                "options": [
                    "2.74 cm",
                    "3.14 cm",
                    "4.2 cm",
                    "6 cm"
                ],
                "answer": 0
            },
            {
                "id": 58,
                "subject": "maths",
                "topic": "Algebra",
                "difficulty": "hard",
                "text": "Find the mean of the first 5 prime numbers.",
                "options": [
                    "5.6",
                    "5.8",
                    "6.0",
                    "6.2"
                ],
                "answer": 0
            },
            {
                "id": 59,
                "subject": "maths",
                "topic": "Algebra",
                "difficulty": "hard",
                "text": "The empirical relationship between the three measures of central tendency is:",
                "options": [
                    "3 Median = Mode + 2 Mean",
                    "2 Median = Mode + 3 Mean",
                    "Mode = 3 Median - 2 Mean",
                    "Both 1 and 3"
                ],
                "answer": 3
            },
            {
                "id": 60,
                "subject": "maths",
                "topic": "Algebra",
                "difficulty": "hard",
                "text": "A die is thrown once. Find the probability of getting a prime number.",
                "options": [
                    "1/6",
                    "1/3",
                    "1/2",
                    "2/3"
                ],
                "answer": 2
            },
            {
                "id": 61,
                "subject": "it",
                "topic": "RDBMS",
                "difficulty": "hard",
                "text": "Which of the following is a DBMS software?",
                "options": [
                    "MS Word",
                    "MS Excel",
                    "MySQL",
                    "MS PowerPoint"
                ],
                "answer": 2
            },
            {
                "id": 62,
                "subject": "it",
                "topic": "RDBMS",
                "difficulty": "hard",
                "text": "In a database table, a row is also called a:",
                "options": [
                    "Field",
                    "Record",
                    "Column",
                    "File"
                ],
                "answer": 1
            },
            {
                "id": 63,
                "subject": "it",
                "topic": "RDBMS",
                "difficulty": "hard",
                "text": "Which key uniquely identifies a record in a table?",
                "options": [
                    "Foreign Key",
                    "Primary Key",
                    "Composite Key",
                    "Alternate Key"
                ],
                "answer": 1
            },
            {
                "id": 64,
                "subject": "it",
                "topic": "RDBMS",
                "difficulty": "hard",
                "text": "Which SQL command is used to retrieve data from a table?",
                "options": [
                    "UPDATE",
                    "INSERT",
                    "DELETE",
                    "SELECT"
                ],
                "answer": 3
            },
            {
                "id": 65,
                "subject": "it",
                "topic": "RDBMS",
                "difficulty": "hard",
                "text": "What does DDL stand for?",
                "options": [
                    "Data Definition Language",
                    "Data Manipulation Language",
                    "Data Description Language",
                    "Data Design Language"
                ],
                "answer": 0
            },
            {
                "id": 66,
                "subject": "it",
                "topic": "RDBMS",
                "difficulty": "hard",
                "text": "Which topology connects all nodes to a single central cable?",
                "options": [
                    "Star",
                    "Ring",
                    "Bus",
                    "Mesh"
                ],
                "answer": 2
            },
            {
                "id": 67,
                "subject": "it",
                "topic": "RDBMS",
                "difficulty": "hard",
                "text": "The default extension of a Writer document in OpenOffice is:",
                "options": [
                    ".docx",
                    ".odt",
                    ".ods",
                    ".odp"
                ],
                "answer": 1
            },
            {
                "id": 68,
                "subject": "it",
                "topic": "RDBMS",
                "difficulty": "hard",
                "text": "Which feature allows sending the same letter to multiple people?",
                "options": [
                    "Mail Merge",
                    "Macros",
                    "Templates",
                    "Styles"
                ],
                "answer": 0
            },
            {
                "id": 69,
                "subject": "it",
                "topic": "RDBMS",
                "difficulty": "hard",
                "text": "In Calc, absolute cell referencing is denoted by which symbol?",
                "options": [
                    "#",
                    "@",
                    "$",
                    "&"
                ],
                "answer": 2
            },
            {
                "id": 70,
                "subject": "it",
                "topic": "RDBMS",
                "difficulty": "hard",
                "text": "Which function in Calc calculates the sum of a range?",
                "options": [
                    "SUM()",
                    "ADD()",
                    "TOTAL()",
                    "COUNT()"
                ],
                "answer": 0
            },
            {
                "id": 71,
                "subject": "it",
                "topic": "RDBMS",
                "difficulty": "hard",
                "text": "A presentation can be viewed in which of the following modes?",
                "options": [
                    "Normal",
                    "Slide Sorter",
                    "Slide Show",
                    "All of the above"
                ],
                "answer": 3
            },
            {
                "id": 72,
                "subject": "it",
                "topic": "RDBMS",
                "difficulty": "hard",
                "text": "Which of the following is an ISP in India?",
                "options": [
                    "Google",
                    "Microsoft",
                    "BSNL",
                    "Apple"
                ],
                "answer": 2
            },
            {
                "id": 73,
                "subject": "it",
                "topic": "RDBMS",
                "difficulty": "hard",
                "text": "WWW is an acronym for:",
                "options": [
                    "World Wide Web",
                    "World Web Wide",
                    "Wide World Web",
                    "Web World Wide"
                ],
                "answer": 0
            },
            {
                "id": 74,
                "subject": "it",
                "topic": "RDBMS",
                "difficulty": "hard",
                "text": "Which tag is used to create a hyperlink in HTML?",
                "options": [
                    "<link>",
                    "<a>",
                    "<href>",
                    "<url>"
                ],
                "answer": 1
            },
            {
                "id": 75,
                "subject": "it",
                "topic": "RDBMS",
                "difficulty": "hard",
                "text": "CSS stands for:",
                "options": [
                    "Cascading Style Sheets",
                    "Computer Style Sheets",
                    "Creative Style Sheets",
                    "Colorful Style Sheets"
                ],
                "answer": 0
            },
            {
                "id": 76,
                "subject": "hindi",
                "topic": "Vyakaran",
                "difficulty": "hard",
                "text": "'रचना के आधार पर' वाक्य के कितने भेद होते हैं?",
                "options": [
                    "2",
                    "3",
                    "4",
                    "5"
                ],
                "answer": 1
            },
            {
                "id": 77,
                "subject": "hindi",
                "topic": "Vyakaran",
                "difficulty": "hard",
                "text": "'जो मेहनत करता है, वह सफल होता है।' यह कौन सा वाक्य है?",
                "options": [
                    "सरल वाक्य",
                    "संयुक्त वाक्य",
                    "मिश्र वाक्य",
                    "इनमें से कोई नहीं"
                ],
                "answer": 2
            },
            {
                "id": 78,
                "subject": "hindi",
                "topic": "Vyakaran",
                "difficulty": "hard",
                "text": "वाच्य के कितने प्रकार होते हैं?",
                "options": [
                    "2",
                    "3",
                    "4",
                    "5"
                ],
                "answer": 1
            },
            {
                "id": 79,
                "subject": "hindi",
                "topic": "Vyakaran",
                "difficulty": "hard",
                "text": "'राम के द्वारा पत्र लिखा जाता है।' यह कौन सा वाच्य है?",
                "options": [
                    "कर्तृवाच्य",
                    "कर्मवाच्य",
                    "भाववाच्य",
                    "सभी"
                ],
                "answer": 1
            },
            {
                "id": 80,
                "subject": "hindi",
                "topic": "Vyakaran",
                "difficulty": "hard",
                "text": "'वीर रस' का स्थायी भाव क्या है?",
                "options": [
                    "रति",
                    "शोक",
                    "उत्साह",
                    "क्रोध"
                ],
                "answer": 2
            },
            {
                "id": 81,
                "subject": "hindi",
                "topic": "Vyakaran",
                "difficulty": "hard",
                "text": "'सूरदास के पद' में गोपियाँ किससे व्यंग्य करती हैं?",
                "options": [
                    "कृष्ण",
                    "उद्धव",
                    "नंद",
                    "अक्रूर"
                ],
                "answer": 1
            },
            {
                "id": 82,
                "subject": "hindi",
                "topic": "Vyakaran",
                "difficulty": "hard",
                "text": "'नेताजी का चश्मा' कहानी के लेखक कौन हैं?",
                "options": [
                    "स्वयं प्रकाश",
                    "रामवृक्ष बेनीपुरी",
                    "यशपाल",
                    "मन्नू भंडारी"
                ],
                "answer": 0
            },
            {
                "id": 83,
                "subject": "hindi",
                "topic": "Vyakaran",
                "difficulty": "hard",
                "text": "बालगोबिन भगत क्या बजाते थे?",
                "options": [
                    "बांसुरी",
                    "खंजड़ी",
                    "ढोलक",
                    "मंजीरा"
                ],
                "answer": 1
            },
            {
                "id": 84,
                "subject": "hindi",
                "topic": "Vyakaran",
                "difficulty": "hard",
                "text": "'माता का अँचल' पाठ में लेखक का वास्तविक नाम क्या था?",
                "options": [
                    "तारकेश्वरनाथ",
                    "भोलानाथ",
                    "शिवपूजन सहाय",
                    "रामनाथ"
                ],
                "answer": 0
            },
            {
                "id": 85,
                "subject": "hindi",
                "topic": "Vyakaran",
                "difficulty": "hard",
                "text": "पद परिचय में संज्ञा के कितने भेद बताए जाते हैं?",
                "options": [
                    "3",
                    "4",
                    "5",
                    "6"
                ],
                "answer": 0
            },
            {
                "id": 86,
                "subject": "hindi",
                "topic": "Vyakaran",
                "difficulty": "hard",
                "text": "'धीरे-धीरे' शब्द व्याकरण की दृष्टि से क्या है?",
                "options": [
                    "संज्ञा",
                    "सर्वनाम",
                    "विशेषण",
                    "क्रियाविशेषण"
                ],
                "answer": 3
            },
            {
                "id": 87,
                "subject": "hindi",
                "topic": "Vyakaran",
                "difficulty": "hard",
                "text": "'उत्साह' कविता के कवि कौन हैं?",
                "options": [
                    "सूरदास",
                    "तुलसीदास",
                    "सूर्यकांत त्रिपाठी निराला",
                    "जयशंकर प्रसाद"
                ],
                "answer": 2
            },
            {
                "id": 88,
                "subject": "hindi",
                "topic": "Vyakaran",
                "difficulty": "hard",
                "text": "'लखनवी अंदाज़' पाठ में नवाब साहब ने क्या खाया?",
                "options": [
                    "आम",
                    "सेब",
                    "खीरा",
                    "अंगूर"
                ],
                "answer": 2
            },
            {
                "id": 89,
                "subject": "hindi",
                "topic": "Vyakaran",
                "difficulty": "hard",
                "text": "'राम-लक्ष्मण-परशुराम संवाद' किस ग्रंथ से लिया गया है?",
                "options": [
                    "महाभारत",
                    "रामचरितमानस",
                    "रामायण",
                    "गीता"
                ],
                "answer": 1
            },
            {
                "id": 90,
                "subject": "hindi",
                "topic": "Vyakaran",
                "difficulty": "hard",
                "text": "'कन्यादान' कविता में माँ अपनी बेटी को क्या सीख देती है?",
                "options": [
                    "कमज़ोर मत बनना",
                    "रोने-धोने की आदत छोड़ना",
                    "अपने सौंदर्य पर मुग्ध न होना",
                    "उपर्युक्त सभी"
                ],
                "answer": 2
            },
            {
                "id": 91,
                "subject": "sanskrit",
                "topic": "Vyakaran",
                "difficulty": "hard",
                "text": "'तथापि' इत्यस्य सन्धिविच्छेदः किम्?",
                "options": [
                    "तथा + पि",
                    "तथा + अपि",
                    "तत् + अपि",
                    "तथ् + अपि"
                ],
                "answer": 1
            },
            {
                "id": 92,
                "subject": "sanskrit",
                "topic": "Vyakaran",
                "difficulty": "hard",
                "text": "'पीताम्बरः' इत्यत्र कः समासः?",
                "options": [
                    "तत्पुरुषः",
                    "कर्मधारयः",
                    "बहुव्रीहिः",
                    "द्वन्द्वः"
                ],
                "answer": 2
            },
            {
                "id": 93,
                "subject": "sanskrit",
                "topic": "Vyakaran",
                "difficulty": "hard",
                "text": "'पठित्वा' इत्यत्र कः प्रत्ययः?",
                "options": [
                    "क्त्वा",
                    "ल्यप्",
                    "तुमुन्",
                    "शतृ"
                ],
                "answer": 0
            },
            {
                "id": 94,
                "subject": "sanskrit",
                "topic": "Vyakaran",
                "difficulty": "hard",
                "text": "'गन्तुम्' इत्यत्र कः प्रत्ययः?",
                "options": [
                    "क्त्वा",
                    "ल्यप्",
                    "तुमुन्",
                    "शानच्"
                ],
                "answer": 2
            },
            {
                "id": 95,
                "subject": "sanskrit",
                "topic": "Vyakaran",
                "difficulty": "hard",
                "text": "'अहं गृहं गच्छामि।' अस्य कर्मवाच्यं किम्?",
                "options": [
                    "मया गृहं गम्यते।",
                    "अहं गृहं गम्यते।",
                    "मया गृहं गच्छामि।",
                    "अहं गृहं गच्छामि।"
                ],
                "answer": 0
            },
            {
                "id": 96,
                "subject": "sanskrit",
                "topic": "Vyakaran",
                "difficulty": "hard",
                "text": "'रामः रावणं हतवान्।' इत्यत्र 'हतवान्' पदे कः प्रत्ययः?",
                "options": [
                    "क्तवतु",
                    "क्त",
                    "शतृ",
                    "शानच्"
                ],
                "answer": 0
            },
            {
                "id": 97,
                "subject": "sanskrit",
                "topic": "Vyakaran",
                "difficulty": "hard",
                "text": "'यथाशक्ति' इत्यत्र कः समासः?",
                "options": [
                    "अव्ययीभावः",
                    "तत्पुरुषः",
                    "द्वन्द्वः",
                    "बहुव्रीहिः"
                ],
                "answer": 0
            },
            {
                "id": 98,
                "subject": "sanskrit",
                "topic": "Vyakaran",
                "difficulty": "hard",
                "text": "'इत्यादि' इत्यस्य सन्धिविच्छेदः किम्?",
                "options": [
                    "इति + आदि",
                    "इत्य + आदि",
                    "इति + अदि",
                    "इत्या + दि"
                ],
                "answer": 0
            },
            {
                "id": 99,
                "subject": "sanskrit",
                "topic": "Vyakaran",
                "difficulty": "hard",
                "text": "'सर्वदा' इति किम् अव्ययम्?",
                "options": [
                    "कालवाचकम्",
                    "स्थानवाचकम्",
                    "रीतिवाचकम्",
                    "प्रश्नवाचकम्"
                ],
                "answer": 0
            },
            {
                "id": 100,
                "subject": "sanskrit",
                "topic": "Vyakaran",
                "difficulty": "hard",
                "text": "'सः पुस्तकं पठति।' इत्यत्र 'सः' किम् अस्ति?",
                "options": [
                    "संज्ञा",
                    "सर्वनाम",
                    "विशेषणम्",
                    "क्रिया"
                ],
                "answer": 1
            },
            {
                "id": 101,
                "subject": "sanskrit",
                "topic": "Vyakaran",
                "difficulty": "hard",
                "text": "'सुन्दरः बालकः' इत्यत्र विशेष्यं किम्?",
                "options": [
                    "सुन्दरः",
                    "बालकः",
                    "उभौ",
                    "कोऽपि न"
                ],
                "answer": 1
            },
            {
                "id": 102,
                "subject": "sanskrit",
                "topic": "Vyakaran",
                "difficulty": "hard",
                "text": "'लभते' इति कस्य पदस्य रूपम्?",
                "options": [
                    "परस्मैपदस्य",
                    "आत्मनेपदस्य",
                    "उभयपदस्य",
                    "कोऽपि न"
                ],
                "answer": 1
            },
            {
                "id": 103,
                "subject": "sanskrit",
                "topic": "Vyakaran",
                "difficulty": "hard",
                "text": "'भविष्यति' इति कः लकारः?",
                "options": [
                    "लट्",
                    "लृट्",
                    "लङ्",
                    "लोट्"
                ],
                "answer": 1
            },
            {
                "id": 104,
                "subject": "sanskrit",
                "topic": "Vyakaran",
                "difficulty": "hard",
                "text": "'पित्रा' इति पितृ-शब्दस्य का विभक्तिः?",
                "options": [
                    "प्रथमा",
                    "द्वितीया",
                    "तृतीया",
                    "चतुर्थी"
                ],
                "answer": 2
            },
            {
                "id": 105,
                "subject": "sanskrit",
                "topic": "Vyakaran",
                "difficulty": "hard",
                "text": "'बुद्धिर्बलवती सदा' इति पाठः कस्मात् ग्रन्थात् सङ्कलितः?",
                "options": [
                    "पञ्चतन्त्रात्",
                    "हितोपदेशात्",
                    "शुकसप्ततेः",
                    "रामायणात्"
                ],
                "answer": 2
            },
            {
                "id": 106,
                "subject": "sanskrit_comm",
                "topic": "Vyakaran",
                "difficulty": "hard",
                "text": "'तथापि' इत्यस्य सन्धिविच्छेदः किम्?",
                "options": [
                    "तथा + पि",
                    "तथा + अपि",
                    "तत् + अपि",
                    "तथ् + अपि"
                ],
                "answer": 1
            },
            {
                "id": 107,
                "subject": "sanskrit_comm",
                "topic": "Vyakaran",
                "difficulty": "hard",
                "text": "'पीताम्बरः' इत्यत्र कः समासः?",
                "options": [
                    "तत्पुरुषः",
                    "कर्मधारयः",
                    "बहुव्रीहिः",
                    "द्वन्द्वः"
                ],
                "answer": 2
            },
            {
                "id": 108,
                "subject": "sanskrit_comm",
                "topic": "Vyakaran",
                "difficulty": "hard",
                "text": "'पठित्वा' इत्यत्र कः प्रत्ययः?",
                "options": [
                    "क्त्वा",
                    "ल्यप्",
                    "तुमुन्",
                    "शतृ"
                ],
                "answer": 0
            },
            {
                "id": 109,
                "subject": "sanskrit_comm",
                "topic": "Vyakaran",
                "difficulty": "hard",
                "text": "'गन्तुम्' इत्यत्र कः प्रत्ययः?",
                "options": [
                    "क्त्वा",
                    "ल्यप्",
                    "तुमुन्",
                    "शानच्"
                ],
                "answer": 2
            },
            {
                "id": 110,
                "subject": "sanskrit_comm",
                "topic": "Vyakaran",
                "difficulty": "hard",
                "text": "'अहं गृहं गच्छामि।' अस्य कर्मवाच्यं किम्?",
                "options": [
                    "मया गृहं गम्यते।",
                    "अहं गृहं गम्यते।",
                    "मया गृहं गच्छामि।",
                    "अहं गृहं गच्छामि।"
                ],
                "answer": 0
            },
            {
                "id": 111,
                "subject": "sanskrit_comm",
                "topic": "Vyakaran",
                "difficulty": "hard",
                "text": "'रामः रावणं हतवान्।' इत्यत्र 'हतवान्' पदे कः प्रत्ययः?",
                "options": [
                    "क्तवतु",
                    "क्त",
                    "शतृ",
                    "शानच्"
                ],
                "answer": 0
            },
            {
                "id": 112,
                "subject": "sanskrit_comm",
                "topic": "Vyakaran",
                "difficulty": "hard",
                "text": "'यथाशक्ति' इत्यत्र कः समासः?",
                "options": [
                    "अव्ययीभावः",
                    "तत्पुरुषः",
                    "द्वन्द्वः",
                    "बहुव्रीहिः"
                ],
                "answer": 0
            },
            {
                "id": 113,
                "subject": "sanskrit_comm",
                "topic": "Vyakaran",
                "difficulty": "hard",
                "text": "'इत्यादि' इत्यस्य सन्धिविच्छेदः किम्?",
                "options": [
                    "इति + आदि",
                    "इत्य + आदि",
                    "इति + अदि",
                    "इत्या + दि"
                ],
                "answer": 0
            },
            {
                "id": 114,
                "subject": "sanskrit_comm",
                "topic": "Vyakaran",
                "difficulty": "hard",
                "text": "'सर्वदा' इति किम् अव्ययम्?",
                "options": [
                    "कालवाचकम्",
                    "स्थानवाचकम्",
                    "रीतिवाचकम्",
                    "प्रश्नवाचकम्"
                ],
                "answer": 0
            },
            {
                "id": 115,
                "subject": "sanskrit_comm",
                "topic": "Vyakaran",
                "difficulty": "hard",
                "text": "'सः पुस्तकं पठति।' इत्यत्र 'सः' किम् अस्ति?",
                "options": [
                    "संज्ञा",
                    "सर्वनाम",
                    "विशेषणम्",
                    "क्रिया"
                ],
                "answer": 1
            },
            {
                "id": 116,
                "subject": "sanskrit_comm",
                "topic": "Vyakaran",
                "difficulty": "hard",
                "text": "'सुन्दरः बालकः' इत्यत्र विशेष्यं किम्?",
                "options": [
                    "सुन्दरः",
                    "बालकः",
                    "उभौ",
                    "कोऽपि न"
                ],
                "answer": 1
            },
            {
                "id": 117,
                "subject": "sanskrit_comm",
                "topic": "Vyakaran",
                "difficulty": "hard",
                "text": "'लभते' इति कस्य पदस्य रूपम्?",
                "options": [
                    "परस्मैपदस्य",
                    "आत्मनेपदस्य",
                    "उभयपदस्य",
                    "कोऽपि न"
                ],
                "answer": 1
            },
            {
                "id": 118,
                "subject": "sanskrit_comm",
                "topic": "Vyakaran",
                "difficulty": "hard",
                "text": "'भविष्यति' इति कः लकारः?",
                "options": [
                    "लट्",
                    "लृट्",
                    "लङ्",
                    "लोट्"
                ],
                "answer": 1
            },
            {
                "id": 119,
                "subject": "sanskrit_comm",
                "topic": "Vyakaran",
                "difficulty": "hard",
                "text": "'पित्रा' इति पितृ-शब्दस्य का विभक्तिः?",
                "options": [
                    "प्रथमा",
                    "द्वितीया",
                    "तृतीया",
                    "चतुर्थी"
                ],
                "answer": 2
            },
            {
                "id": 120,
                "subject": "sanskrit_comm",
                "topic": "Vyakaran",
                "difficulty": "hard",
                "text": "'बुद्धिर्बलवती सदा' इति पाठः कस्मात् ग्रन्थात् सङ्कलितः?",
                "options": [
                    "पञ्चतन्त्रात्",
                    "हितोपदेशात्",
                    "शुकसप्ततेः",
                    "रामायणात्"
                ],
                "answer": 2
            }
        ],
        "jee": [
            {
                "id": 121,
                "subject": "physics",
                "topic": "Physics",
                "difficulty": "hard",
                "text": "Dimensional formula of force is:",
                "options": [
                    "MLT^-2",
                    "ML^2T^-2",
                    "MLT^-1",
                    "M^2LT^-2"
                ],
                "answer": 0
            },
            {
                "id": 122,
                "subject": "physics",
                "topic": "Physics",
                "difficulty": "hard",
                "text": "Which is a conservative force?",
                "options": [
                    "Friction",
                    "Air resistance",
                    "Gravitational force",
                    "Viscous drag"
                ],
                "answer": 2
            },
            {
                "id": 123,
                "subject": "physics",
                "topic": "Physics",
                "difficulty": "hard",
                "text": "Escape velocity from Earth is approx:",
                "options": [
                    "11.2 km/s",
                    "11.2 m/s",
                    "8 km/s",
                    "3x10^8 m/s"
                ],
                "answer": 0
            },
            {
                "id": 124,
                "subject": "physics",
                "topic": "Physics",
                "difficulty": "hard",
                "text": "Work done by centripetal force is:",
                "options": [
                    "Positive",
                    "Negative",
                    "Zero",
                    "Depends on radius"
                ],
                "answer": 2
            },
            {
                "id": 125,
                "subject": "physics",
                "topic": "Physics",
                "difficulty": "hard",
                "text": "Equation of continuity represents conservation of:",
                "options": [
                    "Mass",
                    "Energy",
                    "Momentum",
                    "Charge"
                ],
                "answer": 0
            },
            {
                "id": 126,
                "subject": "physics",
                "topic": "Physics",
                "difficulty": "hard",
                "text": "Bernoulli's principle is based on conservation of:",
                "options": [
                    "Mass",
                    "Energy",
                    "Momentum",
                    "Angular momentum"
                ],
                "answer": 1
            },
            {
                "id": 127,
                "subject": "physics",
                "topic": "Physics",
                "difficulty": "hard",
                "text": "First law of thermodynamics is related to conservation of:",
                "options": [
                    "Energy",
                    "Heat",
                    "Temperature",
                    "Work"
                ],
                "answer": 0
            },
            {
                "id": 128,
                "subject": "physics",
                "topic": "Physics",
                "difficulty": "hard",
                "text": "Unit of magnetic flux is:",
                "options": [
                    "Tesla",
                    "Weber",
                    "Henry",
                    "Farad"
                ],
                "answer": 1
            },
            {
                "id": 129,
                "subject": "physics",
                "topic": "Physics",
                "difficulty": "hard",
                "text": "Lenz's law is a consequence of conservation of:",
                "options": [
                    "Charge",
                    "Mass",
                    "Energy",
                    "Momentum"
                ],
                "answer": 2
            },
            {
                "id": 130,
                "subject": "physics",
                "topic": "Physics",
                "difficulty": "hard",
                "text": "Speed of sound is maximum in:",
                "options": [
                    "Vacuum",
                    "Air",
                    "Water",
                    "Steel"
                ],
                "answer": 3
            },
            {
                "id": 131,
                "subject": "physics",
                "topic": "Physics",
                "difficulty": "hard",
                "text": "De Broglie wavelength formula is:",
                "options": [
                    "h/p",
                    "p/h",
                    "h/E",
                    "E/h"
                ],
                "answer": 0
            },
            {
                "id": 132,
                "subject": "physics",
                "topic": "Physics",
                "difficulty": "hard",
                "text": "Half-life formula is:",
                "options": [
                    "0.693/λ",
                    "λ/0.693",
                    "1/λ",
                    "ln(2)*λ"
                ],
                "answer": 0
            },
            {
                "id": 133,
                "subject": "physics",
                "topic": "Physics",
                "difficulty": "hard",
                "text": "Logic gate that acts as an inverter is:",
                "options": [
                    "AND",
                    "OR",
                    "NOT",
                    "NAND"
                ],
                "answer": 2
            },
            {
                "id": 134,
                "subject": "physics",
                "topic": "Physics",
                "difficulty": "hard",
                "text": "Energy of a photon is given by:",
                "options": [
                    "hc/λ",
                    "hλ/c",
                    "c/hλ",
                    "λ/hc"
                ],
                "answer": 0
            },
            {
                "id": 135,
                "subject": "physics",
                "topic": "Physics",
                "difficulty": "hard",
                "text": "Young's double slit experiment demonstrates:",
                "options": [
                    "Polarization",
                    "Diffraction",
                    "Interference",
                    "Reflection"
                ],
                "answer": 2
            },
            {
                "id": 136,
                "subject": "chemistry",
                "topic": "Chemistry",
                "difficulty": "hard",
                "text": "Hybridization of Carbon in Methane (CH4) is:",
                "options": [
                    "sp",
                    "sp2",
                    "sp3",
                    "sp3d"
                ],
                "answer": 2
            },
            {
                "id": 137,
                "subject": "chemistry",
                "topic": "Chemistry",
                "difficulty": "hard",
                "text": "Which of the following is an electrophile?",
                "options": [
                    "NH3",
                    "H2O",
                    "BF3",
                    "Cl-"
                ],
                "answer": 2
            },
            {
                "id": 138,
                "subject": "chemistry",
                "topic": "Chemistry",
                "difficulty": "hard",
                "text": "Oxidation state of Oxygen in H2O2 is:",
                "options": [
                    "-2",
                    "-1",
                    "+1",
                    "+2"
                ],
                "answer": 1
            },
            {
                "id": 139,
                "subject": "chemistry",
                "topic": "Chemistry",
                "difficulty": "hard",
                "text": "Ideal gas equation is:",
                "options": [
                    "PV=nRT",
                    "P/V=nRT",
                    "PT=nRV",
                    "V/T=nR"
                ],
                "answer": 0
            },
            {
                "id": 140,
                "subject": "chemistry",
                "topic": "Chemistry",
                "difficulty": "hard",
                "text": "Highest electronegative element is:",
                "options": [
                    "O",
                    "N",
                    "F",
                    "Cl"
                ],
                "answer": 2
            },
            {
                "id": 141,
                "subject": "chemistry",
                "topic": "Chemistry",
                "difficulty": "hard",
                "text": "Geometry of SF6 is:",
                "options": [
                    "Tetrahedral",
                    "Octahedral",
                    "Square Planar",
                    "Trigonal Bipyramidal"
                ],
                "answer": 1
            },
            {
                "id": 142,
                "subject": "chemistry",
                "topic": "Chemistry",
                "difficulty": "hard",
                "text": "Which law states that at constant temp, P is inversely proportional to V?",
                "options": [
                    "Charle's Law",
                    "Boyle's Law",
                    "Avogadro's Law",
                    "Gay-Lussac's Law"
                ],
                "answer": 1
            },
            {
                "id": 143,
                "subject": "chemistry",
                "topic": "Chemistry",
                "difficulty": "hard",
                "text": "Haber process is used for manufacturing:",
                "options": [
                    "H2SO4",
                    "HNO3",
                    "NH3",
                    "HCl"
                ],
                "answer": 2
            },
            {
                "id": 144,
                "subject": "chemistry",
                "topic": "Chemistry",
                "difficulty": "hard",
                "text": "What is the pH of a 10^-8 M HCl solution at 298K?",
                "options": [
                    "8",
                    "7.02",
                    "6.98",
                    "6"
                ],
                "answer": 2
            },
            {
                "id": 145,
                "subject": "chemistry",
                "topic": "Chemistry",
                "difficulty": "hard",
                "text": "Which metal is extracted using the Hall-Heroult process?",
                "options": [
                    "Fe",
                    "Cu",
                    "Al",
                    "Zn"
                ],
                "answer": 2
            },
            {
                "id": 146,
                "subject": "chemistry",
                "topic": "Chemistry",
                "difficulty": "hard",
                "text": "The monomer of Teflon is:",
                "options": [
                    "Ethene",
                    "Chloroethene",
                    "Tetrafluoroethene",
                    "Propene"
                ],
                "answer": 2
            },
            {
                "id": 147,
                "subject": "chemistry",
                "topic": "Chemistry",
                "difficulty": "hard",
                "text": "Vitamin C is also known as:",
                "options": [
                    "Ascorbic acid",
                    "Citric acid",
                    "Retinol",
                    "Thiamine"
                ],
                "answer": 0
            },
            {
                "id": 148,
                "subject": "chemistry",
                "topic": "Chemistry",
                "difficulty": "hard",
                "text": "Reaction of an acid and base is called:",
                "options": [
                    "Redox",
                    "Neutralization",
                    "Addition",
                    "Elimination"
                ],
                "answer": 1
            },
            {
                "id": 149,
                "subject": "chemistry",
                "topic": "Chemistry",
                "difficulty": "hard",
                "text": "Which isomerism is shown by lactic acid?",
                "options": [
                    "Geometrical",
                    "Optical",
                    "Structural",
                    "Tautomerism"
                ],
                "answer": 1
            },
            {
                "id": 150,
                "subject": "chemistry",
                "topic": "Chemistry",
                "difficulty": "hard",
                "text": "Most abundant element in earth's crust is:",
                "options": [
                    "Fe",
                    "Al",
                    "O",
                    "Si"
                ],
                "answer": 2
            },
            {
                "id": 151,
                "subject": "maths",
                "topic": "Maths",
                "difficulty": "hard",
                "text": "Derivative of sin(x) is:",
                "options": [
                    "cos(x)",
                    "-cos(x)",
                    "tan(x)",
                    "-sin(x)"
                ],
                "answer": 0
            },
            {
                "id": 152,
                "subject": "maths",
                "topic": "Maths",
                "difficulty": "hard",
                "text": "Integral of 1/x dx is:",
                "options": [
                    "ln|x|",
                    "x^2",
                    "-1/x^2",
                    "e^x"
                ],
                "answer": 0
            },
            {
                "id": 153,
                "subject": "maths",
                "topic": "Maths",
                "difficulty": "hard",
                "text": "Value of limit(x->0) sin(x)/x is:",
                "options": [
                    "0",
                    "1",
                    "Infinity",
                    "-1"
                ],
                "answer": 1
            },
            {
                "id": 154,
                "subject": "maths",
                "topic": "Maths",
                "difficulty": "hard",
                "text": "A matrix A is symmetric if:",
                "options": [
                    "A = -A^T",
                    "A = A^T",
                    "A = I",
                    "A = 0"
                ],
                "answer": 1
            },
            {
                "id": 155,
                "subject": "maths",
                "topic": "Maths",
                "difficulty": "hard",
                "text": "Roots of x^2 + 1 = 0 are:",
                "options": [
                    "1, -1",
                    "i, -i",
                    "0, 1",
                    "No roots"
                ],
                "answer": 1
            },
            {
                "id": 156,
                "subject": "maths",
                "topic": "Maths",
                "difficulty": "hard",
                "text": "Distance between (0,0) and (3,4) is:",
                "options": [
                    "3",
                    "4",
                    "5",
                    "7"
                ],
                "answer": 2
            },
            {
                "id": 157,
                "subject": "maths",
                "topic": "Maths",
                "difficulty": "hard",
                "text": "Number of ways to arrange 3 objects:",
                "options": [
                    "3",
                    "6",
                    "9",
                    "1"
                ],
                "answer": 1
            },
            {
                "id": 158,
                "subject": "maths",
                "topic": "Maths",
                "difficulty": "hard",
                "text": "Probability of getting a head on a fair coin toss:",
                "options": [
                    "0",
                    "1",
                    "0.5",
                    "0.25"
                ],
                "answer": 2
            },
            {
                "id": 159,
                "subject": "maths",
                "topic": "Maths",
                "difficulty": "hard",
                "text": "If f(x) = x^3, then f'(2) is:",
                "options": [
                    "12",
                    "8",
                    "4",
                    "6"
                ],
                "answer": 0
            },
            {
                "id": 160,
                "subject": "maths",
                "topic": "Maths",
                "difficulty": "hard",
                "text": "Equation of a line passing through origin with slope m is:",
                "options": [
                    "y = mx + c",
                    "y = mx",
                    "x = my",
                    "y = c"
                ],
                "answer": 1
            },
            {
                "id": 161,
                "subject": "maths",
                "topic": "Maths",
                "difficulty": "hard",
                "text": "Sum of an infinite GP with |r| < 1 is:",
                "options": [
                    "a/(1-r)",
                    "a/(r-1)",
                    "a*r",
                    "Infinity"
                ],
                "answer": 0
            },
            {
                "id": 162,
                "subject": "maths",
                "topic": "Maths",
                "difficulty": "hard",
                "text": "Value of log_10(100) is:",
                "options": [
                    "1",
                    "2",
                    "10",
                    "100"
                ],
                "answer": 1
            },
            {
                "id": 163,
                "subject": "maths",
                "topic": "Maths",
                "difficulty": "hard",
                "text": "Area under curve y=x from x=0 to 2 is:",
                "options": [
                    "2",
                    "4",
                    "1",
                    "0"
                ],
                "answer": 0
            },
            {
                "id": 164,
                "subject": "maths",
                "topic": "Maths",
                "difficulty": "hard",
                "text": "i^2 is equal to:",
                "options": [
                    "1",
                    "-1",
                    "i",
                    "-i"
                ],
                "answer": 1
            },
            {
                "id": 165,
                "subject": "maths",
                "topic": "Maths",
                "difficulty": "hard",
                "text": "Dot product of orthogonal vectors is:",
                "options": [
                    "1",
                    "-1",
                    "0",
                    "Infinity"
                ],
                "answer": 2
            }
        ],
        "neet": [
            {
                "id": 166,
                "subject": "physics",
                "topic": "Physics",
                "difficulty": "hard",
                "text": "Unit of capacitance is:",
                "options": [
                    "Farad",
                    "Henry",
                    "Ohm",
                    "Weber"
                ],
                "answer": 0
            },
            {
                "id": 167,
                "subject": "physics",
                "topic": "Physics",
                "difficulty": "hard",
                "text": "Acceleration due to gravity on earth surface:",
                "options": [
                    "9.8 m/s^2",
                    "9.8 cm/s^2",
                    "10 km/s^2",
                    "0"
                ],
                "answer": 0
            },
            {
                "id": 168,
                "subject": "physics",
                "topic": "Physics",
                "difficulty": "hard",
                "text": "Which has maximum frequency?",
                "options": [
                    "Radio waves",
                    "Microwaves",
                    "X-rays",
                    "Gamma rays"
                ],
                "answer": 3
            },
            {
                "id": 169,
                "subject": "physics",
                "topic": "Physics",
                "difficulty": "hard",
                "text": "Ohm's law is:",
                "options": [
                    "V=IR",
                    "V=I/R",
                    "I=VR",
                    "R=VI"
                ],
                "answer": 0
            },
            {
                "id": 170,
                "subject": "physics",
                "topic": "Physics",
                "difficulty": "hard",
                "text": "Loudness of sound depends on:",
                "options": [
                    "Frequency",
                    "Amplitude",
                    "Wavelength",
                    "Velocity"
                ],
                "answer": 1
            },
            {
                "id": 171,
                "subject": "physics",
                "topic": "Physics",
                "difficulty": "hard",
                "text": "Device used to step up/down AC voltage:",
                "options": [
                    "Rectifier",
                    "Amplifier",
                    "Transformer",
                    "Oscillator"
                ],
                "answer": 2
            },
            {
                "id": 172,
                "subject": "physics",
                "topic": "Physics",
                "difficulty": "hard",
                "text": "Energy equivalent of 1 amu is:",
                "options": [
                    "931.5 MeV",
                    "9.31 MeV",
                    "1 MeV",
                    "93.1 MeV"
                ],
                "answer": 0
            },
            {
                "id": 173,
                "subject": "physics",
                "topic": "Physics",
                "difficulty": "hard",
                "text": "Total internal reflection occurs when light goes from:",
                "options": [
                    "Rarer to denser",
                    "Denser to rarer",
                    "Vacuum to air",
                    "Air to water"
                ],
                "answer": 1
            },
            {
                "id": 174,
                "subject": "physics",
                "topic": "Physics",
                "difficulty": "hard",
                "text": "Critical angle for diamond is approx:",
                "options": [
                    "24°",
                    "42°",
                    "90°",
                    "12°"
                ],
                "answer": 0
            },
            {
                "id": 175,
                "subject": "physics",
                "topic": "Physics",
                "difficulty": "hard",
                "text": "Isotopes have same:",
                "options": [
                    "Mass number",
                    "Neutrons",
                    "Protons",
                    "Nucleons"
                ],
                "answer": 2
            },
            {
                "id": 176,
                "subject": "physics",
                "topic": "Physics",
                "difficulty": "hard",
                "text": "Alpha particle is nucleus of:",
                "options": [
                    "Hydrogen",
                    "Helium",
                    "Lithium",
                    "Beryllium"
                ],
                "answer": 1
            },
            {
                "id": 177,
                "subject": "physics",
                "topic": "Physics",
                "difficulty": "hard",
                "text": "Force between two point charges is given by:",
                "options": [
                    "Newton's Law",
                    "Coulomb's Law",
                    "Faraday's Law",
                    "Ampere's Law"
                ],
                "answer": 1
            },
            {
                "id": 178,
                "subject": "physics",
                "topic": "Physics",
                "difficulty": "hard",
                "text": "Electric field inside a hollow conducting sphere is:",
                "options": [
                    "Zero",
                    "Infinite",
                    "Constant",
                    "Varies with r"
                ],
                "answer": 0
            },
            {
                "id": 179,
                "subject": "physics",
                "topic": "Physics",
                "difficulty": "hard",
                "text": "SI unit of magnetic field is:",
                "options": [
                    "Tesla",
                    "Gauss",
                    "Weber",
                    "Henry"
                ],
                "answer": 0
            },
            {
                "id": 180,
                "subject": "physics",
                "topic": "Physics",
                "difficulty": "hard",
                "text": "Velocity of electromagnetic waves in vacuum is:",
                "options": [
                    "c",
                    "c/2",
                    "c/n",
                    "depends on frequency"
                ],
                "answer": 0
            },
            {
                "id": 181,
                "subject": "chemistry",
                "topic": "Chemistry",
                "difficulty": "hard",
                "text": "Which is the strongest acid?",
                "options": [
                    "HCl",
                    "HBr",
                    "HI",
                    "HF"
                ],
                "answer": 2
            },
            {
                "id": 182,
                "subject": "chemistry",
                "topic": "Chemistry",
                "difficulty": "hard",
                "text": "Oxidation state of Mn in KMnO4 is:",
                "options": [
                    "+7",
                    "+6",
                    "+5",
                    "+4"
                ],
                "answer": 0
            },
            {
                "id": 183,
                "subject": "chemistry",
                "topic": "Chemistry",
                "difficulty": "hard",
                "text": "Process of coating iron with zinc is:",
                "options": [
                    "Galvanization",
                    "Rusting",
                    "Alloying",
                    "Smelting"
                ],
                "answer": 0
            },
            {
                "id": 184,
                "subject": "chemistry",
                "topic": "Chemistry",
                "difficulty": "hard",
                "text": "Baking soda is:",
                "options": [
                    "Na2CO3",
                    "NaHCO3",
                    "NaOH",
                    "NaCl"
                ],
                "answer": 1
            },
            {
                "id": 185,
                "subject": "chemistry",
                "topic": "Chemistry",
                "difficulty": "hard",
                "text": "Catenation property is maximum in:",
                "options": [
                    "Si",
                    "S",
                    "C",
                    "P"
                ],
                "answer": 2
            },
            {
                "id": 186,
                "subject": "chemistry",
                "topic": "Chemistry",
                "difficulty": "hard",
                "text": "General formula of alkanes:",
                "options": [
                    "CnH2n",
                    "CnH2n+2",
                    "CnH2n-2",
                    "CnHn"
                ],
                "answer": 1
            },
            {
                "id": 187,
                "subject": "chemistry",
                "topic": "Chemistry",
                "difficulty": "hard",
                "text": "Which block does transition elements belong to?",
                "options": [
                    "s-block",
                    "p-block",
                    "d-block",
                    "f-block"
                ],
                "answer": 2
            },
            {
                "id": 188,
                "subject": "chemistry",
                "topic": "Chemistry",
                "difficulty": "hard",
                "text": "Noble gas used in advertising signs:",
                "options": [
                    "He",
                    "Ne",
                    "Ar",
                    "Kr"
                ],
                "answer": 1
            },
            {
                "id": 189,
                "subject": "chemistry",
                "topic": "Chemistry",
                "difficulty": "hard",
                "text": "Which is a primary standard?",
                "options": [
                    "NaOH",
                    "KMnO4",
                    "HCl",
                    "K2Cr2O7"
                ],
                "answer": 3
            },
            {
                "id": 190,
                "subject": "chemistry",
                "topic": "Chemistry",
                "difficulty": "hard",
                "text": "Brass is an alloy of:",
                "options": [
                    "Cu + Zn",
                    "Cu + Sn",
                    "Fe + C",
                    "Pb + Sn"
                ],
                "answer": 0
            },
            {
                "id": 191,
                "subject": "chemistry",
                "topic": "Chemistry",
                "difficulty": "hard",
                "text": "Enzyme which converts glucose to ethanol:",
                "options": [
                    "Zymase",
                    "Invertase",
                    "Maltase",
                    "Diastase"
                ],
                "answer": 0
            },
            {
                "id": 192,
                "subject": "chemistry",
                "topic": "Chemistry",
                "difficulty": "hard",
                "text": "Formula of Plaster of Paris:",
                "options": [
                    "CaSO4.2H2O",
                    "CaSO4.1/2H2O",
                    "MgSO4.7H2O",
                    "CuSO4.5H2O"
                ],
                "answer": 1
            },
            {
                "id": 193,
                "subject": "chemistry",
                "topic": "Chemistry",
                "difficulty": "hard",
                "text": "Number of moles of water in 18g is:",
                "options": [
                    "1",
                    "2",
                    "0.5",
                    "18"
                ],
                "answer": 0
            },
            {
                "id": 194,
                "subject": "chemistry",
                "topic": "Chemistry",
                "difficulty": "hard",
                "text": "Which has highest ionization enthalpy?",
                "options": [
                    "N",
                    "O",
                    "C",
                    "B"
                ],
                "answer": 0
            },
            {
                "id": 195,
                "subject": "chemistry",
                "topic": "Chemistry",
                "difficulty": "hard",
                "text": "Most electronegative element:",
                "options": [
                    "F",
                    "Cl",
                    "O",
                    "N"
                ],
                "answer": 0
            },
            {
                "id": 196,
                "subject": "biology",
                "topic": "Biology",
                "difficulty": "hard",
                "text": "Basic unit of life is:",
                "options": [
                    "Cell",
                    "Tissue",
                    "Organ",
                    "Organism"
                ],
                "answer": 0
            },
            {
                "id": 197,
                "subject": "biology",
                "topic": "Biology",
                "difficulty": "hard",
                "text": "Number of bones in adult human body:",
                "options": [
                    "206",
                    "300",
                    "208",
                    "210"
                ],
                "answer": 0
            },
            {
                "id": 198,
                "subject": "biology",
                "topic": "Biology",
                "difficulty": "hard",
                "text": "Blood group known as universal donor is:",
                "options": [
                    "A",
                    "B",
                    "AB",
                    "O"
                ],
                "answer": 3
            },
            {
                "id": 199,
                "subject": "biology",
                "topic": "Biology",
                "difficulty": "hard",
                "text": "DNA stands for:",
                "options": [
                    "Deoxyribonucleic Acid",
                    "Di-Nucleic Acid",
                    "Deoxynitric Acid",
                    "None"
                ],
                "answer": 0
            },
            {
                "id": 200,
                "subject": "biology",
                "topic": "Biology",
                "difficulty": "hard",
                "text": "Site of protein synthesis in cell:",
                "options": [
                    "Mitochondria",
                    "Ribosome",
                    "Nucleus",
                    "Lysosome"
                ],
                "answer": 1
            },
            {
                "id": 201,
                "subject": "biology",
                "topic": "Biology",
                "difficulty": "hard",
                "text": "Which pigment gives green color to leaves?",
                "options": [
                    "Melanin",
                    "Hemoglobin",
                    "Chlorophyll",
                    "Carotene"
                ],
                "answer": 2
            },
            {
                "id": 202,
                "subject": "biology",
                "topic": "Biology",
                "difficulty": "hard",
                "text": "Father of Genetics is:",
                "options": [
                    "Darwin",
                    "Mendel",
                    "Lamarck",
                    "Pasteur"
                ],
                "answer": 1
            },
            {
                "id": 203,
                "subject": "biology",
                "topic": "Biology",
                "difficulty": "hard",
                "text": "Male reproductive part of a flower:",
                "options": [
                    "Pistil",
                    "Stamen",
                    "Petal",
                    "Sepal"
                ],
                "answer": 1
            },
            {
                "id": 204,
                "subject": "biology",
                "topic": "Biology",
                "difficulty": "hard",
                "text": "Largest organ in human body:",
                "options": [
                    "Liver",
                    "Heart",
                    "Skin",
                    "Brain"
                ],
                "answer": 2
            },
            {
                "id": 205,
                "subject": "biology",
                "topic": "Biology",
                "difficulty": "hard",
                "text": "Which vitamin is obtained from sunlight?",
                "options": [
                    "Vit A",
                    "Vit B",
                    "Vit C",
                    "Vit D"
                ],
                "answer": 3
            },
            {
                "id": 206,
                "subject": "biology",
                "topic": "Biology",
                "difficulty": "hard",
                "text": "Disease caused by Vitamin C deficiency:",
                "options": [
                    "Scurvy",
                    "Rickets",
                    "Beriberi",
                    "Night blindness"
                ],
                "answer": 0
            },
            {
                "id": 207,
                "subject": "biology",
                "topic": "Biology",
                "difficulty": "hard",
                "text": "Number of chambers in human heart:",
                "options": [
                    "2",
                    "3",
                    "4",
                    "5"
                ],
                "answer": 2
            },
            {
                "id": 208,
                "subject": "biology",
                "topic": "Biology",
                "difficulty": "hard",
                "text": "Study of tissues is called:",
                "options": [
                    "Cytology",
                    "Histology",
                    "Pathology",
                    "Ecology"
                ],
                "answer": 1
            },
            {
                "id": 209,
                "subject": "biology",
                "topic": "Biology",
                "difficulty": "hard",
                "text": "Which is the longest bone in human body?",
                "options": [
                    "Tibia",
                    "Fibula",
                    "Femur",
                    "Humerus"
                ],
                "answer": 2
            },
            {
                "id": 210,
                "subject": "biology",
                "topic": "Biology",
                "difficulty": "hard",
                "text": "Process of cell division in somatic cells:",
                "options": [
                    "Meiosis",
                    "Mitosis",
                    "Fission",
                    "Budding"
                ],
                "answer": 1
            }
        ],
        "jee_adv": [
            {
                "id": 1000,
                "subject": "physics",
                "topic": "Rotational Mechanics",
                "difficulty": "extreme",
                "text": "Two discs of mass m and 4m, and radii a and 2a respectively, are rigidly fixed to a light rod of length l. The system rolls without slipping on a horizontal plane such that the centre of the rod moves in a circle of radius l about the z-axis. The angular velocity of the system about the vertical axis passing through O is ω. Find the total kinetic energy of the system.",
                "options": [
                    "(1/2) * (5m) * (lω)²",
                    "mω²(5l² + 17a²/2)",
                    "(17/4)ma²ω² + (5/2)ml²ω²",
                    "Depends on the coefficient of friction"
                ],
                "answer": 1,
                "svg": "\n<svg viewBox=\"0 0 400 200\" width=\"400\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Ground -->\n  <line x1=\"20\" y1=\"160\" x2=\"380\" y2=\"160\" stroke=\"#333\" stroke-width=\"2\"/>\n  <path d=\"M20,160 L10,170 M40,160 L30,170 M60,160 L50,170 M80,160 L70,170 M100,160 L90,170 M120,160 L110,170 M140,160 L130,170 M160,160 L150,170 M180,160 L170,170 M200,160 L190,170 M220,160 L210,170 M240,160 L230,170 M260,160 L250,170 M280,160 L270,170 M300,160 L290,170 M320,160 L310,170 M340,160 L330,170 M360,160 L350,170 M380,160 L370,170\" stroke=\"#666\" stroke-width=\"1\"/>\n  <!-- Axes -->\n  <line x1=\"20\" y1=\"160\" x2=\"20\" y2=\"40\" stroke=\"#333\" stroke-width=\"2\" stroke-dasharray=\"4,4\" marker-end=\"url(#arrow)\"/>\n  <text x=\"30\" y=\"50\" font-family=\"sans-serif\" font-size=\"14\" fill=\"#333\">z</text>\n  <text x=\"5\" y=\"155\" font-family=\"sans-serif\" font-size=\"14\" fill=\"#333\">O</text>\n  <!-- Rod / Axle -->\n  <line x1=\"150\" y1=\"130\" x2=\"280\" y2=\"90\" stroke=\"#333\" stroke-width=\"4\"/>\n  <line x1=\"20\" y1=\"160\" x2=\"150\" y2=\"130\" stroke=\"#333\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n  <line x1=\"280\" y1=\"90\" x2=\"350\" y2=\"70\" stroke=\"#333\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n  <!-- Small Disc -->\n  <ellipse cx=\"150\" cy=\"130\" rx=\"15\" ry=\"30\" fill=\"#e0e0e0\" stroke=\"#333\" stroke-width=\"2\"/>\n  <circle cx=\"150\" cy=\"130\" r=\"3\" fill=\"#333\"/>\n  <line x1=\"150\" y1=\"130\" x2=\"150\" y2=\"160\" stroke=\"#333\" stroke-width=\"1\" marker-end=\"url(#arrow)\"/>\n  <text x=\"160\" y=\"150\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#333\">a</text>\n  <text x=\"145\" y=\"95\" font-family=\"sans-serif\" font-size=\"14\" fill=\"#333\">m</text>\n  <!-- Large Disc -->\n  <ellipse cx=\"280\" cy=\"90\" rx=\"30\" ry=\"70\" fill=\"#f0f0f0\" stroke=\"#333\" stroke-width=\"2\"/>\n  <circle cx=\"280\" cy=\"90\" r=\"4\" fill=\"#333\"/>\n  <line x1=\"280\" y1=\"90\" x2=\"280\" y2=\"160\" stroke=\"#333\" stroke-width=\"1\" marker-end=\"url(#arrow)\"/>\n  <text x=\"290\" y=\"130\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#333\">2a</text>\n  <text x=\"270\" y=\"15\" font-family=\"sans-serif\" font-size=\"14\" fill=\"#333\">4m</text>\n  <!-- Labels -->\n  <line x1=\"150\" y1=\"110\" x2=\"280\" y2=\"70\" stroke=\"#333\" stroke-width=\"1\" marker-end=\"url(#arrow)\" marker-start=\"url(#arrow)\"/>\n  <text x=\"210\" y=\"85\" font-family=\"sans-serif\" font-size=\"14\" fill=\"#333\">l</text>\n  <path d=\"M 330 50 Q 350 40 340 70\" fill=\"none\" stroke=\"#333\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/>\n  <text x=\"350\" y=\"65\" font-family=\"sans-serif\" font-size=\"14\" fill=\"#333\">ω</text>\n  <defs><marker id=\"arrow\" markerWidth=\"10\" markerHeight=\"10\" refX=\"9\" refY=\"3\" orient=\"auto\" markerUnits=\"strokeWidth\"><path d=\"M0,0 L0,6 L9,3 z\" fill=\"#333\" /></marker></defs>\n</svg>"
            },
            {
                "id": 1001,
                "subject": "physics",
                "topic": "Electromagnetism",
                "difficulty": "extreme",
                "text": "In the given LR circuit, an ideal battery of EMF E is connected. If the switch is closed at t=0, the current in the circuit at time t is given by:",
                "options": [
                    "(E/R)(1 - e^(-Rt/L))",
                    "(E/R)e^(-Rt/L)",
                    "(E/L)t",
                    "(E/R)(1 - e^(-Lt/R))"
                ],
                "answer": 0,
                "svg": "\n<svg viewBox=\"0 0 300 200\" width=\"300\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"50\" y=\"50\" width=\"200\" height=\"100\" fill=\"none\" stroke=\"#333\" stroke-width=\"2\"/>\n  <!-- Resistor -->\n  <rect x=\"110\" y=\"45\" width=\"80\" height=\"10\" fill=\"#fff\"/>\n  <path d=\"M 110 50 L 115 40 L 125 60 L 135 40 L 145 60 L 155 40 L 165 60 L 175 40 L 185 60 L 190 50\" fill=\"none\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text x=\"140\" y=\"30\" font-family=\"sans-serif\" font-size=\"14\" fill=\"#333\">R</text>\n  <!-- Inductor -->\n  <rect x=\"245\" y=\"80\" width=\"20\" height=\"40\" fill=\"#fff\"/>\n  <path d=\"M 250 80 C 270 80, 270 90, 250 90 C 270 90, 270 100, 250 100 C 270 100, 270 110, 250 110 C 270 110, 270 120, 250 120\" fill=\"none\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text x=\"270\" y=\"105\" font-family=\"sans-serif\" font-size=\"14\" fill=\"#333\">L</text>\n  <!-- Battery -->\n  <rect x=\"135\" y=\"140\" width=\"20\" height=\"20\" fill=\"#fff\"/>\n  <line x1=\"140\" y1=\"135\" x2=\"140\" y2=\"165\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line x1=\"150\" y1=\"125\" x2=\"150\" y2=\"175\" stroke=\"#333\" stroke-width=\"4\"/>\n  <text x=\"140\" y=\"190\" font-family=\"sans-serif\" font-size=\"14\" fill=\"#333\">E</text>\n</svg>"
            },
            {
                "id": 1002,
                "subject": "physics",
                "topic": "Mechanics",
                "difficulty": "extreme",
                "text": "A particle of mass m is moving in a 1D potential V(x) = k|x|^3. If the particle oscillates with an amplitude A, the time period of oscillation is proportional to:",
                "options": [
                    "A",
                    "A^(1/2)",
                    "A^(-1/2)",
                    "A^(-1)"
                ],
                "answer": 2
            },
            {
                "id": 1003,
                "subject": "physics",
                "topic": "Thermodynamics",
                "difficulty": "extreme",
                "text": "One mole of an ideal monoatomic gas undergoes a process described by P^2 V^3 = constant. The molar heat capacity of the gas in this process is:",
                "options": [
                    "R/2",
                    "3R/2",
                    "5R/2",
                    "2R"
                ],
                "answer": 0
            },
            {
                "id": 1004,
                "subject": "physics",
                "topic": "Optics",
                "difficulty": "extreme",
                "text": "A point object is placed at a distance of 20 cm from a convex lens of focal length 10 cm. If the lens is cut into two equal halves along the principal axis and the two halves are separated by a distance of 2 mm, find the distance between the two images formed.",
                "options": [
                    "2 mm",
                    "3 mm",
                    "4 mm",
                    "6 mm"
                ],
                "answer": 2
            },
            {
                "id": 1005,
                "subject": "physics",
                "topic": "Modern Physics",
                "difficulty": "extreme",
                "text": "If the de Broglie wavelength of an electron is equal to the wavelength of a photon, then the ratio of kinetic energy of the electron to the energy of the photon is proportional to (v is velocity of electron, c is speed of light):",
                "options": [
                    "v/c",
                    "c/v",
                    "v^2/c^2",
                    "c^2/v^2"
                ],
                "answer": 0
            },
            {
                "id": 1006,
                "subject": "physics",
                "topic": "Fluid Mechanics",
                "difficulty": "extreme",
                "text": "A small spherical ball of density ρ and radius r is dropped into a viscous liquid of density σ (ρ > σ) and coefficient of viscosity η. The terminal velocity of the ball is proportional to:",
                "options": [
                    "r",
                    "r^2",
                    "1/r",
                    "1/r^2"
                ],
                "answer": 1
            },
            {
                "id": 1007,
                "subject": "physics",
                "topic": "Electrostatics",
                "difficulty": "extreme",
                "text": "A solid conducting sphere of radius R has a charge Q. The electric field at a distance r (r < R) from the center is:",
                "options": [
                    "kQ/r^2",
                    "kQ/R^2",
                    "Zero",
                    "kQr/R^3"
                ],
                "answer": 2
            },
            {
                "id": 1008,
                "subject": "physics",
                "topic": "Wave Optics",
                "difficulty": "extreme",
                "text": "In a YDSE, if the slit separation is doubled and the distance to the screen is halved, the fringe width becomes:",
                "options": [
                    "Double",
                    "Half",
                    "One-fourth",
                    "Four times"
                ],
                "answer": 2
            },
            {
                "id": 1009,
                "subject": "physics",
                "topic": "Magnetism",
                "difficulty": "extreme",
                "text": "A charged particle enters a uniform magnetic field perpendicularly. The path of the particle is a:",
                "options": [
                    "Straight line",
                    "Parabola",
                    "Circle",
                    "Helix"
                ],
                "answer": 2
            },
            {
                "id": 1010,
                "subject": "physics",
                "topic": "Gravitation",
                "difficulty": "extreme",
                "text": "If the radius of the Earth shrinks by 1% while its mass remains constant, the acceleration due to gravity on its surface will:",
                "options": [
                    "Increase by 1%",
                    "Decrease by 1%",
                    "Increase by 2%",
                    "Decrease by 2%"
                ],
                "answer": 2
            },
            {
                "id": 1011,
                "subject": "physics",
                "topic": "SHM",
                "difficulty": "extreme",
                "text": "A simple pendulum has a time period T. If it is taken into an elevator accelerating upwards with acceleration g/2, the new time period will be:",
                "options": [
                    "T * sqrt(2/3)",
                    "T * sqrt(3/2)",
                    "T/2",
                    "2T"
                ],
                "answer": 0
            },
            {
                "id": 1012,
                "subject": "physics",
                "topic": "Kinematics",
                "difficulty": "extreme",
                "text": "A projectile is fired with velocity u at an angle θ. The radius of curvature of its trajectory at the highest point is:",
                "options": [
                    "u^2 cos^2(θ) / g",
                    "u^2 sin^2(θ) / g",
                    "u^2 / g",
                    "u^2 cos(θ) / g"
                ],
                "answer": 0
            },
            {
                "id": 1013,
                "subject": "physics",
                "topic": "Work Power Energy",
                "difficulty": "extreme",
                "text": "A chain of length L and mass M is held on a frictionless table with L/n of its length hanging over the edge. The work done in pulling the chain back onto the table is:",
                "options": [
                    "MgL / (2n^2)",
                    "MgL / n^2",
                    "MgL / (2n)",
                    "MgL / n"
                ],
                "answer": 0
            },
            {
                "id": 1014,
                "subject": "physics",
                "topic": "Current Electricity",
                "difficulty": "extreme",
                "text": "The equivalent resistance of an infinite ladder of 1 ohm resistors is R. R is:",
                "options": [
                    "(1 + sqrt(5))/2",
                    "(1 - sqrt(5))/2",
                    "sqrt(5)",
                    "1"
                ],
                "answer": 0
            },
            {
                "id": 1015,
                "subject": "chemistry",
                "topic": "Organic Mechanisms",
                "difficulty": "extreme",
                "text": "In the electrophilic aromatic substitution of toluene with Cl2/FeCl3, the major product is formed due to which effect of the methyl group?",
                "options": [
                    "-I effect",
                    "+I and hyperconjugation",
                    "-M effect",
                    "+M effect"
                ],
                "answer": 1
            },
            {
                "id": 1016,
                "subject": "chemistry",
                "topic": "Coordination Compounds",
                "difficulty": "extreme",
                "text": "The hybridization and magnetic nature of [Fe(CN)6]3- are:",
                "options": [
                    "sp3d2, diamagnetic",
                    "d2sp3, paramagnetic",
                    "sp3d2, paramagnetic",
                    "d2sp3, diamagnetic"
                ],
                "answer": 1
            },
            {
                "id": 1017,
                "subject": "chemistry",
                "topic": "Chemical Kinetics",
                "difficulty": "extreme",
                "text": "For a first-order reaction, the time required for 99.9% completion is approximately how many times the half-life?",
                "options": [
                    "10 times",
                    "3.3 times",
                    "6.6 times",
                    "20 times"
                ],
                "answer": 0
            },
            {
                "id": 1018,
                "subject": "chemistry",
                "topic": "Thermodynamics",
                "difficulty": "extreme",
                "text": "For an ideal gas undergoing reversible adiabatic expansion, the relation between T and V is:",
                "options": [
                    "TV^(γ-1) = const",
                    "T^(γ-1)V = const",
                    "TV^γ = const",
                    "T^γ V = const"
                ],
                "answer": 0
            },
            {
                "id": 1019,
                "subject": "chemistry",
                "topic": "Electrochemistry",
                "difficulty": "extreme",
                "text": "The standard reduction potential of Li+/Li is -3.05V, implying that Li is:",
                "options": [
                    "A strong oxidizing agent",
                    "A strong reducing agent",
                    "A weak reducing agent",
                    "Chemically inert"
                ],
                "answer": 1
            },
            {
                "id": 1020,
                "subject": "chemistry",
                "topic": "Atomic Structure",
                "difficulty": "extreme",
                "text": "The number of radial nodes for a 4d orbital is:",
                "options": [
                    "0",
                    "1",
                    "2",
                    "3"
                ],
                "answer": 1
            },
            {
                "id": 1021,
                "subject": "chemistry",
                "topic": "Equilibrium",
                "difficulty": "extreme",
                "text": "According to Le Chatelier’s principle, increasing the pressure in the reaction N2(g) + 3H2(g) ⇌ 2NH3(g) will:",
                "options": [
                    "Shift equilibrium forward",
                    "Shift equilibrium backward",
                    "Have no effect",
                    "Decrease Kp"
                ],
                "answer": 0
            },
            {
                "id": 1022,
                "subject": "chemistry",
                "topic": "Biomolecules",
                "difficulty": "extreme",
                "text": "Which of the following is an essential amino acid?",
                "options": [
                    "Glycine",
                    "Alanine",
                    "Valine",
                    "Serine"
                ],
                "answer": 2
            },
            {
                "id": 1023,
                "subject": "chemistry",
                "topic": "Solid State",
                "difficulty": "extreme",
                "text": "The packing efficiency of a Face Centered Cubic (FCC) unit cell is:",
                "options": [
                    "52.4%",
                    "68%",
                    "74%",
                    "100%"
                ],
                "answer": 2
            },
            {
                "id": 1024,
                "subject": "chemistry",
                "topic": "Polymers",
                "difficulty": "extreme",
                "text": "Nylon 6,6 is a copolymer of:",
                "options": [
                    "Adipic acid and hexamethylenediamine",
                    "Terephthalic acid and ethylene glycol",
                    "Phenol and formaldehyde",
                    "Caprolactam"
                ],
                "answer": 0
            },
            {
                "id": 1025,
                "subject": "chemistry",
                "topic": "P-Block Elements",
                "difficulty": "extreme",
                "text": "The structure of XeO3 is:",
                "options": [
                    "Planar",
                    "Pyramidal",
                    "Tetrahedral",
                    "T-shaped"
                ],
                "answer": 1
            },
            {
                "id": 1026,
                "subject": "chemistry",
                "topic": "S-Block Elements",
                "difficulty": "extreme",
                "text": "Which alkali metal forms only a normal oxide (M2O) on heating in excess of air?",
                "options": [
                    "Li",
                    "Na",
                    "K",
                    "Rb"
                ],
                "answer": 0
            },
            {
                "id": 1027,
                "subject": "chemistry",
                "topic": "Solutions",
                "difficulty": "extreme",
                "text": "An azeotropic mixture of two liquids boils at a temperature lower than either of them when it:",
                "options": [
                    "Shows positive deviation from Raoult's Law",
                    "Shows negative deviation",
                    "Is an ideal solution",
                    "Is saturated"
                ],
                "answer": 0
            },
            {
                "id": 1028,
                "subject": "chemistry",
                "topic": "Surface Chemistry",
                "difficulty": "extreme",
                "text": "In the coagulation of a positive sol, the flocculating power is maximum for:",
                "options": [
                    "Cl-",
                    "SO4^2-",
                    "PO4^3-",
                    "[Fe(CN)6]^4-"
                ],
                "answer": 3
            },
            {
                "id": 1029,
                "subject": "chemistry",
                "topic": "Aldehydes & Ketones",
                "difficulty": "extreme",
                "text": "Cannizzaro reaction is NOT given by:",
                "options": [
                    "Formaldehyde",
                    "Acetaldehyde",
                    "Benzaldehyde",
                    "Trichloroacetaldehyde"
                ],
                "answer": 1
            },
            {
                "id": 1030,
                "subject": "maths",
                "topic": "Definite Integration",
                "difficulty": "extreme",
                "text": "The value of the integral from 0 to π/2 of ln(sin(x)) dx is:",
                "options": [
                    "-π/2 * ln(2)",
                    "π/2 * ln(2)",
                    "0",
                    "π * ln(2)"
                ],
                "answer": 0
            },
            {
                "id": 1031,
                "subject": "maths",
                "topic": "Complex Numbers",
                "difficulty": "extreme",
                "text": "If ω is a complex cube root of unity, then the value of (1 - ω + ω^2)^5 + (1 + ω - ω^2)^5 is:",
                "options": [
                    "32",
                    "-32",
                    "64",
                    "-64"
                ],
                "answer": 0
            },
            {
                "id": 1032,
                "subject": "maths",
                "topic": "Matrices",
                "difficulty": "extreme",
                "text": "If A is a 3x3 orthogonal matrix, then the determinant of A is:",
                "options": [
                    "1",
                    "-1",
                    "±1",
                    "0"
                ],
                "answer": 2
            },
            {
                "id": 1033,
                "subject": "maths",
                "topic": "Probability",
                "difficulty": "extreme",
                "text": "A pair of fair dice is rolled. Given that the sum is 8, what is the probability that one of the dice shows a 3?",
                "options": [
                    "1/5",
                    "2/5",
                    "1/6",
                    "2/36"
                ],
                "answer": 1
            },
            {
                "id": 1034,
                "subject": "maths",
                "topic": "Conic Sections",
                "difficulty": "extreme",
                "text": "The locus of the point of intersection of perpendicular tangents to the parabola y^2 = 4ax is:",
                "options": [
                    "x = a",
                    "x = -a",
                    "y = a",
                    "y = -a"
                ],
                "answer": 1
            },
            {
                "id": 1035,
                "subject": "maths",
                "topic": "Vectors",
                "difficulty": "extreme",
                "text": "If a and b are unit vectors and θ is the angle between them, then |a - b| is:",
                "options": [
                    "2 sin(θ/2)",
                    "2 cos(θ/2)",
                    "sin(θ/2)",
                    "cos(θ/2)"
                ],
                "answer": 0
            },
            {
                "id": 1036,
                "subject": "maths",
                "topic": "Differential Equations",
                "difficulty": "extreme",
                "text": "The solution to the differential equation dy/dx + y = e^(-x) is:",
                "options": [
                    "y = (x+c)e^(-x)",
                    "y = ce^(-x)",
                    "y = (x+c)e^x",
                    "y = e^(-x)"
                ],
                "answer": 0
            },
            {
                "id": 1037,
                "subject": "maths",
                "topic": "Application of Derivatives",
                "difficulty": "extreme",
                "text": "The maximum value of the function f(x) = x^(1/x) for x > 0 is:",
                "options": [
                    "e",
                    "e^(1/e)",
                    "1/e",
                    "1"
                ],
                "answer": 1
            },
            {
                "id": 1038,
                "subject": "maths",
                "topic": "3D Geometry",
                "difficulty": "extreme",
                "text": "The shortest distance between the lines (x-1)/2 = y/3 = (z-1)/4 and x/1 = (y-1)/2 = z/3 is:",
                "options": [
                    "1/√6",
                    "2/√6",
                    "1/√29",
                    "1/√14"
                ],
                "answer": 0
            },
            {
                "id": 1039,
                "subject": "maths",
                "topic": "Binomial Theorem",
                "difficulty": "extreme",
                "text": "The coefficient of x^5 in the expansion of (1 + x + x^2)^4 is:",
                "options": [
                    "10",
                    "12",
                    "16",
                    "20"
                ],
                "answer": 1
            },
            {
                "id": 1040,
                "subject": "maths",
                "topic": "Trigonometry",
                "difficulty": "extreme",
                "text": "The general solution of the equation sin(x) + cos(x) = √2 is:",
                "options": [
                    "x = 2nπ + π/4",
                    "x = nπ + π/4",
                    "x = 2nπ - π/4",
                    "x = nπ - π/4"
                ],
                "answer": 0
            },
            {
                "id": 1041,
                "subject": "maths",
                "topic": "Limits",
                "difficulty": "extreme",
                "text": "The value of limit(x->0) [sin(x) - x]/x^3 is:",
                "options": [
                    "1/6",
                    "-1/6",
                    "1/3",
                    "-1/3"
                ],
                "answer": 1
            },
            {
                "id": 1042,
                "subject": "maths",
                "topic": "Continuity & Differentiability",
                "difficulty": "extreme",
                "text": "The function f(x) = |x - 1| + |x - 2| is not differentiable at:",
                "options": [
                    "x=1 only",
                    "x=2 only",
                    "x=1 and x=2",
                    "Nowhere"
                ],
                "answer": 2
            },
            {
                "id": 1043,
                "subject": "maths",
                "topic": "Area under curves",
                "difficulty": "extreme",
                "text": "The area bounded by the curve y = ln(x), the x-axis, and the ordinate x=e is:",
                "options": [
                    "1",
                    "e",
                    "e-1",
                    "1/e"
                ],
                "answer": 0
            },
            {
                "id": 1044,
                "subject": "maths",
                "topic": "Sequence & Series",
                "difficulty": "extreme",
                "text": "The sum of the infinite series 1/2 + 2/4 + 3/8 + 4/16 + ... is:",
                "options": [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                "answer": 1
            }
        ]
    }
};