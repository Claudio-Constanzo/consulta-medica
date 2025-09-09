# consulta
Proyecto consulta medica programacion Back End
Paso 1: Descargar aplicacion desde GitHub (ingresar link en el futuro)
Paso 2: Para inicializar el programa abrir cmd, luego ingresar: py manage.py runserver
//NOTA DEL DEV:  Para agregar una aplicacion: py manage.py startapp "nombreApp" y luego agregarla a settings.py en INSTALLED_APPS
Antes de iniciar sesion en el admin, asegurarse de hacer las migraciones: python manage.py makemigrations ----> python manage.py migrate
Para iniciar sesion en el admin: crear superusuario (python manage.py createsuperuser) ingresar nombre de usuario, mail(opcional) y contraseña segun los requisitos de django, luego iniciar sesion.