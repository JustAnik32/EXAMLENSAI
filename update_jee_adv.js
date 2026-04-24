const fs = require('fs');

let content = fs.readFileSync('data.js', 'utf8');
const jsonStr = content.replace('const examData = ', '').trim().replace(/;$/, '');
const data = JSON.parse(jsonStr);

// Reset JEE Adv questions
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
  <defs><marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#333" /></marker></defs>
</svg>`;

const circuitSvg = `
<svg viewBox="0 0 300 200" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect x="50" y="50" width="200" height="100" fill="none" stroke="#333" stroke-width="2"/>
  <!-- Resistor -->
  <rect x="110" y="45" width="80" height="10" fill="#fff"/>
  <path d="M 110 50 L 115 40 L 125 60 L 135 40 L 145 60 L 155 40 L 165 60 L 175 40 L 185 60 L 190 50" fill="none" stroke="#333" stroke-width="2"/>
  <text x="140" y="30" font-family="sans-serif" font-size="14" fill="#333">R</text>
  <!-- Inductor -->
  <rect x="245" y="80" width="20" height="40" fill="#fff"/>
  <path d="M 250 80 C 270 80, 270 90, 250 90 C 270 90, 270 100, 250 100 C 270 100, 270 110, 250 110 C 270 110, 270 120, 250 120" fill="none" stroke="#333" stroke-width="2"/>
  <text x="270" y="105" font-family="sans-serif" font-size="14" fill="#333">L</text>
  <!-- Battery -->
  <rect x="135" y="140" width="20" height="20" fill="#fff"/>
  <line x1="140" y1="135" x2="140" y2="165" stroke="#333" stroke-width="2"/>
  <line x1="150" y1="125" x2="150" y2="175" stroke="#333" stroke-width="4"/>
  <text x="140" y="190" font-family="sans-serif" font-size="14" fill="#333">E</text>
</svg>`;

// PHYSICS (15 Unique Questions)
const physQs = [
    ['Rotational Mechanics', 'Two discs of mass m and 4m, and radii a and 2a respectively, are rigidly fixed to a light rod of length l. The system rolls without slipping on a horizontal plane such that the centre of the rod moves in a circle of radius l about the z-axis. The angular velocity of the system about the vertical axis passing through O is ω. Find the total kinetic energy of the system.', ['(1/2) * (5m) * (lω)²', 'mω²(5l² + 17a²/2)', '(17/4)ma²ω² + (5/2)ml²ω²', 'Depends on the coefficient of friction'], 1, discSvg],
    ['Electromagnetism', 'In the given LR circuit, an ideal battery of EMF E is connected. If the switch is closed at t=0, the current in the circuit at time t is given by:', ['(E/R)(1 - e^(-Rt/L))', '(E/R)e^(-Rt/L)', '(E/L)t', '(E/R)(1 - e^(-Lt/R))'], 0, circuitSvg],
    ['Mechanics', 'A particle of mass m is moving in a 1D potential V(x) = k|x|^3. If the particle oscillates with an amplitude A, the time period of oscillation is proportional to:', ['A', 'A^(1/2)', 'A^(-1/2)', 'A^(-1)'], 2, null],
    ['Thermodynamics', 'One mole of an ideal monoatomic gas undergoes a process described by P^2 V^3 = constant. The molar heat capacity of the gas in this process is:', ['R/2', '3R/2', '5R/2', '2R'], 0, null],
    ['Optics', 'A point object is placed at a distance of 20 cm from a convex lens of focal length 10 cm. If the lens is cut into two equal halves along the principal axis and the two halves are separated by a distance of 2 mm, find the distance between the two images formed.', ['2 mm', '3 mm', '4 mm', '6 mm'], 2, null],
    ['Modern Physics', 'If the de Broglie wavelength of an electron is equal to the wavelength of a photon, then the ratio of kinetic energy of the electron to the energy of the photon is proportional to (v is velocity of electron, c is speed of light):', ['v/c', 'c/v', 'v^2/c^2', 'c^2/v^2'], 0, null],
    ['Fluid Mechanics', 'A small spherical ball of density ρ and radius r is dropped into a viscous liquid of density σ (ρ > σ) and coefficient of viscosity η. The terminal velocity of the ball is proportional to:', ['r', 'r^2', '1/r', '1/r^2'], 1, null],
    ['Electrostatics', 'A solid conducting sphere of radius R has a charge Q. The electric field at a distance r (r < R) from the center is:', ['kQ/r^2', 'kQ/R^2', 'Zero', 'kQr/R^3'], 2, null],
    ['Wave Optics', 'In a YDSE, if the slit separation is doubled and the distance to the screen is halved, the fringe width becomes:', ['Double', 'Half', 'One-fourth', 'Four times'], 2, null],
    ['Magnetism', 'A charged particle enters a uniform magnetic field perpendicularly. The path of the particle is a:', ['Straight line', 'Parabola', 'Circle', 'Helix'], 2, null],
    ['Gravitation', 'If the radius of the Earth shrinks by 1% while its mass remains constant, the acceleration due to gravity on its surface will:', ['Increase by 1%', 'Decrease by 1%', 'Increase by 2%', 'Decrease by 2%'], 2, null],
    ['SHM', 'A simple pendulum has a time period T. If it is taken into an elevator accelerating upwards with acceleration g/2, the new time period will be:', ['T * sqrt(2/3)', 'T * sqrt(3/2)', 'T/2', '2T'], 0, null],
    ['Kinematics', 'A projectile is fired with velocity u at an angle θ. The radius of curvature of its trajectory at the highest point is:', ['u^2 cos^2(θ) / g', 'u^2 sin^2(θ) / g', 'u^2 / g', 'u^2 cos(θ) / g'], 0, null],
    ['Work Power Energy', 'A chain of length L and mass M is held on a frictionless table with L/n of its length hanging over the edge. The work done in pulling the chain back onto the table is:', ['MgL / (2n^2)', 'MgL / n^2', 'MgL / (2n)', 'MgL / n'], 0, null],
    ['Current Electricity', 'The equivalent resistance of an infinite ladder of 1 ohm resistors is R. R is:', ['(1 + sqrt(5))/2', '(1 - sqrt(5))/2', 'sqrt(5)', '1'], 0, null]
];
physQs.forEach(q => add('physics', q[0], 'extreme', q[1], q[2], q[3], q[4]));

// CHEMISTRY (15 Unique Questions)
const chemQs = [
    ['Organic Mechanisms', 'In the electrophilic aromatic substitution of toluene with Cl2/FeCl3, the major product is formed due to which effect of the methyl group?', ['-I effect', '+I and hyperconjugation', '-M effect', '+M effect'], 1, null],
    ['Coordination Compounds', 'The hybridization and magnetic nature of [Fe(CN)6]3- are:', ['sp3d2, diamagnetic', 'd2sp3, paramagnetic', 'sp3d2, paramagnetic', 'd2sp3, diamagnetic'], 1, null],
    ['Chemical Kinetics', 'For a first-order reaction, the time required for 99.9% completion is approximately how many times the half-life?', ['10 times', '3.3 times', '6.6 times', '20 times'], 0, null],
    ['Thermodynamics', 'For an ideal gas undergoing reversible adiabatic expansion, the relation between T and V is:', ['TV^(γ-1) = const', 'T^(γ-1)V = const', 'TV^γ = const', 'T^γ V = const'], 0, null],
    ['Electrochemistry', 'The standard reduction potential of Li+/Li is -3.05V, implying that Li is:', ['A strong oxidizing agent', 'A strong reducing agent', 'A weak reducing agent', 'Chemically inert'], 1, null],
    ['Atomic Structure', 'The number of radial nodes for a 4d orbital is:', ['0', '1', '2', '3'], 1, null],
    ['Equilibrium', 'According to Le Chatelier’s principle, increasing the pressure in the reaction N2(g) + 3H2(g) ⇌ 2NH3(g) will:', ['Shift equilibrium forward', 'Shift equilibrium backward', 'Have no effect', 'Decrease Kp'], 0, null],
    ['Biomolecules', 'Which of the following is an essential amino acid?', ['Glycine', 'Alanine', 'Valine', 'Serine'], 2, null],
    ['Solid State', 'The packing efficiency of a Face Centered Cubic (FCC) unit cell is:', ['52.4%', '68%', '74%', '100%'], 2, null],
    ['Polymers', 'Nylon 6,6 is a copolymer of:', ['Adipic acid and hexamethylenediamine', 'Terephthalic acid and ethylene glycol', 'Phenol and formaldehyde', 'Caprolactam'], 0, null],
    ['P-Block Elements', 'The structure of XeO3 is:', ['Planar', 'Pyramidal', 'Tetrahedral', 'T-shaped'], 1, null],
    ['S-Block Elements', 'Which alkali metal forms only a normal oxide (M2O) on heating in excess of air?', ['Li', 'Na', 'K', 'Rb'], 0, null],
    ['Solutions', 'An azeotropic mixture of two liquids boils at a temperature lower than either of them when it:', ['Shows positive deviation from Raoult\'s Law', 'Shows negative deviation', 'Is an ideal solution', 'Is saturated'], 0, null],
    ['Surface Chemistry', 'In the coagulation of a positive sol, the flocculating power is maximum for:', ['Cl-', 'SO4^2-', 'PO4^3-', '[Fe(CN)6]^4-'], 3, null],
    ['Aldehydes & Ketones', 'Cannizzaro reaction is NOT given by:', ['Formaldehyde', 'Acetaldehyde', 'Benzaldehyde', 'Trichloroacetaldehyde'], 1, null]
];
chemQs.forEach(q => add('chemistry', q[0], 'extreme', q[1], q[2], q[3], q[4]));

// MATHS (15 Unique Questions)
const mathQs = [
    ['Definite Integration', 'The value of the integral from 0 to π/2 of ln(sin(x)) dx is:', ['-π/2 * ln(2)', 'π/2 * ln(2)', '0', 'π * ln(2)'], 0, null],
    ['Complex Numbers', 'If ω is a complex cube root of unity, then the value of (1 - ω + ω^2)^5 + (1 + ω - ω^2)^5 is:', ['32', '-32', '64', '-64'], 0, null],
    ['Matrices', 'If A is a 3x3 orthogonal matrix, then the determinant of A is:', ['1', '-1', '±1', '0'], 2, null],
    ['Probability', 'A pair of fair dice is rolled. Given that the sum is 8, what is the probability that one of the dice shows a 3?', ['1/5', '2/5', '1/6', '2/36'], 1, null],
    ['Conic Sections', 'The locus of the point of intersection of perpendicular tangents to the parabola y^2 = 4ax is:', ['x = a', 'x = -a', 'y = a', 'y = -a'], 1, null],
    ['Vectors', 'If a and b are unit vectors and θ is the angle between them, then |a - b| is:', ['2 sin(θ/2)', '2 cos(θ/2)', 'sin(θ/2)', 'cos(θ/2)'], 0, null],
    ['Differential Equations', 'The solution to the differential equation dy/dx + y = e^(-x) is:', ['y = (x+c)e^(-x)', 'y = ce^(-x)', 'y = (x+c)e^x', 'y = e^(-x)'], 0, null],
    ['Application of Derivatives', 'The maximum value of the function f(x) = x^(1/x) for x > 0 is:', ['e', 'e^(1/e)', '1/e', '1'], 1, null],
    ['3D Geometry', 'The shortest distance between the lines (x-1)/2 = y/3 = (z-1)/4 and x/1 = (y-1)/2 = z/3 is:', ['1/√6', '2/√6', '1/√29', '1/√14'], 0, null],
    ['Binomial Theorem', 'The coefficient of x^5 in the expansion of (1 + x + x^2)^4 is:', ['10', '12', '16', '20'], 1, null],
    ['Trigonometry', 'The general solution of the equation sin(x) + cos(x) = √2 is:', ['x = 2nπ + π/4', 'x = nπ + π/4', 'x = 2nπ - π/4', 'x = nπ - π/4'], 0, null],
    ['Limits', 'The value of limit(x->0) [sin(x) - x]/x^3 is:', ['1/6', '-1/6', '1/3', '-1/3'], 1, null],
    ['Continuity & Differentiability', 'The function f(x) = |x - 1| + |x - 2| is not differentiable at:', ['x=1 only', 'x=2 only', 'x=1 and x=2', 'Nowhere'], 2, null],
    ['Area under curves', 'The area bounded by the curve y = ln(x), the x-axis, and the ordinate x=e is:', ['1', 'e', 'e-1', '1/e'], 0, null],
    ['Sequence & Series', 'The sum of the infinite series 1/2 + 2/4 + 3/8 + 4/16 + ... is:', ['1', '2', '3', '4'], 1, null]
];
mathQs.forEach(q => add('maths', q[0], 'extreme', q[1], q[2], q[3], q[4]));

fs.writeFileSync('data.js', `const examData = ${JSON.stringify(data, null, 4)};`);
console.log('JEE Advanced successfully updated with 45 unique questions!');
