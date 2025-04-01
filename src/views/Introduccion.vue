<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.bg-intro1           
      .col-lg-12
        .p-5
          .row.justify-content-center.align-items-center.p-5.bg-intro2
            .col-lg-7
              p En el componente formativo #[b variables ambientales en agroecosistema], se estudian los diferentes tipos de agroecosistemas y los impactos que pueden derivarse de las problemáticas ambientales globales. Se analizan factores como el cambio climático, la deforestación y la degradación del suelo, los cuales influyen en la estabilidad y productividad de estos sistemas. Además, se identifican las variables ambientales según su clasificación en medios abióticos, bióticos y socioeconómicos, evaluando su papel en el desarrollo y sostenibilidad del agroecosistema.
            .col-lg-5.pe-lg-0.d-none.d-lg-block(data-aos="fade-left")
              figure
                img(src='@/assets/curso/intro/img1.png', alt='', style="width: 390px").m-auto


          .row.justify-content-center.mb-5.mt-4
            .col-lg-10(data-aos="fade-down")
              .row.d-flex.align-items-stretch.bg-intro4
                .col-lg-5.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                  figure.m-0.p-0.w-100.h-100.d-flex
                    img(src='@/assets/curso/intro/img2.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-left:-10px")
                
                .col-lg-7.d-flex
                  .p-4.w-100.d-flex.align-items-center
                    p.mb-0 La determinación de estas variables es fundamental para la toma de decisiones en la gestión agropecuaria. Al comprender su interacción con los sistemas productivos, es posible optimizar el uso de recursos, minimizar impactos negativos y fomentar prácticas sostenibles. Para ello, se emplea una matriz de priorización basada en criterios como magnitud, gravedad, capacidad de gestión y beneficio, lo que permite establecer qué variables requieren mayor atención según el tipo de agroecosistema analizado.

          

          .row.mt-4.justify-content-center.align-items-center
            .col-lg-1.col-md-auto.d-none.d-lg-block
              figure
                img(src="@/assets/curso/intro/img3.png", alt="", style="width: 90px").m-auto
            .col-lg-8
              p.mb-0 Este enfoque facilita la implementación de estrategias de manejo ambiental adaptadas a cada contexto, fortaleciendo la resiliencia de los agroecosistemas. La identificación y gestión adecuada de las variables ambientales no solo promueve la sostenibilidad de la producción agropecuaria, sino que también contribuye a la conservación de la biodiversidad y la mejora de la calidad del suelo y el agua, garantizando sistemas agrícolas más equilibrados y productivos a largo plazo.
            .col-lg-1.col-md-auto.d-none.d-lg-block
              figure
                img(src="@/assets/curso/intro/img4.png", alt="", style="width: 90px").m-auto

        

        
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
