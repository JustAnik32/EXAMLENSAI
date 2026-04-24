document.addEventListener('DOMContentLoaded', () => {
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

    // When exam changes, populate subjects
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

    const startQuizBtn = document.getElementById('start-quiz-btn');
    if (startQuizBtn) {
        startQuizBtn.addEventListener('click', () => {
            const examId = examSelect.value;
            if (!examId) return alert('Please select an exam first.');

            selectedExamId = examId;
            const subjectId = subjectSelect.value;
            let questions = [...examData.questions[examId]];

            // Filter by subject if selected
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

    // Heatmap
    function renderHeatmap() {
        const heatmap = document.getElementById('heatmap-container');
        if (!heatmap) return;

        // Group by topic and calculate performance
        const topicMap = {};
        currentQuiz.forEach((q, i) => {
            if (!topicMap[q.topic]) topicMap[q.topic] = { correct: 0, total: 0 };
            topicMap[q.topic].total++;
        });
        // Simulate random performance for demo
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

    // Study Plan
    function generateStudyPlan() {
        const planContainer = document.getElementById('study-plan');
        if (!planContainer) return;

        const weakTopics = [];
        currentQuiz.forEach(q => {
            if (!weakTopics.includes(q.topic) && Math.random() < 0.5) {
                weakTopics.push(q.topic);
            }
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

    if (sendBtn && chatInput && messages) {
        sendBtn.addEventListener('click', handleChat);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleChat();
        });
    }

    function handleChat() {
        const text = chatInput.value.trim();
        if (!text) return;
        messages.innerHTML += `<div class="chat-msg msg-user">${text}</div>`;
        chatInput.value = '';
        messages.scrollTop = messages.scrollHeight;

        setTimeout(() => {
            messages.innerHTML += `<div class="chat-msg msg-ai">Great question about "${text}"! Let me break it down step-by-step for you. The key concept here involves understanding the fundamental principles first, then applying them to solve problems. (Simulated AI Response — connect a real API like Gemini for production use.)</div>`;
            messages.scrollTop = messages.scrollHeight;
        }, 1000);
    }

    // Teach AI Logic
    const teachBtn = document.getElementById('submit-teaching-btn');
    const teachTopic = document.getElementById('teach-topic');
    const teachExpl = document.getElementById('teach-explanation');
    const teachFeedbackContainer = document.getElementById('teach-feedback-container');
    const teachFeedbackContent = document.getElementById('teach-feedback-content');

    if (teachBtn) {
        teachBtn.addEventListener('click', () => {
            const topic = teachTopic.value.trim();
            const expl = teachExpl.value.trim();

            if (!topic || !expl) {
                alert('Please enter both a topic and your explanation.');
                return;
            }

            teachBtn.disabled = true;
            teachBtn.textContent = 'Analyzing your explanation...';
            teachFeedbackContainer.style.display = 'none';

            setTimeout(() => {
                teachBtn.disabled = false;
                teachBtn.textContent = 'Submit Explanation';
                teachFeedbackContainer.style.display = 'block';

                const wordCount = expl.split(/\s+/).length;
                let uScore;

                if (wordCount < 10) {
                    uScore = Math.floor(Math.random() * 2) + 1; // 1-2
                    teachFeedbackContent.innerHTML = `
                        <h4 style="color: var(--danger-color); margin-bottom: 10px; font-size: 1.2rem;">Understanding Score: ${uScore}/10</h4>
                        <p style="margin-bottom: 10px;"><strong>❌ Explanation Too Short:</strong> Your explanation is very brief ("${expl}"). It's hard to gauge your understanding.</p>
                        <p><strong>📝 Action:</strong> Please try explaining the concept of "${topic}" in more detail, as if you were teaching it to a beginner.</p>
                    `;
                    return;
                }

                const explLower = expl.toLowerCase();
                const topicWords = topic.toLowerCase().split(/\s+/).filter(w => w.length > 2);
                const hasRelevance = topicWords.length === 0 || topicWords.some(w => explLower.includes(w));

                if (!hasRelevance && wordCount < 20) {
                    uScore = Math.floor(Math.random() * 2) + 3; // 3-4
                    teachFeedbackContent.innerHTML = `
                        <h4 style="color: var(--danger-color); margin-bottom: 10px; font-size: 1.2rem;">Understanding Score: ${uScore}/10</h4>
                        <p style="margin-bottom: 10px;"><strong>⚠️ Needs Focus:</strong> Your explanation doesn't clearly address the core aspects of "${topic}".</p>
                        <p><strong>📝 Action:</strong> Review your material and make sure you hit the key keywords related to this topic.</p>
                    `;
                    return;
                }

                uScore = wordCount > 40 ? Math.floor(Math.random() * 2) + 8 : Math.floor(Math.random() * 3) + 5;
                if (uScore > 10) uScore = 10;

                const scoreColor = uScore >= 8 ? 'var(--success-color)' : uScore >= 5 ? 'var(--accent-color)' : 'var(--danger-color)';

                teachFeedbackContent.innerHTML = `
                    <h4 style="color: ${scoreColor}; margin-bottom: 10px; font-size: 1.5rem; text-shadow: 0 0 10px ${scoreColor}40;">Understanding Score: ${uScore}/10</h4>
                    <p style="margin-bottom: 10px;"><strong>✅ What you got right:</strong> Your explanation of "${topic}" demonstrates a ${uScore >= 7 ? 'solid' : 'basic'} grasp of the core idea. ${wordCount > 30 ? 'You provided a detailed explanation, which is great!' : 'Try adding more detail next time.'}</p>
                    <p style="margin-bottom: 10px;"><strong>⚠️ The Gap:</strong> Consider whether you covered the edge cases, exceptions, or real-world applications. For "${topic}", think about what happens at boundary conditions or how it connects to related topics.</p>
                    <p><strong>📝 Next Step:</strong> Re-read the "${topic}" section in your textbook, then try explaining it again without looking at notes. Repetition strengthens memory!</p>
                `;
            }, 2000);
        });
    }
});
