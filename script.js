// --- CONFIGURACIÓN DE MAESTRAS (NUEVO ORDEN ESPECÍFICO) ---
const teacherPairs = [
    "Hna. Mercedes y Hna. Maybelin",
    "Hna. Arely y Hna. Yessenia",
    "Hna. América y Hna. Mélida",
    "Hna. Ludy y Hna. Norma",
    "Hna. Noemy y Hna. América"
];

// --- PLAN DE ESTUDIOS 2026 (NIÑOS 5-10 AÑOS) ---
// Formato formal para maestras, 10 clases por mes para evitar repeticiones.
const syllabusData = [
    {
        month: "Enero",
        icon: "🌍",
        theme: "¡El Gran Comienzo!",
        themeColor: "theme-blue",
        bgUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=500&q=80",
        lessons: [
            { story: "La Creación del mundo", verse: "Génesis 1:1", thought: "Dios es el Creador soberano de todas las cosas." },
            { story: "Adán y Eva en el huerto del Edén", verse: "Génesis 1:27", thought: "Fuimos creados a imagen y semejanza de Dios." },
            { story: "El Arca de Noé y el diluvio", verse: "Génesis 6:22", thought: "La obediencia a Dios trae salvación." },
            { story: "La Torre de Babel", verse: "Génesis 11:9", thought: "El orgullo del hombre frente a la soberanía de Dios." },
            { story: "El llamado de Abram", verse: "Génesis 12:1", thought: "Caminar por fe siguiendo la dirección divina." },
            { story: "Lot y la elección de Sodoma", verse: "Génesis 13:10", thought: "Las consecuencias de elegir según la vista y no por fe." },
            { story: "El nacimiento de Isaac", verse: "Génesis 21:3", thought: "Dios es fiel para cumplir sus promesas a su tiempo." },
            { story: "Rebeca y el siervo de Abraham", verse: "Génesis 24:18", thought: "El valor del servicio y la hospitalidad." },
            { story: "Jacob y Esaú: La primogenitura", verse: "Génesis 25:31", thought: "Valorar las bendiciones espirituales por encima de lo terrenal." },
            { story: "El sueño de Jacob en Betel", verse: "Génesis 28:12", thought: "Dios está presente en todo momento y lugar." }
        ]
    },
    {
        month: "Febrero",
        icon: "⛺",
        theme: "Héroes de la Fe",
        themeColor: "theme-orange",
        bgUrl: "https://images.unsplash.com/photo-1504280506508-36f121b65b55?auto=format&fit=crop&w=500&q=80",
        lessons: [
            { story: "José y la túnica de colores", verse: "Génesis 37:3", thought: "El amor del Padre nos hace especiales." },
            { story: "José interpreta los sueños del Faraón", verse: "Génesis 41:16", thought: "La sabiduría y los dones provienen de Dios." },
            { story: "José perdona a sus hermanos", verse: "Génesis 45:5", thought: "El perdón restaura las relaciones y cumple el propósito de Dios." },
            { story: "El nacimiento y rescate de Moisés", verse: "Éxodo 2:3", thought: "La providencia divina cuida de sus siervos." },
            { story: "Moisés y la zarza ardiente", verse: "Éxodo 3:4", thought: "Reverencia y santidad ante la presencia de Dios." },
            { story: "Las plagas de Egipto", verse: "Éxodo 8:1", thought: "El poder absoluto de Dios sobre los dioses falsos." },
            { story: "El cruce del Mar Rojo", verse: "Éxodo 14:21", thought: "Dios abre caminos de salvación para su pueblo." },
            { story: "La provisión del Maná", verse: "Éxodo 16:15", thought: "Dependencia diaria de la provisión divina." },
            { story: "Agua de la roca en Horeb", verse: "Éxodo 17:6", thought: "Cristo es la roca que sacia nuestra sed espiritual." },
            { story: "La columna de nube y de fuego", verse: "Éxodo 13:21", thought: "La guía y protección constante del Espíritu Santo." }
        ]
    },
    {
        month: "Marzo",
        icon: "📜",
        theme: "Reglas y Conquistas",
        themeColor: "theme-blue",
        bgUrl: "https://images.unsplash.com/photo-1542614748-0d17042301c3?auto=format&fit=crop&w=500&q=80",
        lessons: [
            { story: "Los Diez Mandamientos", verse: "Éxodo 20:1", thought: "La ley de Dios nos guía a una vida recta." },
            { story: "La construcción del Tabernáculo", verse: "Éxodo 25:8", thought: "Dios desea habitar en medio de su pueblo." },
            { story: "El reporte de los doce espías", verse: "Números 13:30", thought: "Avanzar con fe sin mirar los obstáculos." },
            { story: "La burra de Balaam", verse: "Números 22:28", thought: "Dios utiliza diversos medios para revelarnos su voluntad." },
            { story: "Rahab y los espías en Jericó", verse: "Josué 2:21", thought: "La fe que trae salvación familiar." },
            { story: "La toma de Jericó", verse: "Josué 6:20", thought: "La victoria se obtiene mediante la obediencia y la alabanza." },
            { story: "El día que el sol se detuvo", verse: "Josué 10:13", thought: "Para Dios no hay imposibles cuando clamamos a Él." },
            { story: "Gedeón y los trescientos valientes", verse: "Jueces 7:20", thought: "Dios no depende de las multitudes para dar la victoria." },
            { story: "La lealtad de Rut hacia Noemí", verse: "Rut 2:2", thought: "El valor de la fidelidad y el trabajo honesto." },
            { story: "Booz redime a Rut", verse: "Rut 4:14", thought: "Cristo es nuestro Redentor." }
        ]
    },
    {
        month: "Abril",
        icon: "🦁",
        theme: "Fuerza y Reinado",
        themeColor: "theme-red",
        bgUrl: "https://images.unsplash.com/photo-1548366086-7f1b76106622?auto=format&fit=crop&w=500&q=80",
        lessons: [
            { story: "La oración y fe de Ana", verse: "1 Samuel 1:27", thought: "Dios responde al clamor de un corazón quebrantado." },
            { story: "El llamamiento de Samuel", verse: "1 Samuel 3:4", thought: "Disposición para escuchar la voz de Dios." },
            { story: "Sansón y el origen de su fuerza", verse: "Jueces 16:17", thought: "Nuestra verdadera fortaleza proviene del Espíritu de Dios." },
            { story: "David es ungido como rey", verse: "1 Samuel 16:23", thought: "Dios mira el corazón, no las apariencias." },
            { story: "David vence a Goliat", verse: "1 Samuel 17:45", thought: "Enfrentamos las batallas en el nombre de Jehová de los ejércitos." },
            { story: "La amistad de David y Jonatán", verse: "1 Samuel 18:1", thought: "El valor del compañerismo cristiano leal." },
            { story: "David es establecido como rey", verse: "2 Samuel 5:4", thought: "Dios nos prepara pacientemente para sus propósitos." },
            { story: "Salomón pide sabiduría a Dios", verse: "1 Reyes 3:9", thought: "La sabiduría divina es más valiosa que las riquezas." },
            { story: "La dedicación del Templo", verse: "1 Reyes 6:14", thought: "Reverencia y cuidado por la casa de Dios." },
            { story: "La visita de la reina de Sabá", verse: "1 Reyes 10:1", thought: "Buscar el conocimiento de Dios con diligencia." }
        ]
    },
    {
        month: "Mayo",
        icon: "🔥",
        theme: "Profetas y Milagros",
        themeColor: "theme-orange",
        bgUrl: "https://images.unsplash.com/photo-1485642736156-b6058f96e147?auto=format&fit=crop&w=500&q=80",
        lessons: [
            { story: "Elías es alimentado por los cuervos", verse: "1 Reyes 17:6", thought: "La providencia de Dios en tiempos de escasez." },
            { story: "La fe de la viuda de Sarepta", verse: "1 Reyes 17:16", thought: "Dios multiplica lo que consagramos a Él." },
            { story: "Elías en el Monte Carmelo", verse: "1 Reyes 18:38", thought: "Jehová es el único Dios verdadero." },
            { story: "Elías es llevado al cielo", verse: "2 Reyes 2:11", thought: "La esperanza gloriosa de la vida eterna." },
            { story: "La sanidad de Naamán el sirio", verse: "2 Reyes 5:14", thought: "La obediencia humilde trae sanidad." },
            { story: "El milagro del aceite de la viuda", verse: "2 Reyes 4:6", thought: "La fe abundante recibe bendición abundante." },
            { story: "El milagro del hacha flotante", verse: "2 Reyes 6:6", thought: "A Dios le importan todas nuestras necesidades." },
            { story: "Jonás y el gran pez", verse: "Jonás 1:17", thought: "Nadie puede huir de la presencia ni del llamado de Dios." },
            { story: "La determinación de Daniel", verse: "Daniel 1:8", thought: "Mantener la santidad en medio de un mundo adverso." },
            { story: "Los tres jóvenes en el horno de fuego", verse: "Daniel 3:25", thought: "Cristo nos acompaña en medio de las pruebas." }
        ]
    },
    {
        month: "Junio",
        icon: "👸",
        theme: "Reinas, Leones y Profetas",
        themeColor: "theme-red",
        bgUrl: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&w=500&q=80",
        lessons: [
            { story: "Daniel en el foso de los leones", verse: "Daniel 6:22", thought: "La fidelidad a Dios trae su protección." },
            { story: "La valentía de la reina Ester", verse: "Ester 4:16", thought: "Fuimos puestos con un propósito para este tiempo." },
            { story: "Nehemías reedifica los muros", verse: "Nehemías 4:17", thought: "Oración y trabajo diligente en la obra de Dios." },
            { story: "Esdras lee la Ley al pueblo", verse: "Nehemías 8:3", thought: "El respeto y atención debida a la Palabra de Dios." },
            { story: "La paciencia de Job en la prueba", verse: "Job 1:21", thought: "Adorar a Dios independientemente de las circunstancias." },
            { story: "El llamamiento del profeta Isaías", verse: "Isaías 6:3", thought: "La majestad y santidad incomprensible de Dios." },
            { story: "El llamamiento de Jeremías", verse: "Jeremías 1:7", thought: "Dios equipa a quienes llama, sin importar su edad." },
            { story: "La visión del valle de los huesos secos", verse: "Ezequiel 37:5", thought: "El poder vivificador del Espíritu Santo." },
            { story: "El mandato sobre los diezmos", verse: "Malaquías 3:10", thought: "La fidelidad financiera hacia la casa de Dios." },
            { story: "El tiempo de silencio antes del Mesías", verse: "Gálatas 4:4", thought: "Dios obra perfectamente en el cumplimiento del tiempo." }
        ]
    },
    {
        month: "Julio",
        icon: "👶",
        theme: "¡Jesús ha llegado!",
        themeColor: "theme-orange",
        bgUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=500&q=80",
        lessons: [
            { story: "La anunciación a María", verse: "Lucas 1:30", thought: "Sujeción a la voluntad de Dios, porque nada hay imposible para Él." },
            { story: "El nacimiento de Jesús en Belén", verse: "Lucas 2:7", thought: "La humildad en la venida del Salvador del mundo." },
            { story: "El anuncio a los pastores", verse: "Lucas 2:14", thought: "Las buenas nuevas de gran gozo son para todos." },
            { story: "La visita de los magos de oriente", verse: "Mateo 2:10", thought: "Rendir la adoración que Cristo merece." },
            { story: "Jesús en el templo a los doce años", verse: "Lucas 2:49", thought: "Dedicación a los negocios del Padre celestial." },
            { story: "El ministerio de Juan el Bautista", verse: "Mateo 3:3", thought: "Preparar el camino para la manifestación de Cristo." },
            { story: "El bautismo de Jesús", verse: "Mateo 3:16", thought: "El testimonio del Padre sobre su Hijo amado." },
            { story: "La tentación de Jesús en el desierto", verse: "Mateo 4:4", thought: "La victoria sobre la tentación mediante la Escritura." },
            { story: "El llamado de los primeros discípulos", verse: "Mateo 4:19", thought: "Dejarlo todo para seguir el llamado de Cristo." },
            { story: "La elección de los doce apóstoles", verse: "Lucas 6:13", thought: "El privilegio y la responsabilidad del discipulado." }
        ]
    },
    {
        month: "Agosto",
        icon: "🥖",
        theme: "Los Milagros de Jesús",
        themeColor: "theme-blue",
        bgUrl: "https://images.unsplash.com/photo-1506459225024-1428097a7e18?auto=format&fit=crop&w=500&q=80",
        lessons: [
            { story: "El primer milagro: Las bodas de Caná", verse: "Juan 2:11", thought: "Obedecer las instrucciones de Jesús transforma las circunstancias." },
            { story: "La sanidad del paralítico de Capernaúm", verse: "Marcos 2:4", thought: "El esfuerzo compasivo por llevar a otros a Cristo." },
            { story: "Jesús calma la tempestad", verse: "Marcos 4:39", thought: "Cristo tiene autoridad sobre las tormentas de la vida." },
            { story: "La resurrección de la hija de Jairo", verse: "Marcos 5:41", thought: "Jesús es el Señor sobre la enfermedad y la muerte." },
            { story: "La alimentación de los cinco mil", verse: "Juan 6:9", thought: "Dios multiplica lo poco que rendimos en sus manos." },
            { story: "Jesús camina sobre el mar", verse: "Mateo 14:29", thought: "Mantener la mirada en Jesús para no hundirnos." },
            { story: "La sanidad del ciego Bartimeo", verse: "Marcos 10:51", thought: "La fe persistente que clama por misericordia." },
            { story: "La sanidad de los diez leprosos", verse: "Lucas 17:15", thought: "La importancia de un corazón agradecido." },
            { story: "La conversión de Zaqueo", verse: "Lucas 19:5", thought: "El encuentro con Jesús produce un cambio verdadero." },
            { story: "La resurrección de Lázaro", verse: "Juan 11:43", thought: "Jesús es la resurrección y la vida." }
        ]
    },
    {
        month: "Septiembre",
        icon: "🐑",
        theme: "Historias que Enseñan",
        themeColor: "theme-green",
        bgUrl: "https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&w=500&q=80",
        lessons: [
            { story: "Los dos cimientos", verse: "Mateo 7:24", thought: "Edificar nuestra vida sobre la obediencia a la Palabra." },
            { story: "La parábola del sembrador", verse: "Lucas 8:15", thought: "Preparar el corazón para recibir y dar fruto de la Palabra." },
            { story: "La parábola del trigo y la cizaña", verse: "Mateo 13:30", thought: "Dios es el juez justo que juzgará al final de los tiempos." },
            { story: "El buen samaritano", verse: "Lucas 10:33", thought: "El amor al prójimo demostrado a través de la misericordia práctica." },
            { story: "La parábola de la oveja perdida", verse: "Lucas 15:4", thought: "El inmenso valor de un alma para nuestro Salvador." },
            { story: "La parábola de la moneda perdida", verse: "Lucas 15:9", thought: "El gozo celestial por el arrepentimiento de un pecador." },
            { story: "La parábola del hijo pródigo", verse: "Lucas 15:20", thought: "El amor incondicional y restaurador del Padre." },
            { story: "La parábola de la gran cena", verse: "Lucas 14:23", thought: "El llamado universal a la salvación." },
            { story: "La parábola de los talentos", verse: "Mateo 25:21", thought: "Ser mayordomos fieles de los dones que Dios nos ha dado." },
            { story: "El fariseo y el publicano", verse: "Lucas 18:13", thought: "La justificación proviene de la humildad y el arrepentimiento." }
        ]
    },
    {
        month: "Octubre",
        icon: "✝️",
        theme: "El Amor más Grande",
        themeColor: "theme-red",
        bgUrl: "https://images.unsplash.com/photo-1549247605-6f903fbdd474?auto=format&fit=crop&w=500&q=80",
        lessons: [
            { story: "María unge los pies de Jesús", verse: "Juan 12:3", thought: "Entregar a Cristo nuestra adoración más valiosa." },
            { story: "La entrada triunfal a Jerusalén", verse: "Mateo 21:9", thought: "Reconocer a Jesús como el Rey y Mesías." },
            { story: "Jesús lava los pies a sus discípulos", verse: "Juan 13:14", thought: "El mayor ejemplo de humildad y servicio mutuo." },
            { story: "La institución de la Santa Cena", verse: "Lucas 22:19", thought: "Recordar y anunciar el sacrificio del Nuevo Pacto." },
            { story: "La oración en el huerto de Getsemaní", verse: "Lucas 22:42", thought: "Sumisión total a la voluntad del Padre." },
            { story: "La negación de Pedro", verse: "Lucas 22:61", thought: "La gracia de Cristo restaura a pesar de nuestras fallas." },
            { story: "La crucifixión de Jesús", verse: "Juan 3:16", thought: "El amor incomprensible de Dios revelado en la cruz." },
            { story: "La tumba vacía: La Resurrección", verse: "Mateo 28:6", thought: "La victoria absoluta de Cristo sobre la muerte." },
            { story: "El camino a Emaús", verse: "Lucas 24:32", thought: "Cristo se revela a través del estudio de las Escrituras." },
            { story: "La incredulidad de Tomás", verse: "Juan 20:29", thought: "La bienaventuranza de creer sin haber visto." }
        ]
    },
    {
        month: "Noviembre",
        icon: "🔥",
        theme: "La Iglesia Nace",
        themeColor: "theme-orange",
        bgUrl: "https://images.unsplash.com/photo-1528150395403-992a693e26c8?auto=format&fit=crop&w=500&q=80",
        lessons: [
            { story: "La ascensión de Jesús", verse: "Hechos 1:9", thought: "Cristo glorificado intercede por nosotros en el cielo." },
            { story: "El derramamiento del Espíritu Santo", verse: "Hechos 1:8", thought: "El poder de lo alto para ser testigos eficaces." },
            { story: "La sanidad del cojo en el templo", verse: "Hechos 3:6", thought: "La autoridad que existe en el nombre de Jesucristo." },
            { story: "El engaño de Ananías y Safira", verse: "Hechos 5:4", thought: "La integridad y temor reverente en la congregación." },
            { story: "El martirio de Esteban", verse: "Hechos 7:60", thought: "La gracia para perdonar en medio de la persecución." },
            { story: "Felipe y el etíope", verse: "Hechos 8:35", thought: "Disposición para evangelizar a nivel personal." },
            { story: "La conversión de Saulo", verse: "Hechos 9:4", thought: "El poder transformador de la gracia de Dios." },
            { story: "La resurrección de Dorcas", verse: "Hechos 9:39", thought: "El impacto de una vida dedicada a las buenas obras." },
            { story: "La liberación de Pedro de la cárcel", verse: "Hechos 12:7", thought: "El poder de la oración intercesora de la iglesia." },
            { story: "Pablo y Silas en la cárcel de Filipos", verse: "Hechos 16:25", thought: "La alabanza en medio de la prueba rompe cadenas." }
        ]
    },
    {
        month: "Diciembre",
        icon: "✨",
        theme: "¡Victoria Final!",
        themeColor: "theme-green",
        bgUrl: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=500&q=80",
        lessons: [
            { story: "El Fruto del Espíritu Santo", verse: "Gálatas 5:22", thought: "Evidencia del carácter de Cristo en el creyente." },
            { story: "Virtudes del Fruto del Espíritu", verse: "Gálatas 5:23", thought: "Sujeción de la carne para caminar en el Espíritu." },
            { story: "La armadura de Dios", verse: "Efesios 6:11", thought: "Nuestra preparación para la batalla espiritual." },
            { story: "La espada del Espíritu", verse: "Efesios 6:17", thought: "La Palabra de Dios como defensa y ataque." },
            { story: "La visión de Juan en la isla de Patmos", verse: "Apocalipsis 1:19", thought: "La soberanía de Dios sobre el futuro del mundo." },
            { story: "Jesús llama a la puerta", verse: "Apocalipsis 3:20", thought: "El deseo de Cristo de tener comunión íntima con nosotros." },
            { story: "La Nueva Jerusalén", verse: "Apocalipsis 21:21", thought: "La gloriosa esperanza de nuestra morada eterna." },
            { story: "Cielos nuevos y tierra nueva", verse: "Apocalipsis 21:4", thought: "La restauración total y el fin de todo sufrimiento." },
            { story: "El río y el árbol de la vida", verse: "Apocalipsis 22:1", thought: "La vida eterna y sanidad perfecta en la presencia de Dios." },
            { story: "La promesa de su venida", verse: "Apocalipsis 22:20", thought: "La iglesia espera vigilante el retorno de su Señor." }
        ]
    }
];

// --- FUNCIONES LÓGICAS (FECHAS Y MODAL) ---

function getClassDates(monthIndex) {
    const dates = [];
    const year = 2026;
    const date = new Date(year, monthIndex, 1);
    
    // Nombres de días (0=Domingo, 2=Martes)
    const dayNames = {0: "Domingo", 2: "Martes"}; 

    while (date.getMonth() === monthIndex) {
        const day = date.getDay();
        if (day === 0 || day === 2) {
            dates.push({
                dayName: dayNames[day],
                fullDate: date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })
            });
        }
        date.setDate(date.getDate() + 1);
    }
    return dates;
}

const monthsGrid = document.getElementById('monthsGrid');

// Renderizar Tarjetas del Menú de Meses
syllabusData.forEach((data, index) => {
    const card = document.createElement('div');
    card.className = 'month-card';
    
    card.innerHTML = `
        <div class="emoji-circle">${data.icon}</div>
        <h3 class="month-name">${data.month}</h3>
        <div class="month-theme ${data.themeColor}">${data.theme}</div>
    `;
    
    card.onclick = () => openModal(index);
    monthsGrid.appendChild(card);
});

// Lógica del Modal (Ventana Emergente de la Tabla)
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-btn');
const modalHeader = document.getElementById('modalHeader');
const tableBody = document.getElementById('tableBody');

function openModal(monthIndex) {
    const data = syllabusData[monthIndex];
    const dates = getClassDates(monthIndex);
    
    // Calcular índice de maestras para que rote continuo todo el año
    let currentTeacherIndex = 0;
    for(let i = 0; i < monthIndex; i++) {
        currentTeacherIndex += getClassDates(i).length;
    }

    modalHeader.innerHTML = `
        <h2>${data.month}</h2>
        <p>Tema General: <strong>${data.theme}</strong></p>
    `;

    tableBody.innerHTML = '';

    dates.forEach((dateObj, i) => {
        // Lección formal. Si por calendario hubiese 11 días, pone una clase de repaso.
        const lesson = data.lessons[i] || { 
            story: "Clase de Repaso / Manualidad", 
            verse: "Salmos 119:105", 
            thought: "Reforzando las enseñanzas bíblicas impartidas en el mes." 
        };
        
        // Ciclo de maestras
        const teachers = teacherPairs[currentTeacherIndex % teacherPairs.length]; 
        currentTeacherIndex++;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${i + 1}</td>
            <td style="font-weight:bold; color:#2980b9; text-align: center;">${dateObj.dayName}</td>
            <td style="font-weight:bold; color:#7f8c8d; text-align: center;">${dateObj.fullDate}</td>
            <td>${lesson.story}</td>
            <td style="font-style:italic;">${lesson.verse}</td>
            <td>${lesson.thought}</td>
            <td>${teachers}</td>
        `;
        tableBody.appendChild(row);
    });

    modal.style.display = "block";
}

closeBtn.onclick = () => { modal.style.display = "none"; }
window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; }
