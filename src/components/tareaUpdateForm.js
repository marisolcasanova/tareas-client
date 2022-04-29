import { Form, Button } from 'react-bootstrap'
import { useState } from 'react';


const TareasUpdateForm = ({onClickFnUpdate, oldTarea}) => {
  const [id, setID] = useState(oldTarea.id);
  const [nombre, setNombre] = useState(oldTarea.nombre);
  const [materia, setMateria] = useState(oldTarea.materia);
  const [puntos, setPuntos] = useState(oldTarea.puntos);
  const [fechaEntrega, setFechaEntrega] = useState(oldTarea.fechaEntrega);

  const onEnviar = (event) =>{
    event.preventDefault();
    if (id === "" || nombre === "" || materia === "" || puntos === "" || fechaEntrega === "") alert("No puede dejar ningun campo vacío");
    else {
      let data = {
        id: id,
        _id: oldTarea._id,
        nombre: nombre,
        materia: materia,
        puntos: puntos,
        fechaEntrega: fechaEntrega };
      onClickFnUpdate(data);
      }
    }
  

    return (
        <Form onSubmit={onEnviar}>
  <Form.Group className="mb-3" controlId="name">
    <Form.Label>ID</Form.Label>
    <Form.Control type="text" placeholder="ID" value={id} onChange={(txt) => setID(txt.target.value)}/>
    <Form.Label>Nombre</Form.Label>
    <Form.Control type="text" placeholder="Nombre" value={nombre} onChange={(txt) => setNombre(txt.target.value)}/>
    <Form.Label>Materia</Form.Label>
    <Form.Control type="text" placeholder="Materia" value={materia} onChange={(txt) => setMateria(txt.target.value)} />
    <Form.Label>Puntos</Form.Label>
    <Form.Control type="text" placeholder="Puntos" value={puntos} onChange={(txt) => setPuntos(txt.target.value)}/>
    <Form.Label>Fecha Entrega</Form.Label>
    <Form.Control type="date" placeholder="Fecha" value={fechaEntrega} onChange={(txt) => setFechaEntrega(txt.target.value)}/>
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

    


);}

export default TareasUpdateForm