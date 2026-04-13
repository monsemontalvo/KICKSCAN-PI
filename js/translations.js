export const translations = {
    es: {
        ui: {
            splash_subtitle: "Experiencia Mundial 2026", btn_start: "INICIAR ESCANEO", btn_manual: "MANUAL DE USUARIO", back_home: "← VOLVER AL INICIO", manual_title: "MANUAL DE USUARIO", manual_desc: "Sigue estos pasos para disfrutar al máximo de la experiencia KICKSCAN - Mundial 2026.", step1_title: "<span class='text-green-500'>1.</span> INICIAR ESCANEO", step1_desc: "Presiona 'INICIAR ESCANEO' en la pantalla principal y permite el acceso a la cámara de tu dispositivo web o móvil.", step2_title: "<span class='text-green-500'>2.</span> ESCANEAR LOGOS", step2_desc: "Encuentra los logos de los países participantes y apunta tu cámara hacia ellos para desplegar la experiencia en Realidad Aumentada.", step3_title: "<span class='text-green-500'>3.</span> INTERACTUAR CON AR", step3_desc: "Utiliza los botones flotantes a la derecha de la pantalla para hacer que el personaje 3D corra, patee o baile.", step4_title: "<span class='text-green-500'>4.</span> EXPLORAR DATOS Y TRIVIA", step4_desc: "Toca o desliza la pestaña inferior hacia arriba para consultar las estadísticas del equipo, datos curiosos y la Trivia.", step5_title: "<span class='text-green-500'>5.</span> ACERVO HISTÓRICO", step5_desc: "En el menú inferior, presiona el ícono de video para entrar a la galería y ver los mejores momentos. Puedes aplicar filtros creativos.", anim_dance: "Bailar", anim_kick: "Patear", anim_run: "Correr", btn_confetti: "CONFETI", scan_guide: "Apunta al logo del país", tab_stats: "Estadísticas", tab_facts: "Datos Curiosos", tab_trivia: "Trivia", stat_titles_label: "Títulos", stat_cups_label: "Mundiales", score_label: "PUNTAJE", question_label: "Pregunta", back_gallery: "← VOLVER", gallery_title: "ACERVO HISTÓRICO", watch_video: "Ver video", back_hl: "← GALERÍA", hl_edit: "Edición de Video", filter_normal: "Normal", filter_blur: "Desenfoque", filter_pixel: "Pixelado", filter_thermal: "Térmica", filter_color: "Color", filter_pastel: "Pastel", filter_intense: "Intenso"
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
            splash_subtitle: "World Cup 2026 Experience", btn_start: "START SCAN", btn_manual: "USER MANUAL", back_home: "← BACK TO HOME", manual_title: "USER MANUAL", manual_desc: "Follow these steps to fully enjoy the KICKSCAN - World Cup 2026 experience.", step1_title: "<span class='text-green-500'>1.</span> START SCAN", step1_desc: "Press 'START SCAN' on the main screen and allow camera access on your device.", step2_title: "<span class='text-green-500'>2.</span> SCAN LOGOS", step2_desc: "Find the participating countries' logos and point your camera at them to deploy the AR experience.", step3_title: "<span class='text-green-500'>3.</span> INTERACT IN AR", step3_desc: "Use the floating buttons on the right to make the 3D character run, kick, or dance.", step4_title: "<span class='text-green-500'>4.</span> EXPLORE FACTS & TRIVIA", step4_desc: "Tap or swipe up the bottom tab to check team stats, fun facts, and play Trivia.", step5_title: "<span class='text-green-500'>5.</span> HISTORICAL ARCHIVE", step5_desc: "In the bottom menu, press the video icon to enter the gallery. You can apply creative video filters.", anim_dance: "Dance", anim_kick: "Kick", anim_run: "Run", btn_confetti: "CONFETTI", scan_guide: "Point at the country logo", tab_stats: "Stats", tab_facts: "Fun Facts", tab_trivia: "Trivia", stat_titles_label: "Titles", stat_cups_label: "World Cups", score_label: "SCORE", question_label: "Question", back_gallery: "← BACK", gallery_title: "HISTORICAL ARCHIVE", watch_video: "Watch video", back_hl: "← GALLERY", hl_edit: "Video Editing", filter_normal: "Normal", filter_blur: "Blur", filter_pixel: "Pixelate", filter_thermal: "Thermal", filter_color: "Color", filter_pastel: "Pastel", filter_intense: "Intense"
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
    },
    fr: {
        ui: {
            splash_subtitle: "Expérience Mondial 2026", btn_start: "COMMENCER LE SCAN", btn_manual: "MANUEL D'UTILISATION", back_home: "← RETOUR", manual_title: "MANUEL D'UTILISATION", manual_desc: "Suivez ces étapes pour profiter de l'expérience KICKSCAN - Mondial 2026.", step1_title: "<span class='text-green-500'>1.</span> COMMENCER LE SCAN", step1_desc: "Appuyez sur 'COMMENCER LE SCAN' sur l'écran principal et autorisez l'accès à la caméra.", step2_title: "<span class='text-green-500'>2.</span> SCANNER LES LOGOS", step2_desc: "Trouvez les logos des pays participants et pointez votre caméra vers eux.", step3_title: "<span class='text-green-500'>3.</span> INTERAGIR EN AR", step3_desc: "Utilisez les boutons flottants à droite pour faire courir, tirer ou danser le personnage.", step4_title: "<span class='text-green-500'>4.</span> EXPLORER", step4_desc: "Touchez ou glissez l'onglet inférieur vers le haut pour voir les statistiques et jouer au Trivia.", step5_title: "<span class='text-green-500'>5.</span> ARCHIVES", step5_desc: "Dans le menu inférieur, appuyez sur l'icône vidéo pour entrer dans la galerie.", anim_dance: "Danser", anim_kick: "Tirer", anim_run: "Courir", btn_confetti: "CONFETTIS", scan_guide: "Pointez le logo du pays", tab_stats: "Statistiques", tab_facts: "Faits Amusants", tab_trivia: "Trivia", stat_titles_label: "Titres", stat_cups_label: "Coupes", score_label: "SCORE", question_label: "Question", back_gallery: "← RETOUR", gallery_title: "ARCHIVES HISTORIQUES", watch_video: "Voir vidéo", back_hl: "← GALERIE", hl_edit: "Édition Vidéo", filter_normal: "Normal", filter_blur: "Flou", filter_pixel: "Pixélisé", filter_thermal: "Thermique", filter_color: "Couleur", filter_pastel: "Pastel", filter_intense: "Intense"
        },
        countries: {
            mexico: {
                name: "MEXIQUE", stats: { titulos: "1 Conféd. / 11 Or", copas: "17" },
                facts: [ "L'Estadio Azteca est le seul au monde à avoir accueilli deux finales de Coupe du Monde.", "Le Mexique a été le premier pays à organiser la Coupe du Monde deux fois.", "L'équipe mexicaine a participé au plus grand nombre de Coupes du Monde sans jamais la gagner." ],
                trivia: [ { q: "Meilleur buteur historique?", options: ["Hugo Sánchez", "Chicharito", "Borgetti"], correct: 1 }, { q: "Quand ont-ils gagné l'Or Olympique?", options: ["2008", "2016", "2012"], correct: 2 }, { q: "Surnom de l'équipe?", options: ["El Tri", "Les Aztèques", "Les Verts"], correct: 0 }, { q: "Premier joueur à 5 mondiaux?", options: ["Rafa Márquez", "Tota Carbajal", "Ochoa"], correct: 1 }, { q: "Rival du 'No era penal'?", options: ["Argentine", "Pays-Bas", "Allemagne"], correct: 1 } ],
                videos: ["Pays-Bas vs Mexique, Brésil 2014", "Quand Memo Ochoa abuse de ses réflexes", "Le coup de cacahuète", "Emos vs punks"]
            },
            colombia: {
                name: "COLOMBIE", stats: { titulos: "1 Copa América", copas: "6" },
                facts: [ "Le seul 'But Olympique' de l'histoire de la Coupe du Monde a été marqué par Marcos Coll.", "James Rodriguez a remporté le Soulier d'Or en 2014.", "L'équipe de 1994 est arrivée avec une série de 30 matchs sans défaite." ],
                trivia: [ { q: "Qui est 'El Tigre'?", options: ["Falcao", "James", "Valderrama"], correct: 0 }, { q: "Soulier d'Or 2014?", options: ["Cuadrado", "Bacca", "James Rodríguez"], correct: 2 }, { q: "Couleur principale du maillot?", options: ["Rouge", "Bleu", "Jaune"], correct: 2 }, { q: "Icône aux cheveux bouclés?", options: ["Higuita", "Pibe Valderrama", "Asprilla"], correct: 1 }, { q: "Année de leur Copa América?", options: ["2001", "2011", "1990"], correct: 0 } ],
                videos: ["7 buts de James Rodriguez", "Colombie vs Australie", "Buts de Colombie Mondial 2014", "Entraînement de l'équipe colombienne"]
            },
            irlanda: {
                name: "IRLANDE", stats: { titulos: "-", copas: "3" },
                facts: [ "En Italie 90, ils ont atteint les quarts de finale sans gagner un seul match.", "Les supporters de la 'Green Army' sont célèbres pour leur joie.", "Jack Charlton est considéré comme un héros national." ],
                trivia: [ { q: "Couleur du maillot local?", options: ["Vert", "Blanc", "Orange"], correct: 0 }, { q: "Légende de Man. United?", options: ["Robbie Keane", "Roy Keane", "Duff"], correct: 1 }, { q: "Symbole sur l'écusson?", options: ["Harpe", "Trèfle", "Croix"], correct: 1 }, { q: "Surnom de l'équipe?", options: ["Green Army", "Boys in Green", "Les Celtes"], correct: 1 }, { q: "Plus grand rival historique?", options: ["Écosse", "Pays de Galles", "Angleterre"], correct: 2 } ],
                videos: ["Stades d'Irlande", "Fans irlandais", "Le meilleur des fans irlandais Euro 2016", "Curiosités de l'Irlande"]
            },
            espana: {
                name: "ESPAGNE", stats: { titulos: "1 Mondial / 4 Euros", copas: "16" },
                facts: [ "Seule équipe à remporter trois tournois majeurs consécutifs.", "Champions 2010 malgré la perte du premier match.", "Le style 'Tiki-Taka' a révolutionné le football." ],
                trivia: [ { q: "Auteur du but final 2010?", options: ["Torres", "Villa", "Iniesta"], correct: 2 }, { q: "Surnom de l'équipe?", options: ["La Furia", "La Roja", "Les Taureaux"], correct: 1 }, { q: "Capitaine qui a soulevé la coupe?", options: ["Casillas", "Puyol", "Xavi"], correct: 0 }, { q: "Style de jeu célèbre?", options: ["Catenaccio", "Tiki-Taka", "Jogo Bonito"], correct: 1 }, { q: "Combien d'Euros ont-ils?", options: ["2", "3", "4"], correct: 2 } ],
                videos: ["Espagne vs Pays-Bas, finale 2010", "Les meilleurs buts d'Espagne", "But d'Iniesta vs Pays-Bas", "Tout sur l'Espagne"]
            },
            corea: {
                name: "CORÉE DU SUD", stats: { titulos: "2 Coupes d'Asie", copas: "11" },
                facts: [ "Équipe asiatique avec le plus de participations consécutives.", "Ils ont atteint les demi-finales en 2002.", "Supporters 'Red Devils' célèbres pour leurs chants." ],
                trivia: [ { q: "Star de Tottenham?", options: ["Park Ji-sung", "Son Heung-min", "Kim Min-jae"], correct: 1 }, { q: "Surnom des fans?", options: ["Red Devils", "Tigers", "Warriors"], correct: 0 }, { q: "Année du mondial Corée-Japon?", options: ["1998", "2006", "2002"], correct: 2 }, { q: "Couleur de l'uniforme principal?", options: ["Blanc", "Rouge", "Bleu"], correct: 1 }, { q: "Qui ont-ils éliminé en 2018?", options: ["Brésil", "Allemagne", "Mexique"], correct: 1 } ],
                videos: ["Évolution de l'uniforme", "Corée vs Bolivie", "La Corée fait l'histoire en 2022", "Mexique vs Corée"]
            },
            japon: {
                name: "JAPON", stats: { titulos: "4 Coupes d'Asie", copas: "7" },
                facts: [ "Connus sous le nom de 'Samurai Blue'.", "Inspirés par 'Olive et Tom' (Captain Tsubasa).", "Célèbres pour nettoyer les vestiaires et les stades." ],
                trivia: [ { q: "Surnom de l'équipe?", options: ["Samurai Blue", "Rising Sun", "Ninjas"], correct: 0 }, { q: "Anime de football célèbre?", options: ["Dragon Ball", "Olive et Tom", "Naruto"], correct: 1 }, { q: "Plus grand rival asiatique?", options: ["Chine", "Corée du Sud", "Australie"], correct: 1 }, { q: "Ont-ils gagné un Mondial?", options: ["Oui", "Non", "Presque"], correct: 1 }, { q: "Couleur du maillot?", options: ["Rouge", "Blanc", "Bleu"], correct: 2 } ],
                videos: ["Japon vs Allemagne 2022", "Apparitions en Coupe du Monde", "Évolution de l'anime", "Japon vs Croatie 2022"]
            },
            uruguay: {
                name: "URUGUAY", stats: { titulos: "2 Mondiaux / 15 Copas", copas: "14" },
                facts: [ "Premiers champions du monde en 1930.", "Protagonistes du 'Maracanazo' en 1950.", "Connus pour la 'Garra Charrúa'." ],
                trivia: [ { q: "Surnom de l'équipe?", options: ["La Celeste", "Los Andes", "Le Soleil"], correct: 0 }, { q: "Meilleur buteur historique?", options: ["Cavani", "Forlán", "Luis Suárez"], correct: 2 }, { q: "Qui ont-ils battu au Maracanazo?", options: ["Argentine", "Brésil", "Italie"], correct: 1 }, { q: "Combien de Mondiaux gagnés?", options: ["1", "2", "3"], correct: 1 }, { q: "Animal sur leur écusson?", options: ["Un soleil", "Pas d'écusson", "Un lion"], correct: 1 } ],
                videos: ["Uruguay vs Rép. Dominicaine", "Uruguay au Qatar 2022", "Uruguay vs Ghana Highlights", "Uruguay vs Ghana Penalty"]
            },
            tunez: {
                name: "TUNISIE", stats: { titulos: "1 Coupe d'Afrique", copas: "6" },
                facts: [ "Première équipe africaine à gagner un match en Coupe du Monde (1978).", "Ils se sont qualifiés pour 6 Coupes du Monde.", "Leur écusson comporte un aigle." ],
                trivia: [ { q: "Surnom de l'équipe?", options: ["Lions", "Pharaons", "Aigles"], correct: 2 }, { q: "Année de la Coupe d'Afrique?", options: ["2004", "1998", "2010"], correct: 0 }, { q: "Couleur de l'uniforme?", options: ["Vert", "Blanc/Rouge", "Jaune"], correct: 1 }, { q: "Continent?", options: ["Asie", "Afrique", "Europe"], correct: 1 }, { q: "Dernier mondial joué?", options: ["2014", "2018", "2022"], correct: 2 } ],
                videos: ["Argentine vs Tunisie 1996", "Tunisie vs France 2022", "Belgique vs Tunisie 2018", "Mexique vs Tunisie 1978"]
            },
            sudafrica: {
                name: "AFRIQUE DU SUD", stats: { titulos: "1 Coupe d'Afrique", copas: "3" },
                facts: [ "Seule nation africaine à organiser une Coupe du Monde.", "Le premier but de 2010 a été marqué par Tshabalala.", "Vainqueurs de la Coupe d'Afrique en 1996." ],
                trivia: [ { q: "Surnom?", options: ["Bafana Bafana", "Super Eagles", "Stars"], correct: 0 }, { q: "Mondial organisé?", options: ["2006", "2010", "2014"], correct: 1 }, { q: "Premier but en 2010?", options: ["Pienaar", "McCarthy", "Tshabalala"], correct: 2 }, { q: "Mascotte 2010?", options: ["Fuleco", "Zakumi", "Pique"], correct: 1 }, { q: "Instrument célèbre?", options: ["Tambour", "Vuvuzela", "Maraca"], correct: 1 } ],
                videos: ["Son de la vuvuzela", "Célébration du but Macarena", "Publicité Pepsi 2010", "Afrique du Sud 2010 highlights"]
            },
            uzbekistan: {
                name: "OUZBÉKISTAN", stats: { titulos: "1 Or Asiatique", copas: "0" },
                facts: [ "Or aux Jeux Asiatiques de 1994.", "Puissance émergente chez les jeunes en Asie centrale.", "Ils appartiennent à l'AFC." ],
                trivia: [ { q: "Surnom?", options: ["Loups Blancs", "Dragons", "Tigres"], correct: 0 }, { q: "Ont-ils joué un Mondial?", options: ["Oui", "Non", "Une fois"], correct: 1 }, { q: "Confédération?", options: ["UEFA", "CAF", "AFC"], correct: 2 }, { q: "Uniforme local?", options: ["Bleu/Blanc", "Rouge", "Vert"], correct: 0 }, { q: "Année Or Asiatique?", options: ["1994", "2002", "2010"], correct: 0 } ],
                videos: ["Qualifications Ouzbékistan Coupe du Monde", "Qatar highlights", "Ouzbékistan vs Uruguay", "Ouzbékistan vs Égypte"]
            },
            polonia: {
                name: "POLOGNE", stats: { titulos: "1 Or Olympique", copas: "9" },
                facts: [ "Troisième place aux Coupes du Monde 1974 et 1982.", "Lewandowski est leur meilleur buteur.", "Or olympique à Munich en 1972." ],
                trivia: [ { q: "Meilleur buteur?", options: ["Milik", "Boniek", "Lewandowski"], correct: 2 }, { q: "Meilleure place au Mondial?", options: ["Finaliste", "Troisième", "Quarts"], correct: 1 }, { q: "Surnom?", options: ["Les Aigles", "Les Ours", "Les Lions"], correct: 0 }, { q: "Couleur de l'uniforme?", options: ["Bleu", "Blanc/Rouge", "Vert"], correct: 1 }, { q: "Année Or Olympique?", options: ["1972", "1980", "1996"], correct: 0 } ],
                videos: ["Japon vs Pologne", "Lewandowski vs Arabie", "Mexique vs Pologne", "Équipe Nationale de Pologne"]
            },
            jamaica: {
                name: "JAMAÏQUE", stats: { titulos: "6 Coupes Caribéennes", copas: "1" },
                facts: [ "Leur seul Mondial était France 1998.", "Finalistes de la Gold Cup à deux reprises.", "Forte rivalité avec les USA et le Mexique." ],
                trivia: [ { q: "Surnom?", options: ["Reggae Boyz", "Calypso", "Caribéens"], correct: 0 }, { q: "Seul Mondial?", options: ["1994", "1998", "2002"], correct: 1 }, { q: "Confédération?", options: ["CONMEBOL", "UEFA", "CONCACAF"], correct: 2 }, { q: "Couleurs du maillot?", options: ["Jaune/Vert/Noir", "Rouge/Blanc", "Bleu"], correct: 0 }, { q: "Meilleure place Gold Cup?", options: ["Troisième", "Finaliste", "Champion"], correct: 1 } ],
                videos: ["Jamaïque vs Bermudes", "Jamaïque vs Venezuela 2024", "Jamaïque vs Mexique 2017", "Jamaïque vs Curacao"]
            }
        }
    },
    ko: {
        ui: {
            splash_subtitle: "2026 월드컵 경험", btn_start: "스캔 시작", btn_manual: "사용자 설명서", back_home: "← 홈으로", manual_title: "사용자 설명서", manual_desc: "KICKSCAN - 2026 월드컵 경험을 최대한 즐기려면 다음 단계를 따르세요.", step1_title: "<span class='text-green-500'>1.</span> 스캔 시작", step1_desc: "메인 화면에서 '스캔 시작'을 누르고 카메라 접근을 허용하세요.", step2_title: "<span class='text-green-500'>2.</span> 로고 스캔", step2_desc: "참가국 로고를 찾고 카메라를 가리키면 AR 경험이 시작됩니다.", step3_title: "<span class='text-green-500'>3.</span> AR 상호작용", step3_desc: "오른쪽 버튼을 눌러 3D 캐릭터가 뛰거나, 차거나, 춤추게 하세요.", step4_title: "<span class='text-green-500'>4.</span> 정보 탐색", step4_desc: "하단 탭을 터치하거나 위로 스와이프하여 팀 통계, 퀴즈를 확인하세요.", step5_title: "<span class='text-green-500'>5.</span> 역사적 기록", step5_desc: "하단 메뉴에서 비디오 아이콘을 눌러 갤러리에 들어가세요.", anim_dance: "춤추기", anim_kick: "차기", anim_run: "달리기", btn_confetti: "색종이", scan_guide: "국가 로고를 가리키세요", tab_stats: "통계", tab_facts: "재미있는 사실", tab_trivia: "트리비아", stat_titles_label: "우승", stat_cups_label: "월드컵", score_label: "점수", question_label: "질문", back_gallery: "← 뒤로", gallery_title: "역사적 기록", watch_video: "비디오 보기", back_hl: "← 갤러리", hl_edit: "비디오 편집", filter_normal: "일반", filter_blur: "블러", filter_pixel: "픽셀화", filter_thermal: "열화상", filter_color: "색상", filter_pastel: "파스텔", filter_intense: "강렬한"
        },
        countries: {
            mexico: {
                name: "멕시코", stats: { titulos: "1 컨페드 / 11 골드", copas: "17" },
                facts: [ "아스테카 경기장은 월드컵 결승전을 두 번 개최한 세계 유일의 경기장입니다.", "멕시코는 월드컵을 두 번 개최한 최초의 국가였습니다.", "멕시코 대표팀은 우승 없이 월드컵에 가장 많이 참가한 팀입니다." ],
                trivia: [ { q: "역대 최고 득점자?", options: ["우고 산체스", "치차리토", "보르헤티"], correct: 1 }, { q: "올림픽 금메달 획득 연도?", options: ["2008", "2016", "2012"], correct: 2 }, { q: "팀의 별명?", options: ["엘 트리", "아즈텍", "더 그린스"], correct: 0 }, { q: "5번의 월드컵에 참가한 첫 선수?", options: ["라파 마르케스", "토타 카르바할", "오초아"], correct: 1 }, { q: "'페널티가 아니었다'의 라이벌?", options: ["아르헨티나", "네덜란드", "독일"], correct: 1 } ],
                videos: ["네덜란드 vs 멕시코, 2014 브라질", "메모 오초아의 놀라운 반사 신경", "피넛 힛", "이모스 vs 펑크스"]
            },
            colombia: {
                name: "콜롬비아", stats: { titulos: "1 코파 아메리카", copas: "6" },
                facts: [ "월드컵 역사상 유일한 '올림픽 골'은 마르코스 콜이 기록했습니다.", "하메스 로드리게스는 2014년 브라질에서 골든 부츠를 수상했습니다.", "1994년 대표팀은 30경기 무패 기록으로 월드컵에 진출했습니다." ],
                trivia: [ { q: "'엘 티그레'는 누구인가?", options: ["팔카오", "하메스", "발데라마"], correct: 0 }, { q: "2014 골든 부츠?", options: ["콰드라도", "바카", "하메스 로드리게스"], correct: 2 }, { q: "주요 유니폼 색상?", options: ["빨강", "파랑", "노랑"], correct: 2 }, { q: "곱슬머리 아이콘?", options: ["이기타", "피베 발데라마", "아스프리야"], correct: 1 }, { q: "코파 아메리카 우승 연도?", options: ["2001", "2011", "1990"], correct: 0 } ],
                videos: ["하메스 로드리게스의 7골", "콜롬비아 vs 호주", "콜롬비아 월드컵 2014 골", "콜롬비아 대표팀 훈련"]
            },
            irlanda: {
                name: "아일랜드", stats: { titulos: "-", copas: "3" },
                facts: [ "1990년 이탈리아 월드컵에서 단 한 경기도 이기지 못하고 8강에 올랐습니다.", "'그린 아미' 팬들은 기쁨으로 유명합니다.", "잭 찰튼은 국민적 영웅으로 여겨집니다." ],
                trivia: [ { q: "홈 유니폼 색상?", options: ["초록", "흰색", "주황"], correct: 0 }, { q: "맨체스터 유나이티드 전설?", options: ["로비 킨", "로이 킨", "더프"], correct: 1 }, { q: "방패의 상징?", options: ["하프", "토끼풀", "십자가"], correct: 1 }, { q: "팀 별명?", options: ["그린 아미", "보이즈 인 그린", "켈트족"], correct: 1 }, { q: "가장 큰 역사적 라이벌?", options: ["스코틀랜드", "웨일즈", "영국"], correct: 2 } ],
                videos: ["아일랜드의 경기장", "아일랜드 팬들", "유로 2016 아일랜드 팬 베스트", "아일랜드의 호기심"]
            },
            espana: {
                name: "스페인", stats: { titulos: "1 월드컵 / 4 유로", copas: "16" },
                facts: [ "3회 연속 주요 대회를 우승한 유일한 팀.", "첫 경기에서 지고도 2010년 우승.", "'티키타카' 스타일은 축구에 혁명을 일으켰습니다." ],
                trivia: [ { q: "2010 결승골 득점자?", options: ["토레스", "비야", "이니에스타"], correct: 2 }, { q: "팀 별명?", options: ["라 푸리아", "라 로하", "황소들"], correct: 1 }, { q: "우승컵을 들어올린 주장?", options: ["카시야스", "푸욜", "사비"], correct: 0 }, { q: "유명한 플레이 스타일?", options: ["카테나치오", "티키타카", "조고 보니토"], correct: 1 }, { q: "유로컵은 몇 개?", options: ["2", "3", "4"], correct: 2 } ],
                videos: ["스페인 vs 네덜란드, 2010 결승", "스페인 최고의 골", "이니에스타의 골 vs 네덜란드", "스페인의 모든 것"]
            },
            corea: {
                name: "대한민국", stats: { titulos: "2 아시안컵", copas: "11" },
                facts: [ "가장 많은 연속 출전을 기록한 아시아 팀.", "2002년에 준결승에 진출했습니다.", "팬 '붉은 악마'는 열광적인 응원으로 유명합니다." ],
                trivia: [ { q: "토트넘 스타?", options: ["박지성", "손흥민", "김민재"], correct: 1 }, { q: "팬들의 별명?", options: ["붉은 악마", "타이거즈", "워리어스"], correct: 0 }, { q: "한일 월드컵 연도?", options: ["1998", "2006", "2002"], correct: 2 }, { q: "주요 유니폼 색상?", options: ["흰색", "빨강", "파랑"], correct: 1 }, { q: "2018년에 누구를 탈락시켰나?", options: ["브라질", "독일", "멕시코"], correct: 1 } ],
                videos: ["유니폼의 진화", "한국 vs 볼리비아", "2022년 역사를 만든 한국", "멕시코 vs 한국"]
            },
            japon: {
                name: "일본", stats: { titulos: "4 아시안컵", copas: "7" },
                facts: [ "'사무라이 블루'로 알려져 있습니다.", "'캡틴 츠바사'에서 영감을 받았습니다.", "라커룸과 경기장을 청소하는 것으로 유명합니다." ],
                trivia: [ { q: "팀 별명?", options: ["사무라이 블루", "라이징 선", "닌자"], correct: 0 }, { q: "유명한 축구 애니메이션?", options: ["드래곤볼", "캡틴 츠바사", "나루토"], correct: 1 }, { q: "가장 큰 아시아 라이벌?", options: ["중국", "대한민국", "호주"], correct: 1 }, { q: "월드컵에서 우승한 적이 있나?", options: ["네", "아니오", "거의"], correct: 1 }, { q: "유니폼 색상?", options: ["빨강", "흰색", "파랑"], correct: 2 } ],
                videos: ["일본 vs 독일 2022", "월드컵 출전", "애니메이션의 진화", "일본 vs 크로아티아 2022"]
            },
            uruguay: {
                name: "우루과이", stats: { titulos: "2 월드컵 / 15 코파", copas: "14" },
                facts: [ "1930년 최초의 세계 챔피언.", "1950년 '마라카낭의 비극'의 주인공.", "'가라 차루아(Garra Charrúa)'로 유명합니다." ],
                trivia: [ { q: "팀 별명?", options: ["라 셀레스테", "로스 안데스", "태양"], correct: 0 }, { q: "역대 최고 득점자?", options: ["카바니", "포를란", "루이스 수아레스"], correct: 2 }, { q: "마라카낭에서 누구를 이겼나?", options: ["아르헨티나", "브라질", "이탈리아"], correct: 1 }, { q: "월드컵 우승 횟수?", options: ["1", "2", "3"], correct: 1 }, { q: "방패에 있는 동물?", options: ["태양", "방패 없음", "사자"], correct: 1 } ],
                videos: ["우루과이 vs 도미니카 공화국", "2022 카타르로 가는 우루과이", "우루과이 vs 가나 하이라이트", "우루과이 vs 가나 페널티"]
            },
            tunez: {
                name: "튀니지", stats: { titulos: "1 아프리카 네이션스컵", copas: "6" },
                facts: [ "월드컵 경기에서 승리한 최초의 아프리카 팀(1978년).", "6번의 월드컵에 진출했습니다.", "방패에는 독수리가 있습니다." ],
                trivia: [ { q: "팀 별명?", options: ["사자", "파라오", "독수리"], correct: 2 }, { q: "아프리카 네이션스컵 우승 연도?", options: ["2004", "1998", "2010"], correct: 0 }, { q: "유니폼 색상?", options: ["초록", "흰색/빨강", "노랑"], correct: 1 }, { q: "대륙?", options: ["아시아", "아프리카", "유럽"], correct: 1 }, { q: "마지막으로 참가한 월드컵?", options: ["2014", "2018", "2022"], correct: 2 } ],
                videos: ["아르헨티나 vs 튀니지 1996", "튀니지 vs 프랑스 2022", "벨기에 vs 튀니지 2018", "멕시코 vs 튀니지 1978"]
            },
            sudafrica: {
                name: "남아프리카 공화국", stats: { titulos: "1 아프리카 네이션스컵", copas: "3" },
                facts: [ "월드컵을 개최한 유일한 아프리카 국가.", "2010년 첫 골은 차발랄라가 기록했습니다.", "1996년 개최국으로서 아프리카 네이션스컵에서 우승했습니다." ],
                trivia: [ { q: "별명?", options: ["바파나 바파나", "슈퍼 이글스", "스타즈"], correct: 0 }, { q: "개최한 월드컵?", options: ["2006", "2010", "2014"], correct: 1 }, { q: "2010년 첫 골?", options: ["피에나르", "매카시", "차발랄라"], correct: 2 }, { q: "2010 마스코트?", options: ["풀레코", "자쿠미", "피케"], correct: 1 }, { q: "유명한 악기?", options: ["드럼", "부부젤라", "마라카스"], correct: 1 } ],
                videos: ["부부젤라 소리", "마카레나 골 세리머니", "2010 펩시 광고", "남아프리카 2010 하이라이트"]
            },
            uzbekistan: {
                name: "우즈베키스탄", stats: { titulos: "1 아시안 게임 금메달", copas: "0" },
                facts: [ "1994년 아시안 게임 금메달.", "중앙아시아의 신흥 유소년 강국.", "AFC에 속해 있습니다." ],
                trivia: [ { q: "별명?", options: ["하얀 늑대들", "드래곤즈", "타이거즈"], correct: 0 }, { q: "월드컵 출전 경험?", options: ["네", "아니오", "한 번"], correct: 1 }, { q: "소속 연맹?", options: ["UEFA", "CAF", "AFC"], correct: 2 }, { q: "홈 유니폼?", options: ["파랑/흰색", "빨강", "초록"], correct: 0 }, { q: "아시안 게임 금메달 연도?", options: ["1994", "2002", "2010"], correct: 0 } ],
                videos: ["우즈베키스탄 첫 월드컵 예선", "카타르 하이라이트", "우즈베키스탄 vs 우루과이", "우즈베키스탄 vs 이집트"]
            },
            polonia: {
                name: "폴란드", stats: { titulos: "1 올림픽 금메달", copas: "9" },
                facts: [ "1974년 및 1982년 월드컵에서 3위.", "레반도프스키는 그들의 최고 득점자입니다.", "1972년 뮌헨 올림픽 금메달." ],
                trivia: [ { q: "최고 득점자?", options: ["밀리크", "보니에크", "레반도프스키"], correct: 2 }, { q: "월드컵 최고 성적?", options: ["준우승", "3위", "8강"], correct: 1 }, { q: "별명?", options: ["독수리", "곰", "사자"], correct: 0 }, { q: "유니폼 색상?", options: ["파랑", "흰색/빨강", "초록"], correct: 1 }, { q: "올림픽 금메달 연도?", options: ["1972", "1980", "1996"], correct: 0 } ],
                videos: ["일본 vs 폴란드", "레반도프스키 vs 사우디아라비아", "멕시코 vs 폴란드", "폴란드 국가대표팀"]
            },
            jamaica: {
                name: "자메이카", stats: { titulos: "6 캐리비안컵", copas: "1" },
                facts: [ "그들의 유일한 월드컵은 1998년 프랑스 월드컵이었습니다.", "골드컵 준우승 2회.", "미국 및 멕시코와 강한 라이벌 관계입니다." ],
                trivia: [ { q: "별명?", options: ["레게 보이즈", "칼립소", "캐리비안"], correct: 0 }, { q: "유일한 월드컵?", options: ["1994", "1998", "2002"], correct: 1 }, { q: "소속 연맹?", options: ["CONMEBOL", "UEFA", "CONCACAF"], correct: 2 }, { q: "유니폼 색상?", options: ["노랑/초록/검정", "빨강/흰색", "파랑"], correct: 0 }, { q: "골드컵 최고 성적?", options: ["3위", "준우승", "우승"], correct: 1 } ],
                videos: ["자메이카 vs 버뮤다", "자메이카 vs 베네수엘라 2024", "자메이카 vs 멕시코 2017", "자메이카 vs 퀴라소"]
            }
        }
    },
    ja: {
        ui: {
            splash_subtitle: "2026年ワールドカップ体験", btn_start: "スキャン開始", btn_manual: "ユーザーマニュアル", back_home: "← ホームへ戻る", manual_title: "ユーザーマニュアル", manual_desc: "KICKSCAN - 2026年ワールドカップ体験を最大限に楽しむための手順です。", step1_title: "<span class='text-green-500'>1.</span> スキャン開始", step1_desc: "メイン画面の「スキャン開始」を押し、カメラへのアクセスを許可してください。", step2_title: "<span class='text-green-500'>2.</span> ロゴをスキャン", step2_desc: "参加国のロゴを見つけ、カメラを向けてAR体験を開始します。", step3_title: "<span class='text-green-500'>3.</span> ARで遊ぶ", step3_desc: "画面右側のボタンを使って、3Dキャラクターを走らせたり、蹴ったり、踊らせたりできます。", step4_title: "<span class='text-green-500'>4.</span> データを探索", step4_desc: "下のタブをタップまたは上にスワイプして、チームの統計、豆知識、トリビアを確認します。", step5_title: "<span class='text-green-500'>5.</span> 歴史アーカイブ", step5_desc: "下のメニューでビデオアイコンを押すとギャラリーに入ります。動画フィルターも適用できます。", anim_dance: "踊る", anim_kick: "蹴る", anim_run: "走る", btn_confetti: "紙吹雪", scan_guide: "国のロゴにカメラを向けてください", tab_stats: "統計", tab_facts: "豆知識", tab_trivia: "トリビア", stat_titles_label: "タイトル", stat_cups_label: "W杯出場", score_label: "スコア", question_label: "質問", back_gallery: "← 戻る", gallery_title: "歴史アーカイブ", watch_video: "動画を見る", back_hl: "← ギャラリー", hl_edit: "動画編集", filter_normal: "標準", filter_blur: "ぼかし", filter_pixel: "ピクセル化", filter_thermal: "サーモグラフィ", filter_color: "カラー", filter_pastel: "パステル", filter_intense: "強烈"
        },
        countries: {
            mexico: {
                name: "メキシコ", stats: { titulos: "コンフェデ1 / ゴールド11", copas: "17" },
                facts: [ "エスタディオ・アステカはW杯決勝を2回開催した世界唯一のスタジアムです。", "メキシコはW杯を2回開催した最初の国です。", "メキシコ代表は優勝経験がないまま最も多くW杯に出場しています。" ],
                trivia: [ { q: "歴代最多得点者は？", options: ["ウーゴ・サンチェス", "チチャリート", "ボルヘッティ"], correct: 1 }, { q: "五輪で金メダルを獲得した年は？", options: ["2008", "2016", "2012"], correct: 2 }, { q: "チームの愛称は？", options: ["エル・トリ", "アステカ", "ザ・グリーンズ"], correct: 0 }, { q: "W杯に5回出場した最初の選手は？", options: ["ラファ・マルケス", "トタ・カルバハル", "オチョア"], correct: 1 }, { q: "「ノー・エラ・ペナル」の相手は？", options: ["アルゼンチン", "オランダ", "ドイツ"], correct: 1 } ],
                videos: ["オランダ vs メキシコ、2014年ブラジル", "オチョアの驚異的な反射神経", "ピーナッツの命中", "エモ vs パンク"]
            },
            colombia: {
                name: "コロンビア", stats: { titulos: "コパ・アメリカ1", copas: "6" },
                facts: [ "W杯史上唯一の「オリンピック・ゴール」はマルコス・コルが決めました。", "ハメス・ロドリゲスは2014年にゴールデンブーツを獲得しました。", "1994年のチームは30試合無敗でW杯に出場しました。" ],
                trivia: [ { q: "「エル・ティグレ」とは誰？", options: ["ファルカオ", "ハメス", "バルデラマ"], correct: 0 }, { q: "2014年のゴールデンブーツは？", options: ["クアドラード", "バッカ", "ハメス・ロドリゲス"], correct: 2 }, { q: "ユニフォームの主な色は？", options: ["赤", "青", "黄色"], correct: 2 }, { q: "カーリーヘアのアイコンは？", options: ["イギータ", "バルデラマ", "アスプリージャ"], correct: 1 }, { q: "コパ・アメリカ優勝年は？", options: ["2001", "2011", "1990"], correct: 0 } ],
                videos: ["ハメス・ロドリゲスの7ゴール", "コロンビア vs オーストラリア", "2014年W杯コロンビアのゴール", "コロンビア代表のトレーニング"]
            },
            irlanda: {
                name: "アイルランド", stats: { titulos: "-", copas: "3" },
                facts: [ "1990年のイタリア大会では、1勝もせずに準々決勝に進出しました。", "「グリーン・アーミー」と呼ばれるファンは陽気なことで有名です。", "ジャック・チャールトンは国民的英雄と見なされています。" ],
                trivia: [ { q: "ホームユニフォームの色は？", options: ["緑", "白", "オレンジ"], correct: 0 }, { q: "マンチェスターUの伝説は？", options: ["ロビー・キーン", "ロイ・キーン", "ダフ"], correct: 1 }, { q: "盾のシンボルは？", options: ["ハープ", "シャムロック", "十字架"], correct: 1 }, { q: "チームの愛称は？", options: ["グリーン・アーミー", "ボーイズ・イン・グリーン", "ケルト"], correct: 1 }, { q: "最大の歴史的ライバルは？", options: ["スコットランド", "ウェールズ", "イングランド"], correct: 2 } ],
                videos: ["アイルランドのスタジアム", "アイルランドのファン", "ユーロ2016ファンのベスト", "アイルランドの豆知識"]
            },
            espana: {
                name: "スペイン", stats: { titulos: "W杯1 / ユーロ4", copas: "16" },
                facts: [ "主要な大会を3連覇した唯一のチームです。", "初戦で負けながらも2010年に優勝しました。", "「ティキ・タカ」スタイルはサッカーに革命をもたらしました。" ],
                trivia: [ { q: "2010年の決勝ゴールを決めたのは？", options: ["トーレス", "ビジャ", "イニエスタ"], correct: 2 }, { q: "チームの愛称は？", options: ["ラ・フリア", "ラ・ロハ", "闘牛"], correct: 1 }, { q: "カップを掲げたキャプテンは？", options: ["カシージャス", "プジョル", "シャビ"], correct: 0 }, { q: "有名なプレースタイルは？", options: ["カテナチオ", "ティキ・タカ", "ジョゴ・ボニート"], correct: 1 }, { q: "ユーロ優勝回数は？", options: ["2", "3", "4"], correct: 2 } ],
                videos: ["スペイン vs オランダ、2010年決勝", "スペインのベストゴール", "イニエスタのゴール vs オランダ", "スペインのすべて"]
            },
            corea: {
                name: "韓国", stats: { titulos: "アジア杯2", copas: "11" },
                facts: [ "アジアのチームとして最多の連続出場記録を持っています。", "2002年には準決勝に進出しました。", "「レッドデビルズ」と呼ばれるファンは熱狂的な応援で有名です。" ],
                trivia: [ { q: "トッテナムのスター選手は？", options: ["パク・チソン", "ソン・フンミン", "キム・ミンジェ"], correct: 1 }, { q: "ファンの愛称は？", options: ["レッドデビルズ", "タイガース", "ウォリアーズ"], correct: 0 }, { q: "日韓W杯の年は？", options: ["1998", "2006", "2002"], correct: 2 }, { q: "主なユニフォームの色は？", options: ["白", "赤", "青"], correct: 1 }, { q: "2018年に敗退させたのは？", options: ["ブラジル", "ドイツ", "メキシコ"], correct: 1 } ],
                videos: ["ユニフォームの進化", "韓国 vs ボリビア", "2022年、韓国が歴史を作る", "メキシコ vs 韓国"]
            },
            japon: {
                name: "日本", stats: { titulos: "アジア杯4", copas: "7" },
                facts: [ "「SAMURAI BLUE（サムライブルー）」として知られています。", "「キャプテン翼」の影響を大きく受けています。", "ロッカールームやスタジアムを掃除することで有名です。" ],
                trivia: [ { q: "チームの愛称は？", options: ["サムライブルー", "ライジングサン", "忍者"], correct: 0 }, { q: "有名なサッカーアニメは？", options: ["ドラゴンボール", "キャプテン翼", "ナルト"], correct: 1 }, { q: "アジアの最大のライバルは？", options: ["中国", "韓国", "オーストラリア"], correct: 1 }, { q: "W杯で優勝したことはある？", options: ["はい", "いいえ", "惜しいところまで"], correct: 1 }, { q: "ユニフォームの色は？", options: ["赤", "白", "青"], correct: 2 } ],
                videos: ["日本 vs ドイツ 2022", "W杯出場の歴史", "アニメの進化", "日本 vs クロアチア 2022"]
            },
            uruguay: {
                name: "ウルグアイ", stats: { titulos: "W杯2 / コパ15", copas: "14" },
                facts: [ "1930年の初代世界王者です。", "1950年の「マラカナンの悲劇」の主役です。", "「ガラ・チャルーア」で知られています。" ],
                trivia: [ { q: "チームの愛称は？", options: ["ラ・セレステ", "ロス・アンデス", "太陽"], correct: 0 }, { q: "歴代最多得点者は？", options: ["カバーニ", "フォルラン", "ルイス・スアレス"], correct: 2 }, { q: "マラカナンで破った相手は？", options: ["アルゼンチン", "ブラジル", "イタリア"], correct: 1 }, { q: "W杯優勝回数は？", options: ["1", "2", "3"], correct: 1 }, { q: "盾に描かれている動物は？", options: ["太陽", "盾はない", "ライオン"], correct: 1 } ],
                videos: ["ウルグアイ vs ドミニカ共和国", "カタール2022へ", "ウルグアイ vs ガーナ ハイライト", "ウルグアイ vs ガーナ PK戦"]
            },
            tunez: {
                name: "チュニジア", stats: { titulos: "アフリカ杯1", copas: "6" },
                facts: [ "1978年、W杯で初めて試合に勝ったアフリカのチームです。", "これまでに6回W杯に出場しています。", "盾には鷲が描かれています。" ],
                trivia: [ { q: "チームの愛称は？", options: ["ライオン", "ファラオ", "カルタゴの鷲"], correct: 2 }, { q: "アフリカ杯優勝年は？", options: ["2004", "1998", "2010"], correct: 0 }, { q: "ユニフォームの色は？", options: ["緑", "白/赤", "黄色"], correct: 1 }, { q: "大陸は？", options: ["アジア", "アフリカ", "ヨーロッパ"], correct: 1 }, { q: "直近の出場大会は？", options: ["2014", "2018", "2022"], correct: 2 } ],
                videos: ["アルゼンチン vs チュニジア 1996", "チュニジア vs フランス 2022", "ベルギー vs チュニジア 2018", "メキシコ vs チュニジア 1978"]
            },
            sudafrica: {
                name: "南アフリカ", stats: { titulos: "アフリカ杯1", copas: "3" },
                facts: [ "W杯を開催した唯一のアフリカ諸国です。", "2010年大会の初ゴールはチャバララが決めました。", "1996年に開催国としてアフリカ杯で優勝しました。" ],
                trivia: [ { q: "愛称は？", options: ["バファナ・バファナ", "スーパーイーグルス", "スターズ"], correct: 0 }, { q: "W杯を開催した年は？", options: ["2006", "2010", "2014"], correct: 1 }, { q: "2010年の初ゴールは？", options: ["ピーナール", "マッカーシー", "チャバララ"], correct: 2 }, { q: "2010年のマスコットは？", options: ["フレコ", "ザクミ", "ピケ"], correct: 1 }, { q: "有名な楽器は？", options: ["ドラム", "ブブゼラ", "マラカス"], correct: 1 } ],
                videos: ["ブブゼラの音", "マカレナ・ゴールパフォーマンス", "2010年ペプシCM", "南アフリカ2010ハイライト"]
            },
            uzbekistan: {
                name: "ウズベキスタン", stats: { titulos: "アジア大会金1", copas: "0" },
                facts: [ "1994年のアジア大会で金メダルを獲得しました。", "中央アジアの新興ユース強国です。", "AFCに所属しています。" ],
                trivia: [ { q: "愛称は？", options: ["白いオオカミ", "ドラゴン", "タイガー"], correct: 0 }, { q: "W杯出場経験は？", options: ["はい", "いいえ", "1回"], correct: 1 }, { q: "所属連盟は？", options: ["UEFA", "CAF", "AFC"], correct: 2 }, { q: "ホームユニフォームは？", options: ["青/白", "赤", "緑"], correct: 0 }, { q: "アジア大会の金メダルは？", options: ["1994", "2002", "2010"], correct: 0 } ],
                videos: ["ウズベキスタン初のW杯予選", "カタール戦ハイライト", "ウズベキスタン vs ウルグアイ", "ウズベキスタン vs エジプト"]
            },
            polonia: {
                name: "ポーランド", stats: { titulos: "五輪金1", copas: "9" },
                facts: [ "1974年と1982年のW杯で3位になりました。", "レヴァンドフスキが歴代最多得点者です。", "1972年ミュンヘン五輪で金メダルを獲得しました。" ],
                trivia: [ { q: "最多得点者は？", options: ["ミリク", "ボニエク", "レヴァンドフスキ"], correct: 2 }, { q: "W杯での最高成績は？", options: ["準優勝", "3位", "ベスト8"], correct: 1 }, { q: "愛称は？", options: ["鷲", "熊", "ライオン"], correct: 0 }, { q: "ユニフォームの色は？", options: ["青", "白/赤", "緑"], correct: 1 }, { q: "五輪金メダルはいつ？", options: ["1972", "1980", "1996"], correct: 0 } ],
                videos: ["日本 vs ポーランド", "レヴァンドフスキ vs サウジアラビア", "メキシコ vs ポーランド", "ポーランド代表チーム"]
            },
            jamaica: {
                name: "ジャマイカ", stats: { titulos: "カリブ海杯6", copas: "1" },
                facts: [ "W杯出場は1998年フランス大会のみです。", "ゴールドカップで2回準優勝しました。", "米国やメキシコと強いライバル関係にあります。" ],
                trivia: [ { q: "愛称は？", options: ["レゲエ・ボーイズ", "カリプソ", "カリビアン"], correct: 0 }, { q: "唯一のW杯は？", options: ["1994", "1998", "2002"], correct: 1 }, { q: "所属連盟は？", options: ["CONMEBOL", "UEFA", "CONCACAF"], correct: 2 }, { q: "ユニフォームの色は？", options: ["黄/緑/黒", "赤/白", "青"], correct: 0 }, { q: "ゴールドカップの最高成績は？", options: ["3位", "準優勝", "優勝"], correct: 1 } ],
                videos: ["ジャマイカ vs バミューダ", "ジャマイカ vs ベネズエラ 2024", "ジャマイカ vs メキシコ 2017", "ジャマイカ vs キュラソー"]
            }
        }
    },
    pl: {
        ui: {
            splash_subtitle: "Doświadczenie Mundial 2026", btn_start: "ROZPOCZNIJ SKANOWANIE", btn_manual: "INSTRUKCJA OBSŁUGI", back_home: "← POWRÓT", manual_title: "INSTRUKCJA OBSŁUGI", manual_desc: "Postępuj zgodnie z tymi krokami, aby w pełni cieszyć się doświadczeniem KICKSCAN - Mundial 2026.", step1_title: "<span class='text-green-500'>1.</span> ROZPOCZNIJ SKANOWANIE", step1_desc: "Naciśnij 'ROZPOCZNIJ SKANOWANIE' na ekranie głównym i zezwól na dostęp do kamery.", step2_title: "<span class='text-green-500'>2.</span> SKANUJ LOGO", step2_desc: "Znajdź logo uczestniczących krajów i skieruj na nie kamerę, aby uruchomić AR.", step3_title: "<span class='text-green-500'>3.</span> INTERAKCJA AR", step3_desc: "Użyj pływających przycisków po prawej stronie, aby postać biegała, kopała lub tańczyła.", step4_title: "<span class='text-green-500'>4.</span> ODKRYWAJ FAKTY", step4_desc: "Dotknij lub przesuń dolną kartę w górę, aby sprawdzić statystyki drużyny i zagrać w ciekawostki.", step5_title: "<span class='text-green-500'>5.</span> ARCHIWUM", step5_desc: "W dolnym menu naciśnij ikonę wideo, aby wejść do galerii. Możesz stosować filtry kreatywne.", anim_dance: "Taniec", anim_kick: "Kopnięcie", anim_run: "Bieg", btn_confetti: "KONFETTI", scan_guide: "Skieruj na logo kraju", tab_stats: "Statystyki", tab_facts: "Ciekawostki", tab_trivia: "Quiz", stat_titles_label: "Tytuły", stat_cups_label: "Mundiale", score_label: "WYNIK", question_label: "Pytanie", back_gallery: "← POWRÓT", gallery_title: "ARCHIWUM HISTORYCZNE", watch_video: "Obejrzyj wideo", back_hl: "← GALERIA", hl_edit: "Edycja Wideo", filter_normal: "Normalny", filter_blur: "Rozmycie", filter_pixel: "Piksele", filter_thermal: "Termowizja", filter_color: "Kolor", filter_pastel: "Pastelowy", filter_intense: "Intensywny"
        },
        countries: {
            mexico: {
                name: "MEKSYK", stats: { titulos: "1 Puchar Konf. / 11 Złotych", copas: "17" },
                facts: [ "Estadio Azteca to jedyny stadion na świecie, na którym odbyły się dwa finały mistrzostw świata.", "Meksyk był pierwszym krajem, który dwukrotnie gościł mistrzostwa świata.", "Reprezentacja Meksyku najwięcej razy brała udział w mundialach bez zwycięstwa." ],
                trivia: [ { q: "Najlepszy strzelec w historii?", options: ["Hugo Sánchez", "Chicharito", "Borgetti"], correct: 1 }, { q: "Kiedy zdobyli złoto olimpijskie?", options: ["2008", "2016", "2012"], correct: 2 }, { q: "Przydomek drużyny?", options: ["El Tri", "Aztekowie", "Zieloni"], correct: 0 }, { q: "Pierwszy piłkarz na 5 mundialach?", options: ["Rafa Márquez", "Tota Carbajal", "Ochoa"], correct: 1 }, { q: "Rywal w słynnym 'No era penal'?", options: ["Argentyna", "Holandia", "Niemcy"], correct: 1 } ],
                videos: ["Holandia vs Meksyk, Brazylia 2014", "Niesamowity refleks Ochoi", "Uderzenie orzeszkiem", "Emos vs punkowie"]
            },
            colombia: {
                name: "KOLUMBIA", stats: { titulos: "1 Copa America", copas: "6" },
                facts: [ "Jedyny 'Gol Olimpijski' w historii mundiali zdobył Marcos Coll.", "James Rodriguez wygrał Złotego Buta w Brazylii w 2014 roku.", "Reprezentacja z 1994 roku przyjechała na turniej z serią 30 meczów bez porażki." ],
                trivia: [ { q: "Kto to jest 'El Tigre'?", options: ["Falcao", "James", "Valderrama"], correct: 0 }, { q: "Złoty But 2014?", options: ["Cuadrado", "Bacca", "James Rodríguez"], correct: 2 }, { q: "Główny kolor koszulki?", options: ["Czerwony", "Niebieski", "Żółty"], correct: 2 }, { q: "Ikona kręconych włosów?", options: ["Higuita", "Pibe Valderrama", "Asprilla"], correct: 1 }, { q: "Rok zwycięstwa Copa America?", options: ["2001", "2011", "1990"], correct: 0 } ],
                videos: ["7 goli Jamesa Rodrigueza", "Kolumbia vs Australia", "Gole Kolumbii 2014", "Trening reprezentacji Kolumbii"]
            },
            irlanda: {
                name: "IRLANDIA", stats: { titulos: "-", copas: "3" },
                facts: [ "Na mundialu we Włoszech w 1990 r. dotarli do ćwierćfinału bez wygrania meczu.", "Kibice 'Green Army' słyną z radosnego dopingu.", "Jack Charlton jest uważany za bohatera narodowego." ],
                trivia: [ { q: "Kolor koszulki domowej?", options: ["Zielony", "Biały", "Pomarańczowy"], correct: 0 }, { q: "Legenda Man. United?", options: ["Robbie Keane", "Roy Keane", "Duff"], correct: 1 }, { q: "Symbol na herbie?", options: ["Harfa", "Koniczyna", "Krzyż"], correct: 1 }, { q: "Przydomek drużyny?", options: ["Green Army", "Boys in Green", "Celtowie"], correct: 1 }, { q: "Największy historyczny rywal?", options: ["Szkocja", "Walia", "Anglia"], correct: 2 } ],
                videos: ["Stadiony Irlandii", "Irlandzcy kibice", "Najlepsi kibice Euro 2016", "Ciekawostki o Irlandii"]
            },
            espana: {
                name: "HISZPANIA", stats: { titulos: "1 Mundial / 4 Euro", copas: "16" },
                facts: [ "Jedyna drużyna, która wygrała trzy duże turnieje z rzędu.", "Mistrzowie w 2010 roku, mimo przegrania pierwszego meczu.", "Styl 'Tiki-Taka' zrewolucjonizował piłkę nożną." ],
                trivia: [ { q: "Strzelec gola w finale 2010?", options: ["Torres", "Villa", "Iniesta"], correct: 2 }, { q: "Przydomek drużyny?", options: ["La Furia", "La Roja", "Byki"], correct: 1 }, { q: "Kapitan, który podniósł puchar?", options: ["Casillas", "Puyol", "Xavi"], correct: 0 }, { q: "Słynny styl gry?", options: ["Catenaccio", "Tiki-Taka", "Jogo Bonito"], correct: 1 }, { q: "Ile mają mistrzostw Europy?", options: ["2", "3", "4"], correct: 2 } ],
                videos: ["Hiszpania vs Holandia, finał 2010", "Najlepsze gole Hiszpanii", "Gol Iniesty vs Holandia", "Wszystko o Hiszpanii"]
            },
            corea: {
                name: "KOREA POŁUDNIOWA", stats: { titulos: "2 Puchary Azji", copas: "11" },
                facts: [ "Azjatycka drużyna z największą liczbą występów z rzędu.", "Dotarli do półfinału w 2002 roku.", "Kibice 'Red Devils' słyną z głośnych śpiewów." ],
                trivia: [ { q: "Gwiazda Tottenhamu?", options: ["Park Ji-sung", "Son Heung-min", "Kim Min-jae"], correct: 1 }, { q: "Przydomek kibiców?", options: ["Red Devils", "Tigers", "Warriors"], correct: 0 }, { q: "Rok mundialu w Korei i Japonii?", options: ["1998", "2006", "2002"], correct: 2 }, { q: "Kolor głównego stroju?", options: ["Biały", "Czerwony", "Niebieski"], correct: 1 }, { q: "Kogo wyeliminowali w 2018 roku?", options: ["Brazylia", "Niemcy", "Meksyk"], correct: 1 } ],
                videos: ["Ewolucja stroju", "Korea vs Boliwia", "Korea tworzy historię w 2022", "Meksyk vs Korea"]
            },
            japon: {
                name: "JAPONIA", stats: { titulos: "4 Puchary Azji", copas: "7" },
                facts: [ "Znani jako 'Samurai Blue'.", "Zainspirowani anime 'Kapitan Tsubasa'.", "Słyną ze sprzątania szatni i stadionów." ],
                trivia: [ { q: "Przydomek drużyny?", options: ["Samurai Blue", "Wschodzące Słońce", "Ninja"], correct: 0 }, { q: "Słynne anime o piłce nożnej?", options: ["Dragon Ball", "Kapitan Tsubasa", "Naruto"], correct: 1 }, { q: "Największy azjatycki rywal?", options: ["Chiny", "Korea Południowa", "Australia"], correct: 1 }, { q: "Czy wygrali mundial?", options: ["Tak", "Nie", "Prawie"], correct: 1 }, { q: "Kolor koszulki?", options: ["Czerwony", "Biały", "Niebieski"], correct: 2 } ],
                videos: ["Japonia vs Niemcy 2022", "Historia występów", "Ewolucja anime", "Japonia vs Chorwacja 2022"]
            },
            uruguay: {
                name: "URUGWAJ", stats: { titulos: "2 Mundiale / 15 Copa", copas: "14" },
                facts: [ "Pierwsi mistrzowie świata z 1930 roku.", "Główni bohaterowie 'Maracanazo' w 1950 r.", "Znani z waleczności 'Garra Charrúa'." ],
                trivia: [ { q: "Przydomek drużyny?", options: ["La Celeste", "Los Andes", "Słońce"], correct: 0 }, { q: "Najlepszy strzelec?", options: ["Cavani", "Forlán", "Luis Suárez"], correct: 2 }, { q: "Kogo pokonali na Maracanazo?", options: ["Argentyna", "Brazylia", "Włochy"], correct: 1 }, { q: "Ile mundiali wygrali?", options: ["1", "2", "3"], correct: 1 }, { q: "Zwierzę w herbie?", options: ["Słońce", "Brak herbu", "Lew"], correct: 1 } ],
                videos: ["Urugwaj vs Dominikana", "Droga do Kataru 2022", "Urugwaj vs Ghana Highlights", "Urugwaj vs Ghana Karne"]
            },
            tunez: {
                name: "TUNEZJA", stats: { titulos: "1 Puchar Afryki", copas: "6" },
                facts: [ "Pierwsza drużyna z Afryki, która wygrała mecz na mundialu (1978).", "Zakwalifikowali się do 6 mundiali.", "W ich herbie znajduje się orzeł." ],
                trivia: [ { q: "Przydomek drużyny?", options: ["Lwy", "Faraonowie", "Orły z Kartaginy"], correct: 2 }, { q: "Rok zdobycia Pucharu Afryki?", options: ["2004", "1998", "2010"], correct: 0 }, { q: "Kolor stroju?", options: ["Zielony", "Biało-czerwony", "Żółty"], correct: 1 }, { q: "Kontynent?", options: ["Azja", "Afryka", "Europa"], correct: 1 }, { q: "Ostatni mundial?", options: ["2014", "2018", "2022"], correct: 2 } ],
                videos: ["Argentyna vs Tunezja 1996", "Tunezja vs Francja 2022", "Belgia vs Tunezja 2018", "Meksyk vs Tunezja 1978"]
            },
            sudafrica: {
                name: "RPA", stats: { titulos: "1 Puchar Afryki", copas: "3" },
                facts: [ "Jedyny afrykański kraj, który był gospodarzem mistrzostw świata.", "Pierwszego gola w 2010 r. zdobył Tshabalala.", "Wygrali Puchar Afryki jako gospodarz w 1996 r." ],
                trivia: [ { q: "Przydomek?", options: ["Bafana Bafana", "Super Orły", "Gwiazdy"], correct: 0 }, { q: "Gospodarz mundialu?", options: ["2006", "2010", "2014"], correct: 1 }, { q: "Pierwszy gol w 2010?", options: ["Pienaar", "McCarthy", "Tshabalala"], correct: 2 }, { q: "Maskotka z 2010 roku?", options: ["Fuleco", "Zakumi", "Pique"], correct: 1 }, { q: "Słynny instrument?", options: ["Bęben", "Wuwuzela", "Marakasy"], correct: 1 } ],
                videos: ["Dźwięk wuwuzeli", "Cieszynka Macarena", "Reklama Pepsi 2010", "RPA 2010 highlights"]
            },
            uzbekistan: {
                name: "UZBEKISTAN", stats: { titulos: "1 Złoto Igrzysk Azji", copas: "0" },
                facts: [ "Złoto Igrzysk Azjatyckich w 1994 roku.", "Rosnąca siła futbolu w Azji Środkowej.", "Należą do konfederacji AFC." ],
                trivia: [ { q: "Przydomek?", options: ["Białe Wilki", "Smoki", "Tygrysy"], correct: 0 }, { q: "Czy grali na mundialu?", options: ["Tak", "Nie", "Jeden raz"], correct: 1 }, { q: "Konfederacja?", options: ["UEFA", "CAF", "AFC"], correct: 2 }, { q: "Stój domowy?", options: ["Niebiesko-biały", "Czerwony", "Zielony"], correct: 0 }, { q: "Rok Złota Igrzysk Azji?", options: ["1994", "2002", "2010"], correct: 0 } ],
                videos: ["Uzbekistan - pierwsze eliminacje", "Katar highlights", "Uzbekistan vs Urugwaj", "Uzbekistan vs Egipt"]
            },
            polonia: {
                name: "POLSKA", stats: { titulos: "1 Złoto Olimpijskie", copas: "9" },
                facts: [ "Trzecie miejsce na Mistrzostwach Świata w 1974 i 1982 r.", "Lewandowski to najlepszy strzelec w historii.", "Złoto olimpijskie w Monachium w 1972 r." ],
                trivia: [ { q: "Najlepszy strzelec?", options: ["Milik", "Boniek", "Lewandowski"], correct: 2 }, { q: "Najlepsze miejsce na MŚ?", options: ["Wicemistrz", "Trzecie miejsce", "Ćwierćfinał"], correct: 1 }, { q: "Przydomek?", options: ["Orły", "Niedźwiedzie", "Lwy"], correct: 0 }, { q: "Kolor stroju?", options: ["Niebieski", "Biało-czerwony", "Zielony"], correct: 1 }, { q: "Rok Złota Olimpijskiego?", options: ["1972", "1980", "1996"], correct: 0 } ],
                videos: ["Japonia vs Polska", "Lewandowski vs Arabia", "Meksyk vs Polska", "Reprezentacja Polski"]
            },
            jamaica: {
                name: "JAMAJKA", stats: { titulos: "6 Pucharów Karaibów", copas: "1" },
                facts: [ "Ich jedyny mundial to Francja 1998.", "Dwukrotni finaliści Złotego Pucharu CONCACAF.", "Silna rywalizacja z USA i Meksykiem." ],
                trivia: [ { q: "Przydomek?", options: ["Reggae Boyz", "Calypso", "Karaiby"], correct: 0 }, { q: "Jedyny mundial?", options: ["1994", "1998", "2002"], correct: 1 }, { q: "Konfederacja?", options: ["CONMEBOL", "UEFA", "CONCACAF"], correct: 2 }, { q: "Kolory koszulki?", options: ["Żółto-zielono-czarne", "Czerwono-białe", "Niebieskie"], correct: 0 }, { q: "Najlepsze miejsce Gold Cup?", options: ["Trzecie", "Finał", "Mistrzostwo"], correct: 1 } ],
                videos: ["Jamajka vs Bermudy", "Jamajka vs Wenezuela 2024", "Jamajka vs Meksyk 2017", "Jamajka vs Curacao"]
            }
        }
    },
    ar: {
        ui: {
            splash_subtitle: "تجربة كأس العالم 2026", btn_start: "بدء المسح", btn_manual: "دليل المستخدم", back_home: "← العودة للرئيسية", manual_title: "دليل المستخدم", manual_desc: "اتبع هذه الخطوات للاستمتاع بتجربة KICKSCAN - كأس العالم 2026.", step1_title: "<span class='text-green-500'>1.</span> بدء المسح", step1_desc: "اضغط على 'بدء المسح' في الشاشة الرئيسية واسمح بالوصول إلى الكاميرا.", step2_title: "<span class='text-green-500'>2.</span> مسح الشعارات", step2_desc: "ابحث عن شعارات الدول المشاركة ووجه الكاميرا نحوها لعرض الواقع المعزز.", step3_title: "<span class='text-green-500'>3.</span> التفاعل", step3_desc: "استخدم الأزرار الجانبية لجعل الشخصية تركض، تركل، أو ترقص.", step4_title: "<span class='text-green-500'>4.</span> استكشاف المعلومات", step4_desc: "اسحب الشريط السفلي لأعلى لرؤية إحصائيات الفريق، معلومات شيقة، واختبار المعلومات.", step5_title: "<span class='text-green-500'>5.</span> الأرشيف التاريخي", step5_desc: "في القائمة السفلية، اضغط على أيقونة الفيديو للدخول للمعرض. يمكنك إضافة فلاتر للفيديو.", anim_dance: "رقص", anim_kick: "ركل", anim_run: "ركض", btn_confetti: "قصاصات", scan_guide: "وجه الكاميرا نحو الشعار", tab_stats: "إحصائيات", tab_facts: "معلومات شيقة", tab_trivia: "اختبار", stat_titles_label: "ألقاب", stat_cups_label: "كؤوس عالم", score_label: "النتيجة", question_label: "سؤال", back_gallery: "← رجوع", gallery_title: "الأرشيف التاريخي", watch_video: "مشاهدة الفيديو", back_hl: "← المعرض", hl_edit: "تعديل الفيديو", filter_normal: "عادي", filter_blur: "ضبابي", filter_pixel: "بكسل", filter_thermal: "حراري", filter_color: "لون", filter_pastel: "باستيل", filter_intense: "قوي"
        },
        countries: {
            mexico: {
                name: "المكسيك", stats: { titulos: "1 قارات / 11 ذهبية", copas: "17" },
                facts: [ "ملعب أزتيكا هو الوحيد في العالم الذي استضاف نهائيين لكأس العالم.", "المكسيك هي أول دولة تستضيف كأس العالم مرتين.", "المنتخب المكسيكي هو الأكثر مشاركة في كأس العالم دون الفوز بها." ],
                trivia: [ { q: "الهدّاف التاريخي؟", options: ["هوغو سانشيز", "تشيتشاريتو", "بورغيتي"], correct: 1 }, { q: "متى فازوا بالذهب الأولمبي؟", options: ["2008", "2016", "2012"], correct: 2 }, { q: "لقب الفريق؟", options: ["إل تري", "الأزتيك", "الخضر"], correct: 0 }, { q: "أول لاعب شارك في 5 بطولات؟", options: ["رافا ماركيز", "توتا كارباخال", "أوتشوا"], correct: 1 }, { q: "خصم 'لم تكن ركلة جزاء'؟", options: ["الأرجنتين", "هولندا", "ألمانيا"], correct: 1 } ],
                videos: ["هولندا ضد المكسيك، البرازيل 2014", "ردود فعل مذهلة لأوتشوا", "ضربة الفول السوداني", "إيمو ضد البانكس"]
            },
            colombia: {
                name: "كولومبيا", stats: { titulos: "1 كوبا أمريكا", copas: "6" },
                facts: [ "الهدف 'الأولمبي' الوحيد في تاريخ كأس العالم سجله ماركوس كول.", "فاز جيمس رودريغيز بالحذاء الذهبي في البرازيل 2014.", "وصل منتخب 1994 إلى كأس العالم بسلسلة 30 مباراة بدون هزيمة." ],
                trivia: [ { q: "من هو 'إل تيغري'؟", options: ["فالكاو", "جيمس", "فالديراما"], correct: 0 }, { q: "الحذاء الذهبي 2014؟", options: ["كوادرادو", "باكا", "جيمس رودريغيز"], correct: 2 }, { q: "لون القميص الأساسي؟", options: ["أحمر", "أزرق", "أصفر"], correct: 2 }, { q: "أيقونة الشعر المجعد؟", options: ["هيغيتا", "فالديراما", "أسبريا"], correct: 1 }, { q: "سنة الفوز بكوبا أمريكا؟", options: ["2001", "2011", "1990"], correct: 0 } ],
                videos: ["7 أهداف لجيمس رودريغيز", "كولومبيا ضد أستراليا", "أهداف كولومبيا في كأس العالم 2014", "تدريبات منتخب كولومبيا"]
            },
            irlanda: {
                name: "أيرلندا", stats: { titulos: "-", copas: "3" },
                facts: [ "في إيطاليا 90، وصلوا إلى ربع النهائي دون الفوز بأي مباراة.", "جماهير 'الجيش الأخضر' مشهورة بالبهجة.", "يُعتبر جاك تشارلتون بطلاً قومياً." ],
                trivia: [ { q: "لون القميص الأساسي؟", options: ["أخضر", "أبيض", "برتقالي"], correct: 0 }, { q: "أسطورة مانشستر يونايتد؟", options: ["روبي كين", "روي كين", "داف"], correct: 1 }, { q: "الرمز على الشعار؟", options: ["القيثارة", "نفل", "صليب"], correct: 1 }, { q: "لقب الفريق؟", options: ["الجيش الأخضر", "الأولاد باللون الأخضر", "السلتيك"], correct: 1 }, { q: "أكبر منافس تاريخي؟", options: ["اسكتلندا", "ويلز", "إنجلترا"], correct: 2 } ],
                videos: ["ملاعب أيرلندا", "الجماهير الأيرلندية", "أفضل الجماهير الأيرلندية في يورو 2016", "معلومات غريبة عن أيرلندا"]
            },
            espana: {
                name: "إسبانيا", stats: { titulos: "1 كأس عالم / 4 يورو", copas: "16" },
                facts: [ "المنتخب الوحيد الذي فاز بثلاث بطولات كبرى متتالية.", "أبطال 2010 بالرغم من خسارة المباراة الأولى.", "أسلوب 'التيكي تاكا' أحدث ثورة في كرة القدم." ],
                trivia: [ { q: "مسجل هدف نهائي 2010؟", options: ["توريس", "فيا", "إنييستا"], correct: 2 }, { q: "لقب الفريق؟", options: ["الغضب", "لاروخا", "الثيران"], correct: 1 }, { q: "القائد الذي رفع الكأس؟", options: ["كاسياس", "بويول", "تشافي"], correct: 0 }, { q: "أسلوب اللعب الشهير؟", options: ["الكاتيناتشيو", "التيكي تاكا", "جوغو بونيتو"], correct: 1 }, { q: "كم عدد ألقاب اليورو لديهم؟", options: ["2", "3", "4"], correct: 2 } ],
                videos: ["إسبانيا ضد هولندا، نهائي 2010", "أفضل أهداف إسبانيا", "هدف إنييستا ضد هولندا", "كل شيء عن إسبانيا"]
            },
            corea: {
                name: "كوريا الجنوبية", stats: { titulos: "2 كأس آسيا", copas: "11" },
                facts: [ "أكثر المنتخبات الآسيوية مشاركة متتالية.", "وصلوا إلى نصف النهائي عام 2002.", "جماهير 'الشياطين الحمر' مشهورة بهتافاتها الحماسية." ],
                trivia: [ { q: "نجم توتنهام؟", options: ["بارك جي سونغ", "سون هيونغ مين", "كيم مين جاي"], correct: 1 }, { q: "لقب الجماهير؟", options: ["الشياطين الحمر", "النمور", "المحاربون"], correct: 0 }, { q: "سنة كأس العالم في كوريا واليابان؟", options: ["1998", "2006", "2002"], correct: 2 }, { q: "لون الزي الأساسي؟", options: ["أبيض", "أحمر", "أزرق"], correct: 1 }, { q: "من أقصوا في 2018؟", options: ["البرازيل", "ألمانيا", "المكسيك"], correct: 1 } ],
                videos: ["تطور الزي", "كوريا ضد بوليفيا", "كوريا تصنع التاريخ في 2022", "المكسيك ضد كوريا"]
            },
            japon: {
                name: "اليابان", stats: { titulos: "4 كأس آسيا", copas: "7" },
                facts: [ "يُعرفون باسم 'الساموراي الأزرق'.", "مستوحى من أنمي 'الكابتن تسوباسا'.", "مشهورون بتنظيف غرف الملابس والملاعب." ],
                trivia: [ { q: "لقب الفريق؟", options: ["الساموراي الأزرق", "الشمس المشرقة", "النينجا"], correct: 0 }, { q: "أنمي كرة القدم الشهير؟", options: ["دراغون بول", "الكابتن تسوباسا", "ناروتو"], correct: 1 }, { q: "أكبر منافس آسيوي؟", options: ["الصين", "كوريا الجنوبية", "أستراليا"], correct: 1 }, { q: "هل فازوا بكأس العالم؟", options: ["نعم", "لا", "تقريبًا"], correct: 1 }, { q: "لون القميص؟", options: ["أحمر", "أبيض", "أزرق"], correct: 2 } ],
                videos: ["اليابان ضد ألمانيا 2022", "مشاركات كأس العالم", "تطور الأنمي", "اليابان ضد كرواتيا 2022"]
            },
            uruguay: {
                name: "أوروغواي", stats: { titulos: "2 كأس عالم / 15 كوبا", copas: "14" },
                facts: [ "أول أبطال للعالم في عام 1930.", "أبطال 'الماراكانا' عام 1950.", "مشهورون بـ 'لا غارا تشاروا'." ],
                trivia: [ { q: "لقب الفريق؟", options: ["لا سيليستي", "لوس أنديس", "الشمس"], correct: 0 }, { q: "الهدّاف التاريخي؟", options: ["كافاني", "فورلان", "لويس سواريز"], correct: 2 }, { q: "من هزموا في الماراكانا؟", options: ["الأرجنتين", "البرازيل", "إيطاليا"], correct: 1 }, { q: "كم عدد كؤوس العالم التي فازوا بها؟", options: ["1", "2", "3"], correct: 1 }, { q: "الحيوان الموجود على شعارهم؟", options: ["شمس", "لا يوجد شعار", "أسد"], correct: 1 } ],
                videos: ["أوروغواي ضد جمهورية الدومينيكان", "أوروغواي إلى قطر 2022", "ملخص أوروغواي ضد غانا", "أوروغواي ضد غانا ركلات الترجيح"]
            },
            tunez: {
                name: "تونس", stats: { titulos: "1 كأس أمم أفريقيا", copas: "6" },
                facts: [ "أول فريق أفريقي يفوز بمباراة في كأس العالم (1978).", "تأهلوا لـ 6 بطولات كأس عالم.", "يحتوي شعارهم على نسر." ],
                trivia: [ { q: "لقب الفريق؟", options: ["الأسود", "الفراعنة", "نسور قرطاج"], correct: 2 }, { q: "سنة الفوز بكأس أفريقيا؟", options: ["2004", "1998", "2010"], correct: 0 }, { q: "لون الزي؟", options: ["أخضر", "أبيض/أحمر", "أصفر"], correct: 1 }, { q: "القارة؟", options: ["آسيا", "أفريقيا", "أوروبا"], correct: 1 }, { q: "آخر كأس عالم شاركوا فيه؟", options: ["2014", "2018", "2022"], correct: 2 } ],
                videos: ["الأرجنتين ضد تونس 1996", "تونس ضد فرنسا 2022", "بلجيكا ضد تونس 2018", "المكسيك ضد تونس 1978"]
            },
            sudafrica: {
                name: "جنوب أفريقيا", stats: { titulos: "1 كأس أمم أفريقيا", copas: "3" },
                facts: [ "الدولة الأفريقية الوحيدة التي استضافت كأس العالم.", "الهدف الأول في عام 2010 سجله تشابالالا.", "فازوا بكأس أمم أفريقيا عام 1996 كدولة مضيفة." ],
                trivia: [ { q: "اللقب؟", options: ["بافانا بافانا", "النسور الخارقة", "النجوم"], correct: 0 }, { q: "كأس العالم التي استضافوها؟", options: ["2006", "2010", "2014"], correct: 1 }, { q: "الهدف الأول في 2010؟", options: ["بينار", "مكارثي", "تشابالالا"], correct: 2 }, { q: "تميمة 2010؟", options: ["فوليكو", "زاكومي", "بيكيه"], correct: 1 }, { q: "آلة موسيقية شهيرة؟", options: ["طبل", "فوفوزيلا", "ماراكاس"], correct: 1 } ],
                videos: ["صوت الفوفوزيلا", "احتفال الماكارينا", "إعلان بيبسي 2010", "ملخص جنوب أفريقيا 2010"]
            },
            uzbekistan: {
                name: "أوزبكستان", stats: { titulos: "1 ذهبية آسيوية", copas: "0" },
                facts: [ "الميدالية الذهبية في دورة الألعاب الآسيوية 1994.", "قوة شبابية صاعدة في آسيا الوسطى.", "ينتمون إلى الاتحاد الآسيوي." ],
                trivia: [ { q: "اللقب؟", options: ["الذئاب البيضاء", "التنانين", "النمور"], correct: 0 }, { q: "هل لعبوا في كأس العالم؟", options: ["نعم", "لا", "مرة واحدة"], correct: 1 }, { q: "الاتحاد؟", options: ["UEFA", "CAF", "AFC"], correct: 2 }, { q: "الزي الأساسي؟", options: ["أزرق/أبيض", "أحمر", "أخضر"], correct: 0 }, { q: "سنة الذهبية الآسيوية؟", options: ["1994", "2002", "2010"], correct: 0 } ],
                videos: ["أوزبكستان تصفيات كأس العالم الأولى", "ملخص قطر", "أوزبكستان ضد أوروغواي", "أوزبكستان ضد مصر"]
            },
            polonia: {
                name: "بولندا", stats: { titulos: "1 ذهبية أولمبية", copas: "9" },
                facts: [ "المركز الثالث في كأس العالم 1974 و 1982.", "ليفاندوفسكي هو الهدّاف التاريخي.", "ذهبية أولمبية في ميونخ 1972." ],
                trivia: [ { q: "الهدّاف التاريخي؟", options: ["ميليك", "بونييك", "ليفاندوفسكي"], correct: 2 }, { q: "أفضل مركز في كأس العالم؟", options: ["الوصيف", "الثالث", "ربع النهائي"], correct: 1 }, { q: "اللقب؟", options: ["النسور", "الدببة", "الأسود"], correct: 0 }, { q: "لون الزي؟", options: ["أزرق", "أبيض/أحمر", "أخضر"], correct: 1 }, { q: "سنة الذهبية الأولمبية؟", options: ["1972", "1980", "1996"], correct: 0 } ],
                videos: ["اليابان ضد بولندا", "ليفاندوفسكي ضد السعودية", "المكسيك ضد بولندا", "المنتخب البولندي"]
            },
            jamaica: {
                name: "جامايكا", stats: { titulos: "6 كأس الكاريبي", copas: "1" },
                facts: [ "كأس العالم الوحيد لهم كان فرنسا 1998.", "وصيف الكأس الذهبية مرتين.", "منافسة قوية مع الولايات المتحدة والمكسيك." ],
                trivia: [ { q: "اللقب؟", options: ["ريغي بويز", "كاليبسو", "الكاريبيون"], correct: 0 }, { q: "كأس العالم الوحيد؟", options: ["1994", "1998", "2002"], correct: 1 }, { q: "الاتحاد؟", options: ["CONMEBOL", "UEFA", "CONCACAF"], correct: 2 }, { q: "ألوان القميص؟", options: ["أصفر/أخضر/أسود", "أحمر/أبيض", "أزرق"], correct: 0 }, { q: "أفضل مركز في الكأس الذهبية؟", options: ["الثالث", "الوصيف", "البطل"], correct: 1 } ],
                videos: ["جامايكا ضد برمودا", "جامايكا ضد فنزويلا 2024", "جامايكا ضد المكسيك 2017", "جامايكا ضد كوراساو"]
            }
        }
    }
};