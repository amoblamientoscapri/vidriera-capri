// AUTO-GENERADO v2 (2026-06-26) — fuente unica de verdad para index.html y render.html
// REGLA v2: ARRIBA = color (verde/crema) opaco + PERMANENTE (marca, categorias, WhatsApp, 9 cuotas), SIN numeros de precio.
//           ABAJO = TRANSPARENTE (deja ver el mueble) + UN SOLO numero por panel ("DESDE $").
// WhatsApp: 11 2250 1563 (confirmar). Cuotas: SIEMPRE "hasta 9 cuotas sin interes" (nunca mezclar con 6).
const PANOS = [
 // ===== OCHAVA (la mas importante - billboard para autos) =====
 {"id":"O1-ARRIBA","fachada":"OCHAVA","pos":"ARRIBA","ancho":112,"alto":169,"usable":104,"col":"O1","tipo":"crema","orden":4,"hasQR":false,"elements":[
   {"role":"hero","lines":["DORMITORIO"],"cm":15.0,"font":"oswald"},
   {"role":"list","lines":["Camas"],"cm":11.0,"font":"oswald"},
   {"role":"list","lines":["Respaldos"],"cm":11.0,"font":"oswald"},
   {"role":"list","lines":["Mesas de luz"],"cm":11.0,"font":"oswald"}]},
 {"id":"O2-ARRIBA","fachada":"OCHAVA","pos":"ARRIBA","ancho":110,"alto":169,"usable":102,"col":"O2","tipo":"verde","orden":5,"hasQR":false,"elements":[
   {"role":"hero","lines":["11 2250","1563"],"cm":21.0,"font":"barlow"},
   {"role":"cta","lines":["WhatsApp"],"cm":10.8,"font":"oswald"},
   {"role":"body","lines":["Pedí precio ahora"],"cm":8.0,"font":"monts"}]},
 {"id":"O3-ARRIBA","fachada":"OCHAVA","pos":"ARRIBA","ancho":112,"alto":169,"usable":104,"col":"O3","tipo":"verde","orden":6,"hasQR":false,"elements":[
   {"role":"qualifier","lines":["HASTA"],"cm":9.0,"font":"oswald"},
   {"role":"hero","lines":["9 CUOTAS"],"cm":18.0,"font":"oswald"},
   {"role":"list","lines":["SIN INTERÉS"],"cm":12.0,"font":"oswald"},
   {"role":"body","lines":["Transferencia −18%"],"cm":8.0,"font":"monts"}]},
 {"id":"O1-ABAJO","fachada":"OCHAVA","pos":"ABAJO","ancho":112,"alto":190,"usable":104,"col":"O1","tipo":"glass","orden":4,"hasQR":true,"elements":[
   {"role":"qualifier","lines":["DESDE"],"cm":10.0,"font":"oswald"},
   {"role":"hero","lines":["$82.290"],"cm":24.0,"font":"barlow"},
   {"role":"sub","lines":["Respaldo americano"],"cm":8.0,"font":"monts"},
   {"role":"qr","lines":["QR 40x40"],"cm":40,"font":"qr"}]},
 {"id":"O2-ABAJO","fachada":"OCHAVA","pos":"ABAJO","ancho":92,"alto":180,"usable":84,"col":"O2","tipo":"door","orden":5,"hasQR":false,"elements":[
   {"role":"hero","lines":["ENTRÁ POR","EL FRENTE"],"cm":14.0,"font":"oswald"},
   {"role":"body","lines":["Lun a Sáb 9-18h"],"cm":5.5,"font":"monts"}]},
 {"id":"O3-ABAJO","fachada":"OCHAVA","pos":"ABAJO","ancho":112,"alto":190,"usable":104,"col":"O3","tipo":"glass","orden":6,"hasQR":false,"elements":[
   {"role":"qualifier","lines":["DESDE"],"cm":10.0,"font":"oswald"},
   {"role":"hero","lines":["$69.990"],"cm":24.0,"font":"barlow"},
   {"role":"sub","lines":["Banco nórdico"],"cm":8.0,"font":"monts"}]},

 // ===== FRENTE 2 (principal + puerta de entrada) =====
 {"id":"F2a-ARRIBA","fachada":"FRENTE2","pos":"ARRIBA","ancho":119,"alto":167,"usable":111,"col":"F2a","tipo":"verde","orden":9,"hasQR":false,"elements":[
   {"role":"hero","lines":["11 2250","1563"],"cm":20.0,"font":"barlow"},
   {"role":"cta","lines":["WhatsApp"],"cm":9.9,"font":"oswald"},
   {"role":"body","lines":["Precio y envío al toque"],"cm":7.2,"font":"monts"}]},
 {"id":"F2b-ARRIBA","fachada":"FRENTE2","pos":"ARRIBA","ancho":115,"alto":167,"usable":107,"col":"F2b","tipo":"crema","orden":10,"hasQR":false,"elements":[
   {"role":"hero","lines":["DORMITORIO"],"cm":15.0,"font":"oswald"},
   {"role":"list","lines":["Roperos"],"cm":11.0,"font":"oswald"},
   {"role":"list","lines":["Cómodas"],"cm":11.0,"font":"oswald"},
   {"role":"list","lines":["Chifoniers"],"cm":11.0,"font":"oswald"}]},
 {"id":"F2c-ARRIBA","fachada":"FRENTE2","pos":"ARRIBA","ancho":115,"alto":167,"usable":107,"col":"F2c","tipo":"verde","orden":11,"hasQR":false,"elements":[
   {"role":"hero","lines":["9 CUOTAS"],"cm":18.0,"font":"oswald"},
   {"role":"list","lines":["SIN INTERÉS"],"cm":12.0,"font":"oswald"},
   {"role":"body","lines":["Muebles de fábrica"],"cm":8.0,"font":"monts"}]},
 {"id":"F2d-ARRIBA","fachada":"FRENTE2","pos":"ARRIBA","ancho":116,"alto":167,"usable":108,"col":"F2d","tipo":"crema","orden":12,"hasQR":false,"elements":[
   {"role":"hero","lines":["RATTAN & CAÑA"],"cm":12.5,"font":"oswald"},
   {"role":"list","lines":["Sillones"],"cm":10.5,"font":"oswald"},
   {"role":"list","lines":["Mesas de centro"],"cm":10.5,"font":"oswald"},
   {"role":"list","lines":["Canastos"],"cm":10.5,"font":"oswald"}]},
 {"id":"F2a-ABAJO","fachada":"FRENTE2","pos":"ABAJO","ancho":119,"alto":190,"usable":111,"col":"F2a","tipo":"glass","orden":9,"hasQR":true,"elements":[
   {"role":"qualifier","lines":["DESDE"],"cm":10.0,"font":"oswald"},
   {"role":"hero","lines":["$189.130"],"cm":23.0,"font":"barlow"},
   {"role":"sub","lines":["Chifonier"],"cm":8.0,"font":"monts"},
   {"role":"qr","lines":["QR 40x40"],"cm":40,"font":"qr"}]},
 {"id":"F2b-ABAJO","fachada":"FRENTE2","pos":"ABAJO","ancho":98,"alto":180,"usable":90,"col":"F2b","tipo":"door","orden":10,"hasQR":false,"elements":[
   {"role":"hero","lines":["ABIERTO","EMPUJÁ"],"cm":18.0,"font":"oswald"},
   {"role":"body","lines":["Lun a Sáb 9-18h"],"cm":6.0,"font":"monts"}]},
 {"id":"F2c-ABAJO","fachada":"FRENTE2","pos":"ABAJO","ancho":98,"alto":180,"usable":90,"col":"F2c","tipo":"door","orden":11,"hasQR":false,"elements":[
   {"role":"hero","lines":["11 2250","1563"],"cm":16.0,"font":"barlow"},
   {"role":"body","lines":["Consultá stock y envíos"],"cm":5.5,"font":"monts"}]},
 {"id":"F2d-ABAJO","fachada":"FRENTE2","pos":"ABAJO","ancho":117,"alto":190,"usable":109,"col":"F2d","tipo":"glass","orden":12,"hasQR":false,"elements":[
   {"role":"qualifier","lines":["DESDE"],"cm":10.0,"font":"oswald"},
   {"role":"hero","lines":["$235.230"],"cm":22.0,"font":"barlow"},
   {"role":"sub","lines":["Mesa Asia 120×80 (4 pers.)"],"cm":7.5,"font":"monts"}]},

 // ===== FRENTE 1 =====
 {"id":"F1a-ARRIBA","fachada":"FRENTE1","pos":"ARRIBA","ancho":116,"alto":170,"usable":108,"col":"F1a","tipo":"crema","orden":7,"hasQR":false,"elements":[
   {"role":"hero","lines":["LIVING"],"cm":16.0,"font":"oswald"},
   {"role":"list","lines":["Mesas de TV"],"cm":11.0,"font":"oswald"},
   {"role":"list","lines":["Mesas ratonas"],"cm":11.0,"font":"oswald"},
   {"role":"list","lines":["Bibliotecas"],"cm":11.0,"font":"oswald"}]},
 {"id":"F1b-ARRIBA","fachada":"FRENTE1","pos":"ARRIBA","ancho":116,"alto":170,"usable":108,"col":"F1b","tipo":"verde","orden":8,"hasQR":false,"elements":[
   {"role":"hero","lines":["COMEDOR"],"cm":16.0,"font":"oswald"},
   {"role":"list","lines":["Sillas"],"cm":11.0,"font":"oswald"},
   {"role":"list","lines":["Mesas"],"cm":11.0,"font":"oswald"},
   {"role":"list","lines":["Bancos"],"cm":11.0,"font":"oswald"}]},
 {"id":"F1a-ABAJO","fachada":"FRENTE1","pos":"ABAJO","ancho":116,"alto":189,"usable":108,"col":"F1a","tipo":"glass","orden":7,"hasQR":false,"elements":[
   {"role":"qualifier","lines":["DESDE"],"cm":10.0,"font":"oswald"},
   {"role":"hero","lines":["$119.880"],"cm":24.0,"font":"barlow"},
   {"role":"sub","lines":["Mesa de TV c/ cajones"],"cm":8.0,"font":"monts"}]},
 {"id":"F1b-ABAJO","fachada":"FRENTE1","pos":"ABAJO","ancho":116,"alto":189,"usable":108,"col":"F1b","tipo":"glass","orden":8,"hasQR":false,"elements":[
   {"role":"qualifier","lines":["DESDE"],"cm":10.0,"font":"oswald"},
   {"role":"hero","lines":["$132.030"],"cm":24.0,"font":"barlow"},
   {"role":"sub","lines":["Mesa ratona tranquera"],"cm":8.0,"font":"monts"}]},

 // ===== LATERAL (cara secundaria: marca + categorias) =====
 {"id":"L1-ARRIBA","fachada":"LATERAL","pos":"ARRIBA","ancho":110,"alto":168,"usable":102,"col":"L1","tipo":"verde","orden":1,"hasQR":false,"elements":[
   {"role":"hero","lines":["CAPRI"],"cm":28.0,"font":"anton"},
   {"role":"sub","lines":["Fábrica de muebles"],"cm":8.1,"font":"monts"},
   {"role":"body","lines":["desde 1983"],"cm":7.0,"font":"monts"}]},
 {"id":"L2-ARRIBA","fachada":"LATERAL","pos":"ARRIBA","ancho":110,"alto":168,"usable":102,"col":"L2","tipo":"crema","orden":2,"hasQR":false,"elements":[
   {"role":"hero","lines":["11 2250","1563"],"cm":20.0,"font":"barlow"},
   {"role":"cta","lines":["WhatsApp"],"cm":11.0,"font":"oswald"},
   {"role":"body","lines":["Precio y stock"],"cm":9.0,"font":"monts"}]},
 {"id":"L3-ARRIBA","fachada":"LATERAL","pos":"ARRIBA","ancho":110,"alto":168,"usable":102,"col":"L3","tipo":"crema","orden":3,"hasQR":false,"elements":[
   {"role":"hero","lines":["DORMITORIO"],"cm":14.0,"font":"oswald"},
   {"role":"hero","lines":["LIVING"],"cm":14.0,"font":"oswald"},
   {"role":"hero","lines":["COMEDOR"],"cm":14.0,"font":"oswald"}]},
 {"id":"L1-ABAJO","fachada":"LATERAL","pos":"ABAJO","ancho":110,"alto":190,"usable":102,"col":"L1","tipo":"glass","orden":1,"hasQR":false,"elements":[
   {"role":"qualifier","lines":["DESDE"],"cm":10.0,"font":"oswald"},
   {"role":"hero","lines":["$17.560"],"cm":24.0,"font":"barlow"},
   {"role":"sub","lines":["Canastos de junco"],"cm":8.0,"font":"monts"}]},
 {"id":"L2-ABAJO","fachada":"LATERAL","pos":"ABAJO","ancho":110,"alto":190,"usable":102,"col":"L2","tipo":"glass","orden":2,"hasQR":false,"elements":[
   {"role":"qualifier","lines":["DESDE"],"cm":10.0,"font":"oswald"},
   {"role":"hero","lines":["$63.320"],"cm":24.0,"font":"barlow"},
   {"role":"sub","lines":["Silla Windsor Negra"],"cm":8.0,"font":"monts"}]},
 {"id":"L3-ABAJO","fachada":"LATERAL","pos":"ABAJO","ancho":110,"alto":190,"usable":102,"col":"L3","tipo":"glass","orden":3,"hasQR":false,"elements":[
   {"role":"qualifier","lines":["DESDE"],"cm":10.0,"font":"oswald"},
   {"role":"hero","lines":["$159.600"],"cm":24.0,"font":"barlow"},
   {"role":"sub","lines":["Mesa de luz nórdica"],"cm":8.0,"font":"monts"}]}
];
const FONTS = {"hero":{"name":"Barlow Condensed","weight":"Black 900 (números) · Bold 700 ($ y decimales)","use":"Precios (un solo número), teléfono WhatsApp","case":"sin caja","tracking":"0 a −2%","gf":"https://fonts.google.com/specimen/Barlow+Condensed"},"title":{"name":"Oswald","weight":"Bold 700","use":"\"DESDE\", \"9 CUOTAS\", categorías, subcategorías, CTA","case":"MAYÚSCULA","tracking":"+5% a +12%","gf":"https://fonts.google.com/specimen/Oswald"},"brand":{"name":"Anton","weight":"Regular (peso único)","use":"SOLO la palabra \"CAPRI\" gigante","case":"MAYÚSCULA","tracking":"+2% a +4%","gf":"https://fonts.google.com/specimen/Anton"},"body":{"name":"Montserrat","weight":"SemiBold 600 (producto) · Medium 500 (resto)","use":"Nombre de producto, horarios, leyendas","case":"Alto y bajo","tracking":"0","gf":"https://fonts.google.com/specimen/Montserrat","note":"Capri ya usa Montserrat en el ecommerce → coherencia de marca."}};
const FONTMAP = {"barlow":"Barlow Condensed Black","oswald":"Oswald Bold","anton":"Anton","monts":"Montserrat SemiBold","qr":"—"};
const INSTALL = [
 ["Regla de oro (zonas)","ARRIBA = vinilo de COLOR opaco (verde/crema) con lo PERMANENTE: marca, categorías, WhatsApp, '9 cuotas'. NO lleva números de precio. ABAJO = TRANSPARENTE: deja ver el mueble + el precio."],
 ["Un solo número por panel","Cada panel de precio muestra UN solo número ('DESDE $XX.XXX'). Nunca dos líneas de números → un aumento se cambia en segundos, no hay que tocar dos renglones."],
 ["Precios recolocables","Franja inferior con RIEL de aluminio + placa intercambiable, o números de vinilo de corte recolocables sobre fondo fijo. Pedir presupuesto por 'set de números sueltos', NO por metro lineal."],
 ["Color de fondo (arriba)","Verde Capri profundo (#1B4332 · Oracal 651 cód. 060) y/o crema, con letras BLANCAS (contraste ~10:1, se lee desde el auto). Evitar verde brillante."],
 ["Transparente (abajo)","Vinilo perforado one-way 35% o esmerilado parcial para dejar ver el mueble; el precio en vinilo de corte BLANCO encima. Sí o sí transparente abajo."],
 ["WhatsApp permanente","11 2250 1563 en 2 líneas, grande. Es permanente (el teléfono no cambia con la inflación) → va arriba en color."],
 ["Cuotas","SIEMPRE 'HASTA 9 CUOTAS SIN INTERÉS' (nunca mezclar con 6). El % no cambia con la inflación → va arriba, permanente."],
 ["Durabilidad","Pedir vinilo CAST + laminado UV MATE (el brillante arruina el QR y refleja el sol). El blanco con dióxido de titanio (TiO2) no amarillea."],
 ["QR","Apunta a capri.com.ar/ofertas (pendiente de crear). Sirve para el PEATÓN que frena, no para el auto. 15-20 cm, mate, centro a ~120-130 cm del piso."],
 ["Archivos","Escala 1:1, CMYK, tipografías convertidas a curvas/outlines. Separar arte 'permanente' (arriba) de 'precio' (abajo) en archivos distintos."]
];
// Seleccion de productos GANCHO validada contra ventas reales (precio = DESDE lista). transf = -18%, 9 cuotas s/int.
const PRODUCTS = [
 ["Canastos de junco","Rattan / Canastos",17560],
 ["Silla Windsor Negra","Comedor / Sillas",63320],
 ["Banco Nórdico","Comedor / Taburetes",69990],
 ["Respaldo Americano Sommier","Dormitorio / Respaldos",82290],
 ["Mesa de TV con cajones","Living / Mesas de TV",119880],
 ["Mesa Ratona Tranquera","Living / Mesas Ratonas",132030],
 ["Mesa de Luz Nórdica Álamo","Dormitorio / Mesas de luz",159600],
 ["Chifonier","Dormitorio / Cómodas",189130],
 ["Mesa Asia 120×80 (4 pers.)","Comedor / Mesas",235230]
];
