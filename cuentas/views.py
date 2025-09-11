from django.shortcuts import render, redirect



# Registro 
def registro_view(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        role = request.POST.get("rol")
        #en desarrollo , implementacion con BD
        print(f"Registrado: {username}, Rol: {role}")
        return redirect("home")
    return render(request, "cuenta/registerUsuario.html")


# Login
def login_view(request):
    if request.method == "POST":
        email = request.POST.get("email")
        password = request.POST.get("password")
        role = request.session.get("role")  

        if role == "doctor":
            return redirect("doctor_dashboard")
        elif role == "usuario":
            return redirect("usuario_dashboard")
        
    return render(request, "cuenta/loginUsuario.html")



