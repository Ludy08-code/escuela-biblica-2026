// --- CONFIGURACIÓN DE MAESTRAS (NUEVO ORDEN ESPECÍFICO) ---
const teacherPairs = [
    "Hna. Mercedes y Hna. Maybelin",
    "Hna. Arely y Hna. Yessenia",
    "Hna. América y Hna. Mélida",
    "Hna. Ludy y Hna. Norma",
    "Hna. Noemy y Hna. América"
];

// --- PLAN DE ESTUDIOS 2026 (NIÑOS 5-10 AÑOS) ---
// Expandido a 10 clases por mes para evitar repeticiones y mantener una secuencia hermosa.
const syllabusData = [
    {
        month: "Enero",
        icon: "🌍",
        theme: "¡El Gran Comienzo!",
        themeColor: "theme-blue",
        bgUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=500&q=80",
        lessons: [
            { story: "Dios crea el mundo lleno de color", verse: "Génesis 1:1", thought: "Dios hizo todo el mundo hermoso para mí." },
            { story: "Adán y Eva: Los primeros en el jardín", verse: "Génesis 1:27", thought: "Soy especial porque Dios me creó." },
            { story: "El Arca de Noé y el desfile de animales", verse: "Génesis 6:22", thought: "Debo obedecer a Dios siempre." },
            { story: "La Torre de Babel: ¡Confusión de idiomas!", verse: "Génesis 11:9", thought: "Trabajar en equipo y con humildad agrada a Dios." },
            { story: "El llamado de Abram: ¡Deja tu casa!", verse: "Génesis 12:1", thought: "Escucho la voz de Dios y le sigo con fe." },
            { story: "Lot escoge mal: Cuidado con lo que miras", verse: "Génesis 13:10", thought: "Pongo a Dios primero antes que mis gustos." },
            { story: "Isaac: El bebé que trajo mucha risa", verse: "Génesis 21:3", thought: "Dios siempre cumple sus promesas a tiempo." },
            { story: "Rebeca da agua a los camellos", verse: "Génesis 24:18", thought: "Soy amable, servicial y ayudo a los demás." },
            { story: "Jacob y Esaú: Los hermanos gemelos", verse: "Génesis 25:31", thought: "Amo a mis hermanos y no peleo con ellos." },
            { story: "Jacob sueña con una escalera al cielo", verse: "Génesis 28:12", thought: "Dios siempre está cuidándome desde arriba." }
        ]
    },
    {
        month: "Febrero",
        icon: "⛺",
        theme: "Héroes de la Fe",
        themeColor: "theme-orange",
        bgUrl: "https://images.unsplash.com/photo-1504280506508-36f121b65b55?auto=format&fit=crop&w=500&q=80",
        lessons: [
            { story: "José recibe una túnica de muchos colores", verse: "Génesis 37:3", thought: "Mi Padre Dios me ama de manera especial." },
            { story: "José en prisión y los sueños del Faraón", verse: "Génesis 41:16", thought: "Dios me da inteligencia y sabiduría." },
            { story: "José perdona a sus hermanos con abrazos", verse: "Génesis 45:5", thought: "Perdonar sana mi corazón y alegra a Dios." },
            { story: "Una canasta en el río: Nace el bebé Moisés", verse: "Éxodo 2:3", thought: "Dios me cuida desde que soy pequeñito." },
            { story: "Moisés y la zarza que ardía pero no se quemaba", verse: "Éxodo 3:4", thought: "Siento reverencia por las cosas de Dios." },
            { story: "¡Plagas! El poder inmenso de Dios en Egipto", verse: "Éxodo 8:1", thought: "Nadie es más poderoso que mi Dios." },
            { story: "Cruzando el Mar Rojo sin mojarse los pies", verse: "Éxodo 14:21", thought: "Dios abre caminos donde parece imposible." },
            { story: "Comida que cae del cielo: El Maná dulce", verse: "Éxodo 16:15", thought: "Doy gracias por mi comidita de cada día." },
            { story: "¡Agua saliendo de una roca gigante!", verse: "Éxodo 17:6", thought: "Dios sabe exactamente qué necesito." },
            { story: "La nube de día y el fuego de noche", verse: "Éxodo 13:21", thought: "Dios nunca me deja solo, Él me guía." }
        ]
    },
    {
        month: "Marzo",
        icon: "📜",
        theme: "Reglas y Conquistas",
        themeColor: "theme-blue",
        bgUrl: "https://images.unsplash.com/photo-1542614748-0d17042301c3?auto=format&fit=crop&w=500&q=80",
        lessons: [
            { story: "Los 10 Mandamientos: Reglas hechas con amor", verse: "Éxodo 20:1", thought: "Las reglas de Dios son para protegerme." },
            { story: "El Tabernáculo: La casita de Dios", verse: "Éxodo 25:8", thought: "Quiero que Dios viva en mi corazón." },
            { story: "12 Espías: ¡Gigantes contra uvas enormes!", verse: "Números 13:30", thought: "Con Dios soy valiente y no tengo miedo." },
            { story: "La burra de Balaam que se puso a hablar", verse: "Números 22:28", thought: "Presto atención cuando Dios quiere enseñarme algo." },
            { story: "Rahab esconde a los espías (La cuerda roja)", verse: "Josué 2:21", thought: "Dios salva a mi familia si tengo fe." },
            { story: "¡Muros abajo! La marcha de Jericó", verse: "Josué 6:20", thought: "Obedecer y alabar trae grandes victorias." },
            { story: "El increíble día que el sol se detuvo", verse: "Josué 10:13", thought: "Para Dios nada, nada es imposible." },
            { story: "Gedeón y sus 300 valientes con trompetas", verse: "Jueces 7:20", thought: "No importa si soy pequeño, Dios está conmigo." },
            { story: "Rut recoge espiguitas en el campo", verse: "Rut 2:2", thought: "Soy trabajador y leal con mi familia." },
            { story: "Rut y Booz: Dios recompensa la lealtad", verse: "Rut 4:14", thought: "Dios tiene un final feliz preparado para mí." }
        ]
    },
    {
        month: "Abril",
        icon: "🦁",
        theme: "Fuerza y Reinado",
        themeColor: "theme-red",
        bgUrl: "https://images.unsplash.com/photo-1548366086-7f1b76106622?auto=format&fit=crop&w=500&q=80",
        lessons: [
            { story: "Ana ora por un bebé con todo su corazón", verse: "1 Samuel 1:27", thought: "Dios escucha mis oraciones más sinceras." },
            { story: "El niño Samuel escucha una voz: 'Heme aquí'", verse: "1 Samuel 3:4", thought: "Aprendo a escuchar la suave voz de Dios." },
            { story: "Sansón el fuerte: El secreto estaba en Dios", verse: "Jueces 16:17", thought: "Mi verdadera fuerza interior viene de Dios." },
            { story: "David el pastorcito que tocaba el arpa", verse: "1 Samuel 16:23", thought: "Alabo a Dios con música y alegría." },
            { story: "David y su honda vencen al gigante Goliat", verse: "1 Samuel 17:45", thought: "En el nombre de Jesús venzo mis miedos." },
            { story: "David y Jonatán: Un abrazo de mejores amigos", verse: "1 Samuel 18:1", thought: "Soy un buen amigo que comparte y cuida." },
            { story: "David llega a ser un gran Rey", verse: "2 Samuel 5:4", thought: "Dios me prepara hoy para cosas grandes mañana." },
            { story: "El Rey Salomón pide ser sabio e inteligente", verse: "1 Reyes 3:9", thought: "Pido a Dios sabiduría para hacer lo correcto." },
            { story: "Salomón construye el hermoso Templo de Dios", verse: "1 Reyes 6:14", thought: "Cuido la iglesia porque es la casa de Dios." },
            { story: "La Reina de Sabá viaja de lejos para aprender", verse: "1 Reyes 10:1", thought: "Me emociona aprender cosas nuevas de Dios." }
        ]
    },
    {
        month: "Mayo",
        icon: "🔥",
        theme: "Profetas y Milagros",
        themeColor: "theme-orange",
        bgUrl: "https://images.unsplash.com/photo-1485642736156-b6058f96e147?auto=format&fit=crop&w=500&q=80",
        lessons: [
            { story: "Elías en el desierto y los cuervos panaderos", verse: "1 Reyes 17:6", thought: "Dios suple mis necesidades de formas increíbles." },
            { story: "El aceite y la harina de la viuda no se acaban", verse: "1 Reyes 17:16", thought: "Dios multiplica lo poco que tengo si lo comparto." },
            { story: "Fuego del cielo en el Monte Carmelo", verse: "1 Reyes 18:38", thought: "Solo Jehová es el Dios verdadero." },
            { story: "Elías sube al cielo en un carro de fuego", verse: "2 Reyes 2:11", thought: "Hay un cielo real y maravilloso esperándome." },
            { story: "Eliseo y la vasija de aceite de la viuda", verse: "2 Reyes 4:6", thought: "Dios llena mi vida hasta que sobreabunde." },
            { story: "¡Oh no! El hacha de hierro que flotó", verse: "2 Reyes 6:6", thought: "A Dios le importan hasta mis problemas pequeños." },
            { story: "Naamán se baña 7 veces en el río Jordán", verse: "2 Reyes 5:14", thought: "Obedezco instrucciones aunque me parezcan extrañas." },
            { story: "Jonás y el gran pez (¡Glup!)", verse: "Jonás 1:17", thought: "No puedo huir de Dios, Él me ve y me ama." },
            { story: "Daniel dice NO a la comida del Rey", verse: "Daniel 1:8", thought: "Cuido mi cuerpo comiendo sano para Dios." },
            { story: "Tres amigos fieles en el horno de fuego", verse: "Daniel 3:25", thought: "Jesús está conmigo en los momentos difíciles." }
        ]
    },
    {
        month: "Junio",
        icon: "👸",
        theme: "Reinas, Leones y Profetas",
        themeColor: "theme-red",
        bgUrl: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&w=500&q=80",
        lessons: [
            { story: "Daniel duerme tranquilo con los leones hambrientos", verse: "Daniel 6:22", thought: "El ángel de Dios cierra la boca de mis miedos." },
            { story: "La Reina Ester es muy valiente ante el Rey", verse: "Ester 4:16", thought: "Nací con un propósito súper especial de Dios." },
            { story: "Nehemías construye el muro usando una sola mano", verse: "Nehemías 4:17", thought: "Trabajo duro y oro a Dios al mismo tiempo." },
            { story: "Esdras lee la Biblia a todo el pueblo", verse: "Nehemías 8:3", thought: "Escucho la Palabra de Dios con mucho respeto." },
            { story: "Job: Paciencia cuando las cosas salen mal", verse: "Job 1:21", thought: "Sigo amando a Dios aunque me sienta triste." },
            { story: "Isaías ve a Dios en el trono (¡Santo, Santo!)", verse: "Isaías 6:3", thought: "Dios es grande, Majestuoso y Santo." },
            { story: "Jeremías: El niño que fue llamado a ser profeta", verse: "Jeremías 1:7", thought: "No soy muy pequeño para servir a Dios." },
            { story: "Ezequiel y los huesos secos que cobraron vida", verse: "Ezequiel 37:5", thought: "El Espíritu de Dios da vida a lo que está apagado." },
            { story: "Malaquías: Llevando los diezmos con alegría", verse: "Malaquías 3:10", thought: "Soy generoso y doy lo mejor a la casa de Dios." },
            { story: "El gran silencio antes de que llegara Jesús", verse: "Gálatas 4:4", thought: "Sé esperar con paciencia el tiempo perfecto de Dios." }
        ]
    },
    {
        month: "Julio",
        icon: "👶",
        theme: "¡Jesús ha llegado!",
        themeColor: "theme-orange",
        bgUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=500&q=80",
        lessons: [
            { story: "El Ángel Gabriel visita a una joven llamada María", verse: "Lucas 1:30", thought: "Para Dios nada es imposible, Él hace maravillas." },
            { story: "Nacimiento en Belén: Una cuna de paja", verse: "Lucas 2:7", thought: "Preparo un lugar hermoso en mi corazón para Jesús." },
            { story: "Los pastores asombrados y el coro de ángeles", verse: "Lucas 2:14", thought: "¡Canto con alegría, Gloria a Dios en las alturas!" },
            { story: "Los Sabios de Oriente siguen una estrella brillante", verse: "Mateo 2:10", thought: "Busco a Jesús todos los días para adorarle." },
            { story: "El niño Jesús perdido (y encontrado) en el Templo", verse: "Lucas 2:49", thought: "Me gusta mucho aprender en la casa de Dios." },
            { story: "Juan el Bautista: Una voz fuerte en el desierto", verse: "Mateo 3:3", thought: "Ayudo a preparar el camino para el Señor." },
            { story: "El Bautismo de Jesús y la paloma blanca", verse: "Mateo 3:16", thought: "Soy un niño muy amado por Dios Padre." },
            { story: "Jesús vence la tentación usando la Biblia", verse: "Mateo 4:4", thought: "Me defiendo usando la Palabra de Dios." },
            { story: "Pescadores de hombres (Jesús llama a Pedro y Andrés)", verse: "Mateo 4:19", thought: "Invito a mis amiguitos a conocer a Jesús." },
            { story: "Jesús elige a sus 12 amigos especiales", verse: "Lucas 6:13", thought: "Yo también soy un discípulo de Jesús." }
        ]
    },
    {
        month: "Agosto",
        icon: "🥖",
        theme: "Los Milagros de Jesús",
        themeColor: "theme-blue",
        bgUrl: "https://images.unsplash.com/photo-1506459225024-1428097a7e18?auto=format&fit=crop&w=500&q=80",
        lessons: [
            { story: "¡Magia no, Milagro! Agua hecha jugo en las bodas de Caná", verse: "Juan 2:11", thought: "Hago caso a todo lo que Jesús me diga." },
            { story: "Amigos bajando a un paralítico por un agujero en el techo", verse: "Marcos 2:4", thought: "Soy un buen amigo que acerca a otros a Jesús." },
            { story: "Jesús dice '¡Silencio!' y calma una gran tormenta", verse: "Marcos 4:39", thought: "Con Jesús en mi barquito, tengo paz y no miedo." },
            { story: "¡Talita Cumi! La niña de Jairo despierta de dormir", verse: "Marcos 5:41", thought: "Jesús tiene poder sobre todas las cosas." },
            { story: "El niño que dio su merienda y alimentó a 5000", verse: "Juan 6:9", thought: "Comparto lo poco que tengo y Jesús lo multiplica." },
            { story: "Jesús y Pedro caminan sobre el agua del mar", verse: "Mateo 14:29", thought: "Fijo mis ojos en Jesús para no hundirme." },
            { story: "Bartimeo el ciego grita muy fuerte para que Jesús lo escuche", verse: "Marcos 10:51", thought: "Hablo con Dios con fe y Él siempre me oye." },
            { story: "10 Leprosos sanados: Solo uno regresó a decir gracias", verse: "Lucas 17:15", thought: "Nunca me olvido de decir: ¡Gracias Jesús!" },
            { story: "Zaqueo, el hombre bajito que se subió a un árbol", verse: "Lucas 19:5", thought: "Jesús quiere venir a mi casa hoy." },
            { story: "¡Lázaro, sal fuera! Un hombre vuelve a vivir", verse: "Juan 11:43", thought: "Jesús es la resurrección y la vida eterna." }
        ]
    },
    {
        month: "Septiembre",
        icon: "🐑",
        theme: "Historias que Enseñan",
        themeColor: "theme-green",
        bgUrl: "https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&w=500&q=80",
        lessons: [
            { story: "La casita construida sobre la roca fuerte", verse: "Mateo 7:24", thought: "Obedecer la Biblia es construir una vida fuerte." },
            { story: "El Sembrador y las semillitas en 4 tierras diferentes", verse: "Lucas 8:15", thought: "Mi corazón es tierra buena para la Palabra." },
            { story: "El trigo y la maleza creciendo juntitos", verse: "Mateo 13:30", thought: "Dios sabrá separar lo bueno de lo malo." },
            { story: "El Buen Samaritano: Cuidando al hombre lastimado", verse: "Lucas 10:33", thought: "Amo, cuido y ayudo a cualquier persona que me necesite." },
            { story: "La Oveja Perdida: El pastor deja 99 para buscar a una", verse: "Lucas 15:4", thought: "Soy un tesoro, y Jesús me busca si me pierdo." },
            { story: "La señora que barrió toda su casa por una moneda", verse: "Lucas 15:9", thought: "Hay una fiesta en el cielo cuando pido perdón a Dios." },
            { story: "El Hijo Pródigo recibe un abrazo gigante de su padre", verse: "Lucas 15:20", thought: "Mi Padre celestial me perdona y me ama siempre." },
            { story: "El Gran Banquete: ¡Todos están invitados a la fiesta!", verse: "Lucas 14:23", thought: "Dios invita a todo el mundo a ser su amigo." },
            { story: "Los Talentos: Multiplicando mis regalitos y habilidades", verse: "Mateo 25:21", thought: "Uso lo que sé hacer para servir a Dios con alegría." },
            { story: "El Fariseo creído y el Publicano humilde orando", verse: "Lucas 18:13", thought: "Oro a Dios con un corazón humilde y sin creerme más que nadie." }
        ]
    },
    {
        month: "Octubre",
        icon: "✝️",
        theme: "El Amor más Grande",
        themeColor: "theme-red",
        bgUrl: "https://images.unsplash.com/photo-1549247605-6f903fbdd474?auto=format&fit=crop&w=500&q=80",
        lessons: [
            { story: "María derrama un perfume carísimo en los pies de Jesús", verse: "Juan 12:3", thought: "Le doy a Jesús lo mejor que tengo." },
            { story: "Entrada Triunfal con palmas: ¡Hosanna al Rey!", verse: "Mateo 21:9", thought: "Alabo a mi Rey Jesús con mucha emoción." },
            { story: "Jesús usa una toalla y lava los pies sucios de sus amigos", verse: "Juan 13:14", thought: "Aprendo a servir a mis hermanitos con humildad." },
            { story: "La Última Cena: Pan para recordar su cuerpo", verse: "Lucas 22:19", thought: "Recuerdo con muchísimo amor lo que Jesús hizo por mí." },
            { story: "Orando en el jardín de Getsemaní", verse: "Lucas 22:42", thought: "Hágase lo que tú quieres, Dios, y no lo que quiero yo." },
            { story: "Pedro se asusta y dice que no conoce a Jesús", verse: "Lucas 22:61", thought: "Jesús me perdona incluso cuando me equivoco." },
            { story: "La Cruz: Jesús muere porque me ama muchísimo", verse: "Juan 3:16", thought: "Nadie me ama tanto como Jesús." },
            { story: "¡Sorpresa, la tumba está vacía! La gran Resurrección", verse: "Mateo 28:6", thought: "¡Jesús está vivo hoy y vive en mi corazón!" },
            { story: "Caminando a Emaús: Jesús explica la Biblia", verse: "Lucas 24:32", thought: "Mi corazón arde de alegría al escuchar la Palabra." },
            { story: "Tomás duda, pero luego toca las heridas en las manos", verse: "Juan 20:29", thought: "Creo en Jesús con todo mi corazón aunque no lo vea con mis ojos." }
        ]
    },
    {
        month: "Noviembre",
        icon: "🔥",
        theme: "La Iglesia Nace",
        themeColor: "theme-orange",
        bgUrl: "https://images.unsplash.com/photo-1528150395403-992a693e26c8?auto=format&fit=crop&w=500&q=80",
        lessons: [
            { story: "Jesús sube al cielo escondido en una nube blanca", verse: "Hechos 1:9", thought: "Jesús fue a preparar un lugar hermoso para mí." },
            { story: "Pentecostés: Viento fuerte y llamitas de fuego", verse: "Hechos 1:8", thought: "El Espíritu Santo me da poder para hablar de Dios." },
            { story: "Pedro y Juan sanan a un hombre que no podía caminar", verse: "Hechos 3:6", thought: "Hay poder para sanar en el nombre de Jesús." },
            { story: "Ananías y Safira intentan decir una mentirita", verse: "Hechos 5:4", thought: "Debo decir siempre la verdad a Dios y a los demás." },
            { story: "Esteban: Un valiente perdonador viendo el cielo abierto", verse: "Hechos 7:60", thought: "Puedo perdonar incluso a los que se portan mal conmigo." },
            { story: "Felipe corre hacia un carruaje y explica la Biblia al etíope", verse: "Hechos 8:35", thought: "Me gusta hablar de Jesús a otras personas." },
            { story: "Saulo cae al piso al ver una luz del cielo", verse: "Hechos 9:4", thought: "Dios tiene poder para transformar a cualquier persona." },
            { story: "Dorcas se despierta: La señora que cosía ropa", verse: "Hechos 9:39", thought: "Uso mis talentos para ayudar a los más necesitados." },
            { story: "¡Las cadenas se caen! Pedro escapa de la cárcel con un ángel", verse: "Hechos 12:7", thought: "La oración de la iglesia es muy poderosa." },
            { story: "Pablo y Silas cantan muy fuerte en una prisión oscura", verse: "Hechos 16:25", thought: "Canto alabanzas a Dios aunque esté pasando por un problema." }
        ]
    },
    {
        month: "Diciembre",
        icon: "✨",
        theme: "¡Victoria Final!",
        themeColor: "theme-green",
        bgUrl: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=500&q=80",
        lessons: [
            { story: "El Fruto del Espíritu Parte 1 (Amor, Gozo, Paz, Paciencia)", verse: "Gálatas 5:22", thought: "El Espíritu de Dios me ayuda a portarme muy bien." },
            { story: "El Fruto del Espíritu Parte 2 (Benignidad, Bondad, Fe...)", verse: "Gálatas 5:23", thought: "Quiero que mi vida sea un arbolito con frutos deliciosos para Dios." },
            { story: "¡Me pongo la Armadura de Dios! (Casco y Escudo)", verse: "Efesios 6:11", thought: "Dios me protege como a un soldado valiente." },
            { story: "La Armadura de Dios (La Espada que es la Biblia)", verse: "Efesios 6:17", thought: "Leo mi Biblia para saber cómo defenderme de lo malo." },
            { story: "Juan ve una puerta abierta al cielo en la isla de Patmos", verse: "Apocalipsis 1:19", thought: "Dios conoce y tiene el control de todo el futuro." },
            { story: "Jesús toca 'Toc, toc' a la puertita del corazón", verse: "Apocalipsis 3:20", thought: "Todos los días le abro la puerta de mi vida a Jesús." },
            { story: "El Cielo Nuevo: ¡Increíbles calles de oro transparente!", verse: "Apocalipsis 21:21", thought: "El cielo es un lugar real, limpio y más hermoso que cualquier parque." },
            { story: "¡Adiós lágrimas! No habrá más llanto, ni raspaduras, ni dolor", verse: "Apocalipsis 21:4", thought: "En el cielo viviré siempre feliz con mi amigo Jesús." },
            { story: "El río de agua de vida y el árbol que da frutos cada mes", verse: "Apocalipsis 22:1", thought: "Cerca de Dios hay vida y sanidad perfecta." },
            { story: "¡Sí, ven Señor Jesús! La gran promesa final", verse: "Apocalipsis 22:20", thought: "Espero con el corazón lleno de alegría el regreso de mi Rey." }
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
    
    // Calcular índice de maestras para que rote continuo todo el año sin reiniciarse cada mes
    let currentTeacherIndex = 0;
    for(let i = 0; i < monthIndex; i++) {
        currentTeacherIndex += getClassDates(i).length;
    }

    modalHeader.innerHTML = `
        <h2>${data.month}</h2>
        <p>Tema: <strong>${data.theme}</strong></p>
    `;

    tableBody.innerHTML = '';

    dates.forEach((dateObj, i) => {
        // AQUÍ ESTÁ LA MAGIA HUMANIZADA:
        // Tomamos la lección directamente. Si el calendario un mes llegara a dar 11 días (muy raro),
        // en lugar de dar error o repetir mecánicamente, pone una actividad de repaso bonita.
        const lesson = data.lessons[i] || { 
            story: "🎉 Repaso Especial / Manualidad", 
            verse: "Salmos 119:105", 
            thought: "Me divierto mucho recordando lo que Dios me enseñó este mes." 
        };
        
        // Ciclo de maestras (este sí usa matemáticas porque son solo 5 parejas para todo el año)
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
