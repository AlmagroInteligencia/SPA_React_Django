from django.db import models

class Task(models.Model):
    name=models.CharField(max_length=50)
    body=models.TextField(max_length=500)
    
