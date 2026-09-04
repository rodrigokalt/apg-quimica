export interface MarketIndustry {
  id: string;
  name: string;
  image: string;
  description: string;
  keywords: string[];
  specs?: { label: string; value: string }[];
}

export interface LaboratoryCapability {
  title: string;
  description: string;
  metric?: string;
}

export interface SiteData {
  company: {
    name: string;
    legalName: string;
    fullName: string;
    experience: string;
    brandRepresentation: string;
    tagline: string;
    city: string;
    country: string;
  };
  brandColors: {
    brandTeal: string;
    brandTealDark: string;
    brandAccentBlue: string;
    brandSlate: string;
    textDark: string;
    bgClean: string;
    bgOffwhite: string;
  };
  contact: {
    address: string;
    googleMapsUrl: string;
    phones: string[];
    email: string;
    social: {
      whatsapp: string;
      facebook: string;
      instagram: string;
      linkedin: string;
    };
  };
  navigation: { label: string; href: string }[];
  about: {
    title: string;
    lead: string;
    description: string;
    partner: string;
    valueProposition: string;
    image: string;
  };
  visionMission: {
    vision: string;
    mission: string;
  };
  laboratory: {
    title: string;
    description: string;
    capabilities: string[];
    images: string[];
  };
  flagshipProduct: {
    title: string;
    brand: string;
    subtitle: string;
    description: string;
    features: string[];
    specsTable: { parameter: string; valueN: string; valueL: string }[];
    image: string;
  };
  markets: MarketIndustry[];
}

export const siteData: SiteData = {
  company: {
    name: "APG Química",
    legalName: "Química, S.A. de C.V.",
    fullName: "APG Química – Química, S.A. de C.V.",
    experience: "Más de 20 años de liderazgo en la comercialización y soporte técnico de especialidades químicas en México.",
    brandRepresentation: "Representantes oficiales de Clariant (Líder mundial en especialidades químicas)",
    tagline: "Especialidades químicas de ingeniería y soluciones formuladas a la medida industrial.",
    city: "Querétaro",
    country: "México"
  },
  brandColors: {
    brandTeal: "#30afb8",
    brandTealDark: "#21858c",
    brandAccentBlue: "#5fbbf4",
    brandSlate: "#313b48",
    textDark: "#242424",
    bgClean: "#ffffff",
    bgOffwhite: "#fcfcfc"
  },
  contact: {
    address: "Pedro Escobedo - Santiago de Querétaro, C.P. 76240 Querétaro, México",
    googleMapsUrl: "https://goo.gl/maps/2cTgQ7kU1HLpAzWt6",
    phones: ["+52 442 218 1700", "+52 442 395 2609"],
    email: "apgquimica@prodigy.net.mx",
    social: {
      whatsapp: "https://bit.ly/apg_wa",
      facebook: "https://www.facebook.com/apgquimicasadecv/",
      instagram: "https://www.instagram.com/apg_quimica/",
      linkedin: "https://www.linkedin.com/company/apgquimica/"
    }
  },
  navigation: [
    { label: "Inicio", href: "#inicio" },
    { label: "Mercados", href: "#mercados" },
    { label: "Antifrogen®", href: "#antifrogen" },
    { label: "Laboratorio", href: "#laboratorio" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" }
  ],
  about: {
    title: "Nosotros",
    lead: "Somos una empresa con más de 20 años de experiencia en la comercialización de productos químicos especializados para diferentes mercados industriales.",
    description: "Estamos comprometidos con la calidad de los productos que distribuimos, ofreciendo soluciones personalizadas a nuestros clientes mientras mantenemos la armonía con el medio ambiente a través de productos ecológicos y políticas medioambientales.",
    partner: "Somos representantes de la marca Clariant, una empresa líder mundial en especialidades químicas, con productos sustentables y con un valor agregado para cubrir necesidades específicas de diversos mercados en el sector industrial; tal como, certificados y asesorías técnicas.",
    valueProposition: "Todo esto nos ha llevado a obtener la preferencia de los clientes por nuestros productos y servicios innovadores, desarrollados sobre medida para atender a las necesidades actuales y futuras de los más variados sectores y mercados.",
    image: "/images/pexels-polina-tankilevitch-3735709_1-1024x682.jpg"
  },
  visionMission: {
    vision: "Ser una empresa sustentable, generadora de soluciones técnicas y servicios específicos para tu negocio. Ofrecer productos con calidad y sustentables; comprometidos con la sociedad y el cuidado del medio ambiente.",
    mission: "Ser una empresa comprometida para atender las necesidades específicas en la industria en general con cada cliente. Renovamos continuamente nuestro portafolio de productos, servicios y aplicaciones, ofreciendo soluciones a la medida para las más variadas demandas."
  },
  laboratory: {
    title: "Laboratorio de Soporte Técnico y Control Fisicoquímico",
    description: "Contamos con un laboratorio de soporte técnico que atiende las necesidades específicas de cada uno de nuestros clientes. Nuestro laboratorio cuenta con los equipos necesarios para realizar pruebas de aplicación, pruebas de estabilidad y mediciones fisicoquímicas básicas que determinan la calidad de nuestros productos.",
    capabilities: [
      "Pruebas de aplicación en producto terminado y formulaciones piloto",
      "Ensayos de estabilidad acelerada y estabilidad a temperatura ambiente",
      "Mediciones fisicoquímicas analíticas (pH, viscosidad, densidad, punto de turbidez)",
      "Control de calidad estricto y trazabilidad por lote certificado",
      "Optimización y reemplazo de sustancias reguladas hacia alternativas sustentables"
    ],
    images: [
      "/images/nuestro-laboratorio-1.jpg",
      "/images/nuestro-laboratorio-2.jpg",
      "/images/nuestro-laboratorio-3.jpg"
    ]
  },
  flagshipProduct: {
    title: "ANTIFROGEN® CLARIANT",
    brand: "Clariant",
    subtitle: "Fluido Caloportador Industrial y Anticongelante de Alto Desempeño",
    description: "Antifrogen® N del fabricante Clariant es un fluido refrigerante y caloportador industrial con inhibidores de corrosión de alta durabilidad. Diseñado para intercambiadores de calor, sistemas de refrigeración y circuitos térmicos. Formulación limpia libre de sustancias CMR (sin carcinógenos, mutágenos ni reprotóxicos).",
    features: [
      "Inhibidores orgánicos e inorgánicos de corrosión multimetálica (acero, cobre, aluminio, latón)",
      "Totalmente libre de sustancias CMR (Carcinógenas, mutagénicas y reprotóxicas)",
      "Rango térmico de operación extrema: de -50°C a +150°C",
      "Excelente estabilidad térmica y resistencia a la degradación por oxidación",
      "Variante grado alimenticio y farmacéutico certificada: Antifrogen® L"
    ],
    specsTable: [
      { parameter: "Base Química", valueN: "Monoetilenglicol inhibido", valueL: "Monopropilenglicol inhibido" },
      { parameter: "Perfil Toxicológico", valueN: "Libre de CMR (Uso industrial general)", valueL: "Grado Alimentos y Farmacia (No tóxico)" },
      { parameter: "Protección Anticongelante", valueN: "Hasta -50°C (ajustable por dilución)", valueL: "Hasta -48°C (ajustable por dilución)" },
      { parameter: "Protección Anticorrosión", valueN: "Aleaciones ferrosas, cobre, latón, soldadura", valueL: "Aleaciones industriales y grado higiénico" },
      { parameter: "Vida Útil en Circuito", valueN: "Prolongada (Monitoreo vía lab APG)", valueL: "Prolongada (Monitoreo vía lab APG)" }
    ],
    image: "/images/antifrogen.jpg"
  },
  markets: [
    {
      id: "metalurgia",
      name: "Metalurgia & Metalworking",
      image: "/images/METALWORKING.jpg",
      description: "Fluidos de transferencia térmica Antifrogen® N y Antifrogen® L, inhibidores de corrosión de grado superior y materias primas especializadas para limpieza, desengrase y maquinado de metales.",
      keywords: ["Antifrogen N", "Antifrogen L", "Refrigeración Industrial", "Limpieza de Metales", "Inhibidores de Corrosión"]
    },
    {
      id: "aditivos",
      name: "Aditivos Industriales",
      image: "/images/aditivos.jpg",
      description: "Aditivos de alto desempeño para plásticos, hules y recubrimientos: retardantes de flama no halogenados, estabilizadores térmicos y protección avanzada contra degradación por luz UV y oxidación.",
      keywords: ["Retardantes de Llama", "Estabilizadores Térmicos", "Filtros UV", "Antioxidantes", "Plásticos Técnicos"]
    },
    {
      id: "cultivos",
      name: "Cultivos & Agroquímica",
      image: "/images/crop.jpg",
      description: "Soluciones sustentables para formulaciones agrícolas: adyuvantes de penetración, agentes de dispersión, tensoactivos para herbicidas, fungicidas, insecticidas y tratamiento de semillas.",
      keywords: ["Protección de Cultivos", "Adyuvantes Agrícolas", "Dispersantes", "Fertilizantes", "Agroquímica Verde"]
    },
    {
      id: "revestimientos",
      name: "Pinturas & Revestimientos",
      image: "/images/coatings.jpg",
      description: "Emulsificantes, ceras y aditivos reológicos para recubrimientos base agua y solvente: agentes humectantes, neutralizadores, dispersantes de pigmento y antiespumantes de alta eficiencia.",
      keywords: ["Coatings", "Agentes Humectantes", "Dispersantes", "Antiespumantes", "Modificadores Reológicos"]
    },
    {
      id: "ceramica",
      name: "Cerámica & Azulejos",
      image: "/images/Ceramica.jpg",
      description: "Pigmentos cerámicos de alta definición, mejoradores de molienda para optimizar consumo energético y aditivos desfloculantes y antiespumantes para barbotinas y esmaltes.",
      keywords: ["Pigmentos Cerámicos", "Mejoradores de Molienda", "Desfloculantes", "Azulejos", "Esmaltes"]
    },
    {
      id: "tratamiento-agua",
      name: "Tratamiento de Aguas",
      image: "/images/tratamiento-agua.jpg",
      description: "Especialidades para aguas residuales y circuitos industriales: antiespumantes de amplio espectro, biocidas industriales y cuaternarios de amonio desinfectantes de alta eficacia.",
      keywords: ["Antiespumantes", "Cuaternarios de Amonio", "Desinfección Industrial", "Tratamiento de Efluentes"]
    },
    {
      id: "construccion",
      name: "Construcción Sustentable",
      image: "/images/construccion.jpg",
      description: "Materias primas para morteros, hormigones y aditivos de obra: poliglicoles, emulsiones hidrofugantes, antiespumantes y dispersantes para edificaciones eficientes y durables.",
      keywords: ["Poliglicoles", "Aditivos de Construcción", "Hidrofugantes", "Morteros Técnicos"]
    },
    {
      id: "ceras",
      name: "Ceras de Alto Rendimiento",
      image: "/images/ceras.jpg",
      description: "Portafolio innovador de ceras sintéticas y semisintéticas: productos basados en cera montana, ceras de amidas micronizadas, poliolefinas y copolímeros para aplicaciones críticas.",
      keywords: ["Cera Montana", "Ceras Micronizadas", "Poliolefinas", "Ceras de Amidas"]
    },
    {
      id: "pigmentos",
      name: "Pigmentos & Colorantes",
      image: "/images/pigmentos.jpg",
      description: "Pigmentos orgánicos e inorgánicos para sistemas base agua y solvente, diseñados para máxima solidez a la luz, intemperismo y estabilidad térmica en plásticos y pinturas.",
      keywords: ["Solidez de Color", "Pigmentos Industriales", "Base Agua", "Base Solvente"]
    },
    {
      id: "cuero-calzado",
      name: "Cuero & Calzado",
      image: "/images/Cuero-y-Calzado.jpg",
      description: "Química para procesamiento de cuero en todas las fases: tensoactivos desengrasantes, agentes de recurtido, neutralizantes, dispersantes de tintura y formulaciones adhesivas para calzado.",
      keywords: ["Curtiduría", "Recurtido", "Tensoactivos", "Adhesivos para Suelas"]
    },
    {
      id: "cuidado-hogar",
      name: "Cuidado del Hogar (I&I)",
      image: "/images/home-care.jpg",
      description: "Ingredientes sustentables para limpieza institucional y doméstica: surfactantes suaves 100% naturales a base de azúcar, óxidos de amina, polímeros de limpieza y biocidas.",
      keywords: ["Home Care", "Limpieza Institucional", "Surfactantes Naturales", "Óxidos de Aminas"]
    },
    {
      id: "cuidado-personal",
      name: "Cuidado Personal & Cosmética",
      image: "/images/personal-care.jpg",
      description: "Especialidades para el cuidado de la piel y cabello: emolientes sensoriales, emulsionantes, aperlantes, conservadores suaves, filtros solares y agentes acondicionadores.",
      keywords: ["Cosmética", "Cuidado Capilar", "Emolientes", "Filtros Solares", "Personal Care"]
    }
  ]
};
