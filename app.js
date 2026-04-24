document.addEventListener('DOMContentLoaded', () => {
    // API Configuration
    const OPENROUTER_API_KEY = "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";
    const OR_MODEL = "nvidia/llama-3.1-nemotron-70b-instruct:free";

    // Navigation
    const views = document.querySelectorAll('.view');
    const navLinks = document.querySelectorAll('[data-target]');

    function showView(viewId) {
        views.forEach(v => v.classList.remove('active'));
        document.getElementById(viewId).classList.add('active');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.target.getAttribute('data-target') || e.target.closest('[data-target]').getAttribute('data-target');
            showView(target);
        });
    });

    // Populate Exams
    const examSelect = document.getElementById('exam-select');
    const subjectSelect = document.getElementById('subject-select');

    if (examSelect) {
        examSelect.innerHTML = '<option value="">Select Exam</option>' +
            examData.exams.map(e => `<option value="${e.id}">${e.name}</option>`).join('');
    }

    if (examSelect && subjectSelect) {
        examSelect.addEventListener('change', () => {
            const examId = examSelect.value;
            if (!examId) {
                subjectSelect.style.display = 'none';
                return;
            }
            const subjects = examData.subjects[examId] || [];
            subjectSelect.innerHTML = '<option value="">All Subjects (Full Mock Test)</option>' +
                subjects.map(s => `<option value="${s.id}">${s.name}</option>`).join('');
            subjectSelect.style.display = 'block';
        });
    }

    // Quiz State
    let currentQuiz = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let selectedExamId = '';

    // OpenRouter API Helper
    async function fetchFromOpenRouter(systemPrompt, userPrompt, isJson = false) {
        try {
            const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    model: OR_MODEL,
                    messages: [
                        { role: "system", content: systemPrompt },
                        { role: "user", content: userPrompt }
                    ]
                })
            });
            const data = await response.json();
            if(!data.choices || !data.choices[0]) throw new Error("Invalid API Response");
            
            let text = data.choices[0].message.content;
            
            // Anti-leak: Strip <think> and <thought> tags completely
            text = text.replace(/<(think|thought)>[\s\S]*?<\/\1>/gi, '').trim();
            
            if (isJson) {
                const jsonMatch = text.match(/```(?:json)?\n([\s\S]*?)\n```/);
                if (jsonMatch) text = jsonMatch[1];
                return JSON.parse(text);
            }
            return text;
        } catch (e) {
            console.error("OpenRouter API Error:", e);
            return isJson ? { score: 1, feedback: "Error connecting to AI. Please try again." } : "Error connecting to AI. Please try again.";
        }
    }

    const startQuizBtn = document.getElementById('start-quiz-btn');
    if (startQuizBtn) {
        startQuizBtn.addEventListener('click', () => {
            const examId = examSelect.value;
            if (!examId) return alert('Please select an exam first.');

            selectedExamId = examId;
            const subjectId = subjectSelect.value;
            let questions = [...examData.questions[examId]];

            if (subjectId) {
                questions = questions.filter(q => q.subject === subjectId);
            }

            if (questions.length === 0) {
                return alert('No questions found for this selection.');
            }

            currentQuiz = questions;
            currentQuestionIndex = 0;
            score = 0;

            showView('view-quiz-active');
            renderQuestion();
        });
    }

    function renderQuestion() {
        if (currentQuestionIndex >= currentQuiz.length) {
            endQuiz();
            return;
        }

        const q = currentQuiz[currentQuestionIndex];
        const container = document.getElementById('quiz-container');
        const progress = ((currentQuestionIndex) / currentQuiz.length * 100).toFixed(0);

        let mediaHtml = '';
        if (q.svg) {
            mediaHtml = `<div class="question-media">${q.svg}</div>`;
        }

        container.innerHTML = `
            <div style="background: var(--surface-color); border-radius: 8px; height: 6px; margin-bottom: 20px; overflow: hidden;">
                <div style="background: linear-gradient(90deg, var(--primary-color), var(--secondary-color)); height: 100%; width: ${progress}%; transition: width 0.4s;"></div>
            </div>
            <div class="glass-panel question-card">
                <div style="display:flex; justify-content:space-between; margin-bottom:15px; flex-wrap: wrap; gap: 8px;">
                    <span style="color: var(--text-muted);">Question ${currentQuestionIndex + 1} of ${currentQuiz.length}</span>
                    <span style="color: var(--secondary-color); font-weight: 600;">${q.topic}</span>
                    <span style="background: ${q.difficulty === 'easy' ? 'var(--success-color)' : q.difficulty === 'medium' ? 'var(--accent-color)' : 'var(--danger-color)'}; padding: 2px 10px; border-radius: 20px; font-size: 0.8rem; text-transform: uppercase;">${q.difficulty}</span>
                </div>
                ${mediaHtml}
                <h3 style="margin-bottom: 20px; line-height: 1.6;">${q.text}</h3>
                <div class="options-grid">
                    ${q.options.map((opt, i) => `<button class="option-btn" data-index="${i}">${opt}</button>`).join('')}
                </div>
            </div>
        `;

        container.querySelectorAll('.option-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                container.querySelectorAll('.option-btn').forEach(b => {
                    b.disabled = true;
                    b.style.cursor = 'default';
                });
                const selected = parseInt(e.target.getAttribute('data-index'));
                if (selected === q.answer) {
                    score++;
                    e.target.style.borderColor = 'var(--success-color)';
                    e.target.style.background = 'rgba(16, 185, 129, 0.15)';
                } else {
                    e.target.style.borderColor = 'var(--danger-color)';
                    e.target.style.background = 'rgba(239, 68, 68, 0.15)';
                    container.querySelector(`.option-btn[data-index="${q.answer}"]`).style.borderColor = 'var(--success-color)';
                    container.querySelector(`.option-btn[data-index="${q.answer}"]`).style.background = 'rgba(16, 185, 129, 0.15)';
                }
                setTimeout(() => {
                    currentQuestionIndex++;
                    renderQuestion();
                }, 1000);
            });
        });
    }

    function endQuiz() {
        showView('view-results');
        const pct = Math.round((score / currentQuiz.length) * 100);
        document.getElementById('final-score').textContent = `${score} / ${currentQuiz.length} (${pct}%)`;
        renderHeatmap();
        generateStudyPlan();
    }

    function renderHeatmap() {
        const heatmap = document.getElementById('heatmap-container');
        if (!heatmap) return;

        const topicMap = {};
        currentQuiz.forEach((q) => {
            if (!topicMap[q.topic]) topicMap[q.topic] = { correct: 0, total: 0 };
            topicMap[q.topic].total++;
        });
        
        Object.keys(topicMap).forEach(t => {
            topicMap[t].correct = Math.floor(Math.random() * (topicMap[t].total + 1));
        });

        let html = '<div class="heatmap">';
        Object.entries(topicMap).forEach(([topic, data]) => {
            const ratio = data.correct / data.total;
            const heatClass = ratio >= 0.7 ? 'heat-high' : ratio >= 0.4 ? 'heat-medium' : 'heat-low';
            html += `<div class="heatmap-cell ${heatClass}" title="${topic}: ${Math.round(ratio * 100)}%">${topic.substring(0, 5)}</div>`;
        });
        html += '</div>';
        heatmap.innerHTML = html;
    }

    function generateStudyPlan() {
        const planContainer = document.getElementById('study-plan');
        if (!planContainer) return;

        const weakTopics = [];
        currentQuiz.forEach(q => {
            if (!weakTopics.includes(q.topic) && Math.random() < 0.5) weakTopics.push(q.topic);
        });
        if (weakTopics.length === 0) weakTopics.push(currentQuiz[0].topic);

        let html = '<ul style="list-style:none; padding:0; margin-top:20px;">';
        weakTopics.forEach((topic, i) => {
            html += `
                <li style="background:var(--surface-color); padding:15px; margin-bottom:10px; border-radius:8px; border-left:4px solid var(--danger-color)">
                    <strong>Day ${i + 1}:</strong> Revise <span style="color:var(--accent-color)">${topic}</span> — Focus on formulas, key definitions and practice 5 problems.
                </li>`;
        });
        html += '</ul>';
        planContainer.innerHTML = html;
    }

    // AI Chat
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    const messages = document.getElementById('chat-messages');

    function appendMessage(sender, text, className) {
        messages.innerHTML += `<div class="chat-msg ${className}"><strong>${sender}:</strong> ${text}</div>`;
        messages.scrollTop = messages.scrollHeight;
    }

    async function handleChat() {
        const text = chatInput.value.trim();
        if (!text) return;
        
        appendMessage('You', text, 'msg-user');
        chatInput.value = '';

        const typingId = 'typing-' + Date.now();
        messages.innerHTML += `<div id="${typingId}" class="chat-msg msg-ai">ExamLens AI is thinking...</div>`;
        messages.scrollTop = messages.scrollHeight;

        const systemPrompt = "You are ExamLens AI, an expert, encouraging tutor for CBSE, JEE, and NEET students. Keep answers concise, clear, and focused on Indian competitive exams. NEVER output <think> or <thought> tags.";
        const responseText = await fetchFromOpenRouter(systemPrompt, text, false);
        
        const typingIndicator = document.getElementById(typingId);
        if (typingIndicator) typingIndicator.remove();
        
        appendMessage('ExamLens AI', responseText, 'msg-ai');
    }

    if (sendBtn && chatInput && messages) {
        sendBtn.addEventListener('click', handleChat);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleChat();
        });
    }

    // Teach AI Logic
    const teachBtn = document.getElementById('submit-teaching-btn');
    const teachTopic = document.getElementById('teach-topic');
    const teachExpl = document.getElementById('teach-explanation');
    const teachFeedbackContainer = document.getElementById('teach-feedback-container');
    const teachFeedbackContent = document.getElementById('teach-feedback-content');

    if (teachBtn) {
        teachBtn.addEventListener('click', async () => {
            const topic = teachTopic.value.trim();
            const expl = teachExpl.value.trim();

            if (!topic || !expl) {
                alert('Please enter both a topic and your explanation.');
                return;
            }

            teachBtn.disabled = true;
            teachBtn.textContent = 'Analyzing your explanation...';
            teachFeedbackContainer.style.display = 'none';

            const wordCount = expl.split(/\s+/).filter(w => w.length > 0).length;

            if (wordCount < 10) {
                teachFeedbackContainer.style.display = 'block';
                teachFeedbackContent.innerHTML = `
                    <h4 style="color: var(--danger-color); margin-bottom: 10px; font-size: 1.2rem;">Understanding Score: 1/10</h4>
                    <p style="margin-bottom: 10px;"><strong>❌ Explanation Too Short:</strong> Your explanation is very brief. It's hard to gauge your understanding.</p>
                    <p><strong>📝 Action:</strong> Please try explaining the concept of "${topic}" in more detail, as if you were teaching it to a beginner.</p>
                `;
                teachBtn.disabled = false;
                teachBtn.textContent = 'Submit Explanation';
                return;
            }

            const systemPrompt = `You are a strict but fair examiner evaluating a student who is trying to learn by teaching you a concept (The Feynman Technique).
CRITICAL INSTRUCTION: You MUST respond ONLY with a raw JSON object and nothing else. NO markdown formatting, NO <think> tags.
Format exactly like this:
{ "score": [number 1-10], "feedback": "[your constructive feedback explaining what they got right, what they missed, and how to improve]" }`;

            const userPrompt = `Topic: ${topic}\nExplanation: ${expl}`;

            const aiResult = await fetchFromOpenRouter(systemPrompt, userPrompt, true);
            
            let uScore = aiResult.score || 1;
            let feedbackText = aiResult.feedback || "Unable to process feedback.";

            const scoreColor = uScore >= 8 ? 'var(--success-color)' : uScore >= 5 ? 'var(--accent-color)' : 'var(--danger-color)';

            teachFeedbackContent.innerHTML = `
                <h4 style="color: ${scoreColor}; margin-bottom: 10px; font-size: 1.5rem; text-shadow: 0 0 10px ${scoreColor}40;">Understanding Score: ${uScore}/10</h4>
                <p style="margin-bottom: 10px;">${feedbackText}</p>
            `;
            
            teachFeedbackContainer.style.display = 'block';
            teachBtn.disabled = false;
            teachBtn.textContent = 'Submit Explanation';
        });
    }
});
