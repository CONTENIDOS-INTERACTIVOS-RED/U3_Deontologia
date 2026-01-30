export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad:
      'Responsabilidad Social Empresarial (RSE) y su impacto en la gestión organizacional',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Dimensiones ética, económica y ambiental de la Responsabilidad Social Empresarial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Fundamentos éticos de la RSE: valores, principios y deberes empresariales',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Deberes éticos empresariales',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Responsabilidad económica: sostenibilidad, productividad y creación de valor compartido',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Implementación de políticas de RSE en las organizaciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Elementos claves de una política de RSE: objetivos, actores y estructura',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Medición de resultados: indicadores sociales, ambientales y económicos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Guibert Ucín, J. M. (2007). Empresa y responsabilidad social en Gipuzkoa. Publicaciones de la Universidad de Deusto.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/34024',
    },
    {
      referencia:
        'Martínez Herrera, H. (2010). Responsabilidad social y ética empresarial. Ecoe Ediciones.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/69172',
    },
    {
      referencia:
        'Guevara Ramos, E. (2012). La gestión de las relaciones y la responsabilidad social empresarial. B - EUMED.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/51620',
    },
    {
      referencia:
        'Fernández García, R. (2018). La responsabilidad social corporativa como modelo de gestión empresarial. LA LEY Soluciones Legales S.A.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/107179',
    },
    {
      referencia:
        'Camarán, M. L., Barón, M. L. & Rueda, M. P. (2019). La responsabilidad social empresarial y los objetivos de desarrollo sostenible (ODS). Revista Científica Teorías, Enfoques y Aplicaciones en las Ciencias Sociales, 11(24), 41-52.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=7013907',
    },
  ],
  glosario: [
    {
      termino: 'Agenda 2030',
      significado:
        'Plan de acción global adoptado por la ONU que incluye los 17 Objetivos de Desarrollo Sostenible, para erradicar la pobreza, proteger el planeta y garantizar la paz.',
    },
    {
      termino: 'Capital reputacional',
      significado:
        'Valor intangible que una empresa obtiene a partir de su conducta ética, percepción pública y relaciones de confianza con sus grupos de interés.',
    },
    {
      termino: 'Consumo consciente',
      significado:
        'Comportamiento del consumidor que elige productos y servicios basándose en criterios éticos, sociales y ambientales.',
    },
    {
      termino: 'Credibilidad',
      significado:
        'Cualidad de una organización de ser confiable y coherente entre lo que declara y lo que hace.',
    },
    {
      termino: 'Desarrollo sostenible',
      significado:
        'Proceso que satisface las necesidades actuales sin comprometer las capacidades de las futuras generaciones, integrando lo económico, lo social y lo ambiental.',
    },
    {
      termino: 'Grupos de interés (stakeholders)',
      significado:
        'Personas o entidades que afectan o son afectadas por las decisiones y actividades de una organización, como empleados, clientes, proveedores, comunidades, entre otros.',
    },
    {
      termino: 'Indicadores de sostenibilidad',
      significado:
        'Herramientas que permiten medir el impacto y avance de las políticas sociales, ambientales y económicas de una empresa.',
    },
    {
      termino: 'Licencia social para operar',
      significado:
        'Aceptación y legitimidad que una empresa recibe por parte de la comunidad y sus grupos de interés para desarrollar sus actividades.',
    },
    {
      termino: 'Objetivos de Desarrollo Sostenible (ODS)',
      significado:
        'Conjunto de 17 metas globales promovidas por la ONU para erradicar la pobreza, proteger el medio ambiente y promover la paz y la prosperidad.',
    },
    {
      termino: 'Proyección a largo plazo',
      significado:
        'Capacidad de una empresa para planificar y actuar pensando en el impacto y sostenibilidad futura de sus decisiones.',
    },
    {
      termino: 'Responsabilidad compartida',
      significado:
        'Principio, según el cual todos los actores (Estado, empresa, sociedad civil), tienen un rol en el desarrollo sostenible.',
    },
  ],
}
