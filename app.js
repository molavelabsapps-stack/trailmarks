// Khan Academy Early Learning Platform - Interactive Learning Experience
// Comprehensive curriculum for Pre-K, Kindergarten, and 1st Grade

const curriculumData = {
    prek: {
        name: "Pre-K",
        icon: "🌟",
        age: "Ages 3-4",
        subjects: [
            { id: "math", name: "Math", icon: "🔢", description: "Counting and Numbers" },
            { id: "reading", name: "Reading & Language", icon: "📚", description: "Letters A-Z" },
            { id: "science", name: "Science", icon: "🔬", description: "Five Senses" },
            { id: "social", name: "Social Studies", icon: "🌍", description: "Family & Community" }
        ],
        lessons: [
            {
                id: "prek-math-1",
                title: "Counting to 5",
                subject: "math",
                duration: "3:20",
                difficulty: "Beginner",
                energy: 100,
                thumbnail: "🍎🍊🍌",
                videoTranscript: "Let's learn to count! One... Two... Three... Four... Five! Great job!",
                practiceProblem: {
                    question: "How many apples do you see?",
                    type: "choice",
                    options: ["3", "4", "5"],
                    correct: "5",
                    hint: "Count each apple slowly: one, two, three..."
                },
                resources: ["Counting Chart 1-5", "Number Tracing Worksheet"]
            },
            {
                id: "prek-reading-1",
                title: "Letter A is for Apple",
                subject: "reading",
                duration: "4:15",
                difficulty: "Beginner",
                energy: 100,
                thumbnail: "🅰️🍎",
                videoTranscript: "The letter A makes the sound 'ah'. A is for Apple! Can you say 'Ahh'?",
                practiceProblem: {
                    question: "Which picture starts with A?",
                    type: "choice",
                    options: ["🍎 Apple", "🐶 Dog", "🚗 Car"],
                    correct: "🍎 Apple",
                    hint: "Apple starts with the letter A!"
                },
                resources: ["Letter A Flashcard", "Apple Coloring Page"]
            }
        ]
    },
    kindergarten: {
        name: "Kindergarten",
        icon: "🎈",
        age: "Ages 5-6",
        subjects: [
            { id: "math", name: "Math", icon: "🔢", description: "Counting to 100" },
            { id: "reading", name: "Reading & Language", icon: "📚", description: "Simple Words" },
            { id: "science", name: "Science", icon: "🔬", description: "Plants & Animals" },
            { id: "social", name: "Social Studies", icon: "🌍", description: "Maps & Communities" }
        ],
        lessons: [
            {
                id: "k-math-1",
                title: "Counting to 20",
                subject: "math",
                duration: "5:30",
                difficulty: "Beginner",
                energy: 150,
                thumbnail: "1️⃣2️⃣3️⃣",
                videoTranscript: "Let's count together from 1 to 20! Ready? 1, 2, 3, 4, 5...",
                practiceProblem: {
                    question: "What number comes after 15?",
                    type: "input",
                    correct: "16",
                    hint: "Count forward: 15, then what?"
                },
                resources: ["Number Line 1-20", "Counting Practice Sheet"]
            },
            {
                id: "k-reading-1",
                title: "Sight Words: the, and, is",
                subject: "reading",
                duration: "6:00",
                difficulty: "Beginner",
                energy: 150,
                thumbnail: "📖",
                videoTranscript: "Today we'll learn three important words: THE, AND, IS. These are sight words!",
                practiceProblem: {
                    question: "Fill in the blank: The cat ___ sleeping.",
                    type: "choice",
                    options: ["the", "and", "is"],
                    correct: "is",
                    hint: "Read the sentence: 'The cat ____ sleeping.'"
                },
                resources: ["Sight Words Flashcards", "Reading Practice Book"]
            }
        ]
    },
    grade1: {
        name: "1st Grade",
        icon: "🚀",
        age: "Ages 6-7",
        subjects: [
            { id: "math", name: "Math", icon: "🔢", description: "Place Value, Addition, Time" },
            { id: "reading", name: "Reading & Language", icon: "📚", description: "Phonics, Stories, Writing" },
            { id: "science", name: "Science", icon: "🔬", description: "Light, Sound, Weather, Plants" },
            { id: "social", name: "Social Studies", icon: "🌍", description: "Maps, Communities, History" }
        ],
        lessons: [
            // MATHEMATICS
            {
                id: "g1-math-1",
                title: "Place Value: Tens and Ones",
                subject: "math",
                duration: "7:00",
                difficulty: "Intermediate",
                energy: 200,
                thumbnail: "📊",
                videoTranscript: "Numbers have places! In 23, the 2 is in the tens place (2 tens = 20) and 3 is in the ones place. So 23 = 20 + 3!",
                practiceProblem: {
                    question: "In the number 47, how many tens are there?",
                    type: "choice",
                    options: ["4 tens", "7 tens", "47 tens"],
                    correct: "4 tens",
                    hint: "The first digit from the left tells you the tens."
                },
                resources: ["Place Value Chart", "Base-10 Blocks Activity"],
                standards: ["CCSS.MATH.CONTENT.1.NBT.B.2"]
            },
            {
                id: "g1-math-2",
                title: "Skip Counting by 2s, 5s, and 10s",
                subject: "math",
                duration: "6:30",
                difficulty: "Intermediate",
                energy: 200,
                thumbnail: "2️⃣5️⃣🔟",
                videoTranscript: "Skip counting helps us count faster! By 2s: 2, 4, 6, 8, 10... By 5s: 5, 10, 15, 20... By 10s: 10, 20, 30, 40...",
                practiceProblem: {
                    question: "What comes next? 10, 20, 30, ___",
                    type: "choice",
                    options: ["35", "40", "50"],
                    correct: "40",
                    hint: "We're counting by 10s. Add 10 to 30."
                },
                resources: ["Hundreds Chart", "Skip Counting Songs"],
                standards: ["CCSS.MATH.CONTENT.1.NBT.A.1"]
            },
            {
                id: "g1-math-3",
                title: "Addition Within 20",
                subject: "math",
                duration: "8:00",
                difficulty: "Intermediate",
                energy: 200,
                thumbnail: "➕",
                videoTranscript: "Let's add numbers up to 20! 8 + 5 = ? We can count on: 8... 9, 10, 11, 12, 13. So 8 + 5 = 13!",
                practiceProblem: {
                    question: "What is 9 + 7?",
                    type: "input",
                    correct: "16",
                    hint: "Start at 9 and count up 7 more."
                },
                resources: ["Addition Facts Worksheet", "Number Line Practice"],
                standards: ["CCSS.MATH.CONTENT.1.OA.C.6"]
            },
            {
                id: "g1-math-4",
                title: "Subtraction Within 20",
                subject: "math",
                duration: "7:30",
                difficulty: "Intermediate",
                energy: 200,
                thumbnail: "➖",
                videoTranscript: "Subtraction means taking away! 15 - 7 = ? Start at 15 and count back 7: 14, 13, 12, 11, 10, 9, 8. Answer is 8!",
                practiceProblem: {
                    question: "What is 14 - 6?",
                    type: "choice",
                    options: ["7", "8", "9"],
                    correct: "8",
                    hint: "Start at 14 and count back 6."
                },
                resources: ["Subtraction Facts Practice", "Counting Back Strategy Guide"],
                standards: ["CCSS.MATH.CONTENT.1.OA.C.6"]
            },
            {
                id: "g1-math-5",
                title: "Telling Time to the Hour and Half-Hour",
                subject: "math",
                duration: "9:00",
                difficulty: "Intermediate",
                energy: 250,
                thumbnail: "⏰",
                videoTranscript: "The short hand shows the hour, the long hand shows minutes. When the long hand points to 12, it's o'clock. When it points to 6, it's half past!",
                practiceProblem: {
                    question: "If the short hand is on 3 and the long hand is on 6, what time is it?",
                    type: "choice",
                    options: ["3:00", "3:30", "6:00"],
                    correct: "3:30",
                    hint: "Long hand on 6 means half past the hour."
                },
                resources: ["Practice Clock", "Time Worksheet"],
                standards: ["CCSS.MATH.CONTENT.1.MD.B.3"]
            },
            {
                id: "g1-math-6",
                title: "Understanding Fractions: Halves and Fourths",
                subject: "math",
                duration: "7:00",
                difficulty: "Intermediate",
                energy: 200,
                thumbnail: "🍕½",
                videoTranscript: "When we split something into 2 equal parts, each part is a half. When we split into 4 equal parts, each is a fourth or quarter!",
                practiceProblem: {
                    question: "If you cut a pizza into 4 equal slices, each slice is a ___?",
                    type: "choice",
                    options: ["half", "fourth", "whole"],
                    correct: "fourth",
                    hint: "4 equal parts makes fourths."
                },
                resources: ["Fraction Circles", "Pizza Fraction Activity"],
                standards: ["CCSS.MATH.CONTENT.1.G.A.3"]
            },
            {
                id: "g1-math-7",
                title: "2D and 3D Shapes",
                subject: "math",
                duration: "8:00",
                difficulty: "Intermediate",
                energy: 200,
                thumbnail: "🔺🔵📦",
                videoTranscript: "2D shapes are flat: circles, triangles, squares. 3D shapes have depth: spheres, cubes, cylinders. A cube has 6 square faces!",
                practiceProblem: {
                    question: "Which shape is a 3D shape?",
                    type: "choice",
                    options: ["Circle", "Cube", "Triangle"],
                    correct: "Cube",
                    hint: "3D shapes are not flat - you can hold them!"
                },
                resources: ["Shape Sorter Game", "3D Shape Nets"],
                standards: ["CCSS.MATH.CONTENT.1.G.A.1", "CCSS.MATH.CONTENT.1.G.A.2"]
            },
            
            // READING & LANGUAGE ARTS
            {
                id: "g1-reading-1",
                title: "Phonics: Blends and Digraphs",
                subject: "reading",
                duration: "8:00",
                difficulty: "Intermediate",
                energy: 200,
                thumbnail: "🔤bl",
                videoTranscript: "Blends are two consonants together that keep their sounds: bl, st, tr. Digraphs make one new sound: sh, ch, th, wh!",
                practiceProblem: {
                    question: "Which word starts with the 'sh' sound?",
                    type: "choice",
                    options: ["ship", "sip", "tip"],
                    correct: "ship",
                    hint: "'sh' makes a quiet sound like 'shhh'."
                },
                resources: ["Phonics Flashcards", "Blends Practice Book"],
                standards: ["CCSS.ELA-LITERACY.RF.1.3"]
            },
            {
                id: "g1-reading-2",
                title: "Story Elements: Characters, Setting, Plot",
                subject: "reading",
                duration: "9:00",
                difficulty: "Intermediate",
                energy: 250,
                thumbnail: "📖👤🏠",
                videoTranscript: "Every story has characters (who), setting (where and when), and plot (what happens). Let's identify these in our story!",
                practiceProblem: {
                    question: "In 'Little Red Riding Hood went to Grandma's house in the forest,' what is the setting?",
                    type: "choice",
                    options: ["Little Red", "Grandma's house in the forest", "Bringing food"],
                    correct: "Grandma's house in the forest",
                    hint: "Setting tells WHERE the story happens."
                },
                resources: ["Story Map Template", "Character Analysis Worksheet"],
                standards: ["CCSS.ELA-LITERACY.RL.1.3"]
            },
            {
                id: "g1-reading-3",
                title: "Main Idea and Details",
                subject: "reading",
                duration: "8:30",
                difficulty: "Intermediate",
                energy: 200,
                thumbnail: "💡📋",
                videoTranscript: "The main idea is what the text is mostly about. Details tell us more about the main idea. Think: What is this MOSTLY about?",
                practiceProblem: {
                    question: "A text talks about how bees make honey, where they live, and what they eat. What's the main idea?",
                    type: "choice",
                    options: ["How to make honey", "All about bees", "Where flowers grow"],
                    correct: "All about bees",
                    hint: "All the details are about bees!"
                },
                resources: ["Main Idea Graphic Organizer", "Reading Passages"],
                standards: ["CCSS.ELA-LITERACY.RI.1.2"]
            },
            {
                id: "g1-reading-4",
                title: "Writing: Opinion Pieces",
                subject: "reading",
                duration: "10:00",
                difficulty: "Intermediate",
                energy: 250,
                thumbnail: "✏️💭",
                videoTranscript: "Opinion writing tells what you think! Start with your opinion, give reasons, and end with a conclusion. Example: 'I think recess is important because...'",
                practiceProblem: {
                    question: "Which sentence is an opinion?",
                    type: "choice",
                    options: ["Dogs have four legs.", "Dogs are the best pets.", "Dogs eat food."],
                    correct: "Dogs are the best pets.",
                    hint: "An opinion is what someone thinks or feels, not a fact."
                },
                resources: ["Opinion Writing Template", "Reasons Brainstorm Sheet"],
                standards: ["CCSS.ELA-LITERACY.W.1.1"]
            },
            {
                id: "g1-reading-5",
                title: "Writing: Narrative Stories",
                subject: "reading",
                duration: "10:00",
                difficulty: "Intermediate",
                energy: 250,
                thumbnail: "📝📚",
                videoTranscript: "Narrative writing tells a story! Include characters, setting, beginning, middle, end, and use sequence words: first, next, then, finally.",
                practiceProblem: {
                    question: "Which word helps show sequence in a story?",
                    type: "choice",
                    options: ["big", "then", "blue"],
                    correct: "then",
                    hint: "Sequence words tell the order of events."
                },
                resources: ["Story Sequence Cards", "Narrative Writing Checklist"],
                standards: ["CCSS.ELA-LITERACY.W.1.3"]
            },
            
            // SCIENCE
            {
                id: "g1-science-1",
                title: "Light and Vision",
                subject: "science",
                duration: "8:00",
                difficulty: "Intermediate",
                energy: 200,
                thumbnail: "💡👁️",
                videoTranscript: "We see things when light bounces off them and enters our eyes! Light travels in straight lines. Without light, we can't see!",
                practiceProblem: {
                    question: "Why can't we see in a dark room?",
                    type: "choice",
                    options: ["Our eyes are closed", "There's no light to bounce off objects", "It's nighttime"],
                    correct: "There's no light to bounce off objects",
                    hint: "Remember: we need light to see!"
                },
                resources: ["Light Exploration Kit", "Shadow Investigation Guide"],
                standards: ["NGSS 1-PS4-2"]
            },
            {
                id: "g1-science-2",
                title: "Sound and Vibration",
                subject: "science",
                duration: "7:30",
                difficulty: "Intermediate",
                energy: 200,
                thumbnail: "🔊🎵",
                videoTranscript: "Sound is made when things vibrate! Touch your throat when you hum - feel the vibration? Faster vibrations make higher sounds!",
                practiceProblem: {
                    question: "What makes sound?",
                    type: "choice",
                    options: ["Light", "Vibrations", "Heat"],
                    correct: "Vibrations",
                    hint: "Try humming and touching your throat!"
                },
                resources: ["Sound Makers Activity", "Vibration Detection Experiment"],
                standards: ["NGSS 1-PS4-1"]
            },
            {
                id: "g1-science-3",
                title: "Plant Structures and Functions",
                subject: "science",
                duration: "9:00",
                difficulty: "Intermediate",
                energy: 250,
                thumbnail: "🌱🌿",
                videoTranscript: "Plants have special parts! Roots absorb water, stems support the plant, leaves make food using sunlight, flowers make seeds!",
                practiceProblem: {
                    question: "Which part of the plant absorbs water from the soil?",
                    type: "choice",
                    options: ["Leaves", "Stem", "Roots"],
                    correct: "Roots",
                    hint: "These parts are usually underground."
                },
                resources: ["Plant Parts Diagram", "Grow Your Own Plant Kit"],
                standards: ["NGSS 1-LS1-1"]
            },
            {
                id: "g1-science-4",
                title: "Animal Survival Needs",
                subject: "science",
                duration: "8:00",
                difficulty: "Intermediate",
                energy: 200,
                thumbnail: "🐾🦴",
                videoTranscript: "All animals need food, water, air, and shelter to survive! Different animals have different body parts that help them get what they need.",
                practiceProblem: {
                    question: "Which is NOT something all animals need?",
                    type: "choice",
                    options: ["Food", "Water", "Toys"],
                    correct: "Toys",
                    hint: "Think about what keeps animals alive."
                },
                resources: ["Animal Needs Poster", "Habitat Matching Game"],
                standards: ["NGSS 1-LS1-2"]
            },
            {
                id: "g1-science-5",
                title: "Weather Patterns and Seasons",
                subject: "science",
                duration: "9:00",
                difficulty: "Intermediate",
                energy: 250,
                thumbnail: "🌤️❄️",
                videoTranscript: "Weather changes daily, but seasons follow patterns! Spring: warm and rainy. Summer: hot. Fall: cool and windy. Winter: cold, maybe snow!",
                practiceProblem: {
                    question: "In which season do leaves usually change color and fall off trees?",
                    type: "choice",
                    options: ["Spring", "Summer", "Fall"],
                    correct: "Fall",
                    hint: "Also called autumn!"
                },
                resources: ["Weather Journal", "Season Wheel Craft"],
                standards: ["NGSS 1-ESS1-2"]
            },
            
            // SOCIAL STUDIES
            {
                id: "g1-social-1",
                title: "Map Skills: Compass Rose and Legend",
                subject: "social",
                duration: "8:00",
                difficulty: "Intermediate",
                energy: 200,
                thumbnail: "🗺️🧭",
                videoTranscript: "Maps help us find places! The compass rose shows directions: North, South, East, West. The legend explains the symbols on the map!",
                practiceProblem: {
                    question: "What does a compass rose show?",
                    type: "choice",
                    options: ["Distance", "Directions", "Population"],
                    correct: "Directions",
                    hint: "N, S, E, W are directions!"
                },
                resources: ["Classroom Map Activity", "Treasure Hunt with Maps"],
                standards: ["NCSS Theme 3: People, Places, and Environments"]
            },
            {
                id: "g1-social-2",
                title: "Community Helpers",
                subject: "social",
                duration: "7:00",
                difficulty: "Beginner",
                energy: 150,
                thumbnail: "👨‍⚕️👮‍♀️",
                videoTranscript: "Community helpers work to keep our community safe and healthy! Doctors help sick people, firefighters put out fires, teachers educate children!",
                practiceProblem: {
                    question: "Who would you call if there's a fire?",
                    type: "choice",
                    options: ["Doctor", "Firefighter", "Teacher"],
                    correct: "Firefighter",
                    hint: "They drive big red trucks!"
                },
                resources: ["Community Helpers Matching Game", "Thank You Card Activity"],
                standards: ["NCSS Theme 5: Individuals, Groups, and Institutions"]
            },
            {
                id: "g1-social-3",
                title: "Rights and Responsibilities",
                subject: "social",
                duration: "8:00",
                difficulty: "Intermediate",
                energy: 200,
                thumbnail: "⚖️✅",
                videoTranscript: "Rights are things we're allowed to do. Responsibilities are things we should do. With rights come responsibilities! Example: You have the right to learn, responsibility to listen.",
                practiceProblem: {
                    question: "Which is a responsibility at school?",
                    type: "choice",
                    options: ["Playing all day", "Following rules", "Ignoring the teacher"],
                    correct: "Following rules",
                    hint: "Responsibilities are things we SHOULD do."
                },
                resources: ["Classroom Rules Chart", "Rights vs Responsibilities Sort"],
                standards: ["NCSS Theme 6: Power, Authority, and Governance"]
            },
            {
                id: "g1-social-4",
                title: "Timelines: Past, Present, Future",
                subject: "social",
                duration: "7:30",
                difficulty: "Intermediate",
                energy: 200,
                thumbnail: "📅⏳",
                videoTranscript: "A timeline shows when events happened! Past is before now, present is now, future is after now. We read timelines from left to right!",
                practiceProblem: {
                    question: "On a timeline, which comes first: your birth or today?",
                    type: "choice",
                    options: ["Your birth", "Today", "They're the same"],
                    correct: "Your birth",
                    hint: "You were born before today!"
                },
                resources: ["Personal Timeline Template", "Historical Events Timeline"],
                standards: ["NCSS Theme 5: Time, Continuity, and Change"]
            }
        ]
    }
};

let currentGrade = null;
let currentLesson = null;
let energyPoints = 1250;
let lessonsCompleted = 0;
let problemsAttempted = 0;
let gamesPlayed = 0;

document.addEventListener('DOMContentLoaded', function() {
    initGradeSelection();
    initNavigation();
    initVideoPlayer();
    initTabs();
    initPracticeProblems();
    initModals();
    updateEnergyDisplay();
});

function initGradeSelection() {
    const gradeCards = document.querySelectorAll('.grade-card');
    
    gradeCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.classList.contains('btn-start') || e.target.closest('.btn-start')) {
                const grade = this.dataset.grade;
                selectGrade(grade);
            }
        });
    });
}

function selectGrade(grade) {
    currentGrade = grade;
    const gradeData = curriculumData[grade];
    
    // Update UI
    document.getElementById('gradeSelection').classList.add('hidden');
    document.getElementById('learningDashboard').classList.remove('hidden');
    document.getElementById('currentGradeIcon').textContent = gradeData.icon;
    document.getElementById('currentGradeTitle').textContent = gradeData.name;
    
    // Populate subjects
    populateSubjects(gradeData.subjects);
    
    // Update learning paths
    updateLearningPaths(gradeData.subjects);
    
    // Load featured lessons
    loadFeaturedLessons(gradeData.lessons);
    
    // Save progress
    localStorage.setItem('currentGrade', grade);
}

function populateSubjects(subjects) {
    const subjectList = document.getElementById('subjectList');
    subjectList.innerHTML = '';
    
    subjects.forEach(subject => {
        const li = document.createElement('li');
        li.className = 'subject-item';
        li.innerHTML = `
            <span class="subject-icon">${subject.icon}</span>
            <span class="subject-name">${subject.name}</span>
        `;
        li.addEventListener('click', () => loadSubject(subject));
        subjectList.appendChild(li);
    });
}

function updateLearningPaths(subjects) {
    subjects.forEach(subject => {
        const pathCard = document.querySelector(`.path-card[data-subject="${subject.id}"]`);
        if (pathCard) {
            pathCard.querySelector('p').textContent = subject.description;
            pathCard.addEventListener('click', () => loadSubject(subject));
        }
    });
}

function loadSubject(subject) {
    const gradeData = curriculumData[currentGrade];
    const subjectLessons = gradeData.lessons.filter(l => l.subject === subject.id);
    
    if (subjectLessons.length > 0) {
        loadLesson(subjectLessons[0]);
    } else {
        alert('More lessons coming soon for this subject! 🎉');
    }
}

function loadFeaturedLessons(lessons) {
    const lessonsGrid = document.getElementById('lessonsGrid');
    lessonsGrid.innerHTML = '';
    
    lessons.forEach(lesson => {
        const lessonCard = document.createElement('div');
        lessonCard.className = 'lesson-card';
        lessonCard.innerHTML = `
            <div class="lesson-thumbnail">${lesson.thumbnail}</div>
            <h4>${lesson.title}</h4>
            <div class="lesson-meta">
                <span class="lesson-duration">⏱️ ${lesson.duration}</span>
                <span class="lesson-energy">⚡ ${lesson.energy}</span>
            </div>
            <button class="btn-start-lesson">Start Lesson</button>
        `;
        
        lessonCard.querySelector('.btn-start-lesson').addEventListener('click', () => {
            loadLesson(lesson);
        });
        
        lessonsGrid.appendChild(lessonCard);
    });
}

function loadLesson(lesson) {
    currentLesson = lesson;
    
    // Hide welcome section, show lesson area
    document.getElementById('welcomeBackSection').classList.add('hidden');
    document.getElementById('featuredSection').classList.add('hidden');
    document.getElementById('gamesSection').classList.add('hidden');
    document.getElementById('lessonArea').classList.remove('hidden');
    
    // Update lesson info
    document.getElementById('lessonTitle').textContent = lesson.title;
    document.getElementById('lessonEnergy').textContent = lesson.energy;
    document.getElementById('lessonDifficulty').textContent = lesson.difficulty;
    
    // Set transcript
    document.getElementById('transcriptText').textContent = lesson.videoTranscript;
    
    // Set practice problem
    setupPracticeProblem(lesson.practiceProblem);
    
    // Set resources
    const resourcesList = document.getElementById('resourcesList');
    resourcesList.innerHTML = '';
    lesson.resources.forEach(resource => {
        const li = document.createElement('li');
        li.innerHTML = `📄 ${resource}`;
        resourcesList.appendChild(li);
    });
    
    // Reset video player
    resetVideoPlayer();
    
    // Update progress steps
    document.getElementById('step1').classList.add('completed');
    document.getElementById('step2').classList.remove('completed', 'active');
    document.getElementById('step3').classList.remove('completed', 'active');
}

function setupPracticeProblem(problem) {
    const inputArea = document.getElementById('problemInputArea');
    document.getElementById('problemQuestion').textContent = problem.question;
    document.getElementById('hintText').textContent = problem.hint;
    
    // Hide feedback and next button
    document.getElementById('problemFeedback').classList.add('hidden');
    document.getElementById('btnNextProblem').classList.add('hidden');
    
    if (problem.type === 'choice') {
        inputArea.innerHTML = '<div class="choice-options"></div>';
        const optionsContainer = inputArea.querySelector('.choice-options');
        
        problem.options.forEach(option => {
            const btn = document.createElement('button');
            btn.className = 'choice-option';
            btn.textContent = option;
            btn.addEventListener('click', function() {
                document.querySelectorAll('.choice-option').forEach(b => b.classList.remove('selected'));
                this.classList.add('selected');
                this.dataset.selected = 'true';
            });
            optionsContainer.appendChild(btn);
        });
    } else if (problem.type === 'input') {
        inputArea.innerHTML = `
            <input type="text" class="problem-input" placeholder="Type your answer here..." />
        `;
    }
}

function initPracticeProblems() {
    document.getElementById('btnCheck').addEventListener('click', checkAnswer);
    document.getElementById('btnHint').addEventListener('click', showHint);
    document.getElementById('btnNextProblem').addEventListener('click', nextProblem);
}

function checkAnswer() {
    const problem = currentLesson.practiceProblem;
    let userAnswer = '';
    
    if (problem.type === 'choice') {
        const selected = document.querySelector('.choice-option.selected');
        if (selected) {
            userAnswer = selected.textContent;
        }
    } else if (problem.type === 'input') {
        userAnswer = document.querySelector('.problem-input').value.trim();
    }
    
    const feedbackEl = document.getElementById('problemFeedback');
    const feedbackMsg = document.getElementById('feedbackMessage');
    
    if (userAnswer === problem.correct) {
        feedbackEl.classList.remove('hidden');
        feedbackEl.className = 'problem-feedback correct';
        feedbackMsg.textContent = '🎉 Correct! Great job!';
        document.getElementById('step2').classList.add('completed');
        
        // Add energy points
        energyPoints += 50;
        updateEnergyDisplay();
        problemsAttempted++;
        updateGoalProgress();
        
        // Show next button
        document.getElementById('btnNextProblem').classList.remove('hidden');
        
        // Auto-complete lesson after correct answer
        setTimeout(() => {
            showCompletionModal();
        }, 1000);
    } else {
        feedbackEl.classList.remove('hidden');
        feedbackEl.className = 'problem-feedback incorrect';
        feedbackMsg.textContent = 'Not quite. Try again! 💪';
    }
}

function showHint() {
    document.getElementById('hintBox').classList.remove('hidden');
}

function nextProblem() {
    // For demo, just reload same lesson
    loadLesson(currentLesson);
}

function initVideoPlayer() {
    const playBtn = document.getElementById('playVideoBtn');
    const videoControls = document.getElementById('videoControls');
    const videoPlaceholder = document.getElementById('videoPlaceholder');
    const timelineProgress = document.querySelector('.timeline-progress');
    
    let isPlaying = false;
    let progress = 0;
    let playInterval;
    
    playBtn.addEventListener('click', function() {
        videoPlaceholder.classList.add('hidden');
        videoControls.classList.remove('hidden');
        
        isPlaying = !isPlaying;
        
        if (isPlaying) {
            this.innerHTML = '⏸️';
            startProgress();
        } else {
            this.innerHTML = '▶️';
            stopProgress();
        }
    });
    
    function startProgress() {
        playInterval = setInterval(() => {
            progress += 1;
            if (progress >= 100) {
                progress = 100;
                stopProgress();
                isPlaying = false;
                playBtn.innerHTML = '▶️';
                
                // Mark video as watched
                document.getElementById('step1').classList.add('completed');
            }
            timelineProgress.style.width = progress + '%';
        }, 100);
    }
    
    function stopProgress() {
        clearInterval(playInterval);
    }
}

function resetVideoPlayer() {
    const videoPlaceholder = document.getElementById('videoPlaceholder');
    const videoControls = document.getElementById('videoControls');
    const timelineProgress = document.querySelector('.timeline-progress');
    
    videoPlaceholder.classList.remove('hidden');
    videoControls.classList.add('hidden');
    timelineProgress.style.width = '0%';
}

function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.dataset.tab;
            
            // Remove active from all
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));
            
            // Add active to clicked
            this.classList.add('active');
            document.getElementById(`${tabId}Pane`).classList.add('active');
        });
    });
    
    // Save notes functionality
    document.getElementById('saveNotesBtn').addEventListener('click', function() {
        const notes = document.getElementById('notesTextarea').value;
        localStorage.setItem('lessonNotes', notes);
        alert('Notes saved! 💾');
    });
}

function initModals() {
    const continueBtn = document.getElementById('continueLearningBtn');
    const closeBtn = document.getElementById('closeCompletionModal');
    const modal = document.getElementById('completionModal');
    
    continueBtn.addEventListener('click', function() {
        modal.classList.add('hidden');
        document.getElementById('lessonArea').classList.add('hidden');
        document.getElementById('welcomeBackSection').classList.remove('hidden');
        document.getElementById('featuredSection').classList.remove('hidden');
        document.getElementById('gamesSection').classList.remove('hidden');
        
        // Reset for demo
        resetLessonState();
        
        alert('Great progress! In the full version, this would take you to the next lesson. 🚀');
    });
    
    closeBtn.addEventListener('click', function() {
        modal.classList.add('hidden');
        document.getElementById('lessonArea').classList.add('hidden');
        document.getElementById('welcomeBackSection').classList.remove('hidden');
        document.getElementById('featuredSection').classList.remove('hidden');
        document.getElementById('gamesSection').classList.remove('hidden');
        
        resetLessonState();
    });
}

function showCompletionModal() {
    const modal = document.getElementById('completionModal');
    modal.classList.remove('hidden');
    
    // Update energy
    energyPoints += currentLesson.energy;
    updateEnergyDisplay();
    
    lessonsCompleted++;
    updateGoalProgress();
}

function resetLessonState() {
    // Reset video player
    resetVideoPlayer();
    
    // Clear practice problem
    document.getElementById('problemInputArea').innerHTML = '';
    document.getElementById('problemFeedback').classList.add('hidden');
    document.getElementById('hintBox').classList.add('hidden');
    
    // Reset steps
    document.querySelectorAll('.step').forEach(step => {
        step.classList.remove('completed', 'active');
    });
    document.getElementById('step1').classList.add('completed');
}

function updateEnergyDisplay() {
    document.getElementById('energyCount').textContent = energyPoints.toLocaleString();
}

function updateGoalProgress() {
    document.getElementById('goalLessons').textContent = `${Math.min(lessonsCompleted, 5)}/5`;
    document.getElementById('goalPractice').textContent = `${Math.min(problemsAttempted, 10)}/10`;
    document.getElementById('goalGames').textContent = `${Math.min(gamesPlayed, 3)}/3`;
}

function initNavigation() {
    // Back to dashboard button
    document.getElementById('btnBackToDashboard').addEventListener('click', function() {
        document.getElementById('lessonArea').classList.add('hidden');
        document.getElementById('welcomeBackSection').classList.remove('hidden');
        document.getElementById('featuredSection').classList.remove('hidden');
        document.getElementById('gamesSection').classList.remove('hidden');
    });
    
    // Game buttons
    document.querySelectorAll('.btn-play-game').forEach(btn => {
        btn.addEventListener('click', function() {
            gamesPlayed++;
            energyPoints += 75;
            updateEnergyDisplay();
            updateGoalProgress();
            alert('🎮 Game started! Keep playing to earn more energy points!');
        });
    });
    
    // Parent resources
    document.querySelector('.btn-parent-resources')?.addEventListener('click', function() {
        alert('📚 Parent Resources:\n- Learning Progress Report\n- Tips for Supporting Your Child\n- Educational Activities at Home');
    });
    
    // Learning schedule
    document.querySelector('.btn-learning-schedule')?.addEventListener('click', function() {
        alert('📅 Recommended Learning Schedule:\n- Math: 15 min/day\n- Reading: 20 min/day\n- Science: 10 min, 3x/week\n- Games: 10 min/day');
    });
    
    // Help buttons
    document.querySelector('.btn-help')?.addEventListener('click', function() {
        alert('💬 Ask a Question:\nOur community of teachers and parents is here to help!');
    });
    
    document.querySelector('.btn-community')?.addEventListener('click', function() {
        alert('👥 Community Forum:\nConnect with other parents and educators!');
    });
}
