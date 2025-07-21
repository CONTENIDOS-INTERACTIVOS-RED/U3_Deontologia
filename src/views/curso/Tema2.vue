<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Implementación de políticas de RSE en las organizaciones'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left").mb-4 La Responsabilidad Social Empresarial (RSE), entendida como un enfoque integral que articula lo económico, lo social y lo ambiental, exige más que declaraciones voluntaristas o iniciativas aisladas. Su efectividad depende de su institucionalización a través de políticas claras, estratégicamente diseñadas e implementadas dentro del modelo de gestión empresarial. En esta segunda sección de la unidad se aborda el proceso mediante el cual la RSE pasa de ser un marco conceptual a convertirse en un conjunto estructurado de acciones, compromisos y mecanismos formales dentro de las organizaciones.
      
          .bg-color-2.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Implementar una política de RSE, significa traducir los valores, principios y deberes éticos de la empresa en normas operativas, indicadores verificables y procesos participativos. Para ello, es necesario construir un marco normativo que incluya objetivos específicos, actores responsables, herramientas de seguimiento y canales de comunicación interna y externa. Como plantean Fernández García (2018), y Martínez Herrera (2010), la incorporación formal de la RSE en el núcleo de la estrategia organizacional, permite que sus principios se reflejen de manera efectiva en las relaciones laborales, las prácticas productivas y la interacción con los grupos de interés.


      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-5 El desarrollo de una política de RSE, también requiere comprender las particularidades de cada organización: su contexto, tamaño, cultura corporativa e impactos. No existe una fórmula única, sino una orientación estratégica que debe ser adaptada. Según Guibert Ucín (2007), una implementación exitosa debe estar liderada desde la alta dirección, pero con la participación activa de todos los niveles jerárquicos. Solo así se logrará una apropiación real de los valores éticos y una alineación de la conducta organizacional con los objetivos de sostenibilidad.

      
          .bg-color-5.p-4(data-aos="fade-left")
            p.mb-4 #[b Este eje temático se organiza en tres aspectos fundamentales:]
            p.mb-3 #[b Elementos clave de una política de RSE:] desde su estructura conceptual hasta los mecanismos de gobernanza que garantizan su ejecución.
            p.mb-3 #[b Estrategias de implementación:] enfocadas en la comunicación interna, la formación del talento humano y la articulación con los grupos de interés.
            p.mb-0 #[b Instrumentos de medición de resultados:] que permiten evaluar el impacto social, ambiental y económico, y tomar decisiones informadas para su mejora continua.
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in")

      p.mb-5 El propósito de este componente es que el estudiante comprenda que la RSE no se reduce a la buena voluntad o responsabilidad individual, sino que se construye colectivamente mediante estructuras, procedimientos y compromisos formales. Implementar una política de RSE implica institucionalizar la ética empresarial, convertirla en cultura organizacional y asegurar su sostenibilidad a largo plazo.


      #t_2_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.1] Elementos claves de una política de RSE: objetivos, actores y estructura


      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")
        .col-lg-8
          .bg-color-1.p-4(data-aos="fade-left").mb-4
            p.mb-0 La consolidación de un modelo de gestión socialmente responsable, requiere más que voluntad ética. Para que el compromiso empresarial tenga un impacto real y perdurable, es indispensable formular políticas institucionales claras, que encaucen los principios de la responsabilidad social hacia una práctica organizada, coherente y evaluable. Esta formalización no solo estructura el compromiso, sino que facilita su implementación y control en todas las áreas de la organización.
      
          p(data-aos="fade-left").mb-4 Una política efectiva de RSE, debe contener tres componentes fundamentales, que se detallan a continuación:

      .row.align-items-start.mb-5
        .col-lg-8
      
          AcordionA(tipo="b")
            .div(titulo="Objetivos")
              p Son el punto de partida estratégico. Deben ser específicos, medibles, alcanzables, relevantes y temporalmente definidos. Según Camarán, Barón y Rueda (2019), estos deben responder a preguntas como: ¿cómo corregir debilidades institucionales?, ¿cómo potenciar fortalezas?, ¿cómo alinear acciones con el propósito estratégico? #[b Un ejemplo podría ser:] “Reducir en un 30 % las emisiones de carbono de la flota vehicular, en tres años”. También deben estar alineados con los Objetivos de Desarrollo Sostenible (ODS).
      
            .div(titulo="Actores responsables")
              p Se refiere a los individuos o áreas encargadas de diseñar, implementar, supervisar y evaluar la política. Incluye desde la alta dirección, que debe liderar el proceso, hasta los colaboradores de todos los niveles. La participación activa garantiza una apropiación real de los valores y prácticas de la RSE.
      
            .div(titulo="Estructura funcional y operativa")
              p Es la arquitectura organizativa que permite ejecutar la política. Incluye: canales de comunicación interna y externa, herramientas de seguimiento, mecanismos de gobernanza, indicadores de evaluación y procedimientos formales. Esta estructura asegura coherencia y continuidad en las acciones.
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/5.png", alt="").mb-4.mb-lg-0


      h2(data-aos="fade-left").mb-4 Actores: liderazgos y corresponsabilidades

      p(data-aos="fade-left").mb-4 La Responsabilidad Social Empresarial (RSE) debe ir más allá de iniciativas aisladas: debe institucionalizarse mediante políticas claras, integradas al modelo de gestión. Esto implica traducir principios éticos en normas operativas, indicadores y procesos participativos. Una política sólida se basa en tres componentes esenciales:


      .bg-full-width.bg-color-info.mb-5
        .px-4.px-md-5.pt-4.pt-md-5
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-10
              ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema2/infografia.svg', alt='', style="max-width: 890px;").mx-auto
      
                .bg-color-white.box-shadow.p-3(x="13%" y="5.5%" numero="+")
                  h5 Actores
                  p Incluyen un equipo transversal liderado por un coordinador, con participación activa de la alta dirección y todos los niveles jerárquicos. También se consideran los grupos de interés externos, como co-creadores de valor.
      
      
                .bg-color-white.box-shadow.p-3(x="44%" y="8%" numero="+")
                  h5 Objetivos
                  p Definidos con criterios SMART y alineados con los Objetivos de Desarrollo Sostenible (ODS). Por ejemplo: reducir emisiones, capacitar al personal, fortalecer alianzas sostenibles.

                .bg-color-white.box-shadow.p-3(x="73%" y="6%" numero="+")
                  h5 Estructura
                  p Comprende diagnóstico previo, plan de acción, indicadores de seguimiento, comunicación interna y externa, y mecanismos de mejora continua.

      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/6.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left").mb-4 #[b Ejemplo aplicado:] una empresa metalmecánica puede organizar su política en bloques como: salud ocupacional, reducción de residuos, vínculo comunitario y compras éticas. Cada bloque tiene metas, indicadores y responsables, revisados anualmente para ajustar la estrategia.
      
          .bg-color-6.p-4(data-aos="fade-left")
            p.mb-0 Implementar una política de RSE efectiva, implica articular objetivos estratégicos, liderazgos compartidos y una estructura operativa sólida, convirtiendo la ética empresarial en una cultura sostenible y verificable.

      .bg-full-width.bg-color-1.mb-lg-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8
              h2.mb-4(data-aos="flip-up") La RSE como factor estratégico en la sostenibilidad y reputación empresarial 
              p.mb-4(data-aos="fade-right") Se invita a leer el documento La RSE como factor estratégico en la sostenibilidad y reputación empresarial, donde se profundiza en el papel transformador de la responsabilidad social empresarial (RSE) como eje central de la estrategia organizacional.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> La RSE como factor estratégico en la sostenibilidad y reputación empresarial 
      
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/7.png', alt='')


      #t_2_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.2] Medición de resultados: indicadores sociales, ambientales y económicos

      
      .bg-color-2.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema2/8.png', alt='')
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") El seguimiento y evaluación de una política de responsabilidad social es una tarea ineludible para cualquier organización que aspire a gestionar con transparencia, efectividad y coherencia ética. La medición no es un acto administrativo aislado, sino una práctica estratégica que permite conocer el nivel de avance de los compromisos asumidos, detectar debilidades y fortalecer la legitimidad institucional. Para ello, es necesario establecer un sistema de indicadores que reflejen, de manera concreta y verificable, los impactos generados en las dimensiones social, ambiental y económica.

      
      h2 Importancia de medir lo que se transforma

      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 Medir es sinónimo de gestionar con responsabilidad. Una empresa que formula una política sostenible sin establecer mecanismos de evaluación, corre el riesgo de caer en la improvisación, la falta de transparencia o el incumplimiento involuntario de sus metas. Como señala el estudio de Camarán, Barón y Rueda (2019), una vez estructurado el plan de acción, la definición de indicadores de seguimiento, es la última tarea técnica fundamental del equipo responsable. Estos indicadores permitirán realizar un control periódico, evidenciar el cumplimiento de los objetivos y detectar problemas que requieran ajustes.
      
          .bg-color-5.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema2/9.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 El sistema de medición también cumple una función comunicativa. La empresa puede mostrar de forma transparente a sus grupos de interés cuáles han sido los avances alcanzados, qué dificultades se han encontrado y cómo se están enfrentando. Esta práctica fortalece la reputación institucional, genera confianza con los públicos claves y posiciona a la organización como un actor comprometido con la mejora continua.
      
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/10.png", data-aos="zoom-in")
      

      h2(data-aos="fade-left").mb-4 Indicadores sociales: medir el compromiso humano

      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/11.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left").mb-4 Los indicadores sociales permiten evaluar cómo las acciones organizacionales están impactando en el bienestar, los derechos y la calidad de vida de los trabajadores, las comunidades y otros actores sociales. Algunos ejemplos incluyen:
      
          .bg-color-6.p-4.py-lg-5(data-aos="fade-left")
            ul.lista-ul--color.color-dark.mb-0
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Tasa de rotación del personal.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Número de horas de formación impartidas en valores éticos.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Porcentaje de empleados beneficiados con programas de salud o conciliación familiar.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Nivel de satisfacción laboral.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Número de empleos directos e indirectos generados.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Índice de equidad de género y diversidad.


      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 Además de los datos cuantitativos, pueden incluirse indicadores cualitativos como percepciones, narrativas de impacto o niveles de participación. Por ejemplo, una empresa que implemente un programa de alfabetización digital para sus operarios puede medir tanto el número de beneficiarios como los cambios percibidos en su desempeño y autoestima.
      
          .bg-color-1.p-4(data-aos="fade-left")
            p.mb-0 Según Camarán et al. (2019), estos indicadores deben diseñarse en función del diagnóstico previo, las metas definidas y la realidad de la organización, para evitar la desconexión entre los objetivos institucionales y las métricas aplicadas.
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/12.png", data-aos="zoom-in")

      h2(data-aos="fade-left").mb-4 Indicadores ambientales: cuantificar la sostenibilidad

      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/13.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left").mb-4 En el campo ambiental, los indicadores permiten evaluar la eficiencia ecológica de las operaciones, la reducción de impactos negativos y la promoción de prácticas sostenibles. Algunos ejemplos relevantes son:
      
          .bg-color-2.p-4(data-aos="fade-left").mb-4
            ul.lista-ul--color.color-dark.mb-0
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Consumo de agua por unidad producida.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Emisiones de CO₂ por año.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Porcentaje de residuos reciclados.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Nivel de cumplimiento de normativas ambientales.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Número de proveedores certificados en sostenibilidad.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Inversiones en tecnologías limpias.

          p(data-aos="fade-left").mb-4 Estos indicadores pueden integrarse en auditorías ambientales internas o externas, reportes de sostenibilidad o certificaciones ISO. Un caso ilustrativo es el de una empresa industrial que, al modificar su sistema de iluminación por tecnología LED, no solo reduce su consumo energético, sino que puede medir dicho ahorro anualmente y traducirlo en reducción de emisiones. Como destaca el mismo estudio, la adopción de estos indicadores contribuye a la rendición de cuentas y al cumplimiento de los Objetivos de Desarrollo Sostenible (ODS), particularmente los vinculados al medio ambiente, como los ODS 6, 7, 12, 13 y 15.


      h2(data-aos="fade-left").mb-4 Indicadores económicos: eficiencia con ética
      
      p(data-aos="fade-left").mb-4 La dimensión económica no puede desligarse del enfoque responsable. Medir el impacto económico no solo implica reportar utilidades, sino también analizar cómo se distribuye la riqueza generada, cómo se reinvierte y cómo se vincula con el entorno. Indicadores clave en esta dimensión incluyen:

      .bg-full-width.bg-color-14
        .px-4.px-md-5.pb-md-3
          .row.justify-content-center.mb-5.align-items-center
            .col-lg-8
      
              SlyderF(columnas="col-12 col-lg-6")
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema2/14.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  p.text-center Porcentaje de utilidades reinvertidas en programas de desarrollo.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema2/15.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  p.text-center Proporción del gasto dedicado a proveedores locales.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema2/16.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  p.text-center Eficiencia en el uso de recursos financieros (retorno sobre inversión sostenible).
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema2/17.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  p.text-center Aumento del valor de marca vinculado a la política de responsabilidad social.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema2/18.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  p.text-center Reducción de costos operativos gracias a prácticas responsables.
      
            .col-lg-4
              figure
                img(src='@/assets/curso/tema2/19.png', alt='')

          .bg-full-width.bg-color-7.mb-5
            .px-4.px-md-5.py-4
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/20.svg", style="max-width: 90px").mx-auto
                .col-lg.text-white
                  p.mb-0 Un ejemplo práctico puede observarse en una cooperativa agrícola que, tras implementar una política de comercio justo con sus asociados, reporta no solo un incremento en la lealtad de sus proveedores, sino también una mejora en su posicionamiento en el mercado local. Camarán et al. (2019) destacan que, si bien estos indicadores tienen una base económica, deben ser leídos desde una lógica ética, que considere el beneficio compartido, la generación de valor para la sociedad y la sostenibilidad a largo plazo.

      h2 Construcción de un sistema de medición integral

      p(data-aos="fade-left").mb-4 No se trata de diseñar decenas de indicadores, sino de seleccionar aquellos que sean pertinentes, comprensibles y útiles. Para ello, se recomienda aplicar las siguientes características:

      .bg-full-width.bg-color-14
        .px-4.px-md-5.pb-md-3
          .row.justify-content-center.mb-5
      
            .col-lg-4
              figure
                img(src='@/assets/curso/tema2/21.png', alt='')

            .col-lg-8
      
              SlyderF(columnas="col-12 col-lg-6")
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema2/22.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Relevancia
                  p.text-center Estar alineados con los objetivos estratégicos de la organización.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema2/23.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Claridad
                  p.text-center Ser comprensibles para todos los actores involucrados.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema2/24.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Verificabilidad
                  p.text-center Basarse en datos reales, medibles y comparables.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema2/25.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Periodicidad
                  p.text-center Permitir seguimiento en intervalos definidos (mensual, trimestral, anual).
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema2/26.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Adaptabilidad
                  p.text-center Puede ser ajustado si cambian las condiciones o prioridades.


          .row.mb-5
            .col-lg-8
              p(data-aos="fade-left").mb-4 El sistema de indicadores debe estar integrado al sistema de gestión de la empresa y ser revisado de forma continua. Además, sus resultados deben ser divulgados en los informes de sostenibilidad, boletines internos o espacios de diálogo con los grupos de interés.
          
              .bg-color-6.p-4(data-aos="fade-left").mb-4
                p.mb-0 La medición de resultados no es un ejercicio burocrático, sino una herramienta clave para consolidar la responsabilidad institucional. A través de indicadores sociales, ambientales y económicos, las organizaciones pueden verificar si sus acciones están produciendo los impactos deseados, corregir desviaciones y comunicar con transparencia sus logros. Más aún, permite demostrar que gestionar con ética no solo es posible, sino rentable, legítimo y socialmente necesario.

              p(data-aos="fade-left").mb-4 La empresa que mide sus compromisos no solo cumple con sus objetivos, sino que aprende, mejora y se proyecta como un actor transformador de su entorno.

            .col-lg-4
              figure
                img(src="@/assets/curso/tema2/27.png", data-aos="zoom-in")


      .bg-full-width.bg-color-1.mb-lg-0
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/28.png', alt='')
      
            .col-lg-8
              h2.mb-4(data-aos="flip-up") Estrategias de implementación: procesos, comunicación interna y participación
              p.mb-4(data-aos="fade-right") Se invita a leer el documento Estrategias de implementación: procesos, comunicación interna y participación, donde se abordan las estrategias para implementar la RSE en una organización.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Estrategias de implementación: procesos, comunicación interna y participación
      
          

  
      .bg-full-width.border-top.actividad.bg-color-actividad
          .p-4.p-md-5
            #Actividad                
              <Actividad :cuestionario="cuestionario"/>

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/57796" target="_blank" rel="noopener noreferrer") Túñez López, M. & Costa Sánchez, C. (2015). Comunicación corporativa: claves y escenarios. Editorial UOC. 
  
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=F0r9hl9kYhU" target="_blank" rel="noopener noreferrer") videoconferencias. (2013). UTPL Normas de la RSE [(RESPONSABILIDAD SOCIAL EMPRESARIAL)] [video]. YouTube.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=kxamR3VKvtY" target="_blank" rel="noopener noreferrer") pascualbravovirtual. (2019). Responsabilidad social empresarial - Introducción al MAA [video]. YouTube. 

            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de las siguientes afirmaciones describe mejor el propósito de alinear la gestión empresarial con los Objetivos de Desarrollo Sostenible (ODS)?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Promover campañas publicitarias para fortalecer la marca.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Facilitar la internacionalización de los productos.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Integrar la sostenibilidad en los procesos de decisión empresarial.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto:
                  'Reemplazar la legislación nacional por estándares internacionales.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Qué aspecto de la responsabilidad social contribuye directamente al fortalecimiento de la reputación organizacional?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Incremento de las utilidades trimestrales.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Optimización de costos logísticos.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Coherencia entre los valores institucionales y las acciones reales.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Expansión de mercados hacia zonas rurales.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál es uno de los beneficios estratégicos de implementar políticas de sostenibilidad empresarial?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Eliminación de controles externos.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Exención automática de tributos ambientales.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Anticipación a riesgos sociales, regulatorios y reputacionales.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Reemplazo de procesos internos por subcontratación.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué indicador pertenece a la dimensión ambiental de la sostenibilidad empresarial?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Nivel de satisfacción del cliente.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Consumo energético por unidad producida.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Índice de rotación del personal.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Cantidad de ventas en el trimestre.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué característica define una ventaja competitiva basada en la responsabilidad social?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Se basa exclusivamente en el precio del producto.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Requiere reducción de personal para su ejecución.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Es fácil de imitar por otras organizaciones.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Se construye sobre valores éticos integrados en la cultura organizacional.',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
