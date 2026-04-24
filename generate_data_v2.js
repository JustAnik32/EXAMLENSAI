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
        maths: ['Algebra', 'Geometry', 'Calculus'], science: ['Physics', 'Chemistry', 'Biology'],
        sst: ['History', 'Geography', 'Civics'], english: ['Grammar'], it: ['Basics'], hindi: ['Vyakaran'],
        sanskrit: ['Vyakaran'], sanskrit_comm: ['Vyakaran'], physics: ['Mechanics', 'Optics'],
        chemistry: ['Organic', 'Inorganic'], biology: ['Zoology', 'Botany']
    },
    questions: { cbse10: [], jee: [], neet: [] }
};

let qId = 1;
function add(exam, subj, top, text, opts, ans) {
    data.questions[exam].push({ id: qId++, subject: subj, topic: top, difficulty: 'medium', text: text, options: opts, answer: ans });
}

// CBSE English
const engQ = [
    ["He ___ to school every day.", ["go", "goes", "going", "gone"], 1],
    ["I have been living here ___ 2010.", ["since", "for", "from", "to"], 0],
    ["The cat jumped ___ the wall.", ["over", "in", "under", "through"], 0],
    ["She is ___ honest girl.", ["a", "an", "the", "none"], 1],
    ["They ___ completed the work.", ["has", "have", "are", "is"], 1],
    ["Find synonym of 'Happy'", ["Sad", "Joyful", "Angry", "Upset"], 1],
    ["Find antonym of 'Brave'", ["Coward", "Hero", "Bold", "Strong"], 0],
    ["___ you help me with this?", ["Can", "May", "Must", "Ought"], 0],
    ["The book is ___ the table.", ["on", "in", "at", "with"], 0],
    ["Identify the noun: The fast car.", ["The", "fast", "car", "none"], 2],
    ["Plural of 'child' is:", ["childs", "children", "childrens", "child"], 1],
    ["Past tense of 'run' is:", ["running", "ran", "runned", "runs"], 1],
    ["Choose correctly spelled word:", ["Receive", "Recieve", "Receve", "Receiv"], 0],
    ["He is good ___ sports.", ["in", "at", "on", "with"], 1],
    ["A person who teaches is a ___", ["Doctor", "Teacher", "Driver", "Pilot"], 1]
];
engQ.forEach(q => add('cbse10', 'english', 'Grammar', q[0], q[1], q[2]));

// CBSE Science
const sciQ = [
    ["SI unit of force is:", ["Joule", "Newton", "Watt", "Pascal"], 1],
    ["Chemical formula of water is:", ["H2O", "CO2", "O2", "NaCl"], 0],
    ["Powerhouse of the cell is:", ["Nucleus", "Ribosome", "Mitochondria", "Golgi"], 2],
    ["Atomic number of Carbon is:", ["6", "12", "14", "8"], 0],
    ["pH of pure water is:", ["7", "0", "14", "1"], 0],
    ["Speed of light in vacuum is approx:", ["3x10^8 m/s", "3x10^5 m/s", "100 m/s", "0 m/s"], 0],
    ["Gas essential for respiration is:", ["Nitrogen", "Oxygen", "CO2", "Helium"], 1],
    ["Formula for Ozone is:", ["O2", "O", "O3", "O4"], 2],
    ["Acid present in lemon is:", ["Citric acid", "Lactic acid", "Acetic acid", "HCl"], 0],
    ["Human body normal temp is:", ["37°C", "98°C", "100°C", "32°C"], 0],
    ["Nearest planet to Sun is:", ["Venus", "Earth", "Mars", "Mercury"], 3],
    ["Water boils at ___ Celsius.", ["0", "50", "100", "150"], 2],
    ["Symbol of Gold is:", ["Ag", "Au", "Fe", "Cu"], 1],
    ["Device used to measure current:", ["Voltmeter", "Ammeter", "Galvanometer", "Resistor"], 1],
    ["Process by which plants make food:", ["Respiration", "Digestion", "Photosynthesis", "Excretion"], 2]
];
sciQ.forEach(q => add('cbse10', 'science', 'Science', q[0], q[1], q[2]));

// CBSE SST
const sstQ = [
    ["Capital of India is:", ["Mumbai", "Delhi", "Kolkata", "Chennai"], 1],
    ["First war of Indian Independence:", ["1857", "1947", "1757", "1919"], 0],
    ["Who wrote the Indian Constitution?", ["Gandhi", "Nehru", "Ambedkar", "Patel"], 2],
    ["Longest river in the world is:", ["Nile", "Amazon", "Ganga", "Yangtze"], 0],
    ["French revolution started in:", ["1789", "1800", "1600", "1900"], 0],
    ["Total continents on Earth:", ["5", "6", "7", "8"], 2],
    ["World War 2 ended in:", ["1918", "1945", "1939", "1950"], 1],
    ["Highest mountain peak is:", ["K2", "Everest", "Kangchenjunga", "Makalu"], 1],
    ["Currency of Japan is:", ["Yuan", "Yen", "Dollar", "Rupee"], 1],
    ["Who was the first President of India?", ["Rajendra Prasad", "Radhakrishnan", "Zakir Husain", "Kalam"], 0],
    ["Smallest state in India by area:", ["Goa", "Sikkim", "Tripura", "Kerala"], 0],
    ["RTE (Right to Education) act was passed in:", ["2005", "2009", "2010", "2012"], 1],
    ["Largest desert in the world is:", ["Thar", "Gobi", "Sahara", "Kalahari"], 2],
    ["Pink city of India is:", ["Jodhpur", "Jaipur", "Udaipur", "Bikaner"], 1],
    ["National animal of India:", ["Lion", "Tiger", "Elephant", "Leopard"], 1]
];
sstQ.forEach(q => add('cbse10', 'sst', 'History', q[0], q[1], q[2]));

// CBSE Maths
const mathQ = [
    ["Value of pi is approx:", ["3.14", "2.14", "4.14", "1.14"], 0],
    ["Area of a circle is:", ["2*pi*r", "pi*r^2", "pi*d", "4*pi*r^2"], 1],
    ["Square root of 144 is:", ["10", "11", "12", "14"], 2],
    ["Sum of angles in a triangle is:", ["90", "180", "360", "270"], 1],
    ["Solve: 5x = 25. x = ?", ["3", "4", "5", "6"], 2],
    ["What is 15% of 100?", ["15", "10", "5", "20"], 0],
    ["Probability of an impossible event is:", ["1", "0.5", "0", "-1"], 2],
    ["Volume of a cube with side 'a':", ["a^2", "3a", "a^3", "6a^2"], 2],
    ["sin(90°) =", ["0", "1", "0.5", "Not defined"], 1],
    ["Value of 2^3 is:", ["6", "8", "4", "9"], 1],
    ["A polygon with 5 sides is:", ["Hexagon", "Pentagon", "Octagon", "Square"], 1],
    ["Perimeter of a rectangle is:", ["l+b", "2(l+b)", "l*b", "2lb"], 1],
    ["Solve: 10 + 5 * 2 =", ["30", "20", "25", "15"], 1],
    ["LCM of 4 and 6 is:", ["10", "12", "24", "2"], 1],
    ["HCF of 8 and 12 is:", ["2", "4", "8", "24"], 1]
];
mathQ.forEach(q => add('cbse10', 'maths', 'Algebra', q[0], q[1], q[2]));

// CBSE IT
const itQ = [
    ["Shortcut for Copy is:", ["Ctrl+C", "Ctrl+V", "Ctrl+X", "Ctrl+Z"], 0],
    ["Brain of the computer is:", ["RAM", "Monitor", "CPU", "Hard Disk"], 2],
    ["1 Byte = ___ bits", ["4", "8", "16", "32"], 1],
    ["HTML stands for:", ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlink Text Markup Language", "None"], 0],
    ["Shortcut for Paste is:", ["Ctrl+P", "Ctrl+V", "Ctrl+C", "Ctrl+S"], 1],
    ["RAM stands for:", ["Random Access Memory", "Read Access Memory", "Run All Memory", "None"], 0],
    ["Which is an output device?", ["Mouse", "Keyboard", "Monitor", "Microphone"], 2],
    ["Shortcut for Save is:", ["Ctrl+S", "Ctrl+V", "Ctrl+A", "Ctrl+X"], 0],
    ["URL means:", ["Uniform Resource Locator", "Universal Resource Link", "Uniform Read Line", "None"], 0],
    ["Extension of a Word file is:", [".txt", ".docx", ".pdf", ".exe"], 1],
    ["Which is an Operating System?", ["MS Word", "Google Chrome", "Windows", "Python"], 2],
    ["WWW stands for:", ["World Wide Web", "World Web Wide", "Wide World Web", "None"], 0],
    ["Shortcut for Select All is:", ["Ctrl+A", "Ctrl+S", "Ctrl+X", "Ctrl+Z"], 0],
    ["Which is a web browser?", ["Linux", "Windows", "Chrome", "Excel"], 2],
    ["ROM stands for:", ["Read Only Memory", "Random Only Memory", "Run On Memory", "None"], 0]
];
itQ.forEach(q => add('cbse10', 'it', 'Basics', q[0], q[1], q[2]));

// CBSE Hindi
const hinQ = [
    ["'सूर्य' का पर्यायवाची है:", ["चन्द्रमा", "रवि", "तारा", "बादल"], 1],
    ["'रात' का विलोम है:", ["दिन", "शाम", "सुबह", "दोपहर"], 0],
    ["'जल' का पर्यायवाची है:", ["अग्नि", "पानी", "वायु", "धरती"], 1],
    ["'अच्छा' का विलोम है:", ["बुरा", "सुन्दर", "साफ", "सत्य"], 0],
    ["'विद्या+आलय' की संधि है:", ["विद्यलय", "विद्यालय", "विदयालय", "कोई नहीं"], 1],
    ["'आँख का तारा' मुहावरे का अर्थ है:", ["दुश्मन", "बहुत प्यारा", "तारा", "आँख"], 1],
    ["'मित्र' का विलोम है:", ["दोस्त", "शत्रु", "भाई", "सखा"], 1],
    ["'कमल' का पर्यायवाची है:", ["पंकज", "गुलाब", "चमेली", "गेंदा"], 0],
    ["'सुख' का विलोम है:", ["दुःख", "हर्ष", "आनंद", "रोती"], 0],
    ["'आकाश' का पर्यायवाची है:", ["पाताल", "गगन", "नदी", "पहाड़"], 1],
    ["'राजा' का विलोम है:", ["रानी", "रंक", "प्रजा", "सिपाही"], 1],
    ["'नदी' का पर्यायवाची है:", ["सरिता", "सागर", "तालाब", "झील"], 0],
    ["'सत्य' का विलोम है:", ["असत्य", "झूठ", "सच", "धर्म"], 0],
    ["'फूल' का पर्यायवाची है:", ["पत्ता", "पुष्प", "कांटा", "फल"], 1],
    ["'प्रकाश' का विलोम है:", ["अंधकार", "रोशनी", "उजाला", "किरण"], 0]
];
hinQ.forEach(q => add('cbse10', 'hindi', 'Vyakaran', q[0], q[1], q[2]));

// CBSE Sanskrit & Sanskrit Comm (Duplicated for simplicity but unique questions)
const sanQ = [
    ["'बालकः' इति शब्दस्य बहुवचनं किम्?", ["बालकौ", "बालकाः", "बालकम्", "बालकेन"], 1],
    ["'पठति' इति कः लकारः?", ["लट्", "लृट्", "लङ्", "लोट्"], 0],
    ["'अहम्' इति कः पुरुषः?", ["प्रथमः", "मध्यमः", "उत्तमः", "कोऽपि न"], 2],
    ["'गच्छति' इत्यस्य अर्थः कः?", ["He goes", "He comes", "He reads", "He writes"], 0],
    ["'जलम्' इति शब्दस्य लिङ्गं किम्?", ["पुंलिङ्गम्", "स्त्रीलिङ्गम्", "नपुंसकलिङ्गम्", "कोऽपि न"], 2],
    ["'रामः' इति कस्यां विभक्तौ?", ["प्रथमा", "द्वितीया", "तृतीया", "चतुर्थी"], 0],
    ["'खादति' इत्यत्र धातुः कः?", ["खाद्", "खा", "खादत्", "खद्"], 0],
    ["'वृक्षः' इत्यस्य बहुवचनम्?", ["वृक्षौ", "वृक्षाः", "वृक्षम्", "वृक्षेण"], 1],
    ["'अस्ति' इत्यस्य बहुवचनम्?", ["स्तः", "सन्ति", "असि", "अस्मि"], 1],
    ["'सह' इति अव्ययेन सह का विभक्तिः भवति?", ["द्वितीया", "तृतीया", "चतुर्थी", "पञ्चमी"], 1],
    ["'त्वम्' इति शब्दस्य अर्थः कः?", ["I", "You", "He", "She"], 1],
    ["'लिखति' इति कस्य पुरुषस्य रूपम्?", ["प्रथमः", "मध्यमः", "उत्तमः", "सर्वे"], 0],
    ["'ग्रामम्' इति पदे का विभक्तिः?", ["प्रथमा", "द्वितीया", "तृतीया", "चतुर्थी"], 1],
    ["'नदी' शब्दस्य प्रथमा बहुवचनम्?", ["नद्यौ", "नद्यः", "नदीः", "नदीनाम्"], 1],
    ["'सुन्दरः' इति पदस्य विलोमपदं किम्?", ["असुन्दरः", "कुरीपः", "कुरुपः", "मलिनः"], 2]
];
sanQ.forEach(q => add('cbse10', 'sanskrit', 'Vyakaran', q[0], q[1], q[2]));
sanQ.forEach(q => add('cbse10', 'sanskrit_comm', 'Vyakaran', q[0], q[1], q[2]));

// JEE Physics
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

// JEE Chemistry
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

// JEE Maths
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

// NEET Physics (Reusing JEE Physics for simplicity but distinct set theoretically)
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

// NEET Chemistry (Reusing JEE Chem for simplicity)
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

// NEET Biology
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
console.log('data.js has been generated with unique real questions!');
