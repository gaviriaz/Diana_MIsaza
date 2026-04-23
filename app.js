// Datos de los artículos
const articles = [
    {
        id: 1,
        title: "Blockchain para la salud inteligente: Una revisión sistemática de seguridad, interoperabilidad e integración de IA-IoT",
        url: "https://journals.sagepub.com/doi/10.1177/20552076261420985",
        tag: "Revisión Sistemática",
        summary: `
            <p>Este estudio analiza de forma sistemática cómo la tecnología blockchain puede utilizarse para resolver problemas críticos en el ecosistema de salud digital, tales como la fragmentación de datos, las vulnerabilidades de seguridad y el control limitado del paciente.</p>
            <p><strong>Hallazgos Clave:</strong></p>
            <ul>
                <li><strong>Beneficios:</strong> Mejora consistente en el manejo de Registros Médicos Electrónicos (EHR) a través del control de acceso criptográfico, pistas de auditoría inmutables y un mejor intercambio de datos interinstitucional.</li>
                <li><strong>Desafíos:</strong> Limitaciones de escalabilidad, restricciones de interoperabilidad con sistemas legados, y dilemas éticos y regulatorios (como el derecho al olvido).</li>
                <li><strong>Integración AI/IoT:</strong> En entornos multiinstitucionales, la combinación de blockchain e IA permite un "aprendizaje federado que preserva la privacidad", facilitando diagnósticos médicos colaborativos sin centralizar datos sensibles.</li>
            </ul>
        `,
        challenge: {
            type: 'audit',
            title: 'Auditoría Criptográfica Avanzada',
            description: 'Rol: Auditor de Seguridad. Analiza el siguiente flujo de datos interinstitucional e identifica la vulnerabilidad estructural que viola los principios de Blockchain en salud.',
            codeSnippet: [
                "1. Hospital A envía EHR cifrado al Nodo Central.",
                "2. El Nodo Central descifra el EHR para validación clínica.",
                "3. El Nodo Central registra un hash de auditoría en el Ledger Público.",
                "4. Hospital B consulta el Ledger y solicita acceso al Nodo Central."
            ],
            options: [
                { text: "El uso de un Ledger Público expone metadatos sensibles.", isCorrect: false, feedback: "Incorrecto. Los ledgers públicos pueden configurarse para ocultar metadatos (Zero-Knowledge Proofs)." },
                { text: "El Nodo Central descifra el EHR, creando un punto único de fallo y vulnerando la privacidad.", isCorrect: true, feedback: "¡Preciso! En una arquitectura blockchain robusta, la validación debe realizarse mediante pruebas de conocimiento cero o computación multipartita, sin que un intermediario centralice y descifre los datos." },
                { text: "El Hospital B debe solicitar permiso directamente al paciente, no al Nodo.", isCorrect: false, feedback: "Aunque ideal, no es la falla estructural principal del flujo técnico descrito." }
            ]
        }
    },
    {
        id: 2,
        title: "Una revisión sistemática sobre el impacto de la consolidación de la atención médica en la era digital",
        url: "https://doi.org/10.1016/j.hlpt.2025.101138",
        tag: "Revisión Sistemática",
        summary: `
            <p>Esta revisión examina cómo la consolidación de proveedores de atención médica, particularmente entre hospitales, afecta a la Tecnología de la Información en Salud (HIT), con un enfoque en los Registros Médicos Electrónicos (EHR) y la interoperabilidad.</p>
            <p><strong>Hallazgos Clave:</strong></p>
            <ul>
                <li><strong>Mejoras en el Intercambio:</strong> La consolidación se asocia significativamente con mejoras en el intercambio de información y un aumento en el uso de los servicios de salud (especialmente urgencias y atención primaria).</li>
                <li><strong>El Reto de la Interoperabilidad:</strong> Aunque hay avances, el simple hecho de compartir datos no significa lograr una interoperabilidad completa, la cual requiere el uso fluido y significativo de la información a través de los sistemas.</li>
                <li><strong>Impacto Mixto:</strong> La evidencia actual sobre cómo la consolidación afecta realmente la rentabilidad y la calidad directa de la atención al paciente sigue arrojando resultados mixtos.</li>
            </ul>
        `,
        challenge: {
            type: 'matching',
            title: 'Mapeo Estratégico Sistémico',
            description: 'Nivel Universitario: Conecta las dinámicas de consolidación hospitalaria con sus ramificaciones arquitectónicas en la infraestructura de datos.',
            pairs: [
                { left: 'Adquisición de Clínicas Periféricas', right: 'Migración forzada de sistemas EHR satélites', id: 1 },
                { left: 'Consolidación de Monopolio Regional', right: 'Riesgo de Information Blocking intencional', id: 2 },
                { left: 'Estandarización Corporativa', right: 'Reducción de costos de mantenimiento de APIs', id: 3 },
                { left: 'Fusión de Bases de Datos Legacy', right: 'Pérdida de granularidad semántica local', id: 4 }
            ]
        }
    },
    {
        id: 3,
        title: "El papel de HL7 FHIR en el manejo de enfermedades crónicas: Una revisión panorámica",
        url: "https://doi.org/10.1016/j.ijmedinf.2024.105507",
        tag: "Scoping Review",
        summary: `
            <p>Esta revisión panorámica evalúa el impacto del estándar HL7 FHIR en el ecosistema digital de la salud, centrándose específicamente en el manejo de enfermedades crónicas a través de la literatura científica y los registros de Guías de Implementación (IGs).</p>
            <p><strong>Hallazgos Clave:</strong></p>
            <ul>
                <li><strong>Propósito Principal:</strong> FHIR se adopta principalmente para garantizar la interoperabilidad desde su diseño, integrando Sistemas de Soporte a la Decisión Clínica (CDSS) con aplicaciones de salud y facilitando la exportación y reutilización de datos (mediante APIs RESTful abiertas).</li>
                <li><strong>Áreas de Mayor Impacto:</strong> El cáncer es la condición crónica con mayor adopción de FHIR tanto en la academia como en la industria, seguido por iniciativas importantes en diabetes y enfermedades cardiovasculares.</li>
                <li><strong>Adopción y Versiones:</strong> La versión "Release 4" (R4) es la más dominante. Geográficamente, Europa (destacando Alemania) y Estados Unidos lideran tanto en investigación como en la creación de guías, subrayando la necesidad de mayor colaboración internacional para estándares globales.</li>
            </ul>
        `,
        challenge: {
            type: 'builder',
            title: 'Arquitecto de Interoperabilidad: API FHIR',
            description: 'Nivel Avanzado: Construye la carga útil (payload) JSON estructural requerida para transmitir una "Condición Clínica" válida a través de una API FHIR RESTful.',
            steps: [
                {
                    instruction: '1. Define la semántica base del recurso:',
                    options: ['"resourceType": "ClinicalData"', '"resourceType": "Condition"', '"resourceType": "Observation"'],
                    correct: '"resourceType": "Condition"',
                    jsonKey: 'resourceType',
                    jsonValue: '"Condition"'
                },
                {
                    instruction: '2. Asigna la ontología de interoperabilidad semántica (SNOMED CT):',
                    options: ['{ "system": "http://snomed.info/sct" }', '{ "system": "ICD-10" }', '{ "code": "LOINC" }'],
                    correct: '{ "system": "http://snomed.info/sct" }',
                    jsonKey: 'coding',
                    jsonValue: '[{ "system": "http://snomed.info/sct", "code": "363346000", "display": "Malignant tumor" }]'
                },
                {
                    instruction: '3. Establece la referencia obligatoria al sujeto clínico:',
                    options: ['"subject": { "reference": "Patient/12345" }', '"patientId": "12345"', '"target": "User123"'],
                    correct: '"subject": { "reference": "Patient/12345" }',
                    jsonKey: 'subject',
                    jsonValue: '{ "reference": "Patient/12345" }'
                }
            ]
        }
    },
    {
        id: 4,
        title: "Interoperabilidad en la atención médica: Beneficios, desafíos y resoluciones",
        url: "https://www.researchgate.net/publication/282322922",
        tag: "Artículo Científico",
        summary: `
            <p>Este artículo evalúa el concepto de interoperabilidad en el contexto de la atención médica, detallando sus beneficios críticos, las barreras existentes y proponiendo soluciones viables para alcanzar un ecosistema de salud digital unificado.</p>
            <p><strong>Beneficios Principales:</strong></p>
            <ul>
                <li>Acceso ágil y oportuno a los registros de pacientes, reducción drástica de errores médicos e integración estructurada de historias clínicas.</li>
                <li>Disminución significativa de los costos de atención y un soporte mucho más robusto para el manejo preventivo de enfermedades crónicas.</li>
            </ul>
            <p><strong>Desafíos y Soluciones (Resolutions):</strong></p>
            <ul>
                <li><strong>Barreras actuales:</strong> Alta complejidad del dominio de la salud, problemas de estandarización (múltiples estándares como HL7, DICOM que causan confusión), ontologías incompatibles, dependencia de sistemas heredados (legacy) y resistencia cultural al cambio del papel a lo digital.</li>
                <li><strong>Pasos a seguir:</strong> Adopción universal de terminologías clínicas estandarizadas, integración estratégica de sistemas heredados, planes de educación en TIC para el personal, implementación de políticas estrictas de seguridad/privacidad y mejoras en la usabilidad de las interfaces.</li>
            </ul>
        `,
        challenge: {
            type: 'scenario',
            title: 'Simulador de CIO: Estrategia de Migración',
            description: 'Eres el CIO de un consorcio hospitalario. Tienes presupuesto limitado y sistemas cerrados legacy. Toma la mejor decisión para lograr la interoperabilidad institucional.',
            situations: [
                {
                    prompt: "El comité directivo exige compartir datos inmediatamente con una nueva red de laboratorios, pero sus servidores usan protocolos cerrados de los años 90. ¿Qué estrategia adoptas?",
                    options: [
                        { 
                            text: "Iniciar un proyecto de reemplazo total (Rip-and-Replace) del sistema legacy.", 
                            outcome: "Fracaso: El proyecto tarda 3 años, el presupuesto se agota y los directivos cancelan la integración.", 
                            success: false 
                        },
                        { 
                            text: "Implementar una capa Middleware que actúe como traductor entre el protocolo legacy y APIs modernas (REST/FHIR).", 
                            outcome: "Éxito: Logras una integración ágil y económica. Extiendes la vida útil del sistema mientras planeas una migración gradual.", 
                            success: true 
                        },
                        { 
                            text: "Exportar los datos del laboratorio en formato CSV diariamente e importarlos manualmente.", 
                            outcome: "Fracaso: Alta tasa de errores humanos, retrasos críticos en diagnósticos y violación de políticas de seguridad.", 
                            success: false 
                        }
                    ]
                }
            ]
        }
    }
];

// Inicialización de datos locales (LocalStorage)
const STORAGE_KEY = 'blog_diana_data';
let blogData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

// Asegurar que cada artículo tenga su objeto de estado
articles.forEach(art => {
    if (!blogData[art.id]) {
        blogData[art.id] = {
            reactions: { insightful: 0, innovative: 0, complex: 0 },
            reviews: [],
            challengeCompleted: false
        };
    }
});
saveData();

let currentArticleId = null;

// Elementos del DOM
const articlesGrid = document.getElementById('articles-grid');
const modal = document.getElementById('article-modal');
const closeModalBtn = document.getElementById('close-modal');
const reviewForm = document.getElementById('review-form');

// Inicializar la interfaz
function init() {
    renderArticles();
    lucide.createIcons();
    
    // Configurar progreso de lectura en modal
    const modalContent = document.getElementById('modal-scroll-content');
    const progressBar = document.getElementById('modal-progress-bar');
    modalContent.addEventListener('scroll', () => {
        const scrollTop = modalContent.scrollTop;
        const scrollHeight = modalContent.scrollHeight - modalContent.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = scrollPercentage + '%';
    });
}

// Renderizar las tarjetas de los artículos
function renderArticles() {
    articlesGrid.innerHTML = '';
    let completedCount = 0;
    
    articles.forEach((art, index) => {
        if (blogData[art.id].challengeCompleted) completedCount++;
        const delay = index * 0.1;
        const card = document.createElement('div');
        card.className = 'article-card fade-in-up';
        card.style.animationDelay = `${delay}s`;
        card.innerHTML = `
            ${blogData[art.id].challengeCompleted ? '<div class="completion-badge"><i data-lucide="check-circle" style="width:16px;height:16px;"></i> Completado</div>' : ''}
            <span class="tag">${art.tag}</span>
            <h3>${art.title}</h3>
            <div class="card-footer">
                <span class="read-more">Leer análisis <i data-lucide="arrow-right"></i></span>
                <div class="card-stats" style="color: var(--text-muted); font-size: 0.85rem;">
                    <i data-lucide="message-square" style="width:14px;height:14px;vertical-align:middle;"></i> ${blogData[art.id].reviews.length}
                </div>
            </div>
        `;
        card.addEventListener('click', () => openModal(art.id));
        articlesGrid.appendChild(card);
    });
    
    // Update global progress
    const progressEl = document.getElementById('global-progress');
    const progressBar = document.getElementById('mastery-progress');
    if (progressEl && progressBar) {
        const percentage = Math.round((completedCount / articles.length) * 100);
        progressEl.textContent = percentage + '%';
        progressBar.style.width = percentage + '%';
    }
}

// Lógica del Modal
function openModal(id) {
    currentArticleId = id;
    const article = articles.find(a => a.id === id);
    
    document.getElementById('modal-tag').textContent = article.tag;
    document.getElementById('modal-title').textContent = article.title;
    document.getElementById('modal-summary').innerHTML = article.summary;
    
    renderChallenge(article.challenge);
    
    const urlBtn = document.getElementById('modal-url');
    urlBtn.href = article.url;
    urlBtn.style.display = article.url === '#' ? 'none' : 'inline-flex';

    updateReactionsUI();
    renderReviews();
    
    modal.classList.add('active');
    const modalContent = modal.querySelector('.modal-content');
    modalContent.scrollTop = 0; // Reset modal scroll
    document.getElementById('modal-progress-bar').style.width = '0%'; // Reset progress
    document.body.style.overflow = 'hidden'; // Prevenir scroll de fondo
    lucide.createIcons();
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    currentArticleId = null;
    reviewForm.reset();
}

closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// Lógica de Reacciones
document.querySelectorAll('.reaction-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        if (!currentArticleId) return;
        const type = btn.dataset.type;
        
        // Incrementar reacción
        blogData[currentArticleId].reactions[type]++;
        saveData();
        
        // Efecto visual
        btn.style.transform = 'scale(1.1)';
        setTimeout(() => btn.style.transform = 'translateY(-2px)', 150);
        
        updateReactionsUI();
    });
});

function updateReactionsUI() {
    if (!currentArticleId) return;
    const reactions = blogData[currentArticleId].reactions;
    document.getElementById('count-insightful').textContent = reactions.insightful;
    document.getElementById('count-innovative').textContent = reactions.innovative;
    document.getElementById('count-complex').textContent = reactions.complex;
}

// Lógica de Reseñas
reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!currentArticleId) return;

    const nameInput = document.getElementById('reviewer-name');
    const textInput = document.getElementById('review-text');

    const newReview = {
        name: nameInput.value,
        text: textInput.value,
        date: new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })
    };

    blogData[currentArticleId].reviews.unshift(newReview);
    saveData();
    
    nameInput.value = '';
    textInput.value = '';
    
    renderReviews();
    renderArticles(); // Actualizar contador en la tarjeta principal
    lucide.createIcons();
});

function renderReviews() {
    if (!currentArticleId) return;
    const reviewsList = document.getElementById('reviews-list');
    const reviews = blogData[currentArticleId].reviews;

    if (reviews.length === 0) {
        reviewsList.innerHTML = '<p style="color: var(--text-muted); font-style: italic;">Sé el primero en dejar una reseña en este artículo.</p>';
        return;
    }

    reviewsList.innerHTML = reviews.map(rev => `
        <div class="review-item">
            <div class="review-header">
                <span class="review-author"><i data-lucide="user" style="width:14px;height:14px;vertical-align:middle;margin-right:4px;"></i>${rev.name}</span>
                <span class="review-date">${rev.date}</span>
            </div>
            <p style="color: var(--text-main); font-size: 0.95rem;">${rev.text}</p>
        </div>
    `).join('');
}

// Lógica de Retos de Aprendizaje (Challenges)
window.currentChallenge = null;

function renderChallenge(challenge) {
    const container = document.getElementById('modal-challenge');
    if (!container) return;
    
    if (!challenge) {
        container.style.display = 'none';
        return;
    }
    container.style.display = 'block';
    
    let html = `
        <div class="challenge-header">
            <h3><i data-lucide="gamepad-2" style="width:28px;height:28px;vertical-align:middle;margin-right:8px;color:var(--accent);"></i>${challenge.title}</h3>
            <p>${challenge.description}</p>
        </div>
        <div class="challenge-content" id="challenge-content"></div>
    `;
    container.innerHTML = html;
    
    const content = document.getElementById('challenge-content');
    window.currentChallenge = challenge;
    
    if (challenge.type === 'audit') renderAudit(challenge, content);
    else if (challenge.type === 'matching') renderMatching(challenge, content);
    else if (challenge.type === 'builder') renderBuilder(challenge, content);
    else if (challenge.type === 'scenario') renderScenario(challenge, content);
    
    lucide.createIcons();
}

function renderAudit(challenge, container) {
    let html = `
        <div class="audit-board fade-in">
            <div class="audit-code-container">
                <div class="audit-code-header">
                    <div class="mac-dot red"></div><div class="mac-dot yellow"></div><div class="mac-dot green"></div>
                    <span class="audit-code-title">flow_audit.js</span>
                </div>
                <div class="audit-code">
                    ${challenge.codeSnippet.map((line, idx) => `<div class="code-line"><span class="line-num">${idx+1}</span> ${line}</div>`).join('')}
                </div>
            </div>
            <div class="audit-options">
                ${challenge.options.map((opt, idx) => `
                    <button class="audit-btn" onclick="handleAuditSelection(${idx}, this)">${opt.text}</button>
                `).join('')}
            </div>
            <div class="audit-feedback" id="audit-feedback"></div>
        </div>
    `;
    container.innerHTML = html;
}

window.handleAuditSelection = function(idx, btn) {
    const opt = window.currentChallenge.options[idx];
    const parent = btn.closest('.audit-options');
    const feedback = document.getElementById('audit-feedback');
    
    parent.querySelectorAll('.audit-btn').forEach(b => b.style.pointerEvents = 'none');
    
    if (opt.isCorrect) {
        btn.classList.add('correct');
        feedback.className = 'audit-feedback visible success';
        feedback.innerHTML = `<i data-lucide="check-circle" style="color:#2e7d32;margin-right:8px;vertical-align:middle;"></i>${opt.feedback}`;
        markChallengeComplete();
    } else {
        btn.classList.add('error');
        feedback.className = 'audit-feedback visible error';
        feedback.innerHTML = `<i data-lucide="x-circle" style="color:#c62828;margin-right:8px;vertical-align:middle;"></i>${opt.feedback}`;
        
        // Find correct option and highlight it
        window.currentChallenge.options.forEach((o, i) => {
            if (o.isCorrect) {
                parent.querySelectorAll('.audit-btn')[i].classList.add('correct-outline');
            }
        });
    }
    lucide.createIcons();
};

function renderMatching(challenge, container) {
    const leftItems = [...challenge.pairs].sort(() => Math.random() - 0.5);
    const rightItems = [...challenge.pairs].sort(() => Math.random() - 0.5);
    window.currentMatchSelection = { left: null, right: null };
    window.matchCount = 0;
    
    let html = `
        <div class="matching-board fade-in">
            <div class="matching-col" id="match-left">
                ${leftItems.map(item => `<button class="match-btn" data-side="left" data-id="${item.id}" onclick="handleMatch(this)">${item.left}</button>`).join('')}
            </div>
            <div class="matching-col" id="match-right">
                ${rightItems.map(item => `<button class="match-btn" data-side="right" data-id="${item.id}" onclick="handleMatch(this)">${item.right}</button>`).join('')}
            </div>
        </div>
        <div id="matching-completion" class="completion-banner" style="display:none;">
            <i data-lucide="award" style="width:32px;height:32px;margin-bottom:10px;"></i>
            <h4>Mapa Estratégico Completado</h4>
            <p>Has identificado correctamente las relaciones causales en la consolidación en salud.</p>
        </div>
    `;
    container.innerHTML = html;
}

window.handleMatch = function(btn) {
    if (btn.classList.contains('matched')) return;
    
    const side = btn.dataset.side;
    const board = btn.closest('.matching-board');
    
    board.querySelectorAll(`.match-btn[data-side="${side}"]`).forEach(b => {
        if (!b.classList.contains('matched')) b.classList.remove('selected');
    });
    
    btn.classList.add('selected');
    window.currentMatchSelection[side] = btn;
    
    if (window.currentMatchSelection.left && window.currentMatchSelection.right) {
        const leftBtn = window.currentMatchSelection.left;
        const rightBtn = window.currentMatchSelection.right;
        
        if (leftBtn.dataset.id === rightBtn.dataset.id) {
            leftBtn.classList.remove('selected');
            rightBtn.classList.remove('selected');
            leftBtn.classList.add('matched');
            rightBtn.classList.add('matched');
            window.matchCount++;
            
            if (window.matchCount === window.currentChallenge.pairs.length) {
                document.getElementById('matching-completion').style.display = 'block';
                markChallengeComplete();
                lucide.createIcons();
            }
        } else {
            leftBtn.classList.add('error');
            rightBtn.classList.add('error');
            setTimeout(() => {
                leftBtn.classList.remove('error', 'selected');
                rightBtn.classList.remove('error', 'selected');
            }, 500);
        }
        window.currentMatchSelection = { left: null, right: null };
    }
};

function renderBuilder(challenge, container) {
    let html = `
        <div class="builder-board fade-in">
            <div class="builder-steps">
                ${challenge.steps.map((step, index) => `
                    <div class="builder-step ${index > 0 ? 'disabled' : ''}" id="builder-step-${index}">
                        <h4>${step.instruction}</h4>
                        <div class="builder-options">
                            ${step.options.map((opt, optIndex) => `
                                <button class="builder-btn" onclick="handleBuilderSelection(${index}, ${optIndex}, this)">${opt}</button>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="builder-output" id="builder-output">
                {<br>
                &nbsp;&nbsp;<span class="string">"status"</span>: <span class="string">"draft"</span>
                <div id="builder-json-lines"></div>
                }
            </div>
        </div>
    `;
    container.innerHTML = html;
}

window.handleBuilderSelection = function(stepIndex, selectedOptIndex, btn) {
    const step = window.currentChallenge.steps[stepIndex];
    const selectedOpt = step.options[selectedOptIndex];
    
    if (selectedOpt !== step.correct) {
        btn.style.animation = 'shake 0.5s';
        btn.style.background = '#ffebee';
        btn.style.borderColor = '#e57373';
        btn.style.color = '#c62828';
        setTimeout(() => {
            btn.style.animation = '';
            btn.style.background = '';
            btn.style.borderColor = '';
            btn.style.color = '';
        }, 800);
        return;
    }
    
    const stepDiv = document.getElementById(`builder-step-${stepIndex}`);
    stepDiv.querySelectorAll('.builder-btn').forEach(b => b.style.pointerEvents = 'none');
    btn.classList.add('selected');
    
    const jsonLines = document.getElementById('builder-json-lines');
    jsonLines.innerHTML += `,<br>&nbsp;&nbsp;<span class="key">"${step.jsonKey}"</span>: <span class="string">${step.jsonValue}</span>`;
    
    const nextStep = document.getElementById(`builder-step-${stepIndex + 1}`);
    if (nextStep) {
        nextStep.classList.remove('disabled');
    } else {
        jsonLines.innerHTML += `<br><br>&nbsp;&nbsp;<span style="color:#81c784;">// Payload FHIR completado exitosamente.</span>`;
        markChallengeComplete();
    }
};

function renderScenario(challenge, container) {
    const sit = challenge.situations[0];
    let html = `
        <div class="scenario-board fade-in">
            <div class="scenario-prompt">
                <i data-lucide="briefcase" style="width:24px;height:24px;color:var(--accent);margin-bottom:1rem;"></i>
                <p>${sit.prompt}</p>
            </div>
            <div class="scenario-options">
                ${sit.options.map((opt, idx) => `
                    <button class="scenario-btn" onclick="handleScenarioSelection(${idx}, this)">${opt.text}</button>
                `).join('')}
            </div>
            <div class="scenario-outcome" id="scenario-outcome"></div>
        </div>
    `;
    container.innerHTML = html;
}

window.handleScenarioSelection = function(idx, btn) {
    const sit = window.currentChallenge.situations[0];
    const opt = sit.options[idx];
    const parent = btn.closest('.scenario-options');
    const outcomeDiv = document.getElementById('scenario-outcome');
    
    parent.querySelectorAll('.scenario-btn').forEach(b => b.style.pointerEvents = 'none');
    
    if (opt.success) {
        btn.classList.add('correct');
        outcomeDiv.className = 'scenario-outcome visible success';
        outcomeDiv.innerHTML = `<i data-lucide="check-square" style="color:#2e7d32;margin-right:8px;vertical-align:middle;"></i>${opt.outcome}`;
        markChallengeComplete();
    } else {
        btn.classList.add('error');
        outcomeDiv.className = 'scenario-outcome visible error';
        outcomeDiv.innerHTML = `<i data-lucide="alert-triangle" style="color:#c62828;margin-right:8px;vertical-align:middle;"></i>${opt.outcome}`;
        
        sit.options.forEach((o, i) => {
            if (o.success) {
                parent.querySelectorAll('.scenario-btn')[i].classList.add('correct-outline');
            }
        });
    }
    lucide.createIcons();
}

function markChallengeComplete() {
    if (currentArticleId && !blogData[currentArticleId].challengeCompleted) {
        blogData[currentArticleId].challengeCompleted = true;
        saveData();
        renderArticles(); // Update badge on card
        
        // Show celebration effect
        const header = document.querySelector('.challenge-header h3');
        if(header) {
            header.innerHTML += ` <span style="font-size:0.5em;background:var(--accent);color:#fff;padding:4px 12px;border-radius:20px;vertical-align:middle;margin-left:10px;animation:fadeIn 1s ease;">¡MAESTRÍA ALCANZADA!</span>`;
        }
        
        const challengeSection = document.getElementById('modal-challenge');
        if(challengeSection) {
            createSparkles(challengeSection);
        }
    }
}

function createSparkles(element) {
    for (let i = 0; i < 20; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = (Math.random() * 0.3) + 's';
        element.appendChild(sparkle);
        
        // Remove after animation
        setTimeout(() => sparkle.remove(), 1500);
    }
}

// Helpers
function saveData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(blogData));
}

// Iniciar aplicación
document.addEventListener('DOMContentLoaded', () => {
    init();

    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});
