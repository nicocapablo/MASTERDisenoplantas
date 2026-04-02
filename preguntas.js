const bancoDePreguntas = [
  {
    "id": 1,
    "tipo": "teoria",
    "texto": "¿Cuál es el objetivo principal de los diagramas en la representación de un proceso industrial?",
    "opciones": [
      "a) Sustituir a los planos arquitectónicos de la planta",
      "b) Identificar todas las necesidades del proceso mediante la representación de operaciones, máquinas y suministros",
      "c) Calcular exclusivamente el presupuesto de ejecución material",
      "d) Definir la jerarquía del personal de la empresa"
    ],
    "correcta": "b",
    "feedback": "Según el documento, el objetivo de estos diagramas es identificar todas las necesidades del proceso industrial [cite: 4].<br>Para ello se representan las operaciones, la maquinaria, los suministros y otros elementos clave del flujo productivo[cite: 4]."
  },
  {
    "id": 2,
    "tipo": "teoria",
    "texto": "¿Cómo se define el Diagrama de Definición de la Actividad (o Balance de Materia)?",
    "opciones": [
      "a) Como una representación detallada de cada tornillo de la maquinaria",
      "b) Como una 'caja negra' que define la actividad en un solo bloque estipulando inputs y outputs",
      "c) Como un plano de distribución de planta con medidas reales",
      "d) Como un diagrama que solo muestra el flujo de personal"
    ],
    "correcta": "b",
    "feedback": "El Diagrama de Definición de la Actividad se define como una 'caja negra' [cite: 9, 75].<br>Su función es definir la actividad global en un solo bloque donde se estipulan las entradas (inputs) y salidas (outputs)[cite: 9, 75]."
  },
  {
    "id": 3,
    "tipo": "teoria",
    "texto": "En un diagrama de actividades, ¿qué elementos se sitúan tradicionalmente en la parte izquierda?",
    "opciones": [
      "a) Los suministros de energía",
      "b) Los productos elaborados y semi-elaborados",
      "c) Las materias productivas (primeras y auxiliares) y las materias domésticas",
      "d) Los residuos y emisiones"
    ],
    "correcta": "c",
    "feedback": "De acuerdo con las convenciones del diagrama de actividades, en la parte izquierda se sitúan las materias productivas [cite: 17].<br>Esto incluye tanto las materias primas y auxiliares como las domésticas (oficina, limpieza, etc.)[cite: 17, 323]."
  },
  {
    "id": 4,
    "tipo": "teoria",
    "texto": "¿Qué información se ubica en la parte inferior de un diagrama de actividades?",
    "opciones": [
      "a) Los suministros de agua y gas",
      "b) Los residuos, las emisiones y las aguas residuales",
      "c) El nombre del ingeniero proyectista",
      "d) La capacidad productiva total"
    ],
    "correcta": "b",
    "feedback": "En la parte inferior del diagrama se sitúan los residuos (industriales y domésticos), las emisiones (humos, ruidos, etc.) y las aguas residuales [cite: 20, 326].<br>Esta ubicación ayuda a visualizar lo que el proceso 'vierte' al entorno o debe ser gestionado como desecho[cite: 20]."
  },
  {
    "id": 5,
    "tipo": "teoria",
    "texto": "¿Cuál es la principal diferencia entre el Diagrama de Bloques y el Diagrama de Flujo?",
    "opciones": [
      "a) El de bloques es cuantitativo y el de flujo es cualitativo",
      "b) El de bloques define el proceso cualitativamente y el de flujo aplica cantidades a esos flujos",
      "c) No hay diferencia, son sinónimos",
      "d) El de flujo solo se usa para procesos químicos"
    ],
    "correcta": "b",
    "feedback": "El diagrama de bloques define el proceso de forma cualitativa, asignando un bloque por proceso [cite: 10, 76].<br>Por el contrario, el diagrama de flujo aplica cantidades (datos cuantitativos) a los flujos definidos en el diagrama de bloques[cite: 12, 78]."
  },
  {
    "id": 6,
    "tipo": "teoria",
    "texto": "¿Qué se entiende por 'Materias Primas' en el contexto del proceso productivo?",
    "opciones": [
      "a) Materiales que intervienen en el proceso pero no forman parte del producto final",
      "b) Aquellas que intervienen en el proceso y forman parte del producto final obtenido",
      "c) Únicamente los alimentos frescos",
      "d) Los materiales de limpieza de las oficinas"
    ],
    "correcta": "b",
    "feedback": "Las materias primas se definen como aquellas que intervienen en el proceso productivo y forman parte del producto final [cite: 22].<br>Incluyen materiales del producto, embalajes, etiquetas, palets de expedición, etc.[cite: 22, 23]."
  },
  {
    "id": 7,
    "tipo": "teoria",
    "texto": "¿Cuál de los siguientes es un ejemplo de 'Materia Auxiliar'?",
    "opciones": [
      "a) El pan de una hamburguesa",
      "b) El aceite de una freidora que no forma parte del producto final",
      "c) El cartón de embalaje",
      "d) El material de oficina"
    ],
    "correcta": "b",
    "feedback": "Las materias auxiliares intervienen en el proceso pero NO forman parte del producto final [cite: 23].<br>Ejemplos típicos son los aceites de fritura en restaurantes o refrigerantes en equipos de frío[cite: 24]."
  },
  {
    "id": 8,
    "tipo": "teoria",
    "texto": "¿Qué caracteriza a los 'Productos Semi-elaborados'?",
    "opciones": [
      "a) Son productos listos para el consumo directo",
      "b) Son materiales de desecho que se venden para reciclar",
      "c) Son productos que aún no son finales y requieren procesos externos adicionales",
      "d) Son materias primas que han caducado"
    ],
    "correcta": "c",
    "feedback": "Los productos semi-elaborados son resultados del proceso que aún no son productos finales para el consumo [cite: 26].<br>Deben recibir otros procesos productivos externos a la actividad para llegar a su estado final[cite: 26]."
  },
  {
    "id": 9,
    "tipo": "teoria",
    "texto": "¿Qué se incluye en el apartado de 'Reciclaje Remunerado'?",
    "opciones": [
      "a) Residuos por los que la empresa debe pagar para su eliminación",
      "b) Productos de rechazo que generan una retribución económica (ej. palets, chatarra)",
      "c) El agua residual de los baños",
      "d) Los humos de la chimenea"
    ],
    "correcta": "b",
    "feedback": "El reciclaje remunerado incluye materiales de desecho que se retribuyen económicamente a la actividad [cite: 27].<br>Suelen incluirse elementos como palets sobrantes, chatarra, papel o vidrio de rechazo[cite: 28]."
  },
  {
    "id": 10,
    "tipo": "teoria",
    "texto": "¿Cómo se define la Potencia Instalada de una planta industrial?",
    "opciones": [
      "a) Es la potencia máxima que admite el contrato con la eléctrica",
      "b) Es la potencia que realmente se consume en un momento dado",
      "c) Es la suma de todas las potencias nominales de las máquinas y previsiones de potencia",
      "d) Es la potencia de pico de la máquina más grande"
    ],
    "correcta": "c",
    "feedback": "La potencia instalada es la suma de todas las potencias nominales de las máquinas instaladas y de las previsiones donde no se conozca la máquina exacta [cite: 29].<br>Viene establecida según los criterios del REBT 2002[cite: 29, 32]."
  },
  {
    "id": 11,
    "tipo": "teoria",
    "texto": "¿Cuál es la diferencia entre potencia nominal y potencia de pico?",
    "opciones": [
      "a) No hay diferencia",
      "b) La nominal es la de funcionamiento normal y la de pico es la de arranque",
      "c) La nominal es la máxima permitida y la de pico la mínima",
      "d) La nominal es la que se contrata y la de pico la que se instala"
    ],
    "correcta": "b",
    "feedback": "La potencia nominal es la de una máquina en condiciones normales de funcionamiento [cite: 30].<br>La potencia de pico es la que consume la máquina específicamente en el momento de arrancar[cite: 30, 33]."
  },
  {
    "id": 12,
    "tipo": "teoria",
    "texto": "¿Qué es la Potencia Requerida o Admisible?",
    "opciones": [
      "a) La potencia instalada dividida por dos",
      "b) La potencia instalada multiplicada por el coeficiente de simultaneidad",
      "c) La potencia que indica el contador de luz",
      "d) El mínimo de potencia que necesita la planta para no pararse"
    ],
    "correcta": "b",
    "feedback": "La potencia requerida o admisible se obtiene multiplicando la potencia instalada por el coeficiente de simultaneidad [cite: 34].<br>Representa la potencia máxima que admite la instalación y viene regulada por el IGA (Interruptor General Alimentación)[cite: 34, 37]."
  },
  {
    "id": 13,
    "tipo": "teoria",
    "texto": "¿Qué interruptor regula la Potencia Contratada?",
    "opciones": [
      "a) El Diferencial",
      "b) El IGA (Interruptor General Alimentación)",
      "c) El ICP (Interruptor Control de Potencia)",
      "d) El magnetotérmico de iluminación"
    ],
    "correcta": "c",
    "feedback": "La potencia contratada es la que se acuerda con la compañía eléctrica [cite: 38].<br>Está regulada por el ICP (Interruptor Control de Potencia), el cual debe estar precintado[cite: 38]."
  },
  {
    "id": 14,
    "tipo": "teoria",
    "texto": "¿Cuál es el estándar de consumo de agua doméstica por persona y día (24h) según el documento?",
    "opciones": [
      "a) 50 litros",
      "b) 100 litros",
      "c) 250 litros",
      "d) 500 litros"
    ],
    "correcta": "c",
    "feedback": "Para vestuarios, oficinas y similares, se establece un consumo estándar de agua doméstica de 250 litros por día (24h) y persona[cite: 54, 56]."
  },
  {
    "id": 15,
    "tipo": "teoria",
    "texto": "¿Qué define a un 'Residuo Municipal' frente a uno industrial?",
    "opciones": [
      "a) Se genera en domicilios, comercios y oficinas y es asimilable a doméstico",
      "b) Siempre es un residuo especial o peligroso",
      "c) Es el residuo que genera exclusivamente la maquinaria pesada",
      "d) Es el residuo que solo recoge la propia empresa"
    ],
    "correcta": "a",
    "feedback": "Los residuos municipales son los generados en domicilios particulares, comercios y oficinas, asimilables a los producidos en dichos lugares [cite: 64].<br>Nunca pueden provenir directamente de la actividad industrial principal[cite: 66]."
  },
  {
    "id": 16,
    "tipo": "teoria",
    "texto": "¿Quién debe realizar la gestión y transporte de los residuos industriales?",
    "opciones": [
      "a) El servicio de limpieza del ayuntamiento obligatoriamente",
      "b) Los propios trabajadores de la fábrica en sus vehículos",
      "c) Una empresa acreditada",
      "d) No requieren gestión especial"
    ],
    "correcta": "c",
    "feedback": "A diferencia de los municipales, la recogida, transporte y gestión de residuos industriales debe realizarla una empresa acreditada[cite: 70]."
  },
  {
    "id": 17,
    "tipo": "teoria",
    "texto": "En un Diagrama de Bloques, ¿se consideran los almacenes como procesos?",
    "opciones": [
      "a) No, solo las transformaciones físicas de la materia",
      "b) Sí, tanto el almacenamiento como los transportes internos se consideran procesos",
      "c) Solo si el almacén es robotizado",
      "d) No, se representan fuera del diagrama"
    ],
    "correcta": "b",
    "feedback": "En el diseño de diagramas industriales, el almacenamiento, los transportes internos, la recepción y la expedición se consideran procesos por derecho propio[cite: 11, 86]."
  },
  {
    "id": 18,
    "tipo": "teoria",
    "texto": "¿Dónde se inicia y dónde finaliza un Diagrama de Bloques?",
    "opciones": [
      "a) Inicia en 'Compra' y finaliza en 'Venta'",
      "b) Inicia en el bloque de 'Recepción' y finaliza en el de 'Expedición'",
      "c) Inicia en 'Producción' y finaliza en 'Almacén'",
      "d) No tiene puntos de inicio o fin definidos"
    ],
    "correcta": "b",
    "feedback": "El diagrama de bloques se inicia formalmente en el bloque de recepción de materias y finaliza en el bloque de expedición del producto[cite: 87]."
  },
  {
    "id": 19,
    "tipo": "teoria",
    "texto": "¿Qué son los 'bloques virtuales' en un diagrama de bloques?",
    "opciones": [
      "a) Máquinas que todavía no se han comprado",
      "b) Procesos como controles de calidad que no requieren maquinaria física fija",
      "c) Simulaciones por ordenador",
      "d) Oficinas de la dirección"
    ],
    "correcta": "b",
    "feedback": "Los bloques pueden ser reales o virtuales [cite: 84].<br>Los virtuales representan procesos como los controles de calidad, que son necesarios pero no implican necesariamente una maquinaria de producción fija[cite: 84]."
  },
  {
    "id": 20,
    "tipo": "teoria",
    "texto": "¿Deben incluirse procesos auxiliares (calderas, compresores) en el Diagrama de Bloques?",
    "opciones": [
      "a) Sí, siempre",
      "b) Solo si consumen más de 50kW",
      "c) No, ya que no forman parte directa del proceso productivo",
      "d) Sí, pero en una página aparte"
    ],
    "correcta": "c",
    "feedback": "No se deben definir procesos auxiliares como calderas, depuradoras o compresores en el diagrama de bloques [cite: 85].<br>El motivo es que estos elementos no forman parte del proceso productivo directo (transformación de la materia)[cite: 85]."
  },
  {
    "id": 21,
    "tipo": "teoria",
    "texto": "¿Cuál es la unidad general utilizada para definir la capacidad productiva?",
    "opciones": [
      "a) Unidades / año",
      "b) Unidades / hora de producción",
      "c) Kilogramos / mes",
      "d) Euros / hora"
    ],
    "correcta": "b",
    "feedback": "Mientras que los inputs/outputs se definen por año, la unidad productiva se define generalmente en: Unidad de trabajo / hora de producción[cite: 21, 327]."
  },
  {
    "id": 22,
    "tipo": "teoria",
    "texto": "¿Qué información debe contener cada máquina en el Diagrama de Maquinaria?",
    "opciones": [
      "a) El precio de compra y el proveedor",
      "b) Solo su nombre",
      "c) Capacidad máxima, capacidad de producción en la actividad y suministros/consumos",
      "d) El nombre del operario asignado"
    ],
    "correcta": "c",
    "feedback": "En el diagrama de maquinaria, cada máquina debe identificar su capacidad máxima, su capacidad real de producción dentro de la actividad y sus suministros o consumos asociados[cite: 13, 80]."
  },
  {
    "id": 23,
    "tipo": "teoria",
    "texto": "En un diagrama de bloques, ¿cómo se recomienda indicar el proceso principal?",
    "opciones": [
      "a) Con un color rojo",
      "b) Con una línea más gruesa",
      "c) Escribiéndolo en mayúsculas",
      "d) Situándolo en el centro exacto de la página"
    ],
    "correcta": "b",
    "feedback": "Para facilitar la lectura del diagrama, se recomienda que el proceso principal se indique de forma diferenciada, por ejemplo, mediante una línea más gruesa[cite: 88]."
  },
  {
    "id": 24,
    "tipo": "teoria",
    "texto": "Si una empresa produce palets de desecho y recibe dinero por ellos, ¿cómo se clasifican en el diagrama?",
    "opciones": [
      "a) Como producto elaborado",
      "b) Como residuo industrial",
      "c) Como reciclaje remunerado",
      "d) Como materia auxiliar"
    ],
    "correcta": "c",
    "feedback": "Los materiales de rechazo que generan una retribución económica se clasifican como reciclaje remunerado [cite: 27].<br>El documento cita explícitamente los palets, la chatarra y el cartón como ejemplos[cite: 28]."
  },
  {
    "id": 25,
    "tipo": "teoria",
    "texto": "¿Qué diagrama aplica la maquinaria requerida a cada bloque o proceso específico?",
    "opciones": [
      "a) Diagrama de Definición de la Actividad",
      "b) Diagrama de Bloques",
      "c) Diagrama de Flujo",
      "d) Diagrama de Maquinaria"
    ],
    "correcta": "d",
    "feedback": "El Diagrama de Maquinaria es el que aplica la maquinaria requerida a cada bloque o proceso definido previamente[cite: 12, 79]."
  }
]
 [
  {
    "id": 26,
    "tipo": "teoria",
    "texto": "En el Diagrama de Definició de l'Activitat, què representa el concepte de 'caixa negra'?",
    "opciones": [
      "a) Un procés on no es coneixen els costos de fabricació",
      "b) La representació de l'activitat com un bloc únic sense entrar en detalls interns",
      "c) Una zona de la fàbrica on no es permet l'accés al personal",
      "d) El magatzem de productes perillosos"
    ],
    "correcta": "b",
    "feedback": "El concepte de 'caixa negra' s'utilitza per definir l'activitat global en un sol bloc.<br>L'objectiu és centrar-se exclusivament en les entrades (inputs) i sortides (outputs) generals."
  },
  {
    "id": 27,
    "tipo": "teoria",
    "texto": "Dins de les entrades d'un diagrama d'activitats, on es classificaria el material d'oficina?",
    "opciones": [
      "a) Matèries primeres",
      "b) Matèries auxiliars",
      "c) Matèries domèstiques",
      "d) Suministraments"
    ],
    "correcta": "c",
    "feedback": "Les matèries domèstiques són aquelles que no formen part del procés productiu directament.<br>Exemples d'això són el material d'oficina i els productes de neteja general."
  },
  {
    "id": 28,
    "tipo": "teoria",
    "texto": "Quina d'aquestes opcions es considera una 'Emissió' segons el diagrama d'activitats?",
    "opciones": [
      "a) L'aigua de neteja de la maquinària",
      "b) Els fums de la combustió i els sorolls o vibracions",
      "c) El cartró sobrant de l'embalatge",
      "d) El producte que surt defectuós de la línia"
    ],
    "correcta": "b",
    "feedback": "Les emissions són sortides no materials o volàtils que es representen a la part inferior del diagrama.<br>Inclouen fums, vapors, gasos, sorolls, vibracions i olors."
  },
  {
    "id": 29,
    "tipo": "teoria",
    "texto": "Quina és la unitat de mesura temporal més habitual per definir les quantitats en un Diagrama de Fluxos?",
    "opciones": [
      "a) Unitats per setmana",
      "b) Quantitat per dia natural",
      "c) Quantitat per any",
      "d) Unitats per torn de treball"
    ],
    "correcta": "c",
    "feedback": "Tot i que es poden utilitzar diverses unitats, el diagrama de fluxos sol aplicar el balanç de matèria referit a un any (unitats/any o kg/any)."
  },
  {
    "id": 30,
    "tipo": "teoria",
    "texto": "Respecte a la potència elèctrica, què és la 'Potència de Pico'?",
    "opciones": [
      "a) La potència mitjana consumida durant un mes",
      "b) La potència que consumeix una màquina en el moment de la seva arrencada",
      "c) La potència màxima que permet el contracte",
      "d) La suma de les potències de tota la il·luminació"
    ],
    "correcta": "b",
    "feedback": "La potència de pico és el valor màxim puntual que consumeix un receptor elèctric.<br>Normalment coincideix amb el moment de l'arrencada de motors o maquinària pesada."
  },
  {
    "id": 31,
    "tipo": "teoria",
    "texto": "Com es defineix el 'Coeficient de Simultaneïtat'?",
    "opciones": [
      "a) El nombre de màquines que funcionen al mateix temps dividit pel total",
      "b) El temps que triga una màquina a produir una unitat",
      "c) La relació entre la potència realment utilitzada i la instal·lada",
      "d) El nombre d'operaris per cada màquina"
    ],
    "correcta": "a",
    "feedback": "El coeficient de simultaneïtat indica quina part de la maquinària total funciona realment de forma simultània.<br>S'utilitza per passar de la Potència Instal·lada a la Potència Requerida."
  },
  {
    "id": 32,
    "tipo": "teoria",
    "texto": "En el càlcul de consums d'aigua, quina quantitat s'assigna per l'ús de dutxes segons els estàndards del document?",
    "opciones": [
      "a) 50 litres / persona / dia",
      "b) 100 litres / persona / dia",
      "c) 250 litres / persona / dia",
      "d) 10 litres / persona / dia"
    ],
    "correcta": "b",
    "feedback": "El document estableix que per a serveis amb dutxes es calcula un consum de 100 litres per persona i dia.<br>Si només són lavabos/oficines sense dutxa, la xifra baixa a 50 litres (per a un total de 250 l/p/d en cicles de 24h)."
  },
  {
    "id": 33,
    "tipo": "teoria",
    "texto": "Quina diferència fonamental hi ha en la gestió dels residus industrials respecte als municipals?",
    "opciones": [
      "a) Els industrials els recull l'ajuntament gratuïtament",
      "b) Els industrials han de ser gestionats obligatòriament per empreses acreditades",
      "c) Els municipals només poden ser líquids",
      "d) No hi ha cap diferència en la normativa"
    ],
    "correcta": "b",
    "feedback": "La gestió dels residus industrials és responsabilitat de l'empresa generadora.<br>Aquesta ha de contractar transportistes i gestors de residus que estiguin degudament acreditats per la Generalitat o l'organisme competent."
  },
  {
    "id": 34,
    "tipo": "teoria",
    "texto": "En un Diagrama de Blocs, com es representen els controls de qualitat si no tenen una màquina fixa?",
    "opciones": [
      "a) No es representen",
      "b) Com a blocs virtuals",
      "c) Dins del bloc de l'oficina",
      "d) Com una nota a peu de pàgina"
    ],
    "correcta": "b",
    "feedback": "Els blocs virtuals s'utilitzen per representar processos necessaris (com el control de qualitat) que no impliquen necessàriament una estació de treball física o maquinària de producció."
  },
  {
    "id": 35,
    "tipo": "teoria",
    "texto": "Què s'entén per 'Capacitat Productiva' en un Diagrama de Màquines?",
    "opciones": [
      "a) El màxim teòric que la màquina pot produir segons el fabricant",
      "b) La quantitat d'unitats que la màquina realment produeix dins d'aquella activitat específica",
      "c) El nombre de peces que caben al magatzem",
      "d) La velocitat de la cinta transportadora"
    ],
    "correcta": "b",
    "feedback": "En el diagrama de màquines es diferencia entre Capacitat Màxima (teòrica) i Capacitat de Producció.<br>Aquesta última és la real que s'exigeix a la màquina segons el disseny del procés actual."
  },
  {
    "id": 36,
    "tipo": "teoria",
    "texto": "Per què no s'inclouen les calderes o els compressors en un Diagrama de Blocs productius?",
    "opciones": [
      "a) Perquè són massa perillosos per dibuixar-los",
      "b) Perquè no formen part de la transformació directa de la matèria",
      "c) Perquè no consumeixen energia",
      "d) Perquè ja es representen al diagrama d'activitats"
    ],
    "correcta": "b",
    "feedback": "El diagrama de blocs se centra en el camí que segueix la matèria fins a convertir-se en producte.<br>Els elements auxiliars com calderes o compressors es consideren subministraments o serveis, no processos de transformació de producte."
  },
  {
    "id": 37,
    "tipo": "teoria",
    "texto": "En el disseny de la planta, quina és la funció de l'IGA (Interruptor General d'Alimentació)?",
    "opciones": [
      "a) Controlar la potència contractada amb la companyia",
      "b) Protegir la instal·lació i regular la Potència Requerida o Admisible",
      "c) Mesurar el consum d'aigua",
      "d) Evitar que els operaris tinguin accidents elèctrics"
    ],
    "correcta": "b",
    "feedback": "L'IGA és l'element que limita la potència màxima que pot suportar la instal·lació dissenyada (Potència Admisible).<br>No s'ha de confondre amb l'ICP, que és el que limita la potència segons el contracte comercial."
  },
  {
    "id": 38,
    "tipo": "teoria",
    "texto": "Si una activitat genera 'Aigües Residuals Industrials', on s'han de situar en el diagrama?",
    "opciones": [
      "a) A la part superior (inputs)",
      "b) A la part esquerra (matèries)",
      "c) A la part inferior (sortides no desitjades)",
      "d) Dins del bloc de l'activitat"
    ],
    "correcta": "c",
    "feedback": "Totes les sortides que requereixen un tractament de residus o abocament (com les aigües residuals) es col·loquen a la part inferior del diagrama d'activitats."
  },
  {
    "id": 39,
    "tipo": "teoria",
    "texto": "Què s'inclou en el concepte de 'Suministraments'?",
    "opciones": [
      "a) L'acer i el plàstic per fabricar",
      "b) L'electricitat, l'aigua, el gas i altres energies necessàries",
      "c) Les caixes de cartró per l'enviament",
      "d) El personal de seguretat"
    ],
    "correcta": "b",
    "feedback": "Els subministraments són les fonts d'energia i recursos bàsics (aigua, gas, electricitat, aire comprimit) que alimenten el procés.<br>Es representen entrant per la part superior del bloc d'activitat."
  },
  {
    "id": 40,
    "tipo": "teoria",
    "texto": "Quin d'aquests elements es considera 'Reciclatge Remunerat'?",
    "opciones": [
      "a) El fum d'una xemeneia",
      "b) La ferralla metàl·lica que es ven a un gestor",
      "c) L'oli de motor gastat que costa diners retirar",
      "d) El producte final venut al client"
    ],
    "correcta": "b",
    "feedback": "El reciclatge remunerat es refereix a residus que tenen un valor de mercat i, per tant, generen un ingrés (o estalvi) en ser retornats al cicle productiu.<br>El document posa l'exemple de la ferralla, el cartró o els palets."
  },
  {
    "id": 41,
    "tipo": "teoria",
    "texto": "En un Diagrama de Blocs, què indica una fletxa que connecta dos blocs?",
    "opciones": [
      "a) El flux de diners entre departaments",
      "b) El transport o moviment de la matèria d'un procés al següent",
      "c) L'ordre jeràrquic dels caps de planta",
      "d) La connexió elèctrica entre màquines"
    ],
    "correcta": "b",
    "feedback": "Les fletxes representen el flux del producte o la matèria.<br>En un disseny industrial, cada fletxa implica sovint un sistema de transport (manual, cinta, carretó, etc.)."
  },
  {
    "id": 42,
    "tipo": "teoria",
    "texto": "Dins de les 'Sortides' (Outputs), quina és la diferència entre Producte Elaborat i Semi-elaborat?",
    "opciones": [
      "a) El semi-elaborat és un residu",
      "b) L'elaborat està llest per a l'expedició final; el semi-elaborat requereix més processos externs",
      "c) El semi-elaborat és més car de fabricar",
      "d) No hi ha diferència, són el mateix"
    ],
    "correcta": "b",
    "feedback": "El producte elaborat és el resultat final de la nostra activitat industrial.<br>El semi-elaborat és un producte que ha de sortir de la nostra planta per rebre més transformacions en una altra empresa."
  },
  {
    "id": 43,
    "tipo": "teoria",
    "texto": "Quin criteri s'utilitza per diferenciar un residu 'Especial' d'un 'No Especial'?",
    "opciones": [
      "a) El pes del residu",
      "b) La seva perillositat, toxicitat o impacte ambiental segons la llista europea (codi LER)",
      "c) Si es pot cremar o no",
      "d) Si és d'una empresa gran o petita"
    ],
    "correcta": "b",
    "feedback": "Els residus industrials es divideixen en especials (perillosos) i no especials.<br>Aquesta classificació determina el tipus de contenidor, transport i tractament final necessari."
  },
  {
    "id": 44,
    "tipo": "teoria",
    "texto": "En el balanç de matèria, què ha de complir-se respecte a les entrades i sortides?",
    "opciones": [
      "a) Les entrades han de ser sempre el doble que les sortides",
      "b) La suma de les masses de les entrades ha de ser igual a la suma de les masses de les sortides",
      "c) Les sortides han de ser sempre més lleugeres que les entrades",
      "d) No cal que tinguin cap relació"
    ],
    "correcta": "b",
    "feedback": "El diagrama de fluxos (o balanç de matèria) es basa en la llei de conservació de la massa.<br>Tot el que entra en el procés ha de sortir d'alguna forma (com a producte, residu o emissió)."
  },
  {
    "id": 45,
    "tipo": "teoria",
    "texto": "Quina de les següents NO és una informació necessària en un Diagrama de Màquines?",
    "opciones": [
      "a) Capacitat de producció",
      "b) Consum elèctric o de gas",
      "c) Nom del proveïdor de la màquina",
      "d) Suministraments necessaris"
    ],
    "correcta": "c",
    "feedback": "Tot i que és informació útil per a la compra, el diagrama de màquines se centra en paràmetres tècnics de funcionament (capacitats i consums), no en dades comercials com el proveïdor."
  },
  {
    "id": 46,
    "tipo": "teoria",
    "texto": "On se situaria l'emissió de 'Olors' en un diagrama d'activitats d'una peixateria industrial?",
    "opciones": [
      "a) A l'esquerra, amb les matèries primeres",
      "b) A la part superior, com a subministrament d'aire",
      "c) A la part inferior, dins de l'apartat d'emissions",
      "d) A la dreta, com a producte semi-elaborat"
    ],
    "correcta": "c",
    "feedback": "Les olors, igual que el soroll o els fums, es consideren emissions ambientals del procés.<br>Es representen sempre sortint per la part inferior del bloc."
  },
  {
    "id": 47,
    "tipo": "teoria",
    "texto": "Què representa la 'Potència Contractada'?",
    "opciones": [
      "a) La potència que la instal·lació pot suportar sense cremar-se",
      "b) El valor de potència pel qual l'empresa paga una quota fixa a la comercialitzadora",
      "c) La suma de totes les bombetes de la fàbrica",
      "d) La potència de la màquina més petita"
    ],
    "correcta": "b",
    "feedback": "La potència contractada és un terme administratiu i comercial.<br>S'ha d'ajustar a la Potència Requerida per no pagar de més ni patir talls de llum (salt de l'ICP)."
  },
  {
    "id": 48,
    "tipo": "teoria",
    "texto": "En un diagrama de blocs d'un restaurant, quin d'aquests seria un bloc de procés real?",
    "opciones": [
      "a) El contracte de lloguer",
      "b) La zona de cocció (fogons/forn)",
      "c) La llista de preus",
      "d) El logotip del local"
    ],
    "correcta": "b",
    "feedback": "La cocció és una transformació física de la matèria (aliment cru a cuinat).<br>Per tant, és un procés real que s'ha d'identificar amb un bloc en el diagrama."
  },
  {
    "id": 49,
    "tipo": "teoria",
    "texto": "Per què es diu que el Diagrama de Blocs és 'qualitatiu'?",
    "opciones": [
      "a) Perquè només defineix quins processos hi ha i en quin ordre, sense donar xifres de massa",
      "b) Perquè serveix per controlar la qualitat dels productes",
      "c) Perquè el dibuixa el departament de qualitat",
      "d) Perquè és millor que el diagrama de fluxos"
    ],
    "correcta": "a",
    "feedback": "Es defineix com a qualitatiu perquè descriu la 'qualitat' o naturalesa de les etapes del procés.<br>Quan hi afegim quantitats (kg/h, m3/any), es converteix en un diagrama quantitatiu o de fluxos."
  },
  {
    "id": 50,
    "tipo": "teoria",
    "texto": "Quina és la seqüència lògica de creació dels diagrames segons el document?",
    "opciones": [
      "a) Màquines -> Fluxos -> Blocs -> Activitat",
      "b) Activitat -> Blocs -> Fluxos -> Màquines",
      "c) Fluxos -> Activitat -> Màquines -> Blocs",
      "d) Es poden fer en qualsevol ordre sense relació"
    ],
    "correcta": "b",
    "feedback": "S'ha d'anar de lo general a lo particular.<br>Primer definim l'activitat (caixa negra), després els passos (blocs), després les quantitats (fluxos) i finalment la tecnologia específica (màquines)."
  }
] 
[
  {
    "id": 51,
    "tipo": "teoria",
    "texto": "Quin és l'objectiu principal de les fitxes de màquines en un projecte industrial?",
    "opciones": [
      "a) Calcular el preu de compra de cada unitat",
      "b) Recollir dades tècniques per disposar d'informació clara, precisa i concentrada per a la implantació",
      "c) Decidir el color de la pintura de la fàbrica",
      "d) Substituir els manuals d'instruccions del fabricant"
    ],
    "correcta": "b",
    "feedback": "Les fitxes de màquines serveixen per analitzar el procés globalment i identificar necessitats d'espai, subministraments i capacitats de forma clara i precisa[cite: 23, 24]."
  },
  {
    "id": 52,
    "tipo": "teoria",
    "texto": "Segons el RD 486/1997, quina és l'alçada mínima general per als locals de treball industrials?",
    "opciones": [
      "a) 2,10 metres",
      "b) 2,50 metres",
      "c) 3,00 metres",
      "d) 4,00 metres"
    ],
    "correcta": "c",
    "feedback": "L'alçada mínima general establerta per la normativa en locals de treball és de 3 metres des del pis al sostre[cite: 36, 72]."
  },
  {
    "id": 53,
    "tipo": "teoria",
    "texto": "En quins casos el RD 486/1997 permet una alçada mínima inferior a l'estàndard industrial?",
    "opciones": [
      "a) En magatzems de productes químics",
      "b) En oficines, despatxos i locals comercials o de serveis",
      "c) En zones on només treballen robots",
      "d) Mai es permet una alçada inferior"
    ],
    "correcta": "b",
    "feedback": "Per a oficines, despatxos i locals del sector serveis o comercial, es permet que l'alçada mínima sigui de 2,5 metres[cite: 37, 72]."
  },
  {
    "id": 54,
    "tipo": "teoria",
    "texto": "Com es defineix l'Espai Propi d'una màquina?",
    "opciones": [
      "a) L'espai on l'operari guarda les seves pertinences",
      "b) L'espai físic que ocupa la màquina per si mateixa",
      "c) L'espai de seguretat al voltant de la màquina",
      "d) El passadís d'accés a la màquina"
    ],
    "correcta": "b",
    "feedback": "L'espai propi és estrictament la superfície física que ocupa el volum de la màquina[cite: 49, 50]."
  },
  {
    "id": 55,
    "tipo": "teoria",
    "texto": "Què s'inclou dins de l'Espai d'Ús Exclusiu d'una màquina?",
    "opciones": [
      "a) El magatzem general de l'empresa",
      "b) Espais per a alimentació, entrades/sortides de producte i espai fix de l'operari",
      "c) Els passadissos per on circulen els carretons elevadors",
      "d) El taller de manteniment extern"
    ],
    "correcta": "b",
    "feedback": "L'espai d'ús exclusiu és aquell espai no propi necessari per al funcionament de la màquina, com les zones de càrrega/descàrrega o el lloc de l'operari[cite: 50, 51]."
  },
  {
    "id": 56,
    "tipo": "teoria",
    "texto": "Quin és l'Espai d'Ús Compartit segons la documentació?",
    "opciones": [
      "a) Una zona on dues màquines estan tocant-se físicament",
      "b) L'espai necessari per maniobres de carretons o manteniment que pot ser compartit amb altres màquines",
      "c) El menjador dels treballadors",
      "d) L'espai destinat a la venda al públic"
    ],
    "correcta": "b",
    "feedback": "L'espai d'ús compartit inclou zones de maniobra (com carretons elevadors) o espais de manteniment que poden solapar-se amb els d'altres màquines[cite: 52, 53, 54]."
  },
  {
    "id": 57,
    "tipo": "teoria",
    "texto": "Quina és la unitat i el format de cotes exigit per a les fitxes de màquines?",
    "opciones": [
      "a) Mil·límetres sense decimals",
      "b) Centímetres amb un decimal",
      "c) Metres amb dos decimals",
      "d) Polzades"
    ],
    "correcta": "c",
    "feedback": "En el sector de la construcció i segons la normativa vigent, les mides s'han de definir en metres amb dos decimals[cite: 64, 75]."
  },
  {
    "id": 58,
    "tipo": "teoria",
    "texto": "Quina informació gràfica bàsica ha de contenir una fitxa de màquina?",
    "opciones": [
      "a) Només una fotografia real de la màquina",
      "b) Un croquis seguint el sistema europeu: Alçat i Planta",
      "c) Un dibuix artístic en perspectiva",
      "d) El logotip de l'empresa fabricant"
    ],
    "correcta": "b",
    "feedback": "La fitxa ha d'incloure un croquis amb les vistes d'Alçat i Planta per definir la implantació[cite: 60, 63]."
  },
  {
    "id": 59,
    "tipo": "teoria",
    "texto": "Segons la FAQ del document, quina és la distància mínima recomanada per a un ús compartit de manteniment?",
    "opciones": [
      "a) 0,50 metres",
      "b) 1,00 metre",
      "c) 2,00 metres",
      "d) 3,00 metres"
    ],
    "correcta": "b",
    "feedback": "Es recomana un mínim d'1 metre perquè una persona de manteniment pugui passar o treballar amb seguretat[cite: 70]."
  },
  {
    "id": 60,
    "tipo": "teoria",
    "texto": "En un banc de treball, quina part es considera 'Espai d'Ús Exclusiu'?",
    "opciones": [
      "a) El taulell de fusta",
      "b) L'espai que ocupa de forma fixa l'operari mentre treballa",
      "c) El calaix de les eines",
      "d) El passadís per arribar al banc"
    ],
    "correcta": "b",
    "feedback": "L'espai que ocupa l'operari de forma fixa davant del banc es considera ús exclusiu, mentre que el banc en sí és l'espai propi[cite: 83]."
  },
  {
    "id": 61,
    "tipo": "teoria",
    "texto": "Com s'ha de gestionar la fitxa de màquina per a l'emmagatzematge (estanteries o palets)?",
    "opciones": [
      "a) Cal fer una fitxa detallada per cada tipus de caixa",
      "b) No cal fer fitxa de màquina, però sí definir-ne l'espai en planta i alçada al diagrama",
      "c) S'ha de demanar la fitxa al fabricant de les estanteries",
      "d) L'emmagatzematge no es representa de cap manera"
    ],
    "correcta": "b",
    "feedback": "En tractar-se d'un element estàtic (no és una màquina pròpiament), n'hi ha prou amb definir el volum ocupat al diagrama de maquinària sense fer fitxa individual[cite: 77]."
  },
  {
    "id": 62,
    "tipo": "teoria",
    "texto": "Quina és l'alçada lliure mínima exigida pel CTE per a zones de circulació (passadissos)?",
    "opciones": [
      "a) 3,00 metres",
      "b) 2,50 metres",
      "c) 2,20 metres",
      "d) 1,90 metres"
    ],
    "correcta": "c",
    "feedback": "El Codi Tècnic de l'Edificació (CTE) estableix una alçada lliure de 2,2 metres com a mínim en zones de circulació[cite: 38]."
  },
  {
    "id": 63,
    "tipo": "teoria",
    "texto": "Respecte a les cintes transportadores, quina opció és correcta segons el document?",
    "opciones": [
      "a) Són obligatòriament màquines independents",
      "b) Es poden considerar com a màquina independent o incorporar-se a la fitxa de la màquina principal",
      "c) No es representen mai per estalviar espai",
      "d) Només es representen si mesuren més de 10 metres"
    ],
    "correcta": "b",
    "feedback": "Totes dues formes d'actuar són correctes segons el cas i la relació funcional amb la màquina[cite: 79, 81]."
  },
  {
    "id": 64,
    "tipo": "teoria",
    "texto": "Quina ràtio de superfície lliure per treballador s'ha de complir en un local de treball?",
    "opciones": [
      "a) 5 m2",
      "b) 2 m2",
      "c) 10 m2",
      "d) 1 m2"
    ],
    "correcta": "b",
    "feedback": "El RD 486/1997 estableix un ràtio de 2 metres quadrats de superfície lliure per cada treballador[cite: 39]."
  },
  {
    "id": 65,
    "tipo": "teoria",
    "texto": "En el càlcul de la superfície lliure, es descompta l'espai de la cadira de treball?",
    "opciones": [
      "a) Sí, sempre",
      "b) No, quan estigui ocupada pel treballador durant la jornada",
      "c) Només si té rodes",
      "d) Només en el sector serveis"
    ],
    "correcta": "b",
    "feedback": "La superfície ocupada per la cadira de treball no es descompta si el treballador l'està utilitzant durant el seu torn[cite: 40]."
  },
  {
    "id": 66,
    "tipo": "teoria",
    "texto": "Què diferencia un 'local de treball' d'un 'lloc de treball' segons la terminologia del RD 486/1997?",
    "opciones": [
      "a) Són sinònims exactes",
      "b) El local és tot l'espai on el treballador desenvolupa l'activitat; el lloc és l'estació específica",
      "c) El local és només per a l'administració",
      "d) El lloc és per als operaris i el local per a les màquines"
    ],
    "correcta": "b",
    "feedback": "El local de treball engloba les àrees on els treballadors desenvolupen habitualment l'activitat, mentre que el lloc es refereix a la posició concreta de treball[cite: 33, 34]."
  },
  {
    "id": 67,
    "tipo": "teoria",
    "texto": "Per què és important representar el posicionament de les entrades de subministraments a la fitxa?",
    "opciones": [
      "a) Per saber de quin color és el cable",
      "b) Per saber exactament fins on s'ha de fer arribar la presa (elèctrica, gas, etc.) en la instal·lació de la planta",
      "c) Perquè ho demana el servei de neteja",
      "d) No és necessari representar-ho"
    ],
    "correcta": "b",
    "feedback": "Identificar el punt d'entrada de subministraments permet dimensionar i dissenyar correctament les xarxes d'energia i fluids fins a la màquina[cite: 65, 66]."
  },
  {
    "id": 68,
    "tipo": "teoria",
    "texto": "Dins de les dades de text d'una fitxa, què s'entén per 'Capacitat Productiva'?",
    "opciones": [
      "a) El màxim que pot fer la màquina si treballa 24 hores",
      "b) La quantitat d'unitats que realment produirà dins de l'activitat específica dissenyada",
      "c) La potència en kW de la màquina",
      "d) El nombre de treballadors que pot allotjar"
    ],
    "correcta": "b",
    "feedback": "La capacitat de producció es refereix al rendiment real que s'exigeix a la màquina en el procés actual[cite: 57]."
  },
  {
    "id": 69,
    "tipo": "teoria",
    "texto": "En el càlcul del volum lliure per treballador, què passa amb l'espai per sobre d'una taula que no arriba al sostre?",
    "opciones": [
      "a) Es considera volum ocupat i es resta totalment",
      "b) Es considera volum lliure amb caràcter general",
      "c) Només es compta si hi ha un prestatge",
      "d) No es té en compte per a cap càlcul"
    ],
    "correcta": "b",
    "feedback": "En el cas de mobiliari que no arriba al sostre, el volum no ocupat que hi ha per sobre es considera volum lliure[cite: 45]."
  },
  {
    "id": 70,
    "tipo": "teoria",
    "texto": "Quina normativa regula els requisits de seguretat d'utilització i habitabilitat dels edificis industrial (no centrada en el treballador)?",
    "opciones": [
      "a) RD 486/1997",
      "b) CTE (Codi Tècnic de l'Edificació)",
      "c) Llei de Prevenció de Riscos Laborals",
      "d) Normativa de l'OIT"
    ],
    "correcta": "b",
    "feedback": "El CTE regula la funcionalitat, seguretat d'utilització i habitabilitat des del punt de vista constructiu de l'edifici[cite: 47, 48]."
  },
  {
    "id": 71,
    "tipo": "teoria",
    "texto": "Què representa una secció o un detall en la part gràfica d'una fitxa?",
    "opciones": [
      "a) Un dibuix de la peça més petita de la màquina",
      "b) Vistes complementàries necessàries per entendre la implantació o alçades crítiques",
      "c) El mapa de transport de la matèria",
      "d) Una imatge del panell de control"
    ],
    "correcta": "b",
    "feedback": "Les seccions i detalls s'utilitzen quan la planta i l'alçat no són suficients per definir la implantació[cite: 63]."
  },
  {
    "id": 72,
    "tipo": "teoria",
    "texto": "En dissenyar l'espai de treball, quins factors s'han de considerar per a unes condicions ergonòmiques acceptables?",
    "opciones": [
      "a) Només el preu de la màquina",
      "b) Postures, moviments, distàncies interpersonals, soroll i qualitat de l'aire",
      "c) Si la màquina és nova o de segona mà",
      "d) L'idioma del manual d'instruccions"
    ],
    "correcta": "b",
    "feedback": "El disseny ha de permetre l'estabilitat i mobilitat del treballador, respectant factors ambientals i psicosocials[cite: 29, 31]."
  },
  {
    "id": 73,
    "tipo": "teoria",
    "texto": "Quina d'aquestes dades NO és imprescindible a la part de text d'una fitxa tècnica de màquina?",
    "opciones": [
      "a) Marca i model",
      "b) Consums energètics",
      "c) Biografia del dissenyador de la màquina",
      "d) Residus i emissions"
    ],
    "correcta": "c",
    "feedback": "La fitxa se centra en dades tècniques operatives i ambientals necessàries per a la implantació[cite: 57]."
  },
  {
    "id": 74,
    "tipo": "teoria",
    "texto": "Segons el CTE, quina és l'alçada lliure mínima en zones d'ús restringit?",
    "opciones": [
      "a) 3,00 metres",
      "b) 2,10 metres",
      "c) 2,50 metres",
      "d) 1,50 metres"
    ],
    "correcta": "b",
    "feedback": "El CTE permet baixar fins als 2,1 metres en zones d'ús restringit per evitar riscos d'impacte[cite: 38]."
  },
  {
    "id": 75,
    "tipo": "teoria",
    "texto": "Quan es considera que un procés requereix diversos blocs o màquines?",
    "opciones": [
      "a) Quan la màquina canvia de color",
      "b) Quan un sol procés productiu necessita el suport de diferents tecnologies o equips",
      "c) Només si les màquines són de fabricants diferents",
      "d) Sempre que hi hagi més d'un operari"
    ],
    "correcta": "b",
    "feedback": "Un procés (com 'Cuinar') pot requerir diverses màquines (com planxa i extractor), i al revés, una màquina pot realitzar diversos processos."
  }
]
[
  {
    "id": 76,
    "tipo": "teoria",
    "texto": "Segons el RD 486/1997, quin és el volum mínim no ocupat que ha de tenir un treballador en un local de treball?",
    "opciones": [
      "a) 5 metres cúbics",
      "b) 10 metres cúbics",
      "c) 15 metres cúbics",
      "d) 20 metres cúbics"
    ],
    "correcta": "b",
    "feedback": "La normativa de seguretat i salut als llocs de treball estableix un mínim de 10 m³ de volum lliure per treballador per garantir condicions ambientals adequades."
  },
  {
    "id": 77,
    "tipo": "teoria",
    "texto": "Quina és la funció d'una 'Secció' en la part gràfica d'una fitxa de màquina?",
    "opciones": [
      "a) Mostrar el preu dels components interns",
      "b) Definir alçades crítiques o detalls que la planta i l'alçat no aclareixen",
      "c) Representar el logotip del fabricant a escala",
      "d) Indicar l'ordre de muntatge de la màquina"
    ],
    "correcta": "b",
    "feedback": "Les seccions s'utilitzen quan les vistes bàsiques (planta i alçat) són insuficients per definir la implantació o quan hi ha alçades complexes que cal detallar."
  },
  {
    "id": 78,
    "tipo": "teoria",
    "texto": "En un diagrama de fluxos, com es calculen les quantitats d'entrades si no es té la dada per any?",
    "opciones": [
      "a) S'inventen segons la capacitat de la màquina",
      "b) Es refereixen a la unitat de treball per hora de producció",
      "c) Es multipliquen els m2 de la planta pel nombre d'operaris",
      "d) Es deixen en blanc fins al final de l'obra"
    ],
    "correcta": "b",
    "feedback": "Si no es defineix anualment, s'utilitza la unitat de treball / hora de producció per quantificar els inputs i outputs en el diagrama de fluxos."
  },
  {
    "id": 79,
    "tipo": "teoria",
    "texto": "Què representa l'Espai Propi d'una màquina?",
    "opciones": [
      "a) L'espai on l'operari es mou",
      "b) La superfície física ocupada pel volum de la màquina",
      "c) La zona on es guarda el producte acabat",
      "d) El radi de gir de la porta d'accés a la nau"
    ],
    "correcta": "b",
    "feedback": "L'espai propi és estrictament la projecció en planta del volum físic que ocupa la màquina."
  },
  {
    "id": 80,
    "tipo": "teoria",
    "texto": "Respecte als passadissos en una planta industrial, quina alçada lliure mínima s'exigeix en zones de circulació?",
    "opciones": [
      "a) 2,10 metres",
      "b) 2,20 metres",
      "c) 2,50 metres",
      "d) 3,00 metres"
    ],
    "correcta": "b",
    "feedback": "Segons el Codi Tècnic de l'Edificació (CTE), les zones de circulació han de tenir una alçada lliure mínima de 2,20 metres per seguretat."
  },
  {
    "id": 81,
    "tipo": "teoria",
    "texto": "Si una màquina genera 'Vibracions', en quin apartat de la fitxa s'ha d'indicar?",
    "opciones": [
      "a) Suministraments",
      "b) Capacitat productiva",
      "c) Residus i emissions",
      "d) Espai d'ús compartit"
    ],
    "correcta": "c",
    "feedback": "Les vibracions, igual que el soroll o els fums, es consideren emissions ambientals derivades del funcionament de la màquina."
  },
  {
    "id": 82,
    "tipo": "teoria",
    "texto": "Quin d'aquests elements NO es considera 'Materia Prima'?",
    "opciones": [
      "a) L'envàs de plàstic d'un producte",
      "b) El cartró d'embalatge",
      "c) El detergent per netejar la nau",
      "d) L'etiqueta del producte"
    ],
    "correcta": "c",
    "feedback": "El detergent de neteja general és una 'matèria domèstica'.<br>Les matèries primeres inclouen tot el que acaba formant part del producte o del seu enviament (envàs, etiquetes, palets)."
  },
  {
    "id": 83,
    "tipo": "teoria",
    "texto": "Què determina el 'Coeficient de Simultaneïtat' en la instal·lació elèctrica?",
    "opciones": [
      "a) El preu del kW/h",
      "b) El percentatge de màquines que funcionen alhora respecte al total instal·lat",
      "c) Quantes vegades s'encén la llum al dia",
      "d) El temps de descans dels operaris"
    ],
    "correcta": "b",
    "feedback": "És un factor (entre 0 i 1) que s'aplica a la potència instal·lada per obtenir la potència requerida, ja que rarament totes les màquines funcionen al 100% simultàniament."
  },
  {
    "id": 84,
    "tipo": "teoria",
    "texto": "En un banc d'eines (banc de treball), quina part es dibuixa en línia discontínua a la fitxa?",
    "opciones": [
      "a) Les eines",
      "b) L'espai que ocupa l'operari",
      "c) Les potes de la taula",
      "d) El sostre de la nau"
    ],
    "correcta": "b",
    "feedback": "L'espai d'ús exclusiu de l'operari es representa amb una línia discontínua per indicar que és un espai necessari però no un volum físic fix de la màquina."
  },
  {
    "id": 85,
    "tipo": "teoria",
    "texto": "Quin document legal regula l'alçada de 3 metres per a locals industrials?",
    "opciones": [
      "a) Llei d'Indústria",
      "b) RD 486/1997 sobre seguretat i salut en llocs de treball",
      "c) Estatut dels treballadors",
      "d) Reglament Electrotècnic de Baixa Tensió"
    ],
    "correcta": "b",
    "feedback": "Aquest Reial Decret és la norma de referència per a les dimensions mínimes i condicions ambientals dels centres de treball."
  },
  {
    "id": 86,
    "tipo": "teoria",
    "texto": "Com s'ha de representar un magatzem de matèries primeres en la distribució en planta?",
    "opciones": [
      "a) Cal fer una fitxa tècnica detallada",
      "b) Només s'indica el volum que ocupa en planta i en alçada al diagrama de maquinària",
      "c) Es representa com una 'caixa negra'",
      "d) S'ha de dibuixar cada estanteria individualment amb el seu preu"
    ],
    "correcta": "b",
    "feedback": "L'emmagatzematge és estàtic; no requereix fitxa de màquina com un equip actiu, però el seu volum és essencial per a la implantació física."
  },
  {
    "id": 87,
    "tipo": "teoria",
    "texto": "Si s'utilitza una transpaleta per moure productes, quin espai s'ha de preveure?",
    "opciones": [
      "a) Espai propi",
      "b) Espai d'ús compartit per maniobra",
      "c) Espai d'ús exclusiu",
      "d) No cal preveure espai perquè es mou"
    ],
    "correcta": "b",
    "feedback": "L'espai necessari per a les maniobres dels equips de transport intern (com carretons o transpaletes) es considera espai d'ús compartit."
  },
  {
    "id": 88,
    "tipo": "teoria",
    "texto": "Quina dada és fonamental per calcular la Potència Contractada?",
   "opciones": [
    "a) La potència de pico",
    "b) La potència instal·lada multiplicada pel coeficient de simultaneïtat (Potència Requerida)",
    "c) La suma de les factures de l'any passat",
    "d) El nombre de bombetes de la oficina"
  ],
  "correcta": "b",
  "feedback": "La potència contractada s'ha d'ajustar a la Potència Requerida (o Admissible) per assegurar el funcionament sense sobrecostos ni talls."
},
{
    "id": 89,
    "tipo": "teoria",
    "texto": "En el Diagrama de Blocs, s'inclouen els despatxos de direcció?",
    "opciones": [
      "a) Sí, són un procés fonamental",
      "b) Només si estan dins de la nau",
      "c) No, ja que no formen part de la transformació física del producte",
      "d) Es representen amb un bloc de color blau"
    ],
    "correcta": "c",
    "feedback": "El diagrama de blocs és un diagrama productiu; només inclou processos de transformació, transport intern i emmagatzematge."
  },
  {
    "id": 90,
    "tipo": "teoria",
    "texto": "Què vol dir que una entrada de subministrament és 'Pneumàtica'?",
    "opciones": [
      "a) Que funciona amb aigua",
      "b) Que requereix aire comprimit",
      "c) Que utilitza gas natural",
      "d) Que es mou amb pneumàtics de goma"
    ],
    "correcta": "b",
    "feedback": "Els subministraments pneumàtics es refereixen a la instal·lació d'aire comprimit, necessària per a moltes màquines industrials automatitzades."
  },
  {
    "id": 91,
    "tipo": "teoria",
    "texto": "A quina distància mínima s'ha de preveure un espai de manteniment compartit entre dues màquines?",
    "opciones": [
      "a) 0,50 metres",
      "b) 1,00 metre",
      "c) 1,50 metres",
      "d) 2,00 metres"
    ],
    "correcta": "b",
    "feedback": "Es recomana 1 metre com a distància de seguretat perquè un tècnic pugui treballar o circular entre equips."
  },
  {
    "id": 92,
    "tipo": "teoria",
    "texto": "Dins de les aigües residuals, quina diferència hi ha entre 'Industrials' i 'Domèstiques'?",
    "opciones": [
      "a) No hi ha diferència",
      "b) Les domèstiques provenen de lavabos/dutxes; les industrials provenen directament del procés productiu",
      "c) Les industrials són més netes",
      "d) Les domèstiques es poden llançar pel terrat"
    ],
    "correcta": "b",
    "feedback": "Aquesta distinció és clau per al disseny de la xarxa de clavegueram i el possible tractament previ (depuradora) que requereixin les industrials."
  },
  {
    "id": 93,
    "tipo": "teoria",
    "texto": "Quin diagrama serveix per identificar quantes unitats d'una matèria prima es necessiten per fabricar un producte?",
    "opciones": [
      "a) Diagrama d'Activitats",
      "b) Diagrama de Fluxos (Balanç de matèria)",
      "c) Diagrama de Màquines",
      "d) Plànol arquitectònic"
    ],
    "correcta": "b",
    "feedback": "El diagrama de fluxos és l'únic que quantifica les entrades i sortides (kg/any, unitats/h) del procés."
  },
  {
    "id": 94,
    "tipo": "teoria",
    "texto": "Segons el CTE, l'alçada mínima en zones d'ús restringit (com un altell de manteniment) pot ser de:",
    "opciones": [
      "a) 1,50 metres",
      "b) 2,10 metres",
      "c) 2,50 metres",
      "d) 3,00 metres"
    ],
    "correcta": "b",
    "feedback": "En zones on l'accés és limitat a personal de manteniment o ús molt esporàdic, el CTE permet reduir l'alçada lliure fins a 2,10 m."
  },
  {
    "id": 95,
    "tipo": "teoria",
    "texto": "Per què s'ha de demanar la 'Potència de Pico' a la fitxa d'una màquina?",
    "opciones": [
      "a) Per calcular el preu de la màquina",
      "b) Per dimensionar correctament les proteccions i cables per al moment de l'arrencada",
      "c) Perquè és la potència que consumeix quan està apagada",
      "d) Per saber quant soroll fa"
    ],
    "correcta": "b",
    "feedback": "L'arrencada de motors genera puntes de consum molt superiors a la nominal; si no es preveuen, les proteccions podrien saltar constantment."
  },
  {
    "id": 96,
    "tipo": "teoria",
    "texto": "On s'ubiquen els 'Residus Municipals' (oficines, menjador) en el diagrama d'activitats?",
    "opciones": [
      "a) A la dreta (sortides)",
      "b) A la part superior (subministraments)",
      "c) A la part inferior (residus i emissions)",
      "d) A l'esquerra (matèries)"
    ],
    "correcta": "c",
    "feedback": "Tots els residus, ja siguin derivats de l'activitat principal o de l'activitat domèstica de l'empresa, es col·loquen a la part inferior."
  },
  {
    "id": 97,
    "tipo": "teoria",
    "texto": "Quina és la unitat de mesura per a les cotes en una fitxa de màquina?",
    "opciones": [
      "a) Mil·límetres",
      "b) Centímetres",
      "c) Metres",
      "d) Quilòmetres"
    ],
    "correcta": "c",
    "feedback": "En projectes de plantes industrials i arquitectura, l'estàndard és utilitzar metres amb dos decimals (ex: 1,50 m)."
  },
  {
    "id": 98,
    "tipo": "teoria",
    "texto": "Què indica un bloc de línia més gruixuda en un diagrama de blocs?",
    "opciones": [
      "a) Que la màquina és molt pesant",
      "b) Que és el procés principal de l'activitat",
      "c) Que el procés encara no s'ha definit",
      "d) Que és un procés perillós"
    ],
    "correcta": "b",
    "feedback": "S'utilitza el gruix de línia per diferenciar visualment el camí crític o procés principal de la planta dels secundaris."
  },
  {
    "id": 99,
    "tipo": "teoria",
    "texto": "Respecte a la recollida de residus, quina és la funció de l'Agència de Residus de Catalunya (ARC)?",
    "opciones": [
      "a) Recollir la brossa amb els seus camions",
      "b) Acreditar i controlar els gestors i transportistes de residus industrials",
      "c) Pagar les factures de llum de la fàbrica",
      "d) Dissenyar els diagrames de blocs"
    ],
    "correcta": "b",
    "feedback": "L'ARC és l'organisme que regula i certifica que els residus industrials es gestionen correctament per empreses autoritzades."
  },
  {
    "id": 100,
    "tipo": "teoria",
    "texto": "Quin és el darrer diagrama que s'ha de realitzar en la fase de disseny gràfic del procés?",
    "opciones": [
      "a) Diagrama d'Activitats",
      "b) Diagrama de Blocs",
      "c) Diagrama de Fluxos",
      "d) Diagrama de Màquines"
    ],
    "correcta": "d",
    "feedback": "El diagrama de màquines és el més detallat i l'últim, ja que necessita que prèviament s'hagi definit què es fa (blocs) i quant es produeix (fluxos)."
  }
]
[
  {
    "id": 101,
    "tipo": "teoria",
    "texto": "Quin és l'objecte principal de la distribució en planta (layout)?",
    "opciones": [
      "a) Reduir el nombre de treballadors de la planta",
      "b) L'ordenació racional dels elements involucrats en els sistemes de producció",
      "c) Triar el color de les parets de la nau industrial",
      "d) Augmentar el preu de venda del producte final"
    ],
    "correcta": "b",
    "feedback": "La distribució en planta busca una ordenació racional que satisfaci les necessitats i requeriments de l'empresa[cite: 25, 26]."
  },
  {
    "id": 102,
    "tipo": "teoria",
    "texto": "Dins dels objectius de la distribució en planta, què significa 'Integrar el conjunt'?",
    "opciones": [
      "a) Posar totes les màquines en una mateixa habitació tancada",
      "b) Aconseguir el millor compromís entre operaris, materials, maquinària i altres factors",
      "c) Que tots els treballadors portin el mateix uniforme",
      "d) Utilitzar només un tipus de material per a tota la producció"
    ],
    "correcta": "b",
    "feedback": "La millor distribució és la que integra tots els factors productius de manera que s'obtingui el millor compromís entre ells[cite: 31]."
  },
  {
    "id": 103,
    "tipo": "teoria",
    "texto": "Quin principi diu que és millor la distribució que permet que el material recorri el camí més curt?",
    "opciones": [
      "a) Principi d'integració",
      "b) Principi d'ús de l'espai",
      "c) Minimitzar la distància recorreguda",
      "d) Principi de flexibilitat"
    ],
    "correcta": "c",
    "feedback": "En igualtat de condicions, sempre és preferible la distribució que minimitzi la distància entre operacions[cite: 32]."
  },
  {
    "id": 104,
    "tipo": "teoria",
    "texto": "Com s'aconsegueix l'economia en l'ús de l'espai segons els objectius de la DP?",
    "opciones": [
      "a) Deixant espais buits per si plou",
      "b) Utilitzant efectivament tot l'espai disponible tant en vertical com en horitzontal (espai cúbic)",
      "c) Reduint la mida de les màquines",
      "d) Eliminant els passadissos de circulació"
    ],
    "correcta": "b",
    "feedback": "L'objectiu és utilitzar eficientment l'espai cúbic disponible a la planta[cite: 34]."
  },
  {
    "id": 105,
    "tipo": "teoria",
    "texto": "Quina característica té una distribució en planta considerada 'flexible'?",
    "opciones": [
      "a) Que es pot doblegar",
      "b) Que pot ser ajustada o reordenada amb pocs costos o inconvenients",
      "c) Que no té parets fixes",
      "d) Que només serveix per a un tipus de producte"
    ],
    "correcta": "b",
    "feedback": "La flexibilitat implica la capacitat de reordenar la distribució de manera econòmica davant canvis en el futur[cite: 36]."
  },
  {
    "id": 106,
    "tipo": "teoria",
    "texto": "Quina és la diferència principal entre el 'Plànol d'Implantació de Maquinària' i el 'Plànol d'Implantació Productiu'?",
    "opciones": [
      "a) Són exactament el mateix plànol",
      "b) El de maquinària només mostra les màquines; el productiu inclou a més magatzems, molls i control de qualitat",
      "c) El productiu només inclou les oficines",
      "d) El de maquinària es fa a mà i el productiu amb ordinador"
    ],
    "correcta": "b",
    "feedback": "El plànol productiu és més complet, ja que afegeix al de maquinària elements com zones de càrrega/descàrrega, magatzems i maquinària auxiliar[cite: 38, 39]."
  },
  {
    "id": 107,
    "tipo": "teoria",
    "texto": "Quin plànol defineix la totalitat de la planta, incloent vestuaris, oficines i zona comercial?",
    "opciones": [
      "a) Plànol de Recorregut de les Matèries",
      "b) Plànol d'Implantació de Maquinària",
      "c) Plànol de Distribució en Planta",
      "d) Plànol d'Implantació en el Solar"
    ],
    "correcta": "c",
    "feedback": "El Plànol de Distribució en Planta és el que recull tota l'edificació, incloent les zones no productives com vestuaris o oficines[cite: 40]."
  },
  {
    "id": 108,
    "tipo": "teoria",
    "texto": "Què ha d'incloure obligatòriament el 'Plànol d'Implantació en el Solar'?",
    "opciones": [
      "a) El nom de tots els treballadors",
      "b) Els paràmetres urbanístics i la seva justificació",
      "c) El color de la façana",
      "d) La llista de la compra de la cafeteria"
    ],
    "correcta": "b",
    "feedback": "Aquest plànol situa l'edifici en la parcel·la i ha de complir i justificar la normativa urbanística vigent[cite: 42]."
  },
  {
    "id": 109,
    "tipo": "teoria",
    "texto": "Segons el CTE, com s'han de definir les cotes en els plànols d'implantació?",
    "opciones": [
      "a) En mil·límetres sense decimals",
      "b) En metres amb dos decimals",
      "c) En centímetres",
      "d) En polzades"
    ],
    "correcta": "b",
    "feedback": "La normativa (CTE) exigeix que les cotes es defineixin en metres i amb dos decimals[cite: 20, 368]."
  },
  {
    "id": 110,
    "tipo": "teoria",
    "texto": "En quina situació s'utilitza una 'Disposició per Procés o Funció'?",
    "opciones": [
      "a) Quan es fabrica un sol producte en grans quantitats",
      "b) Quan la maquinària és costosa i difícil de moure, i es fabriquen productes similars però no idèntics",
      "c) Quan només hi ha un operari a tota la fàbrica",
      "d) Quan el procés és totalment automàtic i no requereix supervisió"
    ],
    "correcta": "b",
    "feedback": "Aquesta disposició agrupa màquines similars i és ideal per a demandes intermitents de productes variats[cite: 48, 49]."
  },
  {
    "id": 111,
    "tipo": "teoria",
    "texto": "Quin és un inconvenient principal de la 'Disposició per Producte o en Línia'?",
    "opciones": [
      "a) Requereix operaris molt qualificats en totes les màquines",
      "b) Existeix el perill que es pari tota la línia si una sola màquina s'avaria",
      "c) La inversió en màquines és molt baixa",
      "d) El temps total de producció és molt llarg"
    ],
    "correcta": "b",
    "feedback": "En una línia de producció en cadena, una avaria en un punt crític pot aturar tot el procés successiu[cite: 73]."
  },
  {
    "id": 112,
    "tipo": "teoria",
    "texto": "Què defineix una 'Cèl·lula de Tecnologia'?",
    "opciones": [
      "a) Una agrupació de màquines i treballadors que fan una successió d'operacions per a una família d'ítems",
      "b) Una màquina que funciona sola sense operari",
      "c) Un laboratori d'R+D separat de la producció",
      "d) Una xarxa de wifi d'alta velocitat per a la planta"
    ],
    "correcta": "a",
    "feedback": "La fabricació cel·lular busca l'eficiència de la línia i la flexibilitat del procés agrupant famílies de productes[cite: 77, 79]."
  },
  {
    "id": 113,
    "tipo": "teoria",
    "texto": "Quina recomanació gràfica s'indica per als plànols d'implantació de maquinària?",
    "opciones": [
      "a) Utilitzar colors brillants per a tot",
      "b) Evitar el color groc",
      "c) Dibuixar només en blanc i negre",
      "d) Pintar el fons de color blau"
    ],
    "correcta": "b",
    "feedback": "S'ha d'evitar el color groc en els plànols perquè sol visualitzar-se malament o confondre's amb altres elements[cite: 94]."
  },
  {
    "id": 114,
    "tipo": "teoria",
    "texto": "Quina és la pendent màxima permesa per al treball en un moll de càrrega segons la norma UNE-EN 1398:2010?",
    "opciones": [
      "a) 5%",
      "b) 10%",
      "c) 12,5%",
      "d) 15%"
    ],
    "correcta": "c",
    "feedback": "La norma estableix que el pendent de treball no ha de superar el 12,5% per garantir la seguretat en la càrrega i descàrrega[cite: 104]."
  },
  {
    "id": 115,
    "tipo": "teoria",
    "texto": "Quina distància es requereix entre dues estacions (centres de portes) de càrrega i descàrrega?",
    "opciones": [
      "a) 2750 mm",
      "b) 3000 mm",
      "c) 4000 mm",
      "d) 5000 mm"
    ],
    "correcta": "c",
    "feedback": "Es requereix una distància de 4000 mm entre els centres de les portes per permetre maniobres i l'obertura total de les portes dels camions[cite: 107]."
  },
  {
    "id": 116,
    "tipo": "teoria",
    "texto": "Quina distància mínima es requereix des de la meitat de la porta exterior del moll fins a la cantonada de l'edifici?",
    "opciones": [
      "a) 1500 mm",
      "b) 2000 mm",
      "c) 2500 mm",
      "d) 2750 mm"
    ],
    "correcta": "d",
    "feedback": "Per seguretat i espai de maniobra, es fixen 2750 mm des del centre de la porta fins a qualsevol obstacle lateral o paret[cite: 109]."
  },
  {
    "id": 117,
    "tipo": "teoria",
    "texto": "En una 'tremuja de càrrega' (moll en rampa), quina és la longitud de tram recte recomanada per acoblar el vehicle?",
    "opciones": [
      "a) 5 metres",
      "b) 10 metres",
      "c) 18 metres",
      "d) 25 metres"
    ],
    "correcta": "c",
    "feedback": "Es recomana un tram recte de 18 metres abans del tram d'inclinació perquè el camió pugui acoblar-se en línia recta[cite: 117]."
  },
  {
    "id": 118,
    "tipo": "teoria",
    "texto": "Quines són les dimensions estàndard d'un Palet Europeu (Europalet)?",
    "opciones": [
      "a) 1000 x 1200 mm",
      "b) 800 x 1200 mm",
      "c) 800 x 1000 mm",
      "d) 600 x 800 mm"
    ],
    "correcta": "b",
    "feedback": "L'europalet té unes mides estàndard de 800 mm d'amplada per 1200 mm de llargada[cite: 133, 134]."
  },
  {
    "id": 119,
    "tipo": "teoria",
    "texto": "Quin és l'inconvenient principal de les 'Prestatgeries Estàtiques'?",
    "opciones": [
      "a) Són molt cares de mantenir",
      "b) Ocupen molt d'espai en planta ja que necessiten un passadís per cada dues files",
      "c) No permeten utilitzar l'alçada de la nau",
      "d) Són molt inestables"
    ],
    "correcta": "b",
    "feedback": "Tot i que aprofiten l'espai vertical (cúbic), les prestatgeries estàtiques consumeixen molta superfície de planta a causa dels passadissos necessaris[cite: 150]."
  },
  {
    "id": 120,
    "tipo": "teoria",
    "texto": "Quin tipus de carretó és adequat per treballar en passadissos molt estrets (1500-1800 mm)?",
    "opciones": [
      "a) Carretó contrapesat",
      "b) Transpaleta manual",
      "c) Carretó torre trilateral o bilateral",
      "d) Furgoneta de repartiment"
    ],
    "correcta": "c",
    "feedback": "Els carretons trilaterals estan dissenyats específicament per a passadissos estrets, optimitzant la capacitat de magatzematge[cite: 155]."
  },
  {
    "id": 121,
    "tipo": "teoria",
    "texto": "Qui és l'autor del mètode 'Systematic Layout Planning' (SLP)?",
    "opciones": [
      "a) Henry Ford",
      "b) Richard Muther",
      "c) Frederick Taylor",
      "d) Pablo Pujadas"
    ],
    "correcta": "b",
    "feedback": "Richard Muther és el creador de la metodologia SLP, un estàndard per al disseny de distribucions industrials[cite: 81, 157]."
  },
  {
    "id": 122,
    "tipo": "teoria",
    "texto": "Quina és la seqüència de fases del mètode SLP?",
    "opciones": [
      "a) Dibuix, Construcció, Venda",
      "b) Anàlisi, Síntesi, Avaluació",
      "c) Compra, Instal·lació, Manteniment",
      "d) Idea, Plànol, Maquinària"
    ],
    "correcta": "b",
    "feedback": "El mètode SLP es divideix en tres grans etapes: l'anàlisi de dades, la síntesi de propostes i l'avaluació de les alternatives[cite: 81, 82]."
  },
  {
    "id": 123,
    "tipo": "teoria",
    "texto": "Quin d'aquests és un criteri d'avaluació per triar una distribució en planta?",
    "opciones": [
      "a) Que el color de la màquina agradi al gerent",
      "b) La possibilitat d'ampliacions futures",
      "c) Que els operaris no hagin de caminar mai",
      "d) Que la nau sigui el més alta possible sense motiu"
    ],
    "correcta": "b",
    "feedback": "La flexibilitat i la previsió d'ampliacions són criteris fonamentals en la fase d'avaluació de la síntesi[cite: 82]."
  },
  {
    "id": 124,
    "tipo": "teoria",
    "texto": "Per què s'utilitzen 'anivelladores' en els molls de càrrega?",
    "opciones": [
      "a) Per netejar el terra del camió",
      "b) Per compensar la diferència d'altura entre la nau i la caixa del vehicle",
      "c) Per pesar la mercaderia",
      "d) Per frenar el camió si va massa ràpid"
    ],
    "correcta": "b",
    "feedback": "Les anivelladores asseguren que la rampa i el camió estiguin al mateix nivell per permetre el pas segur dels equips de transport[cite: 105]."
  },
  {
    "id": 125,
    "tipo": "teoria",
    "texto": "En el plànol d'implantació, què s'ha de fer amb les màquines no fixes (com els carretons)?",
    "opciones": [
      "a) No s'han de dibuixar mai",
      "b) S'han d'incloure en els llocs més característics per verificar la compatibilitat",
      "c) S'han de dibuixar fora de la nau",
      "d) Se'ls ha de fer un plànol a part només per a elles"
    ],
    "correcta": "b",
    "feedback": "Cal representar els equips mòbils en posicions clau per assegurar que els passadissos i espais de maniobra són suficients[cite: 92]."
  }
]
[
  {
    "id": 126,
    "tipo": "teoria",
    "texto": "Quina és la distància mínima requerida lliure d'obstacles per a la maniobra d'un camió de gran tonatge davant d'un moll de càrrega?",
    "opciones": [
      "a) 15 metres",
      "b) 20 metres",
      "c) 32 metres",
      "d) 50 metres"
    ],
    "correcta": "c",
    "feedback": "Segons els estàndards de disseny de molls citats al document, es requereix una zona de maniobra lliure d'obstacles d'uns 32 metres per a camions grans."
  },
  {
    "id": 127,
    "tipo": "teoria",
    "texto": "Dins de la metodologia SLP de Richard Muther, quin diagrama s'utilitza per relacionar les diferents activitats segons la seva importància de proximitat?",
    "opciones": [
      "a) Diagrama de blocs",
      "b) Taula o Matriu de relacions d'activitats",
      "c) Plànol d'implantació",
      "d) Cronograma de Gantt"
    ],
    "correcta": "b",
    "feedback": "La matriu de relacions (Activity Relationship Chart) utilitza codis de lletres (A, E, I, O, U, X) per definir com d'important és que dues zones estiguin juntes."
  },
  {
    "id": 128,
    "tipo": "teoria",
    "texto": "En la matriu de relacions del mètode SLP, què significa el codi 'A'?",
    "opciones": [
      "a) Absolutament important que estiguin a prop",
      "b) Allunyat obligatòriament",
      "c) Sense importància",
      "d) Àrea de producció"
    ],
    "correcta": "a",
    "feedback": "El codi 'A' representa la màxima prioritat de proximitat entre dues activitats o departaments en el mètode SLP."
  },
  {
    "id": 129,
    "tipo": "teoria",
    "texto": "En el mètode SLP, què indica el codi 'X' en la relació entre dues activitats?",
    "opciones": [
      "a) Que és excel·lent que estiguin juntes",
      "b) Que la proximitat no és desitjable (recomanable que estiguin separades)",
      "c) Que la relació és desconeguda",
      "d) Que són zones idèntiques"
    ],
    "correcta": "b",
    "feedback": "El codi 'X' s'utilitza per indicar una relació negativa; és a dir, activitats que no han d'estar juntes per motius de seguretat, soroll, contaminació, etc."
  },
  {
    "id": 130,
    "tipo": "teoria",
    "texto": "Quin és un avantatge d'utilitzar un magatzem amb 'Prestatgeries Mòbils'?",
    "opciones": [
      "a) Són les més barates del mercat",
      "b) Eliminen gairebé tots els passadissos obrint només el necessari en cada moment",
      "c) No necessiten carretons per funcionar",
      "d) Es poden col·locar a l'exterior sense sostre"
    ],
    "correcta": "b",
    "feedback": "Les prestatgeries mòbils es desplacen sobre rails, creant un passadís només on es necessita i compactant el magatzematge per estalviar espai en planta."
  },
  {
    "id": 131,
    "tipo": "teoria",
    "texto": "Quin tipus de magatzem utilitza la gravetat per moure els palets des del punt d'entrada al de sortida?",
    "opciones": [
      "a) Prestatgeries estàtiques convencionals",
      "b) Prestatgeries dinàmiques",
      "c) Armaris verticals",
      "d) Magatzem en bloc"
    ],
    "correcta": "b",
    "feedback": "Les prestatgeries dinàmiques disposen de camins de corrons inclinats on el palet llisca per gravetat, facilitant un sistema FIFO (First In, First Out)."
  },
  {
    "id": 132,
    "tipo": "teoria",
    "texto": "Què s'entén pel sistema 'FIFO' en la gestió de magatzems?",
    "opciones": [
      "a) El primer material que entra és el primer que surt",
      "b) L'últim que entra és el primer que surt",
      "c) El producte més car surt primer",
      "d) S'ordena per ordre alfabètic"
    ],
    "correcta": "a",
    "feedback": "FIFO són les sigles de 'First In, First Out'. És ideal per a productes peribles on es vol garantir una rotació correcta de l'estoc."
  },
  {
    "id": 133,
    "tipo": "teoria",
    "texto": "En la fase d'Avaluació del mètode SLP, quin d'aquests NO és un criteri de selecció recomanat segons el document?",
    "opciones": [
      "a) Possibilitat d'ampliacions futures",
      "b) Simplicitat de les edificacions i confort dels treballadors",
      "c) Que el color de l'edifici combini amb el paisatge",
      "d) Senzillesa del trànsit de vehicles per a la càrrega i descàrrega"
    ],
    "correcta": "c",
    "feedback": "El document cita expressament la comunicació dels magatzems, proximitat de despatxos, simplicitat, ampliacions futures i trànsit de vehicles com a criteris d'avaluació. L'estètica del paisatge no hi figura."
  },
  {
    "id": 134,
    "tipo": "teoria",
    "texto": "En un diagrama de relacions del mètode SLP, com es representen gràficament les relacions de tipus 'A' (absolutament important)?",
    "opciones": [
      "a) Amb una línia fina",
      "b) Amb quatre línies paral·leles (o una línia molt gruixuda)",
      "c) Amb una línia discontínua",
      "d) Amb una línia en forma de ziga-zaga"
    ],
    "correcta": "b",
    "feedback": "Per visualitzar el diagrama de fils o relacions, la lletra 'A' s'acompanya tradicionalment de 4 línies. La 'E' en té 3, la 'I' en té 2, la 'O' una, i la 'X' és una línia ondulada o trencada."
  },
  {
    "id": 135,
    "tipo": "teoria",
    "texto": "Quin és el principal inconvenient d'una 'Disposició per Procés' en comparació amb una per Producte?",
    "opciones": [
      "a) És molt poc flexible",
      "b) Genera més moviments i transport intern de materials",
      "c) Si es trenca una màquina s'atura tota la fàbrica",
      "d) Requereix màquines molt cares i específiques"
    ],
    "correcta": "b",
    "feedback": "Com que les màquines s'agrupen per funcions similars i no per l'ordre de fabricació, el material ha d'anar viatjant d'una zona a una altra contínuament."
  },
  {
    "id": 136,
    "tipo": "teoria",
    "texto": "Quin factor determina l'elecció entre una disposició per procés o una disposició per producte?",
    "opciones": [
      "a) La varietat de productes i el volum de producció",
      "b) L'edat mitjana dels treballadors",
      "c) El tipus d'il·luminació de la nau",
      "d) La distància al nucli urbà més proper"
    ],
    "correcta": "a",
    "feedback": "Pocs productes amb molt volum demanen distribució per Producte. Molts productes diferents amb poc volum demanen distribució per Procés."
  },
  {
    "id": 137,
    "tipo": "teoria",
    "texto": "Segons el mètode SLP, la fase on es combinen els espais requerits amb el diagrama de relacions s'anomena:",
    "opciones": [
      "a) Fase d'anàlisi",
      "b) Fase de síntesi",
      "c) Fase d'avaluació",
      "d) Fase de demolició"
    ],
    "correcta": "b",
    "feedback": "A la fase de síntesi s'ajunten les necessitats d'espai calculades amb les relacions d'activitats per traçar les diferents propostes de distribució en planta."
  },
  {
    "id": 138,
    "tipo": "teoria",
    "texto": "Quin tipus de carretó necessita passadissos més amples (d'uns 3.5 a 4 metres) per operar?",
    "opciones": [
      "a) Carretó torre trilateral",
      "b) Carretó contrapesat convencional",
      "c) Transpaleta elèctrica de vianant",
      "d) Apilador manual"
    ],
    "correcta": "b",
    "feedback": "Els carretons contrapesats giren sobre si mateixos amb la càrrega al davant, per la qual cosa necessiten passadissos bastant amples per maniobrar."
  },
  {
    "id": 139,
    "tipo": "teoria",
    "texto": "Per a què serveix un 'Abric de moll' en una zona de càrrega?",
    "opciones": [
      "a) Per tancar hermèticament l'espai entre el camió i la nau, evitant pèrdues tèrmiques i entrada de brutícia",
      "b) Perquè els treballadors no passin fred mentre sopen",
      "c) Per evitar que robin el camió durant la nit",
      "d) Per subjectar el camió perquè no es mogui"
    ],
    "correcta": "a",
    "feedback": "Els abrics de moll s'ajusten a la carrosseria del camió i són essencials en indústries on cal mantenir la cadena de fred o la higiene."
  },
  {
    "id": 140,
    "tipo": "teoria",
    "texto": "En la distribució de plantes, què s'entén per 'Flux en U'?",
    "opciones": [
      "a) Un flux on l'entrada de matèria i la sortida de producte estan al mateix costat de la nau",
      "b) Un procés que només té 4 màquines",
      "c) Un transport que es fa exclusivament amb ascensors",
      "d) Un procés on la matèria primera es destrueix"
    ],
    "correcta": "a",
    "feedback": "El disseny en 'U' permet utilitzar els mateixos molls o personal per a la recepció i l'expedició, optimitzant els recursos en plantes mitjanes."
  },
  {
    "id": 141,
    "tipo": "teoria",
    "texto": "Què estableix el 'Principi de la Seguretat i de la Satisfacció' en la Distribució en Planta?",
    "opciones": [
      "a) Que és millor la distribució que fa el treball més segur i satisfactori per als treballadors",
      "b) Que s'han de posar càmeres a tota la fàbrica",
      "c) Que els treballadors han d'estar sempre contents encara que no produeixin",
      "d) Que no es poden utilitzar màquines perilloses"
    ],
    "correcta": "a",
    "feedback": "La seguretat laboral i l'ergonomia no són només obligacions legals, sinó principis bàsics per a una distribució en planta eficient i humana."
  },
  {
    "id": 142,
    "tipo": "teoria",
    "texto": "En el disseny d'un moll de càrrega encastat, quin és el principal risc que s'ha de preveure en la rampa d'accés?",
    "opciones": [
      "a) Que el camió rellisqui o s'acumuli aigua si no hi ha un bon desguàs",
      "b) Que el camió pesi massa",
      "c) Que no hi hagi cobertura de telèfon",
      "d) Que les portes del magatzem siguin de fusta"
    ],
    "correcta": "a",
    "feedback": "En els molls on el camió baixa per una rampa cap a l'edifici, s'ha de garantir una pendent correcta i, sobretot, un excel·lent sistema de drenatge per evitar inundacions."
  },
  {
    "id": 143,
    "tipo": "teoria",
    "texto": "Quin plànol serveix per justificar davant de l'ajuntament que l'edifici compleix amb l'edificabilitat i les distàncies a carrer?",
    "opciones": [
      "a) Plànol d'Implantació de Maquinària",
      "b) Plànol d'Implantació en el Solar",
      "c) Plànol de Fluxos de Matèria",
      "d) Diagrama de Blocs"
    ],
    "correcta": "b",
    "feedback": "El Plànol d'Implantació en el Solar recull la posició de l'edifici respecte a la parcel·la i els paràmetres urbanístics de la zona."
  },
  {
    "id": 144,
    "tipo": "teoria",
    "texto": "En la metodologia SLP, de quin estudi previ s'obtenen les dades de quantitats de material per analitzar els fluxos?",
    "a) De l'estudi de mercat",
    "b) Del Diagrama de Fluxos i del Balanç de Matèria realitzats prèviament",
    "c) Del conveni col·lectiu",
    "d) De les factures de l'aigua"
  ],
  "correcta": "b",
  "feedback": "Tot el disseny gràfic anterior (Tema 1) nodreix de dades quantitatives l'estudi de la Distribució en Planta segons el mètode SLP."
},
{
    "id": 145,
    "tipo": "teoria",
    "texto": "Segons el CTE, quin tipus de línia s'utilitza generalment per acotar en els plànols d'implantació?",
    "opciones": [
      "a) Línies gruixudes i de color vermell",
      "b) Línies fines contínues amb fletxes o traços als extrems",
      "c) Línies de punts",
      "d) No es poden fer servir línies per acotar"
    ],
    "correcta": "b",
    "feedback": "L'acotació normalitzada en dibuix tècnic d'edificació utilitza línies fines contínues paral·leles a la dimensió que es mesura."
  },
  {
    "id": 146,
    "tipo": "teoria",
    "texto": "En una distribució per cèl·lules de fabricació, com solen disposar-se les màquines dins de la cèl·lula?",
    "opciones": [
      "a) En línia recta de quilòmetres de llargada",
      "b) En forma d'U per minimitzar els moviments de l'operari",
      "c) Disperses aleatòriament per la nau",
      "d) Una a sobre de l'altra"
    ],
    "correcta": "b",
    "feedback": "La forma en 'U' dins d'una cèl·lula permet que un o pocs operaris controlin diverses màquines amb recorreguts molt curts."
  },
  {
    "id": 147,
    "tipo": "teoria",
    "texto": "Quin és l'objectiu de representar el 'Recorregut de les Matèries' sobre el plànol d'implantació?",
    "opciones": [
      "a) Saber on estan els operaris a cada minut",
      "b) Verificar visualment que no hi ha encreuaments innecessaris o retrocessos en el flux de materials",
      "c) Calcular el preu del transport extern",
      "d) Decorar el plànol per a la presentació"
    ],
    "correcta": "b",
    "feedback": "Aquest plànol superposa línies de flux sobre la distribució física per assegurar que el camí del producte és el més lògic i curt possible."
  },
  {
    "id": 148,
    "tipo": "teoria",
    "texto": "Quin element s'utilitza per evitar que un camió colpegi directament la paret de la nau en fer marxa enrere cap al moll?",
    "opciones": [
      "a) Topalls o para-xocs de cautxú/goma",
      "b) Una xarxa de seguretat",
      "c) Un senyal de stop",
      "d) L'abric de moll"
    ],
    "correcta": "a",
    "feedback": "Els topalls de goma absorbeixen l'impacte del camió i protegeixen tant l'estructura de l'edifici com el propi vehicle."
  },
  {
    "id": 149,
    "tipo": "teoria",
    "texto": "Quin d'aquests mètodes d'emmagatzematge utilitza menys espai de passadissos?",
    "opciones": [
      "a) Prestatgeries convencionals estàtiques",
      "b) Emmagatzematge compacte (Drive-in) o dinàmic",
      "c) Deixar els palets a terra un al costat de l'altre",
      "d) Prestatgeries cantilever"
    ],
    "correcta": "b",
    "feedback": "Els sistemes compactes eliminen passadissos intermedis fent que el carretó entri dins de l'estructura o que la gravetat desplaci la càrrega."
  },
  {
    "id": 150,
    "tipo": "teoria",
    "texto": "En la metodologia de Richard Muther, quin pas va immediatament després d'avaluar les diferents alternatives de distribució?",
    "opciones": [
      "a) Tornar a començar des de zero",
      "b) Seleccionar la distribució òptima i procedir a la seva implantació detallada",
      "c) Comprar les màquines a cegues",
      "d) Acomiadar l'equip de disseny"
    ],
    "correcta": "b",
    "feedback": "Un cop avaluades les propostes amb els criteris triats, se selecciona la millor per desenvolupar el projecte d'execució final."
  }
]
[
  {
    "id": 151,
    "tipo": "teoria",
    "texto": "Quins són els tres elements bàsics que formen el conegut 'Triangle del foc'?",
    "opciones": [
      "a) Combustible, Comburent (oxigen) i Calor (energia d'activació)",
      "b) Fusta, Paper i Espurnes",
      "c) Aigua, Escuma i Diòxid de carboni",
      "d) Extintor, Manguera i Alarma"
    ],
    "correcta": "a",
    "feedback": "El triangle del foc representa els tres elements necessaris perquè es produeixi la combustió: el combustible, el comburent i la calor."
  },
  {
    "id": 152,
    "tipo": "teoria",
    "texto": "Quan el 'Triangle del foc' s'estén a 'Tetraedre del foc', quin és el quart element que s'afegeix?",
    "opciones": [
      "a) El fum",
      "b) La reacció en cadena",
      "c) L'espai tancat",
      "d) El vent"
    ],
    "correcta": "b",
    "feedback": "La reacció en cadena és el quart factor que permet que la combustió s'automantingui en el temps."
  },
  {
    "id": 153,
    "tipo": "teoria",
    "texto": "Segons la classificació de les classes de foc, a quina categoria pertanyen els focs de combustibles sòlids que deixen brases (com fusta o paper)?",
    "opciones": [
      "a) Classe A",
      "b) Classe B",
      "c) Classe C",
      "d) Classe D"
    ],
    "correcta": "a",
    "feedback": "La Classe A inclou els combustibles sòlids orgànics que generalment formen brases en cremar (fusta, teixits, cartró)."
  },
  {
    "id": 154,
    "tipo": "teoria",
    "texto": "Els focs originats per líquids inflamables o sòlids que es poden liquar (com la benzina o l'oli) pertanyen a la:",
    "opciones": [
      "a) Classe A",
      "b) Classe B",
      "c) Classe C",
      "d) Classe D"
    ],
    "correcta": "b",
    "feedback": "La Classe B correspon a focs de líquids o sòlids liquables (gasolina, dissolvents, pintures)."
  },
  {
    "id": 155,
    "tipo": "teoria",
    "texto": "A quina classe de foc pertanyen els gasos inflamables com el butà, propà o gas natural?",
    "opciones": [
      "a) Classe B",
      "b) Classe C",
      "c) Classe D",
      "d) Classe K / F"
    ],
    "correcta": "b",
    "feedback": "La Classe C és la que classifica específicament els focs provocats per gasos."
  },
  {
    "id": 156,
    "tipo": "teoria",
    "texto": "Què caracteritza els focs de Classe D?",
    "opciones": [
      "a) Són focs en presència de tensió elèctrica",
      "b) Són focs de metalls especials com magnesi, sodi o potassi",
      "c) Són focs en cuines comercials",
      "d) Són focs que només fan fum i no flama"
    ],
    "correcta": "b",
    "feedback": "La Classe D és la categoria per a metalls combustibles. Requereixen agents d'extinció molt específics."
  },
  {
    "id": 157,
    "tipo": "teoria",
    "texto": "El mètode d'extinció que consisteix a eliminar o tallar el subministrament del material combustible s'anomena:",
    "opciones": [
      "a) Refredament",
      "b) Dilució o desalimentació",
      "c) Sofocació",
      "d) Inhibició"
    ],
    "correcta": "b",
    "feedback": "La desalimentació actua directament retirant o tallant el combustible que alimenta el foc."
  },
  {
    "id": 158,
    "tipo": "teoria",
    "texto": "Com actua el mètode d'extinció per 'Sofocació'?",
    "opciones": [
      "a) Reduint la temperatura del foc",
      "b) Eliminant o desplaçant l'oxigen de l'aire",
      "c) Tallant la reacció en cadena",
      "d) Tirant aigua a pressió"
    ],
    "correcta": "b",
    "feedback": "La sofocació actua sobre el comburent (oxigen), impedint que aquest entri en contacte amb el combustible."
  },
  {
    "id": 159,
    "tipo": "teoria",
    "texto": "Quin és el mètode d'extinció més habitual quan s'utilitza l'aigua?",
    "opciones": [
      "a) Inhibició",
      "b) Refredament",
      "c) Sofocació",
      "d) Desalimentació"
    ],
    "correcta": "b",
    "feedback": "L'aigua té un gran poder d'absorció de calor, per tant, el seu principal mecanisme d'extinció és el refredament."
  },
  {
    "id": 160,
    "tipo": "teoria",
    "texto": "Quina diferència hi ha entre la protecció activa i la protecció passiva contra incendis?",
    "opciones": [
      "a) L'activa requereix acció o moviment (extintors, ruixadors); la passiva depèn dels elements constructius (murs tallafocs, portes)",
      "b) L'activa només s'usa de dia i la passiva de nit",
      "c) La passiva és molt més cara que l'activa",
      "d) L'activa només la fan servir els bombers"
    ],
    "correcta": "a",
    "feedback": "La protecció passiva és estructural (estàtica), mentre que l'activa inclou les instal·lacions que s'activen per detectar o apagar el foc."
  },
  {
    "id": 161,
    "tipo": "teoria",
    "texto": "Quin d'aquests elements és un exemple de protecció PASSIVA contra incendis?",
    "opciones": [
      "a) Un detector de fums",
      "b) Una porta tallafocs (RF / EI)",
      "c) Una Boca d'Incendi Equipada (BIE)",
      "d) Un sistema de ruixadors automàtics"
    ],
    "correcta": "b",
    "feedback": "La porta tallafocs forma part de la compartimentació de l'edifici (protecció passiva) per frenar l'avanç del foc."
  },
  {
    "id": 162,
    "tipo": "teoria",
    "texto": "Què signifiquen les sigles BIE en l'àmbit de la protecció contra incendis?",
    "opciones": [
      "a) Bomba d'Impulsió Elèctrica",
      "b) Boca d'Incendi Equipada",
      "c) Barrera d'Inhibició Estàtica",
      "d) Bloc d'Il·luminació d'Emergència"
    ],
    "correcta": "b",
    "feedback": "Una BIE és un equip de protecció activa connectat a una xarxa d'aigua que inclou mànega, vàlvula i llança."
  },
  {
    "id": 163,
    "tipo": "teoria",
    "texto": "Quina normativa estatal regula la seguretat contra incendis en els establiments de tipus industrial a Espanya?",
    "opciones": [
      "a) El CTE (Codi Tècnic de l'Edificació)",
      "b) El RSCIEI (RD 2267/2004)",
      "c) El Reglament Electrotècnic de Baixa Tensió",
      "d) La Llei de Riscos Laborals"
    ],
    "correcta": "b",
    "feedback": "Mentre el CTE s'aplica a edificis residencials o comercials, els industrials es regeixen pel Reglament de Seguretat Contra Incendis en Establiments Industrials (RSCIEI)."
  },
  {
    "id": 164,
    "tipo": "teoria",
    "texto": "En quina situació està totalment DESACONSELLAT utilitzar aigua com a agent extintor?",
    "opciones": [
      "a) En focs de fusta i cartró",
      "b) En focs de Classe B (líquids com oli) o en presència d'electricitat",
      "c) En focs en espais oberts",
      "d) Quan el foc fa flames molt altes"
    ],
    "correcta": "b",
    "feedback": "L'aigua pot fer surar o escampar els líquids inflamables i és conductora de l'electricitat, posant en perill l'usuari."
  },
  {
    "id": 165,
    "tipo": "teoria",
    "texto": "Què és un sistema d'hidrants exteriors?",
    "opciones": [
      "a) Aixetes situades a l'exterior de l'edifici perquè els bombers puguin connectar els seus camions i mànegues",
      "b) Un dipòsit d'aigua per a regar",
      "c) Un sistema d'il·luminació exterior",
      "d) Un ventilador gegant per treure el fum"
    ],
    "correcta": "a",
    "feedback": "Els hidrants estan connectats a la xarxa d'aigua i serveixen principalment per al subministrament d'aigua als equips d'extinció externs (bombers)."
  },
  {
    "id": 166,
    "tipo": "teoria",
    "texto": "A quina distància màxima s'ha de col·locar un extintor portàtil respecte a qualsevol punt d'un local segons la normativa general?",
    "opciones": [
      "a) 5 metres",
      "b) 15 metres",
      "c) 25 metres",
      "d) 50 metres"
    ],
    "correcta": "b",
    "feedback": "La distància màxima a recórrer des de qualsevol punt fins a trobar un extintor no ha de superar els 15 metres."
  },
  {
    "id": 167,
    "tipo": "teoria",
    "texto": "Un establiment industrial que ocupa totalment una nau adossada a altres naus es classifica segons el RSCIEI com a Tipus:",
    "opciones": [
      "a) Tipus A",
      "b) Tipus B",
      "c) Tipus C",
      "d) Tipus D"
    ],
    "correcta": "a",
    "feedback": "El Tipus A és aquell establiment que comparteix estructura o tancaments amb altres naus (edificis adossats)."
  },
  {
    "id": 168,
    "tipo": "teoria",
    "texto": "Quan una nau industrial està totalment aïllada i separada d'altres edificis a una distància mínima de 3 metres, es considera de Tipus:",
    "opciones": [
      "a) Tipus A",
      "b) Tipus B",
      "c) Tipus C",
      "d) Tipus E"
    ],
    "correcta": "c",
    "feedback": "El Tipus C correspon a un edifici industrial totalment exempt (aïllat) amb distàncies de seguretat respecte a parcel·les veïnes."
  },
  {
    "id": 169,
    "tipo": "teoria",
    "texto": "Com es calcula la 'Càrrega de foc ponderada' d'un sector d'incendi segons el RSCIEI?",
    "opciones": [
      "a) Sumant el pes de totes les màquines de la planta",
      "b) En funció de la quantitat i poder calorífic dels materials emmagatzemats i fabricats, multiplicat per factors de perillositat",
      "c) Segons el nombre de treballadors que hi ha a la nau",
      "d) Mesurant l'alçada de les flames del pitjor incendi possible"
    ],
    "correcta": "b",
    "feedback": "La càrrega de foc és una fórmula que avalua l'energia calorífica total que s'alliberaria si cremessin tots els combustibles d'un sector."
  },
  {
    "id": 170,
    "teoria": "teoria",
    "texto": "Què significa que un material té una classificació de reacció al foc 'M0' (segons l'antiga norma) o 'A1' (segons l'actual)?",
    "opciones": [
      "a) Que és altament inflamable",
      "b) Que és no combustible o incombustible",
      "c) Que produeix molt de fum tòxic",
      "d) Que només es pot apagar amb escuma"
    ],
    "correcta": "b",
    "feedback": "Les classificacions A1 (antiga M0) s'atorguen a materials que no poden cremar (com el formigó, el maó o l'acer sense revestir)."
  },
  {
    "id": 171,
    "tipo": "teoria",
    "texto": "Quina funció té un sistema de 'Ruixadors automàtics' (Sprinklers)?",
    "opciones": [
      "a) Només donar l'alarma",
      "b) Detectar l'incendi i descarregar aigua automàticament al lloc on s'ha originat per controlar-lo",
      "c) Netejar el sostre de la nau periòdicament",
      "d) Humidificar l'aire per a les plantes"
    ],
    "correcta": "b",
    "feedback": "Els ruixadors s'activen per calor; quan es trenca l'ampolla termosensible de la capçalera, s'allibera l'aigua directament sobre el focus del foc."
  },
  {
    "id": 172,
    "tipo": "teoria",
    "texto": "Per a què serveix un 'Pulsador d'alarma d'incendi'?",
    "opciones": [
      "a) Per obrir les portes de seguretat de forma manual",
      "b) Perquè qualsevol persona pugui activar l'alarma manualment en cas de detectar un incendi",
      "c) Per apagar el foc directament des de la paret",
      "d) Per avisar exclusivament al director de l'empresa"
    ],
    "correcta": "b",
    "feedback": "Els polsadors són elements manuals de protecció activa que s'han de repartir per les vies d'evacuació."
  },
  {
    "id": 173,
    "tipo": "teoria",
    "texto": "En els extintors de Diòxid de Carboni ($CO_2$), quin és el principal risc que s'ha de tenir en compte en utilitzar-los en espais petits?",
    "opciones": [
      "a) Que l'extintor exploti pel fred",
      "b) Que desplaci l'oxigen i pugui provocar asfíxia als ocupants",
      "c) Que taqui massa les parets",
      "d) Que el gas faci malbé les màquines elèctriques"
    ],
    "correcta": "b",
    "feedback": "Com que el $CO_2$ apaga per sofocació desplaçant l'oxigen, en recintes tancats pot deixar l'espai sense aire respirable per a les persones."
  },
  {
    "id": 174,
    "tipo": "teoria",
    "texto": "Quin és l'objectiu principal del 'Pla d'Evacuació' d'una nau industrial?",
    "opciones": [
      "a) Salvar les màquines més cares primer",
      "b) Garantir que totes les persones puguin sortir de l'edifici cap a un lloc segur de forma ràpida",
      "c) Saber qui s'ha deixat el llum encès",
      "d) Ordenar la brossa de la fàbrica"
    ],
    "correcta": "b",
    "feedback": "L'objectiu prioritari davant de qualsevol incendi o emergència és sempre protegir la vida de les persones facilitant la seva sortida."
  },
  {
    "id": 175,
    "tipo": "teoria",
    "texto": "Quin tipus de detector d'incendis s'activa quan es produeix un augment ràpid o elevat de la temperatura?",
    "opciones": [
      "a) Detector òptic de fums",
      "b) Detector termovelocimètric o tèrmic",
      "c) Detector de flama",
      "d) Detector de gasos"
    ],
    "correcta": "b",
    "feedback": "Els detectors tèrmics o termovelocimètrics reaccionen quan se supera una temperatura fixa o quan la temperatura puja massa ràpid en poc temps."
  }
]
[
  {
    "id": 176,
    "tipo": "teoria",
    "texto": "Quina d'aquestes conseqüències s'esmenta en el tema com un dany derivat d'un incendi industrial?",
    "opciones": [
      "a) Augment en el pressupost de publicitat",
      "b) Millora de l'eficiència energètica",
      "c) Danys a la imatge corporativa i paralitzacions d'activitats",
      "d) Reestructuració dels llocs de treball directes"
    ],
    "correcta": "c",
    "feedback": "Segons el document, les conseqüències d'un incendi inclouen danys a la propietat, paralitzacions d'activitats, danys mediambientals, a la imatge corporativa i a la futura rendibilitat."
  },
  {
    "id": 177,
    "tipo": "teoria",
    "texto": "Segons les dades d'UNESPA recollides al document, quina és la principal causa d'incendi a les indústries?",
    "opciones": [
      "a) Cigars o fòsfors",
      "b) Incendis elèctrics",
      "c) Espurnes mecàniques",
      "d) Flames obertes"
    ],
    "correcta": "b",
    "feedback": "Segons les gràfiques d'UNESPA lligades al dèficit en tasques de manteniment, els incendis elèctrics representen el 19% del total, sent la causa principal."
  },
  {
    "id": 178,
    "tipo": "teoria",
    "texto": "Quina és la definició que la norma UNE 13943:2018 dóna per al concepte de 'foc'?",
    "opciones": [
      "a) Una reacció lenta sense emissió de llum i amb poca calor",
      "b) Una combustió caracteritzada per l'emissió de calor, fum i flames",
      "c) Un mètode d'extinció ràpida en espais industrials",
      "d) L'energia mínima d'activació per a una reacció biològica"
    ],
    "correcta": "b",
    "feedback": "El document cita textualment que la norma UNE 13943:2018 defineix el foc com una combustió caracteritzada per l'emissió de calor, fum i flames."
  },
  {
    "id": 179,
    "tipo": "teoria",
    "texto": "Quin és el percentatge mínim d'oxigen en l'ambient necessari perquè la combustió es desenvolupi normalment?",
    "opciones": [
      "a) Per sota del 5% el foc s'apaga",
      "b) El foc s'apaga generalment si baixa del 15%",
      "c) Ha d'estar estrictament entre el 30% i el 40%",
      "d) No necessita un mínim perquè l'aire conté nitrogen"
    ],
    "correcta": "b",
    "feedback": "El document especifica que per sota del 15% d'oxigen generalment el foc s'apaga."
  },
  {
    "id": 180,
    "tipo": "teoria",
    "texto": "Quins són els components que formen el clàssic 'Triangle del Foc' segons el document?",
    "opciones": [
      "a) Combustible, comburent i energia (o calor)",
      "b) Combustible, fum i reacció en cadena",
      "c) Comburent, oxigen i superfícies calentes",
      "d) Radiació, conducció i convecció"
    ],
    "correcta": "a",
    "feedback": "Antoine Lavoisier va descriure que el foc necessita tres parts per al seu desenvolupament: combustible, comburent i energia d'activació."
  },
  {
    "id": 181,
    "tipo": "teoria",
    "texto": "Quin és el quart element que s'afegeix al triangle per formar el 'Tetraedre del Foc'?",
    "opciones": [
      "a) La pèrdua d'electrons",
      "b) La reacció en cadena",
      "c) El punt d'autoignició",
      "d) La mecànica de fluids"
    ],
    "correcta": "b",
    "feedback": "Perquè es mantingui i progressi la combustió, cal el quart element conegut com a reacció en cadena."
  },
  {
    "id": 182,
    "tipo": "teoria",
    "texto": "En quin estat de la matèria entren sempre en combustió els combustibles, independentment del seu estat inicial?",
    "opciones": [
      "a) En estat líquid",
      "b) En estat sòlid",
      "c) En estat gasós",
      "d) En estat de plasma"
    ],
    "correcta": "c",
    "feedback": "El tema recull que els combustibles poden ser sòlids, líquids o gasosos, encara que sempre entren en combustió en estat gasós."
  },
  {
    "id": 183,
    "tipo": "teoria",
    "texto": "Què s'entén per 'Punt d'inflamació' (Flash-Point)?",
    "opciones": [
      "a) La temperatura a la qual el combustible segueix cremant encara que es retiri la font",
      "b) La temperatura mínima necessària perquè una substància emeti vapors que permetin l'inici breu de la combustió",
      "c) La temperatura d'origen espontani sense aportació d'energia",
      "d) El límit superior d'explosibilitat en atmosfera rica"
    ],
    "correcta": "b",
    "feedback": "És la temperatura mínima perquè un combustible emeti prou vapors com per formar una barreja inflamable amb l'aire si s'aporta una font d'ignició, cremant breument."
  },
  {
    "id": 184,
    "tipo": "teoria",
    "texto": "Com s'anomena el mètode d'extinció que consisteix a eliminar la calor per reduir la temperatura per sota del punt d'ignició?",
    "opciones": [
      "a) Desalimentació",
      "b) Sufocació",
      "c) Refredament",
      "d) Inhibició"
    ],
    "correcta": "c",
    "feedback": "El refredament consisteix a eliminar la calor per reduir la temperatura del combustible per sota del punt d'ignició."
  },
  {
    "id": 185,
    "tipo": "teoria",
    "texto": "Quin mètode d'extinció es basa a eliminar o desplaçar el comburent (generalment oxigen)?",
    "opciones": [
      "a) Sufocació",
      "b) Inhibició",
      "c) Refredament",
      "d) Desalimentació"
    ],
    "correcta": "a",
    "feedback": "La sufocació consisteix a eliminar o desplaçar el comburent dels productes en combustió o reduir la seva concentració."
  },
  {
    "id": 186,
    "tipo": "teoria",
    "texto": "Com s'actua sobre el foc mitjançant el mètode d'extinció d'inhibició?",
    "opciones": [
      "a) Eliminant físicament el combustible que no s'ha cremat",
      "b) Desactivant els radicals lliures per trencar la reacció en cadena",
      "c) Projectant aigua a pressió per absorbir la calor",
      "d) Tapant el recipient per esgotar l'oxigen"
    ],
    "correcta": "b",
    "feedback": "La inhibició consisteix a provocar la ruptura de la reacció en cadena mitjançant la desactivació dels radicals lliures."
  },
  {
    "id": 187,
    "tipo": "teoria",
    "texto": "Quin paper juga la Protecció Activa contra incendis (PFA) en un establiment industrial?",
    "opciones": [
      "a) Un paper preventiu mitjançant mesures constructives",
      "b) Un paper d'evacuació passiva lliure de fums",
      "c) Un paper curatiu que inclou sistemes de detecció i extinció automàtics o humans",
      "d) L'assegurament de la resistència dels pilars de formigó"
    ],
    "correcta": "c",
    "feedback": "Segons els apunts, la protecció activa té un paper curatiu i representa tots els sistemes de detecció i extinció d'incendis destinats a advertir i actuar."
  },
  {
    "id": 188,
    "tipo": "teoria",
    "texto": "Quin és l'objectiu principal de la Protecció Passiva contra incendis (PFP)?",
    "opciones": [
      "a) Proporcionar un sistema automàtic de ruixadors per sufocar el foc ràpidament",
      "b) Confinar el foc el major temps possible i permetre l'evacuació de persones",
      "c) Detectar la presència de monòxid de carboni",
      "d) Donar l'alarma directament als bombers via satèl·lit"
    ],
    "correcta": "b",
    "feedback": "L'objectiu de la PFP és permetre l'evacuació de les persones i la intervenció dels serveis d'emergència, confinant el foc."
  },
  {
    "id": 189,
    "tipo": "teoria",
    "texto": "A què fa referència una zona de l'edifici delimitada per elements resistents al foc per evitar que l'incendi es propagui?",
    "opciones": [
      "a) Sectorització d'incendis (o sector d'incendi)",
      "b) Zona de Flash-Point",
      "c) Punt d'autoignició estructural",
      "d) Àrea d'evacuació ràpida"
    ],
    "correcta": "a",
    "feedback": "Un sector d'incendi és la zona delimitada per elements resistents al foc perquè quedi localitzat i es retardi la propagació."
  },
  {
    "id": 190,
    "tipo": "teoria",
    "texto": "Què signifiquen les sigles R / E / I aplicades als elements constructius?",
    "opciones": [
      "a) Ràpida Emissió d'Incendis",
      "b) Estabilitat (R), Integritat (E) i Aïllament / Resistència (I) al foc",
      "c) Reglament d'Establiment Industrial",
      "d) Reacció Exotèrmica d'Ignició"
    ],
    "correcta": "b",
    "feedback": "Al document s'indica 'Estabilitat, Resistència i Integritat al foc (R/E/I)' per classificar els elements de la protecció passiva."
  },
  {
    "id": 191,
    "tipo": "teoria",
    "texto": "Quin Reglament de seguretat contra incendis s'esmenta a les transparències com a referència per als establiments industrials?",
    "opciones": [
      "a) Reial Decret 2267/2004 (fent esment a una actualització posterior)",
      "b) Llei d'Indústries Químiques de 1997",
      "c) Codi Tècnic de l'Edificació (només per a habitatges)",
      "d) Normativa de Risc Elèctric UNE-EN 50110"
    ],
    "correcta": "a",
    "feedback": "El document recull el Reial Decret 2267/2004 i fa referència a canvis normatius posteriors (RD 164/2025)."
  },
  {
    "id": 192,
    "tipo": "teoria",
    "texto": "Segons la caracterització dels establiments industrials per la seva ubicació, què és un establiment de TIPUS A?",
    "opciones": [
      "a) Ocupa completament un edifici aïllat a més de 3 metres de distància",
      "b) Ocupa part d'un edifici on hi ha altres establiments (coexistència)",
      "c) És un espai obert sense cap tancament lateral",
      "d) Un edifici adossat o a menys de 3 metres de distància d'altres"
    ],
    "correcta": "b",
    "feedback": "Un establiment tipus A ocupa part d'un edifici en el qual hi ha altres establiments, d'ús industrial o altres usos."
  },
  {
    "id": 193,
    "tipo": "teoria",
    "texto": "Quin tipus d'establiment industrial és aquell que ocupa completament un edifici adossat a altres o a una distància igual o inferior a 3 metres?",
    "opciones": [
      "a) Tipus A",
      "b) Tipus B",
      "c) Tipus C",
      "d) Tipus D"
    ],
    "correcta": "b",
    "feedback": "El tipus B ocupa completament un edifici adossat o a una distància igual o inferior a tres metres d'altres."
  },
  {
    "id": 194,
    "tipo": "teoria",
    "texto": "Quan es considera que un establiment industrial és de TIPUS C?",
    "opciones": [
      "a) Quan ocupa part d'un edifici comercial compartit",
      "b) Quan es troba a una distància de separació superior a 3 metres de l'edifici més proper d'altres establiments",
      "c) Quan manca totalment de tancament lateral en alguna de les façanes",
      "d) Quan emmagatzema materials altament inflamables sense sectoritzar"
    ],
    "correcta": "b",
    "feedback": "L'establiment Tipus C ocupa completament un edifici o edificis a una distància més gran de tres metres de l'edifici més proper d'altres establiments."
  },
  {
    "id": 195,
    "tipo": "teoria",
    "texto": "Per a què serveix calcular el Risc Intrínsec (Ri) de cada sector d'un edifici industrial?",
    "opciones": [
      "a) Per saber la quantitat exacta de treballadors que cal contractar",
      "b) Per determinar la densitat de càrrega de foc i establir les superfícies màximes i les mesures de protecció requerides",
      "c) Per avaluar els riscos laborals davant caigudes a mateix nivell",
      "d) Per calcular l'impacte d'imatge corporativa després d'una crisi"
    ],
    "correcta": "b",
    "feedback": "El càlcul del risc intrínsec de cada sector permet caracteritzar l'establiment i assegurar que la superfície del sector és inferior a la màxima permesa segons el reglament."
  },
  {
    "id": 196,
    "tipo": "teoria",
    "texto": "En quines dues grans categories d'activitats es divideix el càlcul de la càrrega de foc segons el tema?",
    "opciones": [
      "a) Activitats químiques i activitats mecàniques",
      "b) Activitats de producció i activitats d'emmagatzematge",
      "c) Activitats exteriors i activitats interiors",
      "d) Activitats de disseny i activitats de manteniment"
    ],
    "correcta": "b",
    "feedback": "El document diferencia clarament els procediments per a 'activitats de producció o qualsevol altra diferent de l'emmagatzematge' i 'activitats d'emmagatzematge'."
  },
  {
    "id": 197,
    "tipo": "teoria",
    "texto": "Quin és l'origen de l'energia d'activació generada pels frecs o xocs entre metalls?",
    "opciones": [
      "a) Origen químic",
      "b) Origen mecànic",
      "c) Origen biològic",
      "d) Origen natural"
    ],
    "correcta": "b",
    "feedback": "Les fonts d'ignició d'origen mecànic són aquelles produïdes per xocs o frecs entre metalls."
  },
  {
    "id": 198,
    "tipo": "teoria",
    "texto": "A la dinàmica de focs, què caracteritza el període d'incubació d'un combustible sòlid?",
    "opciones": [
      "a) Ignició instantània de tota la massa amb risc d'explosió",
      "b) Oxidació espontània o escalfament amb emissió de vapors i fums (olor de cremat)",
      "c) Propagació ràpida a tota la superfície lliure d'un líquid",
      "d) Reversibilitat total sense deixar cap residu ni cendra"
    ],
    "correcta": "b",
    "feedback": "En un combustible sòlid hi ha un període d'incubació per oxidació espontània o escalfament amb emissió de vapors i fums en petita quantitat."
  },
  {
    "id": 199,
    "tipo": "teoria",
    "texto": "Quina diferència fonamental hi ha segons el document entre una reacció d'oxidació lenta (com la del ferro) i una reacció normal de foc?",
    "opciones": [
      "a) L'oxidació lenta no emet llum i genera poca calor; el foc emet llum i calor perceptible",
      "b) L'oxidació lenta és la que genera flames i el foc només genera brases",
      "c) Cap, totes dues reaccionen a la mateixa velocitat (centímetres per segon)",
      "d) L'oxidació és física i el foc és un procés biològic d'origen fermentatiu"
    ],
    "correcta": "a",
    "feedback": "En la comparativa que fa el tema, la reacció lenta del ferro no té emissió de llum i dóna poca calor, mentre que la reacció normal del foc emet llum i calor perceptible."
  },
  {
    "id": 200,
    "tipo": "teoria",
    "texto": "Com defineix el document el concepte d''incendi' en contraposició al de 'foc'?",
    "opciones": [
      "a) És un foc controlat dins un recipient de laboratori",
      "b) És un foc incontrolat en espai i temps",
      "c) Un fenomen físic que només es dóna en entorns domèstics",
      "d) Una reacció química on s'evita la producció de fum"
    ],
    "correcta": "b",
    "feedback": "En el document es defineix l'incendi específicament com un 'foc incontrolat en espai i temps'."
  }
]
[
  {
    "id": 201,
    "tipo": "teoria",
    "texto": "Segons l'estudi d'UNESPA durant l'any 2018 recollit al document, amb quina freqüència aproximada es produïa un incendi industrial a Espanya?",
    "opciones": [
      "a) Un incendi cada minut",
      "b) Un incendi cada hora aproximadament",
      "c) Un incendi cada dia",
      "d) Un incendi a la setmana"
    ],
    "correcta": "b",
    "feedback": "El document assenyala que, segons dades d'UNESPA, durant el 2018 es van produir 7.500 incendis en indústries, xifra que equival aproximadament a un incendi cada hora."
  },
  {
    "id": 202,
    "tipo": "teoria",
    "texto": "Quina disciplina NO s'esmenta en el tema com a part de l'estudi complex de la dinàmica i extinció del foc?",
    "opciones": [
      "a) La mecànica de fluids",
      "b) La transferència de calor i matèria",
      "c) La cinètica química",
      "d) L'electrònica de potència"
    ],
    "correcta": "d",
    "feedback": "Segons els apunts, en l'estudi de la dinàmica i l'extinció del foc intervenen la mecànica de fluids, la transferència de calor i matèria, i la cinètica química."
  },
  {
    "id": 203,
    "tipo": "teoria",
    "texto": "Què estableix el document respecte a la perillositat dels líquids inflamables com la gasolina o l'acetona?",
    "opciones": [
      "a) Suposen un risc molt menor que el gasoil",
      "b) Poden generar fàcilment un incendi si no es manipulen amb molt de cura",
      "c) Són totalment segurs a temperatura ambient",
      "d) Només cremen si es barregen amb aigua prèviament"
    ],
    "correcta": "b",
    "feedback": "El text indica explícitament que alguns líquids inflamables com la gasolina o l'acetona poden generar fàcilment un incendi si no es manipulen amb cura, mentre que d'altres com el gasoil suposen un risc menor."
  },
  {
    "id": 204,
    "tipo": "teoria",
    "texto": "Com defineix el document el 'Punt d'ignició'?",
    "opciones": [
      "a) És la temperatura a la qual el combustible s'apaga ràpidament",
      "b) És la temperatura mínima a la qual un combustible emet prou vapors susceptibles d'inflamar-se i de mantenir la inflamació encara que es retiri la font d'ignició",
      "c) És el moment en què la barreja és massa pobra per cremar",
      "d) És equivalent a l'origen atmosfèric d'un llamp"
    ],
    "correcta": "b",
    "feedback": "El document defineix el punt d'ignició com la temperatura mínima a la qual un combustible emet prou vapors susceptibles d'inflamar-se i de mantenir-la (segueix cremant si es retira la font)."
  },
  {
    "id": 205,
    "tipo": "teoria",
    "texto": "Com es troba habitualment el punt d'ignició d'una substància en relació amb el seu punt d'inflamació (Flash-Point)?",
    "opciones": [
      "a) Acostuma a estar uns graus per sota del punt d'inflamació",
      "b) És exactament el mateix valor de temperatura",
      "c) Acostuma a estar uns graus per sobre del punt d'inflamació",
      "d) No tenen cap tipus de relació lineal"
    ],
    "correcta": "c",
    "feedback": "Els apunts especifiquen textualment que el punt d'ignició acostuma a estar uns graus per sobre del punt d'inflamació."
  },
  {
    "id": 206,
    "tipo": "teoria",
    "texto": "En quina fase de combustió es descriu l'aparició de flames o un 'conat d'incendi' quan parlem de combustibles sòlids?",
    "opciones": [
      "a) Després del període d'incubació per oxidació espontània o escalfament",
      "b) Abans de qualsevol canvi d'olor a l'ambient",
      "c) Directament per sobre del límit superior d'explosibilitat",
      "d) Únicament si s'apaga la ventilació mecànica"
    ],
    "correcta": "a",
    "feedback": "En els combustibles sòlids, després del període d'incubació per oxidació espontània o escalfament (caracteritzat per olor de cremat), es produeix l'aparició de flames o conat d'incendi."
  },
  {
    "id": 207,
    "tipo": "teoria",
    "texto": "Quin és el percentatge en volum que ocupa l'oxigen a l'aire aproximadament, segons el text?",
    "opciones": [
      "a) 5%",
      "b) 15%",
      "c) 21%",
      "d) 78%"
    ],
    "correcta": "c",
    "feedback": "S'esmenta que l'oxigen està contingut aproximadament en un 21% en volum a l'aire, sent el comburent més comú."
  },
  {
    "id": 208,
    "tipo": "teoria",
    "texto": "Esmenta el document alguna substància que pugui patir combustió sense aportació externa d'oxigen?",
    "opciones": [
      "a) Sí, la nitrocel·lulosa, en contenir en la seva composició tant l'agent oxidant com el reductor",
      "b) No, totes les substàncies cremen estrictament per oxigen ambiental",
      "c) Sí, l'aigua destil·lada sota altes pressions",
      "d) No, l'energia d'activació ho impedeix"
    ],
    "correcta": "a",
    "feedback": "El tema recull que alguns compostos com la nitrocel·lulosa, en contenir ambdós agents (oxidant i reductor), poden patir combustió sense més aportació externa que l'energia d'activació."
  },
  {
    "id": 209,
    "tipo": "teoria",
    "texto": "Quina de les següents fonts d'ignició s'atribueix a un origen biològic segons el document?",
    "opciones": [
      "a) Els llamps",
      "b) Les reaccions exotèrmiques",
      "c) La calor que desprèn la fermentació",
      "d) Els xocs o frecs entre metalls"
    ],
    "correcta": "c",
    "feedback": "El document classifica explícitament com d'origen biològic la calor que desprèn la fermentació."
  },
  {
    "id": 210,
    "tipo": "teoria",
    "texto": "Què significa l'extinció per desalimentació segons els apunts?",
    "opciones": [
      "a) Tapar el foc amb una manta ignífuga",
      "b) Retirar parcialment o totalment el combustible a una velocitat més gran que la de propagació del foc",
      "c) Llançar pols química seca sobre les brases",
      "d) Reduir l'oxigen ambiental per sota del 15%"
    ],
    "correcta": "b",
    "feedback": "Consisteix en la retirada parcial o total del combustible, sempre que la velocitat de retirada sigui més gran que la velocitat de propagació del foc."
  },
  {
    "id": 211,
    "tipo": "teoria",
    "texto": "Quin és l'objectiu principal de la senyalització dins dels mitjans actius segons es detalla al document?",
    "opciones": [
      "a) Indicar el preu de les instal·lacions",
      "b) Garantir una fàcil i fluida evacuació dels ocupants d'un recinte i una extinció ràpida",
      "c) Evitar la utilització del telèfon mòbil durant la jornada",
      "d) Marcar les zones exclusives per a la maquinària de càrrega"
    ],
    "correcta": "b",
    "feedback": "La senyalització té per objectiu garantir una fàcil evacuació i fluida dels ocupants, així com ajudar a una extinció ràpida."
  },
  {
    "id": 212,
    "tipo": "teoria",
    "texto": "Quin dels següents elements forma part dels mitjans passius de protecció contra incendis segons s'indica en el tema?",
    "opciones": [
      "a) Polsadors d'alarma",
      "b) Ruixadors automàtics",
      "c) Dimensionat de passadissos i escales",
      "d) Boques d'Incendi Equipades (BIE)"
    ],
    "correcta": "c",
    "feedback": "Els mitjans passius es basen en la sectorització i l'evacuació, incloent-hi el dimensionat de passadissos i escales."
  },
  {
    "id": 213,
    "tipo": "teoria",
    "texto": "Què exigeix el document per considerar que diferents edificis d'un mateix establiment industrial s'han de tractar com a edificis independents?",
    "opciones": [
      "a) Que estiguin separats per una distància superior a 3 metres, o que les parets adjacents compleixin els requisits de mur separador",
      "b) Que estiguin connectats per un pont metàl·lic",
      "c) Que cadascun tingui el seu propi comptador d'aigua",
      "d) Que no superin la superfície de 480 m2 en total"
    ],
    "correcta": "a",
    "feedback": "Perquè es considerin edificis independents d'un mateix establiment la distància de separació ha de ser superior a tres metres, o bé que les parets compleixin amb els requisits de mur separador."
  },
  {
    "id": 214,
    "tipo": "teoria",
    "texto": "A la dinàmica de focs de combustibles gasosos, què succeeix en presència d'un focus d'ignició suficient?",
    "opciones": [
      "a) Es produeix una oxidació lenta que dura hores",
      "b) S'inflama instantàniament tota la massa de gas present, podent arribar a detonacions",
      "c) El combustible passa primer a estat líquid abans de cremar",
      "d) No hi ha cap reacció si l'oxigen és superior al 21%"
    ],
    "correcta": "b",
    "feedback": "En un combustible gasós, la presència d'un focus d'ignició suficient inflama instantàniament tota la massa de gas present."
  },
  {
    "id": 215,
    "tipo": "teoria",
    "texto": "De quins paràmetres depèn el càlcul detallat del Nivell de Risc Intrínsec d'un sector segons el text?",
    "opciones": [
      "a) De la velocitat mitjana del vent a la zona industrial",
      "b) De la densitat de càrrega de foc, ponderada i corregida",
      "c) Del nombre de socis capitalistes de l'empresa",
      "d) De la proximitat a xarxes públiques de clavegueram"
    ],
    "correcta": "b",
    "feedback": "Per determinar el nivell de risc s'utilitza la densitat de càrrega de foc, ponderada i corregida (Qs)."
  },
  {
    "id": 216,
    "tipo": "teoria",
    "texto": "Quan es tracta de l'evacuació en la protecció passiva, quin és el requisit que han de complir els elements d'evacuació?",
    "opciones": [
      "a) Han d'impedir la sortida del personal fins que arribin els bombers",
      "b) Han de permetre als ocupants evacuar l'edifici o sector com més aviat millor amb seguretat",
      "c) Han d'estar pintats exclusivament de color groc",
      "d) Han de ser sempre escales de caragol per estalviar espai"
    ],
    "correcta": "b",
    "feedback": "El document reflecteix que els elements d'evacuació han de permetre als ocupants evacuar l'edifici com més aviat millor amb seguretat."
  },
  {
    "id": 217,
    "tipo": "teoria",
    "texto": "Quin és un exemple de font d'ignició directa o d'origen tèrmic segons el resum de punts clau?",
    "opciones": [
      "a) Els raigs",
      "b) El fregament de metalls",
      "c) Una flama oberta o radiació directa de calor",
      "d) La fermentació de matèria orgànica"
    ],
    "correcta": "c",
    "feedback": "L'origen tèrmic o directe s'associa a l'aportació directa de calor (per exemple flames o superfícies calentes), a diferència de l'origen elèctric, mecànic o biològic."
  },
  {
    "id": 218,
    "tipo": "teoria",
    "texto": "Quina condició s'ha de complir en el procés d'implantació perquè un edifici industrial sigui segur segons el diagrama del document?",
    "opciones": [
      "a) Que la superfície construïda (Ssec) sigui més gran que la màxima permesa (Ssecmax)",
      "b) Que la superfície construïda del sector (Ssec) sigui inferior a la superfície màxima del sector (Ssecmax)",
      "c) Que no hi hagi mai cap sector d'incendi a l'edifici",
      "d) Que s'ignori el risc intrínsec per estalviar costos"
    ],
    "correcta": "b",
    "feedback": "El flux de càlcul finalitza preguntant si Ssec < Ssecmax (és a dir, si la superfície del sector és menor que la màxima permesa)."
  },
  {
    "id": 219,
    "tipo": "teoria",
    "texto": "A la dinàmica de focs en combustibles líquids, com es descriu la darrera fase en contacte amb l'aire?",
    "opciones": [
      "a) Formació d'un bloc de gel per reacció endotèrmica",
      "b) Ràpida propagació a tota la superfície lliure del líquid",
      "c) Cristal·lització immediata dels vapors",
      "d) Emissió únicament de monòxid de carboni sense flama"
    ],
    "correcta": "b",
    "feedback": "Després de l'aparició de flames, es dóna una ràpida propagació a tota la superfície lliure del líquid en contacte amb l'aire."
  },
  {
    "id": 220,
    "tipo": "teoria",
    "texto": "Quin d'aquests mètodes d'extinció té com a objectiu evitar que es desprenguin gasos inflamables reduint la temperatura?",
    "opciones": [
      "a) Inhibició",
      "b) Sufocació",
      "c) Refredament",
      "d) Desalimentació"
    ],
    "correcta": "c",
    "feedback": "El refredament actua eliminant la calor per reduir la temperatura de manera que s'evita que es desprenguin gasos inflamables."
  },
  {
    "id": 221,
    "tipo": "teoria",
    "texto": "Quin tipus d'establiment segons la ubicació s'associa a un espai obert que pot estar totalment cobert o no, però on manca totalment de tancament lateral en alguna de les façanes?",
    "opciones": [
      "a) Tipus A",
      "b) Tipus B",
      "c) Tipus C",
      "d) Tipus D"
    ],
    "correcta": "d",
    "feedback": "El document defineix el Tipus D com aquell que ocupa un espai obert on alguna de les façanes manca totalment de tancament lateral."
  },
  {
    "id": 222,
    "tipo": "teoria",
    "texto": "En relació amb els factors d'inici d'incendis en líquids, què s'entén segons el text per límits d'inflamabilitat (LSI i LII)?",
    "opciones": [
      "a) La distància màxima a la qual pot arribar una guspira",
      "b) L'interval de concentracions de la barreja d'un gas o vapor inflamable amb un oxidant necessari per reaccionar",
      "c) Els metres que separen un hidrant d'una nau adossada",
      "d) Les mides màximes permeses en un magatzem segons el REIAL DECRET 2267/2004"
    ],
    "correcta": "b",
    "feedback": "Els límits d'inflamabilitat defineixen l'interval de concentracions (LII i LSI) dins del qual la barreja de gas/vapor amb l'oxidant pot reaccionar."
  },
  {
    "id": 223,
    "tipo": "teoria",
    "texto": "D'on prové l'energia d'activació d'origen natural o atmosfèric?",
    "opciones": [
      "a) De la radiació solar directa",
      "b) Dels llamps",
      "c) De la fricció entre peces d'un motor d'explosió",
      "d) De les línies d'alta tensió"
    ],
    "correcta": "b",
    "feedback": "El document especifica que l'origen natural o atmosfèric està representat pels raigs."
  },
  {
    "id": 224,
    "tipo": "teoria",
    "texto": "Com defineix el text un sector d'incendi sota la perspectiva de la protecció passiva?",
    "opciones": [
      "a) Superfície construïda delimitada per elements resistents al foc perquè quedi confinat a l'interior i no transcendeixi",
      "b) Qualsevol zona a l'aire lliure que emmagatzemi cartró",
      "c) Un sistema format exclusivament per mànegues i ruixadors",
      "d) L'espai que es lloga a altres indústries de tipus A"
    ],
    "correcta": "a",
    "feedback": "Es defineix com la superfície construïda delimitada per elements resistents al foc perquè quedi confinat a l'interior i no s'estengui."
  },
  {
    "id": 225,
    "tipo": "teoria",
    "texto": "Amb quin objectiu s'utilitza la Protecció Passiva contra incendis a l'edificació industrial?",
    "opciones": [
      "a) Amb un paper preventiu per resistir l'incendi durant un temps determinat mitjançant mesures constructives",
      "b) Com a eina activa d'extinció per llançament d'aigua a gran pressió",
      "c) Només s'usa per reduir la prima econòmica de l'assegurança",
      "d) Per automatitzar les alarmes directament a comissaria"
    ],
    "correcta": "a",
    "feedback": "La protecció passiva juga un paper preventiu i representa mesures constructives que permeten que l'estructura resisteixi durant un temps determinat."
  }
]
[
  {
    "id": 201,
    "tipo": "teoria",
    "texto": "Segons l'estudi d'UNESPA durant l'any 2018 recollit al document, amb quina freqüència aproximada es produïa un incendi industrial a Espanya?",
    "opciones": [
      "a) Un incendi cada minut",
      "b) Un incendi cada hora aproximadament",
      "c) Un incendi cada dia",
      "d) Un incendi a la setmana"
    ],
    "correcta": "b",
    "feedback": "El document assenyala que, segons dades d'UNESPA, durant el 2018 es van produir 7.500 incendis en indústries, xifra que equival aproximadament a un incendi cada hora."
  },
  {
    "id": 202,
    "tipo": "teoria",
    "texto": "Quina disciplina NO s'esmenta en el tema com a part de l'estudi complex de la dinàmica i extinció del foc?",
    "opciones": [
      "a) La mecànica de fluids",
      "b) La transferència de calor i matèria",
      "c) La cinètica química",
      "d) L'electrònica de potència"
    ],
    "correcta": "d",
    "feedback": "Segons els apunts, en l'estudi de la dinàmica i l'extinció del foc intervenen la mecànica de fluids, la transferència de calor i matèria, i la cinètica química."
  },
  {
    "id": 203,
    "tipo": "teoria",
    "texto": "Què estableix el document respecte a la perillositat dels líquids inflamables com la gasolina o l'acetona?",
    "opciones": [
      "a) Suposen un risc molt menor que el gasoil",
      "b) Poden generar fàcilment un incendi si no es manipulen amb molt de cura",
      "c) Són totalment segurs a temperatura ambient",
      "d) Només cremen si es barregen amb aigua prèviament"
    ],
    "correcta": "b",
    "feedback": "El text indica explícitament que alguns líquids inflamables com la gasolina o l'acetona poden generar fàcilment un incendi si no es manipulen amb cura, mentre que d'altres com el gasoil suposen un risc menor."
  },
  {
    "id": 204,
    "tipo": "teoria",
    "texto": "Com defineix el document el 'Punt d'ignició'?",
    "opciones": [
      "a) És la temperatura a la qual el combustible s'apaga ràpidament",
      "b) És la temperatura mínima a la qual un combustible emet prou vapors susceptibles d'inflamar-se i de mantenir la inflamació encara que es retiri la font d'ignició",
      "c) És el moment en què la barreja és massa pobra per cremar",
      "d) És equivalent a l'origen atmosfèric d'un llamp"
    ],
    "correcta": "b",
    "feedback": "El document defineix el punt d'ignició com la temperatura mínima a la qual un combustible emet prou vapors susceptibles d'inflamar-se i de mantenir-la (segueix cremant si es retira la font)."
  },
  {
    "id": 205,
    "tipo": "teoria",
    "texto": "Com es troba habitualment el punt d'ignició d'una substància en relació amb el seu punt d'inflamació (Flash-Point)?",
    "opciones": [
      "a) Acostuma a estar uns graus per sota del punt d'inflamació",
      "b) És exactament el mateix valor de temperatura",
      "c) Acostuma a estar uns graus per sobre del punt d'inflamació",
      "d) No tenen cap tipus de relació lineal"
    ],
    "correcta": "c",
    "feedback": "Els apunts especifiquen textualment que el punt d'ignició acostuma a estar uns graus per sobre del punt d'inflamació."
  },
  {
    "id": 206,
    "tipo": "teoria",
    "texto": "En quina fase de combustió es descriu l'aparició de flames o un 'conat d'incendi' quan parlem de combustibles sòlids?",
    "opciones": [
      "a) Després del període d'incubació per oxidació espontània o escalfament",
      "b) Abans de qualsevol canvi d'olor a l'ambient",
      "c) Directament per sobre del límit superior d'explosibilitat",
      "d) Únicament si s'apaga la ventilació mecànica"
    ],
    "correcta": "a",
    "feedback": "En els combustibles sòlids, després del període d'incubació per oxidació espontània o escalfament (caracteritzat per olor de cremat), es produeix l'aparició de flames o conat d'incendi."
  },
  {
    "id": 207,
    "tipo": "teoria",
    "texto": "Quin és el percentatge en volum que ocupa l'oxigen a l'aire aproximadament, segons el text?",
    "opciones": [
      "a) 5%",
      "b) 15%",
      "c) 21%",
      "d) 78%"
    ],
    "correcta": "c",
    "feedback": "S'esmenta que l'oxigen està contingut aproximadament en un 21% en volum a l'aire, sent el comburent més comú."
  },
  {
    "id": 208,
    "tipo": "teoria",
    "texto": "Esmenta el document alguna substància que pugui patir combustió sense aportació externa d'oxigen?",
    "opciones": [
      "a) Sí, la nitrocel·lulosa, en contenir en la seva composició tant l'agent oxidant com el reductor",
      "b) No, totes les substàncies cremen estrictament per oxigen ambiental",
      "c) Sí, l'aigua destil·lada sota altes pressions",
      "d) No, l'energia d'activació ho impedeix"
    ],
    "correcta": "a",
    "feedback": "El tema recull que alguns compostos com la nitrocel·lulosa, en contenir ambdós agents (oxidant i reductor), poden patir combustió sense més aportació externa que l'energia d'activació."
  },
  {
    "id": 209,
    "tipo": "teoria",
    "texto": "Quina de les següents fonts d'ignició s'atribueix a un origen biològic segons el document?",
    "opciones": [
      "a) Els llamps",
      "b) Les reaccions exotèrmiques",
      "c) La calor que desprèn la fermentació",
      "d) Els xocs o frecs entre metalls"
    ],
    "correcta": "c",
    "feedback": "El document classifica explícitament com d'origen biològic la calor que desprèn la fermentació."
  },
  {
    "id": 210,
    "tipo": "teoria",
    "texto": "Què significa l'extinció per desalimentació segons els apunts?",
    "opciones": [
      "a) Tapar el foc amb una manta ignífuga",
      "b) Retirar parcialment o totalment el combustible a una velocitat més gran que la de propagació del foc",
      "c) Llançar pols química seca sobre les brases",
      "d) Reduir l'oxigen ambiental per sota del 15%"
    ],
    "correcta": "b",
    "feedback": "Consisteix en la retirada parcial o total del combustible, sempre que la velocitat de retirada sigui més gran que la velocitat de propagació del foc."
  },
  {
    "id": 211,
    "tipo": "teoria",
    "texto": "Quin és l'objectiu principal de la senyalització dins dels mitjans actius segons es detalla al document?",
    "opciones": [
      "a) Indicar el preu de les instal·lacions",
      "b) Garantir una fàcil i fluida evacuació dels ocupants d'un recinte i una extinció ràpida",
      "c) Evitar la utilització del telèfon mòbil durant la jornada",
      "d) Marcar les zones exclusives per a la maquinària de càrrega"
    ],
    "correcta": "b",
    "feedback": "La senyalització té per objectiu garantir una fàcil evacuació i fluida dels ocupants, així com ajudar a una extinció ràpida."
  },
  {
    "id": 212,
    "tipo": "teoria",
    "texto": "Quin dels següents elements forma part dels mitjans passius de protecció contra incendis segons s'indica en el tema?",
    "opciones": [
      "a) Polsadors d'alarma",
      "b) Ruixadors automàtics",
      "c) Dimensionat de passadissos i escales",
      "d) Boques d'Incendi Equipades (BIE)"
    ],
    "correcta": "c",
    "feedback": "Els mitjans passius es basen en la sectorització i l'evacuació, incloent-hi el dimensionat de passadissos i escales."
  },
  {
    "id": 213,
    "tipo": "teoria",
    "texto": "Què exigeix el document per considerar que diferents edificis d'un mateix establiment industrial s'han de tractar com a edificis independents?",
    "opciones": [
      "a) Que estiguin separats per una distància superior a 3 metres, o que les parets adjacents compleixin els requisits de mur separador",
      "b) Que estiguin connectats per un pont metàl·lic",
      "c) Que cadascun tingui el seu propi comptador d'aigua",
      "d) Que no superin la superfície de 480 m2 en total"
    ],
    "correcta": "a",
    "feedback": "Perquè es considerin edificis independents d'un mateix establiment la distància de separació ha de ser superior a tres metres, o bé que les parets compleixin amb els requisits de mur separador."
  },
  {
    "id": 214,
    "tipo": "teoria",
    "texto": "A la dinàmica de focs de combustibles gasosos, què succeeix en presència d'un focus d'ignició suficient?",
    "opciones": [
      "a) Es produeix una oxidació lenta que dura hores",
      "b) S'inflama instantàniament tota la massa de gas present, podent arribar a detonacions",
      "c) El combustible passa primer a estat líquid abans de cremar",
      "d) No hi ha cap reacció si l'oxigen és superior al 21%"
    ],
    "correcta": "b",
    "feedback": "En un combustible gasós, la presència d'un focus d'ignició suficient inflama instantàniament tota la massa de gas present."
  },
  {
    "id": 215,
    "tipo": "teoria",
    "texto": "De quins paràmetres depèn el càlcul detallat del Nivell de Risc Intrínsec d'un sector segons el text?",
    "opciones": [
      "a) De la velocitat mitjana del vent a la zona industrial",
      "b) De la densitat de càrrega de foc, ponderada i corregida",
      "c) Del nombre de socis capitalistes de l'empresa",
      "d) De la proximitat a xarxes públiques de clavegueram"
    ],
    "correcta": "b",
    "feedback": "Per determinar el nivell de risc s'utilitza la densitat de càrrega de foc, ponderada i corregida (Qs)."
  },
  {
    "id": 216,
    "tipo": "teoria",
    "texto": "Quan es tracta de l'evacuació en la protecció passiva, quin és el requisit que han de complir els elements d'evacuació?",
    "opciones": [
      "a) Han d'impedir la sortida del personal fins que arribin els bombers",
      "b) Han de permetre als ocupants evacuar l'edifici o sector com més aviat millor amb seguretat",
      "c) Han d'estar pintats exclusivament de color groc",
      "d) Han de ser sempre escales de caragol per estalviar espai"
    ],
    "correcta": "b",
    "feedback": "El document reflecteix que els elements d'evacuació han de permetre als ocupants evacuar l'edifici com més aviat millor amb seguretat."
  },
  {
    "id": 217,
    "tipo": "teoria",
    "texto": "Quin és un exemple de font d'ignició directa o d'origen tèrmic segons el resum de punts clau?",
    "opciones": [
      "a) Els raigs",
      "b) El fregament de metalls",
      "c) Una flama oberta o radiació directa de calor",
      "d) La fermentació de matèria orgànica"
    ],
    "correcta": "c",
    "feedback": "L'origen tèrmic o directe s'associa a l'aportació directa de calor (per exemple flames o superfícies calentes), a diferència de l'origen elèctric, mecànic o biològic."
  },
  {
    "id": 218,
    "tipo": "teoria",
    "texto": "Quina condició s'ha de complir en el procés d'implantació perquè un edifici industrial sigui segur segons el diagrama del document?",
    "opciones": [
      "a) Que la superfície construïda (Ssec) sigui més gran que la màxima permesa (Ssecmax)",
      "b) Que la superfície construïda del sector (Ssec) sigui inferior a la superfície màxima del sector (Ssecmax)",
      "c) Que no hi hagi mai cap sector d'incendi a l'edifici",
      "d) Que s'ignori el risc intrínsec per estalviar costos"
    ],
    "correcta": "b",
    "feedback": "El flux de càlcul finalitza preguntant si Ssec < Ssecmax (és a dir, si la superfície del sector és menor que la màxima permesa)."
  },
  {
    "id": 219,
    "tipo": "teoria",
    "texto": "A la dinàmica de focs en combustibles líquids, com es descriu la darrera fase en contacte amb l'aire?",
    "opciones": [
      "a) Formació d'un bloc de gel per reacció endotèrmica",
      "b) Ràpida propagació a tota la superfície lliure del líquid",
      "c) Cristal·lització immediata dels vapors",
      "d) Emissió únicament de monòxid de carboni sense flama"
    ],
    "correcta": "b",
    "feedback": "Després de l'aparició de flames, es dóna una ràpida propagació a tota la superfície lliure del líquid en contacte amb l'aire."
  },
  {
    "id": 220,
    "tipo": "teoria",
    "texto": "Quin d'aquests mètodes d'extinció té com a objectiu evitar que es desprenguin gasos inflamables reduint la temperatura?",
    "opciones": [
      "a) Inhibició",
      "b) Sufocació",
      "c) Refredament",
      "d) Desalimentació"
    ],
    "correcta": "c",
    "feedback": "El refredament actua eliminant la calor per reduir la temperatura de manera que s'evita que es desprenguin gasos inflamables."
  },
  {
    "id": 221,
    "tipo": "teoria",
    "texto": "Quin tipus d'establiment segons la ubicació s'associa a un espai obert que pot estar totalment cobert o no, però on manca totalment de tancament lateral en alguna de les façanes?",
    "opciones": [
      "a) Tipus A",
      "b) Tipus B",
      "c) Tipus C",
      "d) Tipus D"
    ],
    "correcta": "d",
    "feedback": "El document defineix el Tipus D com aquell que ocupa un espai obert on alguna de les façanes manca totalment de tancament lateral."
  },
  {
    "id": 222,
    "tipo": "teoria",
    "texto": "En relació amb els factors d'inici d'incendis en líquids, què s'entén segons el text per límits d'inflamabilitat (LSI i LII)?",
    "opciones": [
      "a) La distància màxima a la qual pot arribar una guspira",
      "b) L'interval de concentracions de la barreja d'un gas o vapor inflamable amb un oxidant necessari per reaccionar",
      "c) Els metres que separen un hidrant d'una nau adossada",
      "d) Les mides màximes permeses en un magatzem segons el REIAL DECRET 2267/2004"
    ],
    "correcta": "b",
    "feedback": "Els límits d'inflamabilitat defineixen l'interval de concentracions (LII i LSI) dins del qual la barreja de gas/vapor amb l'oxidant pot reaccionar."
  },
  {
    "id": 223,
    "tipo": "teoria",
    "texto": "D'on prové l'energia d'activació d'origen natural o atmosfèric?",
    "opciones": [
      "a) De la radiació solar directa",
      "b) Dels llamps",
      "c) De la fricció entre peces d'un motor d'explosió",
      "d) De les línies d'alta tensió"
    ],
    "correcta": "b",
    "feedback": "El document especifica que l'origen natural o atmosfèric està representat pels raigs."
  },
  {
    "id": 224,
    "tipo": "teoria",
    "texto": "Com defineix el text un sector d'incendi sota la perspectiva de la protecció passiva?",
    "opciones": [
      "a) Superfície construïda delimitada per elements resistents al foc perquè quedi confinat a l'interior i no transcendeixi",
      "b) Qualsevol zona a l'aire lliure que emmagatzemi cartró",
      "c) Un sistema format exclusivament per mànegues i ruixadors",
      "d) L'espai que es lloga a altres indústries de tipus A"
    ],
    "correcta": "a",
    "feedback": "Es defineix com la superfície construïda delimitada per elements resistents al foc perquè quedi confinat a l'interior i no s'estengui."
  },
  {
    "id": 225,
    "tipo": "teoria",
    "texto": "Amb quin objectiu s'utilitza la Protecció Passiva contra incendis a l'edificació industrial?",
    "opciones": [
      "a) Amb un paper preventiu per resistir l'incendi durant un temps determinat mitjançant mesures constructives",
      "b) Com a eina activa d'extinció per llançament d'aigua a gran pressió",
      "c) Només s'usa per reduir la prima econòmica de l'assegurança",
      "d) Per automatitzar les alarmes directament a comissaria"
    ],
    "correcta": "a",
    "feedback": "La protecció passiva juga un paper preventiu i representa mesures constructives que permeten que l'estructura resisteixi durant un temps determinat."
  }
]
[
  {
    "id": 251,
    "tipo": "teoria",
    "texto": "Segons el document, quins són els elements constructius més crítics en un edifici industrial?",
    "opciones": [
      "a) Els acabats de façana i la pintura de les oficines",
      "b) Les portes d'accés per a camions i la il·luminació",
      "c) La fonamentació i l'estructura de l'edifici (sistema resistent)",
      "d) El sistema de climatització i la instal·lació elèctrica"
    ],
    "correcta": "c",
    "feedback": "El document especifica clarament que els elements constructius més crítics són aquells inclosos en el sistema resistent: la fonamentació i l'estructura de l'edifici."
  },
  {
    "id": 252,
    "tipo": "teoria",
    "texto": "Quina és la funció principal de l'estructura d'un edifici segons el text?",
    "opciones": [
      "a) Donar una aparença estètica moderna a la planta industrial",
      "b) Resistir l'acció de les càrregues i agents exteriors sense que es perdi o alteri la disposició i característiques de disseny",
      "c) Evitar de manera directa que plogui dins de l'edifici",
      "d) Actuar exclusivament com a aïllament tèrmic i acústic"
    ],
    "correcta": "b",
    "feedback": "L'estructura es defineix com el conjunt d'elements resistents capaços de mantenir les seves formes i qualitats sota l'acció de les càrregues i agents exteriors."
  },
  {
    "id": 253,
    "tipo": "teoria",
    "texto": "Com realitza l'estructura la funció de defensar el volum interior dels agents naturals com el vent, la pluja o la neu?",
    "opciones": [
      "a) De forma directa gràcies a la impermeabilitat dels seus pilars",
      "b) De forma indirecta, a través de sustentar les façanes i cobertes",
      "c) Mitjançant un camp magnètic protector que repel·leix l'aigua",
      "d) L'estructura no té cap relació amb la defensa davant d'aquests agents"
    ],
    "correcta": "b",
    "feedback": "El text aclareix que aquesta funció no la fa l'estructura de forma directa, sinó de manera indirecta a través de donar suport i sustentar les façanes i les cobertes."
  },
  {
    "id": 254,
    "tipo": "teoria",
    "texto": "Quan es considera l'ús de dos materials igualment vàlids, quin criteri s'ha de prioritzar generalment en construccions industrials segons el 'Factor temps'?",
    "opciones": [
      "a) S'ha d'utilitzar el material que resulti més bonic a la vista",
      "b) S'ha d'emprar el material que permeti l'acabament de l'obra en un temps menor",
      "c) Sempre s'ha de triar el material que trigui més temps a muntar-se per donar feina",
      "d) El temps mai no s'ha de considerar ja que no afecta l'economia"
    ],
    "correcta": "b",
    "feedback": "El text indica que, sobretot en construccions industrials, s'ha d'emprar el material que permeti acabar l'obra en menys temps per poder començar abans l'activitat."
  },
  {
    "id": 255,
    "tipo": "teoria",
    "texto": "Segons el document, quina és la importància del factor estètic en les estructures de tipus industrial?",
    "opciones": [
      "a) És el factor més important de tots per sobre de l'economia",
      "b) En general no és de gran importància, encara que es pot considerar per especificació del client",
      "c) Està totalment prohibit gastar diners en l'estètica d'una nau",
      "d) Només importa si l'estructura és exclusivament de fusta"
    ],
    "correcta": "b",
    "feedback": "El factor estètic en estructures industrials generalment no té gran rellevància, tot i que s'admet que pot influir si el client ho demana de manera específica."
  },
  {
    "id": 256,
    "tipo": "teoria",
    "texto": "Quin material es descriu al text com l'idoni per excel·lència quan el problema a resoldre és resistir esforços de tracció?",
    "opciones": [
      "a) La pedra natural",
      "b) L'acer (o en el seu defecte, el formigó armat)",
      "c) El formigó en massa sense armar",
      "d) Els blocs ceràmics massissos"
    ],
    "correcta": "b",
    "feedback": "El text especifica que quan s'han de resistir esforços de tracció, el material natural per excel·lència és l'acer o, si no n'hi ha, el formigó armat."
  },
  {
    "id": 257,
    "tipo": "teoria",
    "texto": "Quin d'aquests elements NO està numerat ni indicat com a part estructural en la figura de la carcassa de la pàgina 9?",
    "opciones": [
      "a) Bigues i pilars",
      "b) Creu de sant Andreu",
      "c) Instal·lació de ruixadors automàtics contra incendis",
      "d) Encavallada o armadura de coberta"
    ],
    "correcta": "c",
    "feedback": "El llistat de la pàgina 9 detalla elements estructurals com pilars, bigues, corretges o creus de sant Andreu, però no inclou elements d'instal·lacions com els ruixadors."
  },
  {
    "id": 258,
    "tipo": "teoria",
    "texto": "Quina característica destaca el document sobre les estructures de formigó respecte a la protecció contra el foc?",
    "opciones": [
      "a) Necessiten sempre pintura ignífuga",
      "b) No es necessita pintura ignífuga per tenir una resistència elevada si té els recobriments pertinents",
      "c) Són molt inflamables i perilloses",
      "d) No tenen cap tipus de resistència davant de les flames"
    ],
    "correcta": "b",
    "feedback": "Segons les característiques del formigó esmentades, no es necessita pintura ignífuga per tenir una alta resistència al foc, sempre que tingui els recobriments adequats."
  },
  {
    "id": 259,
    "tipo": "teoria",
    "texto": "Quin és el pes específic típic del formigó que s'esmenta en el tema?",
    "opciones": [
      "a) 7.850 kg/m³",
      "b) 25 kN/m³",
      "c) 2.700 kg/m³",
      "d) 10 kN/m³"
    ],
    "correcta": "b",
    "feedback": "El document recull de manera explícita que el pes específic del formigó és de 25 kN/m³."
  },
  {
    "id": 260,
    "tipo": "teoria",
    "texto": "Quina és una característica representativa de les estructures d'acer?",
    "opciones": [
      "a) Són estructures molt pesades",
      "b) Són estructures lleugeres i autoportants",
      "c) Tenen un muntatge extremadament lent i complicat",
      "d) Mai necessiten pintura per protegir-se del foc"
    ],
    "correcta": "b",
    "feedback": "L'acer destaca per permetre estructures lleugeres, autoportants i de muntatge ràpid."
  },
  {
    "id": 261,
    "tipo": "teoria",
    "texto": "Quina diferència s'indica entre les unions soldades i les enroscades (amb cargols) en estructures d'acer?",
    "opciones": [
      "a) Les soldades es fan sempre a fàbrica amb millor control",
      "b) Les enroscades requereixen un menor treball de projecte",
      "c) Les soldades permeten solucionar deficiències del projecte a l'obra",
      "d) Les enroscades són molt més econòmiques que les soldades"
    ],
    "correcta": "c",
    "feedback": "El document diu que l'execució de soldadures a l'obra és més complexa, però permet solucionar deficiències de projecte. Les enroscades necessiten més control i toleràncies petites."
  },
  {
    "id": 262,
    "tipo": "teoria",
    "texto": "Quina és una de les principals problemàtiques de les unions en estructures de fusta?",
    "opciones": [
      "a) La fusta és massa pesada per fer unions",
      "b) Té baixa eficiència en la transmissió d'esforços a causa de l'anisotropia del material",
      "c) Mai es pot utilitzar en ambients d'exterior",
      "d) No és possible fer unions mecàniques amb cargols d'acer"
    ],
    "correcta": "b",
    "feedback": "El text assenyala que a causa de l'anisotropia, la fusta té baixa eficiència en la transmissió d'esforços i presenta dificultats per transmetre traccions i moments."
  },
  {
    "id": 263,
    "tipo": "teoria",
    "texto": "En el cas de construccions industrials, per què està marcada la determinació de les llums i sol·licitacions de l'estructura?",
    "opciones": [
      "a) Pel criteri lliure de l'arquitecte",
      "b) Fonamentalment pel procés industrial",
      "c) Únicament per la normativa municipal de colors de façana",
      "d) Per la disponibilitat de formigó a la zona"
    ],
    "correcta": "b",
    "feedback": "El text recull que el procés industrial té absoluta prioritat sobre la forma de l'edifici i la de l'estructura."
  },
  {
    "id": 264,
    "tipo": "teoria",
    "texto": "Quina d'aquestes és una de les funcions bàsiques dels forjats segons el document?",
    "opciones": [
      "a) Actuar com a fonamentació profunda de l'edifici",
      "b) Servir de sostre a la planta inferior i de terra a la planta superior",
      "c) Substituir les bigues principals de l'estructura",
      "d) Augmentar la flexibilitat vertical de les columnes"
    ],
    "correcta": "b",
    "feedback": "Els forjats tenen com a funcions servir de sostre de la planta inferior, terra de la superior, suportar càrregues i transmetre-les als suports."
  },
  {
    "id": 265,
    "tipo": "teoria",
    "texto": "Quina és l'exigència d'habitabilitat que han de complir els forjats en relació amb la seguretat en cas de sinistre?",
    "opciones": [
      "a) Que estiguin fets de vidre transparent",
      "b) Resistència al foc (permetent la sectorització d'incendis)",
      "c) Que deixin passar l'aire de lliure circulació",
      "d) Que no tinguin cap pes propi"
    ],
    "correcta": "b",
    "feedback": "En l'apartat d'exigències d'habitabilitat dels forjats s'inclou l'aïllament acústic i tèrmic, el pas d'instal·lacions i la resistència al foc per a la sectorització d'incendis."
  },
  {
    "id": 266,
    "tipo": "teoria",
    "texto": "Com es defineix un forjat unidireccional segons el text?",
    "opciones": [
      "a) És un forjat que només transmet les càrregues cap amunt",
      "b) Flecteix bàsicament en una direcció i transmet les càrregues a les bigues",
      "c) Flecteix en les dues direccions enviant la càrrega directament als pilars",
      "d) És un forjat que no porta cap tipus d'armat d'acer"
    ],
    "correcta": "b",
    "feedback": "Els forjats unidireccionals flecteixen bàsicament en una direcció i transmeten les càrregues a les bigues, i aquestes als suports."
  },
  {
    "id": 267,
    "tipo": "teoria",
    "texto": "En un forjat de biguetes, quina funció tenen els revoltons (o revoltoms/bobedilles)?",
    "opciones": [
      "a) Són els elements que resisteixen tota la tracció de l'edifici",
      "b) Serveixen per reduir el pes propi del conjunt del forjat",
      "c) S'utilitzen per substituir completament el formigó fresc",
      "d) S'encarreguen de subjectar les façanes"
    ],
    "correcta": "b",
    "feedback": "Els revoltons o cassetons se situen entre les biguetes i la seva funció principal és alleugerir el pes propi del conjunt del forjat."
  },
  {
    "id": 268,
    "tipo": "teoria",
    "texto": "Quina és la llum màxima habitual que s'indica per als forjats de biguetes?",
    "opciones": [
      "a) Un màxim de 50 metres",
      "b) D'uns 10 metres",
      "c) No té cap límit i pot arribar als 100 metres",
      "d) Només poden cobrir fins a 2 metres"
    ],
    "correcta": "b",
    "feedback": "Segons el text, la llum màxima (distància entre suports) per a aquest tipus de forjats sol ser d'uns 10 m."
  },
  {
    "id": 269,
    "tipo": "teoria",
    "texto": "Per a quines aplicacions s'usen habitualment els forjats de plaques alveolars?",
    "opciones": [
      "a) Exclusivament per a casetes de jardí molt petites",
      "b) Grans sobrecàrregues i/o llums com aparcaments, magatzems i obra industrial",
      "c) Per a cases de fusta desmuntables",
      "d) Només per a falsos sostres decoratius"
    ],
    "correcta": "b",
    "feedback": "Les plaques alveolars s'utilitzen en construccions que requereixen grans llums o sobrecàrregues (naus industrials, aparcaments, grans centres)."
  },
  {
    "id": 270,
    "tipo": "teoria",
    "texto": "Quina llum màxima no solen superar els forjats de plaques alveolars segons el document?",
    "opciones": [
      "a) 5 metres",
      "b) 20 metres",
      "c) 80 metres",
      "d) No tenen límit"
    ],
    "correcta": "b",
    "feedback": "S'especifica que les plaques alveolars s'estandarditzen en amplades d'1,20 m o 2,40 m i que les seves llums no solen superar els 20 metres."
  },
  {
    "id": 271,
    "tipo": "teoria",
    "texto": "Com treballa estructuralment un forjat de xapa col·laborant un cop el formigó s'ha endurit?",
    "opciones": [
      "a) La xapa d'acer treballa a tracció i el formigó a compressió",
      "b) El formigó treballa a tracció i la xapa a compressió",
      "c) La xapa es retira i només treballa el formigó armat",
      "d) Només treballa la xapa i el formigó s'usa com a decoració"
    ],
    "correcta": "a",
    "feedback": "El text explica que es combinen de manera que la xapa d'acer treballa a tracció i el formigó endurit a compressió."
  },
  {
    "id": 272,
    "tipo": "teoria",
    "texto": "Quin és un dels inconvenients esmentats per als forjats de xapa col·laborant?",
    "opciones": [
      "a) Són extremadament pesats",
      "b) Mal comportament tèrmic, acústic i davant del foc",
      "c) Requereixen maquinària de gran tonatge per a la seva col·locació",
      "d) Són els més lents d'executar a l'obra"
    ],
    "correcta": "b",
    "feedback": "Tot i ser ràpids d'executar i lleugers, s'indica com a desavantatge el seu mal comportament tèrmic, acústic i davant del foc."
  },
  {
    "id": 273,
    "tipo": "teoria",
    "texto": "Quines són les tipologies de forjats més habituals per a edificis industrials segons l'ús indicat al final del tema?",
    "opciones": [
      "a) Forjats de biguetes i semibiguetes de fusta",
      "b) Lloses alveolars/prelloses, forjats reticulars i lloses contínues",
      "c) Només xapa col·laborant",
      "d) Forjats de revoltó ceràmic tradicional"
    ],
    "correcta": "b",
    "feedback": "En el resum d'usos per a edificis industrials s'assenyalen les lloses alveolars/prelloses, els forjats reticulars i les lloses contínues."
  },
  {
    "id": 274,
    "tipo": "teoria",
    "texto": "Quin tipus de forjat s'indica com el més habitual en edificis residencials antics de petites dimensions?",
    "opciones": [
      "a) Forjats unidireccionals de biguetes/semibiguetes",
      "b) Forjats reticulars amb cassetó recuperable",
      "c) Lloses de formigó posttesat",
      "d) Xapa col·laborant"
    ],
    "correcta": "a",
    "feedback": "El document recull que en edificis residencials antics o petits la tipologia més habitual són els forjats unidireccionals de biguetes."
  },
  {
    "id": 275,
    "tipo": "teoria",
    "texto": "En quin cas s'usen els forjats reticulars en edificis residencials moderns segons el document?",
    "opciones": [
      "a) Únicament quan l'edifici té una sola planta",
      "b) En edificis de grans dimensions o alçada, amb càrregues o llums més grans",
      "c) Només quan l'estructura és totalment de fusta",
      "d) Estan prohibits per a l'ús residencial segons el text"
    ],
    "correcta": "b",
    "feedback": "Segons l'apartat final d'usos, els forjats reticulars s'utilitzen en edificis residencials moderns de grans dimensions o alçades on hi ha llums i càrregues majors."
  }
]
[
  {
    "id": 276,
    "tipo": "teoria",
    "texto": "Segons el document, què és el que condiciona les dimensions de la planta d'un edifici industrial i, en conseqüència, el tipus d'estructura?",
    "opciones": [
      "a) El disseny de la façana exterior",
      "b) La distribució en planta de la maquinària i el procés de fabricació",
      "c) Únicament el pressupost total de l'obra",
      "d) El tipus d'il·luminació artificial escollit"
    ],
    "correcta": "b",
    "feedback": "El document recull que la distribució en planta de la maquinària, les línies de producció i el procés industrial són els que condicionen les dimensions i la forma de l'edifici."
  },
  {
    "id": 277,
    "tipo": "teoria",
    "texto": "Quina d'aquestes afirmacions defineix millor el 'Factor econòmic' a l'hora d'escollir una estructura segons el tema?",
    "opciones": [
      "a) S'ha de triar sempre l'estructura que consumeixi menys quilos d'acer",
      "b) S'ha de buscar l'estructura que resulti més econòmica considerant el cost total (materials, muntatge i manteniment)",
      "c) L'economia només depèn de la distància a la qual es troba la cimentera",
      "d) Els costos de manteniment no s'han de tenir mai en compte"
    ],
    "correcta": "b",
    "feedback": "El criteri econòmic no depèn nomell del preu d'un material, sinó de l'estudi complet que inclou fabricació, transport, muntatge i el posterior manteniment."
  },
  {
    "id": 278,
    "tipo": "teoria",
    "texto": "Quina propietat del formigó s'esmenta com un desavantatge en relació amb les modificacions posteriors de l'edifici?",
    "opciones": [
      "a) Que és massa lleuger per aguantar el vent",
      "b) Que presenta dificultats per a posteriors reformes o ampliacions en comparació amb l'acer",
      "c) Que no es pot pintar mai",
      "d) Que s'oxida fàcilment amb l'aire"
    ],
    "correcta": "b",
    "feedback": "El document assenyala que un dels desavantatges de les estructures de formigó és la dificultat que presenten a l'hora de fer modificacions o reformes posteriors."
  },
  {
    "id": 279,
    "tipo": "teoria",
    "texto": "Quin és un dels principals avantatges de les estructures d'acer respecte a l'espai útil?",
    "opciones": [
      "a) Els pilars d'acer són molt més voluminosos que els de formigó",
      "b) Permet obtenir seccions més reduïdes dels elements resistents, guanyant espai útil",
      "c) S'adapta pitjor a les formes geomètriques complexes",
      "d) No necessita cap tipus de fonamentació"
    ],
    "correcta": "b",
    "feedback": "L'acer, en tenir una gran resistència, permet que els elements (com els pilars) tinguin seccions més petites, optimitzant l'espai útil a l'interior de la nau."
  },
  {
    "id": 280,
    "tipo": "teoria",
    "texto": "Quin és el principal inconvenient de l'acer estructural davant d'un incendi?",
    "opciones": [
      "a) Crema molt ràpidament amb flama oberta",
      "b) Perd la seva capacitat resistent a partir de temperatures relativament baixes",
      "c) Emet fums tòxics que impedeixen l'evacuació",
      "d) Explota quan entra en contacte amb l'aigua dels bombers"
    ],
    "correcta": "b",
    "feedback": "L'acer no és combustible, però té una pèssima resistència al foc perquè perd la seva resistència mecànica ràpidament quan s'escalfa."
  },
  {
    "id": 281,
    "tipo": "teoria",
    "texto": "En quin tipus d'ambient NO és aconsellable utilitzar estructures de fusta sense tractaments especials?",
    "opciones": [
      "a) En ambients molt secs i tancats",
      "b) En ambients amb alta humitat o intempèrie on pugui patir atacs biològics",
      "c) En edificis amb grans requeriments estètics",
      "d) En zones on no es pugui soldar"
    ],
    "correcta": "b",
    "feedback": "La fusta és un material orgànic i, per tant, és sensible a la humitat, els fongs i els insectes si es troba a la intempèrie o en ambients humits."
  },
  {
    "id": 282,
    "tipo": "teoria",
    "texto": "Quina diferència s'indica entre els forjats unidireccionals i els bidireccionals?",
    "opciones": [
      "a) Els unidireccionals flecteixen bàsicament en una direcció; els bidireccionals en dues",
      "b) Els bidireccionals només es poden fer de fusta",
      "c) Els unidireccionals s'usen exclusivament per a ponts",
      "d) No hi ha cap diferència a la pràctica"
    ],
    "correcta": "a",
    "feedback": "El document diferencia clarament els forjats que flecteixen en una sola direcció (unidireccionals) dels que ho fan en dues (bidireccionals o reticulars)."
  },
  {
    "id": 283,
    "tipo": "teoria",
    "texto": "En un forjat de biguetes, quins són els elements que s'encarreguen de resistir els esforços de flexió?",
    "opciones": [
      "a) Únicament els revoltons de ceràmica",
      "b) Les biguetes (de formigó armat o pretensat, o metàl·liques)",
      "c) La pintura de sota del sostre",
      "d) Les bovedilles de poliestirè"
    ],
    "correcta": "b",
    "feedback": "Les biguetes són els elements resistents del forjat que suporten les càrregues i les transmeten a les bigues principals."
  },
  {
    "id": 284,
    "tipo": "teoria",
    "texto": "Quin és l'objectiu de col·locar una capa de compressió de formigó sobre les biguetes i els revoltons?",
    "opciones": [
      "a) Decorar el terra perquè quedi més llis",
      "b) Unir tots els elements i absorbir els esforços de compressió a la part superior",
      "c) Evitar que els treballadors caiguin durant l'obra",
      "d) Substituir l'ús de pilars a l'edifici"
    ],
    "correcta": "b",
    "feedback": "La capa de compressió (generalment de 3 a 5 cm i amb un mallat d'acer) lliga tot el conjunt i resisteix les compressions de la flexió."
  },
  {
    "id": 285,
    "tipo": "teoria",
    "texto": "Quina característica geomètrica tenen les plaques alveolars que les fa ideals per reduir el pes propi?",
    "opciones": [
      "a) Són totalment massisses de formigó de dalt a baix",
      "b) Incorporen uns buits longitudinals (alvèols) al llarg de tota la peça",
      "c) Estan fetes amb xapa d'acer de menys d'un mil·límetre",
      "d) Són peces en forma de piràmide invertida"
    ],
    "correcta": "b",
    "feedback": "Les plaques alveolars tenen uns forats o alvèols al seu interior que redueixen el pes de la peça sense perdre gaire capacitat resistent."
  },
  {
    "id": 286,
    "tipo": "teoria",
    "texto": "Què s'ha de col·locar a l'obra entre les juntes de les plaques alveolars abans d'abocar la capa de compressió?",
    "opciones": [
      "a) Guix per tapar les esquerdes",
      "b) Armadura de lligat (barres d'acer) a les juntes",
      "c) No s'ha de col·locar res; es deixa el buit lliure",
      "d) Trossos de fusta per separar-les"
    ],
    "correcta": "b",
    "feedback": "Perquè les plaques treballin juntes com un únic forjat, s'introdueixen barres d'acer a les juntes abans de formigonar la capa superior."
  },
  {
    "id": 287,
    "tipo": "teoria",
    "texto": "Quin és l'avantatge principal de la xapa col·laborant pel que fa a l'obra?",
    "opciones": [
      "a) Elimina la necessitat d'utilitzar formigó",
      "b) Actua com a encofrat perdut, estalviant apuntalaments i accelerant el procés",
      "c) És el material que millor resisteix el foc sense pintura",
      "d) No requereix ser calculada per un enginyer"
    ],
    "correcta": "b",
    "feedback": "La xapa d'acer serveix d'encofrat per rebre el formigó fresc, per la qual cosa redueix molt la necessitat de puntals i fa l'obra molt més ràpida."
  },
  {
    "id": 288,
    "tipo": "teoria",
    "texto": "Quin tipus de forjat flecteix en dues direccions i es recolza directament sobre els pilars sense necessitat de bigues?",
    "opciones": [
      "a) Forjat unidireccional de biguetes",
      "b) Forjat reticular (o bidireccional)",
      "c) Forjat de plaques alveolars",
      "d) Forjat de xapa col·laborant"
    ],
    "correcta": "b",
    "feedback": "Els forjats reticulars s'organitzen en una quadrícula de nervis que permeten repartir les càrregues en dues direccions directament cap als pilars."
  },
  {
    "id": 289,
    "tipo": "teoria",
    "texto": "Com s'anomena la zona massissa de formigó que s'executa al voltant dels pilars en els forjats reticulars per evitar el punxonament?",
    "opciones": [
      "a) Bigatgeria",
      "b) Àbac",
      "c) Caperutxa de plàstic",
      "d) Sabata aèria"
    ],
    "correcta": "b",
    "feedback": "L'àbac és la zona on s'eliminen els cassetons d'alleugeriment al voltant del pilar per fer un bloc massís de formigó que resisteixi els grans esforços que hi ha en aquest punt."
  },
  {
    "id": 290,
    "tipo": "teoria",
    "texto": "Quin d'aquests materials NO s'esmenta com a habitual per fabricar els cassetons recuperables d'un forjat reticular?",
    "opciones": [
      "a) Plàstic",
      "b) Metall",
      "c) Vidre trempat",
      "d) Tots els anteriors s'usen per igual"
    ],
    "correcta": "c",
    "feedback": "Els cassetons recuperables solen ser de plàstic o de metall per poder-los treure un cop el formigó ha endurit. El vidre no s'utilitza per a aquesta funció."
  },
  {
    "id": 291,
    "tipo": "teoria",
    "texto": "En quin tipus d'edifici s'indica al resum final que s'utilitzen habitualment els forjats de xapa col·laborant?",
    "opciones": [
      "a) En casetes rurals de pedra",
      "b) En edificis terciaris singulars, de gran alçada i geometria complexa",
      "c) Únicament en naus de ramaderia",
      "d) En edificis residencials antics de poble"
    ],
    "correcta": "b",
    "feedback": "L'esquema final recull que la xapa col·laborant és típica d'edificis terciaris singulars, de gran alçada o amb geometries complexes."
  },
  {
    "id": 292,
    "tipo": "teoria",
    "texto": "Quin és el pes específic de l'acer estructural esmentat en el tema?",
    "opciones": [
      "a) 25 kN/m³",
      "b) 78,5 kN/m³",
      "c) 10 kN/m³",
      "d) 1.000 kg/m³"
    ],
    "correcta": "b",
    "feedback": "El document especifica que el pes específic de l'acer és de 78,5 kN/m³ (equivalent a uns 7.850 kg/m³)."
  },
  {
    "id": 293,
    "tipo": "teoria",
    "texto": "Quina diferència d'origen hi ha entre el formigó i l'acer segons el text?",
    "opciones": [
      "a) L'acer es fabrica totalment a peu d'obra i el formigó ve sempre de fàbrica",
      "b) El formigó s'elabora a partir de matèries primeres naturals abundants; l'acer requereix un procés industrial més complex i costós",
      "c) L'acer és un material orgànic i el formigó és inorgànic",
      "d) No hi ha cap diferència; tots dos es troben lliures a la natura"
    ],
    "correcta": "b",
    "feedback": "El formigó s'elabora fàcilment amb ciment, aigua i àrids (presents a gairebé tot arreu). L'acer requereix una indústria siderúrgica pesant."
  },
  {
    "id": 294,
    "tipo": "teoria",
    "texto": "Quin tipus de manteniment requereix una estructura d'acer en ambients industrials normals?",
    "opciones": [
      "a) Cap manteniment durant tota la seva vida útil",
      "b) Pintat periòdic per protegir-la contra la corrosió",
      "c) Regar-la amb aigua un cop al mes",
      "d) Envernissat contra els fongs"
    ],
    "correcta": "b",
    "feedback": "L'acer és sensible a l'oxidació, per la qual cosa necessita un manteniment periòdic mitjançant pintures protectores per evitar que es corroeixi."
  },
  {
    "id": 295,
    "tipo": "teoria",
    "texto": "Per què s'atribueix a les estructures d'acer una gran seguretat davant de fallades imprevistes?",
    "opciones": [
      "a) Perquè és un material molt dúctil que avisa abans de trencar-se deformant-se clarament",
      "b) Perquè és un material tan rígid que mai es deforma",
      "c) Perquè resisteix qualsevol temperatura sense immutar-se",
      "d) Perquè és un material d'origen vegetal molt elàstic"
    ],
    "correcta": "a",
    "feedback": "La ductilitat de l'acer fa que, davant d'una sobrecàrrega excessiva, es deformi molt abans de trencar-se, donant temps a detectar el problema."
  },
  {
    "id": 296,
    "tipo": "teoria",
    "texto": "Quin és el principal inconvenient del formigó respecte al seu propi pes?",
    "opciones": [
      "a) Que és massa lleuger i s'ho emporta el vent",
      "b) Que té un pes propi elevat que obliga a fer fonaments més grans",
      "c) Que el seu pes canvia cada dia segons la humitat de l'aire",
      "d) El formigó no té pes apreciable"
    ],
    "correcta": "b",
    "feedback": "El formigó és un material molt pesat. Això fa que gran part de la seva capacitat resistent es gasti només a aguantar-se a si mateix, encarint la fonamentació."
  },
  {
    "id": 297,
    "tipo": "teoria",
    "texto": "Quin avantatge presenta el muntatge de les estructures d'acer respecte a les de formigó abocat 'in situ'?",
    "opciones": [
      "a) Requereix l'ús de molta més aigua a l'obra",
      "b) Les peces arriben preparades de taller i el muntatge és molt ràpid (construcció en sec)",
      "c) S'ha d'esperar 28 dies perquè l'acer s'endureixi",
      "d) No es pot fer amb grues"
    ],
    "correcta": "b",
    "feedback": "L'acer permet la construcció en sec. Les peces es fabriquen a taller i s'enllacen a l'obra ràpidament amb cargols o soldadura, sense temps d'espera d'enduriment."
  },
  {
    "id": 298,
    "tipo": "teoria",
    "texto": "Quina solució constructiva s'adopta per fer forjats de biguetes en naus industrials on es vol evitar l'ús de puntals?",
    "opciones": [
      "a) S'utilitzen biguetes autorresistents de formigó pretensat",
      "b) Es fan els forjats totalment de suro",
      "c) S'obliga els obrers a subjectar les biguetes amb les mans",
      "d) No és possible fer forjats de biguetes sense apuntalar"
    ],
    "correcta": "a",
    "feedback": "Les biguetes autorresistents tenen prou capacitat per aguantar el seu propi pes i el del formigó fresc sense necessitat de posar puntals a sota."
  },
  {
    "id": 299,
    "tipo": "teoria",
    "texto": "En un forjat de plaques alveolars, què passa si no es posa una capa de compressió a sobre?",
    "opciones": [
      "a) No passa res, el forjat funciona exactament igual",
      "b) Les plaques no queden ben enllaçades i les càrregues puntuals no es reparteixen correctament",
      "c) El forjat es torna completament impermeable",
      "d) Les plaques es tornen de color groc"
    ],
    "correcta": "b",
    "feedback": "Sense la capa de compressió de formigó armat, les plaques funcionen de manera independent i no es garanteix un comportament conjunt de tot el sostre."
  },
  {
    "id": 300,
    "tipo": "teoria",
    "texto": "Quin element de la xapa col·laborant serveix perquè l'acer i el formigó no llisquin entre ells i treballin realment junts?",
    "opciones": [
      "a) La pintura de color gris",
      "b) Uns relleus o encunys a la pròpia xapa que fan d'ancoratge mecànic",
      "c) Una capa de greix que es posa entre els dos",
      "d) No es posa res perquè s'enganxen sols de manera química"
    ],
    "correcta": "b",
    "feedback": "La xapa té uns relleus o greons que 'morden' el formigó un cop s'ha endurit, assegurant que els dos materials col·laborin sense lliscar."
  }
]
[
  {
    "id": 301,
    "tipo": "teoria",
    "texto": "Segons el document, quina és la tendència actual respecte a la importància de la localització de les instal·lacions industrials?",
    "opciones": [
      "a) Ha anat perdent importància a causa de l'automatització",
      "b) Està adquirint una importància creixent a causa de la globalització i l'obertura de mercats",
      "c) Ja no es considera un factor clau en les decisions estratègiques",
      "d) Només importa per a les petites empreses de caràcter local"
    ],
    "correcta": "b",
    "feedback": "El tema recull que la decisió de localització és de gran importància i que està adquirint un relleu creixent degut a la globalització i la internacionalització dels mercats."
  },
  {
    "id": 302,
    "tipo": "teoria",
    "texto": "Com s'atribueix la decisió de localització dins de l'esquema d'operacions de l'empresa segons el text?",
    "opciones": [
      "a) És una decisió purament tàctica a curt termini",
      "b) És una decisió estratègica a llarg termini i difícilment reversible",
      "c) És una decisió que es pren cada any de forma rutinària",
      "d) Es considera una decisió independent de la capacitat de producció"
    ],
    "correcta": "b",
    "feedback": "El document especifica que les decisions de localització són estratègiques, involucren un llarg termini, comprometen gran quantitat de recursos i són difícilment reversibles."
  },
  {
    "id": 303,
    "tipo": "teoria",
    "texto": "Quina d'aquestes és una causa típica que provoca la decisió de buscar una nova localització per a una empresa?",
    "opciones": [
      "a) El manteniment de la mateixa quota de mercat",
      "b) Mercat en expansió que requereix un augment de la capacitat",
      "c) L'estabilitat total en els preus de les matèries primeres",
      "d) Que no hi hagi cap tipus d'innovació tecnològica"
    ],
    "correcta": "b",
    "feedback": "Entre les causes que esmenta el text s'inclouen: mercat en expansió, canvis en la distribució de la demanda, exhauriment de matèries primeres, entre d'altres."
  },
  {
    "id": 304,
    "tipo": "teoria",
    "texto": "Quan es dóna el motiu de localització per 'canvis en els llocs de demanda'?",
    "opciones": [
      "a) Quan es vol mantenir exactament el mateix taller històric",
      "b) Quan els clients es desplacen o apareixen nous mercats llunyans",
      "c) Quan l'empresa decideix reduir la plantilla un 50%",
      "d) Quan els proveïdors venen personalment a portar el material"
    ],
    "correcta": "b",
    "feedback": "Aquesta causa es dóna quan el mercat de consum o els clients potencials es mouen geogràficament, obligant l'empresa a acostar-s'hi."
  },
  {
    "id": 305,
    "tipo": "teoria",
    "texto": "A quin tipus d'indústries els afecta especialment el motiu de localització per 'exhauriment de les fonts de matèries primeres'?",
    "opciones": [
      "a) A les empreses de desenvolupament de software",
      "b) A les indústries extractives",
      "c) A les assessories legals",
      "d) A les botigues de roba al detall"
    ],
    "correcta": "b",
    "feedback": "Afecta de manera directa les indústries extractives (mineria, pedreres, fusta) quan el recurs natural del lloc s'acaba."
  },
  {
    "id": 306,
    "tipo": "teoria",
    "texto": "Quin és un exemple de motiu de localització per 'obsolescència de la planta'?",
    "opciones": [
      "a) Quan s'adquireix una nau que encara té 50 anys de vida útil",
      "b) Quan l'estructura de l'edifici o els espais ja no permeten la instal·lació de nova tecnologia moderna",
      "c) Quan l'empresa té beneficis rècord i no vol canviar res",
      "d) Quan els treballadors demanen un augment de sou"
    ],
    "correcta": "b",
    "feedback": "L'obsolescència es produeix quan la instal·lació física queda antiga i impedeix adaptar els nous processos o créixer físicament."
  },
  {
    "id": 307,
    "tipo": "teoria",
    "texto": "Quines són les tres opcions bàsiques que té una empresa quan decideix expandir-se segons el document?",
    "opciones": [
      "a) Tancar l'empresa, canviar de sector o acomiadar tothom",
      "b) Expandir la planta existent, afegir noves plantes en altres llocs o tancar i moure's a un altre lloc",
      "c) Reduir la jornada laboral, abaixar els preus o canviar el logotip",
      "d) Externalitzar tot el procés, canviar de banc o no fer res"
    ],
    "correcta": "b",
    "feedback": "L'empresa pot triar entre expandir la que ja té (si hi ha lloc), mantenir la d'origen i obrir-ne de noves en altres llocs, o tancar la planta actual i traslladar-se completament."
  },
  {
    "id": 308,
    "tipo": "teoria",
    "texto": "Quin és el principal avantatge d'expandir una planta ja existent segons el text?",
    "opciones": [
      "a) S'evita haver de demanar llicències d'obra noves",
      "b) S'aprofita el personal, els sistemes de distribució i l'experiència en un lloc ja conegut",
      "c) S'assegura que no es pagaran impostos durant 5 anys",
      "d) Es redueix automàticament el cost de l'energia a la meitat"
    ],
    "correcta": "b",
    "feedback": "L'ampliació manté l'equip directiu, el personal format, els canals de distribució coneguts i redueix el risc empresarial."
  },
  {
    "id": 309,
    "tipo": "teoria",
    "texto": "En quin cas NO s'aconsella l'opció de tancar la planta actual i obrir-ne una de nova en una altra localització?",
    "opciones": [
      "a) Quan els costos d'expansió al lloc actual són excessius",
      "b) Quan el personal està molt arrelat a la zona i no es vol perdre el capital humà clau",
      "c) Quan hi ha greus problemes d'espai al solar actual",
      "d) Quan s'ha produït un canvi radical en la tecnologia de fabricació"
    ],
    "correcta": "b",
    "feedback": "El trasllat total comporta un gran cost de tancament, pèrdua d'arrelament dels treballadors i un elevat risc si el personal expert no es vol moure."
  },
  {
    "id": 310,
    "tipo": "teoria",
    "texto": "Quin tipus de transport s'esmenta com el més adequat per a mercaderies de gran volum i baix valor unitari segons els paràmetres de localització?",
    "opciones": [
      "a) L'avió comercial",
      "b) El ferrocarril o el transport marítim",
      "c) El transport per carretera en furgonetes petites",
      "d) El servei de missatgeria urgent"
    ],
    "correcta": "b",
    "feedback": "El tren i el vaixell són els mitjans més econòmics per moure grans quantitats o volums de materials pesants a llargues distàncies."
  },
  {
    "id": 311,
    "tipo": "teoria",
    "texto": "En quin cas una empresa tendeix a localitzar-se a prop dels mercats (clients) segons els apunts?",
    "opciones": [
      "a) Quan el producte final és extremadament pesat o voluminós en comparació amb les matèries primeres",
      "b) Quan la matèria primera és molt pesant i el producte final és molt lleuger",
      "c) Quan el producte és impereceder i pot viatjar durant setmanes",
      "d) Quan la mà d'obra és l'únic factor que importa"
    ],
    "correcta": "a",
    "feedback": "Les indústries que afegeixen pes o volum al producte final (com les d'embotellar líquids) s'acosten al mercat per estalviar en transport."
  },
  {
    "id": 312,
    "tipo": "teoria",
    "texto": "Per a quina mena d'empreses és decisiu el factor de localització de la mà d'obra?",
    "opciones": [
      "a) Per a aquelles que estan totalment automatitzades amb robòtica",
      "b) Per a empreses que requereixen molta mà d'obra ('labor intensive') o habilitats molt específiques",
      "c) Per a empreses que només venen productes digitals sense treballadors",
      "d) Per a les companyies que compren energia directament a alta tensió"
    ],
    "correcta": "b",
    "feedback": "El cost laboral, la disponibilitat de treballadors i l'especialització són claus en indústries on el factor humà representa una gran part del cost."
  },
  {
    "id": 313,
    "tipo": "teoria",
    "texto": "Com influeixen les fonts d'energia en la localització d'una indústria avui en dia en comparació amb el passat?",
    "opciones": [
      "a) Avui és més fàcil transportar l'energia elèctrica, per la qual cosa no cal estar tocant a les mines de carbó o rius",
      "b) Avui és totalment obligatori estar al costat d'un salt d'aigua",
      "c) L'energia ja no té cap cost en el balanç de l'empresa",
      "d) S'ha tornat més difícil transportar l'energia que al segle XIX"
    ],
    "correcta": "a",
    "feedback": "Històricament les fàbriques havien d'estar a prop dels rius o mines de carbó. Avui la xarxa elèctrica permet una major llibertat geogràfica."
  },
  {
    "id": 314,
    "tipo": "teoria",
    "texto": "Per a quines indústries segueix sent un factor clau de localització la proximitat de grans quantitats d'aigua?",
    "opciones": [
      "a) Indústries químiques, papereres o metal·lúrgiques",
      "b) Empreses de muntatge de components electrònics",
      "c) Tallers de costura de roba d'alta costura",
      "d) Oficines de disseny gràfic"
    ],
    "correcta": "a",
    "feedback": "Aquestes indústries usen l'aigua en grans quantitats com a part del procés químic, per a refrigeració o per a rentats de material."
  },
  {
    "id": 315,
    "tipo": "teoria",
    "texto": "Quina diferència s'estableix al text entre els factors objectius i els subjectius de localització?",
    "opciones": [
      "a) Els objectius es poden mesurar en termes econòmics; els subjectius depenen de preferències personals",
      "b) Els subjectius són els únics que s'haurien de fer servir",
      "c) Els objectius no tenen res a veure amb els diners",
      "d) No hi ha cap diferència entre els dos tipus"
    ],
    "correcta": "a",
    "feedback": "Els factors objectius (com el cost del sòl o el transport) són quantificables econòmicament. Els subjectius (com la qualitat de vida) són intangibles."
  },
  {
    "id": 316,
    "tipo": "teoria",
    "texto": "Segons l'evolució històrica que s'esmenta, quin autor va publicar l'any 1909 la teoria sobre la localització d'indústries basada en el punt de cost mínim de transport?",
    "opciones": [
      "a) Alfred Weber",
      "b) Henry Ford",
      "c) Adam Smith",
      "d) Isaac Newton"
    ],
    "correcta": "a",
    "feedback": "Alfred Weber va proposar l'any 1909 un model pioner basat en minimitzar els costos de transport des de les matèries primeres fins al mercat."
  },
  {
    "id": 317,
    "tipo": "teoria",
    "texto": "En què consisteix el 'Mètode de l'anàlisi d'ingressos i despeses' segons el document?",
    "opciones": [
      "a) A escollir la localització de forma totalment aleatòria",
      "b) A comparar els ingressos i despeses previstos en diferents localitzacions per triar la que doni més benefici",
      "c) A analitzar únicament les despeses d'assegurances de l'empresa",
      "d) A no tenir en compte els clients potencials"
    ],
    "correcta": "b",
    "feedback": "Consisteix a projectar els comptes d'explotació (ingressos i costos estimats) de cada localització candidata per veure quina és la més rendible."
  },
  {
    "id": 318,
    "tipo": "teoria",
    "texto": "Quin és l'objectiu principal del 'Mètode del centre de gravetat' en la localització?",
    "opciones": [
      "a) Trobar un punt geomètric que minimitzi els costos de distribució de transport cap als diferents mercats o des dels proveïdors",
      "b) Trobar el lloc on la gravetat de la Terra sigui menor per estalviar energia",
      "c) Ubicar la planta sempre en el centre històric de la capital",
      "d) Triar el poble que tingui el terreny més barat de tots"
    ],
    "correcta": "a",
    "feedback": "Aquest mètode matemàtic busca unes coordenades (X,Y) equilibrades segons el volum de càrrega que es mou cap a cada mercat o proveïdor per optimitzar el transport."
  },
  {
    "id": 319,
    "tipo": "teoria",
    "texto": "Com funciona el 'Mètode dels factors ponderats'?",
    "opciones": [
      "a) S'escull el lloc segons la llista alfabètica de les ciutats",
      "b) S'assigna un pes o puntuació a diferents factors (sol, treballadors, transport) i es valora cada localització segons aquests barems",
      "c) Només es té en compte el factor del preu de l'electricitat",
      "d) El director de l'empresa tria a dit la ciutat sense cap criteri"
    ],
    "correcta": "b",
    "feedback": "Consisteix a definir una llista de factors rellevants, donar-los un pes segons la seva importància i puntuar cada lloc candidat per obtenir una nota final ponderada."
  },
  {
    "id": 320,
    "tipo": "teoria",
    "texto": "Quina de les següents NO és una de les etapes del procés d'elecció d'una localització segons el document?",
    "opciones": [
      "a) Anàlisi preliminar",
      "b) Estudi de les diferents alternatives (macro i micro)",
      "c) Avaluació de les alternatives",
      "d) Sorteig públic de la ubicació davant de notari"
    ],
    "correcta": "d",
    "feedback": "Les fases recollides són l'anàlisi preliminar, l'estudi de comunitat/macro i micro-localització, i l'avaluació detallada de les alternatives. No es fa cap sorteig."
  },
  {
    "id": 321,
    "tipo": "teoria",
    "texto": "Què s'estudia en la fase de 'Macro-localització' (o selecció de la regió)?",
    "opciones": [
      "a) El carrer exacte i el número de parcel·la on anirà la nau",
      "b) La regió, país o zona geogràfica àmplia que compleix els criteris generals de l'empresa",
      "c) El color que tindran les rajoles del bany",
      "d) El nom dels proveïdors d'Internet de la zona"
    ],
    "correcta": "b",
    "feedback": "La macro-localització redueix la cerca a una regió, comunitat o país determinat, deixant la micro-localització per triar el solar en concret."
  },
  {
    "id": 322,
    "tipo": "teoria",
    "texto": "Què es decideix en la fase de 'Micro-localització'?",
    "opciones": [
      "a) El país d'Europa on es vol instal·lar la fàbrica",
      "b) La parcel·la concreta i específica dins d'un municipi o polígon industrial",
      "c) Si s'ha de fabricar un producte nou o no",
      "d) El tipus d'estructura de formigó que tindrà l'edifici"
    ],
    "correcta": "b",
    "feedback": "La micro-localització és la darrera fase de l'estudi, on es tria el terreny precís on s'ubicarà l'establiment industrial."
  },
  {
    "id": 323,
    "tipo": "teoria",
    "texto": "Quin és el principal inconvenient del 'Mètode de l'anàlisi d'ingressos i despeses'?",
    "opciones": [
      "a) Que s'oblida de mirar quant val el transport",
      "b) La dificultat de preveure i quantificar amb precisió els ingressos i les despeses a futur per a cada lloc",
      "c) Que només serveix per a empreses de menys de 5 treballadors",
      "d) Que no dóna cap resultat numèric"
    ],
    "correcta": "b",
    "feedback": "L'inconvenient és que fer previsions precises d'ingressos i costos en localitzacions noves i diferents és molt complex i té un marge d'error."
  },
  {
    "id": 324,
    "tipo": "teoria",
    "texto": "Quin d'aquests factors es considera d'origen polític o legal en la decisió de localització?",
    "opciones": [
      "a) La distància als ports de mar",
      "b) Les subvencions, ajudes públiques i la fiscalitat de la zona",
      "c) El cabal dels rius propers",
      "d) La duresa del terreny per a les fonamentacions"
    ],
    "correcta": "b",
    "feedback": "Les ajudes econòmiques del govern, els impostos locals i les traves burocràtiques són factors legals o polítics que poden decantar la decisió."
  },
  {
    "id": 325,
    "tipo": "teoria",
    "texto": "Què s'entén pel factor subjectiu de 'Clima industrial' en una zona?",
    "opciones": [
      "a) La temperatura mitjana que fa a la zona durant l'estiu",
      "b) L'actitud de la comunitat, dels sindicats i de l'administració local cap a la implantació de noves empreses",
      "c) El nivell de pluges registrat durant l'últim segle",
      "d) El gruix de la capa d'ozó en aquell territori"
    ],
    "correcta": "b",
    "feedback": "El clima industrial fa referència a l'acceptació social, la tradició obrera, la facilitat administrativa o la conflictivitat laboral d'una localització en concret."
  }
]
[
  {
    "id": 326,
    "tipo": "teoria",
    "texto": "Segons el text, quin efecte té l'augment de la distància sobre el cost de transport?",
    "opciones": [
      "a) El cost de transport augmenta de manera directament proporcional a la distància",
      "b) El cost de transport augmenta amb la distància, però de forma menys que proporcional",
      "c) El cost de transport disminueix com més lluny s'envia la mercaderia",
      "d) La distància no té cap tipus d'efecte sobre el cost de transport"
    ],
    "correcta": "b",
    "feedback": "El document especifica que el cost del transport augmenta amb la distància, però ho fa de forma menys que proporcional (decreixent per unitat de distància)."
  },
  {
    "id": 327,
    "tipo": "teoria",
    "texto": "A quin tipus d'empreses s'aconsella, en línies generals, obrir noves plantes en llocs diferents en comptes d'ampliar la que ja tenen?",
    "opciones": [
      "a) A empreses petites que tot just comencen la seva activitat",
      "b) A grans empreses amb múltiples plantes o quan els mercats estan molt dispersos",
      "c) Només a empreses que estan a punt de fer fallida",
      "d) A empreses que no volen contractar cap treballador nou"
    ],
    "correcta": "b",
    "feedback": "El document recull que l'opció de mantenir la planta i afegir-ne de noves és pròpia d'empreses grans o quan la dispersió dels clients fa inviable una sola fàbrica."
  },
  {
    "id": 328,
    "tipo": "teoria",
    "texto": "Quin és un dels grans desavantatges d'afegir noves plantes en comptes d'ampliar la que ja es té?",
    "opciones": [
      "a) Que s'optimitza massa el transport",
      "b) La pèrdua d'economies d'escala i la possible duplicació de llocs de gestió i administració",
      "c) Que és impossible trobar un segon terreny a tot el país",
      "d) Que els clients s'enfaden si l'empresa creix"
    ],
    "correcta": "b",
    "feedback": "Obrir plantes noves implica duplicar estructures de comandament, serveis centrals i pot fer perdre els avantatges d'unificar tota la producció en un sol lloc."
  },
  {
    "id": 329,
    "tipo": "teoria",
    "texto": "Què s'entén pel concepte de 'Risc de la localització' que s'esmenta en el tema?",
    "opciones": [
      "a) El perill que caigui un llamp sobre la fàbrica",
      "b) La probabilitat que canviïn les condicions de l'entorn triat (mercat, lleis, costos) i la decisió deixi de ser encertada",
      "c) El risc que el terreny s'enfonsi per culpa de la geologia",
      "d) El perill de robatoris dins del polígon industrial"
    ],
    "correcta": "b",
    "feedback": "Com que és una decisió a molt llarg termini i difícilment reversible, si l'entorn canvia després d'haver fet la inversió, l'empresa pot quedar atrapada en un lloc poc competitiu."
  },
  {
    "id": 330,
    "tipo": "teoria",
    "texto": "Quin factor subjectiu vinculat a la qualitat de vida pot influir en la localització segons el text?",
    "opciones": [
      "a) Les preferències personals dels directius per viure en un lloc amb bon clima, escoles o oci",
      "b) El preu exacte del metre quadrat de formigó",
      "c) El traçat de les línies d'alta tensió",
      "d) El mètode matemàtic del centre de gravetat"
    ],
    "correcta": "a",
    "feedback": "Encara que no és un cost directe de producció, la facilitat per atreure directius o el desig del propietari de viure a prop de casa són factors subjectius vàlids."
  },
  {
    "id": 331,
    "tipo": "teoria",
    "texto": "Com s'anomenen les indústries que perden molt de pes durant el seu procés de fabricació?",
    "opciones": [
      "a) Indústries d'assemblatge pur",
      "b) Indústries amb alt índex de materials (o reductores de pes)",
      "c) Indústries de distribució d'última milla",
      "d) Indústries digitals"
    ],
    "correcta": "b",
    "feedback": "Són aquelles on la matèria primera és molt pesant o bruta, i el producte final acabat pesa molt menys. Tendeixen a col·locar-se a prop de les matèries primeres."
  },
  {
    "id": 332,
    "tipo": "teoria",
    "texto": "Quin és un exemple típic d'indústria que afegeix pes o volum durant el procés?",
    "opciones": [
      "a) Una serradora de fusta",
      "b) Una planta embotelladora de refrescos o una fàbrica de cervesa",
      "c) Una mina de carbó",
      "d) Una empresa de disseny de pàgines web"
    ],
    "correcta": "b",
    "feedback": "Aquestes indústries afegeixen aigua (que és barata i està a tot arreu) a un concentrat, fent que el producte final sigui molt pesant per transportar des de lluny cap als bars o supermercats."
  },
  {
    "id": 333,
    "tipo": "teoria",
    "texto": "Segons Alfred Weber, quins són els tres factors que determinen la localització industrial?",
    "opciones": [
      "a) El sol, la platja i el turisme",
      "b) Els costos de transport, els costos de la mà d'obra i les forces d'aglomeració (o degradació)",
      "c) El preu del petroli, l'IVA i l'IUR",
      "d) L'idioma, la religió i el tipus de moneda"
    ],
    "correcta": "b",
    "feedback": "Weber basava el seu model clàssic en trobar el lloc de mínim cost combinant el transport, el cost de la mà d'obra i els avantatges d'estar a prop d'altres indústries."
  },
  {
    "id": 334,
    "tipo": "teoria",
    "texto": "En el mètode del centre de gravetat, quines dades es necessiten introduir a la fórmula?",
    "opciones": [
      "a) Les coordenades (X,Y) de cada destí i el volum de càrrega (o cost) que s'envia a cadascun",
      "b) El nom dels alcaldes de cada municipi",
      "c) La previsió del temps atmosfèric de l'any vinent",
      "d) L'edat mitjana dels conductors de camió"
    ],
    "correcta": "a",
    "feedback": "Aquest mètode calcula una mitjana ponderada de les coordenades horitzontals i verticals utilitzant com a pes el volum de mercaderia que va a cada punt."
  },
  {
    "id": 335,
    "tipo": "teoria",
    "texto": "Quin és el darrer pas que s'ha de fer en el 'Mètode dels factors ponderats'?",
    "opciones": [
      "a) Escollir la localització que hagi obtingut la puntuació total ponderada més alta",
      "b) Llançar una moneda a l'aire entre les dues millors",
      "c) Triar la que tingui el nom més bonic",
      "d) Ignorar els resultats i demanar opinió a la premsa"
    ],
    "correcta": "a",
    "feedback": "Un cop sumats els punts de cada factor multiplicats pel seu pes, s'obté una nota final per a cada solar. Es tria el que té millor nota."
  },
  {
    "id": 336,
    "tipo": "teoria",
    "texto": "Quin tipus de dades s'analitzen en el pas de 'Macro-localització' pel que fa als mercats?",
    "opciones": [
      "a) El nombre de botigues que hi ha al carrer principal d'un poble",
      "b) El potencial de consum de la regió, la competència existent i els canals de distribució generals",
      "c) Si el carrer té sentit únic per a camions",
      "d) El preu del bitllet de metro a la capital"
    ],
    "correcta": "b",
    "feedback": "La macro-localització mira dades a gran escala (regions o països) per saber si el mercat d'aquella zona és prou gran per absorbir la producció."
  },
  {
    "id": 337,
    "tipo": "teoria",
    "texto": "Què es comprova respecte als terrenys en la fase de 'Micro-localització'?",
    "opciones": [
      "a) Si el país té costa marítima o no",
      "b) La superfície de la parcel·la, la topografia, la resistència del sòl i el preu específic del solar",
      "c) El tipus de clima que fa a tot el continent",
      "d) Si la moneda oficial del país és l'euro"
    ],
    "correcta": "b",
    "feedback": "La micro-localització baixa al detall físic de la parcel·la concreta per saber si geomètricament i tècnicament es pot construir la nau allà."
  },
  {
    "id": 338,
    "tipo": "teoria",
    "texto": "Quina diferència hi ha entre la pèrdua de pes d'un mineral pur i un de brut respecte a la localització?",
    "opciones": [
      "a) No hi ha cap diferència, tots dos fan que la fàbrica es posi al costat del client",
      "b) Els minerals bruts perden molta ganga (residu) i obliguen a posar la fàbrica al costat de la mina per no transportar pedra inútil",
      "c) Els minerals purs pesen més després de netejar-los",
      "d) L'administració obliga a posar les fàbriques sempre a la costa"
    ],
    "correcta": "b",
    "feedback": "Si una matèria primera té molts residus que es llencen a la primera fase de fabricació, transportar-la en brut surt molt car. Per això la planta es posa tocant a la mina."
  },
  {
    "id": 339,
    "tipo": "teoria",
    "texto": "Quin és un dels motius pels quals una empresa pot triar localitzar-se en un país estranger segons els canvis actuals?",
    "opciones": [
      "a) Perquè no volen utilitzar Internet",
      "b) Per saltar-se barreres aranzelàries (impostos d'importació) o per costos laborals més baixos",
      "c) Perquè està prohibit créixer dins d'Espanya",
      "d) Només per tradició familiar de l'amo"
    ],
    "correcta": "b",
    "feedback": "La internacionalització busca sovint fabricar dins de mercats protegits per aranzels o aprofitar diferències de costos de fabricació entre països."
  },
  {
    "id": 340,
    "tipo": "teoria",
    "texto": "A què es refereix el terme 'Inèrcia de la localització'?",
    "opciones": [
      "a) A la tendència de les empreses a no moure's del seu lloc històric encara que les condicions ja no siguin les millors, pels alts costos de trasllat",
      "b) A la velocitat a la qual es mouen els camions de l'empresa",
      "c) A la força que fa el vent sobre les naus industrials",
      "d) A l'obligació legal d'obrir una fàbrica cada 10 anys"
    ],
    "correcta": "a",
    "feedback": "Moltes fàbriques es queden on són perquè tancar-les, vendre el terreny i muntar-ho tot de nou és tan car que prefereixen assumir uns sobrecostos d'operació."
  },
  {
    "id": 341,
    "tipo": "teoria",
    "texto": "Quin tipus de productes tendeixen a fabricar-se a prop del consumidor final a causa de la seva naturalesa?",
    "opciones": [
      "a) Productes molt duradors com les bigues de ferro",
      "b) Productes peribles (com el pa del dia o la llet fresca) o serveis d'urgència",
      "c) Matèries primeres com el mineral de ferro",
      "d) Xips de silici per a ordinadors"
    ],
    "correcta": "b",
    "feedback": "Els productes que es fan malbé ràpidament o que el client vol a l'instant necessiten xarxes de fabricació i distribució molt properes al consumidor."
  },
  {
    "id": 342,
    "tipo": "teoria",
    "texto": "Quina és la principal limitació del 'Mètode del centre de gravetat'?",
    "opciones": [
      "a) Que és un mètode purament geomètric que no té en compte la realitat de les carreteres, muntanyes o fronteres",
      "b) Que només funciona en el pol nord de la Terra",
      "c) Que no dóna cap dada numèrica exacta",
      "d) Que obliga a posar la fàbrica al mig del mar si els clients estan en illes"
    ],
    "correcta": "a",
    "feedback": "El mètode dóna un punt ideal sobre un mapa pla (línia recta), però a la pràctica pot ser que allà hi hagi una muntanya, un llac o que no hi hagi cap carretera a prop."
  },
  {
    "id": 343,
    "tipo": "teoria",
    "texto": "En quin cas s'utilitza l'anàlisi del 'Punt Mort' (o llindar de rendibilitat) aplicat a la localització?",
    "opciones": [
      "a) Per saber quants treballadors es jubilaran aquest any",
      "b) Per comparar diferents llocs segons els seus costos fixos i variables, i veure quin és millor segons el volum de producció",
      "c) Per calcular l'edat de l'edifici",
      "d) Per saber quan s'ha d'apagar la maquinària per estalviar"
    ],
    "correcta": "b",
    "feedback": "Permet veure que una localització amb molts costos fixos però pocs costos variables només surt a compte si es fabrica una gran quantitat de producte."
  },
  {
    "id": 344,
    "tipo": "teoria",
    "texto": "Quin factor es considera decisiu per a les empreses que consumeixen grans quantitats d'electricitat (com les d'alumini)?",
    "opciones": [
      "a) El cost i l'estabilitat del subministrament elèctric de la zona",
      "b) La distància als boscos",
      "c) El nivell de soroll del municipi",
      "d) La quantitat d'hores de sol a l'any"
    ],
    "correcta": "a",
    "feedback": "Indústries com les fargues d'alumini o les químiques tenen un consum tan brutal d'energia que una petita diferència en el preu del kW/h determina si guanyen diners o no."
  },
  {
    "id": 345,
    "tipo": "teoria",
    "texto": "Què s'entén pel factor de 'Disponibilitat de terreny' en l'estudi de localització?",
    "opciones": [
      "a) Saber si hi ha parcel·les lliures de la mida necessària i amb possibilitat d'ampliacions futures",
      "b) Saber si el terreny és de color marró o negre",
      "c) Saber si hi viuen animals salvatges a la zona",
      "d) Saber si es pot extreure petroli del subsòl de la fàbrica"
    ],
    "correcta": "a",
    "feedback": "No només cal trobar un solar per a avui, sinó que s'ha de preveure si l'empresa podrà comprar els terrenys del costat si d'aquí a 5 anys necessita créixer."
  },
  {
    "id": 346,
    "tipo": "teoria",
    "texto": "En quin cas els factors subjectius poden arribar a ser decisius en l'elecció d'un lloc?",
    "opciones": [
      "a) Quan els resultats econòmics dels mètodes objectius estan molt igualats entre dues o tres localitzacions",
      "b) Mai, els factors subjectius estan prohibits per llei",
      "c) Només quan l'empresa és pública i no busca beneficis",
      "d) Quan l'empresa no té cap treballador"
    ],
    "correcta": "a",
    "feedback": "Si l'estudi de costos dóna que a la ciutat A i a la ciutat B es gasta gairebé el mateix, es decideix per factors intangibles com la qualitat de vida o gustos personals."
  },
  {
    "id": 347,
    "tipo": "teoria",
    "texto": "Quin és un exemple de factor d'infraestructura que s'avalua en la micro-localització?",
    "opciones": [
      "a) L'idioma oficial de la regió",
      "b) L'existència de connexió a fibra òptica, xarxa de gas natural i clavegueram a peu de parcel·la",
      "c) El tipus de govern que té el país",
      "d) El nombre d'universitats que hi ha a 500 km a la rodona"
    ],
    "correcta": "b",
    "feedback": "La micro-localització mira si el carrer del polígon ja té els tubs i cables fets per poder-se connectar l'endemà de comprar el terreny."
  },
  {
    "id": 348,
    "tipo": "teoria",
    "texto": "Per què s'atribueix a la decisió de localització un caràcter rígid?",
    "opciones": [
      "a) Perquè la llei prohibeix vendre la fàbrica un cop construïda",
      "b) Perquè un cop feta la inversió en terrenys i edificis, canviar de lloc suposa unes pèrdues econòmiques enormes",
      "c) Perquè el formigó de l'estructura és un material molt rígid",
      "d) Perquè els clients s'acostumen al lloc i no volen que canviï"
    ],
    "correcta": "b",
    "feedback": "La rigidesa o irreversibilitat ve donada pels enormes costos enfonsats (sunk costs) que comporta tancar una planta i obrir-ne una altra de nova."
  },
  {
    "id": 349,
    "tipo": "teoria",
    "texto": "Quina influència té el transport per carretera en la localització de les petites i mitjanes empreses (PIMES)?",
    "opciones": [
      "a) Les obliga a estar totes tocant a la via del tren",
      "b) Els dóna una gran flexibilitat per posar-se en gairebé qualsevol polígon industrial que tingui bones carreteres a prop",
      "c) Fa que hagin de tancar perquè el camió és molt car",
      "d) No té cap tipus d'influència"
    ],
    "correcta": "b",
    "feedback": "A diferència del tren o el vaixell, el camió arriba a qualsevol porta. Això ha permès que milers de polígons s'omplin d'indústries sense necessitat de tenir estació de tren."
  },
  {
    "id": 350,
    "tipo": "teoria",
    "texto": "En el mètode de l'anàlisi d'ingressos i despeses, quina localització és la guanyadora?",
    "opciones": [
      "a) Aquella que presenta la xifra de benefici net estimat més elevada",
      "b) Aquella que té les despeses de personal més baixes de totes",
      "c) Aquella que estalvia més en impostos municipals",
      "d) Aquella on els camions hagin de recórrer menys quilòmetres"
    ],
    "correcta": "a",
    "feedback": "El mètode no busca gastar poc ni ingressar molt per separat, sinó trobar la combinació de tots dos factors que doni el benefici més gran per a l'empresa."
  }
]
[
  {
    "id": 351,
    "tipo": "teoria",
    "texto": "Segons la definició del text, què és un polígon industrial?",
    "opciones": [
      "a) Un sector d'una zona urbanitzada en el que s'emplacen diverses indústries i que posseeix les instal·lacions bàsiques i necessàries",
      "b) Un gran magatzem aïllat a la muntanya",
      "c) Qualsevol carrer d'una ciutat on hi hagi almenys dos tallers",
      "d) Un terreny rústic on està totalment prohibit construir naus"
    ],
    "correcta": "a",
    "feedback": "La definició recollida al document indica que és un sector d'una zona urbanitzada amb indústries i instal·lacions bàsiques i necessàries."
  },
  {
    "id": 352,
    "tipo": "teoria",
    "texto": "Quin és un dels objectius del disseny correcte dels vials d'un polígon segons la definició?",
    "opciones": [
      "a) Impedir que els camions puguin entrar al recinte",
      "b) Poder dur a terme les diferents activitats industrials, facilitar el creixement de les indústries i minimitzar l'impacte en l'ambient",
      "c) Assegurar que només s'hi pugui circular en bicicleta",
      "d) Crear laberints perquè els conductors es perdin"
    ],
    "correcta": "b",
    "feedback": "El document afirma textualment que un disseny correcte dels vials serveix per a aquests tres propòsits."
  },
  {
    "id": 353,
    "tipo": "teoria",
    "texto": "Quines són les quatre grans àrees de l'índex que s'estudien en aquest tema sobre polígons industrials?",
    "opciones": [
      "a) Característiques, Avantatges i limitacions, Gestió de polígons, i Tipologies de polígons",
      "b) Maquinària, Personal, Finances i Vendes",
      "c) Electricitat, Aigua, Gas i Telèfon",
      "d) Catalunya, Espanya, Europa i Amèrica"
    ],
    "correcta": "a",
    "feedback": "L'índex del document divideix el tema exactament en aquests quatre punts principals."
  },
  {
    "id": 354,
    "tipo": "teoria",
    "texto": "Quina de les següents NO s'esmenta com una instal·lació o infraestructura d'accessibilitat bàsica?",
    "opciones": [
      "a) Sistemes viaris",
      "b) Sistemes d'aigua i clavegueram",
      "c) Aeroport privat per a cada nau",
      "d) Energia elèctrica i comunicacions"
    ],
    "correcta": "c",
    "feedback": "S'esmenten els vials, l'aigua, el clavegueram, l'electricitat, les comunicacions i el gas, però no un aeroport privat."
  },
  {
    "id": 355,
    "tipo": "teoria",
    "texto": "Quin d'aquests sistemes d'evacuació d'aigua s'ha de preveure en les infraestructures del polígon?",
    "opciones": [
      "a) Xarxa de clavegueram sanitari i d'aigua de pluja",
      "b) Només un canal obert que vagi al riu",
      "c) S'especifica que no cal clavegueram",
      "d) Únicament pous cecs a cada parcel·la"
    ],
    "correcta": "a",
    "feedback": "El document inclou explícitament els sistemes d'aigua, xarxa de clavegueram sanitari i d'aigua de pluja."
  },
  {
    "id": 356,
    "tipo": "teoria",
    "texto": "En l'esquema d'instal·lacions relatives a temes mediambientals, quins elements s'associen amb una 'Refineria'?",
    "opciones": [
      "a) Excedent gasós, aigua residual i aigua de refrigeració",
      "b) Pa del dia i brioixeria",
      "c) Fibra òptica i línies d'alta tensió",
      "d) Recollida de mobles vells"
    ],
    "correcta": "a",
    "feedback": "L'esquema gràfic del document connecta la refineria amb sortides com l'aigua residual, l'aigua de refrigeració o l'excedent gasós."
  },
  {
    "id": 357,
    "tipo": "teoria",
    "texto": "Què es pot produir a partir de les 'Cendres flotants' segons l'esquema industrial?",
    "opciones": [
      "a) Serveixen per alimentar una fàbrica de ciment",
      "b) Es fan servir per crear perfums",
      "c) S'utilitzen directament com a aigua potable",
      "d) No tenen cap utilitat i només es poden cremar"
    ],
    "correcta": "a",
    "feedback": "Segons el diagrama de relacions del text, les cendres flotants es deriven cap a la fàbrica de ciment."
  },
  {
    "id": 358,
    "tipo": "teoria",
    "texto": "De quina activitat es deriven els 'Llots fertilitzats' (Lodos fertilizados) que van cap a les granges?",
    "opciones": [
      "a) D'una planta farmacèutica",
      "b) D'una mina de carbó",
      "c) D'una fàbrica de cotxes",
      "d) D'una central nuclear"
    ],
    "correcta": "a",
    "feedback": "L'esquema mostra que de la planta farmacèutica surten els llots fertilitzats cap a les granges."
  },
  {
    "id": 359,
    "tipo": "teoria",
    "texto": "Quin és un possible impacte local d'un polígon industrial esmentat a l'esquema?",
    "opciones": [
      "a) El soroll, la il·luminació i el transport",
      "b) Que plogui menys a la zona",
      "c) L'augment del preu de les bicicletes",
      "d) Cap, no produeixen cap impacte de cap tipus"
    ],
    "correcta": "a",
    "feedback": "S'assenyala explícitament l'impacte local a causa del soroll, la il·luminació i el transport."
  },
  {
    "id": 360,
    "tipo": "teoria",
    "texto": "Quin és un dels avantatges de concentrar les indústries en un polígon segons el text?",
    "opciones": [
      "a) La contaminació queda delimitada a una zona concreta",
      "b) Que els treballadors no cobren impostos",
      "c) Que les màquines duren el doble de temps",
      "d) Que s'elimina totalment la necessitat d'usar electricitat"
    ],
    "correcta": "a",
    "feedback": "Entre els avantatges llistats trobem el fet de tenir la contaminació delimitada en un espai controlat."
  },
  {
    "id": 361,
    "tipo": "teoria",
    "texto": "Quin efecte positiu té un polígon sobre el seu entorn geogràfic segons el document?",
    "opciones": [
      "a) Creixement econòmic i reducció de l'atur de la zona",
      "b) Baixada general dels preus dels supermercats",
      "c) Augment de les zones de bosc natural",
      "d) Cap, només porta desavantatges"
    ],
    "correcta": "a",
    "feedback": "El document recull el creixement econòmic i la reducció de l'atur de la zona com un dels avantatges clau."
  },
  {
    "id": 362,
    "tipo": "teoria",
    "texto": "A què fa referència el concepte de 'Simbiosi i estratègies entre empreses'?",
    "opciones": [
      "a) A l'aprofitament de recursos i col·laboració mútua en estar unes a prop de les altres",
      "b) Al fet que les empreses competeixen fins que una destrueix l'altra",
      "c) A l'obligació de tenir els mateixos amos",
      "d) A la prohibició de parlar amb treballadors d'altres empreses"
    ],
    "correcta": "a",
    "feedback": "La simbiosi industrial implica que els residus o subproductes d'una empresa poden ser la matèria primera d'una altra, afavorida per la proximitat física."
  },
  {
    "id": 363,
    "tipo": "teoria",
    "texto": "Quina és una de les limitacions (desavantatges) dels polígons industrials?",
    "opciones": [
      "a) Ús pràcticament obligatori del transport privat per anar-hi",
      "b) Que els lloguers són sempre gratis",
      "c) Que no es permet l'entrada de camions",
      "d) Que estan prohibits per la Unió Europea"
    ],
    "correcta": "a",
    "feedback": "En estar sovint allunyats dels nuclis urbans, l'ús del transport privat esdevé gairebé obligatori per als treballadors."
  },
  {
    "id": 364,
    "tipo": "teoria",
    "texto": "Què pot passar si es tanca definitivament un polígon industrial segons les limitacions descrites?",
    "opciones": [
      "a) La seva clausura pot generar problemes en la població (com l'atur massiu)",
      "b) La gent s'alegra perquè tot es converteix en un parc",
      "c) No té cap tipus de repercussió econòmica",
      "d) Es prohibeix automàticament obrir qualsevol altre negoci a la comarca"
    ],
    "correcta": "a",
    "feedback": "El text indica que la seva clausura pot generar problemes en la població que en depèn econòmicament."
  },
  {
    "id": 365,
    "tipo": "teoria",
    "texto": "Quin és un dels impactes negatius sobre la natura a l'hora de construir un polígon industrial?",
    "opciones": [
      "a) Desforestació, impactes ambientals i estètics",
      "b) Que els arbres creixen massa ràpid",
      "c) Que el terra es torna massa fèrtil",
      "d) Cap, els polígons milloren la biodiversitat natural"
    ],
    "correcta": "a",
    "feedback": "La desforestació i els impactes ambientals i estètics s'inclouen a la llista de limitacions o contres del document."
  },
  {
    "id": 366,
    "tipo": "teoria",
    "texto": "Quantes opcions de gestió dels polígons industrials s'esmenten en el document?",
    "opciones": [
      "a) Tres opcions",
      "b) Una única opció",
      "c) Cinquanta opcions diferents",
      "d) No s'esmenta cap mètode de gestió"
    ],
    "correcta": "a",
    "feedback": "El document detalla exactament tres opcions diferents per a la gestió."
  },
  {
    "id": 367,
    "tipo": "teoria",
    "texto": "En la primera opció de gestió, quin és el paper de l'ajuntament i dels propietaris?",
    "opciones": [
      "a) L'ajuntament gestiona i els propietaris paguen una taxa",
      "b) Els propietaris gestionen i l'ajuntament paga una taxa",
      "c) No hi intervé cap ajuntament, només l'estat",
      "d) L'ajuntament regala tots els serveis sense cobrar res"
    ],
    "correcta": "a",
    "feedback": "És el model més clàssic on el municipi manté els carrers i serveis a canvi d'un tribut o taxa als empresaris."
  },
  {
    "id": 368,
    "tipo": "teoria",
    "texto": "En què consisteix la segona opció de gestió de polígons industrials?",
    "opciones": [
      "a) L'ajuntament traspassa totes les operacions als propietaris",
      "b) El govern tanca el polígon i fa fora tothom",
      "c) S'obliga a tancar les fàbriques els caps de setmana",
      "d) Els treballadors passen a ser amos del polígon"
    ],
    "correcta": "a",
    "feedback": "En aquesta modalitat, l'administració local cedeix la responsabilitat del manteniment i operacions directament als empresaris instal·lats."
  },
  {
    "id": 369,
    "tipo": "teoria",
    "texto": "Què passa en la tercera opció de gestió esmentada en el text?",
    "opciones": [
      "a) L'ajuntament traspassa les operacions a una constructora que gestiona i manté el polígon",
      "b) Es prohibeix que hi hagi cap tipus d'empresa de construcció",
      "c) Es decideix demolir totes les naus",
      "d) Es deixa el polígon abandonat sense cap tipus de manteniment"
    ],
    "correcta": "a",
    "feedback": "Aquest és un model externalitzat on una empresa constructora o de serveis s'encarrega de la gestió integral."
  },
  {
    "id": 370,
    "tipo": "teoria",
    "texto": "A què estan destinats els 'Polígons basats en la producció'?",
    "opciones": [
      "a) A la producció massiva",
      "b) Únicament a oficines de disseny",
      "c) A fer de parcs d'atraccions",
      "d) A la venda al detall directament al carrer"
    ],
    "correcta": "a",
    "feedback": "El document especifica que aquesta tipologia està destinada a la producció massiva."
  },
  {
    "id": 371,
    "tipo": "teoria",
    "texto": "Quina és una característica geogràfica habitual dels polígons basats en la producció?",
    "opciones": [
      "a) Solen estar allunyats de la zona urbana",
      "b) Estan sempre situats al bell mig del centre històric",
      "c) Han d'estar obligatòriament sota terra",
      "d) Es troben sempre a dins dels centres comercials"
    ],
    "correcta": "a",
    "feedback": "Per evitar molèsties i tenir espai, solen ubicar-se lluny de les zones residencials o urbanes."
  },
  {
    "id": 372,
    "tipo": "teoria",
    "texto": "Què caracteritza un 'Polígon tecnològic d'alta tecnologia' pel que fa a les entitats que hi ha?",
    "opciones": [
      "a) Alta densitat d'indústria tecnològica, centres d'investigació i centres d'educació superior",
      "b) Hi ha moltes granges i molt pocs ordinadors",
      "c) Està prohibit que hi hagi cap tipus d'escola o universitat",
      "d) Són exclusivament per a empreses de fusteria tradicional"
    ],
    "correcta": "a",
    "feedback": "El text destaca la presència combinada d'indústria capdavantera, recerca i universitats o centres superiors."
  },
  {
    "id": 373,
    "tipo": "teoria",
    "texto": "Quin tipus d'empreses són un indicador clau en els polígons d'alta tecnologia?",
    "opciones": [
      "a) Empreses de telemàtica, instruments de precisió, aeronàutica...",
      "b) Tallers de reparació de bicicletes antigues",
      "c) Forns de pa tradicionals a llenya",
      "d) Empreses de fabricació de maons de fang"
    ],
    "correcta": "a",
    "feedback": "Són sectors d'alt valor afegit i forta base científica o d'enginyeria."
  },
  {
    "id": 374,
    "tipo": "teoria",
    "texto": "En què estan centrats els anomenats 'Parcs logístics' o polígons de logística?",
    "opciones": [
      "a) En empreses logístiques (emmagatzematge i distribució)",
      "b) En la cria de bestiar",
      "c) En la producció d'energia nuclear",
      "d) En la fabricació de mobles a mida"
    ],
    "correcta": "a",
    "feedback": "Són espais especialitzats on s'implanten operadors dedicats al transport, magatzem i gestió de mercaderies."
  },
  {
    "id": 375,
    "tipo": "teoria",
    "texto": "Què necessiten imperativament els polígons de logística segons el document?",
    "opciones": [
      "a) Molt bona comunicació amb artèries principals de transport",
      "b) Estar situats a dalt de tot d'una muntanya alta",
      "c) No tenir cap tipus d'accés per a camions",
      "d) Estar totalment aïllats de qualsevol carretera"
    ],
    "correcta": "a",
    "feedback": "Com que es dediquen a moure mercaderies d'un lloc a un altre, la connectivitat ràpida amb autopistes i eixos viaris és indispensable."
  }
]
[
  {
    "id": 376,
    "tipo": "teoria",
    "texto": "Quina d'aquestes afirmacions descriu millor una 'instal·lació bàsica d'accessibilitat' en un polígon segons el text?",
    "opciones": [
      "a) Els sistemes viaris que permeten l'entrada i sortida de vehicles",
      "b) La decoració de les façanes de les naus",
      "c) Els serveis de menjador per als treballadors",
      "d) Un circuit tancat de televisió a cada empresa"
    ],
    "correcta": "a",
    "feedback": "El document inclou els sistemes viaris com una de les infraestructures o instal·lacions bàsiques d'accessibilitat necessàries en un polígon."
  },
  {
    "id": 377,
    "tipo": "teoria",
    "texto": "Segons l'esquema d'impactes i relacions del document, quins elements s'associen amb una 'Central elèctrica'?",
    "opciones": [
      "a) Vapor, cendres flotants i energia elèctrica",
      "b) Únicament aigua potable per al poble",
      "c) Residus orgànics i fusta",
      "d) No s'associa amb cap tipus de sortida de material"
    ],
    "correcta": "a",
    "feedback": "L'esquema de relacions industrials del text mostra que de la central elèctrica s'obtenen vapor, energia elèctrica i cendres flotants."
  },
  {
    "id": 378,
    "tipo": "teoria",
    "texto": "Cap a on es deriva el 'Vapor' que surt de la central elèctrica segons l'esquema industrial?",
    "opciones": [
      "a) Cap a la refineria i cap a la planta farmacèutica",
      "b) Cap a les granges de porcs",
      "c) Es llença directament a l'atmosfera sense cap ús",
      "d) Cap a la fàbrica de ciment"
    ],
    "correcta": "a",
    "feedback": "Segons el diagrama d'interconnexions del text, el vapor generat per la central elèctrica s'aprofita a la refineria i a la planta farmacèutica."
  },
  {
    "id": 379,
    "tipo": "teoria",
    "texto": "Quina utilitat té l'energia elèctrica que surt de la central segons el mateix esquema?",
    "opciones": [
      "a) Abasteix la xarxa local",
      "b) S'usa exclusivament per escalfar l'aigua del mar",
      "c) No es pot utilitzar i s'ha de dissipar",
      "d) S'envia tota a les granges"
    ],
    "correcta": "a",
    "feedback": "L'esquema indica de forma clara que l'energia elèctrica d'aquesta central s'acaba dirigint cap a la xarxa local."
  },
  {
    "id": 380,
    "tipo": "teoria",
    "texto": "Segons el document, quina és una possible conseqüència mediambiental de la construcció d'un polígon?",
    "opciones": [
      "a) Desforestació i canvis en l'estètica del paisatge",
      "b) Una millora de la qualitat de l'aire de la zona",
      "c) L'augment d'espècies animals protegides",
      "d) Que no hi hagi cap tipus d'impacte en l'entorn"
    ],
    "correcta": "a",
    "feedback": "En l'apartat de limitacions i impactes s'esmenta clarament la desforestació i els impactes ambientals i estètics negatius."
  },
  {
    "id": 381,
    "tipo": "teoria",
    "texto": "Quin és un dels avantatges econòmics d'implantar un polígon industrial a una comarca?",
    "opciones": [
      "a) La reducció de l'atur i l'estímul del creixement econòmic regional",
      "b) Que l'estat regala diners a tots els habitants",
      "c) Que els preus dels habitatges baixen a la meitat",
      "d) L'eliminació de totes les botigues tradicionals"
    ],
    "correcta": "a",
    "feedback": "La creació de llocs de treball i el creixement econòmic de la zona són dels principals avantatges que recull el tema."
  },
  {
    "id": 382,
    "tipo": "teoria",
    "texto": "Què s'entén per la gestió de polígons industrials mitjançant la 'Segona Opció' descrita al text?",
    "opciones": [
      "a) L'ajuntament traspassa les operacions de manteniment i gestió als mateixos propietaris",
      "b) L'ajuntament assumeix totes les despeses sense cobrar res",
      "c) Es divideix el polígon en dues meitats totalment independents",
      "d) Es prohibeix la creació de noves empreses"
    ],
    "correcta": "a",
    "feedback": "Aquest model implica delegar la responsabilitat i la gestió del dia a dia directament en l'associació de propietaris o empresaris."
  },
  {
    "id": 383,
    "tipo": "teoria",
    "texto": "Quin inconvenient té l'ús del transport privat per anar als polígons segons les limitacions esmentades?",
    "opciones": [
      "a) És un ús pràcticament obligatori a causa de la llunyania dels nuclis urbans",
      "b) Està totalment prohibit per l'ajuntament",
      "c) Només es permet si els cotxes són elèctrics",
      "d) El document diu que no cal cap tipus de transport"
    ],
    "correcta": "a",
    "feedback": "En estar situats normalment afores de les ciutats, s'assenyala com una limitació la forta dependència del vehicle privat."
  },
  {
    "id": 384,
    "tipo": "teoria",
    "texto": "Com defineix el text els polígons basats en la producció?",
    "opciones": [
      "a) Aquells destinats a la producció massiva, generalment allunyats de la zona urbana",
      "b) Polígons on només es venen productes d'artesania fets a mà",
      "c) Espais reservats exclusivament per a universitats",
      "d) Polígons on no es pot fabricar res i només hi ha oficines"
    ],
    "correcta": "a",
    "feedback": "Són els polígons industrials tradicionals, orientats a grans volums de fabricació i situats lluny de nuclis habitats."
  },
  {
    "id": 385,
    "tipo": "teoria",
    "texto": "Quina característica diferencia els polígons d'alta tecnologia segons el document?",
    "opciones": [
      "a) Tenen una alta densitat d'indústries tecnològiques, centres d'investigació i educació superior",
      "b) No tenen connexió a Internet ni fibra òptica",
      "c) Són polígons on està prohibit fer recerca científica",
      "d) Es dediquen exclusivament a la ramaderia intensiva"
    ],
    "correcta": "a",
    "feedback": "La seva particularitat és la unió d'empreses punteres amb el món acadèmic i de recerca en un mateix espai."
  },
  {
    "id": 386,
    "tipo": "teoria",
    "texto": "Quin d'aquests sectors s'esmenta com a indicador clau en els polígons d'alta tecnologia?",
    "opciones": [
      "a) Telemàtica, instruments de precisió i aeronàutica",
      "b) Fabricació de maons i teules",
      "c) Indústria tèxtil tradicional de filatura",
      "d) Extracció de carbó a cel obert"
    ],
    "correcta": "a",
    "feedback": "El document cita expressament aquests sectors d'alt valor i forta base d'innovació tecnològica."
  },
  {
    "id": 387,
    "tipo": "teoria",
    "texto": "En referència als parcs logístics, quina és la seva activitat principal segons el text?",
    "opciones": [
      "a) Estan centrats en empreses logístiques",
      "b) La fabricació de ferro i acer pesant",
      "c) L'explotació de recursos forestals",
      "d) Són espais per a fires de mostres i mercats setmanals"
    ],
    "correcta": "a",
    "feedback": "Els parcs logístics estan especialitzats en activitats d'emmagatzematge, trencament de càrregues i distribució."
  },
  {
    "id": 388,
    "tipo": "teoria",
    "texto": "Per què els parcs logístics necessiten molt bona comunicació amb les artèries principals?",
    "opciones": [
      "a) Perquè la seva funció principal és el transport i moviment eficient de mercaderies",
      "b) Perquè els treballadors no volen caminar gens",
      "c) Perquè és una obligació que imposen els bombers",
      "d) Perquè així estan més a prop dels supermercats"
    ],
    "correcta": "a",
    "feedback": "L'èxit de la logística depèn directament de la connectivitat ràpida amb autopistes, ports o aeroports."
  },
  {
    "id": 389,
    "tipo": "teoria",
    "texto": "Quin tipus d'impacte local esmenta el text que es pot produir a causa d'un polígon?",
    "opciones": [
      "a) Soroll, il·luminació i transport",
      "b) Millora de la fauna salvatge de la zona",
      "c) Que augmenti el cabal dels rius del voltant",
      "d) Cap, el document diu que no produeixen molèsties"
    ],
    "correcta": "a",
    "feedback": "L'activitat industrial i el pas continu de vehicles pesants generen soroll i necessitats de trànsit que afecten l'entorn local."
  },
  {
    "id": 390,
    "tipo": "teoria",
    "texto": "Segons l'esquema d'interconnexió d'empreses, d'on prové l'aigua de refrigeració que s'aprofita?",
    "opciones": [
      "a) De la refineria",
      "b) De la planta de ciment",
      "c) Directament de la pluja",
      "d) De les granges de porcs"
    ],
    "correcta": "a",
    "feedback": "El gràfic vincula l'aigua de refrigeració com un excedent o subproducte procedent de la refineria."
  },
  {
    "id": 391,
    "tipo": "teoria",
    "texto": "Què passa si s'executa la 'Tercera Opció' de gestió en un polígon segons el document?",
    "opciones": [
      "a) L'ajuntament traspassa les operacions a una constructora que gestiona i manté el polígon",
      "b) S'obliga a totes les empreses a tancar immediatament",
      "c) Cada empresari ha de netejar el seu tros de carrer personalment",
      "d) El polígon passa a ser propietat de l'exèrcit"
    ],
    "correcta": "a",
    "feedback": "Aquest model d'externalització confia la gestió global de la infraestructura a una empresa de serveis o constructora."
  },
  {
    "id": 392,
    "tipo": "teoria",
    "texto": "Quin és un dels problemes socials que pot generar la clausura d'un polígon segons el tema?",
    "opciones": [
      "a) Problemes de desocupació (atur) en la població de la zona",
      "b) Que la gent s'hagi de comprar roba nova",
      "c) Que augmenti la quantitat de transport públic gratuït",
      "d) No genera cap tipus de problema segons el text"
    ],
    "correcta": "a",
    "feedback": "En tancar un polígon es destrueix el teixit industrial i els llocs de treball directes i indirectes que generava."
  },
  {
    "id": 393,
    "tipo": "teoria",
    "texto": "Segons el document, quina és la finalitat de tenir la contaminació delimitada en un polígon?",
    "opciones": [
      "a) Poder controlar-la i tractar-la millor en un espai específic que si estigués dispersa",
      "b) Fer que la contaminació sigui més forta i perillosa",
      "c) Amagar-la perquè els inspectors no la puguin veure",
      "d) El text no esmenta res sobre delimitar la contaminació"
    ],
    "correcta": "a",
    "feedback": "Concentrar les indústries permet fer xarxes de tractament conjuntes i vigilar millor els abocaments que si estiguessin per tota la ciutat."
  },
  {
    "id": 394,
    "tipo": "teoria",
    "texto": "A quin tipus d'entitats es refereix el text quan parla de 'centres d'educació superior' en els polígons tecnològics?",
    "opciones": [
      "a) Universitats o escoles d'enginyeria",
      "b) Escoles bressol per a nens petits",
      "c) Acadèmies de ball de saló",
      "d) El document no especifica a què es refereix"
    ],
    "correcta": "a",
    "feedback": "En l'àmbit dels parcs tecnològics, l'educació superior s'entén com la universitat que nodreix de talent i R+D les empreses."
  },
  {
    "id": 395,
    "tipo": "teoria",
    "texto": "Quin dels següents NO s'esmenta com un sistema d'infraestructura bàsica en els polígons?",
    "opciones": [
      "a) Xarxes de distribució de menjar a domicili",
      "b) Energia elèctrica i comunicacions",
      "c) Sistemes d'aigua i clavegueram",
      "d) Sistemes viaris"
    ],
    "correcta": "a",
    "feedback": "El menjar a domicili no forma part de les infraestructures d'urbanització d'un polígon segons els llistats del tema."
  },
  {
    "id": 396,
    "tipo": "teoria",
    "texto": "En la 'Primera Opció' de gestió, qui paga la taxa o tribut per al manteniment del polígon?",
    "opciones": [
      "a) Els propietaris i empresaris instal·lats al polígon",
      "b) Els ciutadans que viuen al centre del poble i no tenen cotxe",
      "c) No paga ningú perquè els serveis són totalment gratuïts",
      "d) Els turistes que visiten la comarca"
    ],
    "correcta": "a",
    "feedback": "L'ajuntament dona els serveis i els finança cobrant taxes específiques a les empreses d'aquell sector industrial."
  },
  {
    "id": 397,
    "tipo": "teoria",
    "texto": "Quin d'aquests elements és imprescindible per a l'existència d'un polígon industrial segons la definició inicial?",
    "opciones": [
      "a) Que posseeixi les instal·lacions bàsiques i necessàries per a les indústries",
      "b) Que tingui un camp de futbol a dins",
      "c) Que totes les naus siguin exactament del mateix color",
      "d) Que estigui situat en una illa deserta"
    ],
    "correcta": "a",
    "feedback": "Un terreny sense carrers, aigua o llum no és un polígon; la definició exigeix que estigui dotat d'aquestes instal·lacions."
  },
  {
    "id": 398,
    "tipo": "teoria",
    "texto": "Quina d'aquestes tipologies de polígon NO apareix llistada a l'índex o al contingut del document?",
    "opciones": [
      "a) Polígons residencials de vacances",
      "b) Polígons basats en la producció",
      "c) Polígons tecnològics d'alta tecnologia",
      "d) Polígons de logística (parcs logístics)"
    ],
    "correcta": "a",
    "feedback": "El document parla exclusivament de polígons industrials, no de zones residencials o d'estiueig."
  },
  {
    "id": 399,
    "tipo": "teoria",
    "texto": "Per a què serveix un disseny correcte dels vials en un polígon industrial?",
    "opciones": [
      "a) Per poder dur a terme les activitats industrials, facilitar el creixement i minimitzar l'impacte",
      "b) Per obligar els camions a fer voltes innecessàries",
      "c) Perquè els carrers semblin un circuit de curses",
      "d) El document diu que el disseny dels carrers no té cap importància"
    ],
    "correcta": "a",
    "feedback": "El tema obre destacant que la correcta urbanització i traçat dels carrers és vital per a la funcionalitat del polígon."
  },
  {
    "id": 400,
    "tipo": "teoria",
    "texto": "Què es pot deduir de l'expressió 'sense estructura empresarial característica' aplicada als polígons d'alta tecnologia?",
    "opciones": [
      "a) Que s'hi poden barrejar empreses grans, mitjanes, multinacionals o start-ups sense un patró fix",
      "b) Que no hi ha caps ni directius en aquestes empreses",
      "c) Que està prohibit que les empreses tinguin departament de comptabilitat",
      "d) Que totes les empreses han de ser cooperatives de treballadors"
    ],
    "correcta": "a",
    "feedback": "En aquests espais conviuen des de grans laboratoris de multinacionals fins a petites empreses derivades de la universitat (spin-offs)."
  }
]
[
  {
    "id": 401,
    "tipo": "teoria",
    "texto": "Quins són els quatre blocs principals que s'estudien en aquest tema segons l'índex?",
    "opciones": [
      "a) Figures de plantejament, POUM, Paràmetres de parcel·les, i Llicències i execució d'obra",
      "b) Electricitat, Clavegueram, Carreteres i Telecomunicacions",
      "c) Polígons basats en la producció, Alta tecnologia i Parcs logístics",
      "d) No s'especifiquen a l'índex del document"
    ],
    "correcta": "a",
    "feedback": "Segons l'índex que apareix a les primeres pàgines, el contingut es divideix exactament en aquests quatre punts."
  },
  {
    "id": 402,
    "tipo": "teoria",
    "texto": "Quina figura de plantejament urbanístic s'encarrega de definir la distribució geogràfica dels usos i les activitats a les que s'ha de destinar prioritàriament el sòl?",
    "opciones": [
      "a) El Pla director",
      "b) El Catàleg",
      "c) Les Ordenances municipals",
      "d) Els Programes d'actuació urbanística"
    ],
    "correcta": "a",
    "feedback": "El document indica expressament que el Pla director s'ocupa de la distribució geogràfica dels usos, el desenvolupament sostenible i la concreció de reserves de sòl."
  },
  {
    "id": 403,
    "tipo": "teoria",
    "texto": "Quina de les següents NO és una funció atribuïda als Plans d'ordenació urbanística municipal (POUM) segons el text?",
    "opciones": [
      "a) Classificar i qualificar les diferents tipologies de terreny del municipi",
      "b) Definir espais públics i equipament comunitari",
      "c) Traçar rutes internacionals de vols aeris",
      "d) Determinar les provisions sobre recursos hídrics i energètics presents i futurs"
    ],
    "correcta": "c",
    "feedback": "El POUM s'encarrega d'ordenar el municipi (terreny, espais públics, recursos hídrics, etc.), però no té competències en rutes aèries internacionals."
  },
  {
    "id": 404,
    "tipo": "teoria",
    "texto": "Quin instrument de planejament desenvolupa les infraestructures bàsiques i l'ordenació de recintes històrics vinculat al Pla director (PD)?",
    "opciones": [
      "a) Els Plans especials urbanístics",
      "b) Els Plans parcials",
      "c) Les Ordenances municipals",
      "d) El POUM"
    ],
    "correcta": "a",
    "feedback": "Els Plans especials urbanístics poden derivar del Pla director per al desenvolupament d'infraestructures bàsiques o l'ordenació de recintes històrics i paisatge."
  },
  {
    "id": 405,
    "tipo": "teoria",
    "texto": "En quin tipus de Pla especial (PE) s'inclou la creació de dotacions urbanístiques i el sanejament de barris insalubres?",
    "opciones": [
      "a) PE de reforma interior",
      "b) PE de protecció de paisatge",
      "c) PE de sanejament",
      "d) PE de millora del medi urbà o rural"
    ],
    "correcta": "a",
    "feedback": "Segons la llista del document, el PE de reforma interior és el que preveu la descongestió del sòl, creació de dotacions i sanejament de barris insalubres."
  },
  {
    "id": 406,
    "tipo": "teoria",
    "texto": "Segons la informació de les taules del document, quin objectiu té el 'PE de protecció de vies de comunicació'?",
    "opciones": [
      "a) Prohibir o limitar l'accés directe a les finques des de la carretera i disposar el reculament (retranqueo) d'edificacions",
      "b) Crear línies d'autobús gratuïtes per a tothom",
      "c) Prohibir que els cotxes circulin de nit",
      "d) Plantar arbres fruiters a totes les mitgeres"
    ],
    "correcta": "a",
    "feedback": "La taula reflecteix que aquest pla divideix els terrenys, prohibeix accessos directes des de la carretera i disposa reculaments per a futures ampliacions."
  },
  {
    "id": 407,
    "tipo": "teoria",
    "texto": "A quin Pla especial correspon l'objectiu de 'Modificar l'aspecte exterior de les edificacions, el seu caràcter arquitectònic i el seu estat de conservació'?",
    "opciones": [
      "a) PE de millora del medi urbà o rural",
      "b) PE de sanejament",
      "c) PE de protecció de paisatge",
      "d) PE de reforma interior"
    ],
    "correcta": "a",
    "feedback": "El document associa literalment aquestes actuacions sobre l'aspecte exterior amb el Pla especial de millora del medi urbà o rural."
  },
  {
    "id": 408,
    "tipo": "teoria",
    "texto": "Quins elements s'inclouen dins del 'PE de protecció de paisatge'?",
    "opciones": [
      "a) Àrees naturals d'interès paisatgístic, predis rústics i edificis aïllats pel seu emplaçament o bellesa",
      "b) Només els supermercats d'un municipi",
      "c) El traçat de la xarxa elèctrica d'alta tensió",
      "d) Únicament les canonades de clavegueram"
    ],
    "correcta": "a",
    "feedback": "La taula del text especifica que protegeix àrees naturals, predis rústics singulars i edificis aïllats o parcs destacats."
  },
  {
    "id": 409,
    "tipo": "teoria",
    "texto": "Quines actuacions formen part d'un 'PE de sanejament' segons el text?",
    "opciones": [
      "a) Obres d'abastament d'aigües potables, depuració i instal·lacions de clavegueram o drenatges",
      "b) La construcció de nous poliesportius municipals",
      "c) L'ampliació de les pistes de l'aeroport",
      "d) Netejar les façanes de les cases particulars un cop l'any"
    ],
    "correcta": "a",
    "feedback": "El text especifica que s'encarrega de l'abastament d'aigua, depuració d'aigües residuals, clavegueram, drenatges, fonts, etc."
  },
  {
    "id": 410,
    "tipo": "teoria",
    "texto": "Quina és una de les funcions dels Programes d'actuació urbanística segons s'indica a la pàgina 8 del document?",
    "opciones": [
      "a) Senyalar l'ús i nivells d'intensitat del sòl urbanitzable i dividir el territori en etapes",
      "b) Concedir les llicències de taxi de la ciutat",
      "c) Dissenyar els uniformes dels treballadors municipals",
      "d) S'encarreguen exclusivament de catalogar arbres monumentals"
    ],
    "correcta": "a",
    "feedback": "Segons el document, aquests programes desenvolupen sistemes d'ordenació, senyalen l'ús/intensitat del sòl urbanitzable i divideixen el territori en etapes."
  },
  {
    "id": 411,
    "tipo": "teoria",
    "texto": "Què regulen principalment els Plans Parcials segons el document?",
    "opciones": [
      "a) La qualificació del sòl, delimitació per zones d'ús, reserves de terreny i traçat de xarxes fonamentals",
      "b) Únicament el nom que tindran els carrers del polígon",
      "c) El preu de venda que tindran les naus industrials",
      "d) No tenen cap funció en l'urbanisme industrial"
    ],
    "correcta": "a",
    "feedback": "El text assenyala que els plans parcials qualifiquen el sòl, delimiten zones, regulen paràmetres d'edificació i precisen l'execució immediata i el cost."
  },
  {
    "id": 412,
    "tipo": "teoria",
    "texto": "Com es defineix la 'Classificació del sòl' segons el document?",
    "opciones": [
      "a) Acte de divisió del sòl segons el seu règim urbanístic per classe",
      "b) Acte de mesurar la quantitat de quilos de terra d'una parcel·la",
      "c) Decisió de plantar un tipus d'arbre o un altre",
      "d) Divisió del sòl segons el color que tingui la terra"
    ],
    "correcta": "a",
    "feedback": "El document la defineix literalment com l'acte de divisió del sòl segons el seu règim urbanístic per classe."
  },
  {
    "id": 413,
    "tipo": "teoria",
    "texto": "Quina és la definició de 'Qualificació del sòl' segons el text?",
    "opciones": [
      "a) Acte de divisió del sòl segons el seu possible ús i edificació",
      "b) Donar una nota del zero al deu a la qualitat de la terra",
      "c) Decidir quin arquitecte ha de construir a cada terreny",
      "d) Establir el preu mínim de lloguer d'una parcel·la"
    ],
    "correcta": "a",
    "feedback": "Es defineix exactament com l'acte de divisió del sòl segons el seu possible ús i edificació."
  },
  {
    "id": 414,
    "tipo": "teoria",
    "texto": "Quines són les tres característiques que ha de complir un terreny per ser considerat 'Solar' segons el tema?",
    "opciones": [
      "a) Sòl urbà consolidat, parcel·lat i amb qualificació urbanística referent a l'objectiu de construcció",
      "b) Tenir aigua de pou, estar a prop d'un riu i tenir arbres fruiters",
      "c) Ser propietat de l'estat, no tenir tancat perimetral i estar a la muntanya",
      "d) Estar lliure d'impostos, tenir més de mil metres i ser de forma quadrada"
    ],
    "correcta": "a",
    "feedback": "A la pàgina 15 es detalla de manera molt concisa que un solar ha de ser sòl urbà consolidat, estar parcel·lat i tenir la qualificació corresponent."
  },
  {
    "id": 415,
    "tipo": "teoria",
    "texto": "Segons s'aconsella al document, on podem acudir per conèixer digitalment les característiques d'una parcel·la que ens interessa?",
    "opciones": [
      "a) A la Seu Electrònica del Cadastre (sedecatastro.gob.es)",
      "b) A una pàgina web de compra-venda de segona mà",
      "c) A l'enciclopèdia digital sobre història de Catalunya",
      "d) No hi ha cap mètode digital segons el document"
    ],
    "correcta": "a",
    "feedback": "El document aporta l'enllaç de la seu electrònica del cadastre com a eina de consulta per a les parcel·les."
  },
  {
    "id": 416,
    "tipo": "teoria",
    "texto": "Quin d'aquests NO és un paràmetre a considerar en parcel·les dins dels termes generals?",
    "opciones": [
      "a) Alineacions de carrer i ample de carrer",
      "b) El tipus de maquinària que es fabricarà a dins de la nau",
      "c) Altura lliure o útil i planta baixa",
      "d) Línia de façana i mitgera"
    ],
    "correcta": "b",
    "feedback": "Els termes llistats fan referència a aspectes físics i geomètrics de la urbanització, no a l'activitat de maquinària interna."
  },
  {
    "id": 417,
    "tipo": "teoria",
    "texto": "Quins són els paràmetres de l'ordenació quan es fa per 'alineació de carrer'?",
    "opciones": [
      "a) Altura reguladora màxima, màxim número de pisos, profunditat edificable i gàlib edificable",
      "b) Parcel·la mínima edificable i separació de límits",
      "c) El color de les portes i finestres de l'edifici",
      "d) No n'hi ha cap, es pot construir lliurement"
    ],
    "correcta": "a",
    "feedback": "Segons el document, aquests quatre són els paràmetres específics per a l'ordenació per alineació de carrer."
  },
  {
    "id": 418,
    "tipo": "teoria",
    "texto": "Dins de l'ordenació per 'edificació aïllada de parcel·la', quin paràmetre NO s'inclou segons el document?",
    "opciones": [
      "a) Coeficient d'edificabilitat",
      "b) Ocupació màxima de la parcel·la",
      "c) Gàlib edificable",
      "d) Separació de límits i entre edificacions"
    ],
    "correcta": "c",
    "feedback": "El gàlib edificable apareix en l'ordenació per alineació de carrer, mentre que els altres sí que són de l'edificació aïllada."
  },
  {
    "id": 419,
    "tipo": "teoria",
    "texto": "Segons el text, quins són els paràmetres de l'ordenació per 'definició volumètrica'?",
    "opciones": [
      "a) Alineacions de volum i Volumetria",
      "b) Profunditat edificable i gàlib",
      "c) Parcel·la mínima i amplada mínima",
      "d) No s'esmenten paràmetres per a aquest tipus d'ordenació"
    ],
    "correcta": "a",
    "feedback": "S'indica directament que l'ordenació per definició volumètrica es regeix per les alineacions de volum i la volumetria."
  },
  {
    "id": 420,
    "tipo": "teoria",
    "texto": "En l'exemple pràctic del document, quines són les dimensions totals de la parcel·la utilitzada?",
    "opciones": [
      "a) 10 metres de façana i 12 metres de profunditat",
      "b) 50 metres de façana i 50 metres de profunditat",
      "c) 5 metres de façana i 20 metres de profunditat",
      "d) No es donen mides en l'exemple"
    ],
    "correcta": "a",
    "feedback": "L'enunciat de l'exemple comença indicant una parcel·la de 10 metres de façana i 12 metres de profunditat (Superfície: 120 m2)."
  },
  {
    "id": 421,
    "tipo": "teoria",
    "texto": "Segons les ordenances de l'exemple pràctic, quina és la separació exigida a la línia de façana i a la línia de propietat?",
    "opciones": [
      "a) 1 m. a la façana i 2 m. a la línia de propietat",
      "b) 5 m. a la façana i 5 m. a la línia de propietat",
      "c) No s'ha de deixar cap separació",
      "d) 10 m. en ambdós casos"
    ],
    "correcta": "a",
    "feedback": "El text de l'exemple indica clarament: 'Separació de la edificació a la línia de façana: 1 m.' i 'Separació de la edificació a la línia de propietat: 2 m.'."
  },
  {
    "id": 422,
    "tipo": "teoria",
    "texto": "Quin és el coeficient d'edificabilitat fixat en l'exemple pràctic del document?",
    "opciones": [
      "a) 0,80 m2 de sostre per m2 de sòl",
      "b) 2,50 m2 de sostre per m2 de sòl",
      "c) 0,10 m2 de sostre per m2 de sòl",
      "d) El coeficient és lliure i no té límit"
    ],
    "correcta": "a",
    "feedback": "Les ordenances de l'exemple marquen un coeficient d'edificabilitat de 0,80 m2 de sostre per m2 de sòl."
  },
  {
    "id": 423,
    "tipo": "teoria",
    "texto": "Segons la solució de l'exemple, quina és l'ocupació en planta que s'obté en restar les distàncies obligatòries?",
    "opciones": [
      "a) 54 m2",
      "b) 120 m2",
      "c) 200 m2",
      "d) 10 m2"
    ],
    "correcta": "a",
    "feedback": "El càlcul del document mostra: (10-2-2) x (12-2-1) = 6 x 9 = 54 m2."
  },
  {
    "id": 424,
    "tipo": "teoria",
    "texto": "Quina és l'edificabilitat total permesa que s'ha calculat per a la parcel·la de l'exemple?",
    "opciones": [
      "a) 96 m2",
      "b) 500 m2",
      "c) 12 m2",
      "d) 1.000 m2"
    ],
    "correcta": "a",
    "feedback": "Multiplicant la superfície total (120 m2) pel coeficient d'edificabilitat (0,80), el document obté el resultat de 96 m2."
  },
  {
    "id": 425,
    "tipo": "teoria",
    "texto": "Quin és l'últim punt del tema que queda pendent de desenvolupar a partir de la pàgina 26?",
    "opciones": [
      "a) Sol·licitud de llicències i execució de l'obra",
      "b) La demolició controlada d'edificis",
      "c) El càlcul d'estructures metàl·liques",
      "d) La plantació d'arbres en espais rurals"
    ],
    "correcta": "a",
    "feedback": "A la pàgina 26 el document introdueix la secció 'Sol·licitud de llicències i execució de l'obra' abans d'acabar el contingut visible."
  }
]
[
  {
    "id": 426,
    "tipo": "teoria",
    "texto": "Segons el document, quina és la definició que es dóna de 'Plànol d'ordenació'?",
    "opciones": [
      "a) Plànol en el qual es representa de forma gràfica l'ordenació urbanística que es proposa",
      "b) Un mapa topogràfic on només es marquen les muntanyes i els rius",
      "c) Un dibuix artístic de com serà la façana dels edificis",
      "d) El document on s'especifica el pressupost total de l'obra"
    ],
    "correcta": "a",
    "feedback": "El document defineix el plànol d'ordenació com la representació gràfica de l'ordenació urbanística proposada."
  },
  {
    "id": 427,
    "tipo": "teoria",
    "texto": "Quin és l'objectiu principal d'un 'Pla Especial d'infraestructures bàsiques' segons el text?",
    "opciones": [
      "a) Desenvolupar les xarxes generals d'abastament d'aigua, sanejament, energia i telecomunicacions",
      "b) Construir habitatges de protecció oficial al centre de la ciutat",
      "c) Decidir el color que han de tenir els autobusos municipals",
      "d) Crear parcs i zones infantils a les zones industrials"
    ],
    "correcta": "a",
    "feedback": "Segons el document, aquest tipus de Pla Especial s'encarrega del desenvolupament de les xarxes d'infraestructures bàsiques com aigua, energia i comunicacions."
  },
  {
    "id": 428,
    "tipo": "teoria",
    "texto": "Què s'entén pel paràmetre 'Ocupació màxima de parcel·la' segons s'explica de forma general en l'urbanisme?",
    "opciones": [
      "a) El percentatge màxim de la superfície del solar que pot ser ocupat per l'edificació en planta",
      "b) El nombre màxim de treballadors que poden estar dins de la nau al mateix temps",
      "c) La quantitat de quilos que pot aguantar el terra de la parcel·la",
      "d) El temps màxim que es pot trigar a construir la nau industrial"
    ],
    "correcta": "a",
    "feedback": "L'ocupació màxima és un paràmetre d'edificació que limita la superfície del terreny que pot quedar coberta per l'edifici."
  },
  {
    "id": 429,
    "tipo": "teoria",
    "texto": "A què fa referència el 'Coeficient d'edificabilitat' segons l'exemple pràctic del document?",
    "opciones": [
      "a) Als metres quadrats de sostre totals que es permet construir per cada metre quadrat de sòl",
      "b) Al nombre de pisos màxim que pot tenir un edifici",
      "c) A la distància que s'ha de deixar obligatòriament amb el veí",
      "d) Al preu oficial per metre quadrat que té el terreny"
    ],
    "correcta": "a",
    "feedback": "L'edificabilitat indica la quantitat total de superfície construïda (sostre) permesa en relació amb la superfície de la parcel·la (sòl)."
  },
  {
    "id": 430,
    "tipo": "teoria",
    "texto": "Segons el gràfic de l'exemple pràctic, com es distribueixen finalment els 96 m² d'edificabilitat?",
    "opciones": [
      "a) 54 m² en Planta Baixa + 42 m² en Primera Planta",
      "b) 96 m² tots a la Planta Baixa",
      "c) 48 m² en Planta Baixa + 48 m² en Primera Planta",
      "d) S'utilitzen exclusivament per a zones de jardí"
    ],
    "correcta": "a",
    "feedback": "L'exemple resol que, degut a les limitacions d'ocupació, es fan 54 m² en Planta Baixa i la resta (42 m²) s'enlairen a la Primera Planta."
  },
  {
    "id": 431,
    "tipo": "teoria",
    "texto": "Què significa el terme 'Sòl no urbanitzable' segons la classificació general que es fa en l'urbanisme?",
    "opciones": [
      "a) Sòl que té un règim de protecció especial i en el qual no es permet el procés d'urbanització ni edificació lliure",
      "b) Sòl que s'està urbanitzant actualment i s'acabarà l'any que ve",
      "c) Qualsevol terreny que pertany a una empresa privada",
      "d) El sòl situat exclusivament a dins dels polígons industrials"
    ],
    "correcta": "a",
    "feedback": "El sòl no urbanitzable és aquell protegit per valors agrícoles, paisatgístics o ambientals, on no es pot edificar de forma general."
  },
  {
    "id": 432,
    "tipo": "teoria",
    "texto": "Quina diferència hi ha entre 'Alineació de carrer' i 'Separació de límits' segons s'intueix en els paràmetres del text?",
    "opciones": [
      "a) L'alineació marca el límit amb la via pública i la separació marca la distància amb les parcel·les veïnes",
      "b) Són exactament el mateix concepte amb diferent nom",
      "c) L'alineació només s'aplica a edificis d'oficines i la separació a fàbriques",
      "d) El document diu que cap de les dues coses és obligatòria"
    ],
    "correcta": "a",
    "feedback": "L'alineació vincula l'edifici amb l'espai públic (carrer), mentre que les separacions regulen les distàncies amb les finques adjacents (línies de propietat)."
  },
  {
    "id": 433,
    "tipo": "teoria",
    "texto": "Què regula el concepte d''Alçada màxima de l'edifici' segons les dades de l'exemple pràctic?",
    "opciones": [
      "a) La cota màxima mesurada en vertical que pot assolir la construcció",
      "b) L'amplada total que pot tenir la porta principal",
      "c) El nombre de treballadors que poden treballar a la planta alta",
      "d) La profunditat a la qual es poden posar els fonaments"
    ],
    "correcta": "a",
    "feedback": "L'alçada màxima és un paràmetre volumètric que limita verticalment l'edificació (en l'exemple era de 12,60 m)."
  },
  {
    "id": 434,
    "tipo": "teoria",
    "texto": "En quin cas s'utilitza l'ordenació per 'Definició volumètrica' segons s'esmenta en els tipus d'ordenació?",
    "opciones": [
      "a) Quan el pla defineix directamente la forma, volum i posició tridimensional que ha de tenir l'edifici",
      "b) Quan es deixa total llibertat a l'amo per construir el que vulgui",
      "c) Únicament en parcel·les que tenen menys de 10 m²",
      "d) El document diu que aquest mètode ja no s'utilitza"
    ],
    "correcta": "a",
    "feedback": "Aquest tipus d'ordenació no es basa en fórmules de percentatges, sinó en dibuixar el volum exacte que ha d'ocupar la construcció."
  },
  {
    "id": 435,
    "tipo": "teoria",
    "texto": "Per què és important conèixer la 'Parcel·la mínima edificable' abans de comprar un terreny industrial?",
    "opciones": [
      "a) Perquè si el terreny és més petit que aquesta mida mínima, l'ajuntament no donarà permís per edificar-hi",
      "b) Perquè serveix per saber quant costaran els maons",
      "c) Perquè indica el nombre d'arbres que s'han de plantar obligatòriament",
      "d) El document indica que la mida del terreny no importa per demanar llicències"
    ],
    "correcta": "a",
    "feedback": "La parcel·la mínima és una condició d'edificabilitat. Si un solar no arriba a aquest mínim, es considera no edificable de forma independent."
  },
  {
    "id": 436,
    "tipo": "teoria",
    "texto": "Quin és l'objectiu de la 'Separació de l'edificació a la línia de propietat' de 2 metres fixada en l'exemple?",
    "opciones": [
      "a) Garantir una distància mínima amb els veïns per qüestions de seguretat, il·luminació o ventilació",
      "b) Guardar espai perquè hi pugui passar una via de tren",
      "c) Deixar lloc per aparcar camions grans fora del carrer",
      "d) El document indica que es fa només per estètica"
    ],
    "correcta": "a",
    "feedback": "Les separacions a fons i mitgeres eviten que els edificis s'enganxin totalment, millorant la ventilació, la llum i la seguretat contra incendis."
  },
  {
    "id": 437,
    "tipo": "teoria",
    "texto": "Quin document s'ha de consultar normalment per saber exactament què es pot construir en un municipi concret?",
    "opciones": [
      "a) El POUM (Pla d'Ordenació Urbanística Municipal)",
      "b) El codi de circulació de la DGT",
      "c) El diccionari de la llengua catalana",
      "d) El document diu que s'ha de demanar al president de la Generalitat"
    ],
    "correcta": "a",
    "feedback": "El POUM és l'instrument de planejament urbanístic municipal que recull la classificació del sòl i les ordenances d'edificació d'aquell terme."
  },
  {
    "id": 438,
    "tipo": "teoria",
    "texto": "A la solució de l'exemple pràctic, per què l'ocupació final és de 54 m² i no de 60 m² (que seria el 50%)?",
    "opciones": [
      "a) Perquè en aplicar les distàncies de seguretat obligatòries a la façana i veïns el rectangle resultant queda limitat a 54 m²",
      "b) Perquè l'amo va decidir que no necessitava una nau tan gran",
      "c) Perquè l'ajuntament va obligar a retallar 6 m² sense cap motiu",
      "d) Perquè els 6 m² restants s'han de deixar per a un pou d'aigua"
    ],
    "correcta": "a",
    "feedback": "Tot i que per percentatge (50% de 120 m²) podria ocupar 60 m², la geometria de les distàncies obligatòries (retirs) fa que el rectangle real d'edificació només sumi 54 m²."
  },
  {
    "id": 439,
    "tipo": "teoria",
    "texto": "Què passaria si en l'exemple l'edificabilitat total permesa fos de 150 m² en lloc de 96 m²?",
    "opciones": [
      "a) Es podrien construir més plantes cap amunt, sempre que no se superi l'alçada màxima permesa",
      "b) S'hauria de comprar obligatòriament el terreny del veí",
      "c) Es podria ocupar tot el solar al 100% en planta baixa",
      "d) No passaria res perquè l'edificabilitat no influeix en la mida de l'edifici"
    ],
    "correcta": "a",
    "feedback": "Si l'edificabilitat és alta però l'ocupació en planta està limitada, l'única manera d'aprofitar aquest sostre és fent l'edifici més alt (més plantes)."
  },
  {
    "id": 440,
    "tipo": "teoria",
    "texto": "A què es refereix el paràmetre 'Gàlib edificable' que s'esmenta en l'ordenació per alineació de carrer?",
    "opciones": [
      "a) A l'envolupant o volum màxim dins del qual s'ha de situar l'edificació",
      "b) Al pes màxim que pot tenir la maquinària que es posa dins la nau",
      "c) Al diàmetre que han de tenir les canonades de desguàs",
      "d) El document diu que és el nom que rep el pati del darrere"
    ],
    "correcta": "a",
    "feedback": "El gàlib defineix el perfil tridimensional màxim (incloent cobertes inclinades, etc.) que cap edifici pot sobrepassar."
  },
  {
    "id": 441,
    "tipo": "teoria",
    "texto": "Quin és un exemple d'infraestructura de sanejament que s'estudia en els Plans Especials segons el text?",
    "opciones": [
      "a) La xarxa de clavegueram i les estacions depuradores",
      "b) La instal·lació d'aire condicionat de les oficines",
      "c) El servei de recollida de mobles vells a domicili",
      "d) El document diu que el sanejament no es planifica"
    ],
    "correcta": "a",
    "feedback": "Els plans especials de sanejament s'encarreguen de preveure col·lectors, clavegueram i sistemes de tractament d'aigües residuals."
  },
  {
    "id": 442,
    "tipo": "teoria",
    "texto": "Què significa que un solar hagi de tenir 'qualificació urbanística' segons el document?",
    "opciones": [
      "a) Que el planejament li hagi assignat un ús concret (industrial, residencial, comercial...) compatible amb el que es vol fer",
      "b) Que s'hagi pagat un títol acadèmic d'urbanisme per a aquell terreny",
      "c) Que el terreny estigui situat exactament al costat de la platja",
      "d) El document indica que la qualificació només serveix per a les finques rústiques"
    ],
    "correcta": "a",
    "feedback": "La qualificació determina quin tipus d'activitat humana i quina tipologia d'edificis es poden implantar legalment en aquella parcel·la."
  },
  {
    "id": 443,
    "tipo": "teoria",
    "texto": "En l'exemple pràctic, quina és la 'Façana mínima edificable' exigida per les ordenances?",
    "opciones": [
      "a) 10 metres",
      "b) 50 metres",
      "c) 2 metres",
      "d) No s'exigeix cap amplada de façana mínima"
    ],
    "correcta": "a",
    "feedback": "Les dades de l'exemple a la pàgina 24 marquen textualment: 'Façana mínima edificable: 10 m.'."
  },
  {
    "id": 444,
    "tipo": "teoria",
    "texto": "Dins de l'ordenació per 'Edificació aïllada', quin paràmetre serveix per saber quant d'espai lliure de pati quedarà?",
    "opciones": [
      "a) L'ocupació màxima de parcel·la (la resta fins al 100% serà espai lliure o pati)",
      "b) L'alçada reguladora de la cornisa",
      "c) El nom del carrer on està situat el solar",
      "d) El document indica que en l'edificació aïllada no es permeten els patis"
    ],
    "correcta": "a",
    "feedback": "L'ocupació marca quant de terreny es pot 'tapar'. Si l'ocupació és del 50%, l'altre 50% de la parcel·la ha de quedar lliure d'edificació principal."
  },
  {
    "id": 445,
    "teoria": "teoria",
    "texto": "Per què el document dedica un apartat a les 'Llicències i execució d'obra' al final?",
    "opciones": [
      "a) Perquè conèixer les normes urbanístiques no serveix de res si després no se sap com demanar els permisos legals per construir",
      "b) Perquè és obligatori per llei parlar de llicències a tots els llibres",
      "c) Per explicar com es demanen les llicències de conduir camions",
      "d) El document diu que les llicències no són necessàries per a les fàbriques"
    ],
    "correcta": "a",
    "feedback": "El pas final de qualsevol projecte urbanístic o industrial és la tramitació administrativa (llicències) per poder materialitzar l'obra legalment."
  },
  {
    "id": 446,
    "tipo": "teoria",
    "texto": "Quina diferència conceptual hi ha entre 'Sòl urbà' i 'Sòl urbanitzable'?",
    "opciones": [
      "a) L'urbà ja té els serveis i està consolidat; l'urbanitzable és el de reserva que es transformarà en el futur",
      "b) Sòl urbà és el que pertany a l'ajuntament i urbanitzable el que és privat",
      "c) L'urbanitzable és on viuen les persones i l'urbà és només per a fàbriques",
      "d) El document diu que són paraules sinònimes i signifiquen el mateix"
    ],
    "correcta": "a",
    "feedback": "El sòl urbà ja forma part de la malla de la ciutat amb serveis. L'urbanitzable és terreny rústic triat pel POUM per absorbir el creixement de la ciutat després de fer obres d'urbanització."
  },
  {
    "id": 447,
    "tipo": "teoria",
    "texto": "Què garanteix que un terreny compleixi amb la condició de 'Sòl urbà consolidat'?",
    "opciones": [
      "a) Que té accés rodat, xarxa d'aigua, clavegueram i subministrament d'energia elèctrica en condicions suficients",
      "b) Que hi ha un vigilant de seguretat les 24 hores del dia",
      "c) Que el terreny s'ha aplanat amb màquines piconadores",
      "d) Que està situat a menys de 500 metres d'una estació d'autobús"
    ],
    "correcta": "a",
    "feedback": "La llei d'urbanisme exigeix que per ser considerat sòl urbà s'ha de comptar amb aquests serveis bàsics a peu de parcel·la."
  },
  {
    "id": 448,
    "tipo": "teoria",
    "texto": "En referència a l'exemple de la pàgina 24, què significa 'Edificacions auxiliars: 2 m²'?",
    "opciones": [
      "a) Que es permet construir una petita caseta independent (per a eines, brossa, etc.) de màxim 2 m²",
      "b) Que l'edifici ha de tenir com a mínim dues portes de seguretat",
      "c) Que es poden posar només dos treballadors auxiliars a la nau",
      "d) El document no dóna cap explicació sobre aquest paràmetre"
    ],
    "correcta": "a",
    "feedback": "Les ordenances sovint permeten petits cossos edificats fora de la volumetria principal per a usos secundaris o instal·lacions, limitats en superfície."
  },
  {
    "id": 449,
    "tipo": "teoria",
    "texto": "Com s'anomena l'acte pel qual un municipi dóna permís oficial per començar unes obres industrials?",
    "opciones": [
      "a) Concessió de llicència d'obres",
      "b) Contracte de compravenda",
      "c) Signatura de l'acta de replanteig",
      "d) Lliurament de claus"
    ],
    "correcta": "a",
    "feedback": "La llicència d'obres és l'acte administratiu pel qual l'ajuntament autoritza a edificar un projecte després de comprovar que compleix les normes."
  },
  {
    "id": 450,
    "tipo": "teoria",
    "texto": "En l'ordenació per 'Alineació de carrer', què s'entén per 'Profunditat edificable'?",
    "opciones": [
      "a) La distància màxima mesurada des de la línia de façana fins on pot arribar l'edifici cap al fons de la parcel·la",
      "b) Els metres que es pot excavar cap avall per fer soterranis",
      "c) La distància que hi ha des del carrer fins a l'autopista més propera",
      "d) El document diu que és la fondària que han de tenir els fonaments"
    ],
    "correcta": "a",
    "feedback": "Limita la dimensió de l'edifici cap al fons per evitar que es col·lapse o s'ocupi l'interior d'illa en zones compactes."
  }
]

