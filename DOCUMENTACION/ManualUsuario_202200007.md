# LABORATORIO MANEJO E IMPLEMENTACION DE ARCHIVOS 
# Vacaciones de Junio - 2024
# Proyecto  2
---
# MANUAL DE USUARIO
---
# Universidad San Carlos de Guatemala
## _Programador: Natalia Mariel Calderón Echeverría_
## _Carnet: 202200007_
-----

---
## Objetivos
* Objetivo General
    * Implementar un sistema integral de reservaciones y comparación de servicios turísticos que optimice la experiencia del usuario y a la vez facilite las gestiones administrativas de los empleados en "AviCar".
* Objetivos Específicos
    * Desarrollar una interfaz de usuario amigable que permita a los usuarios realizar reservas de vuelos de forma sencilla, ofreciendo opciones claras y accesibles.
    * Implementar tablas comparativas que permitan a los usuarios evaluar diferentes agencias y destinos de vacaciones, facilitando la toma de decisiones informadas.
    * Crear un sistema para administrar todas las reservaciones y solicitudes realizadas por los usuarios, asegurando un control de calidad riguroso que cumpla con las políticas de la empresa.

---
---
## Pantalla principal (LOG IN )

Al momento de ingresar a la direccion de la pagina de "AviCar", se encuentra con una seccion denominada "LOG IN", en donde se solicita que el usuario ingrese la informacion de su usuario en los campos determinados, esta informacion es "usuario" y "contraseña". 
  ![ObtenerLink](https://i.ibb.co/PwybRSn/LOGIN1.png)

* boton de iniciar sesion
Una vez los campos esten llenos se procede a iniciar sesion en el boton correspondiente, este se encargara de direccionar al usuario a la pagina que le corresponde segun su status dentro del programa. Existen 3 status: administrador, recepcionista y turista. 

   ![ObtenerLink](https://i.ibb.co/2YFf770/LOGIN3.png)

   ![ObtenerLink](https://i.ibb.co/Jmmh0HN/LOGIN4.png)

* boton de registrar
El boton de registrar dirige al usuario a la "Pantalla de registro" en donde podra llenar todos los datos necesarios y poder crear su cuenta de AviCar. Es necesario aclarar que todos los usuarios creados desde la panatalla de registro tiene status de Turista.
  
    ![ObtenerLink](https://i.ibb.co/dcPJWBJ/LOGIN2.png)
---
---
# Pantalla de registro
La pantalla de registro se muestra con una interfaz parecida la pantalla corresondiente al login y consiste en un formulario en donde es necesario llenar cada uno de los campos indicados, en caso contrario, no se podra registrar al usuario dentro de nuestra base de dato. Los datos necesarios son: Nombre, Usuario (no debe ser repetido a alguno ya existente), Contraseña, Confrimar la contrasela, email (debe ser un email valido).
    ![ObtenerLink](https://i.ibb.co/VWBJ7Xb/IMG-20240623-182832.png)
Una vez esten llenos todas las casillas del formulario, es necesario presionar el boton de registrar, al momento de presionar este boton se realizan las validaciones necesarias, las cuales son: validacion de usuario, validacion de correo y validacion de contraseña. 
    ![ObtenerLink](https://i.ibb.co/s5pypjX/IMG-20240623-182822.png)

Si todas las validaciones son correctas, aparece uen pantalla una alerta indicando que el usuario ha sido registrado satisfactoriamente, de lo contrario aparece una alerta indicando lo contrario. Es necesario aclarar que todos los usuarios creados desde la panatalla de registro tiene status de Turista.
    ![ObtenerLink](https://i.ibb.co/JmkLH7M/IMG-20240623-182858.png)
Es posible regresar a la pantalla principal a traves del boton return, este permite regresar al usuario a la pantalla en donde puede iniciar sesion con su nuevo usuario creado.
    ![ObtenerLink](https://i.ibb.co/52Fh0Qw/IMG-20240623-182847.png)
 ---
 ---
## Pantalla de Turista
La pantalla turista ofrece al usuario turista, una visualizacion de los viajes y autos disponibles en "AviCar", asi tambien como toda la informacion relevante a cada uno de ellos. La pantalla turista permite al usuario, realizar una solicitud de reservacion en el vuelo o auto deseado.


  ![ObtenerLink](https://i.ibb.co/xMLZhqv/IMG-20240623-183457.png) 
![ObtenerLink](https://i.ibb.co/PhgWJqC/IMG-20240623-183618.png) 

* Autos
La seccion de autos en la pantalla turista, muestra una tabla con el listado de todos los autos disponibles para rentas, asi tambien como la informacion relevante de cada uno de ellos, estas son:
    * Nombre de la agencia
    * Marca del auto
    * Placa del auto
    * Modelo del auto
    * Precio del auto
    * Ciudad en la que se encuentra el auto

El usuario tambien puede realizar sus reservaciones al presionar el boton "reservar", que se encuentra al lado de cada una de las filas. Esto envia una solicitud de reservacion, que proximamente sera aceptada o rechaza por el equipo de "AviCar"
    ![ObtenerLink](https://i.ibb.co/KjypPDW/IMG-20240623-183515.png) 

* Viajes
La seccion de viajes en la pantalla turista, muestra una tabla con el listado de todos los viajes disponibles para reservar, asi tambien como la informacion relevante de cada uno de ellos, estas son:
    * Nombre de la agencia
    * Ciudad de origen
    * Ciudad de destino
    * Dias de vuelo
    * Precio de vuelo

El usuario tambien puede realizar sus reservaciones al presionar el boton "reservar", que se encuentra al lado de cada una de las filas. Esto envia una solicitud de reservacion, que proximamente sera aceptada o rechaza por el equipo de "AviCar"
       ![ObtenerLink](https://i.ibb.co/Z1LL4z0/IMG-20240623-183527.png) 
 

 * Actualizar
El boton actualizar en la parte posterior de la pantalla, permite al usuario turista actualizar las tablas de vuelis y autos disponibles, esto con el objetivo de tener la informacion mas nueva y actualizada posible y brindar una mejor experiencia.

* Cerrar sesion
El boton cerrar sesion permite al usuario, cerrar de maner segura la sesion actual en la que se encuentra y regresar a la pantalla de inicio (log in)

   ![ObtenerLink](https://i.ibb.co/KzypyCz/IMG-20240623-183559.png) 
 ---
 ---

#  Pantalla de Recepcionista
La pantalla de recepcionista muestra al usuario, en una tabla de manera ordenada, un listado de las distintas solicitudes de reservar realizadas por los usuarios turista. Tambien se muestra, en la primera columna de la tabla el usuario que solicito dicha reservacion, esto con el objetivo de facilitar un mejor control e historial de los usuarios y poder tomar una mejor decision con respecto a la solicitud.

   ![ObtenerLink](https://i.ibb.co/0CxRzFj/IMG-20240623-184508.png) 

En la ultima columna de dicha tabla se encuentran 2 botones: boton de aceptar (verde) y boton de rechazar (rojo). Estos botones, como su nombre lo indica permiten que el recepcionista pueda aceptar o rechazar la solicitud del usuario. De igual manera, una vez ya se haya tomado una decision con respecto a la solicitud del usuario esta sera eliminada.
   ![ObtenerLink](https://i.ibb.co/Jcq71yD/IMG-20240623-184603.png) 

AL momento de tomar la decision sobre la solicitud del usuario, parecera en pantalla una alerta que indicara al usuario si la decision fue registrada con exito o no, une vez este realizada la decision la tabla procedera a actualizarse automaticamente, de manera en la que unicamente la informacion relevante sea mostrada al recepcionista. 
   ![ObtenerLink](https://i.ibb.co/KXBjLJ4/IMG-20240623-184525.png) 
   ![ObtenerLink](https://i.ibb.co/cXX210w/IMG-20240623-184926.png) 

* Cerrar sesion
El boton cerrar sesion permite al usuario, cerrar de maner segura la sesion actual en la que se encuentra y regresar a la pantalla de inicio (log in)

   ![ObtenerLink](https://i.ibb.co/Cs3fp3J/IMG-20240623-185119.png) 
---
---

#  Pantalla de Administrador
La pantalla de administrador muestra la pantalla mas completa y con mas control administrativo del sistema, esto se debe  a la naturaleza del usuario como administrador. Esta pantalla ofrece la posibilas de:

* Registrar usuarios

Esta sección de la pantalla de administración permite registrar usuarios, con la diferencia de que ahora es posible asignar roles específicos a cada uno. Es decir, se pueden crear usuarios tanto de tipo Turista como de tipo Recepcionista. El formulario debe completarse en su totalidad y solicita la siguiente información: Nombre, Usuario (no debe ser repetido a alguno ya existente), Contraseña, Confirmar la contraseña, email (debe ser un email válido), y Tipo (debe elegir entre Turista o Recepcionista).
 ![ObtenerLink](https://i.ibb.co/QPCwzbL/IMG-20240623-185534.png) 
Una vez que todas las casillas del formulario estén llenas, se debe presionar el botón de registrar. Al hacer esto, se realizarán las validaciones necesarias, que incluyen la validación de usuario, validación de correo y validación de contraseña.Si todas las validaciones son correctas, aparecerá en pantalla una alerta indicando que el usuario ha sido registrado satisfactoriamente. De lo contrario, aparecerá una alerta indicando lo contrario. Es importante aclarar que todos los usuarios creados tendrán el estado correspondiente según el tipo seleccionado (Turista o Recepcionista).

* Registrar autos


Esta sección de la pantalla de administración permite registrar autos, facilitando la gestión de la información de cada vehículo. El formulario debe completarse en su totalidad y solicita la siguiente información: Nombre de la agencia, Marca del auto, Placa del auto, Modelo del auto, Precio del auto, y Ciudad en la que se encuentra el auto.

Una vez que todas las casillas del formulario estén llenas, se debe presionar el botón de registrar. Al hacer esto, se realizarán las validaciones necesarias para garantizar la precisión de los datos, incluyendo la validación de la placa del auto y la verificación de la información ingresada.

 ![ObtenerLink](https://i.ibb.co/0G9BDRp/IMG-20240623-185721.png) 
 
Si todas las validaciones son correctas, aparecerá en pantalla una alerta indicando que el auto ha sido registrado satisfactoriamente. De lo contrario, aparecerá una alerta indicando lo contrario. Es fundamental asegurarse de que todos los datos proporcionados sean precisos y estén completos para evitar errores en el registro.

* Registrar Viajes


En esta sección de la pantalla de administración, se ofrece la funcionalidad de registrar vuelos, permitiendo una gestión detallada de cada itinerario. El formulario, que debe ser completado en su totalidad, solicita la siguiente información: Nombre de la agencia, Ciudad de origen, Ciudad de destino, Días de vuelo, y Precio de vuelo.

 ![ObtenerLink](https://i.ibb.co/YWH8jFr/IMG-20240623-185321.png) 
Después de llenar todas las casillas del formulario, es necesario presionar el botón de registrar. Al hacerlo, se realizarán las validaciones correspondientes para asegurar que los datos ingresados sean correctos, incluyendo la validación de las ciudades de origen y destino, así como la verificación de los días y el precio del vuelo.Si todas las validaciones se superan con éxito, una alerta en pantalla confirmará que el vuelo ha sido registrado satisfactoriamente. En caso contrario, aparecerá una alerta indicando que hubo un problema en el registro. Es crucial que toda la información proporcionada sea precisa y completa para evitar cualquier error en el proceso de registro.

* Eliminar usuarios

Una de las funciones fundamentales del usuario administrador es la capacidad de eliminar usuarios, es el unico tipo de usuario con dicha capacidad. El proceso de eliminar usuarios consiste en escribir en el espacio disponible dentro de la secion el nombre del usuario que se desea eliminar. Una vez este escrito el nombre del usuario a eliminar se procede a presionar el boton correspondiente.
 ![ObtenerLink](https://i.ibb.co/pR50NXV/IMG-20240623-185549.png) 
 
Al presionar el boton se buscara en la base de datos el usuario y si es encontrado este se eliminara, una vez eliminado aparecera en pantalla una alerta indicando que la eliminacion fue realizada con exito. EN caso contrario, aparecer en pantalla una alerta indicando que no se ha podido eliminar dicho usuario debido a que no existe o ocurrieron otron problemas en el proceso.

* ELiminar Autos

Esta sección de la pantalla de administración permite eliminar autos, facilitando la gestión de la información de cada vehículo. El formulario debe completarse en su totalidad y solicita la siguiente información: Nombre de la agencia, Marca del auto, Placa del auto, Modelo del auto, Precio del auto, y Ciudad en la que se encuentra el auto.

Una vez que todas las casillas del formulario estén llenas, se debe presionar el botón de eliminar. Al hacer esto, se realizarán las validaciones necesarias para garantizar la precisión de los datos, incluyendo la validación de la placa del auto y la verificación de la información ingresada.
 ![ObtenerLink](https://i.ibb.co/D4t6Dwb/IMG-20240623-185352.png) 
Si todas las validaciones son correctas, aparecerá en pantalla una alerta indicando que el auto ha sido eliminado satisfactoriamente. De lo contrario, aparecerá una alerta indicando lo contrario. Es fundamental asegurarse de que todos los datos proporcionados sean precisos y estén completos para evitar errores en la eliminación.

* Eliminar Viajes

En esta sección se proporciona la funcionalidad para eliminar vuelos, simplificando así la gestión y eliminación de itinerarios específicos. El formulario, que debe completarse por completo, solicita la siguiente información: Nombre de la agencia, Ciudad de origen, Ciudad de destino, Días de vuelo y Precio del vuelo.
 ![ObtenerLink](https://i.ibb.co/VHnwt7f/IMG-20240623-185511.png) 
Una vez que todas las casillas del formulario se han llenado, es necesario hacer clic en el botón de eliminar. Al hacerlo, se llevarán a cabo las validaciones necesarias para asegurar que los datos ingresados sean correctos, comprobando las ciudades de origen y destino, así como los días y el precio del vuelo.

Si todas las validaciones se completan con éxito, aparecerá una alerta en la pantalla confirmando que el vuelo ha sido eliminado correctamente. De lo contrario, aparecerá una alerta indicando que hubo un problema en el proceso de eliminación. Es esencial que toda la información proporcionada sea precisa y completa para evitar errores en la eliminación del vuelo.

* Visualizar el historial de reservaciones de los usuarios

El usuario con status administrador, tiene la capacidad de visualiza el historial de vuelos reservados y autos rentados de cada uno de los usuarios turistas. Esta informacion se presenta al final de la pagina en una tabla ordenada. 
Existen tres columnas en esta tablas, y cada una de ellas contiene la siguiente informacion relacionada a la reservacion:
    * agencia
    * usuario que realizo la reservacion 
    * precio de la reservacion
    
![ObtenerLink](https://i.ibb.co/zZ6W70b/IMG-20240623-185413.png) 
       
Es imporante recordar que en este historial unicamente aparecen las reservacion realizadas, es decir todas aquellas que ya han sido previamente aceptadas por el usuario recepcionista.
 
 * Cerrar sesion
El boton cerrar sesion permite al usuario, cerrar de maner segura la sesion actual en la que se encuentra y regresar a la pantalla de inicio (log in)

   ![ObtenerLink](https://i.ibb.co/rFh3B35/IMG-20240623-185454.png) 

