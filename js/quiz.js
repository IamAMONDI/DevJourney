const questions = [
    {
        id: 1,
        text: "When facing a complex problem, I prefer to...",
        options: [
            { text: "Break it down into logical algorithms and optimize the memory usage.", type: "lowLevel" },
            { text: "Design a visually engaging interface that guides the user to a solution.", type: "fullStack" },
            { text: "Create an immersive 3D simulation to visualize the problem space.", type: "arVr" },
            { text: "Train a model using existing data to predict the outcome.", type: "machineLearning" }
        ]
    },
    {
        id: 2,
        text: "Which project sounds most exciting to you?",
        options: [
            { text: "Writing a custom operating system kernel or device driver.", type: "lowLevel" },
            { text: "Building a scalable e-commerce platform with a beautiful front-end.", type: "fullStack" },
            { text: "Developing an application that lets users interact with holograms.", type: "arVr" },
            { text: "Creating a recommendation engine that suggests movies based on watch history.", type: "machineLearning" }
        ]
    },
    {
        id: 3,
        text: "What type of data processing do you find most interesting?",
        options: [
            { text: "Bitwise operations and memory pointers.", type: "lowLevel" },
            { text: "Handling JSON APIs and database queries.", type: "fullStack" },
            { text: "Real-time spatial mapping and sensor fusion.", type: "arVr" },
            { text: "Large datasets for neural network training and validation.", type: "machineLearning" }
        ]
    }
];

let currentQuestionIndex = 0;
let userAnswers = {}; // Store chosen option type
let timeLeft = 180; // 3 minutes
let timerInterval;

const elements = {
    timer: document.getElementById('timer'),
    progressBar: document.getElementById('progressBar'),
    questionText: document.getElementById('questionText'),
    optionsGrid: document.getElementById('optionsGrid'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    audioContainer: document.getElementById('audioContainer'),
    imageContainer: document.getElementById('imageContainer')
};

function initQuiz() {
    startTimer();
    loadQuestion(currentQuestionIndex);
    
    elements.prevBtn.addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            loadQuestion(currentQuestionIndex);
        }
    });

    elements.nextBtn.addEventListener('click', () => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            loadQuestion(currentQuestionIndex);
        } else {
            finishQuiz();
        }
    });
}

function loadQuestion(index) {
    const question = questions[index];
    elements.questionText.textContent = `Q${index + 1}: ${question.text}`;
    
    // Reset options
    elements.optionsGrid.innerHTML = '';
    
    question.options.forEach((option, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option.text;
        
        // Highlight if already selected
        if (userAnswers[question.id] === option.type) {
            btn.style.borderColor = 'var(--primary-color)';
            btn.style.background = 'rgba(59, 130, 246, 0.1)';
        }

        btn.addEventListener('click', () => selectOption(question.id, option.type, btn));
        elements.optionsGrid.appendChild(btn);
    });

    updateUI();
}

function selectOption(questionId, optionType, selectedBtn) {
    userAnswers[questionId] = optionType;
    
    // Reset styling for all buttons
    const buttons = elements.optionsGrid.querySelectorAll('.option-btn');
    buttons.forEach(btn => {
        btn.style.borderColor = 'var(--glass-border)';
        btn.style.background = 'rgba(15, 23, 42, 0.8)';
    });

    // Highlight selected
    selectedBtn.style.borderColor = 'var(--primary-color)';
    selectedBtn.style.background = 'rgba(59, 130, 246, 0.1)';

    elements.nextBtn.disabled = false;
}

function updateUI() {
    // Update progress bar
    const progress = ((currentQuestionIndex) / questions.length) * 100;
    elements.progressBar.style.width = `${progress}%`;

    // Navigation buttons state
    elements.prevBtn.disabled = currentQuestionIndex === 0;
    
    const hasAnswered = !!userAnswers[questions[currentQuestionIndex].id];
    elements.nextBtn.disabled = !hasAnswered;
    
    if (currentQuestionIndex === questions.length - 1) {
        elements.nextBtn.textContent = 'See Results';
    } else {
        elements.nextBtn.textContent = 'Next';
    }
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        elements.timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (timeLeft <= 60) {
            elements.timer.style.color = 'var(--error-color)'; // Warn when < 1 min
        }

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up! Calculating your results based on answered questions.");
            finishQuiz();
        }
    }, 1000);
}

function finishQuiz() {
    clearInterval(timerInterval);
    // Tally results
    const scores = { lowLevel: 0, fullStack: 0, arVr: 0, machineLearning: 0 };
    Object.values(userAnswers).forEach(type => {
        if (scores[type] !== undefined) scores[type]++;
    });

    // Save to local storage and redirect
    localStorage.setItem('quizScores', JSON.stringify(scores));
    window.location.href = 'results.html';
}

document.addEventListener('DOMContentLoaded', initQuiz);
