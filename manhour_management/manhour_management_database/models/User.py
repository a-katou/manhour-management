from django.db import models

class User(models.Model):
    id          = models.AutoField(primary_key=True)
    user_id     = models.CharField(max_length=10)
    name        = models.CharField(max_length=64)
    mail        = models.CharField(max_length=256)
    role_id     = models.IntegerField()
    comp_id     = models.IntegerField()
    dept_id     = models.IntegerField(null=True)
    create_date = models.DateTimeField()
    create_user = models.CharField(max_length=256)
    update_date = models.DateTimeField()
    update_user = models.CharField(max_length=256)
    delete_flg  = models.CharField(max_length=1)