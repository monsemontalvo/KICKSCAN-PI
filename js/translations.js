export const translations = {
    es: {
        ui: {
            splash_subtitle: "Experiencia Mundial 2026",
            btn_start: "INICIAR ESCANEO",
            btn_manual: "MANUAL DE USUARIO",
            back_home: "← VOLVER AL INICIO",
            manual_title: "MANUAL DE USUARIO",
            manual_desc: "Sigue estos pasos para disfrutar al máximo de la experiencia KICKSCAN - Mundial 2026.",
            step1_title: "<span class='text-green-500'>1.</span> INICIAR ESCANEO",
            step1_desc: "Presiona 'INICIAR ESCANEO' en la pantalla principal y permite el acceso a la cámara de tu dispositivo web o móvil.",
            step2_title: "<span class='text-green-500'>2.</span> ESCANEAR LOGOS",
            step2_desc: "Encuentra los logos de los países participantes y apunta tu cámara hacia ellos para desplegar la experiencia en Realidad Aumentada.",
            step3_title: "<span class='text-green-500'>3.</span> INTERACTUAR CON AR",
            step3_desc: "Utiliza los botones flotantes a la derecha de la pantalla para hacer que el personaje 3D corra, patee o baile.",
            step4_title: "<span class='text-green-500'>4.</span> EXPLORAR DATOS Y TRIVIA",
            step4_desc: "Toca o desliza la pestaña inferior hacia arriba para consultar las estadísticas del equipo, datos curiosos y la Trivia.",
            step5_title: "<span class='text-green-500'>5.</span> ACERVO HISTÓRICO",
            step5_desc: "En el menú inferior, presiona el ícono de video para entrar a la galería y ver los mejores momentos. Puedes aplicar filtros creativos.",
            anim_dance: "Bailar",
            anim_kick: "Patear",
            anim_run: "Correr",
            btn_confetti: "CONFETI",
            scan_guide: "Apunta al logo del país",
            tab_stats: "Estadísticas",
            tab_facts: "Datos Curiosos",
            tab_trivia: "Trivia",
            stat_titles_label: "Títulos",
            stat_cups_label: "Mundiales",
            score_label: "PUNTAJE",
            question_label: "Pregunta",
            back_gallery: "← VOLVER",
            gallery_title: "ACERVO HISTÓRICO",
            watch_video: "Ver video",
            back_hl: "← GALERÍA",
            hl_edit: "Edición de Video",
            filter_normal: "Normal",
            filter_blur: "Desenfoque",
            filter_pixel: "Pixelado",
            filter_thermal: "Térmica",
            filter_color: "Color",
            filter_pastel: "Pastel",
            filter_intense: "Intenso"
        },
        countries: {
            mexico: {
                name: "MÉXICO", stats: { titulos: "1 Confed. / 11 Oro", copas: "17" },
                facts: [ "El Estadio Azteca es el único en el mundo que ha albergado dos finales de Copa del Mundo.", "México fue el primer país en organizar una Copa del Mundo dos veces.", "La selección mexicana es la que más veces ha participado en un Mundial sin haberlo ganado nunca." ],
                trivia: [ { q: "¿Máximo goleador histórico?", options: ["Hugo Sánchez", "Chicharito", "Borgetti"], correct: 1 }, { q: "¿Cuándo ganaron el Oro Olímpico?", options: ["2008", "2016", "2012"], correct: 2 }, { q: "¿Apodo de la selección?", options: ["El Tri", "Los Aztecas", "Los Verdes"], correct: 0 }, { q: "¿Primer jugador en 5 mundiales?", options: ["Rafa Márquez", "Tota Carbajal", "Ochoa"], correct: 1 }, { q: "¿Rival del 'No era penal'?", options: ["Argentina", "Holanda", "Alemania"], correct: 1 } ],
                videos: ["Holanda vs México, Brasil 2014", "Cuando Memo Ochoa abusa de sus reflejos", "El cacahuatazo", "Emos vs punks"]
            },
            colombia: {
                name: "COLOMBIA", stats: { titulos: "1 Copa América", copas: "6" },
                facts: [ "El único 'Gol Olímpico' en la historia de los mundiales lo anotó Marcos Coll.", "James Rodríguez ganó la Bota de Oro en Brasil 2014.", "La selección de 1994 llegó al Mundial con un invicto de 30 partidos." ],
                trivia: [ { q: "¿Quién es 'El Tigre'?", options: ["Falcao", "James", "Valderrama"], correct: 0 }, { q: "¿Bota de Oro Mundial 2014?", options: ["Cuadrado", "Bacca", "James Rodríguez"], correct: 2 }, { q: "¿Color principal de camiseta?", options: ["Rojo", "Azul", "Amarillo"], correct: 2 }, { q: "¿Ícono del pelo rizado?", options: ["Higuita", "Pibe Valderrama", "Asprilla"], correct: 1 }, { q: "¿Año de su Copa América?", options: ["2001", "2011", "1990"], correct: 0 } ],
                videos: ["7 goles de James Rodríguez", "Colombia vs Australia", "Goles de Colombia Mundial Brasil 2014", "Entrenamiento selección colombiana"]
            },
            irlanda: {
                name: "IRLANDA", stats: { titulos: "-", copas: "3" },
                facts: [ "En Italia 90, llegaron a cuartos sin ganar un solo partido.", "La afición 'Green Army' es famosa por su alegría.", "Jack Charlton es considerado un héroe nacional." ],
                trivia: [ { q: "¿Color de camiseta local?", options: ["Verde", "Blanca", "Naranja"], correct: 0 }, { q: "¿Leyenda del Man. United?", options: ["Robbie Keane", "Roy Keane", "Duff"], correct: 1 }, { q: "¿Símbolo en el escudo?", options: ["Arpa", "Trébol", "Cruz"], correct: 1 }, { q: "¿Apodo del equipo?", options: ["Green Army", "Boys in Green", "The Celts"], correct: 1 }, { q: "¿Mayor rival histórico?", options: ["Escocia", "Gales", "Inglaterra"], correct: 2 } ],
                videos: ["Estadios de Irlanda", "Fans irlandeses", "Lo mejor de los fans irlandeses Euro 2016", "Curiosidades de Irlanda"]
            },
            espana: {
                name: "ESPAÑA", stats: { titulos: "1 Mundial / 4 Euros", copas: "16" },
                facts: [ "Única selección en ganar tres torneos grandes consecutivos.", "Campeones 2010 perdiendo el primer partido.", "El estilo 'Tiki-Taka' revolucionó el fútbol." ],
                trivia: [ { q: "¿Autor del gol final 2010?", options: ["Torres", "Villa", "Iniesta"], correct: 2 }, { q: "¿Apodo de la selección?", options: ["La Furia", "La Roja", "Los Toros"], correct: 1 }, { q: "¿Capitán que levantó la copa?", options: ["Casillas", "Puyol", "Xavi"], correct: 0 }, { q: "¿Estilo de juego famoso?", options: ["Catenaccio", "Tiki-Taka", "Jogo Bonito"], correct: 1 }, { q: "¿Cuántas Eurocopas tienen?", options: ["2", "3", "4"], correct: 2 } ],
                videos: ["España vs Holanda, final 2010", "Los mejores goles de España", "Gol de Iniesta vs Holanda", "Todo sobre España"]
            },
            corea: {
                name: "COREA DEL SUR", stats: { titulos: "2 Copas Asia", copas: "11" },
                facts: [ "Equipo asiático con más participaciones consecutivas.", "Llegaron a semifinales en 2002.", "Aficionados 'Red Devils' famosos por cánticos." ],
                trivia: [ { q: "¿Estrella del Tottenham?", options: ["Park Ji-sung", "Son Heung-min", "Kim Min-jae"], correct: 1 }, { q: "¿Apodo de los fans?", options: ["Red Devils", "Tigers", "Warriors"], correct: 0 }, { q: "¿Año del mundial Corea-Japón?", options: ["1998", "2006", "2002"], correct: 2 }, { q: "¿Color uniforme principal?", options: ["Blanco", "Rojo", "Azul"], correct: 1 }, { q: "¿A quién eliminaron en 2018?", options: ["Brasil", "Alemania", "México"], correct: 1 } ],
                videos: ["Evolución del uniforme", "Corea vs Bolivia", "Corea hace historia en 2022", "México vs Corea"]
            },
            japon: {
                name: "JAPÓN", stats: { titulos: "4 Copas Asia", copas: "7" },
                facts: [ "Conocidos como 'Samurai Blue'.", "Inspirados en 'Súper Campeones'.", "Famosos por limpiar vestidores y estadios." ],
                trivia: [ { q: "¿Apodo de la selección?", options: ["Samurai Blue", "Rising Sun", "Ninjas"], correct: 0 }, { q: "¿Anime de fútbol famoso?", options: ["Dragon Ball", "Súper Campeones", "Naruto"], correct: 1 }, { q: "¿Mayor rival asiático?", options: ["China", "Corea del Sur", "Australia"], correct: 1 }, { q: "¿Han ganado un Mundial?", options: ["Sí", "No", "Casi"], correct: 1 }, { q: "¿Color de camiseta?", options: ["Roja", "Blanca", "Azul"], correct: 2 } ],
                videos: ["Japón vs Alemania 2022", "Participaciones en el Mundial", "Evolución del anime", "Japón vs Croacia 2022"]
            },
            uruguay: {
                name: "URUGUAY", stats: { titulos: "2 Mundiales / 15 Copas", copas: "14" },
                facts: [ "Primeros campeones del mundo en 1930.", "Protagonistas del 'Maracanazo' en 1950.", "Conocidos por la 'Garra Charrúa'." ],
                trivia: [ { q: "¿Apodo de la selección?", options: ["La Celeste", "Los Andes", "El Sol"], correct: 0 }, { q: "¿Máximo goleador histórico?", options: ["Cavani", "Forlán", "Luis Suárez"], correct: 2 }, { q: "¿A quién vencieron en el Maracanazo?", options: ["Argentina", "Brasil", "Italia"], correct: 1 }, { q: "¿Cuántos Mundiales ganaron?", options: ["1", "2", "3"], correct: 1 }, { q: "¿Qué animal hay en su escudo?", options: ["Un sol", "No hay escudo", "Un león"], correct: 1 } ],
                videos: ["Uruguay vs Rep. Dominicana", "Uruguay a Qatar 2022", "Uruguay vs Ghana Highlights", "Uruguay vs Ghana Penalty"]
            },
            tunez: {
                name: "TÚNEZ", stats: { titulos: "1 Copa Africana", copas: "6" },
                facts: [ "Primera selección africana en ganar un partido en un Mundial (1978).", "Han clasificado a 6 Copas del Mundo.", "Su escudo lleva un águila." ],
                trivia: [ { q: "¿Apodo de la selección?", options: ["Leones", "Faraones", "Águilas"], correct: 2 }, { q: "¿Año Copa Africana?", options: ["2004", "1998", "2010"], correct: 0 }, { q: "¿Color de uniforme?", options: ["Verde", "Blanco/Rojo", "Amarillo"], correct: 1 }, { q: "¿Continente?", options: ["Asia", "África", "Europa"], correct: 1 }, { q: "¿Último mundial jugado?", options: ["2014", "2018", "2022"], correct: 2 } ],
                videos: ["Argentina vs Túnez 1996", "Túnez vs Francia 2022", "Bélgica vs Túnez 2018", "México vs Túnez 1978"]
            },
            sudafrica: {
                name: "SUDÁFRICA", stats: { titulos: "1 Copa Africana", copas: "3" },
                facts: [ "Única nación africana en organizar un Mundial.", "El primer gol de 2010 lo anotó Tshabalala.", "Ganaron la Copa Africana en 1996." ],
                trivia: [ { q: "¿Apodo?", options: ["Bafana Bafana", "Súper Águilas", "Estrellas"], correct: 0 }, { q: "¿Mundial organizado?", options: ["2006", "2010", "2014"], correct: 1 }, { q: "¿Primer gol en 2010?", options: ["Pienaar", "McCarthy", "Tshabalala"], correct: 2 }, { q: "¿Mascota 2010?", options: ["Fuleco", "Zakumi", "Pique"], correct: 1 }, { q: "¿Instrumento famoso?", options: ["Tambor", "Vuvuzela", "Maraca"], correct: 1 } ],
                videos: ["Vuvuzela sound", "Macarena goal celebration", "Pepsi commercial 2010", "Sudáfrica 2010 highlights"]
            },
            uzbekistan: {
                name: "UZBEKISTÁN", stats: { titulos: "1 Oro Asiático", copas: "0" },
                facts: [ "Oro en Juegos Asiáticos 1994.", "Potencia emergente juvenil centroasiática.", "Pertenecen a la AFC." ],
                trivia: [ { q: "¿Apodo?", options: ["Lobos Blancos", "Dragones", "Tigres"], correct: 0 }, { q: "¿Han jugado un Mundial?", options: ["Sí", "No", "Una vez"], correct: 1 }, { q: "¿Confederación?", options: ["UEFA", "CAF", "AFC"], correct: 2 }, { q: "¿Uniforme local?", options: ["Azul/Blanco", "Rojo", "Verde"], correct: 0 }, { q: "¿Año Oro Asiático?", options: ["1994", "2002", "2010"], correct: 0 } ],
                videos: ["Uzbekistan 1st World Cup Qual.", "Qatar highlights", "Uzbekistan vs Uruguay", "Uzbekistan vs Egipto"]
            },
            polonia: {
                name: "POLONIA", stats: { titulos: "1 Oro Olímpico", copas: "9" },
                facts: [ "Tercer lugar en Mundiales 1974 y 1982.", "Lewandowski es su máximo goleador.", "Oro olímpico en Múnich 1972." ],
                trivia: [ { q: "¿Máximo goleador?", options: ["Milik", "Boniek", "Lewandowski"], correct: 2 }, { q: "¿Mejor puesto Mundial?", options: ["Subcampeón", "Tercero", "Cuartos"], correct: 1 }, { q: "¿Apodo?", options: ["Las Águilas", "Los Osos", "Los Leones"], correct: 0 }, { q: "¿Color uniforme?", options: ["Azul", "Blanco/Rojo", "Verde"], correct: 1 }, { q: "¿Año Oro Olímpico?", options: ["1972", "1980", "1996"], correct: 0 } ],
                videos: ["Japón vs Polonia", "Lewandowski vs Arabia", "México vs Polonia", "Selección de Polonia"]
            },
            jamaica: {
                name: "JAMAICA", stats: { titulos: "6 Copas Caribe", copas: "1" },
                facts: [ "Su único Mundial fue Francia 1998.", "Subcampeones de Copa Oro dos veces.", "Fuerte rivalidad con USA y México." ],
                trivia: [ { q: "¿Apodo?", options: ["Reggae Boyz", "Calypso", "Caribeños"], correct: 0 }, { q: "¿Único Mundial?", options: ["1994", "1998", "2002"], correct: 1 }, { q: "¿Confederación?", options: ["CONMEBOL", "UEFA", "CONCACAF"], correct: 2 }, { q: "¿Colores camiseta?", options: ["Amarillo/Verde/Negro", "Rojo/Blanco", "Azul"], correct: 0 }, { q: "¿Mejor puesto Copa Oro?", options: ["Tercero", "Subcampeón", "Campeón"], correct: 1 } ],
                videos: ["Jamaica vs Bermudas", "Jamaica vs Venezuela 2024", "Jamaica vs México 2017", "Jamaica vs Curacao"]
            }
        }
    },
    en: {
        ui: {
            splash_subtitle: "World Cup 2026 Experience",
            btn_start: "START SCAN",
            btn_manual: "USER MANUAL",
            back_home: "← BACK TO HOME",
            manual_title: "USER MANUAL",
            manual_desc: "Follow these steps to fully enjoy the KICKSCAN - World Cup 2026 experience.",
            step1_title: "<span class='text-green-500'>1.</span> START SCAN",
            step1_desc: "Press 'START SCAN' on the main screen and allow camera access on your device.",
            step2_title: "<span class='text-green-500'>2.</span> SCAN LOGOS",
            step2_desc: "Find the participating countries' logos and point your camera at them to deploy the AR experience.",
            step3_title: "<span class='text-green-500'>3.</span> INTERACT IN AR",
            step3_desc: "Use the floating buttons on the right to make the 3D character run, kick, or dance.",
            step4_title: "<span class='text-green-500'>4.</span> EXPLORE FACTS & TRIVIA",
            step4_desc: "Tap or swipe up the bottom tab to check team stats, fun facts, and play Trivia.",
            step5_title: "<span class='text-green-500'>5.</span> HISTORICAL ARCHIVE",
            step5_desc: "In the bottom menu, press the video icon to enter the gallery. You can apply creative video filters.",
            anim_dance: "Dance",
            anim_kick: "Kick",
            anim_run: "Run",
            btn_confetti: "CONFETTI",
            scan_guide: "Point at the country logo",
            tab_stats: "Stats",
            tab_facts: "Fun Facts",
            tab_trivia: "Trivia",
            stat_titles_label: "Titles",
            stat_cups_label: "World Cups",
            score_label: "SCORE",
            question_label: "Question",
            back_gallery: "← BACK",
            gallery_title: "HISTORICAL ARCHIVE",
            watch_video: "Watch video",
            back_hl: "← GALLERY",
            hl_edit: "Video Editing",
            filter_normal: "Normal",
            filter_blur: "Blur",
            filter_pixel: "Pixelate",
            filter_thermal: "Thermal",
            filter_color: "Color",
            filter_pastel: "Pastel",
            filter_intense: "Intense"
        },
        countries: {
            mexico: {
                name: "MEXICO", stats: { titulos: "1 Confed. / 11 Gold", copas: "17" },
                facts: [ "Estadio Azteca is the only stadium in the world to host two World Cup finals.", "Mexico was the first country to host the World Cup twice.", "The Mexican team has participated in the most World Cups without ever winning it." ],
                trivia: [ { q: "All-time top scorer?", options: ["Hugo Sánchez", "Chicharito", "Borgetti"], correct: 1 }, { q: "When did they win Olympic Gold?", options: ["2008", "2016", "2012"], correct: 2 }, { q: "Team's nickname?", options: ["El Tri", "The Aztecs", "The Greens"], correct: 0 }, { q: "First player in 5 World Cups?", options: ["Rafa Márquez", "Tota Carbajal", "Ochoa"], correct: 1 }, { q: "'No era penal' rival?", options: ["Argentina", "Holland", "Germany"], correct: 1 } ],
                videos: ["Holland vs Mexico, Brazil 2014", "When Memo Ochoa abuses his reflexes", "The peanut hit", "Emos vs punks"]
            },
            colombia: {
                name: "COLOMBIA", stats: { titulos: "1 Copa America", copas: "6" },
                facts: [ "The only 'Olympic Goal' in World Cup history was scored by Marcos Coll.", "James Rodriguez won the Golden Boot in Brazil 2014.", "The 1994 team arrived at the World Cup with a 30-game undefeated streak." ],
                trivia: [ { q: "Who is 'El Tigre'?", options: ["Falcao", "James", "Valderrama"], correct: 0 }, { q: "2014 Golden Boot?", options: ["Cuadrado", "Bacca", "James Rodriguez"], correct: 2 }, { q: "Main jersey color?", options: ["Red", "Blue", "Yellow"], correct: 2 }, { q: "Curly hair icon?", options: ["Higuita", "Pibe Valderrama", "Asprilla"], correct: 1 }, { q: "Copa America year?", options: ["2001", "2011", "1990"], correct: 0 } ],
                videos: ["7 goals by James Rodriguez", "Colombia vs Australia", "Colombia Goals 2014", "Colombian team training"]
            },
            irlanda: {
                name: "IRELAND", stats: { titulos: "-", copas: "3" },
                facts: [ "In Italy 90, they reached the quarter-finals without winning a single match.", "The 'Green Army' fans are famous for their joy.", "Jack Charlton is considered a national hero." ],
                trivia: [ { q: "Home jersey color?", options: ["Green", "White", "Orange"], correct: 0 }, { q: "Man. United legend?", options: ["Robbie Keane", "Roy Keane", "Duff"], correct: 1 }, { q: "Symbol on the shield?", options: ["Harp", "Shamrock", "Cross"], correct: 1 }, { q: "Team nickname?", options: ["Green Army", "Boys in Green", "The Celts"], correct: 1 }, { q: "Biggest historical rival?", options: ["Scotland", "Wales", "England"], correct: 2 } ],
                videos: ["Stadiums of Ireland", "Irish fans", "Best of Irish fans Euro 2016", "Curiosities of Ireland"]
            },
            espana: {
                name: "SPAIN", stats: { titulos: "1 World / 4 Euros", copas: "16" },
                facts: [ "Only team to win three consecutive major tournaments.", "2010 Champions despite losing the first match.", "The 'Tiki-Taka' style revolutionized football." ],
                trivia: [ { q: "2010 final goalscorer?", options: ["Torres", "Villa", "Iniesta"], correct: 2 }, { q: "Team nickname?", options: ["La Furia", "La Roja", "The Bulls"], correct: 1 }, { q: "Captain who lifted the cup?", options: ["Casillas", "Puyol", "Xavi"], correct: 0 }, { q: "Famous playstyle?", options: ["Catenaccio", "Tiki-Taka", "Jogo Bonito"], correct: 1 }, { q: "How many Euro Cups?", options: ["2", "3", "4"], correct: 2 } ],
                videos: ["Spain vs Holland, 2010 final", "Best goals of Spain", "Iniesta's goal vs Holland", "All about Spain"]
            },
            corea: {
                name: "SOUTH KOREA", stats: { titulos: "2 Asian Cups", copas: "11" },
                facts: [ "Asian team with the most consecutive appearances.", "Reached the semi-finals in 2002.", "Fans 'Red Devils' famous for massive chants." ],
                trivia: [ { q: "Tottenham star?", options: ["Park Ji-sung", "Son Heung-min", "Kim Min-jae"], correct: 1 }, { q: "Fans nickname?", options: ["Red Devils", "Tigers", "Warriors"], correct: 0 }, { q: "Korea-Japan World Cup year?", options: ["1998", "2006", "2002"], correct: 2 }, { q: "Main uniform color?", options: ["White", "Red", "Blue"], correct: 1 }, { q: "Who did they eliminate in 2018?", options: ["Brazil", "Germany", "Mexico"], correct: 1 } ],
                videos: ["Uniform evolution", "Korea vs Bolivia", "Korea makes history in 2022", "Mexico vs Korea"]
            },
            japon: {
                name: "JAPAN", stats: { titulos: "4 Asian Cups", copas: "7" },
                facts: [ "Known as 'Samurai Blue'.", "Inspired by 'Captain Tsubasa'.", "Famous for cleaning locker rooms and stadiums." ],
                trivia: [ { q: "Team nickname?", options: ["Samurai Blue", "Rising Sun", "Ninjas"], correct: 0 }, { q: "Famous football anime?", options: ["Dragon Ball", "Captain Tsubasa", "Naruto"], correct: 1 }, { q: "Biggest Asian rival?", options: ["China", "South Korea", "Australia"], correct: 1 }, { q: "Have they won a World Cup?", options: ["Yes", "No", "Almost"], correct: 1 }, { q: "Jersey color?", options: ["Red", "White", "Blue"], correct: 2 } ],
                videos: ["Japan vs Germany 2022", "World Cup appearances", "Anime evolution", "Japan vs Croatia 2022"]
            },
            uruguay: {
                name: "URUGUAY", stats: { titulos: "2 World Cups / 15 Copas", copas: "14" },
                facts: [ "First world champions in 1930.", "Protagonists of the 'Maracanazo' in 1950.", "Known for the 'Garra Charrúa'." ],
                trivia: [ { q: "Team nickname?", options: ["La Celeste", "Los Andes", "The Sun"], correct: 0 }, { q: "All-time top scorer?", options: ["Cavani", "Forlán", "Luis Suárez"], correct: 2 }, { q: "Who did they beat in Maracanazo?", options: ["Argentina", "Brazil", "Italy"], correct: 1 }, { q: "How many World Cups won?", options: ["1", "2", "3"], correct: 1 }, { q: "Animal on their shield?", options: ["A sun", "No shield", "A lion"], correct: 1 } ],
                videos: ["Uruguay vs Dom. Republic", "Uruguay to Qatar 2022", "Uruguay vs Ghana Highlights", "Uruguay vs Ghana Penalty"]
            },
            tunez: {
                name: "TUNISIA", stats: { titulos: "1 African Cup", copas: "6" },
                facts: [ "First African team to win a World Cup match (1978).", "Have qualified for 6 World Cups.", "Their shield features an eagle." ],
                trivia: [ { q: "Team nickname?", options: ["Lions", "Pharaohs", "Eagles"], correct: 2 }, { q: "African Cup year?", options: ["2004", "1998", "2010"], correct: 0 }, { q: "Uniform color?", options: ["Green", "White/Red", "Yellow"], correct: 1 }, { q: "Continent?", options: ["Asia", "Africa", "Europe"], correct: 1 }, { q: "Last World Cup played?", options: ["2014", "2018", "2022"], correct: 2 } ],
                videos: ["Argentina vs Tunisia 1996", "Tunisia vs France 2022", "Belgium vs Tunisia 2018", "Mexico vs Tunisia 1978"]
            },
            sudafrica: {
                name: "SOUTH AFRICA", stats: { titulos: "1 African Cup", copas: "3" },
                facts: [ "Only African nation to host a World Cup.", "The first 2010 goal was scored by Tshabalala.", "Won the African Cup in 1996 as hosts." ],
                trivia: [ { q: "Nickname?", options: ["Bafana Bafana", "Super Eagles", "Stars"], correct: 0 }, { q: "World Cup hosted?", options: ["2006", "2010", "2014"], correct: 1 }, { q: "First goal in 2010?", options: ["Pienaar", "McCarthy", "Tshabalala"], correct: 2 }, { q: "2010 Mascot?", options: ["Fuleco", "Zakumi", "Pique"], correct: 1 }, { q: "Famous instrument?", options: ["Drum", "Vuvuzela", "Maraca"], correct: 1 } ],
                videos: ["Vuvuzela sound", "Macarena goal celebration", "Pepsi commercial 2010", "South Africa 2010 highlights"]
            },
            uzbekistan: {
                name: "UZBEKISTAN", stats: { titulos: "1 Asian Gold", copas: "0" },
                facts: [ "Gold in 1994 Asian Games.", "Emerging youth power in Central Asia.", "They belong to the AFC." ],
                trivia: [ { q: "Nickname?", options: ["White Wolves", "Dragons", "Tigers"], correct: 0 }, { q: "Played a World Cup?", options: ["Yes", "No", "Once"], correct: 1 }, { q: "Confederation?", options: ["UEFA", "CAF", "AFC"], correct: 2 }, { q: "Home uniform?", options: ["Blue/White", "Red", "Green"], correct: 0 }, { q: "Asian Gold year?", options: ["1994", "2002", "2010"], correct: 0 } ],
                videos: ["Uzbekistan 1st World Cup Qual.", "Qatar highlights", "Uzbekistan vs Uruguay", "Uzbekistan vs Egypt"]
            },
            polonia: {
                name: "POLAND", stats: { titulos: "1 Olympic Gold", copas: "9" },
                facts: [ "Third place in 1974 and 1982 World Cups.", "Lewandowski is their top scorer.", "Olympic gold in Munich 1972." ],
                trivia: [ { q: "Top scorer?", options: ["Milik", "Boniek", "Lewandowski"], correct: 2 }, { q: "Best World Cup rank?", options: ["Runner-up", "Third", "Quarter-finals"], correct: 1 }, { q: "Nickname?", options: ["The Eagles", "The Bears", "The Lions"], correct: 0 }, { q: "Uniform color?", options: ["Blue", "White/Red", "Green"], correct: 1 }, { q: "Olympic Gold year?", options: ["1972", "1980", "1996"], correct: 0 } ],
                videos: ["Japan vs Poland", "Lewandowski vs Arabia", "Mexico vs Poland", "Polish National Team"]
            },
            jamaica: {
                name: "JAMAICA", stats: { titulos: "6 Caribbean Cups", copas: "1" },
                facts: [ "Their only World Cup was France 1998.", "Gold Cup runners-up twice.", "Strong rivalry with USA and Mexico." ],
                trivia: [ { q: "Nickname?", options: ["Reggae Boyz", "Calypso", "Caribbeans"], correct: 0 }, { q: "Only World Cup?", options: ["1994", "1998", "2002"], correct: 1 }, { q: "Confederation?", options: ["CONMEBOL", "UEFA", "CONCACAF"], correct: 2 }, { q: "Jersey colors?", options: ["Yellow/Green/Black", "Red/White", "Blue"], correct: 0 }, { q: "Best Gold Cup rank?", options: ["Third", "Runner-up", "Champion"], correct: 1 } ],
                videos: ["Jamaica vs Bermuda", "Jamaica vs Venezuela 2024", "Jamaica vs Mexico 2017", "Jamaica vs Curacao"]
            }
        }
    }
};