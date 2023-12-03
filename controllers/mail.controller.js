const transporter = require('./../utils/mailer')

// Controlador para enviar emails
exports.sendEmail = async (req, res) => {
    try {
        const {nombre, email, fecha, hora, numPer, observaciones} = req.body;

        const cuerpo = `

        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
            
        </head>
        <body>
            <section class="container">
        
                <div class="row d-flex text-center justify-content-center align-items-center">
                    <img src="{{asset('images/kenko_negro.png')}}" style="height: 170px; width:auto;">
                </div>
        
                <div class="row mt-4 mb-3">
                    <h2>Confirmación de reserva en Kenkö</h2>
                </div>
        
                <div class="row">
                    <p>Estimado/a <b>${nombre}</b>,</p>
                    <p>Es un placer confirmar su reserva en Kenkö para el ${fecha}.</p>
                    <p>A continuación, se detallan los datos de su reserva:</p>  
                    <p>
                        <b>Nombre de la Reserva:</b> ${nombre}<br>
                        <b>Fecha:</b> ${fecha}<br>
                        <b>Hora:</b> ${hora}<br>
                        <b>Número de Personas:</b> ${numPer}<br>
                        <b>Observaciones:</b> ${observaciones}
                    </p> 
                    <p>
                        Nuestro equipo está comprometido en proporcionarle un servicio de alta calidad y una deliciosa comida. 
                        Si necesita hacer alguna modificación en su reserva o tiene alguna pregunta adicional, 
                        no dude en ponerse en contacto con nosotros al 985 06 20 18 o responder a este correo electrónico.
                    </p>
                    <p>
                        Esperamos recibirle pronto y asegurarnos de que disfrute de su experiencia en Kenkö.<br>
                        ¡Gracias por confiar en nosotros!</p>
                    <p>
                        Atentamente,<br>
                        Andres Brandón Fernandez
                    </p>
                    <p>
                        Kenko Asian Food<br>
                        985 06 20 18<br>
                        kenkoassianfood@gmail.com<br>
                        www.kenkoassianfood.com
                    </p>     
                </div>
        
            </section>
        
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
            
        </body>
        </html>`

        const mailOptions = {
            from: 'kenkoasianfood@gmail.com',
            to: email,
            subject: 'Confirmación de reserva en Kenko Asian Food',
            html: cuerpo
        }

        const info = await transporter.sendMail(mailOptions); 
        res.json('Correo enviado: ' + info.response);
    } catch (error) {
        res.json({error: error.message})
    }
  }
  