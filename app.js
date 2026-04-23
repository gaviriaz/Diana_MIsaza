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
        `
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
        `
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
        `
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
        `
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
            reviews: []
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
}

// Renderizar las tarjetas de los artículos
function renderArticles() {
    articlesGrid.innerHTML = '';
    articles.forEach((art, index) => {
        const delay = index * 0.1;
        const card = document.createElement('div');
        card.className = 'article-card fade-in-up';
        card.style.animationDelay = `${delay}s`;
        card.innerHTML = `
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
}

// Lógica del Modal
function openModal(id) {
    currentArticleId = id;
    const article = articles.find(a => a.id === id);
    
    document.getElementById('modal-tag').textContent = article.tag;
    document.getElementById('modal-title').textContent = article.title;
    document.getElementById('modal-summary').innerHTML = article.summary;
    
    const urlBtn = document.getElementById('modal-url');
    urlBtn.href = article.url;
    urlBtn.style.display = article.url === '#' ? 'none' : 'inline-flex';

    updateReactionsUI();
    renderReviews();
    
    modal.classList.add('active');
    modal.querySelector('.modal-content').scrollTop = 0; // Reset modal scroll
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

// Helpers
function saveData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(blogData));
}

// Iniciar aplicación
document.addEventListener('DOMContentLoaded', () => {
    init();

    // Efecto de scroll premium para la barra de navegación
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});
