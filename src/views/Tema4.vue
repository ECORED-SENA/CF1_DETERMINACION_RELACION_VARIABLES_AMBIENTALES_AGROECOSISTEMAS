<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Variables ambientales y biodiversidad 
    
    .row.justify-content-center.mb-5
      .col-lg-12(data-aos="fade-down")
        .row.d-flex.align-items-stretch.bg-t4-1
          .col-lg-4.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block.order-1
            figure.m-0.p-0.w-100.h-100.d-flex
              img(src='@/assets/curso/tema4/img1.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-left:5px")
          
          .col-lg-8.d-flex
            .p-4.w-100.d-flex.align-items-center
              p.mb-0 Las variables ambientales y la biodiversidad desempeñan un papel fundamental en el equilibrio de los agroecosistemas. Comprender cómo interactúan y afectan el entorno permite tomar decisiones informadas para una gestión sostenible. En este video, se explorarán las principales variables ambientales y meteorológicas, así como su impacto en la biodiversidad y en los procesos productivos.

    .row.mt-4
      figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/JqhjzLaZIjM?si=_CJy59WJ5lrtDIBq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    separador
    #t_4_1.titulo-segundo.color-primario
      h2 4.1 Clasificación de las variables ambientales

    .row.justify-content-center.mb-5
      .col-lg-12(data-aos="fade-down")
        .row.d-flex.align-items-stretch.bg-t3-6
          .col-lg-5.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
            figure.m-0.p-0.w-100.h-100.d-flex
              img(src='@/assets/curso/tema4/img5.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-left:-10px")
          
          .col-lg-7.d-flex
            .p-4.w-100.d-flex.align-items-center
              p.mb-0 Para mayor comprensión, en el siguiente esquema se encuentra la clasificación de las variables agroclimáticas y las variables ambientales que se aplican a los componentes aguas y suelos, los cuales tienen gran influencia en los agroecosistemas:


    .row.mb-2.ms-0.mt-4
      .col-auto.bg-icon(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Variables agroclimáticas

      p.mt-4 Las variables agroclimáticas son esenciales para comprender las condiciones ambientales que influyen en el desarrollo de los agroecosistemas. Su análisis debe basarse en fuentes de información confiables, como estaciones meteorológicas cercanas, microestaciones dentro del agroecosistema, equipos portátiles de medición #[i in situ] y estudios recientes de la zona. Algunas de las variables agroclimáticas más relevantes incluyen:


    .row.mt-4.align-items-center.justify-content-center
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.bg-t1-3.p-2.align-items-center.target-with
          .row.justify-content-center.align-items-center
            .col-4
              figure
                img(src='@/assets/curso/tema4/img6.png', style="width: 68px").m-auto
            .col-8.mt-3
              p #[b Temperatura (°C).]

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.bg-t1-3.p-2.align-items-center.target-with
          .row.justify-content-center.align-items-center
            .col-4
              figure
                img(src='@/assets/curso/tema4/img7.png', style="width: 68px").m-auto
            .col-8.mt-3
              p #[b Humedad Relativa (% HR).]

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.bg-t1-3.p-2.align-items-center.target-with
          .row.justify-content-center.align-items-center
            .col-4
              figure
                img(src='@/assets/curso/tema4/img8.png', style="width: 68px").m-auto
            .col-8.mt-3
              p #[b Altitud: m.s.n.m.]


              
    .row.mt-4.align-items-center.justify-content-center
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.bg-t1-3.p-2.align-items-center.target-with
          .row.justify-content-center.align-items-center
            .col-4
              figure
                img(src='@/assets/curso/tema4/img9.png', style="width: 68px").m-auto
            .col-8.mt-3
              p #[b Precipitación (mm).]

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.bg-t1-3.p-2.align-items-center.target-with
          .row.justify-content-center.align-items-center
            .col-4
              figure
                img(src='@/assets/curso/tema4/img10.png', style="width: 68px").m-auto
            .col-8.mt-3

              p #[b Velocidad del viento (m/s).]

    .row.mt-4.align-items-center
      .col-lg-3 
        figure
          img(src='@/assets/curso/tema4/img13.png', alt='', style="width: 295px").m-auto
      .col-lg-9 
        .row.justify-content-center.align-items-center.mt-4.mt-lg-0
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-stretch.bg-t4-2
              .col-lg-4.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block.order-1
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema4/img2.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-left:5px")
              
              .col-lg-8.d-flex
                .p-4.w-100.d-flex.align-items-center
                  p.mb-0 Además de estas variables, es fundamental analizar la distribución de la época de lluvias y los fenómenos asociados, como deslizamientos de tierra por exceso de precipitaciones, granizadas recientes o la contaminación de fuentes hídricas debido a la erosión del suelo. Estos eventos pueden generar impactos significativos en los agroecosistemas y en la disponibilidad de recursos naturales.

    .row.mb-2.ms-0.mt-4
      .col-auto.bg-icon(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Variables ambientales del agua y el suelo

      p.mt-4 La calidad del agua se determina al comparar sus características físicas, químicas y microbiológicas con los estándares establecidos en la normativa vigente (IDEAM, 2018). Para un monitoreo adecuado, se recomienda evaluar los siguientes parámetros de calidad del agua, según el Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM, 2018):

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.justify-content-center
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 1
            span  Variables ambientales relacionadas con agua y suelo
          .col-12
            figure
            img(src='@/assets/curso/tema4/img15.svg', alt='Texto alternativo: La imagen presenta la clasificación de las variables ambientales relacionadas específicamente con los componentes de agua y suelo.').m-auto

    separador
    #t_4_2.titulo-segundo.color-primario
      h2 4.2 Biodiversidad

    .row.justify-content-center.mb-5
      .col-lg-12(data-aos="fade-down")
        .row.d-flex.align-items-stretch.bg-t4-2
          .col-lg-4.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block.order-1
            figure.m-0.p-0.w-100.h-100.d-flex
              img(src='@/assets/curso/tema4/img3.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-left:5px")
          
          .col-lg-8.d-flex
            .p-4.w-100.d-flex.align-items-center
              p.mb-0 La biodiversidad comprende todas las formas de vida presentes en un agroecosistema, incluyendo animales, plantas y microorganismos en sus diversas variedades. Su estudio permite comprender la interacción entre los seres vivos y el entorno, así como evaluar el impacto de las actividades productivas en la estabilidad del ecosistema.

    .row.mb-2.ms-0.mt-4
      .col-auto.bg-icon(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Beneficios

      p.mt-4 En un agroecosistema con manejo ecológico o agroecológico, incrementar la biodiversidad es una meta clave debido a los múltiples beneficios que aporta (FAO, 2018). Entre ellos se destacan:

    .row.justify-content-center
      .col-lg-10(data-aos="fade-down")
        .row.d-flex.align-items-stretch.bg-t4-3
          .col-lg-5.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
            figure.m-0.p-0.w-100.h-100.d-flex
              img(src='@/assets/curso/tema4/img14.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-left:-10px")
          
          .col-lg-7.d-flex
            .w-100.d-flex.align-items-center
              .row.justify-content-center.p-5
                .row.p-2.justify-content-center.bg-t4-4
                  .col-1.p-2
                    figure
                      img(src="@/assets/curso/tema1/hoja.png", alt="", style="width: 13px").m-auto
                  .col-11
                    p.mb-0 #[b Mejora en la producción.]

                .row.p-2.justify-content-center.bg-t4-4.mt-2
                  .col-1.p-2
                    figure
                      img(src="@/assets/curso/tema1/hoja.png", alt="", style="width: 13px").m-auto
                  .col-11
                    p.mb-0 #[b Prestación de servicios ecosistémicos, como la polinización.]

                .row.p-2.justify-content-center.bg-t4-4.mt-2
                  .col-1.p-2
                    figure
                      img(src="@/assets/curso/tema1/hoja.png", alt="", style="width: 13px").m-auto
                  .col-11
                    p.mb-0 #[b Mayor resiliencia ante eventos climáticos adversos.]

                .row.p-2.justify-content-center.bg-t4-4.mt-2
                  .col-1.p-2
                    figure
                      img(src="@/assets/curso/tema1/hoja.png", alt="", style="width: 13px").m-auto
                  .col-11
                    p.mb-0 #[b Salud del suelo, las plantas y los animales.]

                .row.p-2.justify-content-center.bg-t4-4.mt-2
                  .col-1.p-2
                    figure
                      img(src="@/assets/curso/tema1/hoja.png", alt="", style="width: 13px").m-auto
                  .col-11
                    p.mb-0 #[b Aumento de interacciones y sinergias dentro del ecosistema.]

                .row.p-2.justify-content-center.bg-t4-4.mt-2
                  .col-1.p-2
                    figure
                      img(src="@/assets/curso/tema1/hoja.png", alt="", style="width: 13px").m-auto
                  .col-11
                    p.mb-0 #[b Diversificación de productos agroecosistémicos.]


    .row.bg-t4-5
      .col-12
        .p-5
          .row.mb-2.ms-0.mt-4
            .col-auto.bg-icon(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
                .col
                  h3.mb-0 Clasificación de la biodiversidad
            
            p.mt-4 Para analizar la biodiversidad en un agroecosistema, se pueden identificar tres aspectos clave:

          .bg_img_01.mt-4
            .row.justify-content-center.mb-5
              .col-lg-4.mb-4.mb-lg-0
                .crd.crd--grayGrad(data-aos="flip-left")
                  .bottomCircle.mb-5
                    figure
                      img(src="@/assets/curso/tema4/img11.png", style="width:91px").m-auto
                  h4.text-center Estructura
                  p.text-center.mb-0 Distribución espacial en el plano horizontal (asociaciones) y vertical (capas o estratos).
              .col-lg-4.mb-4.mb-lg-0
                .crd.crd--grayGrad(data-aos="flip-left")
                  .bottomCircle.mb-5
                    figure
                      img(src="@/assets/curso/tema4/img12.png", style="width:91px").m-auto
                  h4.text-center Función
                  p.text-center.mb-0 Rol que desempeña cada organismo, como regulación, sinergia, descomposición, reciclaje de nutrientes y fertilización.
              
              .col-lg-4
                figure
                  img(src='@/assets/curso/tema4/img4.png', alt='', style="width: 396px").m-auto


          .tarjeta.bg-t4-6.p-4.mt-4
            .row.justify-content-around.align-items-center
              .col-auto
                img(src="@/assets/curso/tema4/img16.svg", style="width: 72px")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4.mb-1(style="color: #F3D82A !important") Prácticas sostenibles en agroecosistemas 
                    p.text-small.mb-0.text-white Para profundizar en las prácticas de manejo en agroecosistemas, los impactos ambientales y los tipos de suelos, se invita a consultar el siguiente documento. 
          
                  .col-sm-auto
                    a.boton.color-acento-botones(href="downloads/Anexos/Anexo1_Practicas_Sostenibles_Agroecosistemas.pdf" target="_blank")
                      span(style="font-weight: normal;" class="text-black") Descargar
                      i.fas.fa-file-download.text-black




                  



</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
