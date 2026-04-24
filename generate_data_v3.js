const fs = require('fs');

const data = {
    exams: [
        { id: 'cbse10', name: 'CBSE Class 10' },
        { id: 'jee', name: 'JEE Main' },
        { id: 'neet', name: 'NEET UG' }
    ],
    subjects: {
        cbse10: [
            { id: 'english', name: 'English' }, { id: 'science', name: 'Science' }, { id: 'sst', name: 'Social Science' },
            { id: 'maths', name: 'Mathematics' }, { id: 'it', name: 'Information Technology' }, { id: 'hindi', name: 'Hindi' },
            { id: 'sanskrit_comm', name: 'Sanskrit Communicative' }, { id: 'sanskrit', name: 'Sanskrit' }
        ],
        jee: [
            { id: 'physics', name: 'Physics' }, { id: 'chemistry', name: 'Chemistry' }, { id: 'maths', name: 'Mathematics' }
        ],
        neet: [
            { id: 'physics', name: 'Physics' }, { id: 'chemistry', name: 'Chemistry' }, { id: 'biology', name: 'Biology' }
        ]
    },
    topics: {
        maths: ['Algebra', 'Geometry', 'Calculus', 'Trigonometry', 'Statistics'], science: ['Physics', 'Chemistry', 'Biology'],
        sst: ['History', 'Geography', 'Civics', 'Economics'], english: ['Grammar', 'Literature'], it: ['RDBMS', 'Web Apps'], hindi: ['Vyakaran', 'Kshitij'],
        sanskrit: ['Vyakaran'], sanskrit_comm: ['Vyakaran'], physics: ['Mechanics', 'Optics'],
        chemistry: ['Organic', 'Inorganic'], biology: ['Zoology', 'Botany']
    },
    questions: { cbse10: [], jee: [], neet: [] }
};

let qId = 1;
function add(exam, subj, top, text, opts, ans) {
    data.questions[exam].push({ id: qId++, subject: subj, topic: top, difficulty: 'hard', text: text, options: opts, answer: ans });
}

// CBSE 10 English (Grammar & First Flight)
const engQ = [
    ["Identify the tense: 'The sun rises in the east.'", ["Present Continuous", "Simple Present", "Present Perfect", "Simple Past"], 1],
    ["Change to reported speech: He said, 'I am busy.'", ["He said that he was busy.", "He said he is busy.", "He says he is busy.", "He said I was busy."], 0],
    ["Who is the author of 'A Letter to God'?", ["G.L. Fuentes", "Nelson Mandela", "Liam O'Flaherty", "Robert Frost"], 0],
    ["What did Lencho hope for?", ["A new house", "A good shower of rain", "A tractor", "Money from his brother"], 1],
    ["Nelson Mandela was sworn in as the ___ President of South Africa.", ["First Black", "Second", "First White", "Third"], 0],
    ["The poem 'Dust of Snow' is written by:", ["John Berryman", "Robert Frost", "Walt Whitman", "W.B. Yeats"], 1],
    ["In 'Two Stories about Flying', the young seagull was afraid to:", ["Swim", "Run", "Fly", "Eat"], 2],
    ["Identify the modal: 'You ___ wear a helmet while riding a bike.'", ["can", "may", "must", "might"], 2],
    ["Subject-Verb Concord: 'Neither of the boys ___ done the homework.'", ["has", "have", "are", "were"], 0],
    ["What is the central theme of 'The Necklace'?", ["Greed leads to downfall", "Honesty is the best policy", "Love conquers all", "Hard work pays off"], 0],
    ["Who was Tricki in 'A Triumph of Surgery'?", ["A cat", "A dog", "A bird", "A horse"], 1],
    ["Change to passive voice: 'She writes a letter.'", ["A letter was written by her.", "A letter is written by her.", "A letter has been written by her.", "A letter is being written by her."], 1],
    ["Identify the poetic device: 'And saved some part of a day I had rued.'", ["Simile", "Metaphor", "Alliteration", "Personification"], 2],
    ["What did the postmaster do to help Lencho?", ["Ignored him", "Laughed at him", "Collected money for him", "Tore the letter"], 2],
    ["Fill in the blank: 'If it rains, we ___ stay indoors.'", ["would", "will", "could", "might"], 1]
];
engQ.forEach(q => add('cbse10', 'english', 'Grammar', q[0], q[1], q[2]));

// CBSE 10 Science (Class 10 Syllabus)
const sciQ = [
    ["In the reaction CuO + H2 -> Cu + H2O, which substance is oxidized?", ["CuO", "H2", "Cu", "H2O"], 1],
    ["Which acid is present in ant sting?", ["Methanoic acid", "Lactic acid", "Citric acid", "Oxalic acid"], 0],
    ["What happens when dilute HCl is added to iron filings?", ["Hydrogen gas and iron chloride are produced.", "Chlorine gas and iron hydroxide are produced.", "No reaction takes place.", "Iron salt and water are produced."], 0],
    ["Which metal is liquid at room temperature?", ["Sodium", "Mercury", "Iron", "Gold"], 1],
    ["The functional group present in propanal is:", ["-OH", "-COOH", "-CHO", "-CO-"], 2],
    ["Which plant hormone promotes cell division?", ["Auxin", "Gibberellin", "Cytokinin", "Abscisic acid"], 2],
    ["In a human female, fertilization takes place in the:", ["Uterus", "Ovary", "Fallopian tube", "Vagina"], 2],
    ["The phenotypic ratio of a dihybrid cross in F2 generation is:", ["3:1", "1:2:1", "9:3:3:1", "9:1"], 2],
    ["A convex mirror used for rear-view on an automobile has a radius of curvature of 3.00 m. If a bus is located at 5.00 m from this mirror, find the position of the image.", ["+1.15 m", "-1.15 m", "+2.30 m", "-2.30 m"], 0],
    ["The absolute refractive index of water is:", ["1.50", "1.33", "2.42", "1.00"], 1],
    ["The focal length of a concave lens is 2m. Calculate its power.", ["+0.5 D", "-0.5 D", "+2.0 D", "-2.0 D"], 1],
    ["At the time of short circuit, the current in the circuit:", ["reduces substantially.", "does not change.", "increases heavily.", "vary continuously."], 2],
    ["The device used for producing electric current is called a:", ["Generator", "Galvanometer", "Ammeter", "Motor"], 0],
    ["Which of the following constitutes a food chain?", ["Grass, wheat and mango", "Grass, goat and human", "Goat, cow and elephant", "Grass, fish and goat"], 1],
    ["Ozone layer protects us from which harmful rays?", ["IR rays", "UV rays", "X-rays", "Gamma rays"], 1]
];
sciQ.forEach(q => add('cbse10', 'science', 'Science', q[0], q[1], q[2]));

// CBSE 10 SST (Class 10 Syllabus)
const sstQ = [
    ["When did the Jallianwala Bagh incident take place?", ["13 April 1919", "15 August 1947", "26 January 1950", "10 May 1857"], 0],
    ["Who wrote the book 'Hind Swaraj'?", ["Jawaharlal Nehru", "Subhas Chandra Bose", "Mahatma Gandhi", "Bhagat Singh"], 2],
    ["Which treaty recognized Greece as an independent nation?", ["Treaty of Vienna", "Treaty of Versailles", "Treaty of Constantinople", "Treaty of Paris"], 2],
    ["Black soil is also known as:", ["Bangar", "Khadar", "Regur soil", "Laterite soil"], 2],
    ["Which one of the following is a Rabi crop?", ["Rice", "Gram", "Millets", "Cotton"], 1],
    ["In which state is the Hirakud dam located?", ["Odisha", "Gujarat", "Punjab", "Kerala"], 0],
    ["Which industry uses limestone as a raw material?", ["Aluminum", "Cement", "Sugar", "Jute"], 1],
    ["The longest National Highway in India is:", ["NH-1", "NH-44", "NH-8", "NH-2"], 1],
    ["In Belgium, which language is spoken by the majority of the population?", ["French", "Dutch", "German", "English"], 1],
    ["What are the subjects included in the Concurrent List?", ["Defense, Foreign Affairs", "Police, Trade", "Education, Forest", "Agriculture, Irrigation"], 2],
    ["Which of the following is a National Political Party?", ["Aam Aadmi Party", "Trinamool Congress", "Bharatiya Janata Party", "All of the above"], 2],
    ["BMI stands for:", ["Body Mass Index", "Body Muscle Index", "Base Mass Index", "Basic Metabolic Index"], 0],
    ["Which sector is also called the service sector?", ["Primary", "Secondary", "Tertiary", "Quaternary"], 2],
    ["NREGA (National Rural Employment Guarantee Act) was enacted in:", ["2000", "2005", "2010", "2014"], 1],
    ["Who issues one-rupee notes in India?", ["Reserve Bank of India", "State Bank of India", "Ministry of Finance", "President of India"], 2]
];
sstQ.forEach(q => add('cbse10', 'sst', 'History', q[0], q[1], q[2]));

// CBSE 10 Maths (Class 10 Syllabus)
const mathQ = [
    ["If the HCF of 65 and 117 is expressible in the form 65m - 117, then the value of m is:", ["4", "2", "1", "3"], 1],
    ["A quadratic polynomial, whose zeroes are -3 and 4, is:", ["x² - x + 12", "x² + x + 12", "x² - x - 12", "x² + x - 12"], 2],
    ["The pair of equations x = 0 and x = -4 has:", ["A unique solution", "Two solutions", "Infinitely many solutions", "No solution"], 3],
    ["Find the discriminant of the quadratic equation 2x² - 4x + 3 = 0.", ["-8", "8", "-16", "16"], 0],
    ["The 10th term of the AP: 5, 8, 11, 14, ... is:", ["32", "35", "38", "41"], 0],
    ["If the points A(x, 2), B(-3, -4) and C(7, -5) are collinear, then the value of x is:", ["-63", "63", "60", "-60"], 0],
    ["If sin A = 3/4, calculate cos A.", ["√7/4", "3/5", "4/5", "√7/3"], 0],
    ["If tan 2A = cot (A - 18°), where 2A is an acute angle, find the value of A.", ["36°", "18°", "54°", "72°"], 0],
    ["The shadow of a tower is equal to its height. The angle of elevation of the sun is:", ["30°", "45°", "60°", "90°"], 1],
    ["The length of the tangent from a point A at a distance 5 cm from the centre of the circle is 4 cm. Find the radius of the circle.", ["3 cm", "4 cm", "5 cm", "6 cm"], 0],
    ["The area of a quadrant of a circle whose circumference is 22 cm is:", ["77/8 cm²", "77/4 cm²", "77/2 cm²", "77 cm²"], 0],
    ["A metallic sphere of radius 4.2 cm is melted and recast into the shape of a cylinder of radius 6 cm. Find the height of the cylinder.", ["2.74 cm", "3.14 cm", "4.2 cm", "6 cm"], 0],
    ["Find the mean of the first 5 prime numbers.", ["5.6", "5.8", "6.0", "6.2"], 0],
    ["The empirical relationship between the three measures of central tendency is:", ["3 Median = Mode + 2 Mean", "2 Median = Mode + 3 Mean", "Mode = 3 Median - 2 Mean", "Both 1 and 3"], 3],
    ["A die is thrown once. Find the probability of getting a prime number.", ["1/6", "1/3", "1/2", "2/3"], 2]
];
mathQ.forEach(q => add('cbse10', 'maths', 'Algebra', q[0], q[1], q[2]));

// CBSE 10 IT (Information Technology 402)
const itQ = [
    ["Which of the following is a DBMS software?", ["MS Word", "MS Excel", "MySQL", "MS PowerPoint"], 2],
    ["In a database table, a row is also called a:", ["Field", "Record", "Column", "File"], 1],
    ["Which key uniquely identifies a record in a table?", ["Foreign Key", "Primary Key", "Composite Key", "Alternate Key"], 1],
    ["Which SQL command is used to retrieve data from a table?", ["UPDATE", "INSERT", "DELETE", "SELECT"], 3],
    ["What does DDL stand for?", ["Data Definition Language", "Data Manipulation Language", "Data Description Language", "Data Design Language"], 0],
    ["Which topology connects all nodes to a single central cable?", ["Star", "Ring", "Bus", "Mesh"], 2],
    ["The default extension of a Writer document in OpenOffice is:", [".docx", ".odt", ".ods", ".odp"], 1],
    ["Which feature allows sending the same letter to multiple people?", ["Mail Merge", "Macros", "Templates", "Styles"], 0],
    ["In Calc, absolute cell referencing is denoted by which symbol?", ["#", "@", "$", "&"], 2],
    ["Which function in Calc calculates the sum of a range?", ["SUM()", "ADD()", "TOTAL()", "COUNT()"], 0],
    ["A presentation can be viewed in which of the following modes?", ["Normal", "Slide Sorter", "Slide Show", "All of the above"], 3],
    ["Which of the following is an ISP in India?", ["Google", "Microsoft", "BSNL", "Apple"], 2],
    ["WWW is an acronym for:", ["World Wide Web", "World Web Wide", "Wide World Web", "Web World Wide"], 0],
    ["Which tag is used to create a hyperlink in HTML?", ["<link>", "<a>", "<href>", "<url>"], 1],
    ["CSS stands for:", ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"], 0]
];
itQ.forEach(q => add('cbse10', 'it', 'RDBMS', q[0], q[1], q[2]));

// CBSE 10 Hindi (Class 10 Syllabus)
const hinQ = [
    ["'रचना के आधार पर' वाक्य के कितने भेद होते हैं?", ["2", "3", "4", "5"], 1],
    ["'जो मेहनत करता है, वह सफल होता है।' यह कौन सा वाक्य है?", ["सरल वाक्य", "संयुक्त वाक्य", "मिश्र वाक्य", "इनमें से कोई नहीं"], 2],
    ["वाच्य के कितने प्रकार होते हैं?", ["2", "3", "4", "5"], 1],
    ["'राम के द्वारा पत्र लिखा जाता है।' यह कौन सा वाच्य है?", ["कर्तृवाच्य", "कर्मवाच्य", "भाववाच्य", "सभी"], 1],
    ["'वीर रस' का स्थायी भाव क्या है?", ["रति", "शोक", "उत्साह", "क्रोध"], 2],
    ["'सूरदास के पद' में गोपियाँ किससे व्यंग्य करती हैं?", ["कृष्ण", "उद्धव", "नंद", "अक्रूर"], 1],
    ["'नेताजी का चश्मा' कहानी के लेखक कौन हैं?", ["स्वयं प्रकाश", "रामवृक्ष बेनीपुरी", "यशपाल", "मन्नू भंडारी"], 0],
    ["बालगोबिन भगत क्या बजाते थे?", ["बांसुरी", "खंजड़ी", "ढोलक", "मंजीरा"], 1],
    ["'माता का अँचल' पाठ में लेखक का वास्तविक नाम क्या था?", ["तारकेश्वरनाथ", "भोलानाथ", "शिवपूजन सहाय", "रामनाथ"], 0],
    ["पद परिचय में संज्ञा के कितने भेद बताए जाते हैं?", ["3", "4", "5", "6"], 0],
    ["'धीरे-धीरे' शब्द व्याकरण की दृष्टि से क्या है?", ["संज्ञा", "सर्वनाम", "विशेषण", "क्रियाविशेषण"], 3],
    ["'उत्साह' कविता के कवि कौन हैं?", ["सूरदास", "तुलसीदास", "सूर्यकांत त्रिपाठी निराला", "जयशंकर प्रसाद"], 2],
    ["'लखनवी अंदाज़' पाठ में नवाब साहब ने क्या खाया?", ["आम", "सेब", "खीरा", "अंगूर"], 2],
    ["'राम-लक्ष्मण-परशुराम संवाद' किस ग्रंथ से लिया गया है?", ["महाभारत", "रामचरितमानस", "रामायण", "गीता"], 1],
    ["'कन्यादान' कविता में माँ अपनी बेटी को क्या सीख देती है?", ["कमज़ोर मत बनना", "रोने-धोने की आदत छोड़ना", "अपने सौंदर्य पर मुग्ध न होना", "उपर्युक्त सभी"], 2]
];
hinQ.forEach(q => add('cbse10', 'hindi', 'Vyakaran', q[0], q[1], q[2]));

// CBSE 10 Sanskrit (Class 10 Syllabus)
const sanQ = [
    ["'तथापि' इत्यस्य सन्धिविच्छेदः किम्?", ["तथा + पि", "तथा + अपि", "तत् + अपि", "तथ् + अपि"], 1],
    ["'पीताम्बरः' इत्यत्र कः समासः?", ["तत्पुरुषः", "कर्मधारयः", "बहुव्रीहिः", "द्वन्द्वः"], 2],
    ["'पठित्वा' इत्यत्र कः प्रत्ययः?", ["क्त्वा", "ल्यप्", "तुमुन्", "शतृ"], 0],
    ["'गन्तुम्' इत्यत्र कः प्रत्ययः?", ["क्त्वा", "ल्यप्", "तुमुन्", "शानच्"], 2],
    ["'अहं गृहं गच्छामि।' अस्य कर्मवाच्यं किम्?", ["मया गृहं गम्यते।", "अहं गृहं गम्यते।", "मया गृहं गच्छामि।", "अहं गृहं गच्छामि।"], 0],
    ["'रामः रावणं हतवान्।' इत्यत्र 'हतवान्' पदे कः प्रत्ययः?", ["क्तवतु", "क्त", "शतृ", "शानच्"], 0],
    ["'यथाशक्ति' इत्यत्र कः समासः?", ["अव्ययीभावः", "तत्पुरुषः", "द्वन्द्वः", "बहुव्रीहिः"], 0],
    ["'इत्यादि' इत्यस्य सन्धिविच्छेदः किम्?", ["इति + आदि", "इत्य + आदि", "इति + अदि", "इत्या + दि"], 0],
    ["'सर्वदा' इति किम् अव्ययम्?", ["कालवाचकम्", "स्थानवाचकम्", "रीतिवाचकम्", "प्रश्नवाचकम्"], 0],
    ["'सः पुस्तकं पठति।' इत्यत्र 'सः' किम् अस्ति?", ["संज्ञा", "सर्वनाम", "विशेषणम्", "क्रिया"], 1],
    ["'सुन्दरः बालकः' इत्यत्र विशेष्यं किम्?", ["सुन्दरः", "बालकः", "उभौ", "कोऽपि न"], 1],
    ["'लभते' इति कस्य पदस्य रूपम्?", ["परस्मैपदस्य", "आत्मनेपदस्य", "उभयपदस्य", "कोऽपि न"], 1],
    ["'भविष्यति' इति कः लकारः?", ["लट्", "लृट्", "लङ्", "लोट्"], 1],
    ["'पित्रा' इति पितृ-शब्दस्य का विभक्तिः?", ["प्रथमा", "द्वितीया", "तृतीया", "चतुर्थी"], 2],
    ["'बुद्धिर्बलवती सदा' इति पाठः कस्मात् ग्रन्थात् सङ्कलितः?", ["पञ्चतन्त्रात्", "हितोपदेशात्", "शुकसप्ततेः", "रामायणात्"], 2]
];
sanQ.forEach(q => add('cbse10', 'sanskrit', 'Vyakaran', q[0], q[1], q[2]));
sanQ.forEach(q => add('cbse10', 'sanskrit_comm', 'Vyakaran', q[0], q[1], q[2]));

// JEE & NEET (Keeping these from generate_data_v2.js exactly the same)
const jeePhysQ = [
    ["Dimensional formula of force is:", ["MLT^-2", "ML^2T^-2", "MLT^-1", "M^2LT^-2"], 0],
    ["Which is a conservative force?", ["Friction", "Air resistance", "Gravitational force", "Viscous drag"], 2],
    ["Escape velocity from Earth is approx:", ["11.2 km/s", "11.2 m/s", "8 km/s", "3x10^8 m/s"], 0],
    ["Work done by centripetal force is:", ["Positive", "Negative", "Zero", "Depends on radius"], 2],
    ["Equation of continuity represents conservation of:", ["Mass", "Energy", "Momentum", "Charge"], 0],
    ["Bernoulli's principle is based on conservation of:", ["Mass", "Energy", "Momentum", "Angular momentum"], 1],
    ["First law of thermodynamics is related to conservation of:", ["Energy", "Heat", "Temperature", "Work"], 0],
    ["Unit of magnetic flux is:", ["Tesla", "Weber", "Henry", "Farad"], 1],
    ["Lenz's law is a consequence of conservation of:", ["Charge", "Mass", "Energy", "Momentum"], 2],
    ["Speed of sound is maximum in:", ["Vacuum", "Air", "Water", "Steel"], 3],
    ["De Broglie wavelength formula is:", ["h/p", "p/h", "h/E", "E/h"], 0],
    ["Half-life formula is:", ["0.693/λ", "λ/0.693", "1/λ", "ln(2)*λ"], 0],
    ["Logic gate that acts as an inverter is:", ["AND", "OR", "NOT", "NAND"], 2],
    ["Energy of a photon is given by:", ["hc/λ", "hλ/c", "c/hλ", "λ/hc"], 0],
    ["Young's double slit experiment demonstrates:", ["Polarization", "Diffraction", "Interference", "Reflection"], 2]
];
jeePhysQ.forEach(q => add('jee', 'physics', 'Physics', q[0], q[1], q[2]));

const jeeChemQ = [
    ["Hybridization of Carbon in Methane (CH4) is:", ["sp", "sp2", "sp3", "sp3d"], 2],
    ["Which of the following is an electrophile?", ["NH3", "H2O", "BF3", "Cl-"], 2],
    ["Oxidation state of Oxygen in H2O2 is:", ["-2", "-1", "+1", "+2"], 1],
    ["Ideal gas equation is:", ["PV=nRT", "P/V=nRT", "PT=nRV", "V/T=nR"], 0],
    ["Highest electronegative element is:", ["O", "N", "F", "Cl"], 2],
    ["Geometry of SF6 is:", ["Tetrahedral", "Octahedral", "Square Planar", "Trigonal Bipyramidal"], 1],
    ["Which law states that at constant temp, P is inversely proportional to V?", ["Charle's Law", "Boyle's Law", "Avogadro's Law", "Gay-Lussac's Law"], 1],
    ["Haber process is used for manufacturing:", ["H2SO4", "HNO3", "NH3", "HCl"], 2],
    ["What is the pH of a 10^-8 M HCl solution at 298K?", ["8", "7.02", "6.98", "6"], 2],
    ["Which metal is extracted using the Hall-Heroult process?", ["Fe", "Cu", "Al", "Zn"], 2],
    ["The monomer of Teflon is:", ["Ethene", "Chloroethene", "Tetrafluoroethene", "Propene"], 2],
    ["Vitamin C is also known as:", ["Ascorbic acid", "Citric acid", "Retinol", "Thiamine"], 0],
    ["Reaction of an acid and base is called:", ["Redox", "Neutralization", "Addition", "Elimination"], 1],
    ["Which isomerism is shown by lactic acid?", ["Geometrical", "Optical", "Structural", "Tautomerism"], 1],
    ["Most abundant element in earth's crust is:", ["Fe", "Al", "O", "Si"], 2]
];
jeeChemQ.forEach(q => add('jee', 'chemistry', 'Chemistry', q[0], q[1], q[2]));

const jeeMathQ = [
    ["Derivative of sin(x) is:", ["cos(x)", "-cos(x)", "tan(x)", "-sin(x)"], 0],
    ["Integral of 1/x dx is:", ["ln|x|", "x^2", "-1/x^2", "e^x"], 0],
    ["Value of limit(x->0) sin(x)/x is:", ["0", "1", "Infinity", "-1"], 1],
    ["A matrix A is symmetric if:", ["A = -A^T", "A = A^T", "A = I", "A = 0"], 1],
    ["Roots of x^2 + 1 = 0 are:", ["1, -1", "i, -i", "0, 1", "No roots"], 1],
    ["Distance between (0,0) and (3,4) is:", ["3", "4", "5", "7"], 2],
    ["Number of ways to arrange 3 objects:", ["3", "6", "9", "1"], 1],
    ["Probability of getting a head on a fair coin toss:", ["0", "1", "0.5", "0.25"], 2],
    ["If f(x) = x^3, then f'(2) is:", ["12", "8", "4", "6"], 0],
    ["Equation of a line passing through origin with slope m is:", ["y = mx + c", "y = mx", "x = my", "y = c"], 1],
    ["Sum of an infinite GP with |r| < 1 is:", ["a/(1-r)", "a/(r-1)", "a*r", "Infinity"], 0],
    ["Value of log_10(100) is:", ["1", "2", "10", "100"], 1],
    ["Area under curve y=x from x=0 to 2 is:", ["2", "4", "1", "0"], 0],
    ["i^2 is equal to:", ["1", "-1", "i", "-i"], 1],
    ["Dot product of orthogonal vectors is:", ["1", "-1", "0", "Infinity"], 2]
];
jeeMathQ.forEach(q => add('jee', 'maths', 'Maths', q[0], q[1], q[2]));

const neetPhysQ = [
    ["Unit of capacitance is:", ["Farad", "Henry", "Ohm", "Weber"], 0],
    ["Acceleration due to gravity on earth surface:", ["9.8 m/s^2", "9.8 cm/s^2", "10 km/s^2", "0"], 0],
    ["Which has maximum frequency?", ["Radio waves", "Microwaves", "X-rays", "Gamma rays"], 3],
    ["Ohm's law is:", ["V=IR", "V=I/R", "I=VR", "R=VI"], 0],
    ["Loudness of sound depends on:", ["Frequency", "Amplitude", "Wavelength", "Velocity"], 1],
    ["Device used to step up/down AC voltage:", ["Rectifier", "Amplifier", "Transformer", "Oscillator"], 2],
    ["Energy equivalent of 1 amu is:", ["931.5 MeV", "9.31 MeV", "1 MeV", "93.1 MeV"], 0],
    ["Total internal reflection occurs when light goes from:", ["Rarer to denser", "Denser to rarer", "Vacuum to air", "Air to water"], 1],
    ["Critical angle for diamond is approx:", ["24°", "42°", "90°", "12°"], 0],
    ["Isotopes have same:", ["Mass number", "Neutrons", "Protons", "Nucleons"], 2],
    ["Alpha particle is nucleus of:", ["Hydrogen", "Helium", "Lithium", "Beryllium"], 1],
    ["Force between two point charges is given by:", ["Newton's Law", "Coulomb's Law", "Faraday's Law", "Ampere's Law"], 1],
    ["Electric field inside a hollow conducting sphere is:", ["Zero", "Infinite", "Constant", "Varies with r"], 0],
    ["SI unit of magnetic field is:", ["Tesla", "Gauss", "Weber", "Henry"], 0],
    ["Velocity of electromagnetic waves in vacuum is:", ["c", "c/2", "c/n", "depends on frequency"], 0]
];
neetPhysQ.forEach(q => add('neet', 'physics', 'Physics', q[0], q[1], q[2]));

const neetChemQ = [
    ["Which is the strongest acid?", ["HCl", "HBr", "HI", "HF"], 2],
    ["Oxidation state of Mn in KMnO4 is:", ["+7", "+6", "+5", "+4"], 0],
    ["Process of coating iron with zinc is:", ["Galvanization", "Rusting", "Alloying", "Smelting"], 0],
    ["Baking soda is:", ["Na2CO3", "NaHCO3", "NaOH", "NaCl"], 1],
    ["Catenation property is maximum in:", ["Si", "S", "C", "P"], 2],
    ["General formula of alkanes:", ["CnH2n", "CnH2n+2", "CnH2n-2", "CnHn"], 1],
    ["Which block does transition elements belong to?", ["s-block", "p-block", "d-block", "f-block"], 2],
    ["Noble gas used in advertising signs:", ["He", "Ne", "Ar", "Kr"], 1],
    ["Which is a primary standard?", ["NaOH", "KMnO4", "HCl", "K2Cr2O7"], 3],
    ["Brass is an alloy of:", ["Cu + Zn", "Cu + Sn", "Fe + C", "Pb + Sn"], 0],
    ["Enzyme which converts glucose to ethanol:", ["Zymase", "Invertase", "Maltase", "Diastase"], 0],
    ["Formula of Plaster of Paris:", ["CaSO4.2H2O", "CaSO4.1/2H2O", "MgSO4.7H2O", "CuSO4.5H2O"], 1],
    ["Number of moles of water in 18g is:", ["1", "2", "0.5", "18"], 0],
    ["Which has highest ionization enthalpy?", ["N", "O", "C", "B"], 0],
    ["Most electronegative element:", ["F", "Cl", "O", "N"], 0]
];
neetChemQ.forEach(q => add('neet', 'chemistry', 'Chemistry', q[0], q[1], q[2]));

const neetBioQ = [
    ["Basic unit of life is:", ["Cell", "Tissue", "Organ", "Organism"], 0],
    ["Number of bones in adult human body:", ["206", "300", "208", "210"], 0],
    ["Blood group known as universal donor is:", ["A", "B", "AB", "O"], 3],
    ["DNA stands for:", ["Deoxyribonucleic Acid", "Di-Nucleic Acid", "Deoxynitric Acid", "None"], 0],
    ["Site of protein synthesis in cell:", ["Mitochondria", "Ribosome", "Nucleus", "Lysosome"], 1],
    ["Which pigment gives green color to leaves?", ["Melanin", "Hemoglobin", "Chlorophyll", "Carotene"], 2],
    ["Father of Genetics is:", ["Darwin", "Mendel", "Lamarck", "Pasteur"], 1],
    ["Male reproductive part of a flower:", ["Pistil", "Stamen", "Petal", "Sepal"], 1],
    ["Largest organ in human body:", ["Liver", "Heart", "Skin", "Brain"], 2],
    ["Which vitamin is obtained from sunlight?", ["Vit A", "Vit B", "Vit C", "Vit D"], 3],
    ["Disease caused by Vitamin C deficiency:", ["Scurvy", "Rickets", "Beriberi", "Night blindness"], 0],
    ["Number of chambers in human heart:", ["2", "3", "4", "5"], 2],
    ["Study of tissues is called:", ["Cytology", "Histology", "Pathology", "Ecology"], 1],
    ["Which is the longest bone in human body?", ["Tibia", "Fibula", "Femur", "Humerus"], 2],
    ["Process of cell division in somatic cells:", ["Meiosis", "Mitosis", "Fission", "Budding"], 1]
];
neetBioQ.forEach(q => add('neet', 'biology', 'Biology', q[0], q[1], q[2]));

const fileContent = `const examData = ${JSON.stringify(data, null, 4)};`;
fs.writeFileSync('data.js', fileContent);
console.log('data.js has been generated with 10th grade syllabus exact questions!');
