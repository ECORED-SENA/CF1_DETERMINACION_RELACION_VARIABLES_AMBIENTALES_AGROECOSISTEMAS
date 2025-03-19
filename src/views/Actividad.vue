<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Reconocimiento de aspectos de agroecosistemas y variables ambientales',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Fortalecer los conocimientos relacionados con agroecosistemas y variables ambientales.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es uno de los principales problemas generados por la "Revolución Verde" en la agricultura?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Disminución del rendimiento de cultivos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducción del uso de fertilizantes. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumento de la biodiversidad. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Contaminación de ecosistemas. ',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué característica define a un agroecosistema diversificado? ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso exclusivo de monocultivos. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Integración de diferentes especies vegetales. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminación total del uso de fertilizantes. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Dependencia de insumos químicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es el propósito de medir variables ambientales en un agroecosistema? ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Controlar el uso de fertilizantes. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aumentar la producción sin importar los impactos. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Conocer los efectos de las actividades productivas en el medio ambiente. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Certificar los productos agrícolas. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué dimensión territorial tiene en cuenta los ecosistemas y recursos naturales? ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Económica. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sociocultural. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Espacial. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ambiental. ',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es una característica de la agroecología según lo descrito en el componente formativo de variables ambientales en agroecosistemas? ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Es una disciplina científica, un conjunto de prácticas y un movimiento social. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'No tiene en cuenta el conocimiento tradicional. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'No considera la sostenibilidad ambiental. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se basa en el uso intensivo de insumos químicos. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué tipos de variables ambientales inciden de manera directa en los agroecosistemas? ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Económicas y políticas. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Agroclimáticas, del agua y del suelo. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Industriales y comerciales. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sociales y culturales. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál de las siguientes opciones describe mejor una variable ambiental? ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un parámetro utilizado únicamente en estudios climáticos. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un conjunto de normas para regular la producción agrícola. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una representación cualitativa o cuantitativa de un aspecto ambiental que permite medir su variación. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Un tipo de fertilizante orgánico utilizado en agroecosistemas. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de las siguientes no es una variable ambiental que se relacione con los componentes agua, suelo o biodiversidad?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Hidrología. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Calidad del agua. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Calidad del agua. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Calidad del agua. ',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es una de las principales diferencias entre la agricultura ecológica y la agroecología?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La agroecología no está regulada y tiene un enfoque más holístico. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La agricultura ecológica no requiere certificación. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La agroecología no busca la sostenibilidad. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La agroecología no busca la sostenibilidad. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué aspecto se tiene en cuenta al clasificar la biodiversidad en un agroecosistema? ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cantidad de productos vendidos. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Uso de fertilizantes. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Estructura, función y composición de las especies. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Presencia de maquinaria agrícola. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'La agroecología es un sistema de producción regulado por certificaciones oficiales y organismos de control internacional. ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'El cambio climático y la deforestación son problemáticas ambientales que afectan directamente la estabilidad de los agroecosistemas. ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'En los agroecosistemas orgánicos se permite el uso de fertilizantes y plaguicidas sintéticos para mejorar la producción. ',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Los sellos de alimentos ecológicos en Colombia son de observancia voluntaria y no obligatoria para el comercio nacional.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Las variables ambientales de un agroecosistema pueden clasificarse en abióticas, bióticas y socioeconómicas.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
