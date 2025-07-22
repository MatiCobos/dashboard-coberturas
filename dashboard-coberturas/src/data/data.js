// src/data/data.js
export const coberturasIniciales = [
  {
    id: 1,
    nombre: "OSDE",
    estado: "En proceso",
    notas: "",
    checklist: [
      { paso: "Cierre Markey", completo: false },
      { paso: "Envío de soportes", completo: false }
    ],
    detalles: {
    moto: "No",
    portalFinanciadores: "Sí",
    mailAviso: "No",
    portalSubida: `
    Osde IAF:  
    Página: https://intercambio.osde.com.ar/webclient/Login.xhtml
    Usuario: 6001005435.
    Clave: Iaf2025#.
    
    Osde Saavedra:
    Página: https://intercambio.osde.com.ar/webclient/Login.xhtml
    Usuario: 6001129175
    Clave: Iaf2025#
    `,
    soporteTXT: "Sí",
    soporteExcel: `
    Mandar resumen de facturas
    `,
    soporteRefacturacion: "Si"
  }
  },
  {
    id: 2,
    nombre: "Galeno",
    estado: "Incompleto",
    notas: "",
    checklist: [
      { paso: "Cierre Markey", completo: false },
      { paso: "Envío de soportes", completo: false }
    ],
      detalles: {
      moto: "No",
      portalFinanciadores: "Sí",
      mailAviso: "No",
      portalSubida: `
      Página: https://www.galeno.com.ar/login
      Usuario: 13888
      Clave: 1DTTT
      `,
      soporteTXT: "Sí",
      soporteExcel: "Sí",
      soporteRefacturacion: "No"
  }
  },
  {
    id: 3,
    nombre: "Swiss Medical",
    estado: "Completo",
    notas: "",
    checklist: [
      { paso: "Cierre Markey", completo: false },
      { paso: "Envío de soportes", completo: false }
    ],
      detalles: {
      moto: "No",
      portalFinanciadores: "Sí",
      mailAviso: "No",
      portalSubida: "No",
      soporteTXT: `
        Mandar mail con soportes a:
        stella.zorzer@swissmedical.com.ar 
        adriano.manzini@swissmedical.com.ar 
      `,
      soporteExcel: "Si",
      soporteRefacturacion: "No"
  }
  },
  {
    id: 4,
    nombre: "Medicus",
    estado: "En proceso",
    notas: "",
    checklist: [
      { paso: "Cierre Markey", completo: false },
      { paso: "Envío de soportes", completo: false }
    ],
      detalles: {
      moto: "No",
      portalFinanciadores: "Sí",
      mailAviso: "No",
      portalSubida: `
      Pagina: https://prestadores.medicus.com.ar/#/ 
      Usuario: mcobos@alexanderfleming.org 
      Clave: Facturacion21
      `,
      soporteTXT: `Si`,
      soporteExcel: "Si",
      soporteRefacturacion: "No"
  }
  },
  {
    id: 5,
    nombre: "Omint",
    estado: "Incompleto",
    notas: "",
    checklist: [
      { paso: "Cierre Markey", completo: false },
      { paso: "Envío de soportes", completo: false }
    ],
      detalles: {
      moto: "No",
      portalFinanciadores: "Sí",
      mailAviso: "No",
      portalSubida: `
      Pagina: https://www.omint.com.ar/Usuario:
      Usuario: alexrfleming o mcobos@alexanderfleming.org
      Clave: alex4220
      `,
      soporteTXT: `Si`,
      soporteExcel: "Si",
      soporteRefacturacion: "No"
  }
  },
{
  id: 6,
  nombre: "Aca Salud / Avalian",
  estado: "Incompleto",
  notas: "",
  checklist: [
      { paso: "Cierre Markey", completo: false },
      { paso: "Envío de soportes", completo: false }
  ],
  detalles: {
    moto: "Sí",
    portalFinanciadores: "Sí",
    mailAviso: "No",
    portalSubida: "No",
    soporteTXT: "Sí",
    soporteExcel: `
    Enviar resumen de facturas
    `,
    soporteRefacturacion: "No"
  }
  
},

    {
    id: 7,
    nombre: "Apsot",
    estado: "Incompleto",
    notas: "",
    checklist: [
      { paso: "Cierre Markey", completo: false },
      { paso: "Envío de soportes", completo: false }
    ],
    detalles: {
    moto: "Sí",
    portalFinanciadores: "Sí",
    mailAviso: "No",
    portalSubida: "No",
    soporteTXT: "Sí",
    soporteExcel: "Sí",
    soporteRefacturacion: "No"
  }
  },
    {
    id: 8,
    nombre: "Argenomics",
    estado: "Incompleto",
    notas: "Hacer el cierre en Markey cuando Lean avise",
    checklist: [
      { paso: "Cierre Markey", completo: false },
      { paso: "Envío de soportes", completo: false }
    ]
  },
    {
    id: 9,
    nombre: "ASE",
    estado: "Incompleto",
    notas: "",
    checklist: [
      { paso: "Cierre Markey", completo: false },
      { paso: "Envío de soportes", completo: false }
    ],
    detalles: {
    moto: "No",
    portalFinanciadores: "Sí",
    mailAviso: "No",
    portalSubida: "No",
    soporteTXT: "No",
    soporteExcel: "No",
    soporteRefacturacion: "No"
  }
  },
    {
    id: 10,
    nombre: "Asociación Mutual Sancor",
    estado: "Incompleto",
    notas: "",
    checklist: [
      { paso: "Cierre Markey", completo: false },
      { paso: "Envío de soportes", completo: false }
    ]
  },
    {
    id: 11,
    nombre: "Caja Abogados - BS.AS",
    estado: "Incompleto",
    notas: "",
    checklist: [
      { paso: "Cierre Markey", completo: false },
      { paso: "Envío de soportes", completo: false }
    ],
    detalles: {
    moto: "No",
    portalFinanciadores: "Sí",
    mailAviso: "No",
    portalSubida: "No",
    soporteTXT: `
    Si (Enviar soportes a LSoncini@cajaabogados.org.ar)
    `,
    soporteExcel: `
    Si (Enviar soportes a LSoncini@cajaabogados.org.ar)
    `,
    soporteRefacturacion: "No"
  }
  },
    {
    id: 12,
    nombre: "Caja de Abogados - BAYRES",
    estado: "Incompleto",
    notas: "",
    checklist: [
      { paso: "Cierre Markey", completo: false },
      { paso: "Envío de soportes", completo: false }
    ],
    detalles: {
    moto: "No",
    portalFinanciadores: "Sí",
    mailAviso: "No",
    portalSubida: "No",
    soporteTXT: `
    Si (Enviar soportes a LSoncini@cajaabogados.org.ar)
    `,
    soporteExcel: `
    Si (Enviar soportes a LSoncini@cajaabogados.org.ar)
    `,
    soporteRefacturacion: "No"
  }
  },
    {
    id: 13,
    nombre: "Caja notarial",
    estado: "Incompleto",
    notas: "",
    checklist: [
      { paso: "Cierre Markey", completo: false },
      { paso: "Envío de soportes", completo: false }
    ],
    detalles: {
    moto: "No",
    portalFinanciadores: "Sí",
    mailAviso: "No",
    portalSubida: "No",
    soporteTXT: "Si",
    soporteExcel: "Si",
    soporteRefacturacion: "No"
  }
  },
    {
    id: 14,
    nombre: "Conferencia episcopal",
    estado: "Incompleto",
    notas: "",
    checklist: [
      { paso: "Cierre Markey", completo: false },
      { paso: "Envío de soportes", completo: false }
    ],
    detalles: {
    moto: "No",
    portalFinanciadores: "Sí",
    mailAviso: "No",
    portalSubida: "No",
    soporteTXT: "No",
    soporteExcel: "Si",
    soporteRefacturacion: "No"
  }
  },
    {
    id: 15,
    nombre: "COMEI",
    estado: "Incompleto",
    notas: "",
    checklist: [
      { paso: "Cierre Markey", completo: false },
      { paso: "Envío de soportes", completo: false }
    ],
    detalles: {
    moto: "Si",
    portalFinanciadores: "Sí",
    mailAviso: `
    facturacion.comei@cajaodo.org.ar
    gestión.comei@cajaodo.org.ar
    `,
    portalSubida: `
    Pagina: https://cloud.comei.org.ar
    Usuario: 3233102
    Clav: Prestador24
    `,
    soporteTXT: "No",
    soporteExcel: "Si",
    soporteRefacturacion: "No"
  }
  },
    {
    id: 16,
    nombre: "Escribanos",
    estado: "Incompleto",
    notas: "",
    checklist: [
      { paso: "Cierre Markey", completo: false },
      { paso: "Envío de soportes", completo: false }
    ],
    detalles: {
    moto: "No",
    portalFinanciadores: "Sí",
    mailAviso: "No",
    portalSubida: "No",
    soporteTXT: "No",
    soporteExcel: "Si",
    soporteRefacturacion: "No"
  }
    
  },
    {
    id: 17,
    nombre: "Iassep Formosa",
    estado: "Incompleto",
    notas: "",
    checklist: [
      { paso: "Cierre Markey", completo: false },
      { paso: "Envío de soportes", completo: false }
    ]
  },
      {
    id: 18,
    nombre: "Insep Chaco",
    estado: "Incompleto",
    notas: "",
    checklist: [
      { paso: "Cierre Markey", completo: false },
      { paso: "Envío de soportes", completo: false }
    ],
    detalles: {
    moto: "Si",
    portalFinanciadores: "Sí",
    mailAviso: "No",
    portalSubida: "No",
    soporteTXT: `
    Enviar soportes a: 
    area_funcional@insssep.gov.ar 
    sistemas@insssep.gov.ar
    `,
    soporteExcel: "No",
    soporteRefacturacion: "No"
  }
  },
    {
    id: 19,
    nombre: "Luis Pasteur",
    estado: "Incompleto",
    notas: "",
    checklist: [
      { paso: "Cierre Markey", completo: false },
      { paso: "Envío de soportes", completo: false }
    ],
    detalles: {
    moto: "Si",
    portalFinanciadores: "Sí",
    mailAviso: "No",
    portalSubida: "No",
    soporteTXT: `
    Mandar soportes a: Nicolas.Celiz@oslpasteur.com.ar
    `,
    soporteExcel: "Si",
    soporteRefacturacion: "No"
  }
  }
  ,
    {
    id: 20,
    nombre: "Luz y fuerza",
    estado: "Incompleto",
    notas: "",
    checklist: [
      { paso: "Cierre Markey", completo: false },
      { paso: "Envío de soportes", completo: false }
    ],
    detalles: {
    moto: "Si",
    portalFinanciadores: "Sí",
    mailAviso: "No",
    portalSubida: "No",
    soporteTXT: "No",
    soporteExcel: "No",
    soporteRefacturacion: "No"
  }
  }
  ,
    {
    id: 21,
    nombre: "Medife",
    estado: "Incompleto",
    notas: "",
    checklist: [
      { paso: "Cierre Markey", completo: false },
      { paso: "Envío de soportes", completo: false }
    ],
    detalles: {
    moto: "No",
    portalFinanciadores: "Sí",
    mailAviso: "No",
    portalSubida: "No",
    soporteTXT: "Si",
    soporteExcel: "Si",
    soporteRefacturacion: "No"
  }
  }
  ,
    {
    id: 22,
    nombre: "Ministrio desarrollo humano Formosa",
    estado: "Incompleto",
    notas: "",
    checklist: [
      { paso: "Cierre Markey", completo: false },
      { paso: "Envío de soportes", completo: false }
    ]
  }
  ,
    {
    id: 23,
    nombre: "Ministerio de salud La Pampa",
    estado: "Incompleto",
    notas: "",
    checklist: [
      { paso: "Cierre Markey", completo: false },
      { paso: "Envío de soportes", completo: false }
    ],
    detalles: {
    moto: "Si",
    portalFinanciadores: "Sí",
    mailAviso: "No",
    portalSubida: "No",
    soporteTXT: "No",
    soporteExcel: "No",
    soporteRefacturacion: "No"
  }
  }
  ,
    {
    id: 24,
    nombre: "O.S.D.I.P.P",
    estado: "Incompleto",
    notas: "",
    checklist: [
      { paso: "Cierre Markey", completo: false },
      { paso: "Envío de soportes", completo: false }
    ],
    detalles: {
    moto: "Si",
    portalFinanciadores: "Sí",
    mailAviso: "No",
    portalSubida: "No",
    soporteTXT: "No",
    soporteExcel: "Si",
    soporteRefacturacion: "No"
  }
  }
  ,
    {
    id: 25,
    nombre: "O.S.P.E",
    estado: "Incompleto",
    notas: "",
    checklist: [
      { paso: "Cierre Markey", completo: false },
      { paso: "Envío de soportes", completo: false }
    ],
    detalles: {
    moto: "No",
    portalFinanciadores: "Sí",
    mailAviso: "No",
    portalSubida: "No",
    soporteTXT: `
    Mandar por mail las facturas y soportes a: 
    mesadeentradas@ospesalud.com.ar
    central.fcprestadores@ospesalud.com.ar
    `,
    soporteExcel: "Si",
    soporteRefacturacion: "No"
  }
  }
  ,
    {
    id: 26,
    nombre: "Poder Judicial",
    estado: "Incompleto",
    notas: "",
    checklist: [
      { paso: "Cierre Markey", completo: false },
      { paso: "Envío de soportes", completo: false }
    ],
    detalles: {
    moto: "Si",
    portalFinanciadores: "Sí",
    mailAviso: "No",
    portalSubida: "No",
    soporteTXT: `
    Mandar mail a: 
    mesaprestadores@ospjn.gov.ar
    controldefacturacion@ospjn.gov.ar
    `,
    soporteExcel: "No",
    soporteRefacturacion: "No"
  }
  },
  {
    id: 27,
    nombre: "Policia Formosa",
    estado: "Incompleto",
    notas: "",
    checklist: [
      { paso: "Cierre Markey", completo: false },
      { paso: "Envío de soportes", completo: false }
    ]
  },
  {
    id: 28,
    nombre: "Prevencion Salud",
    estado: "Incompleto",
    notas: "",
    checklist: [
      { paso: "Cierre Markey", completo: false },
      { paso: "Envío de soportes", completo: false }
    ],
    detalles: {
    moto: "Si",
    portalFinanciadores: "Sí",
    mailAviso: "No",
    portalSubida: "No",
    soporteTXT: `
    Mandar facturas a este mail:
    expedientes@prevencionsalud.com.ar
    `,
    soporteExcel: "Si",
    soporteRefacturacion: "No"
  }
  },
  {
    id: 29,
    nombre: "Red Argentina",
    estado: "Incompleto",
    notas: "",
    checklist: [
      { paso: "Cierre Markey", completo: false },
      { paso: "Envío de soportes", completo: false }
    ],
    detalles: {
    moto: "Si",
    portalFinanciadores: "Sí",
    mailAviso: "No",
    portalSubida: `
    Pagina: prestadores.facturacionras.com.ar 
    Clave: fleming123
    `,
    soporteTXT: "Si",
    soporteExcel: `
      Mandar resumen de facturas
    `,
    soporteRefacturacion: "No"
  }
  },
  {
    id: 30,
    nombre: "Sempre",
    estado: "Incompleto",
    notas: "",
    checklist: [
      { paso: "Cierre Markey", completo: false },
      { paso: "Envío de soportes", completo: false }
    ],
    detalles: {
    moto: "Si",
    portalFinanciadores: "Sí",
    mailAviso: "No",
    portalSubida: "No",
    soporteTXT: "Si",
    soporteExcel: `
      Mandar resumen de facturas
    `,
    soporteRefacturacion: "No"
  }
  },
  {
    id: 31,
    nombre: "Seros Chubut",
    estado: "Incompleto",
    notas: "",
    checklist: [
      { paso: "Cierre Markey", completo: false },
      { paso: "Envío de soportes", completo: false }
    ],
    detalles: {
    moto: "Si",
    portalFinanciadores: "Sí",
    mailAviso: "No",
    portalSubida: "No",
    soporteTXT: "Si",
    soporteExcel: "Si",
    soporteRefacturacion: "No"
  }
  },
  {
    id: 32,
    nombre: "Union Personal",
    estado: "Incompleto",
    notas: "",
    checklist: [
      { paso: "Cierre Markey", completo: false },
      { paso: "Envío de soportes", completo: false }
    ],
    detalles: {
    moto: "no",
    portalFinanciadores: "Sí",
    mailAviso: `
    carlos.vitola@unionpersonal.com.ar
    `,
    portalSubida: `
    Pagina: https://ape.up.cuentasapagar.com/?page=login
    Usuario: 30645337979
    Clave: Fleming2025#
    `,
    soporteTXT: "No",
    soporteExcel: "Si",
    soporteRefacturacion: "No"
  }
  }
];
