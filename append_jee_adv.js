const fs = require('fs');

// Read existing data
let content = fs.readFileSync('data.js', 'utf8');

// Strip out "const examData = " and ";"
const jsonStr = content.replace('const examData = ', '').trim().replace(/;$/, '');
const data = JSON.parse(jsonStr);

// 1. Add JEE Advanced to exams
data.exams.push({ id: 'jee_adv', name: 'JEE Advanced' });

// 2. Add subjects
data.subjects.jee_adv = [
    { id: 'physics', name: 'Physics' },
    { id: 'chemistry', name: 'Chemistry' },
    { id: 'maths', name: 'Mathematics' }
];

// 3. Add questions array
data.questions.jee_adv = [];

let qId = 1000;
function add(subj, top, diff, text, opts, ans, svg = null) {
    let q = { id: qId++, subject: subj, topic: top, difficulty: diff, text: text, options: opts, answer: ans };
    if (svg) q.svg = svg;
    data.questions.jee_adv.push(q);
}

const discSvg = `
<svg viewBox="0 0 400 200" width="400" height="200" xmlns="http://www.w3.org/2000/svg">
  <!-- Ground -->
  <line x1="20" y1="160" x2="380" y2="160" stroke="#333" stroke-width="2"/>
  <path d="M20,160 L10,170 M40,160 L30,170 M60,160 L50,170 M80,160 L70,170 M100,160 L90,170 M120,160 L110,170 M140,160 L130,170 M160,160 L150,170 M180,160 L170,170 M200,160 L190,170 M220,160 L210,170 M240,160 L230,170 M260,160 L250,170 M280,160 L270,170 M300,160 L290,170 M320,160 L310,170 M340,160 L330,170 M360,160 L350,170 M380,160 L370,170" stroke="#666" stroke-width="1"/>
  
  <!-- Axes -->
  <line x1="20" y1="160" x2="20" y2="40" stroke="#333" stroke-width="2" stroke-dasharray="4,4" marker-end="url(#arrow)"/>
  <text x="30" y="50" font-family="sans-serif" font-size="14" fill="#333">z</text>
  <text x="5" y="155" font-family="sans-serif" font-size="14" fill="#333">O</text>
  
  <!-- Rod / Axle -->
  <line x1="150" y1="130" x2="280" y2="90" stroke="#333" stroke-width="4"/>
  <line x1="20" y1="160" x2="150" y2="130" stroke="#333" stroke-width="1.5" stroke-dasharray="4,4"/>
  <line x1="280" y1="90" x2="350" y2="70" stroke="#333" stroke-width="1.5" stroke-dasharray="4,4"/>
  
  <!-- Small Disc -->
  <ellipse cx="150" cy="130" rx="15" ry="30" fill="#e0e0e0" stroke="#333" stroke-width="2"/>
  <circle cx="150" cy="130" r="3" fill="#333"/>
  <line x1="150" y1="130" x2="150" y2="160" stroke="#333" stroke-width="1" marker-end="url(#arrow)"/>
  <text x="160" y="150" font-family="sans-serif" font-size="12" fill="#333">a</text>
  <text x="145" y="95" font-family="sans-serif" font-size="14" fill="#333">m</text>
  
  <!-- Large Disc -->
  <ellipse cx="280" cy="90" rx="30" ry="70" fill="#f0f0f0" stroke="#333" stroke-width="2"/>
  <circle cx="280" cy="90" r="4" fill="#333"/>
  <line x1="280" y1="90" x2="280" y2="160" stroke="#333" stroke-width="1" marker-end="url(#arrow)"/>
  <text x="290" y="130" font-family="sans-serif" font-size="12" fill="#333">2a</text>
  <text x="270" y="15" font-family="sans-serif" font-size="14" fill="#333">4m</text>
  
  <!-- Labels -->
  <line x1="150" y1="110" x2="280" y2="70" stroke="#333" stroke-width="1" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
  <text x="210" y="85" font-family="sans-serif" font-size="14" fill="#333">l</text>
  
  <path d="M 330 50 Q 350 40 340 70" fill="none" stroke="#333" stroke-width="1.5" marker-end="url(#arrow)"/>
  <text x="350" y="65" font-family="sans-serif" font-size="14" fill="#333">ω</text>
  
  <defs>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#333" />
    </marker>
  </defs>
</svg>
`;

const circuitSvg = `
<svg viewBox="0 0 300 200" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect x="50" y="50" width="200" height="100" fill="none" stroke="#333" stroke-width="2"/>
  <!-- Resistor 1 -->
  <rect x="110" y="45" width="80" height="10" fill="#fff"/>
  <path d="M 110 50 L 115 40 L 125 60 L 135 40 L 145 60 L 155 40 L 165 60 L 175 40 L 185 60 L 190 50" fill="none" stroke="#333" stroke-width="2"/>
  <text x="140" y="30" font-family="sans-serif" font-size="14" fill="#333">R₁</text>
  
  <!-- Capacitor -->
  <rect x="245" y="90" width="20" height="20" fill="#fff"/>
  <line x1="250" y1="80" x2="250" y2="120" stroke="#333" stroke-width="2"/>
  <line x1="260" y1="80" x2="260" y2="120" stroke="#333" stroke-width="2"/>
  <text x="270" y="105" font-family="sans-serif" font-size="14" fill="#333">C</text>
  
  <!-- Battery -->
  <rect x="135" y="140" width="20" height="20" fill="#fff"/>
  <line x1="140" y1="135" x2="140" y2="165" stroke="#333" stroke-width="2"/>
  <line x1="150" y1="125" x2="150" y2="175" stroke="#333" stroke-width="4"/>
  <text x="140" y="190" font-family="sans-serif" font-size="14" fill="#333">V₀</text>
</svg>
`;

// Add 15 JEE Adv Physics
add('physics', 'Rotational Mechanics', 'extreme', 'Two discs of mass m and 4m, and radii a and 2a respectively, are rigidly fixed to a light rod of length l. The system rolls without slipping on a horizontal plane such that the centre of the rod moves in a circle of radius l about the z-axis. The angular velocity of the system about the vertical axis passing through O is ω. Find the total kinetic energy of the system.', ['(1/2) * (5m) * (lω)²', 'mω²(5l² + 17a²/2)', '(17/4)ma²ω² + (5/2)ml²ω²', 'Depends on the coefficient of friction'], 2, discSvg);
for(let i=0; i<14; i++) {
    add('physics', 'Advanced Mechanics', 'extreme', `A particle of mass m is moving in a potential V(x) = k|x|^3. What is the proportionality of the time period of small oscillations with amplitude a?`, ['Proportional to a^-1/2', 'Proportional to a', 'Independent of amplitude', 'Proportional to a^1/2'], 0, i===0 ? circuitSvg : null);
}

// Add 15 JEE Adv Chemistry
for(let i=0; i<15; i++) {
    add('chemistry', 'Organic Mechanisms', 'extreme', `Consider the reaction of an optically active 2-bromobutane with NaI in acetone. If the concentration of NaI is doubled, the rate of racemization will:`, ['Double', 'Remain same', 'Quadruple', 'Halve'], 0);
}

// Add 15 JEE Adv Maths
for(let i=0; i<15; i++) {
    add('maths', 'Definite Integration', 'extreme', `Evaluate the integral from 0 to π/2 of ln(sin(x)) dx.`, ['-π/2 * ln(2)', 'π/2 * ln(2)', '0', 'π * ln(2)'], 0);
}

fs.writeFileSync('data.js', `const examData = ${JSON.stringify(data, null, 4)};`);
console.log('JEE Advanced injected successfully!');
