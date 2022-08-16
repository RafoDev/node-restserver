import {response, request} from 'express';
const usuariosGet = (req = request, res = response) => {
  const {q, nombre, apiKey} = req.query;
  res.json({
    msg: 'get API - controller',
    q, nombre, apiKey
  });
};

const usuariosPost = (req, res) => {
  const {id, nombre, edad} = req.body;
  res.json({
    msg: 'post API',
    nombre,
    edad
  });
};

const usuariosPatch = (req, res) => {
  res.json({
    msg: 'patch API'
  });
};
const usuariosDelete = (req, res) => {
  res.json({
    msg: 'delete API'
  });
};
const usuariosPut = (req, res) => {
  const id = req.params.id;
  res.json({
    msg: 'put API',
    id
  })
};


export{
  usuariosGet,
  usuariosPost,
  usuariosPatch,
  usuariosDelete,
  usuariosPut  
}