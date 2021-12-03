import styled from 'styled-components';

const Container = styled.div`
  padding: .5em 1em;

  h3 {
    color: blue;
  }
  h4, h3, p {
    margin: .3em 0;
  }
  ul {
    margin: 1em .8em 1em 0;
  }
  li {
    font-size: .92em;
  }
`

const AseContact = ({ asesor }) => {
  console.log(asesor)
  return (
    <Container>
      <h3>Instrucciones para solicitar una Asesoria</h3>
      <p>Si deseas recibir una asesoria para apoyar el desarrollo de tu proyecto debes:</p>
      <ul>
        <li>Preparar un correo con el Asunto: <strong>TPI-SolicitudAsesoria-GXX</strong> donde XX es el numero de tu grupo</li>
        <li>En el cuerpo del correo escribe tu <strong>Horario</strong> (2-4pm o 4-6pm), el <strong>Numero y Nombre de tu grupo</strong> y <strong>el Nombre del Asesor</strong> con el que deseas solicitar una reunion.</li>
        <li>Adicionalmente puedes definir un <strong>Dia y Hora</strong> en la que tu grupo podria estar disponible. (la fecha y hora final dependera de la disponibilidad del asesor)</li>
        <li>Enviar el mensaje al <strong>Monitor Correspondiente</strong> que aparece abajo, ellos se comunicaran contigo y organizaran una fecha para reunirse con el asesor.</li>
      </ul>
      <h4>Monitor :</h4>
      <p>{asesor.nombreMon} - <strong>{asesor.correoMon}</strong></p>
    </Container>
  )
}
export default AseContact
