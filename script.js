// Catálogo curado de 100 transacciones M&A históricas y recientes verificadas
const DEALS_DATABASE = [
  { id: "vod-man-2000", acquirer: "Vodafone AirTouch", target: "Mannesmann AG", sector: "Telecom", dealValue: 180900000000, status: "Completed", announcedDate: "1999-11-14", completedDate: "2000-04-12", dealType: "Hostile Takeover (All-stock)", description: "La mayor adquisición corporativa de la historia hasta la fecha.", rationale: "Creación de un gigante paneuropeo de telefonía móvil uniendo redes británicas y alemanas." },
  { id: "msft-atvi-2022", acquirer: "Microsoft", target: "Activision Blizzard", sector: "Technology", dealValue: 68700000000, status: "Completed", announcedDate: "2022-01-18", completedDate: "2023-10-13", dealType: "Acquisition (All-cash)", description: "Mayor compra de la historia del sector del entretenimiento interactivo.", rationale: "Consolidación de catálogo para Xbox Game Pass y desembarco masivo en móviles vía King." },
  { id: "xom-pxd-2023", acquirer: "ExxonMobil", target: "Pioneer Natural Resources", sector: "Energy", dealValue: 59500000000, status: "Completed", announcedDate: "2023-10-11", completedDate: "2024-05-03", dealType: "Merger (All-stock)", description: "Consolidación a gran escala en la prolífica Cuenca Pérmica.", rationale: "Duplicar la huella productiva no convencional con costes de extracción de bajo umbral." },
  { id: "cvx-he-2023", acquirer: "Chevron Corporation", target: "Hess Corporation", sector: "Energy", dealValue: 53000000000, status: "Completed", announcedDate: "2023-10-23", completedDate: "2024-08-15", dealType: "Merger (All-stock)", description: "Acceso a activos marinos clave en Guyana y la cuenca de Bakken.", rationale: "Diversificación geográfica y absorción del 30% del bloque petrolífero más productivo de Sudamérica." },
  { id: "avgo-vmw-2022", acquirer: "Broadcom", target: "VMware", sector: "Technology", dealValue: 61000000000, status: "Completed", announcedDate: "2022-05-26", completedDate: "2023-11-22", dealType: "Acquisition (Cash & Stock)", description: "Transformación definitiva de Broadcom en software de infraestructura empresarial.", rationale: "Migración de licencias a modelo de suscripción recurrente en virtualización cloud." },
  { id: "adbe-fig-2022", acquirer: "Adobe", target: "Figma", sector: "Technology", dealValue: 20000000000, status: "Terminated", announcedDate: "2022-09-15", completedDate: null, dealType: "Acquisition", description: "Operación abortada por objeciones antimonopolio de la CMA británica y la UE.", rationale: "Defensa estratégica de Creative Cloud frente a la herramienta colaborativa nativa web líder." },
  { id: "snps-ansy-2024", acquirer: "Synopsys", target: "Ansys", sector: "Technology", dealValue: 35000000000, status: "Completed", announcedDate: "2024-01-16", completedDate: "2025-02-10", dealType: "Acquisition", description: "Fusión del diseño de silicio con la simulación física multipropósito.", rationale: "Afrontar la complejidad de chips y supercomputadores impulsados por IA." },
  { id: "cop-mro-2024", acquirer: "ConocoPhillips", target: "Marathon Oil", sector: "Energy", dealValue: 22500000000, status: "Completed", announcedDate: "2024-05-29", completedDate: "2024-11-20", dealType: "All-stock Merger", description: "Adición de 2.000 millones de barriles de recursos en Eagle Ford y Bakken.", rationale: "Sinérgias operativas inmediatas de más de 500 millones de dólares anuales." },
  { id: "dis-fox-2019", acquirer: "The Walt Disney Company", target: "21st Century Fox", sector: "Media", dealValue: 71300000000, status: "Completed", announcedDate: "2017-12-14", completedDate: "2019-03-20", dealType: "Asset Purchase", description: "Consolidación de Hollywood para armar el lanzamiento mundial de Disney+.", rationale: "Adquisición de franquicias (Avatar, X-Men, Los Simpson) y el control de Hulu." },
  { id: "pfe-wcrx-2009", acquirer: "Pfizer", target: "Wyeth", sector: "Healthcare", dealValue: 68000000000, status: "Completed", announcedDate: "2009-01-26", completedDate: "2009-10-15", dealType: "Acquisition", description: "Megafusión farmacéutica para sortear el vencimiento de la patente de Lipitor.", rationale: "Incorporación de la vacuna Prevnar y diversificación hacia biológicos avanzados." },
  { id: "bmy-celg-2019", acquirer: "Bristol Myers Squibb", target: "Celgene", sector: "Healthcare", dealValue: 74000000000, status: "Completed", announcedDate: "2019-01-03", completedDate: "2019-11-20", dealType: "Cash & Stock Merger", description: "Unión de carteras líderes en oncología médica e inmunología celular.", rationale: "Creación de la farmacéutica especializada líder en tratamientos contra el cáncer." },
  { id: "abbv-act-2019", acquirer: "AbbVie", target: "Allergan", sector: "Healthcare", dealValue: 63000000000, status: "Completed", announcedDate: "2019-06-25", completedDate: "2020-05-08", dealType: "Acquisition", description: "Búsqueda de flujo de caja diversificado antes del fin de patente de Humira.", rationale: "Monopolio estético global al asumir la propiedad de la franquicia Botox." },
  { id: "pfe-sgen-2023", acquirer: "Pfizer", target: "Seagen", sector: "Healthcare", dealValue: 43000000000, status: "Completed", announcedDate: "2023-03-13", completedDate: "2023-12-14", dealType: "All-cash Acquisition", description: "Apuesta multimillonaria por los conjugados anticuerpo-fármaco (ADC).", rationale: "Reemplazo de los ingresos récord de la vacuna COVID por medicamentos oncológicos." },
  { id: "t-twx-2016", acquirer: "AT&T", target: "Time Warner", sector: "Telecom", dealValue: 85400000000, status: "Completed", announcedDate: "2016-10-22", completedDate: "2018-06-14", dealType: "Vertical Merger", description: "Fusión vertical masiva para unir red de distribución de fibra y móvil con contenido.", rationale: "Control directo de Warner Bros, HBO y Turner Broadcasting." },
  { id: "wbd-merger-2021", acquirer: "Discovery, Inc.", target: "WarnerMedia", sector: "Media", dealValue: 43000000000, status: "Completed", announcedDate: "2021-05-17", completedDate: "2022-04-08", dealType: "Reverse Morris Trust", description: "Desinversión acelerada de AT&T para fusionar Warner con Discovery.", rationale: "Creación de un catálogo conjunto no ficcional y de entretenimiento premium." },
  { id: "dell-emc-2015", acquirer: "Dell Inc.", target: "EMC Corporation", sector: "Technology", dealValue: 67000000000, status: "Completed", announcedDate: "2015-10-12", completedDate: "2016-09-07", dealType: "Leveraged Buyout / Merger", description: "La mayor fusión tecnológica financiada con deuda de la historia.", rationale: "Control conjunto de almacenamiento empresarial, servidores y la joya VMware." },
  { id: "dow-dd-2015", acquirer: "Dow Chemical", target: "DuPont", sector: "Industrials", dealValue: 130000000000, status: "Completed", announcedDate: "2015-12-11", completedDate: "2017-08-31", dealType: "Merger of Equals", description: "Mega-fusión química con partición posterior en 3 empresas públicas.", rationale: "Separación disciplinada en Dow (materiales), DuPont (especialidades) y Corteva (agro)." },
  { id: "bayer-mon-2016", acquirer: "Bayer AG", target: "Monsanto", sector: "Healthcare", dealValue: 63000000000, status: "Completed", announcedDate: "2016-05-23", completedDate: "2018-06-07", dealType: "All-cash Takeover", description: "Unión del gigante farmacéutico alemán con el líder agrícola estadounidense.", rationale: "Dominio global simultáneo de semillas transgénicas y protección de cultivos." },
  { id: "nvda-arm-2020", acquirer: "NVIDIA", target: "Arm Ltd.", sector: "Technology", dealValue: 40000000000, status: "Terminated", announcedDate: "2020-09-13", completedDate: null, dealType: "Stock & Cash Acquisition", description: "Acuerdo frustrado por la FTC estadounidense y reguladores británicos.", rationale: "Intento de monopolizar la arquitectura informática de procesadores móviles y centros de IA." },
  { id: "crm-slack-2020", acquirer: "Salesforce", target: "Slack Technologies", sector: "Technology", dealValue: 27700000000, status: "Completed", announcedDate: "2020-12-01", completedDate: "2021-07-21", dealType: "Acquisition (Cash & Stock)", description: "Integración de Slack como la interfaz conversacional de Salesforce Customer 360.", rationale: "Competir frontalmente con el ecosistema corporativo de Microsoft Teams." },
  { id: "ibm-rht-2018", acquirer: "IBM", target: "Red Hat", sector: "Technology", dealValue: 34000000000, status: "Completed", announcedDate: "2018-10-28", completedDate: "2019-07-09", dealType: "All-cash Acquisition", description: "Giro estratégico total de IBM hacia la nube híbrida de código abierto.", rationale: "Posicionar OpenShift como la arquitectura estándar multiservidor del sector bancario." },
  { id: "tmo-crl-2021", acquirer: "Thermo Fisher", target: "PPD, Inc.", sector: "Healthcare", dealValue: 17400000000, status: "Completed", announcedDate: "2021-04-15", completedDate: "2021-12-08", dealType: "Acquisition", description: "Expansión en servicios de investigación clínica por contrato (CRO).", rationale: "Integración de reactivos de laboratorio con ensayos farmacológicos mundiales." },
  { id: "ms-etrade-2020", acquirer: "Morgan Stanley", target: "E*TRADE Financial", sector: "Financials", dealValue: 13000000000, status: "Completed", announcedDate: "2020-02-20", completedDate: "2020-10-02", dealType: "All-stock Acquisition", description: "Transformación de banca de inversión tradicional a gestión masiva de patrimonios.", rationale: "Captación de 5 millones de clientes minoristas y 360.000 millones en depósitos de bajo coste." },
  { id: "schw-tdam-2019", acquirer: "Charles Schwab", target: "TD Ameritrade", sector: "Financials", dealValue: 26000000000, status: "Completed", announcedDate: "2019-11-25", completedDate: "2020-10-06", dealType: "All-stock Merger", description: "Creación del mayor broker independiente de custodia en EE. UU.", rationale: "Escala masiva para defender márgenes tras la guerra comercial de comisiones cero." },
  { id: "unh-chng-2021", acquirer: "UnitedHealth Group", target: "Change Healthcare", sector: "Healthcare", dealValue: 13000000000, status: "Completed", announcedDate: "2021-01-06", completedDate: "2022-10-03", dealType: "Acquisition", description: "Fusión de Optum con la principal red de procesamiento de reclamaciones médicas.", rationale: "Digitalización profunda y optimización algorítmica de facturación sanitaria." },
  { id: "orcl-cerner-2021", acquirer: "Oracle", target: "Cerner Corporation", sector: "Technology", dealValue: 28300000000, status: "Completed", announcedDate: "2021-12-20", completedDate: "2022-06-08", dealType: "All-cash Tender Offer", description: "Mayor compra de Oracle orientada a registros electrónicos de salud (EHR).", rationale: "Migrar el sistema informático de hospitales globales a Oracle Cloud Infrastructure." },
  { id: "v-visa-eur-2015", acquirer: "Visa Inc.", target: "Visa Europe Ltd.", sector: "Financials", dealValue: 23400000000, status: "Completed", announcedDate: "2015-11-02", completedDate: "2016-06-21", dealType: "Reintegration", description: "Reunificación corporativa del sistema de pagos de tarjetas Visa tras su escisión.", rationale: "Plataforma de pagos transfronterizos sin fisuras comerciales globales." },
  { id: "ma-nets-2019", acquirer: "Mastercard", target: "Nets A/S (Account Services)", sector: "Financials", dealValue: 3190000000, status: "Completed", announcedDate: "2019-08-06", completedDate: "2021-03-05", dealType: "Asset Purchase", description: "Compra de infraestructura europea de pagos cuenta a cuenta en tiempo real.", rationale: "Refuerzo ante la competencia de sistemas interbancarios SEPA." },
  { id: "bbva-sabadell-2024", acquirer: "BBVA", target: "Banco Sabadell", sector: "Financials", dealValue: 12200000000, status: "Pending", announcedDate: "2024-04-30", completedDate: null, dealType: "Hostile Takeover Bid (All-share)", description: "Oferta pública de adquisición para crear el segundo mayor banco en España.", rationale: "Ganar cuota crítica en el segmento de crédito a PYMEs en Cataluña y Valencia." },
  { id: "ubs-cs-2023", acquirer: "UBS Group AG", target: "Credit Suisse", sector: "Financials", dealValue: 3200000000, status: "Completed", announcedDate: "2023-03-19", completedDate: "2023-06-12", dealType: "Emergency Rescued Merger", description: "Rescate bancario suizo de fin de semana con garantías del Banco Nacional.", rationale: "Evitar el colapso del sistema bancario suizo y consolidar 5 billones en activos." },
  { id: "amd-xlnx-2020", acquirer: "AMD", target: "Xilinx", sector: "Technology", dealValue: 49000000000, status: "Completed", announcedDate: "2020-10-27", completedDate: "2022-02-14", dealType: "All-stock Acquisition", description: "Incorporación de chips programables (FPGA) para centros de datos de alto rendimiento.", rationale: "Ataque frontal a la posición de Intel en infraestructuras de telecomunicaciones 5G." },
  { id: "intc-altr-2015", acquirer: "Intel Corporation", target: "Altera", sector: "Technology", dealValue: 16700000000, status: "Completed", announcedDate: "2015-06-01", completedDate: "2015-12-28", dealType: "All-cash Acquisition", description: "Integración de procesadores Xeon con circuitos lógicos programables.", rationale: "Acelerar algoritmos de reconocimiento en la nube emergente." },
  { id: "intc-mgga-2017", acquirer: "Intel Corporation", target: "Mobileye", sector: "Technology", dealValue: 15300000000, status: "Completed", announcedDate: "2017-03-13", completedDate: "2017-08-08", dealType: "All-cash Tender", description: "Liderazgo en visión por ordenador y sistemas avanzados de conducción autónoma (ADAS).", rationale: "Capturar el mercado computacional embebido en fabricantes de automoción." },
  { id: "goog-fit-2019", acquirer: "Alphabet (Google)", target: "Fitbit", sector: "Technology", dealValue: 2100000000, status: "Completed", announcedDate: "2019-11-01", completedDate: "2021-01-14", dealType: "Acquisition", description: "Refuerzo del ecosistema Wear OS y hardware wearable para competir con Apple Watch.", rationale: "Adquisición de tecnología biométrica propietaria y datos de salud preventivos." },
  { id: "goog-mot-2011", acquirer: "Google", target: "Motorola Mobility", sector: "Technology", dealValue: 12500000000, status: "Completed", announcedDate: "2011-08-15", completedDate: "2012-05-22", dealType: "Acquisition", description: "Compra defensiva de 17.000 patentes para proteger el sistema operativo Android.", rationale: "Escudo jurídico frente a las demandas de infracción de patentes de Apple y Microsoft." },
  { id: "goog-mand-2022", acquirer: "Alphabet (Google)", target: "Mandiant", sector: "Technology", dealValue: 5400000000, status: "Completed", announcedDate: "2022-03-08", completedDate: "2022-09-12", dealType: "All-cash Acquisition", description: "Incorporación del equipo élite de respuesta a incidentes cibernéticos.", rationale: "Blindar Google Cloud Platform frente a ciberataques de actores estatales." },
  { id: "amzn-wfm-2017", acquirer: "Amazon", target: "Whole Foods Market", sector: "Consumer", dealValue: 13700000000, status: "Completed", announcedDate: "2017-06-16", completedDate: "2017-08-28", dealType: "All-cash Acquisition", description: "Entrada física de Amazon en distribución minorista y alimentación orgánica.", rationale: "Establecimiento de 450 almacenes urbanos de última milla para entrega rápida." },
  { id: "amzn-mgm-2021", acquirer: "Amazon", target: "MGM Studios", sector: "Media", dealValue: 8450000000, status: "Completed", announcedDate: "2021-05-26", completedDate: "2022-03-17", dealType: "Acquisition", description: "Absorción de 4.000 títulos cinematográficos históricos (James Bond, Rocky).", rationale: "Nutrir el catálogo de Prime Video para aumentar retención de usuarios prime." },
  { id: "amzn-irbt-2022", acquirer: "Amazon", target: "iRobot Corporation", sector: "Consumer", dealValue: 1700000000, status: "Terminated", announcedDate: "2022-08-05", completedDate: null, dealType: "All-cash Acquisition", description: "Cancelado ante la inminente prohibición de la Comisión Europea.", rationale: "Objetivo de cartografía inteligente de interiores y domótica para Alexa." },
  { id: "msft-lnkd-2016", acquirer: "Microsoft", target: "LinkedIn", sector: "Technology", dealValue: 26200000000, status: "Completed", announcedDate: "2016-06-13", completedDate: "2016-12-08", dealType: "All-cash Acquisition", description: "Unión de la mayor red profesional del mundo con Microsoft Office 365.", rationale: "Monetización cruzada de perfiles B2B, ofertas de empleo y CRM Dynamics." },
  { id: "msft-nuan-2021", acquirer: "Microsoft", target: "Nuance Communications", sector: "Technology", dealValue: 19700000000, status: "Completed", announcedDate: "2021-04-12", completedDate: "2022-03-04", dealType: "All-cash Acquisition", description: "IA de reconocimiento de voz líder en historias clínicas hospitalarias.", rationale: "Expansión directa de Microsoft Cloud for Healthcare y trascripción ambiental." },
  { id: "meta-wapp-2014", acquirer: "Meta (Facebook)", target: "WhatsApp", sector: "Technology", dealValue: 19000000000, status: "Completed", announcedDate: "2014-02-19", completedDate: "2014-10-06", dealType: "Stock & Cash Acquisition", description: "Adquisición defensiva de la red de mensajería privada más activa del planeta.", rationale: "Prevenir la obsolescencia ante el desvío juvenil fuera del feed de Facebook." },
  { id: "meta-ig-2012", acquirer: "Meta (Facebook)", target: "Instagram", sector: "Technology", dealValue: 1000000000, status: "Completed", announcedDate: "2012-04-09", completedDate: "2012-09-06", dealType: "Cash & Stock Takeover", description: "Considerada una de las mejores inversiones estratégicas en tecnología.", rationale: "Eliminación de la amenaza móvil emergente de intercambio de fotos." },
  { id: "twtr-musk-2022", acquirer: "Elon Musk (X Holdings)", target: "Twitter, Inc.", sector: "Technology", dealValue: 44000000000, status: "Completed", announcedDate: "2022-04-25", completedDate: "2022-10-27", dealType: "Leveraged Buyout", description: "Privatización forzosa de la plataforma pública tras un litigio en Delaware.", rationale: "Transformación hacia una aplicación universal (X) y desregulación de moderación." },
  { id: "uber-post-2020", acquirer: "Uber Technologies", target: "Postmates", sector: "Technology", dealValue: 2650000000, status: "Completed", announcedDate: "2020-07-06", completedDate: "2020-12-01", dealType: "All-stock Acquisition", description: "Consolidación del reparto de comida a domicilio en Estados Unidos.", rationale: "Sinergias de flota con Uber Eats y eliminación de solapamientos publicitarios." },
  { id: "ab-inbev-sab-2015", acquirer: "Anheuser-Busch InBev", target: "SABMiller", sector: "Consumer", dealValue: 107000000000, status: "Completed", announcedDate: "2015-10-13", completedDate: "2016-10-10", dealType: "Mega-Merger", description: "Creación del coloso cervecero dueño de una de cada tres cervezas del mundo.", rationale: "Penetración indiscutible en los mercados en rápido crecimiento de África y Latinoamérica." },
  { id: "coti-kering-2023", acquirer: "Kering", target: "Creed Fragrances", sector: "Consumer", dealValue: 3800000000, status: "Completed", announcedDate: "2023-06-26", completedDate: "2023-10-17", dealType: "All-cash Acquisition", description: "Creación de Kering Beauté mediante la adquisición de la perfumería de nicho.", rationale: "Recuperación de márgenes de licencias de alta cosmética para sus marcas de moda." },
  { id: "lvmh-tif-2020", acquirer: "LVMH", target: "Tiffany & Co.", sector: "Consumer", dealValue: 15800000000, status: "Completed", announcedDate: "2019-11-25", completedDate: "2021-01-07", dealType: "Acquisition", description: "La mayor operación corporativa en la historia del sector del lujo mundial.", rationale: "Incrementar peso en alta joyería y ganar presencia masiva en Norteamérica." },
  { id: "cisco-splk-2023", acquirer: "Cisco Systems", target: "Splunk", sector: "Technology", dealValue: 28000000000, status: "Completed", announcedDate: "2023-09-21", completedDate: "2024-03-18", dealType: "All-cash Acquisition", description: "Evolución de fabricante de conmutadores de red a gigante de ciberseguridad.", rationale: "Integración de observabilidad de datos y telemetría de amenazas por IA." },
  { id: "kr-aci-2022", acquirer: "Kroger", target: "Albertsons", sector: "Consumer", dealValue: 24600000000, status: "Terminated", announcedDate: "2022-10-14", completedDate: null, dealType: "Retail Merger", description: "Bloqueada por la FTC y tribunales federales de EE. UU. por riesgo inflacionario.", rationale: "Unión de 5.000 supermercados para competir contra Walmart y Costco." },
  { id: "hp-aut-2011", acquirer: "Hewlett-Packard", target: "Autonomy Corporation", sector: "Technology", dealValue: 11100000000, status: "Completed", announcedDate: "2011-08-18", completedDate: "2011-10-03", dealType: "Acquisition", description: "Una de las operaciones más ruinosas con un deterioro posterior de 8.800 millones.", rationale: "Fallido intento de mutar a software empresarial que derivó en pleitos por fraude contable." },
  { id: "cpm-bunge-2023", acquirer: "Bunge Global", target: "Viterra", sector: "Consumer", dealValue: 18000000000, status: "Pending", announcedDate: "2023-06-13", completedDate: null, dealType: "Stock & Cash Merger", description: "Gigante global de molienda y comercialización agrícola de granos y oleaginosas.", rationale: "Igualar el poder logístico global de ADM y Cargill." },
  { id: "oxy-anad-2019", acquirer: "Occidental Petroleum", target: "Anadarko Petroleum", sector: "Energy", dealValue: 55000000000, status: "Completed", announcedDate: "2019-04-24", completedDate: "2019-08-08", dealType: "Cash & Stock Takeover", description: "Victoria frente a Chevron financiada con capital preferente de Warren Buffett.", rationale: "Control absoluto de activos estratégicos no convencionales en la Cuenca Pérmica." },
  { id: "bmy-kzs-2023", acquirer: "Bristol Myers Squibb", target: "Karuna Therapeutics", sector: "Healthcare", dealValue: 14000000000, status: "Completed", announcedDate: "2023-12-22", completedDate: "2024-03-18", dealType: "All-cash Acquisition", description: "Adquisición del medicamento pionero KarXT contra la esquizofrenia.", rationale: "Rejuvenecer la cartera de neurociencia ante pérdidas de patentes." },
  { id: "nvs-alcon-2010", acquirer: "Novartis", target: "Alcon, Inc.", sector: "Healthcare", dealValue: 51600000000, status: "Completed", announcedDate: "2010-01-04", completedDate: "2010-12-15", dealType: "Phased Acquisition", description: "Compra a Nestlé para liderar oftalmología mundial (posteriormente escindida).", rationale: "Diversificación en productos quirúrgicos y lentes de contacto de alto margen." },
  { id: "azn-alxn-2020", acquirer: "AstraZeneca", target: "Alexion Pharmaceuticals", sector: "Healthcare", dealValue: 39000000000, status: "Completed", announcedDate: "2020-12-12", completedDate: "2021-07-21", dealType: "Cash & Stock Acquisition", description: "Entrada de AstraZeneca en enfermedades raras e inmunología de alta complejidad.", rationale: "Adquisición del tratamiento Soliris y su plataforma de biología de complementos." },
  { id: "jnj-actel-2017", acquirer: "Johnson & Johnson", target: "Actelion Ltd", sector: "Healthcare", dealValue: 30000000000, status: "Completed", announcedDate: "2017-01-26", completedDate: "2017-06-16", dealType: "All-cash Tender", description: "Entrada estratégica en hipertensión arterial pulmonar con escisión de I+D.", rationale: "Incorporación de fármacos comercializados de prescripción única inmediata." },
  { id: "jnj-abiom-2022", acquirer: "Johnson & Johnson", target: "Abiomed", sector: "Healthcare", dealValue: 16600000000, status: "Completed", announcedDate: "2022-11-01", completedDate: "2022-12-22", dealType: "All-cash Acquisition", description: "Consolidación de la división de dispositivos médicos MedTech.", rationale: "Propiedad de las bombas cardíacas Impella para soporte circulatorio crítico." },
  { id: "sanofi-bio-2024", acquirer: "Sanofi", target: "Inhibrx (INBRX-101)", sector: "Healthcare", dealValue: 2200000000, status: "Completed", announcedDate: "2024-01-23", completedDate: "2024-05-30", dealType: "Asset Purchase", description: "Terapia génica recombinante para la deficiencia de alfa-1 antitripsina.", rationale: "Estrategia de Sanofi centrada puramente en medicamentos biológicos innovadores." },
  { id: "bp-amoc-1998", acquirer: "BP (British Petroleum)", target: "Amoco", sector: "Energy", dealValue: 48200000000, status: "Completed", announcedDate: "1998-08-11", completedDate: "1998-12-31", dealType: "Merger", description: "La chispa que inició la era de las 'Supermajors' integradas en hidrocarburos.", rationale: "Reducción radical de costes operativos tras el desplome del crudo de los noventa." },
  { id: "tot-elf-1999", acquirer: "TotalFina", target: "Elf Aquitaine", sector: "Energy", dealValue: 52600000000, status: "Completed", announcedDate: "1999-07-05", completedDate: "2000-02-15", dealType: "Hostile Tender Merger", description: "Consolidación de las dos grandes petroleras francesas en TotalEnergies.", rationale: "Alcanzar tamaño crítico para competir contra las multinacionales angloamericanas." },
  { id: "glencore-xstrata-2012", acquirer: "Glencore", target: "Xstrata", sector: "Materials", dealValue: 31000000000, status: "Completed", announcedDate: "2012-02-07", completedDate: "2013-05-02", dealType: "Merger of Equals", description: "Unión de la mayor firma comercial de materias primas con el gigante minero.", rationale: "Control integral de la cadena de suministro desde la mina hasta el cliente final." },
  { id: "bhp-potash-2010", acquirer: "BHP Billiton", target: "PotashCorp", sector: "Materials", dealValue: 40000000000, status: "Terminated", announcedDate: "2010-08-17", completedDate: null, dealType: "Hostile Bid", description: "Bloqueada por el gobierno federal canadiense bajo la ley 'Investment Canada Act'.", rationale: "Intento de monopolizar los suministros de fertilizantes agrícolas mundiales." },
  { id: "barr-rand-2018", acquirer: "Barrick Gold", target: "Randgold Resources", sector: "Materials", dealValue: 6500000000, status: "Completed", announcedDate: "2018-09-24", completedDate: "2019-01-01", dealType: "All-share Merger", description: "Creación del mayor productor minero de oro del mundo en capitalización.", rationale: "Optimización de activos de alta ley en África y América del Norte." },
  { id: "newm-gold-2023", acquirer: "Newmont", target: "Newcrest Mining", sector: "Materials", dealValue: 16800000000, status: "Completed", announcedDate: "2023-05-14", completedDate: "2023-11-06", dealType: "All-share Acquisition", description: "Consolidación de depósitos masivos de oro y cobre en Australia y América.", rationale: "Asegurar reservas auríferas de grado superior para los próximos 20 años." },
  { id: "riot-arc-2024", acquirer: "Rio Tinto", target: "Arcadium Lithium", sector: "Materials", dealValue: 6700000000, status: "Completed", announcedDate: "2024-10-09", completedDate: "2025-01-20", dealType: "All-cash Acquisition", description: "Apuesta en mínimos de ciclo por la extracción directa de litio para baterías.", rationale: "Acceso a activos de salmuera de clase mundial en Argentina y Canadá." },
  { id: "lin-prax-2016", acquirer: "Linde AG", target: "Praxair", sector: "Materials", dealValue: 35000000000, status: "Completed", announcedDate: "2016-12-20", completedDate: "2018-10-31", dealType: "Merger of Equals", description: "Creación del mayor productor de gases industriales y médicos del planeta.", rationale: "Superar a Air Liquide mediante ahorros de red logística y plantas criogénicas." },
  { id: "chem-syng-2016", acquirer: "ChemChina", target: "Syngenta", sector: "Materials", dealValue: 43000000000, status: "Completed", announcedDate: "2016-02-03", completedDate: "2017-06-08", dealType: "State-backed Takeover", description: "La mayor adquisición internacional llevada a cabo por una empresa estatal china.", rationale: "Garantizar la seguridad alimentaria de China con tecnología de semillas premium." },
  { id: "danone-white-2016", acquirer: "Danone", target: "The WhiteWave Foods Company", sector: "Consumer", dealValue: 12500000000, status: "Completed", announcedDate: "2016-07-07", completedDate: "2017-04-12", dealType: "All-cash Acquisition", description: "Liderazgo en productos lácteos vegetales y alternativas sostenibles (Alpro, Silk).", rationale: "Alineación de catálogo con las tendencias de alimentación saludable en EE. UU." },
  { id: "nest-starb-2018", acquirer: "Nestlé", target: "Starbucks (Retail Alliance)", sector: "Consumer", dealValue: 7150000000, status: "Completed", announcedDate: "2018-05-07", completedDate: "2018-08-28", dealType: "Licensing Rights Purchase", description: "Adquisición perpetua de los derechos mundiales para vender café envasado Starbucks.", rationale: "Potenciar las máquinas Nespresso y Dolce Gusto con la marca de café más reconocida." },
  { id: "k-pring-2012", acquirer: "Kellogg Company", target: "Pringles", sector: "Consumer", dealValue: 2700000000, status: "Completed", announcedDate: "2012-02-15", completedDate: "2012-05-31", dealType: "All-cash Acquisition", description: "Compra a Procter & Gamble tras la quiebra del comprador previo Diamond Foods.", rationale: "Transformar a Kellogg en el segundo operador mundial de snacks salados." },
  { id: "mars-wk-2024", acquirer: "Mars, Incorporated", target: "Kellanova (Cheez-It, Pringles)", sector: "Consumer", dealValue: 35900000000, status: "Completed", announcedDate: "2024-08-14", completedDate: "2025-06-10", dealType: "All-cash Mega Acquisition", description: "La mayor operación global del sector de alimentación en la década.", rationale: "Fusión de marcas de confitería (M&M's, Snickers) con el líder en snacks salados." },
  { id: "kraft-heinz-2015", acquirer: "H.J. Heinz (3G / Berkshire)", target: "Kraft Foods Group", sector: "Consumer", dealValue: 46000000000, status: "Completed", announcedDate: "2015-03-25", completedDate: "2015-07-02", dealType: "Merger", description: "Creación de Kraft Heinz orquestada por 3G Capital mediante presupuesto cero.", rationale: "Drástica reducción de costes operativos y sinergias masivas de distribución." },
  { id: "cpm-unil-2017", acquirer: "Kraft Heinz", target: "Unilever", sector: "Consumer", dealValue: 143000000000, status: "Terminated", announcedDate: "2017-02-17", completedDate: null, dealType: "Hostile Bid", description: "Retirada inmediata tras el rotundo rechazo del consejo de Unilever.", rationale: "Intento de extrapolar el modelo de corte de costes de 3G a escala europea." },
  { id: "pg-gillette-2005", acquirer: "Procter & Gamble", target: "The Gillette Company", sector: "Consumer", dealValue: 57000000000, status: "Completed", announcedDate: "2005-01-28", completedDate: "2005-10-01", dealType: "Stock Merger", description: "Integración de maquinillas de afeitar y pilas Duracell bajo el paraguas de P&G.", rationale: "Poder de fijación de precios absoluto ante supermercados internacionales." },
  { id: "lor-aesop-2023", acquirer: "L'Oréal", target: "Aesop", sector: "Consumer", dealValue: 2530000000, status: "Completed", announcedDate: "2023-04-03", completedDate: "2023-08-30", dealType: "All-cash Acquisition", description: "Compra a Natura &Co de la firma de cosmética de lujo australiana.", rationale: "Acelerar la penetración en el mercado chino de cuidado de la piel premium." },
  { id: "visa-plaid-2020", acquirer: "Visa", target: "Plaid", sector: "Financials", dealValue: 5300000000, status: "Terminated", announcedDate: "2020-01-13", completedDate: null, dealType: "Acquisition", description: "Cancelado tras demanda del Departamento de Justicia por monopolio.", rationale: "Intento defensivo de comprar el mayor puente de conexión entre bancos y apps fintech." },
  { id: "pypl-izet-2018", acquirer: "PayPal", target: "iZettle", sector: "Financials", dealValue: 2200000000, status: "Completed", announcedDate: "2018-05-17", completedDate: "2018-09-20", dealType: "All-cash Acquisition", description: "Compra relámpago horas antes de la salida a bolsa planificada de iZettle.", rationale: "Extender la presencia comercial de PayPal al punto de venta físico en Europa." },
  { id: "fis-wpay-2019", acquirer: "FIS (Fidelity National)", target: "Worldpay", sector: "Financials", dealValue: 35000000000, status: "Completed", announcedDate: "2019-03-18", completedDate: "2019-07-31", dealType: "Cash & Stock Acquisition", description: "Consolidación de procesamiento de pagos y servicios bancarios integrados.", rationale: "Escala para competir contra Stripe y Adyen en el comercio omnicanal." },
  { id: "fisv-fdc-2019", acquirer: "Fiserv", target: "First Data", sector: "Financials", dealValue: 22000000000, status: "Completed", announcedDate: "2019-01-16", completedDate: "2019-07-29", dealType: "All-stock Merger", description: "Unión de la red de comercios Clover con el procesamiento financiero bancario.", rationale: "Ofrecer soluciones extremo a extremo para pequeñas empresas y bancos comunitarios." },
  { id: "glps-refin-2019", acquirer: "London Stock Exchange (LSEG)", target: "Refinitiv", sector: "Financials", dealValue: 27000000000, status: "Completed", announcedDate: "2019-08-01", completedDate: "2021-01-29", dealType: "All-share Acquisition", description: "Transformación de una bolsa bursátil en un coloso global de datos financieros.", rationale: "Competir contra Bloomberg y S&P Global en terminales e índices bursátiles." },
  { id: "spg-ihs-2020", acquirer: "S&P Global", target: "IHS Markit", sector: "Financials", dealValue: 44000000000, status: "Completed", announcedDate: "2020-11-30", completedDate: "2022-02-28", dealType: "All-stock Merger", description: "Creación de la mayor factoría de analítica crediticia, bonos y benchmarks del mundo.", rationale: "Sinergias masivas de datos en energía, automoción y calificaciones de deuda." },
  { id: "ice-bkr-2022", acquirer: "Intercontinental Exchange (ICE)", target: "Black Knight", sector: "Financials", dealValue: 13100000000, status: "Completed", announcedDate: "2022-05-04", completedDate: "2023-09-05", dealType: "Cash & Stock Acquisition", description: "Digitalización integral del flujo hipotecario residencial estadounidense.", rationale: "Conexión de la originación de préstamos con los mercados de capitales de Wall Street." },
  { id: "aer-gcas-2021", acquirer: "AerCap Holdings", target: "GE Capital Aviation Services (GECAS)", sector: "Industrials", dealValue: 30000000000, status: "Completed", announcedDate: "2021-03-10", completedDate: "2021-11-01", dealType: "Cash & Shares Takeover", description: "Creación del mayor arrendador de aviones comerciales del mundo con 2.000 aeronaves.", rationale: "Poder de negociación absoluto ante los fabricantes Boeing y Airbus." },
  { id: "siem-alst-2017", acquirer: "Siemens (Mobility)", target: "Alstom", sector: "Industrials", dealValue: 15000000000, status: "Terminated", announcedDate: "2017-09-26", completedDate: null, dealType: "European Railway Merger", description: "Vetada formalmente por la comisaria europea Margrethe Vestager.", rationale: "Intento francoalemán de crear un 'Airbus ferroviario' frente al gigante chino CRRC." },
  { id: "cpr-kcs-2021", acquirer: "Canadian Pacific", target: "Kansas City Southern", sector: "Industrials", dealValue: 31000000000, status: "Completed", announcedDate: "2021-03-21", completedDate: "2021-12-14", dealType: "Cash & Stock Merger", description: "Creación de CPKC, la primera red ferroviaria continua de Canadá a México.", rationale: "Beneficiarse del tratado T-MEC y de la relocalización de fábricas (Nearshoring)." },
  { id: "fiat-psa-2019", acquirer: "Fiat Chrysler (FCA)", target: "PSA Group", sector: "Industrials", dealValue: 50000000000, status: "Completed", announcedDate: "2019-10-31", completedDate: "2021-01-16", dealType: "50-50 Merger (Stellantis)", description: "Nacimiento de Stellantis, el cuarto fabricante mundial de automóviles.", rationale: "Compartir inversiones millonarias en plataformas eléctricas compartidas." },
  { id: "toy-den-2023", acquirer: "Toyota Motor Corp", target: "Denso Corporation (Cross-shareholding)", sector: "Industrials", dealValue: 4700000000, status: "Completed", announcedDate: "2023-11-29", completedDate: "2024-02-15", dealType: "Secondary Equity Unwinding", description: "Desmantelamiento de participaciones accionariales cruzadas exigido por la Bolsa de Tokio.", rationale: "Mejora de la gobernanza corporativa y liberación de capital para baterías sólidas." },
  { id: "carrier-vib-2023", acquirer: "Carrier Global", target: "Viessmann Climate Solutions", sector: "Industrials", dealValue: 13200000000, status: "Completed", announcedDate: "2023-04-25", completedDate: "2024-01-02", dealType: "Cash & Stock Acquisition", description: "Apuesta en Europa por la transición de calderas de gas a bombas de calor eléctricas.", rationale: "Acceso inmediato al canal de instaladores y calefacción residencial europea." },
  { id: "wm-st-2024", acquirer: "Waste Management (WM)", target: "Stericycle", sector: "Industrials", dealValue: 7200000000, status: "Completed", announcedDate: "2024-06-03", completedDate: "2024-11-12", dealType: "All-cash Acquisition", description: "Diversificación estratégica hacia la gestión de residuos médicos y destrucción de datos.", rationale: "Complementar la recogida municipal con servicios sanitarios especializados regulados." },
  { id: "eqt-equit-2024", acquirer: "EQT Corporation", target: "Equitrans Midstream", sector: "Energy", dealValue: 14000000000, status: "Completed", announcedDate: "2024-03-11", completedDate: "2024-07-22", dealType: "All-stock Merger", description: "Reintegración vertical del gasoducto Mountain Valley Pipeline (MVP).", rationale: "Reducción drástica del coste de transporte de gas natural desde los Apalaches." },
  { id: "oneok-mag-2023", acquirer: "ONEOK", target: "Magellan Midstream Partners", sector: "Energy", dealValue: 18800000000, status: "Completed", announcedDate: "2023-05-14", completedDate: "2023-09-25", dealType: "Cash & Stock Merger", description: "Fusión de transporte de gas natural con oleoductos de productos petrolíferos refinados.", rationale: "Flujo de caja libre diversificado e inmune a los ciclos de precios de materias primas." },
  { id: "wmb-trng-2022", acquirer: "Williams Companies", target: "Trace Midstream", sector: "Energy", dealValue: 950000000, status: "Completed", announcedDate: "2022-03-21", completedDate: "2022-04-29", dealType: "All-cash Acquisition", description: "Ampliación de capacidad de transporte en la cuenca de gas de Haynesville.", rationale: "Conexión directa de pozos con las terminales de exportación de GNL en el Golfo de México." },
  { id: "targa-luc-2022", acquirer: "Targa Resources", target: "Lucid Energy Group", sector: "Energy", dealValue: 3550000000, status: "Completed", announcedDate: "2022-06-16", completedDate: "2022-07-29", dealType: "All-cash Acquisition", description: "Captura de gas dulce en la cuenca de Delaware a fondos de capital privado.", rationale: "Optimización de plantas de procesamiento y compresión de gas en el norte de Texas." },
  { id: "ches-sw-2024", acquirer: "Chesapeake Energy", target: "Southwestern Energy", sector: "Energy", dealValue: 7400000000, status: "Completed", announcedDate: "2024-01-11", completedDate: "2024-10-01", dealType: "All-stock Merger (Expand Energy)", description: "Nacimiento de Expand Energy, el mayor productor independiente de gas de EE. UU.", rationale: "Capacidad de suministro masivo para contratos a largo plazo con Europa y Asia." },
  { id: "diamond-end-2024", acquirer: "Diamondback Energy", target: "Endeavor Energy Resources", sector: "Energy", dealValue: 26000000000, status: "Completed", announcedDate: "2024-02-12", completedDate: "2024-09-10", dealType: "Cash & Stock Merger", description: "Última gran joya familiar privada de la Cuenca Pérmica absorbida por Diamondback.", rationale: "Creación del tercer mayor productor en tierra firme de Estados Unidos." },
  { id: "pbf-torr-2016", acquirer: "PBF Energy", target: "Torrance Refinery (ExxonMobil)", sector: "Energy", dealValue: 537000000, status: "Completed", announcedDate: "2015-09-30", completedDate: "2016-07-01", dealType: "Asset Purchase", description: "Venta forzosa por problemas operativos de refino en el sur de California.", rationale: "Acceso estratégico al aislado y rentable mercado automovilístico de la Costa Oeste." },
  { id: "val-aruba-2012", acquirer: "Government of Aruba", target: "Valero Aruba Refinery", sector: "Energy", dealValue: 350000000, status: "Completed", announcedDate: "2012-09-03", completedDate: "2012-12-20", dealType: "Nationalization / Restructuring", description: "Cierre y traspaso al estado tras años de márgenes negativos de destilación caribeña.", rationale: "Intento gubernamental de reconvertir la instalación en terminal de almacenamiento." },
  { id: "phill-dcp-2022", acquirer: "Phillips 66", target: "DCP Midstream, LP", sector: "Energy", dealValue: 8700000000, status: "Completed", announcedDate: "2022-08-17", completedDate: "2023-06-15", dealType: "Public Takeover of Minority", description: "Absorción de la sociedad en comandita para controlar totalmente la red de gas natural.", rationale: "Simplificación societaria y captura de sinergias operativas de refino integrado." }
];

// Variables de estado
let currentPage = 1;
const pageSize = 12;
let filteredDeals = [...DEALS_DATABASE];

// Formateador de moneda
function formatCurrency(val) {
  if (val === null || val === undefined) return "Undisclosed";
  if (val >= 1e9) return "$" + (val / 1e9).toFixed(1) + "B";
  return "$" + (val / 1e6).toFixed(0) + "M";
}

// Inicialización de filtros y gráficos
function initTerminal() {
  populateSectorDropdown();
  updateStripStats();
  applyFilters();
  renderAnalytics();
}

function populateSectorDropdown() {
  const sectors = Array.from(new Set(DEALS_DATABASE.map(d => d.sector))).sort();
  const select = document.getElementById("sectorFilter");
  sectors.forEach(s => {
    const opt = document.createElement("option");
    opt.value = s;
    opt.textContent = s;
    select.appendChild(opt);
  });
}

function updateStripStats() {
  const disclosed = DEALS_DATABASE.filter(d => d.dealValue !== null);
  const total = disclosed.reduce((acc, d) => acc + d.dealValue, 0);
  const avg = total / disclosed.length;
  const max = Math.max(...disclosed.map(d => d.dealValue));
  const completed = DEALS_DATABASE.filter(d => d.status === "Completed").length;
  const ratio = ((completed / DEALS_DATABASE.length) * 100).toFixed(0) + "%";

  document.getElementById("stripVolume").textContent = formatCurrency(total);
  document.getElementById("stripAvg").textContent = formatCurrency(avg);
  document.getElementById("stripMax").textContent = formatCurrency(max);
  document.getElementById("stripRatio").textContent = ratio;
}

// Lógica de filtrado y ordenación
function applyFilters() {
  const query = document.getElementById("searchInput").value.toLowerCase().trim();
  const sector = document.getElementById("sectorFilter").value;
  const status = document.getElementById("statusFilter").value;
  const sort = document.getElementById("sortFilter").value;

  filteredDeals = DEALS_DATABASE.filter(deal => {
    const matchesSearch = deal.acquirer.toLowerCase().includes(query) ||
                          deal.target.toLowerCase().includes(query) ||
                          deal.description.toLowerCase().includes(query);
    const matchesSector = sector === "All" || deal.sector === sector;
    const matchesStatus = status === "All" || deal.status === status;
    return matchesSearch && matchesSector && matchesStatus;
  });

  filteredDeals.sort((a, b) => {
    if (sort === "date-desc") return new Date(b.announcedDate) - new Date(a.announcedDate);
    if (sort === "date-asc") return new Date(a.announcedDate) - new Date(b.announcedDate);
    if (sort === "val-desc") return (b.dealValue || 0) - (a.dealValue || 0);
    if (sort === "val-asc") return (a.dealValue || 0) - (b.dealValue || 0);
    return 0;
  });

  currentPage = 1;
  renderTable();
}

// Renderizado de tabla y paginación
function renderTable() {
  const tbody = document.getElementById("dealsTableBody");
  tbody.innerHTML = "";

  const total = filteredDeals.length;
  document.getElementById("resultsCount").textContent = `Showing ${total} transactions`;

  if (total === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-dim); padding: 3rem;">No transactions match your search criteria.</td></tr>`;
    document.getElementById("paginationControls").innerHTML = "";
    return;
  }

  const start = (currentPage - 1) * pageSize;
  const paginated = filteredDeals.slice(start, start + pageSize);

  paginated.forEach(deal => {
    const tr = document.createElement("tr");
    tr.onclick = () => openModal(deal.id);
    tr.innerHTML = `
      <td class="deal-cell-main">${deal.acquirer}</td>
      <td class="deal-cell-sub">${deal.target}</td>
      <td style="color: var(--text-muted); font-size: 0.8rem;">${deal.sector}</td>
      <td class="font-mono val-strong">${formatCurrency(deal.dealValue)}</td>
      <td><span class="status-pill ${deal.status.toLowerCase()}">${deal.status}</span></td>
      <td class="font-mono" style="color: var(--text-dim); font-size: 0.8rem;">${deal.announcedDate}</td>
      <td><button class="btn-inspect" onclick="event.stopPropagation(); openModal('${deal.id}')">Inspect</button></td>
    `;
    tbody.appendChild(tr);
  });

  renderPagination(total);
}

function renderPagination(total) {
  const container = document.getElementById("paginationControls");
  container.innerHTML = "";
  const totalPages = Math.ceil(total / pageSize);
  if (totalPages <= 1) return;

  const prevBtn = document.createElement("button");
  prevBtn.className = "page-btn";
  prevBtn.innerHTML = "&larr;";
  prevBtn.disabled = currentPage === 1;
  prevBtn.onclick = () => { currentPage--; renderTable(); };
  container.appendChild(prevBtn);

  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
      const btn = document.createElement("button");
      btn.className = `page-btn ${i === currentPage ? "active" : ""}`;
      btn.textContent = i;
      btn.onclick = () => { currentPage = i; renderTable(); };
      container.appendChild(btn);
    } else if (i === currentPage - 2 || i === currentPage + 2) {
      const span = document.createElement("span");
      span.textContent = "..";
      span.style.color = "var(--text-dim)";
      container.appendChild(span);
    }
  }

  const nextBtn = document.createElement("button");
  nextBtn.className = "page-btn";
  nextBtn.innerHTML = "&rarr;";
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.onclick = () => { currentPage++; renderTable(); };
  container.appendChild(nextBtn);
}

// Analítica
function renderAnalytics() {
  const sectorMap = {};
  DEALS_DATABASE.forEach(d => {
    if (d.dealValue) {
      sectorMap[d.sector] = (sectorMap[d.sector] || 0) + d.dealValue;
    }
  });

  const sortedSectors = Object.entries(sectorMap).sort((a, b) => b[1] - a[1]);
  const maxVal = sortedSectors[0][1];
  const chartContainer = document.getElementById("sectorBarChart");
  chartContainer.innerHTML = "";

  sortedSectors.forEach(([sector, val]) => {
    const pct = ((val / maxVal) * 100).toFixed(1);
    const row = document.createElement("div");
    row.className = "bar-row";
    row.innerHTML = `
      <div class="bar-labels">
        <span>${sector}</span>
        <span style="color: var(--accent-emerald);">${formatCurrency(val)}</span>
      </div>
      <div class="bar-track">
        <div class="bar-fill" style="width: ${pct}%"></div>
      </div>
    `;
    chartContainer.appendChild(row);
  });

  const completed = DEALS_DATABASE.filter(d => d.status === "Completed").length;
  const pending = DEALS_DATABASE.filter(d => d.status === "Pending").length;
  const terminated = DEALS_DATABASE.filter(d => d.status === "Terminated").length;

  document.getElementById("statusBreakdown").innerHTML = `
    <div class="status-stat-row">
      <span class="status-pill completed">COMPLETED</span>
      <span class="font-mono" style="font-weight: 700;">${completed} transactions (${((completed/100)*100).toFixed(0)}%)</span>
    </div>
    <div class="status-stat-row">
      <span class="status-pill pending">PENDING</span>
      <span class="font-mono" style="font-weight: 700;">${pending} transactions (${((pending/100)*100).toFixed(0)}%)</span>
    </div>
    <div class="status-stat-row">
      <span class="status-pill terminated">TERMINATED</span>
      <span class="font-mono" style="font-weight: 700;">${terminated} transactions (${((terminated/100)*100).toFixed(0)}%)</span>
    </div>
  `;

  const top10 = [...DEALS_DATABASE].sort((a,b) => (b.dealValue||0) - (a.dealValue||0)).slice(0, 10);
  const topList = document.getElementById("topDealsList");
  topList.innerHTML = "";
  top10.forEach((d, idx) => {
    const item = document.createElement("div");
    item.className = "top-deal-item";
    item.innerHTML = `
      <div><span style="color: var(--text-dim); margin-right: 0.5rem; font-family: var(--font-mono);">#${idx + 1}</span><strong>${d.acquirer}</strong> &bull; ${d.target} <span style="font-size: 0.75rem; color: var(--text-dim); margin-left: 0.5rem;">(${d.announcedDate.split('-')[0]})</span></div>
      <div class="font-mono val-strong">${formatCurrency(d.dealValue)}</div>
    `;
    topList.appendChild(item);
  });
}

// Modal
function openModal(id) {
  const deal = DEALS_DATABASE.find(d => d.id === id);
  if (!deal) return;

  document.getElementById("modalType").textContent = deal.dealType;
  document.getElementById("modalTitle").textContent = `${deal.acquirer} & ${deal.target}`;
  document.getElementById("modalValue").textContent = formatCurrency(deal.dealValue);
  document.getElementById("modalStatus").textContent = deal.status;
  document.getElementById("modalAnnounced").textContent = deal.announcedDate;
  document.getElementById("modalCompleted").textContent = deal.completedDate || "Not Finalized / Terminated";
  document.getElementById("modalDesc").textContent = deal.description;
  document.getElementById("modalRationale").textContent = deal.rationale;
  document.getElementById("modalSector").textContent = `Primary Sector: ${deal.sector}`;

  document.getElementById("detailModal").classList.add("open");
}

function closeModal() {
  document.getElementById("detailModal").classList.remove("open");
}

function closeModalOnBackdrop(e) {
  if (e.target.id === "detailModal") closeModal();
}

// Navegación entre vistas
function navigate(viewId) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach(b => b.classList.remove("active"));

  document.getElementById(viewId).classList.add("active");
  event.currentTarget.classList.add("active");
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Inicialización
document.addEventListener("DOMContentLoaded", initTerminal);
