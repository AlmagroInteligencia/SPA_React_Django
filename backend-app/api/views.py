#from django.shortcuts import render
from django.http.response import JsonResponse
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from .models import Task
import json

class TaskView(View):

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)
    
    def get(self, request, id=0):
        if(id>0):
            tasks=list(Task.objects.filter(id=id).values())
            if(len(tasks)>0):
                task=tasks[0]
                data={'message':'Success','tasks':tasks}
            else:
                data={'message':'Task not found'}  
            return JsonResponse(data) 
        else:
            tasks=list(Task.objects.values())
            if len(tasks)>0:
                data={'message':'Success','tasks':tasks}
            else:
                data={'message':'Task not found'}
            return JsonResponse(data)

    def post(self, request):
        jd=json.loads(request.body)
        Task.objects.create(name=jd['name'],body=jd['body'])
        data={'message':'Success'}
        return JsonResponse(data)

    def put(self, request, id):
        jd=json.loads(request.body)
        tasks=list(Task.objects.filter(id=id).values())
        if(len(tasks)>0):
            task=Task.objects.get(id=id)
            task.name=jd['name']
            task.body=jd['body']
            task.save()
            data={'message':'Success'}
        else:
            data={'message':'Task not found'}  
        return JsonResponse(data) 

    def delete(self, request, id):
        tasks=list(Task.objects.filter(id=id).values())
        if(len(tasks)>0):
            Task.objects.filter(id=id).delete()
            data={'message':'Success'}
        else:
            data={'message':'Task not found'} 
        return JsonResponse(data) 