# LABORATORIO MANEJO E IMPLEMENTACION DE ARCHIVOS 
# Vacaciones de Junio - 2024
# Proyecto  2
---
# MANUAL TECNICO
---
# Universidad San Carlos de Guatemala
## _Programador: Natalia Mariel Calderón Echeverría_
## _Carnet: 202200007_
-----

---
## Objetivos
* Objetivo General
    * Desarrollar una aplicación web funcional utilizando NodeJS y el framework Angular, que administre archivos y usuarios, integre servicios en la nube de AWS mediante la creación de usuarios y el uso respectivo de cada servicio, como Amazon EC2, y asegure un despliegue eficiente utilizando Docker.

* Objetivos Específicos

    * Implementar colecciones de mongo db para el manejo de informacion y la perduracion de la misma
    * Implementar administracion de distintis usuarios con permisos especificos segun sus responsabilidades dentro del flujo del programa.
    
    * Utilizar los servicios de la nube que provee AWS. Configurar y utilizar instancias de Amazon EC2 para desplegar la aplicación web, asegurando que sea accesible y tenga un rendimiento óptimo.
    
    * Asegurar que la aplicación web sea fácil de desplegar utilizando Docker y sus funciones, como docker-compose, para contenerizar el backend, el frontend y la base de datos MongoDB.

---
---
## Arquitectura utilizada

Para el desarrolo de la aplicacion web para la empresa "AviCar", se tomo un enfoque basado en la disponibilad, confiabilidad y seguridad tanto de los datos como de la aplicacion en si, es por eso que se decicio tomar un camino basado en los servicios de  AWS, que ofrecen una solucion rapida para el problema que puede llegar a ser la disponibilad y escalabilidad de la pagina. La aplicacion se encuentra en una instancia de "EC2", tanto el backend como en frontend se encuentran corriendo en la misma instancia de ec2.

El despliegue a la instancia se facilito gracias a la existencia de Docker, especificamente Docker compose. Fue posible trasladar el backend y el frontend desde el entrono local de desarrollo hasta dicha isntancia sin ninguna complicacion. El uso de docker facilita y asegura un despliegue adecuado y sin tantas complicaciones.

Para el almacenamiento de datos se utilizaron colecciones de mongo, de tipo clave valor. La caracteristica de clave valor facilita la extraccion, busqueda, eliminacion y la añadidura de informacion, ya que existen distintas fromas de filtrar dicha informacion, lo que facilita muchas tareas. Los datos se encuentran en la coleccion de mongo previamente mencionada, a excepcion de las imagenes como tal. Para estas imagenes se hizo uso de la los Buckets de los servicios S3 de aws, que permiten al almacenamiento y sobretodo la disponibilad de imagenes de manera segura y facil. 

Es por eso que la arquitectura de este proyecto se mantiene alatamente ligada a los servicios de AWS y a docker, ya que es gracios a ambos que la aplicacion web logra su objetivo de disponibilad, fiabilidad y seguridad. La Instancia de EC2, se comunica tanto con los buckets, y dentro de esa misma isntancia de encuentra el backend, frontend y la base de datos, que se encargan de interactuar entre ellos dentro de la misma EC2.


---
---
## Descripcion de cada usuario
---
# USUARIO IAM - EC2 

Para generar una instancia de EC2, es conveniente crear primero un usuario de IAM dentro de la cuenta que planeamos usar, de esta forma de permite delegar tareas y trabajar de una manera mas profesional. Para crear un usuario IAM llamado ec2_user, primero, es necesario ingresar a AWS con las credenciales de la cuenta que se planea utilizar. Una vez accedido buscar en la barra de busqueda IAM (Identity and Access Management), y dar click.

![ObtenerLink](https://i.ibb.co/0J5F4Dm/imagen-1-edit-143142890729768.png)

Una vez en IAM, en el panel izquierdo, selecciona "Usuarios" y haz clic en el botón "Crear usuario". En el paso 1, configura el nuevo usuario escribiendo ec2_user como el nombre y seleccionando y seleccionar la opcion "Quiero crear un usuario de IAM", luego ingresar una contraseña para este nuevo usuario.

  ![ObtenerLink](https://i.ibb.co/HGXjnj0/imagen-3-edit-143188746373761.png)

Luego,en el paso 2 se establecen los permisos y alcances de dicho usuario, en este caso seleccionar la casilla de "AmazonEC2FullAcces", y dar click en el boton siguiente. El paso 3 consiste en "Resvisar y crear", si todo se encuentra bien se procede a crear el usuario IAM bajo el nombre ec2_user. 


- revisar y crear
    ![ObtenerLink](https://i.ibb.co/Yf34kcQ/imagen-5-edit-143216657038803.png)
Es importante que antes de crear el usuario existe un 4 paso llamado "Recuperacion de contraseña", en donde se puede guardar un archivo con el nombre de dicho usuario y contraseña. Una vez se pase de este paso es usuario IAM estara creado.
    ![ObtenerLink](https://i.ibb.co/F35S7Sw/imagen-6-edit-143232104064370.png)
    
![ObtenerLink](https://i.ibb.co/RBst4jW/imagen-7-edit-143246549884416.png)
    





* politicas asociadas
El usuario ec2_user ha sido configurado con la política AmazonEC2FullAccess, la cual le otorga permisos completos para gestionar todos los aspectos relacionados con el servicio EC2. Esta política permite al usuario lanzar, detener y terminar instancias EC2, crear y configurar grupos de seguridad, manejar Elastic IPs y otros recursos relacionados con EC2, sin ninguna restriccion. Se eleigio esta politica debido a su naturaleza de control total sobre todos lo relacionado con los servicios EC2. De esta forma el usuario pueda realizar cualquier tarea necesaria sin restricciones en el ámbito de EC2.




# USUARIO IAM - S3

Para utilizar los buckets de S3, es fundamental crear un usuario de IAM dentro de la cuenta de AWS que se va a utilizar. Esto permite delegar tareas y trabajar de manera más estructurada. Primero, se debe crear un usuario IAM llamado s3_user accediendo a AWS con las credenciales adecuadas. Una vez dentro, buscar en la barra de búsqueda IAM (Identity and Access Management) y seleccionarlo.


Dentro de IAM, en el panel izquierdo, seleccionar "Usuarios" y hacer clic en "Crear usuario". En el paso 1, configurar el nuevo usuario con el nombre deseado seleccionando la opción "Quiero crear un usuario de IAM", y asignarle una contraseña.  En el paso 2, establecer los permisos para el usuario, seleccionando la opción "AmazonS3FullAccess", y luego clic en siguiente. El paso 3, "Revisar y crear", permite confirmar y crear el usuario IAM

![ObtenerLink](https://i.ibb.co/HNZVpvz/imagen-4-edit-143205224971724.png)

* politicas asociadas
El usuario s3_user ha sido configurado con la política AmazonS3FullAccess, la cual le otorga permisos completos para gestionar todos los aspectos relacionados con el servicio S3. Esta política permite al usuario crear, eliminar y gestionar buckets y objetos en S3 sin restricciones. Se seleccionó esta política por su capacidad de proporcionar un control total sobre los servicios S3, permitiendo al usuario realizar cualquier tarea necesaria sin limitaciones en este ámbito.




---
---
## Configuracion de servicios
---
# EC2
Una vez creado el usuario IAM, propio de manejar las instancias ec2, se procede a ingresar a dicho usuario y buscar en en el apartado de busqueda "EC2".
- Pagina principal del nuevo usuario creado 
   ![ObtenerLink](https://i.ibb.co/ckSLJ1j/imagen-8-edit-143260337862536.png)

Una vez se encuentre en el apartado de EC2, seleccionar la opcion instancias y luego la opcion "lanzar instancia" ("Launch Instance") . El primer paso es elegir un nombre y un sistema operativo para tu instancia. En este caso se eligio el nombre "vm-mia-01" y el sistema operativo de Ubuntu, especificamente "Ubuntu server 22.04 LTS (HVM), SSD Volume Type" se deja la arquitectura predeterminada de 64 bits y se procede a los tipos de instancias.
- Nombre
   ![ObtenerLink](https://i.ibb.co/YLs2cj7/imagen-9-edit-143304303195332.png)

- Sistema Operativo
   ![ObtenerLink](https://i.ibb.co/XZGvPBQ/IMG-20240626-143030.png)
   
En el apartado de tipos de instancia, se elige la instancia t2.micro, que ofrece 1 vCPU y 1 GB de RAM. Posteriormente, se configura el alamacenamiento de la instancia. En este caso se dejo 30 ya que es el maximo que permite la capa gratuita. Para este proyecto las configuraciones avanzadas se mantuvieron como las predeterminadas.

- almacenamiento
   ![ObtenerLink](https://i.ibb.co/M2gQfqH/imagen-13-edit-143755366803910.png)
   
Tambie es necesario configurar la seguridad de la instancia, para esto se crea una llave y se descarga dicho archivo pem. Es esencial tener cuidado al momento de almacenar dicho archivo ya que es unico y es el que nos permitira luego hacer uso de la instancia. Posteriormente se configura un grupo de seguridad  y se permite el trafico SSH desde cualquier lugar, el trafico HTTPS y el trafico HTTP.


Una vez todas las configuraciones se encuntren realizadas y se asegure que esten correctamente configuradas se procede a crear dicha instancia a traves del boton "lanzar instancia".

   ![ObtenerLink](https://i.ibb.co/27bcn0h/imagen-14-edit-143740622275269.png)



- Vista de la intancia
   ![ObtenerLink](https://i.ibb.co/ZYPg7tS/imagen-15-edit-143781069042598.png)

Una vez la instancia es creada es importante habilitar ciertos puertos de comunicacion. Es por eso que es necesario ir al apartado de seguridad y modificar las reglas de entrada con las siguiente informacion: tipo: "todo el traficos" y orgin "anywhere". Esto permitira que la base de datos y los puertos necesarios no generen un problema al momento de conectarnos con la instancia creada.
   ![ObtenerLink](https://i.ibb.co/LS5w19M/imagen-18-edit-143841719396481.png)
   
- Editar reglas de entrada
   ![ObtenerLink](https://i.ibb.co/yXcgxfd/imagen-17-edit-143830068847475.png)
   
Cuando la instancia esté en estado "running", podrás conectarte a ella utilizando un cliente SSH haciendo uso del PEM integrado.
   ![ObtenerLink](https://i.ibb.co/DDQ0DV6/imagen-20-edit-143870380073449.png)

- Configuraciones Principales
      -  nombre: "vm-mia-01"
      -  SO: "Ubuntu server 22.04 LTS (HVM), SSD Volume Type"
      -  Arquitectura: 64 bits
      -  Almacenamiento: 30 GB
      -  Tipo: t2.micro
      -  Llaves: Uso de .pem

# BUCKETS


Para crear un bucket en AWS S3, primero inicia sesión en la consola de AWS con tus credenciales. Buscar en el apartado de busqueda al servicio S3. Una vez en S3, selecciona "Crear bucket" y procede a configurar los detalles del bucket. 

   
Especifica un nombre único para el bucket y elige la región donde deseas almacenar tus datos, en este caso se uso el nombre: "appweb-202200007-p2". Luego de esto se proceden a establecer las propiedades del bucket, los permisos de acceso y la manera de llevar claves que se utilizara. Es importante tomar en cuenta que para este proyecto es necesario habilitar el hecho de que los elementos del bucket puedan ser vistos por otras personas. 
   ![ObtenerLink](https://i.ibb.co/RSSzFNN/image-4.png)
   
   ![ObtenerLink](https://i.ibb.co/ZJzJ6VQ/image-3.png)

Posteriormente, revisa todas las configuraciones y, si todo está correcto, confirma la creación del bucket. 

   ![ObtenerLink](https://i.ibb.co/1QYZh2R/image-1.png)
   
Una vez completado, el nuevo bucket estará disponible pero aun es necesario agredar algunos cambios a las a las "politicas del bucket", segun las necesidades que se presentaran, es por eso que fue necesario agregar la siguiente informacion en formato json:
   ![ObtenerLink](https://i.ibb.co/Q8nFrN3/image.png)

---
---
# Conclusiones
---
1.  El uso de Docker mejora la eficiencia, la escalabilidad y la fiabilidad de los proyectos. Esto permite desplegar configuraciones complejas con pocos comandos, reduciendo tiempo y esfuerzo, facilta el despligue de las aplicaciones y el uso de las instancias de EC2.

2.  El servicio de EC2 ofrece una gran cantidad de ventajas entre ellas su escalabilidad y flexibilad, se puede adaptar a cualquier necesidad y se posiciona una solucion confiable y facil de manejar al momento de querer ejecutar aplicaciones en la nube.

3.  Los buckets en AWS representan una manera segura y conveniente de trabjar con archivos pesados, teniendo en cuenta que necesitan tener una alta disponibilada para el usuario.


