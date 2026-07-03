// State Management
let currentGrade = null;
let currentSubject = null;
let currentLesson = null;
let userPoints = 0;
let currentProblem = null;

// Comprehensive Curriculum Data (Full Version)
const CURRICULUM = {
    'pre-k': {
        title: 'Pre-K (Ages 3-4)',
        subjects: [
            {
                id: 'math-basics',
                name: 'Math Basics',
                icon: '🔢',
                lessons: [
                    {
                        id: 'counting-1-10',
                        title: 'Counting to 10',
                        duration: '8 min',
                        objectives: ['Count objects up to 10', 'Recognize numerals 1-10', 'One-to-one correspondence'],
                        transcript: 'Hello friends! Today we will learn to count from 1 to 10. Let\'s count some apples together! One apple, two apples...',
                        type: 'counting',
                        resources: ['Number Chart 1-10', 'Counting Songs']
                    },
                    {
                        id: 'shapes-colors',
                        title: 'Shapes & Colors',
                        duration: '10 min',
                        objectives: ['Identify circle, square, triangle', 'Name basic colors', 'Sort by attributes'],
                        transcript: 'Look at all the colorful shapes! Can you find the red circle? Shapes are everywhere!',
                        type: 'shape-identification',
                        resources: ['Shape Flashcards', 'Color Sorting Game']
                    }
                ]
            },
            {
                id: 'literacy',
                name: 'Early Literacy',
                icon: '📚',
                lessons: [
                    {
                        id: 'alphabet-a-m',
                        title: 'Alphabet A-M',
                        duration: '12 min',
                        objectives: ['Recognize letters A-M', 'Letter sounds', 'Trace letters'],
                        transcript: 'A is for Apple, B is for Ball. Let\'s sing the ABC song!',
                        type: 'letter-recognition',
                        resources: ['Alphabet Song', 'Letter Tracing Sheets']
                    }
                ]
            }
        ]
    },
    'kindergarten': {
        title: 'Kindergarten (Ages 5-6)',
        subjects: [
            {
                id: 'math-k',
                name: 'Kindergarten Math',
                icon: '➕',
                lessons: [
                    {
                        id: 'counting-100',
                        title: 'Counting to 100',
                        duration: '15 min',
                        objectives: ['Count by 1s to 100', 'Count by 10s', 'Read numbers to 20'],
                        transcript: 'We can count all the way to 100! Let\'s practice counting by tens. 10, 20, 30...',
                        type: 'number-sequence',
                        resources: ['100 Chart', 'Skip Counting Video']
                    },
                    {
                        id: 'addition-basics',
                        title: 'Simple Addition',
                        duration: '12 min',
                        objectives: ['Understand adding as putting together', 'Add within 10', 'Use objects to add'],
                        transcript: 'If I have 2 cookies and get 1 more, how many do I have? Let\'s add them up!',
                        type: 'addition',
                        resources: ['Addition Mat', 'Story Problems']
                    }
                ]
            },
            {
                id: 'reading-k',
                name: 'Reading & Phonics',
                icon: '🔤',
                lessons: [
                    {
                        id: 'phonics-blends',
                        title: 'Beginning Blends',
                        duration: '10 min',
                        objectives: ['Identify bl, cl, fl sounds', 'Blend sounds to read words', 'Rhyming words'],
                        transcript: 'Listen to the sound "bl". Blue, Block, Blast. Can you hear it?',
                        type: 'phonics',
                        resources: ['Word Family Sort', 'Decodable Books']
                    }
                ]
            }
        ]
    },
    'grade-1': {
        title: '1st Grade (Ages 6-7)',
        subjects: [
            {
                id: 'math-1',
                name: '1st Grade Math',
                icon: '📐',
                lessons: [
                    {
                        id: 'place-value',
                        title: 'Place Value: Tens & Ones',
                        duration: '15 min',
                        standard: 'CCSS.MATH.CONTENT.1.NBT.B.2',
                        objectives: [
                            'Understand that two digits represent tens and ones',
                            'Compose and decompose numbers 11-19',
                            'Identify value of digits in 2-digit numbers'
                        ],
                        transcript: 'Welcome to Place Value! In the number 24, the 2 stands for 2 tens (20) and the 4 stands for 4 ones. Let\'s build numbers with base-ten blocks!',
                        type: 'place-value',
                        resources: ['Base-Ten Blocks Virtual Manipulative', 'Place Value Chart', 'Expanded Form Worksheet']
                    },
                    {
                        id: 'skip-counting',
                        title: 'Skip Counting',
                        duration: '12 min',
                        standard: 'CCSS.MATH.CONTENT.1.NBT.A.1',
                        objectives: [
                            'Count forward by 2s, 5s, and 10s',
                            'Identify patterns on a hundreds chart',
                            'Connect skip counting to multiplication foundations'
                        ],
                        transcript: 'Skip counting helps us count faster! Let\'s count by 5s: 5, 10, 15, 20... Notice the pattern?',
                        type: 'skip-counting',
                        resources: ['Hundreds Chart', 'Skip Counting Songs', 'Number Line Activity']
                    },
                    {
                        id: 'add-sub-20',
                        title: 'Add & Subtract within 20',
                        duration: '18 min',
                        standard: 'CCSS.MATH.CONTENT.1.OA.C.6',
                        objectives: [
                            'Fluently add and subtract within 10',
                            'Use strategies like making ten and counting on',
                            'Solve word problems within 20'
                        ],
                        transcript: 'To solve 8 + 5, we can make a ten! Take 2 from the 5 to make 8 into 10. Now we have 10 + 3 = 13.',
                        type: 'arithmetic',
                        resources: ['Fact Family Triangles', 'Number Bond Mats', 'Strategy Posters']
                    },
                    {
                        id: 'telling-time',
                        title: 'Telling Time',
                        duration: '15 min',
                        standard: 'CCSS.MATH.CONTENT.1.MD.B.3',
                        objectives: [
                            'Tell time to the hour and half-hour',
                            'Draw hands on an analog clock',
                            'Connect digital and analog time'
                        ],
                        transcript: 'The short hand is the hour hand. The long hand is the minute hand. When the long hand is on 6, it is half-past!',
                        type: 'time',
                        resources: ['Practice Clock', 'Daily Schedule Activity', 'Time Matching Game']
                    },
                    {
                        id: 'fractions-intro',
                        title: 'Intro to Fractions',
                        duration: '14 min',
                        standard: 'CCSS.MATH.CONTENT.1.G.A.3',
                        objectives: [
                            'Partition circles and rectangles into halves and fourths',
                            'Describe shares using words "halves", "fourths"',
                            'Understand that decomposing into more equal shares creates smaller shares'
                        ],
                        transcript: 'If we cut this pizza into two equal pieces, each piece is a half. If we cut it into four, each is a fourth!',
                        type: 'fractions',
                        resources: ['Fraction Circles', 'Paper Folding Activity', 'Real-world Fraction Examples']
                    },
                    {
                        id: 'geometry-3d',
                        title: '3D Shapes',
                        duration: '12 min',
                        standard: 'CCSS.MATH.CONTENT.1.G.A.2',
                        objectives: [
                            'Identify cubes, spheres, cylinders, and cones',
                            'Describe attributes (faces, edges, vertices)',
                            'Find 3D shapes in the real world'
                        ],
                        transcript: 'A sphere rolls because it has no flat faces. A cube has 6 square faces. Let\'s look around the room for shapes!',
                        type: 'geometry',
                        resources: ['3D Shape Nets', 'Shape Hunt Checklist', 'Building Blocks Activity']
                    }
                ]
            },
            {
                id: 'ela-1',
                name: 'Reading & Writing',
                icon: '✏️',
                lessons: [
                    {
                        id: 'phonics-advanced',
                        title: 'Advanced Phonics',
                        duration: '15 min',
                        standard: 'CCSS.ELA-LITERACY.RF.1.3',
                        objectives: [
                            'Know spelling-sound correspondences for common consonant digraphs',
                            'Decode regularly spelled one-syllable words',
                            'Identify silent \'e\' patterns'
                        ],
                        transcript: 'Today we learn about "Silent E". It makes the vowel say its name! Example: Cap becomes Cape.',
                        type: 'phonics',
                        resources: ['Word Sort Cards', 'Decodable Passages', 'Phonics Rules Anchor Chart']
                    },
                    {
                        id: 'story-elements',
                        title: 'Story Elements',
                        duration: '18 min',
                        standard: 'CCSS.ELA-LITERACY.RL.1.3',
                        objectives: [
                            'Describe characters, settings, and major events',
                            'Use key details to retell a story',
                            'Identify the problem and solution'
                        ],
                        transcript: 'Every story has characters (who), setting (where), and plot (what happened). Let\'s analyze our story.',
                        type: 'comprehension',
                        resources: ['Story Map Graphic Organizer', 'Character Trait List', 'Retelling Rubric']
                    },
                    {
                        id: 'writing-opinion',
                        title: 'Opinion Writing',
                        duration: '20 min',
                        standard: 'CCSS.ELA-LITERACY.W.1.1',
                        objectives: [
                            'Write opinion pieces introducing a topic',
                            'State an opinion and supply a reason',
                            'Use concluding words'
                        ],
                        transcript: 'What is your favorite animal? Tell us why! Start with "I think..." and give a reason.',
                        type: 'writing',
                        resources: ['Opinion Writing Template', 'Transition Words List', 'Peer Review Checklist']
                    }
                ]
            },
            {
                id: 'science-1',
                name: 'Science Explorers',
                icon: '🔬',
                lessons: [
                    {
                        id: 'light-sound',
                        title: 'Light & Sound Waves',
                        duration: '15 min',
                        standard: 'NGSS 1-PS4-1',
                        objectives: [
                            'Plan investigations showing vibrating materials make sound',
                            'Observe that light enables vision',
                            'Test effects of placing objects in light path'
                        ],
                        transcript: 'Sound is made by vibrations! Touch your throat while humming. Light travels in straight lines until it hits something.',
                        type: 'inquiry',
                        resources: ['Tuning Fork Demo', 'Shadow Puppet Kit', 'Periscope Build Guide']
                    },
                    {
                        id: 'plant-structures',
                        title: 'Plant Structures',
                        duration: '14 min',
                        standard: 'NGSS 1-LS1-1',
                        objectives: [
                            'Design solution to human problem mimicking plant parts',
                            'Identify roots, stems, leaves, flowers',
                            'Understand function of each part'
                        ],
                        transcript: 'Plants have special parts. Roots drink water. Leaves catch sunlight. Engineers copy plants to make new inventions!',
                        type: 'biomimicry',
                        resources: ['Plant Diagram', 'Nature Walk Journal', 'Invention Sketch Pad']
                    }
                ]
            },
            {
                id: 'social-studies-1',
                name: 'Social Studies',
                icon: '🌍',
                lessons: [
                    {
                        id: 'map-skills',
                        title: 'Map Skills',
                        duration: '15 min',
                        standard: 'NCSS Theme 3',
                        objectives: [
                            'Use compass rose and map key',
                            'Distinguish landforms and bodies of water',
                            'Locate community features on a map'
                        ],
                        transcript: 'Maps help us find places. North is up! The key tells us what the symbols mean.',
                        type: 'geography',
                        resources: ['Classroom Map Project', 'Compass Rose Craft', 'Local Community Map']
                    },
                    {
                        id: 'civics-basics',
                        title: 'Rights & Responsibilities',
                        duration: '12 min',
                        standard: 'NCSS Theme 2',
                        objectives: [
                            'Define individual rights vs responsibilities',
                            'Explain importance of rules in communities',
                            'Demonstrate voting process'
                        ],
                        transcript: 'We have rights like speaking freely, but also responsibilities like following rules. Voting helps us make group decisions.',
                        type: 'civics',
                        resources: ['Class Constitution', 'Voting Booth Simulation', 'Rule Maker Activity']
                    }
                ]
            }
        ]
    }
};

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    showHome();
    updatePoints(0);
});

// Navigation Functions
function showHome() {
    hideAllViews();
    document.getElementById('home-view').classList.add('active');
    currentGrade = null;
    currentSubject = null;
}

function selectGrade(gradeId) {
    currentGrade = gradeId;
    const gradeData = CURRICULUM[gradeId];
    
    document.getElementById('grade-title').textContent = gradeData.title;
    const container = document.getElementById('subjects-container');
    container.innerHTML = '';

    gradeData.subjects.forEach(subject => {
        const card = document.createElement('div');
        card.className = 'subject-card';
        card.onclick = () => selectSubject(subject);
        card.innerHTML = `
            <div class="subject-icon">${subject.icon}</div>
            <h3>${subject.name}</h3>
            <p>${subject.lessons.length} Lessons</p>
        `;
        container.appendChild(card);
    });

    hideAllViews();
    document.getElementById('subject-view').classList.add('active');
}

function showSubjects() {
    if(currentGrade) {
        document.getElementById('subject-view').classList.add('active');
        document.getElementById('lesson-view').classList.remove('active');
    } else {
        showHome();
    }
}

function selectSubject(subject) {
    currentSubject = subject;
    // Load first lesson for demo
    loadLesson(subject.lessons[0]);
}

function loadLesson(lesson) {
    currentLesson = lesson;
    hideAllViews();
    document.getElementById('lesson-view').classList.add('active');
    
    document.getElementById('lesson-title').textContent = lesson.title;
    document.getElementById('lesson-duration').textContent = `⏱️ ${lesson.duration}`;
    document.getElementById('video-transcript').textContent = lesson.transcript;
    
    // Load Objectives
    const objList = document.getElementById('learning-objectives');
    objList.innerHTML = '';
    lesson.objectives.forEach(obj => {
        const li = document.createElement('li');
        li.textContent = obj;
        objList.appendChild(li);
    });

    // Load Resources
    const resList = document.getElementById('resources-list');
    resList.innerHTML = '';
    if(lesson.resources) {
        lesson.resources.forEach(res => {
            const div = document.createElement('div');
            div.className = 'related-item';
            div.textContent = '📄 ' + res;
            resList.appendChild(div);
        });
    }

    // Generate Practice Problem
    generatePracticeProblem(lesson);
    
    // Reset UI
    document.getElementById('feedback-area').textContent = '';
    document.getElementById('feedback-area').className = 'feedback';
    switchTab('transcript');
}

// Tab System
function switchTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
    
    // Find the button that was clicked or matches the name
    const buttons = Array.from(document.querySelectorAll('.tab-btn'));
    const targetBtn = buttons.find(b => b.textContent.toLowerCase().includes(tabName));
    if(targetBtn) targetBtn.classList.add('active');
    
    document.getElementById(`${tabName}-tab`).classList.add('active');
}

// Comprehensive Problem Generation Logic
function generatePracticeProblem(lesson) {
    const container = document.getElementById('practice-problem');
    let problemHTML = '';
    let problemData = {};

    switch(lesson.type) {
        case 'counting':
            const countNum = Math.floor(Math.random() * 9) + 1;
            problemHTML = `<p>Count the stars: ${'⭐'.repeat(countNum)}</p>
                           <input type="number" id="answer-input" class="problem-input" min="0" max="20" placeholder="?">`;
            problemData = { type: 'exact', answer: countNum };
            break;
            
        case 'place-value':
            const tens = Math.floor(Math.random() * 8) + 1;
            const ones = Math.floor(Math.random() * 9);
            const total = (tens * 10) + ones;
            problemHTML = `<p>What number has <strong>${tens} tens</strong> and <strong>${ones} ones</strong>?</p>
                           <input type="number" id="answer-input" class="problem-input" placeholder="Number">`;
            problemData = { type: 'exact', answer: total };
            break;

        case 'skip-counting':
            const start = Math.floor(Math.random() * 5) * 10;
            const step = 10;
            problemHTML = `<p>Skip count by 10s: ${start}, ${start+step}, ___?</p>
                           <input type="number" id="answer-input" class="problem-input" placeholder="Next Number">`;
            problemData = { type: 'exact', answer: start + (step*2) };
            break;

        case 'arithmetic':
            const a = Math.floor(Math.random() * 10) + 1;
            const b = Math.floor(Math.random() * 10) + 1;
            const isAdd = Math.random() > 0.5;
            problemHTML = `<p>Solve: ${isAdd ? `${a} + ${b}` : `${a+b} - ${b}`}</p>
                           <input type="number" id="answer-input" class="problem-input" placeholder="Answer">`;
            problemData = { type: 'exact', answer: isAdd ? a+b : a };
            break;

        case 'time':
            const hour = Math.floor(Math.random() * 12) + 1;
            const isHalf = Math.random() > 0.5;
            const min = isHalf ? 30 : 0;
            problemHTML = `<p>If the short hand is on ${hour} and long hand is on ${isHalf ? '6' : '12'}, what time is it?</p>
                           <select id="answer-input" class="problem-input">
                               <option value="">Select Time</option>
                               <option value="${hour}:00">${hour}:00</option>
                               <option value="${hour}:30">${hour}:30</option>
                           </select>`;
            problemData = { type: 'string', answer: `${hour}:${min === 0 ? '00' : '30'}` };
            break;

        case 'fractions':
            const denom = Math.random() > 0.5 ? 2 : 4;
            const name = denom === 2 ? 'halves' : 'fourths';
            problemHTML = `<p>If I cut a pizza into ${denom} equal pieces, each piece is a ______.</p>
                           <input type="text" id="answer-input" class="problem-input" placeholder="Type answer">`;
            problemData = { type: 'contains', answer: name };
            break;

        case 'geometry':
            const shapes = ['cube', 'sphere', 'cylinder', 'cone'];
            const shape = shapes[Math.floor(Math.random() * shapes.length)];
            problemHTML = `<p>I have no flat faces and I can roll. What shape am I? (Hint: Like a ball)</p>
                           <input type="text" id="answer-input" class="problem-input" placeholder="Shape name">`;
            // Simplified for demo: always asking for sphere logic in this specific string, 
            // but in full app would randomize question text too.
            problemData = { type: 'contains', answer: 'sphere' }; 
            break;

        case 'phonics':
            problemHTML = `<p>Which word has the "Silent E" rule? (Cap or Cape)</p>
                           <input type="text" id="answer-input" class="problem-input" placeholder="Word">`;
            problemData = { type: 'contains', answer: 'cape' };
            break;

        case 'comprehension':
            problemHTML = `<p>Who are the people in a story called? (Characters or Setting)</p>
                           <input type="text" id="answer-input" class="problem-input" placeholder="Answer">`;
            problemData = { type: 'contains', answer: 'character' };
            break;
            
        case 'inquiry':
            problemHTML = `<p>Sound is made by ________. (Vibrations or Light)</p>
                           <input type="text" id="answer-input" class="problem-input" placeholder="Answer">`;
            problemData = { type: 'contains', answer: 'vibration' };
            break;

        default:
            problemHTML = `<p>Type the missing word: "The cat sat on the ____."</p>
                           <input type="text" id="answer-input" class="problem-input" placeholder="mat">`;
            problemData = { type: 'contains', answer: 'mat' };
    }

    currentProblem = problemData;
    container.innerHTML = problemHTML;
}

function checkAnswer() {
    const input = document.getElementById('answer-input');
    if(!input) return;
    
    const userVal = input.value.trim().toLowerCase();
    const feedback = document.getElementById('feedback-area');
    
    if(!userVal) {
        feedback.textContent = "⚠️ Please enter an answer first!";
        feedback.className = "feedback incorrect";
        return;
    }

    let isCorrect = false;
    
    if(currentProblem.type === 'exact') {
        isCorrect = parseInt(userVal) === currentProblem.answer;
    } else if (currentProblem.type === 'string') {
        isCorrect = userVal === currentProblem.answer.toLowerCase();
    } else if (currentProblem.type === 'contains') {
        isCorrect = userVal.includes(currentProblem.answer);
    }

    if(isCorrect) {
        feedback.textContent = "✅ Correct! Great job!";
        feedback.className = "feedback correct";
        updatePoints(50);
        setTimeout(() => showCompletionModal(), 1000);
    } else {
        feedback.textContent = "❌ Not quite. Try again or use a hint!";
        feedback.className = "feedback incorrect";
    }
}

function showHint() {
    alert("💡 Hint: Look closely at the question. Break it down into smaller parts!");
}

function askCommunity() {
    alert("💬 Connecting to community forum... (Demo Mode)");
}

function showCompletionModal() {
    document.getElementById('completion-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('completion-modal').classList.add('hidden');
    resetLessonState();
}

function nextLesson() {
    // In a real app, this would navigate to the next lesson ID
    alert("🚀 Moving to next lesson in sequence...");
    closeModal();
    resetLessonState();
}

function resetLessonState() {
    // Reset video progress and inputs for demo purposes
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(i => i.value = '');
    document.getElementById('feedback-area').textContent = '';
    document.querySelector('.progress-fill').style.width = '0%';
}

function updatePoints(amount) {
    userPoints += amount;
    document.getElementById('user-points').textContent = userPoints;
}

function toggleProfile() {
    alert(`Current Energy Points: ${userPoints}\nKeep learning to earn more!`);
}

function hideAllViews() {
    document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
}
