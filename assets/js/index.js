const propiedadesJSON = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      m: 170
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      m: 130
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      m: 80
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      m: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      m: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      rooms: 5,
      m: 500
    }
  ];

  //Se recorre arreglo de objetos para inyectar codigo html.
  
window.onload = function(){
    cargarPropiedades();
};
function cargarPropiedades(){
  let html = '';
  let contenedor_propiedades = document.querySelector('.propiedades');

//Interpolación y el innerHTML para crear templates y agregar los templates de las propiedades durante el recorrido del arreglo.
  for(let propiedad of propiedadesJSON){
    html +=`<div class="propiedad">
            <div class="img" style="background-image: url('${propiedad.src}')"></div>
            <section>
           <h5>${propiedad.name}</h5>
            <div class="d-flex justify-content-between">
            <p>Cuartos:${propiedad.rooms}</p>
            <p>Metros: ${propiedad.m}</p>
               </div>
            <p class="my-3">${propiedad.description}</p>
           <button class="btn btn-info">Ver más</button>
            </section>
              </div>`
  }
  document.querySelector('#total_propiedades').innerHTML= propiedadesJSON.length;
  contenedor_propiedades.innerHTML = html;
}


  //Validacion de formularios busqueda
  function validarCampos(){
    let num_cuartos = document.querySelector('#num_cuartos');
    let metros_desde = document.querySelector('#metros_desde');
    let metros_hasta = document.querySelector('#metros_hasta');
  
  //Condicionales para evaluar si falta algún campo por llenar en el buscador.
  if(num_cuartos.value == ''){
      alert('Debes ingresar el numero de cuartos');
      num_cuartos.focus();
      return false;
  } else if(metros_desde.value == ''){
       alert('Debes ingresar el numero de metros desde');
      metros_desde.focus();
      return false;
  }else if(metros_hasta.value == ''){
    alert('Debes ingresar el numero de metros hasta');
   metros_hasta.focus();
   return false;
  } else{
    filtrarPropiedades(num_cuartos.value, metros_desde.value, metros_hasta.value);
    return false;
  }
  }

  //Evento click para validar campos, en el boton Buscador.
  document.querySelector('#buscar').addEventListener('click',function(){
    validarCampos();
  });

//Filtrado del arreglo de objetos
  function filtrarPropiedades(num_cuartos, metros_desde, metros_hasta){
    let html = '';
    let contenedor_propiedades = document.querySelector('.propiedades');
    let resultadoPropiedades=[];
  
    for(let propiedad of propiedadesJSON ){
      if((propiedad.rooms==num_cuartos)&&(propiedad.m>=metros_desde)&&(propiedad.m<=metros_hasta)){ 
        resultadoPropiedades.push(propiedad);
      }
      console.log('resultadoPropiedades', resultadoPropiedades)
    }

// For para agregar los templates, que cumplan con los requerimientos, una vez realizado el filtrado. 
    for(let propiedad of resultadoPropiedades){
      html +=`<div class="propiedad">
              <div class="img" style="background-image: url('${propiedad.src}')"></div>
              <section>
            <h5>${propiedad.name}</h5>
              <div class="d-flex justify-content-between">
              <p>Cuartos:${propiedad.rooms}</p>
              <p>Metros: ${propiedad.m}</p>
                </div>
              <p class="my-3">${propiedad.description}</p>
            <button class="btn btn-info">Ver más</button>
              </section>
                </div>`
    }

     document.querySelector('#total_propiedades').innerHTML= resultadoPropiedades.length;
     contenedor_propiedades.innerHTML=html;
}
