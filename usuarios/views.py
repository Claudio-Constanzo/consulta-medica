from django.shortcuts import render

def usuarios_view(request):
    return render(request, 'formulario/usuarios.html')