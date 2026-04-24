const fs = require('fs');

const data = {
    exams: [
        { id: 'cbse10', name: 'CBSE Class 10' },
        { id: 'jee', name: 'JEE Main' },
        { id: 'neet', name: 'NEET UG' }
    ],
    subjects: {
        cbse10: [
            { id: 'english', name: 'English' },
            { id: 'science', name: 'Science' },
            { id: 'sst', name: 'Social Science' },
            { id: 'maths', name: 'Mathematics' },
            { id: 'it', name: 'Information Technology (IT)' },
            { id: 'hindi', name: 'Hindi' },
            { id: 'sanskrit_comm', name: 'Sanskrit Communicative' },
            { id: 'sanskrit', name: 'Sanskrit' }
        ],
        jee: [
            { id: 'physics', name: 'Physics' },
            { id: 'chemistry', name: 'Chemistry' },
            { id: 'maths', name: 'Mathematics' }
        ],
        neet: [
            { id: 'physics', name: 'Physics' },
            { id: 'chemistry', name: 'Chemistry' },
            { id: 'biology', name: 'Biology' }
        ]
    },
    topics: {
        maths: ['Algebra', 'Calculus', 'Geometry', 'Trigonometry', 'Coordinate Geometry'],
        science: ['Physics', 'Chemistry', 'Biology', 'Carbon Compounds', 'Light Reflection'],
        sst: ['History', 'Geography', 'Political Science', 'Economics'],
        english: ['Grammar', 'Literature', 'Reading'],
        it: ['Employability Skills', 'Web Applications', 'Word Processing'],
        hindi: ['Vyakaran', 'Sahitya'],
        sanskrit: ['Vyakaran', 'Sahitya'],
        sanskrit_comm: ['Vyakaran', 'Sahitya'],
        physics: ['Mechanics', 'Thermodynamics', 'Electromagnetism', 'Optics', 'Modern Physics'],
        chemistry: ['Organic', 'Inorganic', 'Physical', 'Coordination Compounds'],
        biology: ['Zoology', 'Botany', 'Human Physiology', 'Genetics']
    },
    questions: { cbse10: [], jee: [], neet: [] }
};

let qId = 1;

function createQuestions(exam, subject, templates) {
    for (let i = 0; i < 15; i++) {
        const t = templates[i % templates.length];
        data.questions[exam].push({
            id: qId++,
            subject: subject,
            topic: t.topic,
            difficulty: ['easy', 'medium', 'hard'][Math.floor(Math.random() * 3)],
            text: t.text.replace('{n}', i + 1),
            options: t.options,
            answer: t.answer
        });
    }
}

// CBSE 10
createQuestions('cbse10', 'maths', [
    { topic: 'Trigonometry', text: 'Evaluate: sin²(30°) + cos²(30°) - {n}?', options: ['1-{n}', '0', '{n}', '-{n}'], answer: 0 },
    { topic: 'Algebra', text: 'Find the roots of x² - 5x + {n} = 0 (assuming real roots)', options: ['Formula based', 'Cannot be determined', 'Complex', 'Real'], answer: 0 },
    { topic: 'Geometry', text: 'In a right triangle, hypotenuse squared is equal to sum of squares of other two sides. What is this theorem?', options: ['Thales', 'Pythagoras', 'Euclid', 'Newton'], answer: 1 }
]);
createQuestions('cbse10', 'science', [
    { topic: 'Light Reflection', text: 'If an object is placed at C in front of a concave mirror, the image is formed at:', options: ['F', 'C', 'Infinity', 'Between F and C'], answer: 1 },
    { topic: 'Chemistry', text: 'The functional group -CHO represents:', options: ['Alcohol', 'Ketone', 'Aldehyde', 'Carboxylic Acid'], answer: 2 },
    { topic: 'Biology', text: 'The breakdown of pyruvate to give carbon dioxide, water and energy takes place in:', options: ['Cytoplasm', 'Mitochondria', 'Chloroplast', 'Nucleus'], answer: 1 }
]);
createQuestions('cbse10', 'english', [
    { topic: 'Grammar', text: 'Choose the correct form: He ___ to the market yesterday.', options: ['goes', 'went', 'gone', 'going'], answer: 1 },
    { topic: 'Literature', text: 'Who is the author of "A Letter to God"?', options: ['G.L. Fuentes', 'Nelson Mandela', 'Liam O\'Flaherty', 'Roald Dahl'], answer: 0 }
]);
createQuestions('cbse10', 'sst', [
    { topic: 'History', text: 'When did the French Revolution start?', options: ['1789', '1776', '1804', '1815'], answer: 0 },
    { topic: 'Geography', text: 'Which soil is best for cotton?', options: ['Red', 'Alluvial', 'Black', 'Laterite'], answer: 2 }
]);
createQuestions('cbse10', 'it', [
    { topic: 'Web Applications', text: 'Which language styles a webpage?', options: ['HTML', 'CSS', 'JavaScript', 'Python'], answer: 1 },
    { topic: 'Word Processing', text: 'Shortcut for Undo is:', options: ['Ctrl+C', 'Ctrl+V', 'Ctrl+Y', 'Ctrl+Z'], answer: 3 }
]);
createQuestions('cbse10', 'hindi', [
    { topic: 'Vyakaran', text: '"कमल" का पर्यायवाची है:', options: ['जलज', 'बादल', 'आकाश', 'पृथ्वी'], answer: 0 }
]);
createQuestions('cbse10', 'sanskrit', [
    { topic: 'Vyakaran', text: '"रामः" शब्दस्य तृतीया-एकवचनं किम्?', options: ['रामेण', 'रामाय', 'रामात्', 'रामस्य'], answer: 0 }
]);
createQuestions('cbse10', 'sanskrit_comm', [
    { topic: 'Vyakaran', text: '"पठति" इति पदे कः लकारः?', options: ['लृट् लकारः', 'लङ् लकारः', 'लट् लकारः', 'लोट् लकारः'], answer: 2 }
]);

// JEE
createQuestions('jee', 'maths', [{ topic: 'Calculus', text: 'Integral of x*e^x dx is:', options: ['x e^x - e^x', 'e^x', 'x e^x', 'x^2 e^x'], answer: 0 }]);
createQuestions('jee', 'physics', [{ topic: 'Mechanics', text: 'Moment of inertia of a solid sphere is:', options: ['2/5 MR²', '2/3 MR²', 'MR²', '1/2 MR²'], answer: 0 }]);
createQuestions('jee', 'chemistry', [{ topic: 'Organic', text: 'Which is most stable carbocation?', options: ['Primary', 'Secondary', 'Tertiary', 'Methyl'], answer: 2 }]);

// NEET
createQuestions('neet', 'biology', [{ topic: 'Human Physiology', text: 'Largest gland in human body:', options: ['Liver', 'Pancreas', 'Thyroid', 'Pituitary'], answer: 0 }]);
createQuestions('neet', 'physics', [{ topic: 'Optics', text: 'Myopia is corrected by:', options: ['Convex lens', 'Concave lens', 'Cylindrical lens', 'Bifocal lens'], answer: 1 }]);
createQuestions('neet', 'chemistry', [{ topic: 'Inorganic', text: 'Shape of XeF4 is:', options: ['Tetrahedral', 'Square planar', 'Octahedral', 'Pyramidal'], answer: 1 }]);

const fileContent = `const examData = ${JSON.stringify(data, null, 4)};`;
fs.writeFileSync('data.js', fileContent);
console.log('data.js has been generated successfully with 15 questions per subject.');
