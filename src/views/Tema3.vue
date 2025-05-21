<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Dimensiones en los territorios

    .row.justify-content-center.bg-t3-1
      .col-12
        .p-5
          .row.justify-content-center
            .col-lg-4.pe-lg-0.d-none.d-lg-block.order-1(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema3/img1.png', style="margin-left:-18px")
            .col-lg-6.col-md-12(data-aos="fade-left")
              .row.align-items-center.h-100.bg-t3-2
                .col
                  .p-4
                    p.mb-0.mt-2 El estudio del territorio, junto con sus dimensiones, elementos y relaciones, permite identificar diversas variables que influyen en el desarrollo de un agroecosistema. Este análisis proporciona insumos clave para el diagnóstico y la planificación del sistema de producción, así como para la gestión integral del territorio. Dentro de este proceso, es posible identificar varias dimensiones fundamentales:

          .carousel-bg
            .row.justify-content-center.mt-4.align-items-center
              .col-lg-4(data-aos="fade-right")
                figure
                  img(src="@/assets/curso/tema3/img2.png", style="width:295px").m-auto
              .col-lg-8(data-aos="fade-left")
                SlyderF.custom.mb-5(columnas="col-lg-6 col-xl-6")
                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema3/img3.png", style="width:91px").m-auto
                    h4.text-center.bg-t3-3 Dimensión  ambiental
                    p.text-center.mb-0 Considera los recursos naturales, los ecosistemas y las fuentes de energía.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema3/img4.png", style="width:91px").m-auto
                    h4.text-center.bg-t3-3 Dimensión  económica
                    p.text-center.mb-0 Se enfoca en las formas de producción, los usos del suelo y las actividades económicas.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema3/img5.png", style="width:91px").m-auto
                    h4.text-center.bg-t3-3 Dimensión  sociocultural
                    p.text-center.mb-0 Incluye el recurso humano, la cultura y la identidad.
                  
                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema3/img6.png", style="width:91px").m-auto
                    h4.text-center.bg-t3-3 Dimensión  espacial
                    p.text-center.mb-0 Analiza las características del espacio rural, urbano y regional, así como la distribución del capital social y las infraestructuras.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema3/img7.png", style="width:91px").m-auto
                    h4.text-center.bg-t3-3 Dimensión  institucional
                    p.text-center.mb-0 Evalúa la capacidad de planificación y gestión de las entidades públicas, los proyectos, el empoderamiento y la gobernanza.

    .row.bg-t3-4
      .col-12
        .p-5
          .row.mb-2.ms-0
            .col-auto.bg-icon(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
                .col
                  h3.mb-0 Suelo

          p.mt-4(data-aos="fade-right") Para comprender el suelo, es fundamental considerar ciertas premisas establecidas por Sánchez y Praguer (2012):

          .row.mt-4.justify-content-center
            .col-lg-4.pe-lg-0.d-none.d-lg-block(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema3/img8.png')
            .col-lg-6.col-md-12(data-aos="fade-left")
              .row.align-items-center.h-100.bg-t3-2.p-4.justify-content-center

                .row.justify-content-center.bg-t3-5
                  .col-1.p-2
                    figure
                      img(src="@/assets/curso/tema3/hoja.svg", alt="", style="width: 13px").m-auto
                  .col-11
                    p.mb-0.text-white Es un sistema vivo, organizado y con una estructura propia.

                .row.p-2.justify-content-center.bg-t3-5.mt-2
                  .col-1.p-2
                    figure
                      img(src="@/assets/curso/tema3/hoja.svg", alt="", style="width: 13px").m-auto
                  .col-11
                    p.mb-0.text-white En su interior ocurren procesos metabólicos y de ciclaje de nutrientes.

                .row.p-2.justify-content-center.bg-t3-5.mt-2
                  .col-1.p-2
                    figure
                      img(src="@/assets/curso/tema3/hoja.svg", alt="", style="width: 13px").m-auto
                  .col-11
                    p.mb-0.text-white Posee resiliencia, lo que le permite adaptarse a condiciones extremas.

                .row.p-2.justify-content-center.bg-t3-5.mt-2
                  .col-1.p-2
                    figure
                      img(src="@/assets/curso/tema3/hoja.svg", alt="", style="width: 13px").m-auto
                  .col-11
                    p.mb-0.text-white Su fertilidad y salud son esenciales para el desarrollo de los cultivos.

          .row.justify-content-center.align-items-center.mt-4
            .col-lg-1.col-md-auto.d-none.d-lg-block(data-aos="fade-right")
              figure
                img(src="@/assets/curso/tema3/img9.png", alt="", style="width: 90px").m-auto
            .col-lg-11(data-aos="fade-left")
              p.mb-0 El suelo es uno de los pilares fundamentales de la agricultura ecológica y agroecológica, sirviendo de base para el diseño de un agroecosistema sostenible. Aunque puede percibirse como un recurso estático e inerte, en realidad alberga una gran riqueza química y biológica que no es visible a simple vista.

          .row.mt-4.justify-content-center
            .col-lg-5.pe-lg-0.d-none.d-lg-block(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema3/img10.png', style="margin-left:10px")
            .col-lg-7.col-md-12(data-aos="fade-left")
              .row.align-items-center.h-100.bg-t3-6.p-4.justify-content-center
                p.mb-0 Otro aspecto fundamental para la salud del suelo es la #[b materia orgánica], resultado de la descomposición biológica de residuos orgánicos en el mismo sitio. Su presencia influye directamente en las propiedades físicas y químicas del suelo, como la estructura, la porosidad, la infiltración, la retención de humedad, la biodiversidad y la fertilidad. Además, su impacto se extiende a la calidad nutricional de los alimentos producidos, fortaleciendo la sostenibilidad de los agroecosistemas.

</template>

<script>
export default {
  name: 'Tema3',
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
