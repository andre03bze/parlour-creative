/** Spanish copy for case studies, keyed by slug. Long-form text and image descriptions only; short shared labels
 * (disciplines, sectors, places, credit roles) live in the shared dictionary (src/i18n/es/content.ts).
 * `alts` follow collectImages() order in ./localize.ts; a length mismatch falls back to English rather than misaligning. */
export interface CaseEs {
  tagline?: string;
  headline?: string;
  challenge?: string;
  approach?: { position?: string; express?: string; perform?: string; enableSales?: string };
  story?: string[];
  whatChanged?: string[];
  services?: string[];
  sourceNote?: string;
  videoTitle?: string;
  captions?: string[];
  alts?: string[];
}

export const esCases: Record<string, CaseEs> = {
 "rogers-sports-media": {
  "story": [
   "Parlour trabajó con el Comité Creativo Ejecutivo en cada elemento de este complejo proyecto: desde la conceptualización y los renders 3D hasta la ejecución y la construcción, incluidas grandes instalaciones de video, AV y AR, y el diseño ambiental, técnico y de iluminación."
  ],
  "alts": [
   "Estudio de Sportsnet con un gran muro con el logotipo de Sportsnet y un escritorio sobre un piso reflectante",
   "Estudio de Sportsnet con un escritorio curvo, paneles de video con los colores de los equipos y un piso reflectante",
   "Estudio con paneles de equipos alrededor de un escritorio curvo y un jugador en el muro de video",
   "Muro de video con un panorama urbano y círculos verde azulado sobre un piso reflectante",
   "Cámara de estudio en primer plano frente al escritorio y los retratos de jugadores",
   "Vista panorámica del estudio con paneles en los colores de los equipos",
   "Estudio iluminado por una cuadrícula de luces de techo, con el escritorio y una cámara",
   "Fotograma de la película del estudio de Rogers Sports & Media"
  ],
  "tagline": "Un hogar propio para Sportsnet y Hockey Night in Canada.",
  "challenge": "Bajo estricta confidencialidad, Rogers Sports & Media contrató a Parlour para crear el entorno desde el cual la producción de Sportsnet y Hockey Night in Canada pudiera pasar a hacerse internamente.",
  "headline": "Un hogar propio para Sportsnet y Hockey Night in Canada."
 },
 "forgestone-capital": {
  "story": [
   "Parlour trabajó junto a los ejecutivos de Forgestone para desarrollar la nueva marca, el sitio web y el material impreso, de modo que la identidad se mantuviera coherente desde la primera reunión hasta el muro de recepción."
  ],
  "alts": [
   "Atrio con costillas de madera, árboles y un canal reflectante dentro del vestíbulo de una torre de cristal",
   "Logotipo de Forgestone Capital en azul marino sobre blanco",
   "Doble página impresa que combina el interior del atrio con el logotipo de Forgestone y la frase “The Way Forward”",
   "Papelería de Forgestone: papel membretado, pluma y tarjetas de presentación en azul marino y blanco",
   "Pantalla de inicio del sitio web de Forgestone Capital sobre una imagen arquitectónica de celosía de cristal",
   "Dos portadas de folleto con fotografía de torres de cristal y el logotipo de Forgestone",
   "Sitio web de Forgestone en una tableta y un teléfono, con una cuadrícula de proyectos seleccionados",
   "Logotipo de Forgestone en un muro de recepción de listones de madera sobre un mostrador blanco",
   "Playera y gorra azul marino de Forgestone con el logotipo"
  ],
  "tagline": "Una identidad atemporal para una empresa de capital moderna.",
  "challenge": "Forgestone es una empresa de capital moderna que lleva nuevas ideas al mercado. Necesitaba una identidad y un logotipo que elevaran a la firma y resistieran el paso del tiempo.",
  "headline": "Una identidad atemporal para una empresa de capital moderna."
 },
 "the-hub-at-30-bay": {
  "story": [
   "Esa visión se convirtió en The HUB: una identidad, una sala de ventas, un sitio web y un folleto, todo construido en torno a una sola idea: conectar en todos los niveles."
  ],
  "alts": [
   "Interior de la sala de ventas con techo industrial expuesto, una mesa con la maqueta de la torre y asientos",
   "Doble página de folleto con una fotografía de una torre de fachada en tonos dorados",
   "Doble página de folleto en escala de grises con el texto “Connect on every level” y la CN Tower",
   "Sitio web largo de HUB con paneles “Connect on every level”",
   "Sitio web de planos de HUB mostrado en una tableta y un teléfono",
   "Render en escala de grises de la torre entre los edificios de Toronto, con la CN Tower y líneas geométricas",
   "Sala de ventas con un letrero iluminado “The HUB 30 Bay” en un espacio industrial abierto"
  ],
  "tagline": "Una marca de talla mundial para una de las torres más esperadas de Toronto.",
  "challenge": "Oxford Properties contrató a Parlour para desarrollar una marca de talla mundial para uno de los edificios nuevos más emocionantes de Toronto, diseñado por Rogers Stirk Harbour + Partners y ubicado en Bay y Harbour Streets.",
  "headline": "Una marca de talla mundial para una de las torres más esperadas de Toronto."
 },
 "aquamiel-tequila": {
  "story": [
   "El agua de miel se volvió el ícono y aguamiel el nombre, lo que llevó a la marca en una dirección visual distinta a la de los tequilas tradicionales. Una firma dorada en cursiva libre se convirtió en el centro de la identidad, presente en la fotografía, el cine, un sitio web, folletos y eventos."
  ],
  "alts": [
   "Botella transparente de Aguamiel sobre una roca costera, con el mar y dos islotes al fondo",
   "Banner de Aguamiel Tequila con el logotipo de firma dorada y un surfista sobre una roca",
   "Botella de Aguamiel entre copas y un cuenco de madera sobre una mesa de bar",
   "Botella transparente de Aguamiel sobre fondo blanco",
   "Banner de Aguamiel con las manos de una mujer en su cabello junto al logotipo",
   "Mujer en la playa sosteniendo una botella de Aguamiel hacia el oleaje",
   "Banner de Aguamiel con una mujer de vestido blanco de pie junto al mar",
   "Botella de Aguamiel junto a un cráneo de animal blanqueado sobre arena clara",
   "Monitor de escritorio con el sitio web de Aguamiel y una silueta al atardecer",
   "Monitor de escritorio con una página interna del sitio web de Aguamiel",
   "Doble página de folleto titulada “The Product” con barricas y una botella",
   "Doble página de folleto titulada “Flavour profile” con botellas",
   "Logotipo de Aguamiel sobre una vista aérea del oleaje en la arena"
  ],
  "tagline": "Agua de miel y una firma dorada, en una categoría que grita.",
  "challenge": "Se le planteó a Parlour el reto de crear una identidad de marca que llamara la atención en el mundo, extremadamente competitivo, del tequila.",
  "headline": "Agua de miel y una firma dorada, en una categoría que grita."
 },
 "cbc-news-2019-federal-election-coverage": {
  "story": [
   "El equipo de resultados necesitaba desglosar las cifras con tecnología de realidad aumentada. Parlour diseñó un entorno de transmisión interactivo para cumplir con todos estos retos: un piso de video y varios pilares al estilo del Parlamento que trabajan junto con el video de transmisión y una iluminación innovadora para lograr un set profundamente interactivo."
  ],
  "alts": [
   "Estudio de elecciones de CBC con un mapa rojo en el piso de video y pilares con retratos al fondo",
   "Set electoral con un escritorio de panel alrededor de un piso de video que muestra un mapa de Canadá en colores",
   "Vista al aire de un gráfico de conteo de escaños con el umbral de “posible mayoría” de 170 escaños sobre el piso",
   "Estudio electoral amplio con pilares al estilo del Parlamento y un mapa en el piso en naranja y azul",
   "Presentador junto a un gráfico del Parlamento con la proyección de escaños liberales",
   "Mapa electoral provincial de los distritos del área metropolitana de Toronto sobre el piso de video",
   "Presentador de pie sobre un gráfico de barras de porcentaje de votos en el piso de video",
   "Panelistas en el escritorio con el piso de mapa en colores al fondo",
   "Zona de asientos del estudio con mesas de cristal frente a los pilares iluminados"
  ],
  "tagline": "Una noche electoral nacional: personal, interactiva y transparente.",
  "challenge": "Parlour tuvo el gusto de trabajar con creativos y ejecutivos de CBC en la transmisión de las elecciones federales de 2019. El mandato era un entorno personalizado, interactivo y transparente, en el que los espectadores se sintieran parte de un acontecimiento nacional.",
  "headline": "Una noche electoral nacional: personal, interactiva y transparente."
 },
 "blue-jays-budweiser": {
  "story": [
   "El proyecto extendió un piso de concreto para alojar el nuevo entorno y sumó monitores y múltiples instalaciones de video, incluso una zona de bateo para los aficionados. Pero la idea que lo sostuvo fue la vista: una línea de visión perfecta hacia el campo."
  ],
  "alts": [
   "Escritorio de transmisión de Sportsnet en el estudio del Rogers Centre, con vista al campo de béisbol",
   "Vista amplia del estudio de Sportsnet con una cámara, el escritorio y un panel de Budweiser a la derecha",
   "Escritorio curvo de Sportsnet junto a un muro de video con un jugador de los Blue Jays",
   "Estudio con una cámara en primer plano que mira, a través del escritorio, hacia el diamante de béisbol",
   "Tres locutores sentados en el escritorio de Sportsnet con el estadio detrás",
   "Pantalla de video de Budweiser Zero junto a una vitrina de los Blue Jays con camisetas y bates"
  ],
  "tagline": "Un estudio construido con el mejor asiento de la casa.",
  "challenge": "Como parte de la evolución de 2023 del Rogers Centre, Parlour recibió el encargo de diseñar y construir un nuevo estudio, versátil y variado, para la cobertura de los Blue Jays en Sportsnet.",
  "headline": "Un estudio construido con el mejor asiento de la casa."
 },
 "avenue-park": {
  "story": [
   "Parlour construyó la identidad de Avenue & Park y el marketing que la acompaña: una campaña “What if”, un sitio web, renders y materiales de venta que ponen los interiores y el piano en el centro de la historia."
  ],
  "alts": [
   "Render de una terraza con sillones, jardineras y flores rosadas frente a un edificio de revestimiento oscuro",
   "Doble página de folleto con el lettering “What if” junto a un render de una sala",
   "Render de la fachada del edificio Avenue & Park con balcones de cristal",
   "Pantalla de inicio del sitio web de Avenue & Park sobre una sala oscura con piano, desde 1.5 millones de dólares",
   "Páginas de contenido del folleto en blanco y negro con grandes títulos espaciados",
   "Anuncio impreso “The best, for the best” con una imagen de cocina y el logotipo de Stafford",
   "Tres pantallas de teléfono con el sitio web de Avenue & Park",
   "Render de una sala con un piano de cola sobre el titular “What if”",
   "Doble página de folleto con el lettering “What if” junto a una sala-comedor luminosa"
  ],
  "tagline": "Donde el lujo se encuentra con la ubicación.",
  "challenge": "Un proyecto de Stafford Developments que de verdad es donde el lujo se encuentra con la ubicación, y todo gira en torno a la visión.",
  "headline": "Donde el lujo se encuentra con la ubicación."
 },
 "sportsnet": {
  "story": [
   "Para elevar la imagen del servicio especializado y ayudarlo a convertirse en la guía definitiva de las últimas noticias deportivas, Parlour desarrolló y construyó cinco espacios nuevos y versátiles, con materiales y tecnología de vanguardia en un diseño contemporáneo, brillante y audaz, inspirado en el mundo de ciencia ficción de la película Tron."
  ],
  "alts": [
   "Estudio de Sportsnet con piso reflectante, un escritorio azul y un muro de video",
   "Escritorio de Sportsnet con un panel gráfico rojo frente a un set de cristal azul",
   "Detalle de un muro de set con paneles de cristal azul",
   "Muro de círculos concéntricos azules y blancos con un logotipo SN 960",
   "Set de Sportsnet con un escritorio SN rojo y azul sobre un piso de cristal iluminado"
  ],
  "tagline": "Cinco espacios nuevos, inspirados en el mundo de Tron.",
  "challenge": "Sportsnet quería reforzar su ventaja competitiva en el entretenimiento deportivo de la televisión canadiense con una renovación importante de su set.",
  "headline": "Cinco espacios nuevos, inspirados en el mundo de Tron."
 },
 "tvo-the-agenda": {
  "story": [
   "Parlour desarrolló una nueva identidad construida en torno a la letra A mayúscula y, en palabras de The Toronto Star, “un set nuevo, inteligente y llamativo”. El set acerca al presentador Steve Paikin a los invitados del estudio: “Ayuda a generar empatía y química si están ahí mismo y puedo mirarlos a los ojos”.",
   "Para llegar a un público más joven, The Agenda también se convirtió en una revista en línea, con tres piezas de 15 a 20 minutos para que los espectadores descubran las novedades un segmento a la vez desde el móvil, con Facebook y Twitter que enlazan a la versión completa en el sitio web de TVO."
  ],
  "alts": [
   "Escenario circular rojo con un escritorio de madera, un muro de libreros y un borde iluminado en azul",
   "Logotipo de The Agenda con Steve Paikin en rojo y gris sobre blanco",
   "Vista amplia del set de The Agenda con piso rojo y borde de escenario iluminado en azul",
   "Acercamiento del logotipo de The Agenda en una pantalla del estudio",
   "El set de The Agenda enmarcado en blanco, con el escenario rojo y aros iluminados",
   "El presentador Steve Paikin sentado en un escritorio de cristal frente al muro con el logotipo de The Agenda"
  ],
  "tagline": "Un rediseño de marca y un set nuevo que acercó al presentador con sus invitados.",
  "challenge": "Con fama de crear entornos televisivos ganadores, a Parlour se le pidió renovar y redefinir la marca del programa de actualidad de TVO, The Agenda.",
  "headline": "Un rediseño de marca y un set nuevo que acercó al presentador con sus invitados."
 },
 "lcbo": {
  "story": [
   "Las campañas fueron memorables para LCBO y las ventas fueron muy buenas."
  ],
  "whatChanged": [
   "Las campañas fueron memorables para LCBO y las ventas fueron muy buenas."
  ],
  "alts": [
   "Dos botellas de whisky con dos vasos y nueces sobre una charola de madera",
   "Páginas impresas inclinadas con recetas de ginebra y cocteles y el retrato de un bartender",
   "Exhibidores en tienda y un banner “Whisky distilled” en una fachada",
   "Tres portadas de folletos de LCBO: vinos chilenos, el arte de la ginebra y “Due south”",
   "Dos fotografías de cocteles martini y negroni con coctelera y rodajas de naranja",
   "Cartel de parada de autobús de un whisky de centeno 100 % con el logotipo de LCBO",
   "Revista abierta de LCBO “Dinner on demand” sobre un fondo azul",
   "Botella de whisky junto a dos cocteles con cerezas sobre una superficie de piedra"
  ],
  "tagline": "Campañas de whisky y ginebra que movieron producto.",
  "challenge": "LCBO quería algo especial para las campañas que promueven sus colecciones de whisky y ginebra. Una relación de largo plazo con la empresa estatal llevó a Parlour a la mesa para presentar formas de llegar a sus diversas audiencias.",
  "headline": "Campañas de whisky y ginebra que movieron producto."
 },
 "alida-tequila": {
  "story": [
   "Parlour diseñó la identidad, el empaque y el mundo editorial que la rodea, desde una línea de 100 % agave hasta una nueva expresión rosada y bebidas listas para tomar en lata."
  ],
  "alts": [
   "Mujer sonriendo detrás de cajas apiladas con el lettering “Alida Tequila” cruzando el encuadre",
   "Logotipo de Alida Tequila en negro sobre blanco",
   "Dos fotografías: una mujer sentada junto a una botella y manos en alto sosteniendo botellas al aire libre",
   "“Lean into life” sobre una copa de coctel con una rodaja de naranja",
   "Mujer de cabello largo caminando de espaldas por un sendero de jardín con una botella",
   "Coctel enlatado de Alida en rosa, fresa y limón",
   "Botella Alida rosé en una página de producto que presenta la nueva expresión",
   "Botella dorada de Alida sobre una tela texturizada, con un detalle de tatuaje y una bandera de México",
   "Vista aérea de un pez koi en aguas poco profundas junto al logotipo de Alida Tequila"
  ],
  "tagline": "Una marca global evolucionada, construida sobre la familia, la celebración y el trabajo duro.",
  "challenge": "Alida es una marca global de tequila evolucionada, construida sobre la familia, la celebración y el trabajo duro, y un nuevo y emocionante experimento.",
  "headline": "Una marca global evolucionada, construida sobre la familia, la celebración y el trabajo duro."
 },
 "muskoka-bay": {
  "story": [
   "Impresos, publicidad, contenido web y social, y una película transmitieron el entorno: afloramientos de granito, bosque de maderas duras y el campo entre ellos."
  ],
  "alts": [
   "Hoyo de golf con bunkers de arena, un afloramiento de granito y altos pinos",
   "Amplia calle del campo bajo la luz otoñal, bordeada por bosque",
   "Folleto de tapa dura color café de Muskoka Bay sobre fondo blanco",
   "Hoyo de golf con un green y un bunker en un bosque otoñal, con un estanque",
   "Doble página de folleto “Discover the secret to every season” con un mosaico de fotos",
   "Hoyo de golf con un afloramiento de granito bajo un cielo azul con nubes",
   "Fotograma de la película de Muskoka Bay Club"
  ],
  "tagline": "Un programa multicanal construido sobre el propio terreno.",
  "challenge": "Parlour se asoció con Muskoka Bay Club para crear un programa de marketing multicanal que celebra la interpretación del arquitecto Doug Carrick de las características naturales del club.",
  "headline": "Un programa multicanal construido sobre el propio terreno."
 },
 "cabin": {
  "story": [
   "La voz se establece desde que comienza la película de lanzamiento: una mujer llega a casa con una chaqueta de cuero y jeans desgastados con intención, arroja las llaves y se acomoda con una copa de vino al ritmo de “In the Midnight Hour”, de Wilson Pickett. Tras un íntimo asado de malvaviscos en interiores, la cámara se aleja hacia las luces de la ciudad.",
   "Desde el logotipo de plantilla hasta el sitio web y los letreros de calle sujetos a árboles reales traídos del norte de Ontario, Cabin se presenta como el lugar donde los hipsters de Queen West de hoy pueden escaparse, colgar el sombrero y relajarse."
  ],
  "alts": [
   "Render de un edificio residencial oscuro de cajas apiladas al atardecer",
   "Doble página de folleto con el edificio entre árboles en un suave fondo verde",
   "Logotipo de CABIN en plantilla, en negro sobre blanco",
   "Doble página de folleto con una cuadrícula de mapa de calles en verde azulado",
   "Escena nocturna de un pop-up de contenedores iluminado, con un letrero de Cabin y personas alrededor de una fogata",
   "Gorra, gorro y un poste indicador de madera con nombres de barrios de Toronto",
   "Pantallas de inicio del sitio web de Cabin con una terraza en la azotea",
   "Doble página de folleto con renders de fachada e interiores",
   "Cartel de Cabin con el horizonte de Toronto en verde azulado",
   "Sitio web de Cabin en una tableta y un teléfono, con el concepto y la arquitectura",
   "Render aéreo del edificio y el horizonte de Toronto al atardecer",
   "Fotograma de la película de lanzamiento de Cabin"
  ],
  "tagline": "Alojamiento moderno en el paisaje urbano.",
  "challenge": "Cabin es el nuevo destino de “modern lodging in the urban landscape”, un proyecto pensado para atraer a un público más joven.",
  "headline": "Alojamiento moderno en el paisaje urbano."
 },
 "psr-brokerage": {
  "story": [
   "La nueva imagen se extendió al entorno de la oficina y al material impreso. Para comunicar un servicio de calidad y una vida urbana de alto nivel, Parlour también construyó una plataforma de gestión de relaciones con clientes, desde un programa de boletines hasta el blog del sitio."
  ],
  "alts": [
   "Sala de juntas moderna con una larga mesa blanca y un mostrador de recepción al fondo",
   "Logotipo de PSR Brokerage con una línea roja sobre blanco",
   "Papelería de PSR con papel membretado, sobres y tarjetas de presentación con bordes rojos",
   "Página completa del sitio web de PSR con paneles de propiedades y un mapa",
   "Cartel de parada de autobús con el texto “We sell real estate” y el logotipo de PSR",
   "Página de nuevos desarrollos del sitio web de PSR en una tableta y un teléfono",
   "Pila de tarjetas de presentación de PSR con bordes rojos",
   "Página completa del sitio web de PSR enmarcada en rojo con propiedades"
  ],
  "tagline": "Una marca fresca y moderna, y un sitio web que trabaja tan duro como los agentes.",
  "challenge": "Parlour trabajó con Private Service Realty para crear una marca nueva, fresca, moderna y bella, y para convertir su presencia digital en un sitio web sólido, acogedor y fácil de usar, con integración a MLS.",
  "headline": "Una marca fresca y moderna, y un sitio web que trabaja tan duro como los agentes."
 },
 "greybrook-magazine": {
  "story": [
   "Es una publicación con visión de futuro sobre innovadores y líderes de opinión de los sectores inmobiliario, tecnológico, de retail, gastronómico y del arte, que documenta la creación y la evolución de comunidades vibrantes. Parlour dio forma a la marca, al diseño editorial y a la fotografía."
  ],
  "alts": [
   "Cuadrícula de portadas de revista en blanco y negro con un símbolo gráfico rojo",
   "Portada de Greybrook Magazine con un símbolo rojo sobre el patrón de una fachada",
   "Doble página de revista “Luxury redefined” con una fotografía de una escena callejera",
   "Doble página de revista con una fotografía de casas iluminadas y tráfico al atardecer",
   "Doble página de revista “Getting it right” con una isla urbana ilustrada a todo color",
   "Doble página de revista con un interior luminoso, una silla y estantería de madera",
   "Doble página de revista “MOCA on the move” con dos hombres frente a un edificio industrial de ladrillo",
   "Doble página de revista “The future of fresh food retailing” con un asado rebanado sobre una tabla",
   "Doble página de revista “Our best self” con un gran mural de un rostro bajo un puente"
  ],
  "tagline": "Un anuario premium sobre los lugares en los que invierte Greybrook.",
  "challenge": "Greybrook Magazine es una publicación anual de estilo de vida, en formato premium, impresa y digital, dirigida a profesionales de alto poder adquisitivo y buena formación. Ofrece análisis detallados y perfiles de los mercados en los que invierte Greybrook, a través de una narración visual contundente y un contenido cuidadosamente seleccionado.",
  "headline": "Un anuario premium sobre los lugares en los que invierte Greybrook."
 },
 "breakfast-television": {
  "story": [
   "El estudio se mudó a un piso más alto, lo que le dio al programa una vista privilegiada de Yonge and Dundas Square."
  ],
  "alts": [
   "Estudio de Breakfast Television con un escritorio curvo de madera, un escenario redondo azul marino y un borde iluminado",
   "Escritorio y monitores de Breakfast Television en un escenario redondo azul marino",
   "Interior del estudio con un escritorio curvo y bancos altos bajo una parrilla de iluminación expuesta",
   "Vista amplia del escenario redondo con la pantalla del logotipo del programa",
   "Sofá blanco curvo en un escenario redondo azul marino con ventanales a la ciudad al fondo",
   "Set de estudio con una barra de madera, un muro geométrico blanco y una pantalla con el texto Cityline",
   "Sofá y sillones en el escenario redondo con la estructura de iluminación del estudio arriba",
   "Muro blanco de acento con una imagen de flores en una pantalla y asientos de sala"
  ],
  "tagline": "Un set en vivo más limpio, más alto y más moderno.",
  "challenge": "Parlour se propuso elevar la marca de Breakfast Television con un espacio sofisticado, limpio y moderno que pudiera atender todas las necesidades de un programa matutino en vivo.",
  "headline": "Un set en vivo más limpio, más alto y más moderno."
 },
 "furze-world-wonders": {
  "story": [
   "Parlour aportó la dirección de arte y creativa y el diseño ambiental de la serie."
  ],
  "alts": [
   "Colin Furze con un muro de herramientas del taller que escupe fuego",
   "Presentador sosteniendo una esfera metálica frente a una pantalla de video con “Press Start”",
   "Hombre conduciendo un pequeño vehículo de madera con forma de caballo y escudo",
   "Set de laboratorio blanco con forma geodésica, bordes luminosos y un traje de astronauta",
   "Cohete rojo y blanco despegando en un parque con una multitud mirando",
   "Banda tocando en un escenario con una llamarada y público en primer plano",
   "Fortaleza flotante de madera con base en forma de boca de tiburón sobre un lago, con un dron encima"
  ],
  "tagline": "Inventos a gran escala, construidos como set para televisión.",
  "challenge": "El excéntrico constructor de YouTube Colin Furze explora las pasiones y los sueños de la gente y los hace realidad con inventos descabellados a gran escala.",
  "headline": "Inventos a gran escala, construidos como set para televisión."
 },
 "346-davenport": {
  "story": [
   "Un logotipo ligero y aireado da paso a la colección, con una invitación dirigida a quienes llevan vidas extraordinarias. Fotografías y renders dramáticos muestran interiores deslumbrantes y paisajes urbanos a través de ventanales de piso a techo.",
   "Una visita a la sala de ventas incluye un libro de vistas de edición limitada y lujosamente elaborado, con fotografías e historias de las personas y los lugares de leyenda local."
  ],
  "alts": [
   "Render de una terraza en la azotea con sillones y el horizonte de Toronto",
   "Logotipo de 346 Davenport con un numeral estilizado",
   "Render de una cocina con isla de mármol y ventanales de piso a techo sobre la ciudad",
   "Dobles páginas abiertas de un libro de vistas con el encabezado “Vision”",
   "Sitio web largo de 346 Davenport con un render de la torre",
   "Dos fotografías de estilo de vida: un picnic en el pasto y bolsas de compras rayadas",
   "Render de la fachada de cristal azul del edificio con terrazas verdes",
   "Sitio web de 346 Davenport en una tableta y un teléfono con “Highlights”"
  ],
  "tagline": "Una vitrina multiplataforma para una dirección codiciada.",
  "challenge": "Para generar deseo por este nuevo proyecto de lujo y su codiciada ubicación, Parlour construyó una vitrina multiplataforma de su arquitectura, su diseño y sus vistas de la ciudad.",
  "headline": "Una vitrina multiplataforma para una dirección codiciada."
 },
 "kingwest-magazine": {
  "story": [
   "Para llegar a un público muy sofisticado, Parlour desarrolló Kingwest Magazine, una publicación semestral distribuida en lugares y eventos estratégicos, y trabajó con destacados talentos canadienses de fotografía y edición en reportajes de moda y producto.",
   "El objetivo era promover el estilo de vida junto con la marca Freed y, a la vez, lograr una publicación autosostenible."
  ],
  "whatChanged": [
   "Autosostenible en su primer año.",
   "Kingwest se convirtió rápidamente en una revista codiciada y sirvió al barrio y a Freed Developments durante cinco años."
  ],
  "alts": [
   "Retrato oscuro de una mujer de cabello largo con una chaqueta de piel clara",
   "Pila de revistas Kingwest sobre un fondo naranja y gris",
   "Doble página de contenido de la revista con dos mujeres sentadas en un muro de piedra",
   "Modelo con una capa verde de pie en una alberca turquesa",
   "Doble página de revista “In living colour” con un retrato en un marco de colores",
   "Doble página de revista “Ten minutes with Karl Lagerfeld”",
   "Doble página de revista con el interior de una casa, un hombre sentado y un muro de máscaras",
   "Dos modelos con vestidos de plumas sobre mármol blanco",
   "Doble página de revista “The fishers of King Street” con un grupo en una sala"
  ],
  "tagline": "Una revista de barrio que se convirtió en un título codiciado.",
  "challenge": "Freed Developments, protagonista de la creación del King West de hoy, quiso afianzar su mensaje de estilo de vida y vincularlo con los atractivos del barrio.",
  "headline": "Una revista de barrio que se convirtió en un título codiciado."
 },
 "sherwood-park": {
  "story": [
   "Desde la identidad y el sitio web hasta los renders, la sala de ventas y los impresos, cada punto de contacto mantuvo la misma voz limpia y moderna."
  ],
  "alts": [
   "Logotipo de Sherwood Park Modern Towns",
   "Render de casas en hilera apiladas por la noche con balcones iluminados",
   "Render de una pareja caminando por un sendero de jardín junto a las casas en hilera",
   "Render aéreo de una manzana de casas en hilera con terrazas en la azotea",
   "Sitio web de Sherwood Park con una hilera de casas",
   "Render de una terraza-lounge en la azotea al atardecer",
   "Sitio web de Sherwood Park en una tableta y un teléfono con logotipos de socios",
   "Render de una hilera de casas con un auto estacionado"
  ],
  "tagline": "Casas modernas en hilera, lanzadas con una marca completa.",
  "challenge": "Otro desarrollo premiado de Modern Town en Toronto. Parlour creó y elaboró la marca Sherwood Park y todo el material de marketing y ventas para su muy esperado lanzamiento.",
  "headline": "Casas modernas en hilera, lanzadas con una marca completa."
 },
 "cbc-the-hour": {
  "story": [
   "Los emblemáticos sillones rojos se inspiraron en la obra de Ellsworth Kelly, con una sensación pintada de alta pigmentación, junto con una sensación de movimiento del piso al techo. Durante ocho temporadas, los canadienses de todo el país sintonizaron el programa para ver qué invitado ocuparía el segundo sillón rojo."
  ],
  "whatChanged": [
   "Premio Gemini a la mejor dirección de arte y diseño de producción en un programa de no ficción.",
   "Ocho temporadas al aire."
  ],
  "alts": [
   "Estudio con sillones rojos en un escenario redondo iluminado, bajo una pantalla de video y cortinas rojas",
   "Estudio amplio con iluminación en capas, cortinas rojas y un escenario redondo",
   "Fotograma de la película del set de CBC The Hour"
  ],
  "tagline": "Dos sillones rojos, ocho temporadas, un premio Gemini.",
  "challenge": "Un diseño ganador de un premio Gemini creó un entorno a la altura del dinamismo del presentador George Stroumboulopoulos.",
  "headline": "Dos sillones rojos, ocho temporadas, un premio Gemini."
 },
 "cbc-news-network": {
  "story": [
   "Después, Parlour creó un set completamente nuevo, con gráficos audaces y brillantes basados en las piezas luminosas de Dan Flavin, y construyó un entorno flotante de plexiglás que continúa durante todos los segmentos al aire y aporta un aire activo y moderno."
  ],
  "alts": [
   "Amplio estudio de noticias con paneles rojos y amarillos, el logotipo de CBC y un escritorio redondo",
   "Mesa de análisis en un escritorio de noticias bajo luces azules y rojas del estudio",
   "Gráfico de transmisión abstracto y audaz en rojo, blanco y azul",
   "Dos paneles gráficos verticales de transmisión con letras de gran tamaño en rojo y dorado",
   "Gráfico de transmisión con letras de circuito azul sobre blanco",
   "Gráfico de transmisión con una explosión de luz roja y grandes letras blancas"
  ],
  "tagline": "The National, de pie en un mundo flotante de plexiglás.",
  "challenge": "CBC buscaba una imagen nueva para The National. Comenzó con el primer paso polémico del formato hacia el siglo XXI: pedirle a Peter Mansbridge que dejara la silla del escritorio y diera las noticias de pie.",
  "headline": "The National, de pie en un mundo flotante de plexiglás."
 },
 "jay-manuel-attitude": {
  "story": [
   "El público quedó maravillado con el diseño teatral del evento, una enorme instalación de video y una pasarela gráfica como telón de fondo de la línea primavera/verano de Manuel."
  ],
  "alts": [
   "Pasarela con un gran fondo de video y público a ambos lados",
   "Collage de looks de pasarela y pantallas de video",
   "Salón de eventos oscuro con una pantalla de video iluminada al final de la pasarela",
   "Fotograma de la película del evento Jay Manuel Attitude"
  ],
  "tagline": "Una pasarela teatral para la evolución de una marca.",
  "challenge": "En colaboración con Jay Manuel y Sears Canada, Parlour creó un entorno dramático y de otro mundo para marcar la evolución de la marca “Attitude” de Jay Manuel.",
  "headline": "Una pasarela teatral para la evolución de una marca."
 },
 "dovercourt-455": {
  "story": [
   "La propiedad cuenta con unidades residenciales magníficas y se ha convertido en la sede de una de las startups tecnológicas en auge de Canadá."
  ],
  "alts": [
   "Render de la entrada del edificio al atardecer",
   "Logotipo de Dovercourt 455",
   "Render aéreo del edificio de noche con la ciudad al fondo",
   "Doble página de folleto con el edificio y un mapa del barrio",
   "Sitio web de Dovercourt 455 con el edificio al atardecer",
   "Render de un baño con regadera de cristal y tina",
   "Sitio web de Dovercourt 455 en una tableta y un teléfono",
   "Render de una terraza en la azotea con sillones y vista a la ciudad al atardecer"
  ],
  "tagline": "Una dirección con estilo, y hogar de una startup tecnológica.",
  "challenge": "Parlour creó una marca e identidad, un sitio web, material promocional y renders arquitectónicos para este nuevo desarrollo inmobiliario en el elegante West End de Toronto.",
  "headline": "Una dirección con estilo, y hogar de una startup tecnológica."
 },
 "the-tree-house": {
  "story": [
   "Parlour creó un conjunto de herramientas de marketing y promoción para contar la historia de este singular desarrollo residencial, desde la sala de ventas y el folleto hasta el sitio web y los renders."
  ],
  "alts": [
   "Render de un edificio escalonado al estilo casa del árbol al atardecer",
   "Logotipo de The Tree House con un símbolo de patrón de píxeles",
   "Render de la fachada del edificio con balcones y árboles",
   "Folleto negro sobre un fondo verde encima de planos",
   "Página de inicio del sitio web de Tree House con el render del edificio",
   "Cuadrícula de dobles páginas de folleto en verde y blanco",
   "Render de un interior tipo loft con sala y comedor",
   "Sitio web de Tree House en una tableta y un teléfono con planos",
   "Render al crepúsculo del edificio en terrazas"
  ],
  "tagline": "Un logotipo, una semilla de concepto y toda una historia a su alrededor.",
  "challenge": "The Tree House se acercó a Parlour con un logotipo y una semilla de concepto. Era todo lo que hacía falta para dar vida a la marca.",
  "headline": "Un logotipo, una semilla de concepto y toda una historia a su alrededor."
 },
 "cityline": {
  "story": [
   "El set se desarrolló en colaboración con Brian Gluckstein e IKEA Canada."
  ],
  "alts": [
   "Amplio set de CityLine con una barra y un muro de acento morado",
   "Cocina y comedor con una columna luminosa y una lámpara colgante",
   "Detalle de un muro de azulejos morados junto a estantes y un sillón de piel",
   "Set de sala con un sofá sobre una plataforma elevada e iluminada",
   "Puerta con un letrero luminoso morado de CityLine",
   "Set de cocina con gabinetes de madera, una barra blanca y decoración redonda en el muro"
  ],
  "tagline": "Un set moderno e inspirador para un programa en vivo de 30 años.",
  "challenge": "CityLine, entonces en su año 30, se acercó a Parlour para crear un entorno moderno e inspirador para el formato en vivo del programa, en el que la presentadora Tracy Moore involucra, entretiene e informa a los espectadores de todo Canadá sobre decoración, comida, moda, salud y belleza.",
  "headline": "Un set moderno e inspirador para un programa en vivo de 30 años."
 },
 "carlyle": {
  "story": [
   "La belleza del sitio está en su sencillez y sus líneas limpias: la amplitud del portafolio de Carlyle, mostrada de una forma simple, limpia y elegante."
  ],
  "alts": [
   "Render de una torre de uso mixto de cristal y ladrillo a nivel de calle al atardecer",
   "Cuadrícula de portafolio del sitio web de Carlyle con Beach Hill Residences, Peter & Richmond y Manors of Mineola",
   "Pie de página del sitio web de Carlyle con un recuadro de Instagram y una escena callejera de Toronto",
   "Fotograma de la película del sitio web de Carlyle"
  ],
  "tagline": "Un portafolio presentado con sencillez y líneas limpias.",
  "challenge": "Parlour colaboró con Carlyle para crear un sitio web adaptable e inmersivo con animación a medida.",
  "headline": "Un portafolio presentado con sencillez y líneas limpias."
 },
 "indspire-awards": {
  "story": [
   "Trabajando con diversos proveedores, los diseños multimedia celebran el asombro y la belleza de los Pueblos Originarios de Canadá."
  ],
  "alts": [
   "Escenario de premios con iluminación geométrica en morado, verde azulado y naranja",
   "Salón amplio con iluminación geométrica de escenario y pantallas de video laterales",
   "Collage del escenario de los premios, el logotipo de Indspire Awards y un gráfico",
   "Fotograma de la película de Indspire Awards"
  ],
  "tagline": "Escenarios audaces y lúdicos para la excelencia indígena.",
  "challenge": "Audaces y lúdicos, los entornos de Parlour reconocen y muestran la cultura y los logros de profesionales y jóvenes indígenas.",
  "headline": "Escenarios audaces y lúdicos para la excelencia indígena."
 },
 "riocan-oakville-place": {
  "story": [
   "Fotografía de naturaleza muerta, impresos, contenido web y social, y un look book en línea acompañaron la temporada."
  ],
  "alts": [
   "Frasco de perfume, bolso con cadena dorada y anillos sobre una suave superficie verde",
   "Sitio web de Oakville Place en una laptop, tabletas y teléfonos",
   "Composición plana de accesorios sobre fondos rosa y azul",
   "Sandalia de tacón, bolso estampado, flor rosa y reloj sobre fondo menta"
  ],
  "tagline": "Ayudando a los compradores a encontrar su estilo propio.",
  "challenge": "Parlour colaboró con RioCan para renovar y lanzar la nueva creatividad de marketing de temporada de Oakville Place, ayudando a los compradores a “Find their Signature Style”.",
  "headline": "Ayudando a los compradores a encontrar su estilo propio."
 },
 "freed-developments": {
  "story": [
   "El resultado es un portafolio impreso, en un rojo característico, que pone en la página los proyectos, los barrios y las personas que están detrás."
  ],
  "alts": [
   "Doble página del look book con el horizonte de Toronto visto a través de un vestíbulo de oficinas",
   "Montaje inclinado de dobles páginas del look book de Freed",
   "Portada roja del look book de Freed",
   "Doble página del look book con un gráfico colorido y un retrato",
   "Doble página del look book con un collage de fachadas comerciales y el retrato de un hombre con sombrero",
   "Doble página del look book con el interior oscuro de un bar y un cuadrado rojo",
   "Doble página del look book con un edificio y el retrato de un hombre",
   "Doble página del look book con un gran render de un desarrollo de uso mixto y la CN Tower"
  ],
  "tagline": "Un look book con lo mejor de Freed.",
  "challenge": "Freed Developments se acercó a Parlour para desarrollar un “look book” con sus mejores proyectos hasta la fecha.",
  "headline": "Un look book con lo mejor de Freed."
 },
 "marilyn-denis-show": {
  "story": [
   "El mobiliario y el arte fueron aportados por Roche Bobois y Art Interiors."
  ],
  "alts": [
   "Isla de cocina con una tabla de picar y un letrero de Marilyn frente a un muro de ladrillo rojo",
   "Estudio amplio con una sala sobre un escenario elevado y muros de ladrillo",
   "Estudio con una columna, una isla de cocina y muros de ladrillo"
  ],
  "tagline": "Un antiguo edificio de CHUM, convertido en sala de estar.",
  "challenge": "Parlour remodeló el antiguo edificio de CHUM para crear la propia sala de estar de Marilyn Denis, un set acogedor para un programa de estilo de vida que recibía con regularidad a invitados del mundo del espectáculo.",
  "headline": "Un antiguo edificio de CHUM, convertido en sala de estar."
 },
 "dsquared": {
  "story": [
   "El exterior se llevó al interior, con imágenes de Toronto y modelos que se revelaban mediante un telón estilo Kabuki."
  ],
  "alts": [
   "Set de pasarela con una gran pantalla de video y filas de asientos",
   "Salón de pasarela con un escenario iluminado en azul y luz cálida",
   "Set de pasarela con una pantalla que muestra el nombre DSquared²"
  ],
  "tagline": "Un “regreso a casa” canadiense para diseñadores y público.",
  "challenge": "En colaboración con Fashion Television, Parlour construyó la visión de un “regreso a casa” canadiense tanto para los diseñadores como para el público.",
  "headline": "Un “regreso a casa” canadiense para diseñadores y público."
 },
 "80-82-birch": {
  "story": [
   "Parlour lideró la marca, el diseño de interiores y la publicidad de este par de casas contemporáneas en Birch Avenue."
  ],
  "alts": [
   "Fachada de una casa en hilera contemporánea con puertas de garaje oscuras y escalones de piedra",
   "Logotipo de 80 82 Birch Avenue Contemporary Homes Summerhill",
   "Sala con una escalera de madera oscura, comedor y sofá gris",
   "Fachada de la casa de Birch Avenue enmarcada en blanco",
   "Cocina con piso en espiga, una isla y una ventana al jardín"
  ],
  "tagline": "Casas contemporáneas, diseñadas y construidas con Roswell Construction.",
  "challenge": "Parlour y Roswell Construction se unieron en un proyecto de diseño y construcción en Summerhill, Toronto.",
  "headline": "Casas contemporáneas, diseñadas y construidas con Roswell Construction."
 },
 "blue-ocean-belize": {
  "tagline": "Cinco desarrollos costeros, un solo sistema de marketing.",
  "headline": "Blue Ocean Belize: el sistema de marketing detrás de un portafolio costero",
  "challenge": "Blue Ocean tenía inventario valioso y sólidas oportunidades de desarrollo. Pero cada proyecto se comercializaba por separado, sin una historia de portafolio clara, con marcas de desarrollo dispares y sin un camino continuo desde la primera mirada de un comprador hasta la consulta y la venta.",
  "approach": {
   "position": "Aclaramos el posicionamiento del portafolio de Blue Ocean y dimos a cada desarrollo un comprador, una historia y una razón de elegirlo propios.",
   "express": "Construimos o reconstruimos las marcas de los desarrollos y sus sistemas de identidad, y produjimos la fotografía, el video y el contenido con dron que los llevan al mercado.",
   "perform": "Operamos medios pagados en Meta y Google, construimos los sitios web y las páginas de aterrizaje, planificamos la generación de leads y configuramos el CRM y el traspaso a ventas para que las consultas lleguen rápido al equipo comercial.",
   "enableSales": "Creamos folletos, materiales de campo, señalética y un kit para corredores colaboradores, y alineamos el marketing con la realidad semanal del equipo de ventas."
  },
  "whatChanged": [
   "Cinco marcas y campañas de desarrollo creadas o reconstruidas bajo una misma historia de portafolio: Laguna Bay, Laguna Rio, Laguna Point, Bonefish Bay y Laguna Point Estates.",
   "Más de 120 horas de producción y 14 videos terminados en un solo periodo de producción.",
   "Dos paquetes de contenido listos para campaña.",
   "Medios pagados y generación de leads permanentes en Meta y Google."
  ],
  "services": [
   "Posicionamiento de portafolio",
   "Marcas de desarrollo",
   "Contenido y producción",
   "Medios pagados",
   "Sitios web",
   "CRM y habilitación de ventas"
  ],
  "captions": [
   "Fotografía con dron"
  ],
  "alts": [
   "Vista aérea de la costa de San Pedro, en Ambergris Caye, Belice, con el arrecife y el mar abierto al fondo",
   "Una pareja caminando de espaldas por un sendero bordeado de palmeras hacia el mar",
   "Una mujer descansando en una hamaca negra sobre arena blanca junto a una cabaña de techo turquesa",
   "Vista aérea de una laguna y la costa de la isla bajo un cielo parcialmente nublado",
   "Una pareja caminando de la mano por una calle adornada con banderines",
   "Una pareja sentada junta en la proa de una embarcación sobre aguas turquesa",
   "Una pareja sentada en la arena mirando una embarcación sobre aguas turquesa",
   "Una pareja caminando de la mano por una orilla de arena blanca",
   "Una pareja en un columpio de árbol a orillas de una laguna turquesa",
   "Una pareja flotando en aguas claras y poco profundas, sonriéndose",
   "Una pareja brindando en la proa de una embarcación",
   "Aguas turquesa poco profundas y una isla verde y baja bajo un amplio cielo azul"
  ]
 },
 "caves-branch-river-estates": {
  "tagline": "Sé dueño de tu lugar en el corazón salvaje de Belice.",
  "headline": "Caves Branch River Estates: vender el corazón salvaje de Belice",
  "challenge": "La tierra de selva en el interior es más difícil de vender que un frente de playa. Los compradores necesitan una razón para mirar más allá de la costa y una imagen clara de lo que se siente ser dueño de un terreno en la selva.",
  "approach": {
   "position": "Construimos la historia del proyecto en torno a una idea, “Own your place in the wild heart of Belize”, y creamos cuatro colecciones (Riverfront Estates, Nature Reserve, Jungle Estate y Mountain View Jungle) para que cada comprador (río, privacidad, inversión, vistas) encuentre su lote.",
   "express": "Construimos el sitio web de Caves Branch River Estates con solicitud de visitas y captación de consultas.",
   "perform": "Apoyamos el lanzamiento con contenido, campañas en Google y Meta y distribución a través de Offi.",
   "enableSales": "42 lotes con título individual de 0.86 a 1.25 acres, siete de ellos con frente directo al río, desde US$31,500 (Jungle Estate) hasta US$115,500 (Riverfront Estates), tras una entrada con acceso controlado y caminos de acceso pavimentados e internos."
  },
  "whatChanged": [
   "Un sitio web completo, listo para vender, con cuatro colecciones de producto claras y reserva de visitas.",
   "34 de 42 lotes disponibles a septiembre de 2026."
  ],
  "services": [
   "Posicionamiento",
   "Historia de marca",
   "Sitio web",
   "Contenido",
   "Campañas en Google y Meta",
   "Captación de leads",
   "Distribución a través de Offi"
  ],
  "sourceNote": "Fuente: cavesbranchriverestates.com",
  "alts": [
   "Vista aérea de Caves Branch River Estates, Distrito de Cayo, Belice",
   "Vista aérea de Caves Branch River Estates, lotes de selva junto al río Caves Branch, Distrito de Cayo, Belice",
   "Vista aérea del río Caves Branch serpenteando entre el dosel de la selva",
   "Vista aérea de una formación cárstica con cueva en la propiedad de Caves Branch River Estates",
   "Vista aérea de una cresta de selva en Caves Branch River Estates",
   "Vista aérea amplia del río Caves Branch",
   "Vista aérea de Caves Branch River Estates, lotes de selva junto al río Caves Branch",
   "Vista aérea del río Caves Branch serpenteando entre el dosel de la selva",
   "Vista aérea de una formación cárstica con cueva en la propiedad",
   "Vista aérea amplia del río Caves Branch",
   "Vista aérea de una cresta de selva en Caves Branch River Estates"
  ]
 },
 "offi-belize": {
  "tagline": "Posicionar un marketplace inmobiliario nacional.",
  "headline": "Offi Belize: posicionar un marketplace inmobiliario nacional",
  "challenge": "Offi se propuso convertirse en el marketplace inmobiliario central de Belice. Para lograrlo tenía que ganarse a corredurías que ya contaban con sus propios canales y dar a los compradores una razón para buscar primero ahí.",
  "approach": {
   "position": "Definimos el posicionamiento de mercado de Offi y los mensajes de la plataforma para extranjeros residentes, compradores norteamericanos, agentes y desarrolladores.",
   "express": "Construimos el sitio web y la presencia de plataforma de Offi Belize.",
   "perform": "Lideramos la prospección de agentes y corredores y la estrategia de captación de listados, y dimos forma a la expansión hacia rentas.",
   "enableSales": "Diseñamos el modelo de participación de corredurías y produjimos los materiales de venta."
  },
  "services": [
   "Sitio web y presencia de plataforma",
   "Posicionamiento de mercado",
   "Modelo de participación de corredurías",
   "Prospección de agentes y corredores",
   "Materiales de venta"
  ]
 },
 "stelcor-solutions": {
  "tagline": "Comercializar una plataforma técnica de construcción ante la industria del desarrollo.",
  "headline": "STELCOR Solutions: comercializar una plataforma técnica de construcción ante la industria del desarrollo",
  "challenge": "Las soluciones constructivas y de ICF de STELCOR son técnicas. Venderlas implica convencer a desarrolladores, arquitectos, ingenieros y constructores, y a cada uno le importa algo distinto.",
  "approach": {
   "position": "Construimos el posicionamiento corporativo y de producto de STELCOR.",
   "express": "Desarrollamos su marketing de ICF y sus comunicaciones comerciales.",
   "perform": "Desarrollamos la prospección y las alianzas con constructores y desarrolladores, y planificamos la expansión internacional.",
   "enableSales": "Produjimos materiales de venta para un proceso de compra técnico y con múltiples interesados."
  },
  "services": [
   "Posicionamiento corporativo y de producto",
   "Marketing de ICF",
   "Prospección de constructores y desarrolladores",
   "Materiales de venta"
  ]
 },
 "stephen-mater": {
  "tagline": "Un sistema documental para un fundador y atleta de resistencia.",
  "headline": "Stephen Mater: documentar lo que pasa cuando las ideas se encuentran con la realidad",
  "challenge": "Las empresas de Stephen, su carrera como corredor y su mirada sobre Belice se contaban como historias separadas, si es que se contaban. El camino obvio (un influencer de negocios o un canal de fitness) era lo opuesto de quien es.",
  "approach": {
   "position": "A partir del propio documento fundacional de Stephen, Parlour definió el territorio del canal: construir algo difícil mientras se persigue algo difícil, con la regla “las cámaras siguen a la vida; la vida no se reorganiza en torno a la necesidad de contenido”.",
   "express": "Dos puntos de vista (Stephen filma la cercanía, Andre filma la perspectiva) y un lenguaje visual en el que los negocios se observan desde la quietud y la carrera desde el movimiento.",
   "perform": "Un formato de episodio repetible (tesis, mundo, pregunta profunda, prueba, resultado, revelación, siguiente pregunta) construido alrededor de un eje de temporada: Episodio 1, “The Race Does Not Exist”.",
   "enableSales": "Un archivo vivo que registra cada intento, decisión y resultado por fecha e historia: material que gana valor con el tiempo y puede convertirse en un documental de largometraje."
  },
  "services": [
   "Desarrollo de historia",
   "Filmación documental",
   "Sistemas de captura autograbada",
   "Archivo de la historia",
   "Edición, sonido, música y color"
  ],
  "sourceNote": "Canal: (im)possible pursuit, en YouTube. Dirigido por Andre Acosta, director creativo y de estrategia."
 }
};
