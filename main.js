// ===== DATA CON RVOE =====
const licenciaturasData = [
    { icon: "fas fa-chalkboard-user", title: "Licenciatura en Pedagogía", description: "Forma profesionales capaces de diseñar, implementar y evaluar estrategias educativas innovadoras para distintos niveles y contextos, promoviendo una educación inclusiva y de calidad.", duracion: "9 cuatrimestres", rvoe: "RVOE: 20230409" },
    { icon: "fas fa-gavel", title: "Licenciatura en Derecho", description: "Prepara profesionales del derecho con sólidos conocimientos en el sistema jurídico mexicano, capaces de argumentar, litigar y promover la justicia con ética y responsabilidad social.", duracion: "9 cuatrimestres", rvoe: "RVOE: 20230411" },
    { icon: "fas fa-calculator", title: "Licenciatura en Contaduría", description: "Desarrolla expertos en finanzas, auditoría y fiscalización, con capacidad para la toma de decisiones estratégicas y cumplimiento fiscal en organizaciones públicas y privadas.", duracion: "9 cuatrimestres", rvoe: "RVOE: 20230412" },
    { icon: "fas fa-chart-line", title: "Licenciatura en Administración", description: "Forma líderes capaces de planificar, organizar y dirigir organizaciones, optimizando recursos y generando valor sostenible en entornos competitivos.", duracion: "9 cuatrimestres", rvoe: "RVOE: 20230413" },
    { icon: "fas fa-language", title: "Licenciatura en Idiomas", description: "Prepara profesionales multilingües con competencias en traducción, interpretación y enseñanza de lenguas, facilitando la comunicación intercultural global.", duracion: "9 cuatrimestres", rvoe: "RVOE: 20231995" },
    { icon: "fas fa-bullhorn", title: "Licenciatura en Mercadotecnia", description: "Desarrolla estrategas del marketing digital y tradicional, capaces de gestionar marcas, analizar mercados y conectar con consumidores generando ventajas competitivas.", duracion: "9 cuatrimestres", rvoe: "RVOE: 20231994" },
    { icon: "fas fa-globe-americas", title: "Licenciatura en Negocios Internacionales", description: "Forma profesionales capacitados para gestionar operaciones de comercio exterior, logística internacional y expansión global de empresas con visión estratégica.", duracion: "9 cuatrimestres", rvoe: "RVOE: 20231993" },
    { icon: "fas fa-laptop-code", title: "Licenciatura en Ingeniería en Sistemas Computacionales", description: "Prepara ingenieros en software y tecnología, capaces de desarrollar soluciones innovadoras en inteligencia artificial, ciberseguridad y desarrollo de aplicaciones.", duracion: "9 cuatrimestres", rvoe: "RVOE: 20231992" },
    { icon: "fas fa-hard-hat", title: "Licenciatura en Ingeniería Civil", description: "Forma ingenieros capacitados para diseñar, construir y supervisar obras de infraestructura como edificios, puentes, carreteras y sistemas hidráulicos con enfoque sustentable.", duracion: "9 cuatrimestres", rvoe: "RVOE: 20231991" },
    { icon: "fas fa-industry", title: "Licenciatura en Ingeniería Industrial y de Sistemas", description: "Prepara profesionales en optimización de procesos productivos, gestión de operaciones, control de calidad y mejora continua en organizaciones industriales y de servicios.", duracion: "9 cuatrimestres", rvoe: "RVOE: 20230410" }
];

const maestriasData = [
    { icon: "fas fa-balance-scale", title: "Maestría en Juicios Orales", description: "Especialización en el nuevo sistema de justicia penal acusatorio, desarrollando habilidades en litigación oral, argumentación jurídica y estrategias de defensa en el marco del sistema acusatorio adversarial.", duracion: "6 cuatrimestres", rvoe: "RVOE: 20231989" },
    { icon: "fas fa-chalkboard", title: "Maestría en Ciencias de la Educación", description: "Formación avanzada para profesionales de la educación en gestión institucional, diseño curricular, innovación pedagógica y evaluación educativa con perspectiva crítica y humanista.", duracion: "6 cuatrimestres", rvoe: "RVOE: 20231990" },
    { icon: "fas fa-gavel", title: "Maestría en Juicios Orales Civiles y Mercantiles", description: "Especialización en los nuevos procedimientos orales en materia civil y mercantil, con enfoque práctico y habilidades de litigio moderno en el contexto del sistema judicial mexicano.", duracion: "6 cuatrimestres", rvoe: "RVOE: 20231988" }
];

// ===== RENDER — Estilo Institucional en Columnas =====
function renderPrograms(containerId, data) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Header row
    const header = `
        <div class="programs-header">
            <span>#</span>
            <span>Programa académico</span>
            <span>RVOE</span>
            <span>Información</span>
        </div>
    `;

    const rows = data.map((item, i) => `
        <div class="program-item reveal" style="transition-delay:${i * 60}ms">
            <div class="prog-num">${String(i + 1).padStart(2, '0')}</div>
            <div class="prog-info">
                <h3 class="prog-title">${item.title}</h3>
                <p class="prog-desc">${item.description}</p>
            </div>
            <div class="prog-rvoe">
                <span class="prog-rvoe-label">RVOE</span>
                <span class="prog-rvoe-code">${item.rvoe.replace('RVOE: ', '')}</span>
            </div>
            <div class="prog-meta">
                <span class="prog-meta-item"><i class="fas fa-clock"></i> ${item.duracion}</span>
            </div>
        </div>
    `).join('');

    container.innerHTML = header + rows;
}

// ===== SLIDE VIDEO (Canvas Ken Burns) =====
const slideImages = [
    { src: "assets/plantel.jpg" },
    { src: "assets/pedagogia.jpg" },
    { src: "assets/sistemas.jpg" },
    { src: "assets/navidad.jpg" },
    { src: "assets/ajolote.jpeg" }
];

function setupCarousel() {
    const canvas = document.getElementById('slideCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const wrap = document.getElementById('slideVideoWrap');

    const SLIDE_DURATION = 5000;
    const TRANSITION_DURATION = 900;
    const N = slideImages.length;

    function resizeCanvas() {
        const dpr = window.devicePixelRatio || 1;
        canvas.width  = wrap.clientWidth  * dpr;
        canvas.height = wrap.clientHeight * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });

    const imgs = slideImages.map(s => {
        const img = new Image();
        img.src = s.src;
        return img;
    });

    let current = 0;
    let startTime = null;
    let transitionStart = null;
    let inTransition = false;

    function getKenBurns(img, t, cW, cH) {
        const iW = img.naturalWidth  || cW;
        const iH = img.naturalHeight || cH;
        const base  = Math.max(cW / iW, cH / iH);
        const scale = (1.08 - 0.08 * t) * base;
        const dw = iW * scale, dh = iH * scale;
        const dir = current % 2 === 0 ? 1 : -1;
        const ox = (cW - dw) / 2 + dir * ((dw - cW) / 2) * 0.25 * t;
        const oy = (cH - dh) / 2       + ((dh - cH) / 2) * 0.15 * t;
        return { dw, dh, ox, oy };
    }

    function drawFrame(img, t, alpha, cW, cH) {
        if (!img.complete || !img.naturalWidth) return;
        const kb = getKenBurns(img, t, cW, cH);
        ctx.globalAlpha = alpha;
        ctx.drawImage(img, kb.ox, kb.oy, kb.dw, kb.dh);
    }

    function loop(ts) {
        if (!startTime) startTime = ts;
        const elapsed = ts - startTime;
        const dpr = window.devicePixelRatio || 1;
        const cW = canvas.width  / dpr;
        const cH = canvas.height / dpr;

        ctx.clearRect(0, 0, cW, cH);

        if (inTransition && transitionStart !== null) {
            const tp   = Math.min((ts - transitionStart) / TRANSITION_DURATION, 1);
            const ease = tp < 0.5 ? 2*tp*tp : -1+(4-2*tp)*tp; // ease in-out
            const prev = (current - 1 + N) % N;
            drawFrame(imgs[prev],    1, 1 - ease, cW, cH);
            drawFrame(imgs[current], 0,     ease, cW, cH);
            if (tp >= 1) { inTransition = false; startTime = ts; }
        } else {
            const t = Math.min(elapsed / SLIDE_DURATION, 1);
            drawFrame(imgs[current], t, 1, cW, cH);
            if (elapsed >= SLIDE_DURATION) {
                current = (current + 1) % N;
                inTransition    = true;
                transitionStart = null;
                requestAnimationFrame(ts2 => {
                    transitionStart = ts2;
                    startTime = ts2 + TRANSITION_DURATION;
                });
            }
        }

        requestAnimationFrame(loop);
    }

    function start() { requestAnimationFrame(loop); }

    if (imgs[0].complete && imgs[0].naturalWidth) start();
    else imgs[0].onload = start;
}

// ===== HEADER SCROLL =====
function setupHeader() {
    const header = document.getElementById('mainHeader');
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
}

// ===== MOBILE MENU =====
function setupBurger() {
    const burger = document.getElementById('burger');
    const menu = document.getElementById('mobileMenu');
    if (!burger || !menu) return;
    burger.addEventListener('click', () => menu.classList.toggle('open'));
    menu.querySelectorAll('a').forEach(a => { a.addEventListener('click', () => menu.classList.remove('open')); });
}

// ===== SMOOTH SCROLL =====
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const id = a.getAttribute('href');
            if (id && id !== '#') {
                e.preventDefault();
                const target = document.querySelector(id);
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ===== SCROLL REVEAL =====
function setupReveal() {
    const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
        });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    renderPrograms('licenciaturasGrid', licenciaturasData);
    renderPrograms('maestriasGrid', maestriasData);
    setupCarousel();
    setupHeader();
    setupBurger();
    setupSmoothScroll();
    requestAnimationFrame(setupReveal);
});