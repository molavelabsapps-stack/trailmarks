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
            { id: "math", name: "Math", icon: "🔢", description: "Place Value" },
            { id: "reading", name: "Reading & Language", icon: "📚", description: "Reading Stories" },
            { id: "science", name: "Science", icon: "🔬", description: "Weather & Seasons" },
            { id: "social", name: "Social Studies", icon: "🌍", description: "Holidays & Traditions" }
        ],
        lessons: [
            {
                id: "g1-math-1",
                title: "Place Value: Tens and Ones",
                subject: "math",
                duration: "7:00",
                difficulty: "Intermediate",
                energy: 200,
                thumbnail: "📊",
                videoTranscript: "Numbers have places! In 23, the 2 is in the tens place and 3 is in the ones place.",
                practiceProblem: {
                    question: "In the number 47, which digit is in the tens place?",
                    type: "choice",
                    options: ["4", "7", "47"],
                    correct: "4",
                    hint: "The tens place is the first digit from the left."
                },
                resources: ["Place Value Chart", "Base-10 Blocks Activity"]
            },
            {
                id: "g1-reading-1",
                title: "Reading Comprehension: Main Idea",
                subject: "reading",
                duration: "8:00",
                difficulty: "Intermediate",
                energy: 200,
                thumbnail: "📚💡",
                videoTranscript: "The main idea is what the story is mostly about. Let's find the main idea together!",
                practiceProblem: {
                    question: "What is this story mainly about? (Story about a dog finding a home)",
                    type: "choice",
                    options: ["Dogs eating", "A dog finding a home", "Different pets"],
                    correct: "A dog finding a home",
                    hint: "Think about what happened most in the story."
                },
                resources: ["Reading Comprehension Workbook", "Story Map Template"]
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
