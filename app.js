// --- Data Structure ---
const articles = [
    {
        id: 'art-1',
        tag: 'Artículo Especial',
        title: 'Blockchain en salud: Transformando la seguridad y la gestión de datos clínicos',
        excerpt: 'La naturaleza descentralizada y verificable de blockchain ofrece soluciones a los desafíos de seguridad y privacidad en la salud digital.',
        date: 'Diciembre 2025',
        headerImage: 'https://tse2.mm.bing.net/th/id/OIP.QtAiwz4jfNJzzhW1BfZNBQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
        pdfPath: 'https://www.sciencedirect.com/science/article/pii/S0212656723002810',
        doi: '10.1016/j.aprim.2023.102848',
        tags: ['Blockchain', 'Seguridad', 'Datos Clínicos', 'Privacidad'],
        content: {
            fullText: `
                <div class="article-summary-box" style="background: var(--surface-container-low); padding: 32px; border-radius: 16px; border: 1px solid var(--outline-variant); margin-bottom: 40px;">
                    <h3 style="font-family: var(--font-h1); color: var(--primary); margin-top: 0; display: flex; align-items: center; gap: 12px;">
                        <span class="material-symbols-outlined">menu_book</span> Resumen Ejecutivo
                    </h3>
                    <p><strong>Autores:</strong> Marc Albiol-Perarnau, Iris Alarcón Belmonte</p>
                    <p><strong>Contexto:</strong> Los avances tecnológicos están transformando radicalmente el sector salud. La naturaleza descentralizada e inmutable de blockchain ofrece soluciones para la gestión de datos sanitarios.</p>
                    <p><strong>Objetivo:</strong> Identificar la evidencia científica disponible sobre el uso de blockchain en el sector salud, centrándose en la seguridad y la interoperabilidad.</p>
                    <p><strong>Conclusión:</strong> Aunque es una tecnología prometedora para empoderar al usuario y asegurar los datos, se requiere un cambio cultural y regulatorio significativo.</p>
                </div>

                <h3>Fundamentos de Blockchain</h3>
                <p>Blockchain es una base de datos distribuida formada por <strong>cadenas de bloques</strong> interconectados. Sus elementos clave son:</p>
                <ul style="margin-bottom: 24px; padding-left: 20px;">
                    <li><strong>Bloques:</strong> Unidades de datos enlazadas criptográficamente.</li>
                    <li><strong>Transacciones:</strong> Registros validados por la red (ej. transferencias o datos médicos).</li>
                    <li><strong>Criptografía:</strong> Cifra datos para garantizar privacidad.</li>
                    <li><strong>Consenso distribuido:</strong> Validación colectiva que asegura integridad.</li>
                </ul>

                <h3>Aplicaciones Transformadoras</h3>
                <p>El estudio destaca aplicaciones críticas en:</p>
                <ul style="margin-bottom: 24px; padding-left: 20px;">
                    <li><strong>Interoperabilidad:</strong> Ecosistemas para compartir datos de forma segura eliminando la fragmentación.</li>
                    <li><strong>Privacidad:</strong> Control total del paciente sobre quién accede a su información.</li>
                    <li><strong>Investigación Médica:</strong> Registros inmutables en ensayos clínicos para aumentar la confianza en los resultados.</li>
                    <li><strong>Trazabilidad de Medicamentos:</strong> Seguimiento desde el fabricante al paciente para evitar falsificaciones.</li>
                </ul>

                <h3>Barreras y Desafíos Actuales</h3>
                <p>La adopción se enfrenta a desafíos técnicos y regulatorios:</p>
                <ul style="margin-bottom: 24px; padding-left: 20px;">
                    <li><strong>Complejidad Técnica:</strong> Falta de expertos y necesidad de integración con sistemas existentes.</li>
                    <li><strong>Costos:</strong> Inversión inicial en desarrollo, capacitación y consumo energético.</li>
                    <li><strong>Regulación:</strong> Necesidad de marcos legales claros en protección de datos de salud.</li>
                </ul>
            `,
            resumen: `<p>Revisión sistemática que explora el potencial de blockchain para resolver la fragmentación de datos y mejorar la ciberseguridad en salud, destacando la inmutabilidad y el control del paciente como pilares fundamentales.</p>`,
            analisis: `<p>El análisis subraya que blockchain no es solo una base de datos, sino un cambio de paradigma hacia la descentralización. Sin embargo, advierte que la "hype" tecnológica debe ser equilibrada con evidencia clínica sólida y marcos éticos específicos.</p>`
        },
        challenge: {
            type: 'quiz',
            question: 'Según el artículo, ¿cuál es uno de los mayores obstáculos para la adopción masiva de blockchain en hospitales?',
            options: [
                { id: 'opt1', text: 'La falta de internet' },
                { id: 'opt2', text: 'La complejidad técnica y falta de regulación', correct: true },
                { id: 'opt3', text: 'Que los pacientes no quieren usarlo' },
                { id: 'opt4', text: 'Que es una tecnología obsoleta' }
            ],
            explanation: 'El artículo menciona específicamente la falta de regulación, la complejidad técnica y los costos como barreras críticas que requieren colaboración multidisciplinar.'
        }
    },
    {
        id: 'art-2',
        tag: 'Salud Digital',
        title: 'La enfermera tecnológica: Innovación y transformación en la atención primaria',
        excerpt: 'Cómo la figura de la enfermera tecnológica fusiona la práctica asistencial con las TIC para mejorar el acceso y la calidad en salud.',
        date: 'Noviembre 2025',
        headerImage: 'https://epicrisis.org/wp-content/uploads/2023/03/colegio-medico-colombiano-epicrisis-rethus-tarjeta-profesional-gremial-medicina-medicos-salud-digital-tecnologia-bots-1536x960.jpg',
        pdfPath: 'https://www.sciencedirect.com/science/article/pii/S2605073021000377',
        doi: '10.1016/j.appr.2021.100116',
        tags: ['Enfermería', 'TIC', 'Atención Primaria', 'Salud Digital'],
        content: {
            fullText: `
                <div class="article-summary-box" style="background: var(--surface-container-low); padding: 32px; border-radius: 16px; border: 1px solid var(--outline-variant); margin-bottom: 40px;">
                    <h3 style="font-family: var(--font-h1); color: var(--primary); margin-top: 0; display: flex; align-items: center; gap: 12px;">
                        <span class="material-symbols-outlined">menu_book</span> Resumen Ejecutivo
                    </h3>
                    <p><strong>Autores:</strong> Mariona Vilar Pont, Mª. Cruz Salgado Rodríguez, et al.</p>
                    <p><strong>Contexto:</strong> La atención primaria actual evoluciona hacia un modelo híbrido (presencial y virtual). La figura de la "enfermera tecnológica" surge como el puente necesario entre la asistencia y la innovación digital.</p>
                    <p><strong>Objetivo:</strong> Describir el impacto de las TIC en la transformación de la atención primaria y definir las funciones de los perfiles de enfermería especializados en salud digital.</p>
                    <p><strong>Impacto:</strong> Mejora significativa en el acceso, la calidad asistencial, la seguridad del paciente y la sostenibilidad del sistema.</p>
                </div>

                <h3>La Enfermera Tecnológica</h3>
                <p>Este perfil profesional integra la visión transversal de la asistencia con las competencias digitales. Sus funciones clave son:</p>
                <ul style="margin-bottom: 24px; padding-left: 20px;">
                    <li><strong>Referente Técnico:</strong> Apoyo en la toma de decisiones sobre dispositivos y programas en el ámbito asistencial.</li>
                    <li><strong>Formación:</strong> Capacitación continua de otros profesionales y ciudadanos en el uso de herramientas eSalud.</li>
                    <li><strong>Selección de Recursos:</strong> Colaboración en la elección de software y hardware basado en necesidades clínicas reales.</li>
                    <li><strong>Gestión del Cambio:</strong> Liderazgo en la transición de procesos tradicionales a flujos de trabajo digitales.</li>
                </ul>

                <h3>Tecnologías en Atención Primaria</h3>
                <p>El estudio identifica cuatro pilares tecnológicos de mayor utilidad:</p>
                <ol style="margin-bottom: 24px; padding-left: 20px;">
                    <li><strong>Apps de Salud:</strong> Facilitan la educación y el autocuidado.</li>
                    <li><strong>Wearables:</strong> Permiten la monitorización constante y remota.</li>
                    <li><strong>Big Data:</strong> Análisis de grandes volúmenes para medicina preventiva.</li>
                    <li><strong>Inteligencia Artificial:</strong> Soporte en el diagnóstico y manejo clínico.</li>
                </ol>

                <h3>Consideraciones Éticas y Deontológicas</h3>
                <p>La digitalización exige una actualización de los códigos éticos, priorizando:</p>
                <ul style="margin-bottom: 24px; padding-left: 20px;">
                    <li><strong>Privacidad y Seguridad:</strong> Salvaguarda estricta de los datos sensibles del paciente.</li>
                    <li><strong>Transparencia:</strong> Claridad en el uso y almacenamiento de la información.</li>
                    <li><strong>Equidad:</strong> Evitar que la brecha digital se convierta en una barrera de acceso a la salud.</li>
                </ul>

                <h3>Proyecto Práctico: eConsulta y Salud Pública</h3>
                <p>Se destaca el estudio en el CAP de Sarrià de Ter sobre el cribado de alcoholismo mediante eConsulta, demostrando que los cuestionarios digitales pueden generar respuestas más veraces que la entrevista presencial en conductas de riesgo.</p>
            `,
            resumen: `<p>Este artículo define a la enfermera tecnológica como un profesional clave en la transformación digital de la atención primaria, capaz de humanizar la tecnología y liderar equipos multidisciplinarios para mejorar la eficiencia del sistema.</p>`,
            analisis: `<p>El análisis resalta que el éxito de la eSalud no depende solo de la tecnología, sino de la integración de profesionales que comprendan la práctica clínica diaria. La "enfermera tecnológica" no sustituye la atención humana, sino que la extiende mediante herramientas digitales asincrónicas.</p>`
        },
        challenge: {
            type: 'quiz',
            question: '¿Cuál es una de las ventajas detectadas al usar cuestionarios digitales autoadministrados (como el AUDIT-C en eConsulta) según el artículo?',
            options: [
                { id: 'opt1', text: 'Es más lento que la consulta presencial' },
                { id: 'opt2', text: 'La información suele ser más veraz en conductas de riesgo', correct: true },
                { id: 'opt3', text: 'No permite el seguimiento del paciente' },
                { id: 'opt4', text: 'Requiere que el paciente sea informático' }
            ],
            explanation: 'Diversos estudios citados en el artículo afirman que los pacientes tienden a ser más honestos al reportar conductas sensibles (como el consumo de alcohol) a través de medios digitales que en una entrevista cara a cara.'
        }
    },
    {
        id: 'art-3',
        tag: 'Estudio Técnico',
        title: 'HL7 FHIR en ecosistemas de salud digital para el manejo de enfermedades crónicas',
        excerpt: 'Una revisión sistemática sobre el papel de FHIR en la interoperabilidad de datos para cáncer, enfermedades cardiovasculares y diabetes.',
        date: 'Enero 2024',
        headerImage: 'https://winfully.digital/wp-content/uploads/2023/02/FHIR.drawio-e1676261561857.png',
        pdfPath: 'https://www.sciencedirect.com/science/article/pii/S1386505624001709',
        doi: '10.1016/j.ijmedinf.2024.105507',
        tags: ['HL7 FHIR', 'Interoperabilidad', 'Enfermedades Crónicas', 'API'],
        content: {
            fullText: `
                <div class="article-summary-box" style="background: var(--surface-container-low); padding: 32px; border-radius: 16px; border: 1px solid var(--outline-variant); margin-bottom: 40px;">
                    <h3 style="font-family: var(--font-h1); color: var(--primary); margin-top: 0; display: flex; align-items: center; gap: 12px;">
                        <span class="material-symbols-outlined">terminal</span> Especificaciones de la Revisión
                    </h3>
                    <p><strong>Autores:</strong> Roberta Gazzarata, Joao Almeida, Catherine E. Chronaki, et al.</p>
                    <p><strong>Alcance:</strong> Análisis de 93 artículos científicos y 35 Guías de Implementación (IGs) publicadas entre 2017 y 2023.</p>
                    <p><strong>Resultados Clave:</strong> El uso de FHIR alcanzó su pico en 2021, siendo el cáncer (45%), las enfermedades cardiovasculares (15%) y la diabetes (15%) las áreas con mayor adopción.</p>
                </div>

                <h3>¿Por qué HL7 FHIR?</h3>
                <p>HL7 FHIR (Fast Healthcare Interoperability Resources) se ha consolidado como el estándar de oro para el intercambio de datos en salud por tres razones principales:</p>
                <ul style="margin-bottom: 24px; padding-left: 20px;">
                    <li><strong>Interoperabilidad por Diseño:</strong> Uso de recursos modulares (Patient, Observation, Condition) que pueden ser "perfilados" para casos específicos.</li>
                    <li><strong>Soporte a CDSS:</strong> Integración de sistemas de soporte a la decisión clínica mediante <strong>SMART on FHIR</strong> y <strong>CDS Hooks</strong>.</li>
                    <li><strong>Exportación de Datos:</strong> Facilita el uso secundario de información para investigación y salud pública.</li>
                </ul>

                <h3>Madurez del Estándar</h3>
                <p>La revisión destaca que la versión <strong>R4</strong> es la más utilizada en publicaciones científicas y guías técnicas, seguida de DSTU2 y STU3. La madurez del estándar se refleja en la creación de ecosistemas donde los datos fluyen de forma segura desde dispositivos wearables hasta registros hospitalarios.</p>

                <h3>Ecosistemas de Salud Digital</h3>
                <p>El estudio subraya que FHIR permite integrar datos generados por el paciente, asegurando intervenciones oportunas y planes de cuidado personalizados. Las "Implementation Guides" (IGs) son cruciales para garantizar la consistencia entre diferentes proveedores de salud.</p>

                <h3>Desafíos y Recomendaciones</h3>
                <p>A pesar del avance, solo el 20% de los artículos mencionan el uso de IGs oficiales. Se recomienda a la comunidad científica detallar siempre la versión de FHIR utilizada y publicar los perfiles en registros públicos para asegurar la reproducibilidad.</p>
            `,
            resumen: `<p>Este estudio técnico evalúa la evolución de HL7 FHIR como la API estándar para la transformación digital en salud, enfocándose en cómo soluciona la fragmentación de datos en el manejo de enfermedades crónicas de larga duración.</p>`,
            analisis: `<p>El análisis demuestra que FHIR no es solo un formato de datos, sino un facilitador de ecosistemas. La transición hacia R4 marca un hito en la estabilidad del estándar, aunque persiste el reto de estandarizar la semántica a nivel global.</p>`
        },
        challenge: {
            type: 'quiz',
            question: 'Según la revisión, ¿cuáles son los tres propósitos principales de usar HL7 FHIR en plataformas de enfermedades crónicas?',
            options: [
                { id: 'opt1', text: 'Solo para guardar imágenes' },
                { id: 'opt2', text: 'Interoperabilidad, alimentar CDSS y permitir exportación de datos', correct: true },
                { id: 'opt3', text: 'Sustituir al personal médico' },
                { id: 'opt4', text: 'Reducir el uso de internet en hospitales' }
            ],
            explanation: 'El estudio identifica que la interoperabilidad general es el uso más frecuente (>50%), seguido de la alimentación de sistemas de decisión clínica (CDSS) y la exportación de datos para investigación.'
        }
    },
    {
        id: 'art-4',
        tag: 'Perspectiva Estratégica',
        title: 'Interoperabilidad Funcional: Beneficios, Desafíos y Soluciones',
        excerpt: 'Un análisis sobre los niveles de interoperabilidad y cómo la conexión fluida de sistemas revoluciona la prestación de servicios de salud.',
        date: 'Febrero 2026',
        headerImage: 'https://blog.medicai.io/hubfs/Interoperabilidad%20funcional%20en%20el%20cuidado%20de%20la%20salud.png',
        pdfPath: 'https://blog.medicai.io/es/interoperabilidad-funcional-en-el-cuidado-de-la-salud/',
        doi: 'REVISIÓN-ESTRATÉGICA-2026',
        tags: ['Interoperabilidad', 'Estrategia', 'Gestión de Datos', 'Pacientes'],
        content: {
            fullText: `
                <div class="article-summary-box" style="background: var(--surface-container-low); padding: 32px; border-radius: 16px; border: 1px solid var(--outline-variant); margin-bottom: 40px;">
                    <h3 style="font-family: var(--font-h1); color: var(--primary); margin-top: 0; display: flex; align-items: center; gap: 12px;">
                        <span class="material-symbols-outlined">layers</span> Resumen Estratégico
                    </h3>
                    <p><strong>Autora:</strong> Andra Bria (Verificado por Andrada Costache, MD)</p>
                    <p><strong>Visión:</strong> ¿Qué pasaría si cada proveedor tuviera acceso instantáneo al historial completo de un paciente? La interoperabilidad funcional busca eliminar los silos de información para centrar el cuidado en la persona.</p>
                    <p><strong>Impacto:</strong> Mejora de la seguridad, reducción de pruebas duplicadas y empoderamiento real del paciente sobre sus propios datos.</p>
                </div>

                <h3>La Pirámide de la Interoperabilidad</h3>
                <p>La interoperabilidad no es un concepto único, sino un marco de múltiples capas que se construyen una sobre otra:</p>
                
                <div style="margin: 24px 0; border-left: 4px solid var(--primary); padding-left: 20px;">
                    <p><strong>1. Interoperabilidad Fundamental:</strong> La capa base. Permite que un sistema envíe datos a otro de forma básica (como recibir resultados de laboratorio).</p>
                    <p><strong>2. Interoperabilidad Estructural:</strong> Organiza el intercambio. Asegura que el formato (gramática) sea el mismo para que el receptor pueda interpretar los campos (ej. HL7 FHIR).</p>
                    <p><strong>3. Interoperabilidad Semántica:</strong> Comparte el significado. Utiliza diccionarios comunes (ej. SNOMED CT) para que "diabetes" signifique lo mismo en ambos sistemas.</p>
                    <p><strong>4. Interoperabilidad Organizacional:</strong> El factor humano. Aborda políticas, flujos de trabajo y gobernanza legal entre instituciones.</p>
                </div>

                <h3>Beneficios Tangibles</h3>
                <p>La implementación exitosa de estos niveles genera:</p>
                <ul style="margin-bottom: 24px; padding-left: 20px;">
                    <li><strong>Mejor Cuidado:</strong> Decisiones informadas basadas en el historial completo.</li>
                    <li><strong>Eficiencia Operativa:</strong> Menos papeleo y procesos administrativos ágiles.</li>
                    <li><strong>Salud Pública:</strong> Monitoreo en tiempo real de brotes y tendencias.</li>
                </ul>

                <h3>Desafíos a Vencer</h3>
                <p>El camino hacia la interconexión total enfrenta barreras técnicas (estándares diversos), financieras (falta de incentivos) y de seguridad (protección estricta bajo normativas como HIPAA).</p>

                <h3>Estrategias de Mejora</h3>
                <p>Para avanzar, es vital invertir en infraestructura basada en la nube, educar a la fuerza laboral en alfabetización digital y promover la "liquidez de datos" mediante el uso masivo de APIs modernas.</p>
            `,
            resumen: `<p>Este artículo explora los niveles de la pirámide de interoperabilidad, desde la conexión básica hasta la armonización organizacional, subrayando que la tecnología es solo una parte de la solución para un sistema de salud interconectado.</p>`,
            analisis: `
                <p>El análisis crítico de este estudio subraya que la interoperabilidad no es simplemente un desafío de infraestructura técnica, sino una <strong>estrategia de gobernanza clínica</strong>. La "Interoperabilidad Semántica" se identifica como el eje gravitacional: sin una normalización terminológica (SNOMED, LOINC), el intercambio de datos carece de utilidad diagnóstica real.</p>
                <p>Además, se concluye que la <strong>Interoperabilidad Organizacional</strong> es el nivel más difícil de alcanzar pero el más impactante, ya que requiere armonizar políticas institucionales y flujos de trabajo humanos que a menudo son el verdadero cuello de botella en la transformación digital.</p>
            `
        },
        challenge: {
            type: 'quiz',
            question: '¿Cuál es el nivel de interoperabilidad que asegura que todos los sistemas entiendan el "significado" de los datos mediante terminologías estandarizadas?',
            options: [
                { id: 'opt1', text: 'Interoperabilidad Fundamental' },
                { id: 'opt2', text: 'Interoperabilidad Estructural' },
                { id: 'opt3', text: 'Interoperabilidad Semántica', correct: true },
                { id: 'opt4', text: 'Interoperabilidad Organizacional' }
            ],
            explanation: 'La interoperabilidad semántica garantiza que el contenido de los datos sea interpretado de forma idéntica por todos los sistemas participantes, utilizando estándares como SNOMED CT o LOINC.'
        }
    }
];

// --- Local Storage Management ---
const Storage = {
    getReviews: () => JSON.parse(localStorage.getItem('digitalHealth_reviews') || '{}'),
    saveReview: (id, text, author = 'Compañero Anónimo') => {
        const reviews = Storage.getReviews();
        reviews[id] = { text, author, timestamp: new Date().toISOString() };
        localStorage.setItem('digitalHealth_reviews', JSON.stringify(reviews));
    },

    getChallenges: () => JSON.parse(localStorage.getItem('digitalHealth_challenges') || '{}'),
    markChallengeComplete: (articleId) => {
        const challenges = Storage.getChallenges();
        challenges[articleId] = true;
        localStorage.setItem('digitalHealth_challenges', JSON.stringify(challenges));
        updateMasteryUI();
    }
};

// --- UI Rendering ---
function renderArticleList() {
    const list = document.getElementById('articleList');
    if (!list) return;
    list.innerHTML = '';

    articles.forEach((art) => {
        const isCompleted = Storage.getChallenges()[art.id];
        const statusClass = isCompleted ? 'completed' : '';
        
        const card = document.createElement('article');
        card.className = `blog-card ${statusClass}`;

        card.innerHTML = `
            <div class="blog-card-image" style="background-image: url('${art.headerImage}')">
                <div class="blog-card-status">
                    <span class="material-symbols-outlined">verified</span>
                </div>
            </div>
            <div class="blog-card-content">
                <div class="blog-card-tag">
                    <span class="material-symbols-outlined" style="font-size: 16px;">bookmark</span>
                    ${art.tag}
                </div>
                <h3 class="blog-card-title">${art.title}</h3>
                <p class="blog-card-excerpt">${art.excerpt}</p>
                <div class="blog-card-footer">
                    <div class="blog-card-date">
                        <span class="material-symbols-outlined" style="font-size: 18px;">calendar_today</span>
                        ${art.date}
                    </div>
                    <div class="blog-card-action">
                        LEER ARTÍCULO
                        <span class="material-symbols-outlined">arrow_forward</span>
                    </div>
                </div>
            </div>
        `;

        card.addEventListener('click', () => openModal(art));
        list.appendChild(card);
    });
}

function updateMasteryUI() {
    const challenges = Storage.getChallenges();
    const completedCount = Object.keys(challenges).filter(k => challenges[k]).length;
    const totalCount = articles.length;
    const percentage = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

    const masteryEl = document.getElementById('statsMastery');
    if (masteryEl) masteryEl.textContent = `${percentage}%`;

    const progressBar = document.getElementById('masteryProgressBar');
    if (progressBar) progressBar.style.width = `${percentage}%`;
}

// --- Article Reader & Modal Logic ---
let currentArticleId = null;

function openModal(article) {
    currentArticleId = article.id;
    document.getElementById('modalTag').textContent = article.tag;
    document.getElementById('modalTitle').textContent = article.title;
    document.getElementById('content-resumen').innerHTML = article.content.resumen;
    document.getElementById('content-analisis').innerHTML = article.content.analisis;

    const reviewTextarea = document.getElementById('reviewTextarea');
    const reviewerNameInput = document.getElementById('reviewerName');
    const reviews = Storage.getReviews();
    const savedReview = reviews[article.id];

    if (savedReview) {
        if (reviewTextarea) reviewTextarea.value = savedReview.text;
        if (reviewerNameInput) reviewerNameInput.value = savedReview.author;
    } else {
        if (reviewTextarea) reviewTextarea.value = '';
        if (reviewerNameInput) reviewerNameInput.value = '';
    }

    renderChallenge(article);

    // Reset tabs
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
    const firstTab = document.querySelector('[data-tab="resumen"]');
    if (firstTab) firstTab.classList.add('active');
    const firstPane = document.getElementById('pane-resumen');
    if (firstPane) firstPane.classList.add('active');

    const modal = document.getElementById('articleModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('articleModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// --- Challenge Rendering ---
function renderChallenge(article) {
    const container = document.getElementById('content-reto');
    if (!container) return;
    container.innerHTML = '';

    const chal = article.challenge;
    const isCompleted = Storage.getChallenges()[article.id];

    if (isCompleted) {
        container.innerHTML = `
            <div class="feedback-area success" style="display:block;">
                <span class="material-symbols-outlined">verified</span>
                <strong>¡Reto completado!</strong> Ya has dominado este tema.
            </div>
        `;
        return;
    }

    const questionEl = document.createElement('h5');
    questionEl.textContent = chal.question || chal.scenario;
    container.appendChild(questionEl);

    const grid = document.createElement('div');
    grid.className = 'options-grid';

    chal.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt.text;
        btn.addEventListener('click', () => handleQuizAnswer(btn, opt.correct, chal.explanation, article.id));
        grid.appendChild(btn);
    });
    container.appendChild(grid);
}

function handleQuizAnswer(btn, isCorrect, explanation, articleId) {
    const siblings = btn.parentElement.querySelectorAll('.option-btn');
    siblings.forEach(b => b.style.pointerEvents = 'none');

    const container = btn.parentElement.parentElement;

    if (isCorrect) {
        btn.classList.add('correct');
        Storage.markChallengeComplete(articleId);
        createSparkles(window.innerWidth / 2, window.innerHeight / 2, 20);
        setTimeout(() => renderChallenge(articles.find(a => a.id === articleId)), 2000);
    } else {
        btn.classList.add('incorrect');
        siblings.forEach(b => { if (b !== btn) b.style.opacity = '0.5'; });
    }

    const expDiv = document.createElement('div');
    expDiv.className = `feedback-area ${isCorrect ? 'success' : 'error'}`;
    expDiv.style.display = 'block';
    expDiv.innerHTML = `
        <span class="material-symbols-outlined">${isCorrect ? 'verified' : 'error'}</span>
        <div>
            <strong>${isCorrect ? '¡Correcto!' : 'Incorrecto.'}</strong>
            <p style="margin: 4px 0 0 0; font-size: 0.9rem; opacity: 0.9;">${explanation}</p>
        </div>
    `;
    container.appendChild(expDiv);
    
    renderArticleList();
}

// --- Effects ---
function createSparkles(x, y, count = 15) {
    for (let i = 0; i < count; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        document.body.appendChild(sparkle);
        sparkle.style.left = `${x + (Math.random() - 0.5) * 200}px`;
        sparkle.style.top = `${y + (Math.random() - 0.5) * 200}px`;
        setTimeout(() => sparkle.remove(), 1000);
    }
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
    renderArticleList();
    updateMasteryUI();

    // Modal Navigation Logic
    document.getElementById('modalTabs')?.addEventListener('click', (e) => {
        const btn = e.target.closest('.tab-btn');
        if (!btn) return;

        const tab = btn.dataset.tab;
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        document.getElementById(`pane-${tab}`)?.classList.add('active');
    });

    document.getElementById('closeModalBtn')?.addEventListener('click', closeModal);
    
    // Save Review Logic
    document.getElementById('saveReviewBtn')?.addEventListener('click', () => {
        const text = document.getElementById('reviewTextarea').value;
        const author = document.getElementById('reviewerName').value || 'Diana Marín';
        
        if (currentArticleId) {
            Storage.saveReview(currentArticleId, text, author);
            const feedback = document.getElementById('reviewFeedback');
            if (feedback) {
                feedback.style.display = 'block';
                setTimeout(() => { feedback.style.display = 'none'; }, 3000);
            }
        }
    });

    // Check for URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const openAnalysisId = urlParams.get('openAnalysis');
    if (openAnalysisId) {
        const article = articles.find(a => a.id === openAnalysisId);
        if (article) setTimeout(() => openModal(article), 500);
    }

    // Sidebar Logic
    const sidebar = document.getElementById('sidebar');
    const openSidebarBtn = document.getElementById('openSidebarBtn');
    const closeSidebarBtn = document.getElementById('closeSidebarBtn');
    const sidebarOverlay = document.getElementById('sidebarOverlay');

    function toggleSidebar() {
        sidebar.classList.toggle('active');
        sidebarOverlay.classList.toggle('active');
        document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
    }

    if (openSidebarBtn) openSidebarBtn.addEventListener('click', toggleSidebar);
    if (closeSidebarBtn) closeSidebarBtn.addEventListener('click', toggleSidebar);
    if (sidebarOverlay) sidebarOverlay.addEventListener('click', toggleSidebar);

    // Profile Modal Logic
    const profileModal = document.getElementById('profileModal');
    const openProfileBtn = document.getElementById('openProfileSidebarBtn');
    const openProfileBtnAlt = document.getElementById('openProfileBtn');

    function renderProfile() {
        if (!profileModal) return;
        const challenges = Storage.getChallenges();
        const completedCount = Object.keys(challenges).length;
        const totalCount = articles.length;
        const percentage = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

        const profileMastery = document.getElementById('profileMastery');
        if (profileMastery) profileMastery.textContent = `${percentage}%`;

        const list = document.getElementById('completedChallengesList');
        if (list) {
            list.innerHTML = '';
            if (completedCount === 0) {
                list.innerHTML = '<li style="padding: 12px; font-style: italic; color: var(--outline);">Aún no has completado retos académicos.</li>';
            } else {
                articles.forEach(art => {
                    if (challenges[art.id]) {
                        list.innerHTML += `
                            <li style="display: flex; align-items: center; gap: 12px; padding: 12px; border-bottom: 1px solid var(--surface-container-high);">
                                <span class="material-symbols-outlined" style="color: #34a853;">verified</span>
                                <span style="font-size: 0.9rem; font-weight: 500;">${art.title}</span>
                            </li>
                        `;
                    }
                });
            }
        }
    }

    [openProfileBtn, openProfileBtnAlt].forEach(btn => {
        if (btn) btn.addEventListener('click', (e) => {
            e.preventDefault();
            renderProfile();
            profileModal.classList.add('active');
            if (sidebar.classList.contains('active')) toggleSidebar();
        });
    });

    document.getElementById('closeProfileBtn')?.addEventListener('click', () => profileModal.classList.remove('active'));
    profileModal?.addEventListener('click', (e) => {
        if (e.target === profileModal) profileModal.classList.remove('active');
    });

    document.getElementById('resetProgressBtn')?.addEventListener('click', () => {
        if (confirm('¿Estás seguro de que deseas reiniciar todo tu progreso académico?')) {
            localStorage.removeItem('digitalHealth_challenges');
            localStorage.removeItem('digitalHealth_reviews');
            location.reload();
        }
    });
    renderArticleList();
});
