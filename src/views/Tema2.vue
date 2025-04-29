<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Tipos de agroecosistemas 
    
    .row.justify-content-center.align-items-center
      .col-lg-5
        figure
          img(src='@/assets/curso/tema2/img1.png', alt='', style="width: 480px").m-auto
      .col-lg-7
        .row.p-5.bg-t2-1.mt-4.mt-lg-0
          p Un agroecosistema involucra actividades agrícolas que gestionan y modifican los medios biótico y abiótico (suelo, agua, aire, flora, fauna) con el fin de mejorar la producción de cultivos y/o de actividades pecuarias. Según (Hernández y Ávila, 2017), entre los principales de agroecosistemas en relación con la producción agrícola se encuentran:


    .row.justify-content-center.bg-t1-6.mt-4
      .col-12
        .p-5
          .tarjeta.p-4(style="background-color: #FFFFFF")
            SlyderA(tipo="b")
              .row.align-items-center.p-4.justify-content-center
                .col-lg-6.mb-4.mb-md-0
                  h4 Agroecosistemas de monocultivo
                  p Se caracteriza por el desarrollo de cultivos en grandes áreas para la producción de una sola especie de planta. En estos agroecosistemas se puede tener cierta facilidad para su manejo, pero a la vez puede también acrecentar el ataque de plagas y enfermedades.

                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema2/img2.png', alt='Texto que describa la imagen')

              .row.align-items-center.p-4.justify-content-center
                .col-lg-6.mb-4.mb-md-0
                  h4 Agroecosistemas diversificados
                  p Permiten cultivar diferentes plantas simultáneamente, en estos casos puede darse la sinergia entre cultivos agrícolas y sistemas forestales, pastizales o especies de cobertura, esto contribuye con la biodiversidad y disminuye la vulnerabilidad a plagas y enfermedades.

                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema2/img3.png', alt='Texto que describa la imagen')

              .row.align-items-center.p-4.justify-content-center
                .col-lg-6.mb-4.mb-md-0
                  h4 Agroecosistemas de agricultura de conservación
                  p Se define por prácticas que permiten conservar la calidad del suelo; en este tipo de agroecosistemas se da la rotación de cultivos y la siembra directa. De esta forma, puede minimizarse impactos como la erosión y además permite mantener la productividad del suelo.

                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema2/img4.png', alt='Texto que describa la imagen')

              .row.align-items-center.p-4.justify-content-center
                .col-lg-6.mb-4.mb-md-0
                  h4 Agroecosistemas orgánicos
                  p Se identifica por evitar el uso de agroinsumos químicos, en la producción agrícola se propende por el uso de compostaje o mejoradores de suelos de tipo orgánico, también se implementa la rotación de cultivos para mantener la calidad ambiental y productiva del ecosistema agrícola.

                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema2/img5.png', alt='Texto que describa la imagen')

              .row.align-items-center.p-4.justify-content-center
                .col-lg-6.mb-4.mb-md-0
                  h4 Agroecosistemas agroforestales
                  p Se componen por la integración entre especies forestales árboles y cultivos agrícolas en una misma área, lo que permite generar un mayor equilibrio entre el cultivo la flora y la fauna, además, contribuye con la gestión adecuada del agua y la conservación del suelo.

                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema2/img6.png', alt='Texto que describa la imagen')



</template>

<script>
export default {
  name: 'Tema2',
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
