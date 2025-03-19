export default {
  global: {
    Name: 'Variables ambientales en agroecosistemas',
    Description:
      'En este componente formativo se abordan los aspectos clave de la producción agropecuaria ecológica, incluyendo los tipos de agroecosistemas y la clasificación de las variables ambientales en bióticas y abióticas. Estas variables deben priorizarse según las necesidades de los agroecosistemas y en función de las dimensiones ambiental, económica, sociocultural, espacial e institucional.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Producción agropecuaria ecológica y agroecológica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Problemáticas ambientales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Marco Normativo Producción Agropecuaria Ecológica',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Sellos de alimentos ecológicos',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tipos de agroecosistemas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Dimensiones en los territorios',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Variables ambientales y biodiversidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Clasificación de las variables ambientales',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Biodiversidad',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Marco normativo de la Producción Agropecuaria Ecológica',
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural (2006). Normatividad Sello Ecológico.',
      tipo: 'Página web',
      link:
        'https://www.minagricultura.gov.co/tramites-servicios/Paginas/Normatividad-Sello-Ecologico.aspx',
    },
    {
      tema: 'Marco normativo de la Producción Agropecuaria Ecológica',
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2024). Política Pública de Agroecología.',
      tipo: 'Página web',
      link:
        'https://www.minagricultura.gov.co/Normatividad/Resoluciones/Anexo%20T%C3%A9cnico%20-%20Lineamientos%20de%20Pol%C3%ADtica%20P%C3%BAblica.pdf',
    },
    {
      tema: 'Marco normativo de la Producción Agropecuaria Ecológica',
      referencia:
        'FAO. (2021). Documento propuesta de lineamientos de política pública en agroecología para Colombia',
      tipo: 'Página web',
      link:
        'http://sembrandocapacidades.fao.org.co/wp-content/uploads/2021/11/V-FINAL-DOCUMENTO-POLITICA-PUBLICA-ESPAN%CC%83OL-V-WEB.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Agricultura ecológica',
      significado:
        'sistema holístico de gestión de la producción agropecuaria, acuícola y pesquera que promueve la conservación de la biodiversidad, los ciclos biológicos y la actividad biológica del ecosistema. Esta producción se basa en la reducción de insumos externos a la exclusión de insumos de síntesis química. ',
    },
    {
      termino: 'Agroecología',
      significado:
        'es una disciplina científica, un conjunto de prácticas y un movimiento social. Como ciencia estudia las interacciones ecológicas de los diferentes componentes del agroecosistema; como conjunto de prácticas busca sistemas agroalimentarios sostenibles que optimicen y estabilicen la producción, y que se basen tanto en los conocimientos locales y tradicionales como en los de la ciencia moderna; y como movimiento social impulsa la multifuncionalidad de la agricultura, promueve la justicia social, nutre la identidad y la cultura, y refuerza la viabilidad económica de las zonas rurales. ',
    },
    {
      termino: 'Agroecosistema',
      significado:
        'ecosistema modificado por el ser humano para fines de producción de alimentos y productos agropecuarios. ',
    },
    {
      termino: 'Calidad de agua',
      significado:
        'resultado de comparar las características físicas, químicas y microbiológicas encontradas en el agua con el contenido de las normas que regulan la materia. ',
    },
    {
      termino: 'Calidad del suelo',
      significado:
        'capacidad del suelo para funcionar dentro de los límites de un ecosistema natural o manejado, sostener la productividad de las plantas y los animales, mantener o mejorar la calidad del aire y del agua, y sostener la salud humana y el hábitat. ',
    },
    {
      termino: 'Variables ambientales',
      significado:
        'representación cualitativa o cuantitativa asignada a un aspecto ambiental, que permite observar algún tipo de variación al realizar la medición. El propósito de la medición es conocer la afectación o impacto de las actividades productivas del agroecosistema sobre el medio ambiente y cómo estas variables pueden afectar a otras con las que están relacionadas. ',
    },
  ],
  referencias: [
    {
      referencia:
        'FiBL & IFOAM. (2021). <em>The world of organic agriculture: Statistics and emerging trends 2021</em>. Research Institute of Organic Agriculture (FiBL) & International Federation of Organic Agriculture Movements (IFOAM).',
      link: '',
    },
    {
      referencia:
        'Grupo de Investigación en Agroecología, Universidad Nacional de Colombia Sede Palmira, Colombia. Agroecología (7), p. 19-34.',
      link: '',
    },
    {
      referencia:
        'Hernández, A., & Ávila, J. (2017). Agroecosistemas y su clasificación: hacia una agricultura más sostenible. Universidad Nacional Autónoma de México (UNAM)',
      link: '',
    },
    {
      referencia:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales [IDEAM]. (2018). Protocolo de monitoreo del agua. Ministerio de Ambiente y Desarrollo Sostenible.',
      link:
        'https://corpouraba.gov.co/wp-content/uploads/2.-PROTOCOLO_MONITOREO_AGUA_IDEAM.pdf',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2024). Política Pública de Agroecología.',
      link: '%20-%20Lineamientos%20de%20Pol%C3%ADtica%20P%C3%BAblica.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2014). Negocios verdes como alternativa para las comunidades en los programas de reconversión y sustitución en ecosistemas estratégicos.',
      link:
        'https://santurban.minambiente.gov.co/images/Autos_seguimiento/9---Anexo_9._Gui%CC%81a_de_Turismo.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2023). <em>Cambio climático en Colombia.</em>',
      link: '',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y Agricultura FAO. (2021). Documento propuesto de lineamientos de política pública en agroecología para Colombia.',
      link:
        'http://sembrandocapacidades.fao.org.co/wp-content/uploads/2021/11/V-FINAL-DOCUMENTO-POLITICA-PUBLICA-ESPAN%CC%83OL-V-WEB.pdf',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y Agricultura FAO. (2018). Los 10 elementos de la agroecología. Guía para la transición hacia sistemas alimentarios y agrícolas sostenibles. FAO',
      link: '',
    },
    {
      referencia:
        'Sánchez, M. y Praguer, M. (2012). El suelo, su metabolismo, ciclaje de nutrientes y prácticas agroecológicas.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
