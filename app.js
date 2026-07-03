// Modern Khan Academy - Interactive Learning Experience
// Following international best practices for lesson delivery

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initVideoPlayer();
    initTabs();
    initPracticeProblem();
    initModals();
    initNavigation();
});

/**
 * Video Player Functionality
 * Simulates video playback with interactive timeline
 */
function initVideoPlayer() {
    const playButton = document.getElementById('playVideo');
    const timelineProgress = document.querySelector('.timeline-progress');
    const markers = document.querySelectorAll('.marker');
    let isPlaying = false;
    let progress = 0;
    let playInterval;

    if (playButton) {
        playButton.addEventListener('click', togglePlay);
    }

    function togglePlay() {
        isPlaying = !isPlaying;
        
        if (isPlaying) {
            playButton.innerHTML = `
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16"/>
                    <rect x="14" y="4" width="4" height="16"/>
                </svg>
            `;
            startProgress();
        } else {
            playButton.innerHTML = `
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
            `;
            stopProgress();
        }
    }

    function startProgress() {
        playInterval = setInterval(() => {
            progress += 0.5;
            if (progress >= 100) {
                progress = 100;
                stopProgress();
                isPlaying = false;
                playButton.innerHTML = `
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                `;
                // Show completion after video ends
                setTimeout(() => {
                    enableNextLesson();
                }, 500);
            }
            timelineProgress.style.width = progress + '%';
        }, 100);
    }

    function stopProgress() {
        clearInterval(playInterval);
    }

    // Make markers clickable to jump to specific sections
    markers.forEach((marker, index) => {
        marker.addEventListener('click', () => {
            const positions = [0, 25, 50, 75];
            progress = positions[index];
            timelineProgress.style.width = progress + '%';
            
            // Highlight current segment in transcript
            highlightTranscriptSegment(index);
        });
    });
}

/**
 * Tab System for Transcript/Notes/Resources
 */
function initTabs() {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = {
        transcript: document.getElementById('transcript'),
        notes: document.getElementById('notes'),
        resources: document.getElementById('resources')
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Hide all content
            Object.values(tabContents).forEach(content => {
                if (content) {
                    content.classList.remove('active');
                }
            });
            
            // Show selected content
            const tabName = tab.dataset.tab;
            if (tabContents[tabName]) {
                tabContents[tabName].classList.add('active');
            }
        });
    });
}

/**
 * Interactive Practice Problem with Step-by-Step Guidance
 * Follows scaffolding pedagogy - breaking complex problems into manageable steps
 */
function initPracticeProblem() {
    const checkAnswerBtn = document.getElementById('checkAnswer');
    const feedbackArea = document.getElementById('feedbackArea');
    const nextStepBtn = document.getElementById('nextStep');
    const inputField = document.getElementById('step1-answer');
    const stepNumbers = document.querySelectorAll('.step-number');
    
    let currentStep = 1;
    const totalSteps = 3;

    if (checkAnswerBtn) {
        checkAnswerBtn.addEventListener('click', checkAnswer);
    }

    if (inputField) {
        inputField.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                checkAnswer();
            }
        });
    }

    if (nextStepBtn) {
        nextStepBtn.addEventListener('click', goToNextStep);
    }

    function checkAnswer() {
        const userAnswer = inputField.value.trim().toLowerCase().replace(/\s+/g, '');
        const correctAnswers = ['4x', '+4x'];
        
        if (correctAnswers.includes(userAnswer)) {
            showFeedback(true);
        } else {
            showFeedback(false);
        }
    }

    function showFeedback(isCorrect) {
        feedbackArea.hidden = false;
        
        if (isCorrect) {
            feedbackArea.innerHTML = `
                <div class="feedback-content correct">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    <div>
                        <p><strong>Excellent!</strong> When you add 2x + 2x, you get 4x. The +3y and −3y cancel out.</p>
                        <p style="margin-top: 8px; font-size: 13px;">Now solve: 4x = 18, so x = ?</p>
                    </div>
                </div>
                <button class="btn-secondary" id="nextStep" style="margin-top: 16px;">Continue to Step 2</button>
            `;
            
            // Re-attach event listener to new button
            document.getElementById('nextStep').addEventListener('click', goToNextStep);
            
            // Update step indicator
            updateStepIndicator(2);
        } else {
            feedbackArea.innerHTML = `
                <div class="feedback-content incorrect">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="15" y1="9" x2="9" y2="15"/>
                        <line x1="9" y1="9" x2="15" y2="15"/>
                    </svg>
                    <div>
                        <p><strong>Not quite.</strong> Let's think about this:</p>
                        <ul style="margin-top: 8px; margin-left: 20px; font-size: 13px;">
                            <li>Add the x terms: 2x + 2x = ?</li>
                            <li>Add the y terms: 3y + (−3y) = ?</li>
                        </ul>
                        <button class="btn-help" id="showHint" style="margin-top: 12px;">Show me a hint</button>
                    </div>
                </div>
            `;
            
            document.getElementById('showHint').addEventListener('click', () => {
                openHintModal();
            });
        }
    }

    function goToNextStep() {
        currentStep++;
        
        if (currentStep > totalSteps) {
            // Lesson complete!
            showCompletionModal();
            return;
        }
        
        updateStepIndicator(currentStep);
        updateProblemContent(currentStep);
        feedbackArea.hidden = true;
        inputField.value = '';
    }

    function updateStepIndicator(step) {
        stepNumbers.forEach((num, index) => {
            if (index + 1 <= step) {
                num.classList.add('active');
                if (index + 1 < step) {
                    num.style.background = 'var(--primary-green)';
                    num.textContent = '✓';
                }
            } else {
                num.classList.remove('active');
                num.textContent = index + 1;
            }
        });
    }

    function updateProblemContent(step) {
        const instructionEl = document.querySelector('.step-instruction');
        const labelEl = document.querySelector('.input-area label');
        
        const steps = {
            2: {
                instruction: 'Step 2: Solve for x',
                label: 'If 4x = 18, what is x?',
                placeholder: 'Enter your answer'
            },
            3: {
                instruction: 'Step 3: Substitute back to find y',
                label: 'Substitute x into equation (1): 2x + 3y = 13. What is y?',
                placeholder: 'Enter your answer'
            }
        };
        
        if (steps[step]) {
            instructionEl.textContent = steps[step].instruction;
            labelEl.textContent = steps[step].label;
            inputField.placeholder = steps[step].placeholder;
        }
    }
}

/**
 * Modal Management
 */
function initModals() {
    const hintModal = document.getElementById('hintModal');
    const closeHintBtn = document.getElementById('closeHint');
    const gotItBtn = document.getElementById('gotIt');
    const hintBtn = document.getElementById('hintBtn');
    const completionModal = document.getElementById('completionModal');
    const continueLearningBtn = document.getElementById('continueLearning');

    if (hintBtn) {
        hintBtn.addEventListener('click', openHintModal);
    }

    if (closeHintBtn) {
        closeHintBtn.addEventListener('click', () => {
            hintModal.hidden = true;
        });
    }

    if (gotItBtn) {
        gotItBtn.addEventListener('click', () => {
            hintModal.hidden = true;
        });
    }

    if (continueLearningBtn) {
        continueLearningBtn.addEventListener('click', () => {
            completionModal.hidden = true;
            // In a real app, this would navigate to the next lesson
            window.location.hash = '#next-lesson';
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === hintModal) {
            hintModal.hidden = true;
        }
        if (e.target === completionModal) {
            completionModal.hidden = true;
        }
    });
}

function openHintModal() {
    const hintModal = document.getElementById('hintModal');
    if (hintModal) {
        hintModal.hidden = false;
    }
}

function showCompletionModal() {
    const completionModal = document.getElementById('completionModal');
    if (completionModal) {
        completionModal.hidden = false;
        
        // Animate the success circle
        animateCompletion();
    }
}

function animateCompletion() {
    const progressCircle = document.getElementById('progressCircle');
    const checkMark = document.getElementById('checkMark');
    
    if (progressCircle) {
        progressCircle.style.animation = 'none';
        progressCircle.offsetHeight; // Trigger reflow
        progressCircle.style.animation = 'drawCircle 1s ease forwards';
    }
    
    if (checkMark) {
        checkMark.style.animation = 'none';
        checkMark.offsetHeight; // Trigger reflow
        checkMark.style.animation = 'drawCheck 0.5s ease 1s forwards';
    }
}

function enableNextLesson() {
    const nextBtn = document.getElementById('btnNextLesson');
    if (nextBtn) {
        nextBtn.disabled = false;
        nextBtn.style.opacity = '1';
        nextBtn.style.cursor = 'pointer';
    }
}

/**
 * Navigation and Breadcrumb functionality
 */
function initNavigation() {
    const lessonLinks = document.querySelectorAll('.lesson-link');
    
    lessonLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.classList.contains('current')) {
                e.preventDefault();
                return;
            }
            
            if (link.querySelector('.lock-icon')) {
                e.preventDefault();
                alert('Please complete the current lesson first!');
                return;
            }
            
            // In a real app, this would navigate to the lesson
            // For demo, just update the UI
            lessonLinks.forEach(l => l.classList.remove('current'));
            link.classList.add('current');
            
            // Update play icon
            const icons = link.querySelectorAll('.video-icon, .play-icon');
            icons.forEach(icon => {
                icon.classList.remove('video-icon');
                icon.classList.add('play-icon');
            });
        });
    });

    // Unit expansion/collapse
    const unitBtns = document.querySelectorAll('.unit-btn');
    unitBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const parentLi = btn.closest('.unit-item');
            const lessonList = parentLi.querySelector('.lesson-list');
            
            if (lessonList) {
                lessonList.style.display = lessonList.style.display === 'none' ? 'block' : 'none';
            }
        });
    });
}

/**
 * Helper function to highlight transcript segments based on video position
 */
function highlightTranscriptSegment(index) {
    const segments = document.querySelectorAll('.transcript-segment');
    segments.forEach((segment, i) => {
        if (i === index) {
            segment.style.backgroundColor = 'var(--gray-100)';
            segment.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
            segment.style.backgroundColor = '';
        }
    });
}

/**
 * Note-taking functionality with auto-save simulation
 */
const notesTextarea = document.querySelector('.notes textarea');
if (notesTextarea) {
    let saveTimeout;
    
    notesTextarea.addEventListener('input', () => {
        clearTimeout(saveTimeout);
        saveTimeout = setTimeout(() => {
            // Simulate auto-save
            console.log('Note auto-saved:', notesTextarea.value.substring(0, 50) + '...');
            
            // Visual feedback
            const status = document.createElement('span');
            status.textContent = '✓ Saved';
            status.style.cssText = 'color: var(--primary-green); font-size: 12px; margin-left: 8px;';
            
            const existingStatus = notesTextarea.parentElement.querySelector('span');
            if (existingStatus) {
                existingStatus.remove();
            }
            
            notesTextarea.parentElement.appendChild(status);
            setTimeout(() => status.remove(), 2000);
        }, 1000);
    });
}

/**
 * Accessibility enhancements
 */
document.addEventListener('keydown', (e) => {
    // ESC to close modals
    if (e.key === 'Escape') {
        const modals = document.querySelectorAll('.modal:not([hidden])');
        modals.forEach(modal => {
            modal.hidden = true;
        });
    }
    
    // Space to play/pause video when focused
    if (e.key === ' ' && e.target.classList.contains('play-button')) {
        e.preventDefault();
        e.target.click();
    }
});

/**
 * Progress tracking simulation
 */
function updateProgress(percentage) {
    const progressBar = document.querySelector('.progress-fill');
    if (progressBar) {
        progressBar.style.width = percentage + '%';
    }
    
    const progressText = document.querySelector('.progress-text');
    if (progressText) {
        progressText.textContent = percentage + '% complete';
    }
}

/**
 * Energy points animation
 */
function addEnergyPoints(points) {
    const energyDisplay = document.querySelector('.energy-points');
    if (energyDisplay) {
        const currentPoints = parseInt(energyDisplay.textContent.match(/\d+/)[0]);
        const newPoints = currentPoints + points;
        
        // Animate the counter
        let displayed = currentPoints;
        const increment = Math.ceil(points / 20);
        const interval = setInterval(() => {
            displayed += increment;
            if (displayed >= newPoints) {
                displayed = newPoints;
                clearInterval(interval);
            }
            energyDisplay.innerHTML = `
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
                ${displayed} energy points
            `;
        }, 50);
    }
}

// Export functions for potential external use
window.KhanAcademyModern = {
    updateProgress,
    addEnergyPoints,
    showCompletionModal,
    openHintModal
};

console.log('🎓 Khan Academy Modern - Learning Platform Initialized');
console.log('Following international best practices for lesson delivery:');
console.log('- Scaffolding: Breaking complex problems into steps');
console.log('- Immediate feedback on practice problems');
console.log('- Multiple learning modalities (video, text, interactive)');
console.log('- Progressive disclosure of information');
console.log('- Metacognitive support (hints, transcripts, notes)');
